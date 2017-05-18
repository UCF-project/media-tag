const Assert = require('../utils/assert');
const Type = require('../enums/type');
const PluginUtils = require('../utils/plugin-utils');
const DownloadPlugin = require('../plugins/renderers/download');

/**
 * Class for processing engine.
 *
 * @class      ProcessingEngine (name)
 */
class ProcessingEngine {
	/**
	 * Constructs the object.
	 *
	 * @param      {PluginStore}  pluginStore  The plugin store
	 */
	constructor(pluginStore) {
		Assert.that(pluginStore).not(undefined);

		this.pluginStore = pluginStore;

		/**
		 * Stacks for each media object instances.
		 */
		this.stacks = {};

		/**
		 * Snapshots of each media object's stack.
		 */
		this.snapshots = {};
	}

	/**
	 * Starts a processing over an instance of mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	start(mediaObject) {
		this.fill(mediaObject);
		this.snapshot(mediaObject);
		this.check(mediaObject);
		this.run(mediaObject);
	}

	run(mediaObject) {
		const plugin = this.unstack(mediaObject);

		if (!plugin) {
			return mediaObject; // Maybe emit an event instead ?
		}

		this.process(mediaObject);
		if (plugin.type !== Type.SANITIZER) {
			this.fill(mediaObject);
		}
		this.snapshot(mediaObject);
		this.check(mediaObject);
	}

	/**
	 * Snapshots the current mediaObject plugin stack.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	snapshot(mediaObject) {
		const stackId = mediaObject.getId();

		if (this.stacks[stackId]) {
			const dataStack = [];

			this.stacks[stackId].forEach(plugin => {
				const metaDataObject = {};

				metaDataObject.identifier = plugin.getIdentifier();
				metaDataObject.type = plugin.getType();
				dataStack.push(metaDataObject);
			});
			if (this.snapshots[stackId]) {
				this.snapshots[stackId].push({
					stack: dataStack
				});
			} else {
				this.snapshots[stackId] = [{
					stack: dataStack
				}];
			}
		} else {
			this.snapshots[stackId] = [];
		}
	}

	/**
	 * Fills up the stack of usable plugins on this media object.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	fill(mediaObject) {
		const stack = [];
		const stackId = mediaObject.getId();
		const matchers = this.pluginStore.getPlugins(Type.MATCHER);
		const matchedMatchers = matchers.filter(matcher => {
			return matcher.process(mediaObject);
		});
		const matchedIdentifiers = matchedMatchers.map(matcher => {
			return matcher.getIdentifier();
		});
		const plugins = this.pluginStore.values();

		const matchedPlugins = plugins.filter(plugin => {
			return 	plugin.type !== Type.MATCHER &&
					matchedIdentifiers.includes(plugin.identifier);
		});

		const pluginsByOccurrencies = PluginUtils.filterByOccurrencies(matchedPlugins);

		pluginsByOccurrencies.once.forEach(plugin => {
			if (!this.isStacked(mediaObject, plugin)) {
				stack.push(plugin);
			}
		});

		pluginsByOccurrencies.any.forEach(plugin => {
			if (!this.isStacked(mediaObject, plugin)) {
				stack.push(plugin);
			}
		});

		pluginsByOccurrencies.every.forEach(plugin => {
			stack.push(plugin);
		});

		if (this.stacks[stackId]) {
			this.stacks[stackId].push(...stack);
		} else {
			this.stacks[stackId] = stack;
		}
	}

	/**
	 * Unstacks the top plugin.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	unstack(mediaObject) {
		const stackId = mediaObject.getId();

		if (this.stacks[stackId]) {
			return this.stacks[stackId].pop();
		}
		return null;
	}

	/**
	 * Checks the stack.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	check(mediaObject) {
		const stackId = mediaObject.getId();

		if (this.stacks[stackId].length >= this.STACK_LIMIT) {
			console.error(this.snapshots[stackId]);
			throw new Error('Plugin stack size exceed');
		}

		if (this.snapshots[stackId].length >= this.SNAPSHOT_LIMIT) {
			console.error(this.snapshots[stackId]);
			throw new Error('Plugin snapshots size exceed');
		}

		let rendererCount = 0;

		this.stacks[stackId].forEach(plugin => {
			if (plugin.type === Type.RENDERER) {
				rendererCount++;
			}
		});

		if (rendererCount < 1) {
			this.stacks[stackId].unshift(ProcessingEngine.defaultPlugin);
		}

		if (rendererCount > 1) {
			throw new Error('More of one renderer in the stack');
		}
	}

	/**
	 * Returns the media object to the processing engine.
	 * Every plugin must call this function when their job is done.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	return(mediaObject) {
		this.run(mediaObject);
	}

	/**
	 * Processes the top stack plugin.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const stackId = mediaObject.getId();
		const size = this.stacks[stackId].length;
		const plugin = this.stacks[stackId][size - 1];

		if (plugin) {
			plugin.process(mediaObject);
		} else {
			console.log(this.stacks);
			throw new Error('Impossible to run a undefined plugin');
		}
	}

	/**
	 * Determines if stacked.
	 *
	 * @param      {MediaObject}   mediaObject  The media object
	 * @param      {Plugin}   plugin       The plugin
	 * @return     {boolean}  True if stacked, False otherwise.
	 */
	isStacked(mediaObject, plugin) {
		const stackId = mediaObject.getId();

		if (this.stacks[stackId]) {
			if (this.stacks[stackId].includes(plugin)) {
				return true;
			}
		}
		return false;
	}
}

/**
 * Maximum stack size.
 */
ProcessingEngine.STACK_LIMIT = 100;

/**
 * Maximum snapshots count.
 */
ProcessingEngine.SNAPSHOT_LIMIT = 100;

/**
 * Default rendering plugin.
 */
ProcessingEngine.defaultPlugin = new DownloadPlugin(
	'<p> MediaTag cannot find a plugin able to renderer your content </p>',
	'Download');

module.exports = ProcessingEngine;

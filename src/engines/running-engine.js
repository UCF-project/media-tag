const Type = require('../enums/type');
const PluginStore = require('../stores/plugin-store');
const DownloadPlugin = require('../plugins/renderers/download');

/**
 * Class for running engine.
 *
 * @class      RunningEngine (name)
 */
class RunningEngine {

	/**
	 * Starts a processing over an instance of mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	static start(mediaObject) {
		const lastPlugin = RunningEngine.unstack(mediaObject);

		if (lastPlugin) {
			if (lastPlugin.type !== Type.SANITIZER) {
				RunningEngine.fill(mediaObject);
			}
		} else {
			RunningEngine.fill(mediaObject);
		}
		RunningEngine.snapshot(mediaObject);
		RunningEngine.check(mediaObject);
		RunningEngine.run(mediaObject);
	}

	/**
	 * Snapshots the current mediaObject plugin stack.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	static snapshot(mediaObject) {
		const stackId = mediaObject.getId();

		if (RunningEngine.stacks[stackId]) {
			const dataStack = [];

			RunningEngine.stacks[stackId].forEach(plugin => {
				const metaDataObject = {};

				metaDataObject.identifier = plugin.getIdentifier();
				metaDataObject.type = plugin.getType();
				dataStack.push(metaDataObject);
			});
			if (RunningEngine.snapshots[stackId]) {
				RunningEngine.snapshots[stackId].push({
					stack: dataStack
				});
			} else {
				RunningEngine.snapshots[stackId] = [{
					stack: dataStack
				}];
			}
		} else {
			RunningEngine.snapshots[stackId] = [];
		}
	}

	/**
	 * Fills up the stack of usable plugins on this media object.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	static fill(mediaObject) {
		const stack = [];
		const stackId = mediaObject.getId();
		const matchers = PluginStore.getPlugins(Type.MATCHER);
		const matchedMatchers = matchers.filter(matcher => {
			return matcher.process(mediaObject);
		});
		const matchedIdentifiers = matchedMatchers.map(matcher => {
			return matcher.getIdentifier();
		});
		const plugins = PluginStore.values();

		const matchedPlugins = plugins.filter(plugin => {
			return 	plugin.type !== Type.MATCHER &&
					matchedIdentifiers.includes(plugin.identifier);
		});

		const pluginsByOccurrencies = PluginStore.filterByOccurrencies(matchedPlugins);

		pluginsByOccurrencies.once.forEach(plugin => {
			if (!RunningEngine.isStacked(mediaObject, plugin)) {
				stack.push(plugin);
			}
		});

		pluginsByOccurrencies.any.forEach(plugin => {
			if (!RunningEngine.isStacked(mediaObject, plugin)) {
				stack.push(plugin);
			}
		});

		pluginsByOccurrencies.every.forEach(plugin => {
			stack.push(plugin);
		});

		if (RunningEngine.stacks[stackId]) {
			RunningEngine.stacks[stackId].push(...stack);
		} else {
			RunningEngine.stacks[stackId] = stack;
		}
	}

	/**
	 * Unstacks the top plugin.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	static unstack(mediaObject) {
		const stackId = mediaObject.getId();

		if (RunningEngine.stacks[stackId]) {
			return RunningEngine.stacks[stackId].pop();
		}
		return null;
	}

	/**
	 * Checks the stack.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	static check(mediaObject) {
		const stackId = mediaObject.getId();

		if (RunningEngine.stacks[stackId].length >= RunningEngine.STACK_LIMIT) {
			console.error(RunningEngine.snapshots[stackId]);
			throw new Error('Plugin stack size exceed');
		}

		if (RunningEngine.snapshots[stackId].length >= RunningEngine.SNAPSHOT_LIMIT) {
			console.error(RunningEngine.snapshots[stackId]);
			throw new Error('Plugin snapshots size exceed');
		}

		let rendererCount = 0;

		RunningEngine.stacks[stackId].forEach(plugin => {
			if (plugin.type === Type.RENDERER) {
				rendererCount++;
			}
		});

		if (rendererCount < 1) {
			RunningEngine.stacks[stackId].unshift(RunningEngine.defaultPlugin);
		}

		if (rendererCount > 1) {
			throw new Error('More of one renderer in the stack');
		}
	}

	/**
	 * Returns the media object to the running engine.
	 * Every plugin must call this function when their job is done.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	static return(mediaObject) {
		RunningEngine.start(mediaObject);
	}

	/**
	 * Runs the top stack plugin.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	static run(mediaObject) {
		const stackId = mediaObject.getId();
		const size = RunningEngine.stacks[stackId].length;
		const plugin = RunningEngine.stacks[stackId][size - 1];

		if (plugin) {
			plugin.process(mediaObject);
		} else {
			console.log(RunningEngine.stacks);
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
	static isStacked(mediaObject, plugin) {
		const stackId = mediaObject.getId();

		if (RunningEngine.stacks[stackId]) {
			if (!RunningEngine.stacks[stackId].includes(plugin)) {
				return false;
			}
		} else {
			return false;
		}

		return true;
	}
}

/**
 * Stacks for each media object instances.
 */
RunningEngine.stacks = {};

/**
 * Maximum stack size.
 */
RunningEngine.STACK_LIMIT = 100;

/**
 * Snapshots of each media object's stack.
 */
RunningEngine.snapshots = {};

/**
 * Maximum snapshots count.
 */
RunningEngine.SNAPSHOT_LIMIT = 100;

/**
 * Default rendering plugin.
 */
RunningEngine.defaultPlugin = new DownloadPlugin(
	'<p> MediaTag cannot find a plugin able to renderer your content </p>',
	'Download');

module.exports = RunningEngine;

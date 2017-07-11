const Assert = require('../utils/assert');
const Type = require('../enums/type');
const PluginUtils = require('../utils/plugin-utils');
// const DownloadPlugin = require('../plugins/renderers/download');
const Permission = require('../enums/permission');

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

		/**
		 * Stats of each plugin execution.
		 */
		this.stats = [];

		/**
		 * Default rendering plugin.
		 */
		this.defaultPlugin = null;
	}

	/**
	 * Configures the processing engine.
	 *
	 * @param      {Configuration}  configuration  The configuration
	 */
	configure(configuration) {
		this.configuration = configuration;
	}

	/**
	 * Starts a processing over an instance of mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	start(mediaObject) {
		mediaObject.state = 'processing';
		this.routine(mediaObject);
		this.run(mediaObject);
	}

	/**
	 * Runs a processing engine step on mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @return     {?MediaObject}
	 */
	run(mediaObject) {
		const plugin = this.stackTop(mediaObject);

		if (!plugin) {
			mediaObject.state = 'processed';
			return mediaObject;
		}

		if (this.configuration) {
			if (this.configuration.getPermission(plugin.identifier) === Permission.FORBIDDEN) {
				const stat = this.stats[mediaObject.getId()];

				if (!stat.skipped) {
					stat.skipped = [];
				}
				stat.skipped.push(plugin.identifier);
				this.return(mediaObject);
			} else {
				plugin.process(mediaObject);
			}
		} else {
			plugin.process(mediaObject);
		}
	}

	/**
	 * Routine
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	routine(mediaObject) {
		this.fill(mediaObject);
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

		const stack = this.substack(mediaObject, pluginsByOccurrencies);

		if (this.stacks[stackId]) {
			this.stacks[stackId].push(...stack);
		} else {
			this.stacks[stackId] = stack;
		}
	}

	substack(mediaObject, pluginsByOccurrencies) {
		const stack = [];

		pluginsByOccurrencies.once.forEach(plugin => {
			if (this.configuration) {
				if (this.configuration.getPermission(plugin.identifier) === Permission.FORBIDDEN) {
					this.skip(mediaObject, plugin);
				} else if (!this.isStacked(mediaObject, plugin)) {
					stack.push(plugin);
				}
			} else if (!this.isStacked(mediaObject, plugin)) {
				stack.push(plugin);
			}
		});

		pluginsByOccurrencies.any.forEach(plugin => {
			if (this.configuration) {
				if (this.configuration.getPermission(plugin.identifier) === Permission.FORBIDDEN) {
					this.skip(mediaObject, plugin);
				} else if (!this.isStacked(mediaObject, plugin)) {
					stack.push(plugin);
				}
			} else if (!this.isStacked(mediaObject, plugin)) {
				stack.push(plugin);
			}
		});

		pluginsByOccurrencies.every.forEach(plugin => {
			if (this.configuration) {
				if (this.configuration.getPermission(plugin.identifier) === Permission.FORBIDDEN) {
					this.skip(mediaObject, plugin);
				} else {
					stack.push(plugin);
				}
			} else {
				stack.push(plugin);
			}
		});

		return stack;
	}

	/**
	 * Updates skipped plugins.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @param      {Plugin}  plugin       The plugin
	 */
	skip(mediaObject, plugin) {
		let stat = this.stats[mediaObject.getId()];

		if (stat) {
			if (!stat.skipped) {
				stat.skipped = [];
			}
		} else {
			stat = {
				skipped: []
			};
		}
		stat.skipped.push(plugin.identifier);
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
	 * Gets stack top plugin.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @return     {?Plugin}
	 */
	stackTop(mediaObject) {
		const stackId = mediaObject.getId();

		if (this.stacks[stackId]) {
			return this.stacks[stackId][this.stacks[stackId].length - 1];
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

		if (this.stacks[stackId].length >= ProcessingEngine.STACK_LIMIT) {
			console.error(this.snapshots[stackId]);
			throw new Error('Plugin stack size exceed');
		}

		if (this.snapshots[stackId].length >= ProcessingEngine.SNAPSHOT_LIMIT) {
			console.error(this.snapshots[stackId]);
			throw new Error('Plugin snapshots size exceed');
		}

		let rendererCount = 0;

		this.stacks[stackId].forEach(plugin => {
			if (plugin.type === Type.RENDERER) {
				rendererCount++;
			}
		});

		if (rendererCount > 1) {
			console.error(this.snapshots[stackId]);
			throw new Error('More of one renderer in the stack');
		}

		if (this.stacks[stackId].length === 0 && !this.stats[stackId][Type.RENDERER]) {
			if (!this.defaultPlugin) {
				throw new Error('No default plugin assignated');
			}
			this.stacks[stackId].unshift(this.defaultPlugin);
		}
	}

	/**
	 * Returns the media object to the processing engine.
	 * Every plugin must call this function when their job is done.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	return(mediaObject) {
		const stackId = mediaObject.getId();
		const plugin = this.unstack(mediaObject);

		if (!plugin) {
			return;
		}

		try {
			if (!this.stats[stackId]) {
				this.stats[stackId] = {};
			}

			if (this.stats[stackId][plugin.type]) {
				this.stats[stackId][plugin.type] += 1;
			} else {
				this.stats[stackId][plugin.type] = 1;
			}
		} catch (err) {
			console.error(err, this.snapshots[stackId]);
		}

		// console.log(
		// 	plugin.identifier,
		// 	this.snapshots[stackId][this.snapshots[stackId].length - 1],
		// 	this.stats[stackId]);

		if (this.stacks[stackId].length === 0 && plugin.type === Type.RENDERER) {
			this.run(mediaObject);
		} else if (plugin.type !== Type.SANITIZER) {
			this.fill(mediaObject);
		}
		this.snapshot(mediaObject);
		this.check(mediaObject);
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

	setDefaultPlugin(plugin) {
		this.defaultPlugin = plugin;
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

module.exports = ProcessingEngine;

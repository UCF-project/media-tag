const Assert = require('../utils/assert');
const Configuration = require('../core/configuration');
const Type = require('../enums/type');
const PluginUtils = require('../utils/plugin-utils');
const DownloadPlugin = require('../plugins/renderers/download');
const Store = require('../stores/store');
const StackStore = require('./components/stack-store');
const PluginStack = require('./components/plugin-stack');
const Stack = require('./components/stack');

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
		this.stacks = new StackStore();

		/**
		 * Snapshots of each media object's stack.
		 */
		this.snapshots = new StackStore();

		/**
		 * Stats of each plugin execution.
		 */
		this.stats = new Store();

		/**
		 * Configuration.
		 */
		this.configuration = new Configuration({});

		/**
		 * Default rendering plugin.
		 */
		this.defaultPlugin = new DownloadPlugin(
			'<p> MediaTag cannot find a plugin able to render your content </p>');

		/**
		 * The max size of a plugin stack.
		 */
		this.STACK_SIZE = 50;

		/**
		 * The max count of snapshots.
		 */
		this.SNAPSHOTS_LIMIT = 50;
	}

	/**
	 * Gets key from mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @return     {number}
	 */
	key(mediaObject) {
		return mediaObject.getId();
	}

	/**
	 * Configures the processing engine.
	 *
	 * @param      {Configuration}  configuration  The configuration
	 */
	configure(configuration) {
		this.configuration = configuration;
		if (configuration.processingEngine) {
			Object.keys(configuration.processingEngine).forEach(key => {
				if (key === 'defaultPlugin') {
					this[key] = configuration.getDefaultPlugin();
				} else {
					this[key] = key;
				}
			});
		}
	}

	/**
	 * Determines if configured.
	 *
	 * @return     {boolean}  True if configured, False otherwise.
	 */
	isConfigured() {
		return Boolean(this.configuration);
	}

	/**
	 * Prepares mediaObject with some stuff.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	prepare(mediaObject) {
		// TODO Handle this stuff properly by test it...
		(() => {
			mediaObject.return = () => {
				return this.return(mediaObject);
			};
			mediaObject.state = 'processing';
		})();
		const key = mediaObject.getId();

		this.stacks.store(key, new PluginStack());
		this.snapshots.store(key, new Stack());
		this.stats.store(key, {});
	}

	/**
	 * Starts a processing over an instance of mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	start(mediaObject) {
		this.prepare(mediaObject);
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
		const key = this.key(mediaObject);
		const plugin = this.stacks.top(key);

		if (!plugin) {
			return this.end(mediaObject);
		}

		if (this.configuration) {
			if (this.configuration.isAllowed(plugin.identifier)) {
				if (!plugin.process) {
					console.warn('FALSY PLUGIN', plugin);
				}
				plugin.process(mediaObject);
			} else {
				this.skip(mediaObject, plugin);
				this.return(mediaObject);
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
		const key = this.key(mediaObject);
		const stack = this.stacks.get(key).clone();

		this.snapshots.stack(key, stack);
	}

	/**
	 * Fills up the stack of usable plugins on this media object.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	fill(mediaObject) {
		const key = this.key(mediaObject);
		const plugins = this.pluginStore.values();
		const matchedIdentifiers = plugins.filter(plugin => {
			return plugin.getType() === Type.MATCHER;
		}).filter(matcher => {
			return matcher.process(mediaObject);
		}).map(matcher => {
			return matcher.getIdentifier();
		});
		const matchedPlugins = plugins.filter(plugin => {
			return plugin.getType() !== Type.MATCHER;
		}).filter(plugin => {
			return matchedIdentifiers.includes(plugin.getIdentifier());
		});
		const pbo = PluginUtils.filterByOccurrencies(matchedPlugins);

		Object.keys(pbo).forEach(occurrence => {
			pbo[occurrence].forEach(plugin => {
				if (this.configuration.isAllowed(plugin.getIdentifier())) {
					if (this.stacks.get(key).isStackable(plugin)) {
						this.stacks.stack(key, plugin);
					}
				} else {
					this.skip(mediaObject, plugin);
				}
			});
		});
	}

	/**
	 * Updates skipped plugins.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @param      {Plugin}  plugin       The plugin
	 */
	skip(mediaObject, plugin) {
		const key = mediaObject.getId();
		let stat = this.stats.get(key);

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
	 * Checks the stack.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	check(mediaObject) {
		const key = mediaObject.getId();

		if (this.stacks.length(key) >= this.STACK_SIZE) {
			console.error('SNAPSHOTS', this.snapshots.get(key));
			throw new Error('Plugin stack size exceed');
		}

		if (this.snapshots.length(key) >= this.SNAPSHOT_LIMIT) {
			console.error('SNAPSHOTS', this.snapshots.get(key));
			throw new Error('Plugin snapshots count exceed');
		}

		let rendererCount = 0;

		this.stacks.plugins(key).forEach(plugin => {
			if (plugin.type === Type.RENDERER) {
				rendererCount++;
			}
		});

		if (rendererCount > 1) {
			console.error('SNAPSHOTS', this.snapshots.get(key));
			throw new Error('More of one renderer in the stack');
		}

		/**
		 * To ends correctly, the stack have to be empty and only one renderer
		 * have to be executed on a mediaObject instance.
		 */
		if (this.stacks.length(key) === 0 && !this.stats.get(key)[Type.RENDERER]) {
			if (!this.defaultPlugin) {
				throw new Error('No default plugin assignated');
			}
			this.stacks.stack(key, this.defaultPlugin);
		}
	}

	/**
	 * Returns the media object to the processing engine.
	 * Every plugin must call this function when their job is done.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	return(mediaObject) {
		const key = mediaObject.getId();
		const plugin = this.stacks.unstack(key);

		if (!plugin) {
			return this.end(mediaObject);
		}

		if (!plugin) {
			return;
		}

		try {
			if (!this.stats.get(key)) {
				this.stats.store(key, {});
			}

			if (this.stats.get(key)[plugin.type]) {
				this.stats.get(key)[plugin.type] += 1;
			} else {
				this.stats.get(key)[plugin.type] = 1;
			}
		} catch (err) {
			console.error(err, this.snapshots.get(key));
		}

		/**
		 * These types are ineffective on attributes contained
		 * inside a mediaObject instance then we don't need to
		 * refill the stack.
		 */
		if (
			plugin.type !== Type.SANITIZER &&
			plugin.type !== Type.RENDERER
		) {
			this.fill(mediaObject);
		}
		this.snapshot(mediaObject);
		this.check(mediaObject);
		this.run(mediaObject);
	}

	end(mediaObject) {
		mediaObject.status = 'processed';
		return mediaObject;
	}

	setDefaultPlugin(plugin) {
		this.defaultPlugin = plugin;
	}
}

module.exports = ProcessingEngine;

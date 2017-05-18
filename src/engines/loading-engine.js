const Assert = require('../utils/assert');
const Permission = require('../enums/permission');

/**
 * Class for loading engine.
 *
 * @class      LoadingEngine (name)
 * @bundbleable false
 */
class LoadingEngine {
	/**
	 * Constructs the object.
	 *
	 * @param      {PluginStore}  pluginStore     The plugin store
	 * @param      {UriStore}  uriStore        The uri store
	 * @param      {MatchingEngine}  matchingEngine  The matching engine
	 * @param      {ProcessingEngine}  processingEngine   The processing engine
	 */
	constructor(pluginStore, uriStore, matchingEngine, processingEngine) {
		Assert.that(pluginStore).not(undefined);
		Assert.that(uriStore).not(undefined);
		Assert.that(matchingEngine).not(undefined);
		Assert.that(processingEngine).not(undefined);

		this.pluginStore = pluginStore;
		this.uriStore = uriStore;
		this.matchingEngine = matchingEngine;
		this.processingEngine = processingEngine;
	}
	/**
	 * Configures the loading engine.
	 *
	 * @param      {Configuration}  configuration  The configuration
	 */
	configure(configuration) {
		this.configuration = configuration;
	}

	/**
	 * Loads active plugin parts by media object analysis.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @return     {MediaObject}  Processed MediaObject.
	 */
	load(mediaObject) {
		const relations = this.matchingEngine.start(mediaObject);
		const allowedRelations = this.filterRelations(relations);
		const uris = Object.keys(allowedRelations).map(identifier => {
			return allowedRelations[identifier];
		});

		try {
			require(uris, this.register.bind(this, mediaObject));
		} catch (err) {
			if (require === undefined) {
				console.warn(err);
				return this.processingEngine.start(mediaObject);
			}
			throw err;
		}
	}

	/**
	 * Register dynamically loaded plugins.
	 */
	register() {
		const mediaObject = arguments[0];

		if (!mediaObject) {
			throw new Error('No MediaObject at registration');
		}

		for (const PluginClass of arguments) {
			if (PluginClass === mediaObject) {
				continue;
			}
			const pluginInstance = new PluginClass();

			if (!this.pluginStore.isStored(pluginInstance)) {
				this.pluginStore.store(pluginInstance);
			}
		}

		this.processingEngine.start(mediaObject);
	}

	/**
	 * Filters relations according to configuration.
	 *
	 * @param      {Object}  relations  The relations
	 * @return     {Object}  Filtered relations.
	 */
	filterRelations(relations) {
		const result = relations;

		if (this.configuration) {
			const data = this.configuration.getData();

			Object.keys(data).forEach(identifier => {
				switch (data[identifier]) {
					case Permission.REQUIRED:
						result[identifier] = this.uriStore.get(identifier);
						break;
					case Permission.FORBIDDEN:
						delete result[identifier];
						break;
					case Permission.ALLOWED:
						break;
					default:
						throw new Error('Unknown configuration permission');
				}
			});
		}
		return result;
	}
}

module.exports = LoadingEngine;


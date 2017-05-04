const PluginStore = require('../stores/plugin-store');
const Permission = require('../enums/permission');
const UriStore = require('../stores/uri-store');
const MatchingEngine = require('./matching-engine');
const RunningEngine = require('./running-engine');

/**
 * Class for loading engine.
 *
 * @class      LoadingEngine (name)
 */
class LoadingEngine {
	/**
	 * Configures the loading engine.
	 *
	 * @param      {Configuration}  configuration  The configuration
	 */
	static configure(configuration) {
		LoadingEngine.configuration = configuration;
	}

	static load(mediaObject) {
		const relations = MatchingEngine.start(mediaObject);

		const allowedRelations = LoadingEngine.filterRelations(relations);

		// console.warn(allowedRelations);

		const uris = Object.keys(allowedRelations).map(identifier => {
			return allowedRelations[identifier];
		});

		require(uris, LoadingEngine.register.bind(null, mediaObject));
	}

	static register() {
		const mediaObject = arguments[0];

		if (!mediaObject) {
			throw new Error('No MediaObject at registration');
		}

		for (const PluginClass of arguments) {
			if (PluginClass === mediaObject) {
				continue;
			}
			const pluginInstance = new PluginClass();

			if (!PluginStore.isStored(pluginInstance)) {
				PluginStore.store(pluginInstance);
			}
		}

		RunningEngine.start(mediaObject);
	}

	/**
	 * Filters relations according to configuration.
	 *
	 * @param      {Object}  relations  The relations
	 * @return     {Object}  Filtered relations.
	 */
	static filterRelations(relations) {
		const result = relations;
		const data = LoadingEngine.configuration.getData();

		Object.keys(data).forEach(identifier => {
			switch (data[identifier]) {
				case Permission.REQUIRED:
					result[identifier] = UriStore.get(identifier);
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
		return result;
	}
}

module.exports = LoadingEngine;


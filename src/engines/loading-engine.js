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

		const uris = Object.keys(allowedRelations).map(identifier => {
			return allowedRelations[identifier];
		});

		require(uris, (plugins, mediaObject) => {
			plugins.forEach(plugin => {
				PluginStore.store(plugin);
			});
			RunningEngine.start(mediaObject);
		});
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


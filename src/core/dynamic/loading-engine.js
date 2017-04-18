/* global define */

/**
 * All 'require' references are from requirejs here.
 */
define((require, exports, module) => {
	const FilterManager = require('../filter-manager');
	const PluginManager = require('../plugin-manager');
	const FilterUri 	= require('./filters');
	const PluginUri 	= require('./plugins');
	const Orchestrator	= require('../orchestrator');

	/**
	 * Class for loading engine.
	 *
	 * @class      LoadingEngine (name)
	 */
	class LoadingEngine {
		/**
		 * Returns a array filled up with filters names which loading is needed.
		 *
		 * @param      {<type>}  mediaObject  The mediaObject
		 * @return     {Array}   { description_of_the_return_value }
		 */

		static findRequiredFilterUris(mediaObject) {
			/**
			 * Returns an array with all needed filter paths to load.
			 */
			return Orchestrator.findFilterIdentifiersToRegister(mediaObject).map(identifier => {
				/**
				 * Transform logic's identifiers into filter keys.
				 */
				return identifier.toUpperCase().replace('-', '_');
			}).map(key => {
				/**
				 * Find each filter to load with their paths.
				 */
				return FilterUri[key];
			});
		}

		/**
		 * Returns a array filled up with plugins names which loading is needed.
		 *
		 * @param      {<type>}  mediaObject  The mediaObject
		 * @return     {Array}   { description_of_the_return_value }
		 */

		static findRequiredPluginUris(mediaObject) {
			/**
			 * Returns an array with all needed plugin paths to load.
			 */
			return Orchestrator.findPluginIdentifiersToRegister(mediaObject).map(identifier => {
				/**
				 * Transform logic's identifiers into plugin keys.
				 */
				return identifier.toUpperCase().replace('-', '_');
			}).map(key => {
				/**
				 * Find each plugin to load with their paths.
				 */
				return PluginUri[key];
			});
		}

		/**
		 * Returns a concatenation of filters and plugins functions.
		 *
		 * @param      {<type>}  mediaObject  The mediaObject
		 * @return     {Array}   { description_of_the_return_value }
		 */

		static findRequiredModuleUris(mediaObject) {
			const filterPaths = LoadingEngine.findRequiredFilterUris(mediaObject);
			const pluginPaths = LoadingEngine.findRequiredPluginUris(mediaObject);

			return filterPaths.concat(pluginPaths);
		}

		static getForbiddenKeys(configuration) {
			const keys = [];

			configuration.getForbbidenUris().forEach(uri => {
				for (const key of Object.keys(FilterUri)) {
					if (FilterUri[key] === uri) {
						keys.push(key);
					}
				}
				for (const key of Object.keys(PluginUri)) {
					if (PluginUri[key] === uri) {
						keys.push(key);
					}
				}
			});

			return keys;
		}

		static getForbiddenIdentifiers(configuration) {
			const keys = LoadingEngine.getForbiddenKeys(configuration);
			const identifiers = [];

			keys.forEach(key => {
				identifiers.push(key.toLowerCase().replace('_', '-'));
			});

			return identifiers;
		}

		/* TODO Maybe change something in the way to chose modules to load and
		 * the way to control which module is wished.
		 *
		 * Requires dynamically only needed plugins.
		 *
		 * @param      {<type>}  mediaObject  The mediaObject
		 * @param      {<type>}  node        The node
		 */
		static load(mediaObject, configuration, callback) {
			let modules = [];

			LoadingEngine.processCallback = callback;

			if (configuration) {
				const filterSet = new Set();
				const pluginSet = new Set();

				for (const filterUri of configuration.getAllowedFilterUris()) {
					filterSet.add(filterUri);
				}

				for (const filterUri of LoadingEngine.findRequiredFilterUris(mediaObject)) {
					if (configuration.getForbbidenUris().some(element => {
						return element === filterUri;
					})) {
						continue;
					}
					filterSet.add(filterUri);
				}

				for (const pluginUri of configuration.getAllowedPluginUris()) {
					pluginSet.add(pluginUri);
				}

				for (const pluginUri of LoadingEngine.findRequiredPluginUris(mediaObject)) {
					if (configuration.getForbbidenUris().some(element => {
						return element === pluginUri;
					})) {
						continue;
					}
					pluginSet.add(pluginUri);
				}

				Array.prototype.push.apply(modules, Array.from(filterSet));
				Array.prototype.push.apply(modules, Array.from(pluginSet));
			} else {
				modules = LoadingEngine.findRequiredModuleUris(mediaObject);
			}

			Orchestrator.forbiddenIdentifiers = LoadingEngine.getForbiddenIdentifiers(configuration);

			/**
			 * RequireJS handles internaly multiple same ressource require calls.
			 */
			require(modules, LoadingEngine.registerModules.bind(null, mediaObject));
		}

		/**
		 * Does the registration of selected filters and plugins.
		 */
		static registerModules() {
			for (let i = 0; i < arguments.length; i++) {
				const filterNames = Object.keys(FilterUri);
				const pluginNames = Object.keys(PluginUri);

				/**
				 * Does verification on parameters to decide if is a filter or a plugin
				 * without paying attention of parameter order.
				 */

				if (filterNames.some(name => {
					return arguments[i].identifier === name.toLowerCase().replace('_', '-');
				})) {
					FilterManager.register(arguments[i]);
				}

				if (pluginNames.some(name => {
					return arguments[i].identifier === name.toLowerCase().replace('_', '-');
				})) {
					PluginManager.register(arguments[i]);
				}
			}
			LoadingEngine.run(arguments[0]);
		}

		/**
		 * Runs mediaTag on a node.
		 *
		 * @param      {<type>}  node    The node
		 */
		static run(node) {
			if (LoadingEngine.processCallback) {
				LoadingEngine.processCallback(node);
			}
		}
	}

	LoadingEngine.processCallback = undefined;

	module.exports = LoadingEngine;
});

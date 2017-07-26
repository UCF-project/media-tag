define(function (require, exports, module) {/* global Promise */

const ProcessingEngine = require('../engines/processing-engine');
const MatchingEngine = require('../engines/matching-engine');
const PluginStore = require('../stores/plugin-store');
const UriStore = require('../stores/uri-store');
const MediaTag = require('./media-tag');
const Loader = require('./loader');

/**
 * MediaTagAPI variant for asynchronous module loading.
 *
 * @class      MediaTagAPI (name)
 * @param      {Array<Element>|Element}  elements  The elements
 */
function MediaTagAPI(elements) {
	if (!Array.isArray(elements)) {
		elements = [elements];
	}

	/**
	 * Removes undefined elements.
	 */
	elements = elements.filter(element => {
		return element;
	});

	MediaTagAPI.loadConfigurations(elements).then(() => {
		return MediaTagAPI.start(elements);
	}).then(() => {
		console.log('Media-Tag finishes its jobs');
	});
}

/**
 * Starts Media-Tag processing on identified elements.
 *
 * @param      {Array<Element>}  elements  The elements
 * @return     {Promise}
 */
MediaTagAPI.start = elements => {
	const activeEngine = MediaTagAPI.loadingEngine || MediaTagAPI.processingEngine;

	return Promise.all(elements.map(element => {
		return new Promise(resolve => {
			if (element.hasAttribute('src') ||
				element.hasAttribute('sources')) {
				const mediaTag = new MediaTag(element, MediaTagAPI.processingEngine);
				const mediaObjects = mediaTag.mediaObjects;

				mediaObjects.forEach(mediaObject => {
					element.mediaObject = mediaObject;
					mediaObject.loader = MediaTagAPI.loader;
					resolve(activeEngine.start(mediaObject));
				});
			} else {
				resolve(console.warn(`Element skipped because has no sources`, element));
			}
		});
	}));
};

/**
 * Updates the media tag with the configuration.
 *
 * @param      {Configuration}  configuration  The configuration
 */
MediaTagAPI.update = configuration => {
	/**
	 * Update only if the configuration origin is different ...
	 * TODO : Update this rule to if changes is detected in a configuration
	 */
	if (configuration.origin !== 'store') {
		configuration.getPlugins().forEach(plugin => {
			/**
			 * Finds existing plugins to try to update their properties, methods ...
			 * WARNING : Existing plugins still conserve their prototypes.
			 * Configuration function will overwrite instances and avoid same name prototype ones.
			 * Configuration is always an overwrite or an addition of properties in this context.
			 */
			const existingPlugins = MediaTagAPI.pluginStore.getPlugins(plugin.getType()).filter(storedPlugin => {
				return	storedPlugin.getIdentifier() === plugin.getIdentifier() &&
						storedPlugin.getType() === plugin.getType();
			});
			if (existingPlugins.length > 1) {
				throw new Error('More than one plugin matched to update for this pass');
			} else if (existingPlugins.length === 1) {
				existingPlugins.forEach(existingPlugin => {
					Object.keys(plugin).forEach(key => {
						existingPlugin[key] = plugin[key];
					});
				});
			} else {
				MediaTagAPI.pluginStore.store(plugin);
			}
		});
	}
};

/**
 * Configures the media tag api.
 *
 * @param      {Configuration}  configuration  The configuration
 * @return     {Configuration}
 */
MediaTagAPI.configure = configuration => {
	const activeEngine = MediaTagAPI.loadingEngine ||
		MediaTagAPI.processingEngine;

	activeEngine.configure(configuration);
};

/**
 * Loads configurations.
 *
 * @param      {<type>}  elements  The elements
 * @return     {<type>}  { description_of_the_return_value }
 */
MediaTagAPI.loadConfigurations = elements => {
	const configurationLoaders = elements.filter(element => {
		return element.hasAttribute('configuration');
	}).map(element => {
		return element.getAttribute('configuration');
	}).reduce((urls, url) => {
		if (!urls.includes(url)) {
			urls.push(url);
		}
		return urls;
	}, []).map(url => {
		return MediaTagAPI.loader.configuration(url);
	});

	return Promise.all(configurationLoaders).then(configurations => {
		const dependencyUrls = [];

		configurations.forEach(configuration => {
			MediaTagAPI.update(configuration);
			MediaTagAPI.configure(configuration);
			if (configuration.dependencies) {
				configuration.dependencies.forEach(url => {
					if (!dependencyUrls.includes(url)) {
						dependencyUrls.push(url);
					}
				});
			}
		});
		return Promise.all(dependencyUrls.map(url => {
			return MediaTagAPI.loader.script(url);
		}));
	});
};

/**
 * PluginStore instance.
 */
MediaTagAPI.pluginStore = MediaTagAPI.pluginStore || new PluginStore();

/**
 * UriStore instance.
 */
MediaTagAPI.uriStore = MediaTagAPI.uriStore || new UriStore('../plugins');

/**
 * ProcessingEngine instance.
 */
MediaTagAPI.processingEngine = MediaTagAPI.processingEngine || new ProcessingEngine(MediaTagAPI.pluginStore);

/**
 * MatchingEngine instance.
 */
MediaTagAPI.matchingEngine = MediaTagAPI.matchingEngine || new MatchingEngine(MediaTagAPI.pluginStore, MediaTagAPI.uriStore);

/**
 * No loading engine instance : Plugins must loaded by presets.
 */
MediaTagAPI.loadingEngine = null;

/**
 * Loader with history system to prevent multiple same loadings.
 */
MediaTagAPI.loader = new Loader();

module.exports = MediaTagAPI;

});

/* global Promise */

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
	if (!(elements instanceof Array)) {
		elements = [elements];
	}

	const activeEngine = MediaTagAPI.loadingEngine || MediaTagAPI.processingEngine;
	const urls = MediaTagAPI.findConfigurationUrls(elements);
	const loads = MediaTagAPI.loadConfigurations(urls);

	loads.forEach(load => {
		load.then(configuration => {
			MediaTagAPI.configure(configuration);
			MediaTagAPI.update(configuration);
		});
	});

	Promise.all(loads).then(() => {
		return Promise.all(elements.map(element => {
			return new Promise(resolve => {
				if (element.hasAttribute('src') || element.hasAttribute('sources')) {
					if (!element.mediaObject) {
						const mediaTag = new MediaTag(element, MediaTagAPI.processingEngine);
						const mediaObjects = mediaTag.mediaObjects;

						mediaObjects.forEach(mediaObject => {
							element.mediaObject = mediaObject;
							mediaObject.loader = MediaTagAPI.loader;
							resolve(activeEngine.start(mediaObject));
						});
					} else if (element.mediaObject.state === 'idle') {
						resolve(activeEngine.start(element.mediaObject));
					}
				} else {
					resolve(console.warn(`Element skipped because has no sources`, element));
				}
			});
		}));
	}).then(() => {/* No operation */}).catch(err => {
		console.error(err);
	});
}

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
 * Finds configurations urls inside media-tag elements.
 *
 * @param      {Array<NodeElement>}  elements  The elements
 * @return     {Array<string>}
 */
MediaTagAPI.findConfigurationUrls = elements => {
	return elements.filter(element => {
		return element.hasAttribute('configuration');
	}).map(element => {
		return element.getAttribute('configuration');
	}).reduce((array, current) => {
		if (!array.includes(current)) {
			array.push(current);
		}
		return array;
	}, []);
};

/**
 * Loads configurations.
 *
 * @param      {Array<string>}  urls    The urls
 * @return     {Array<Promise>}
 */
MediaTagAPI.loadConfigurations = urls => {
	return urls.map(url => {
		return MediaTagAPI.loader.configuration(url);
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

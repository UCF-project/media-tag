const ProcessingEngine = require('../engines/processing-engine');
const MatchingEngine = require('../engines/matching-engine');
const PluginStore = require('../stores/plugin-store');
const UriStore = require('../stores/uri-store');
const MediaTag = require('./media-tag');
/**
 * MediaTagAPI variant for asynchronous module loading.
 *
 * @class      MediaTagAPI (name)
 * @param      {Array<Element>|Element}  elements  The elements
 */
function MediaTagAPI(elements) {
	if (elements instanceof Array) {
		const mediaObjects = [];

		elements.forEach(element => {
			if (element.mediaObject) {
				mediaObjects.push(element.mediaObject);
			} else {
				const mediaTag = new MediaTag(element, MediaTagAPI.processingEngine);
				mediaTag.mediaObjects.forEach(mediaObject => {
					mediaObjects.push(MediaTagAPI.processingEngine.start(mediaObject));
				});
			}
		});

		return mediaObjects;
	}

	const element = elements;
	const mediaTag = new MediaTag(element, MediaTagAPI.processingEngine);

	mediaTag.mediaObjects.forEach(mediaObject => {
		MediaTagAPI.processingEngine.start(mediaObject);
	});
	// MediaTagAPI.processingEngine.start(mediaTag.activeMediaObject);
}

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

module.exports = MediaTagAPI;

const ProcessingEngine = require('../engines/processing-engine');
const MatchingEngine = require('../engines/matching-engine');
const PluginStore = require('../stores/plugin-store');
const UriStore = require('../stores/uri-store');
const Parser = require('./parser');
const MediaObject = require('./media-object');

/**
 * MediaTag variant for asynchronous module loading.
 *
 * @class      MediaTag (name)
 * @param      {Array<Element>|Element}  elements  The elements
 */
function MediaTag(elements) {
	if (elements instanceof Array) {
		const mediaObjects = [];

		elements.forEach(element => {
			if (element.mediaObject) {
				mediaObjects.push(element.mediaObject);
			} else {
				mediaObjects.push(MediaTag.start(element));
			}
		});

		return mediaObjects;
	}

	const element = elements;

	return MediaTag.start(element);
}

/**
 * Creates a media object.
 *
 * @param      {Element}       element  The element
 * @return     {MediaObject}
 */
MediaTag.createMediaObject = element => {
	const mediaObject = new MediaObject(element);
	const properties = Parser.parse(mediaObject);

	mediaObject.setProperties(properties);
	return mediaObject;
};

/**
 * Start processing elements to try to renderer it.
 *
 * @param      {Element}  element  The element
 * @return     {MediaObject}  Processed media object.
 */
MediaTag.start = element => {
	const mediaObject = MediaTag.createMediaObject(element);

	return MediaTag.processingEngine.start(mediaObject);
};

/**
 * PluginStore instance.
 */
MediaTag.pluginStore = MediaTag.pluginStore || new PluginStore();

/**
 * UriStore instance.
 */
MediaTag.uriStore = MediaTag.uriStore || new UriStore('../plugins');

/**
 * ProcessingEngine instance.
 */
MediaTag.processingEngine = MediaTag.processingEngine || new ProcessingEngine(MediaTag.pluginStore);

/**
 * MatchingEngine instance.
 */
MediaTag.matchingEngine = MediaTag.matchingEngine || new MatchingEngine(MediaTag.pluginStore, MediaTag.uriStore);

/**
 * No loading engine instance : Plugins must loaded by presets.
 */
MediaTag.loadingEngine = null;

module.exports = MediaTag;

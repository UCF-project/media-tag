/* global define */
const Parser = require('../../parser');
const MediaObject = require('../../media-object');
const LoadingEngine = require('../../engines/loading-engine');
const MatchingEngine = require('../../engines/matching-engine');
const PluginStore = require('../../stores/plugin-store');
const UriStore = require('../../stores/uri-store');

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

	MediaTag.start(element);
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
 */
MediaTag.start = element => {
	const mediaObject = MediaTag.createMediaObject(element);

	if ((typeof (define) !== 'undefined' && define !== null) && (define.amd !== null)) {
		LoadingEngine.load(mediaObject);
	}
};

MediaTag.setMap = MatchingEngine.setMap;
MediaTag.configure = LoadingEngine.configure;

MediaTag.PluginStore = PluginStore;
MediaTag.UriStore = UriStore;

module.exports = MediaTag;

const Parser = require('../../parser');
const MediaObject = require('../../media-object');
// const LoadingEngine = require('../../engines/loading-engine');
const MatchingEngine = require('../../engines/matching-engine');
const RunningEngine = require('../../engines/running-engine');
const PluginStore = require('../../stores/plugin-store');
const UriStore = require('../../stores/uri-store');

/**
 * { function_description }
 *
 * @class      MediaTag (name)
 * @param      {<type>}  elements  The elements
 * @return     {Array}   { description_of_the_return_value }
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
 * @param      {<type>}       element  The element
 * @return     {MediaObject}  { description_of_the_return_value }
 */
MediaTag.createMediaObject = element => {
	const mediaObject = new MediaObject(element);
	const properties = Parser.parse(mediaObject);

	mediaObject.setProperties(properties);
	return mediaObject;
};

MediaTag.start = element => {
	const mediaObject = MediaTag.createMediaObject(element);

	// if ((typeof (define) !== 'undefined' && define !== null) && (define.amd !== null)) {
	// 	LoadingEngine.load(mediaObject);
	// }

	RunningEngine.start(mediaObject);
};

MediaTag.setMap = MatchingEngine.setMap;
// MediaTag.configure = LoadingEngine.configure;

MediaTag.PluginStore = PluginStore;
MediaTag.UriStore = UriStore;

module.exports = MediaTag;

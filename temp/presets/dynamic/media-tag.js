define(function (require, exports, module) {const LoadingEngine = require('../../engines/loading-engine');
const MediaTag = require('./media-tag-uris');

/**
 * MediaTag is prepared for dynamic loading all features.
 */

/**
 * Start processing elements to try to renderer it.
 *
 * @param      {Element}  element  The element
 */
MediaTag.start = element => {
	const mediaObject = MediaTag.createMediaObject(element);

	MediaTag.loadingEngine.load(mediaObject);
};

/**
 * LoadingEngine instance.
 */
MediaTag.loadingEngine = MediaTag.loadingEngine || new LoadingEngine(
	MediaTag.pluginStore,
	MediaTag.uriStore,
	MediaTag.matchingEngine,
	MediaTag.processingEngine);

module.exports = MediaTag;

});

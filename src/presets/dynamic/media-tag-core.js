const MediaTag = require('../../core/media-tag');
const LoadingEngine = require('../../engines/loading-engine');

/**
 * Modify the media tag core to enable dynamic plugin loading.
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

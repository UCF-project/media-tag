const ImageMatcher = 		require('../plugins/matchers/renderers/image');
const AudioMatcher = 		require('../plugins/matchers/renderers/audio');
const VideoMatcher = 		require('../plugins/matchers/renderers/video');
const PdfMatcher = 			require('../plugins/matchers/renderers/pdf');
const DashMatcher = 		require('../plugins/matchers/renderers/dash');
const DownloadMatcher = 	require('../plugins/matchers/renderers/download');
const CryptoMatcher = 		require('../plugins/matchers/filters/crypto');
const ClearKeyMatcher = 	require('../plugins/matchers/filters/clear-key');
const MediaObjectMatcher =	require('../plugins/matchers/sanitizers/media-object');

const MediaTag = 			require('../core/media-tag-api');

/**
 * Store every matchers to detect when an job part plugin should be loaded
 * and should be applied on a media object. So it works for static and dynamic
 * media tag mode.
 */

MediaTag.pluginStore.store(new ImageMatcher());
MediaTag.pluginStore.store(new AudioMatcher());
MediaTag.pluginStore.store(new VideoMatcher());
MediaTag.pluginStore.store(new PdfMatcher());
MediaTag.pluginStore.store(new DashMatcher());
MediaTag.pluginStore.store(new DownloadMatcher());
MediaTag.pluginStore.store(new CryptoMatcher());
MediaTag.pluginStore.store(new ClearKeyMatcher());
MediaTag.pluginStore.store(new MediaObjectMatcher());

module.exports = MediaTag;

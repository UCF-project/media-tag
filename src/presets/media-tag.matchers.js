/**
 * Renderer matchers
 */
const ImageMatcher = 		require('../plugins/image/matcher');
const AudioMatcher = 		require('../plugins/audio/matcher');
const VideoMatcher = 		require('../plugins/video/matcher');
const PdfMatcher = 			require('../plugins/pdf/matcher');
const DashMatcher = 		require('../plugins/dash/matcher');
const DownloadMatcher = 	require('../plugins/download/matcher');

/**
 * Filter matchers
 */
const CryptoMatcher = 		require('../plugins/crypto/matcher');
const ClearKeyMatcher = 	require('../plugins/clear-key/matcher');

/**
 * Sanitizer matchers
 */
const MediaObjectMatcher =	require('../plugins/media-object/matcher');

/**
 * Media Tag API
 */
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

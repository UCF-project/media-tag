/**
 * Import media-tag core without any features.
 *
 * @type       {Function}
 */
const MediaTag = require('../core/static/media-tag');
const matchingEngineMap = require('../maps/matching-engine');
// const Configuration = require('../configuration');

MediaTag.setMap(matchingEngineMap);
// MediaTag.configure(new Configuration({}));

/**
 * Import every plugins.
 */
const ImageMatcher = require('../plugins/matchers/renderers/image');
const AudioMatcher = require('../plugins/matchers/renderers/audio');
const VideoMatcher = require('../plugins/matchers/renderers/video');
const PdfMatcher = require('../plugins/matchers/renderers/pdf');
const DashMatcher = require('../plugins/matchers/renderers/dash');
const DownloadMatcher = require('../plugins/matchers/renderers/download');

const CryptoMatcher = require('../plugins/matchers/filters/crypto');
const ClearKeyMatcher = require('../plugins/matchers/filters/clear-key');

const MediaObjectMatcher = require('../plugins/matchers/sanitizers/media-object');

const ImagePlugin = require('../plugins/renderers/image');
const AudioPlugin = require('../plugins/renderers/audio');
const VideoPlugin = require('../plugins/renderers/video');
const PdfPlugin = require('../plugins/renderers/pdf');
const DashPlugin = require('../plugins/renderers/dash');
const DownloadPlugin = require('../plugins/renderers/download');

const CryptoFilter = require('../plugins/filters/crypto');
const ClearKeyFilter = require('../plugins/filters/clear-key');

const MediaObjectSanitizer = require('../plugins/sanitizers/media-object');

/**
 * Import every algorithms for CryptoFilter.
 *
 * @type       {Function}
 */
const Salsa20Poly1305Algorithm = require('../algorithms/salsa20poly1305');

/**
 * Store every modules/plugins inside various stores.
 */
MediaTag.PluginStore.store(new ImageMatcher());
MediaTag.PluginStore.store(new AudioMatcher());
MediaTag.PluginStore.store(new VideoMatcher());
MediaTag.PluginStore.store(new PdfMatcher());
MediaTag.PluginStore.store(new DashMatcher());
MediaTag.PluginStore.store(new DownloadMatcher());

MediaTag.PluginStore.store(new CryptoMatcher());
MediaTag.PluginStore.store(new ClearKeyMatcher());

MediaTag.PluginStore.store(new MediaObjectMatcher());

MediaTag.PluginStore.store(new ImagePlugin());
MediaTag.PluginStore.store(new AudioPlugin());
MediaTag.PluginStore.store(new VideoPlugin());
MediaTag.PluginStore.store(new PdfPlugin());
MediaTag.PluginStore.store(new DashPlugin());
MediaTag.PluginStore.store(new DownloadPlugin());

MediaTag.PluginStore.store(new CryptoFilter());
MediaTag.PluginStore.store(new ClearKeyFilter());

MediaTag.PluginStore.store(new MediaObjectSanitizer());

CryptoFilter.FunctionStore.store('salsa20poly1305', Salsa20Poly1305Algorithm);

module.exports = MediaTag;

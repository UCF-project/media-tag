/**
 * Import media-tag core with matcher already registrated.
 *
 * @type       {Function}
 */
const MediaTag = require('../media-tag-matchers');

/**
 * Import every job/active part plugins.
 */
const ImagePlugin = require('../../plugins/renderers/image');
const AudioPlugin = require('../../plugins/renderers/audio');
const VideoPlugin = require('../../plugins/renderers/video');
const PdfPlugin = require('../../plugins/renderers/pdf');
const DashPlugin = require('../../plugins/renderers/dash');
const DownloadPlugin = require('../../plugins/renderers/download');

const CryptoFilter = require('../../plugins/filters/crypto');
const ClearKeyFilter = require('../../plugins/filters/clear-key');

const MediaObjectSanitizer = require('../../plugins/sanitizers/media-object');

/**
 * Register every job/active part plugins.
 */

MediaTag.pluginStore.store(new ImagePlugin());
MediaTag.pluginStore.store(new AudioPlugin());
MediaTag.pluginStore.store(new VideoPlugin());
MediaTag.pluginStore.store(new PdfPlugin());
MediaTag.pluginStore.store(new DashPlugin());
MediaTag.pluginStore.store(new DownloadPlugin());

MediaTag.pluginStore.store(new CryptoFilter());
MediaTag.pluginStore.store(new ClearKeyFilter());

MediaTag.pluginStore.store(new MediaObjectSanitizer());

/**
 * Import every algorithms for CryptoFilter.
 */
const Salsa20Poly1305Algorithm = require('../../algorithms/salsa20poly1305');

/**
 * Store every algorithms inside CryptoFilter.
 */
CryptoFilter.functionStore.store('salsa20poly1305', Salsa20Poly1305Algorithm);

module.exports = MediaTag;

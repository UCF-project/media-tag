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
const CryptpadAlgorithm = require('../../algorithms/cryptpad');

/**
 * Store every algorithms inside CryptoFilter.
 */
CryptoFilter.functionStore.store('salsa20poly1305', Salsa20Poly1305Algorithm);
CryptoFilter.functionStore.store('cryptpad', CryptpadAlgorithm);

/**
 * WAY 1 : CRYPTO CAN DEFINE HIS OWN ALLOWED MEDIA TYPES (TYPE/MIME/...)
 * IT FORBID PLUGIN USAGE BY INFORMATION LACK (NO METADATA ARE SET IF MEDIA TYPE IS NOT ALLOWED)
 */

MediaTag.CryptoFilter = CryptoFilter;

/**
 * Allowed mime types that have to be set for a rendering after a decryption.
 *
 * @type       {Array}
 */
const allowedMediaTypes = [
	'image/png',
	'image/jpeg',
	'image/jpg',
	'image/gif',
	'audio/mp3',
	'audio/ogg',
	'audio/wav',
	'audio/webm',
	'video/mp4',
	'video/ogg',
	'video/webm',
	'application/pdf',
	'application/dash+xml',
	'download'
];

MediaTag.CryptoFilter.setAllowedMediaTypes(allowedMediaTypes);

/**
 * WAY 2 : DEFINE A CCONFIGURATION TO FORBID SOME PLUGINS
 * IT FORBID PLUGIN USAGE INSIDE PROCESSING ENGINE
 */

const Configuration = require('../../core/configuration');
const Permission = require('../../enums/permission');
const Identifier = require('../../enums/identifier');

const configuration = new Configuration();

// configuration.setPermission(Identifier.IMAGE, Permission.FORBIDDEN);

MediaTag.processingEngine.configure(configuration);

module.exports = MediaTag;

/**
 * Enumerations
 */
// const Permission = require('../enums/permission');
// const Identifier = require('../enums/identifier');

/**
 * Configuration
 */
// const Configuration = require('../core/configuration');

/**
 * Algorithms
 */
const Salsa20Poly1305Algorithm	= require('../plugins/crypto/algorithms/salsa20poly1305');
const CryptpadAlgorithm 		= require('../plugins/crypto/algorithms/cryptpad');

/**
 * Renderers
 */
const ImagePlugin 		= require('../plugins/image/renderer');
const AudioPlugin 		= require('../plugins/audio/renderer');
const VideoPlugin 		= require('../plugins/video/renderer');
const PdfPlugin 		= require('../plugins/pdf/renderer');
const DashPlugin 		= require('../plugins/dash/renderer');
const DownloadPlugin 	= require('../plugins/download/renderer');

/**
 * Filters
 */
const CryptoFilter		= require('../plugins/crypto/filter');
const ClearKeyFilter	= require('../plugins/clear-key/filter');

/**
 * Sanitizers
 */
const MediaObjectSanitizer = require('../plugins/media-object/sanitizer');

/**
 * Media Tag API with matchers.
 *
 * @type       {Function}
 */
const MediaTag = require('./media-tag.matchers');

/**
 * Configuration of the pdfjs viewer as main render for pdf plugin.
 */
MediaTag.PdfPlugin = PdfPlugin;
MediaTag.PdfPlugin.viewer = '/pdfjs/web/viewer.html';

/**
 * Store every algorithms inside CryptoFilter.
 */
CryptoFilter.functionStore.store('salsa20poly1305', Salsa20Poly1305Algorithm);
CryptoFilter.functionStore.store('cryptpad', CryptpadAlgorithm);

/**
 * Set default plugin for MediaTag.processingEngine
 */
MediaTag.processingEngine.setDefaultPlugin(
	new DownloadPlugin(`<p> Media-Tag can't process your content </p>`, 'Download'));

/**
 * WAY 1 : CRYPTO CAN DEFINE HIS OWN ALLOWED MEDIA TYPES (TYPE/MIME/...)
 * IT FORBID PLUGIN USAGE BY INFORMATION LACK (NO METADATA ARE SET IF MEDIA TYPE IS NOT ALLOWED)
 */

MediaTag.CryptoFilter = CryptoFilter;

/**
 * Allowed mime types that have to be set for a rendering after a decryption.
 */

MediaTag.CryptoFilter.setAllowedMediaTypes([
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
]);

/**
 * You can define a configuration to dissable some plugins.
 * If a renderer is forbidden, the processing engine must fall in it default case.
 *
 * @type       {Configuration}
 */

// const configuration = new Configuration({});

// configuration.setPermission(Identifier.IMAGE, Permission.FORBIDDEN);
// configuration.setPermission(Identifier.AUDIO, Permission.FORBIDDEN);
// configuration.setPermission(Identifier.VIDEO, Permission.FORBIDDEN);
// configuration.setPermission(Identifier.PDF, Permission.FORBIDDEN);
// configuration.setPermission(Identifier.DASH, Permission.FORBIDDEN);
// configuration.setPermission(Identifier.DOWNLOAD, Permission.FORBIDDEN);
// MediaTag.processingEngine.configure(configuration);

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

module.exports = MediaTag;

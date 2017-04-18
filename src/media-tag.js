
// Why is this the only file with old style imports?

// We can't use module.exports = or webpack will not export the global
// library var correctly.
// https://github.com/webpack/webpack/issues/706
// So the following does not work:
// module.exports = MediaTag;
// And because of that we can't use module.exports mixed with imports
// https://github.com/webpack/webpack/issues/4039

const MediaTag = require('./core/media-tag');

// Plugins

// Plugin :: Image
const ImagePlugin = require('./plugins/image');

MediaTag.registerPlugin(ImagePlugin);

// Plugin :: Video
const VideoPlugin = require('./plugins/video');

MediaTag.registerPlugin(VideoPlugin);

// Plugin :: Audio
const AudioPlugin = require('./plugins/audio');

MediaTag.registerPlugin(AudioPlugin);

// Plugin :: Dash
const DashPlugin = require('./plugins/dash');

MediaTag.registerPlugin(DashPlugin);

// Plugin :: Pdf
const PdfPlugin = require('./plugins/pdf');

MediaTag.registerPlugin(PdfPlugin);

// Filter :: Default
const DefaultFilter = require('./filters/default');

MediaTag.registerFilter(DefaultFilter);

// Filter :: Crypto
const CryptoFilter = require('./filters/crypto');

MediaTag.registerFilter(CryptoFilter);

// Filter :: ClearKey
const ClearKeyFilter = require('./filters/clear-key');

MediaTag.registerFilter(ClearKeyFilter);

/**
 * Just require guidelines with all modules logics.
 *
 * @type       {Function}
 */
const Guidelines = require('./orchestration/guidelines/all');

module.exports = MediaTag;


// Why is this the only file with old style imports?

// We can't use export default or webpack will not export the global
// library var correctly.
// https://github.com/webpack/webpack/issues/706
// So the following does not work:
// export default MediaTag;
// And because of that we can't use module.exports mixed with imports
// https://github.com/webpack/webpack/issues/4039

const MediaTag = require('./core/media-tag').default;

// Plugins

// Plugin :: Image
const ImagePlugin = require('./plugins/image').default;

MediaTag.registerPlugin(ImagePlugin);

// Plugin :: Video
const VideoPlugin = require('./plugins/video').default;

MediaTag.registerPlugin(VideoPlugin);

// Plugin :: Audio
const AudioPlugin = require('./plugins/audio').default;

MediaTag.registerPlugin(AudioPlugin);

// Plugin :: Dash
const DashPlugin = require('./plugins/dash').default;

MediaTag.registerPlugin(DashPlugin);

// Plugin :: Pdf
const PdfPlugin = require('./plugins/pdf').default;

MediaTag.registerPlugin(PdfPlugin);

// Filter :: Default
const DefaultFilter = require('./filters/default').default;

MediaTag.registerFilter(DefaultFilter);

// Filter :: Crypto
const CryptoFilter = require('./filters/crypto').default;

MediaTag.registerFilter(CryptoFilter);

// Filter :: ClearKey
const ClearKeyFilter = require('./filters/clear-key').default;

MediaTag.registerFilter(ClearKeyFilter);

module.exports = MediaTag;

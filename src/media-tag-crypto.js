
// Media Tag for XWiki CryptPad
// This version contains only image and crypto plugins

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

// Filter :: Crypto
const CryptoFilter = require('./filters/crypto').default;

MediaTag.registerFilter(CryptoFilter);

module.exports = MediaTag;

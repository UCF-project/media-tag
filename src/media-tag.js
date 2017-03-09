
// Why is this the only file with old style imports?

// We can't use export default or webpack will not export the global
// library var correctly. So the following does not work:
// export default MediaTag;
// And because of that we can't use module.exports mixed with imports
// https://github.com/webpack/webpack/issues/4039

const MediaTag = require('./core/media-tag').default;

// Plugins

// Plugin :: Image
const ImagePlugin = require('./plugins/image').default;

MediaTag.registerPlugin(ImagePlugin);

// Plugin :: Crypto
const CryptoPlugin = require('./plugins/crypto').default;

MediaTag.registerPlugin(CryptoPlugin);

module.exports = MediaTag;

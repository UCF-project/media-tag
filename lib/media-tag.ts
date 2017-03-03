// import enc from './enc/enc';

// export {enc};


// Core
import MediaTag from './core/media-tag';

// Plugins

// Plugin :: Image
import ImagePlugin from './plugins/image';
MediaTag.registerPlugin(ImagePlugin);

// Plugin :: Crypto
import CryptoPlugin from './plugins/crypto';
MediaTag.registerPlugin(CryptoPlugin);

export default MediaTag;

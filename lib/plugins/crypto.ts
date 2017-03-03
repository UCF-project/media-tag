import MediaObject from '../core/media-object';

class CryptoPlugin {

	static typeCheck(mediaObj: MediaObject) {
		return mediaObj.hasAttribute('data-crypto-key');
	}
};

export default CryptoPlugin;

define(function (require, exports, module) {const Identifier = 	require('../../../enums/identifier');
const Type = 		require('../../../enums/type');
const Matcher =		require('../../matcher');

class CryptoMatcher extends Matcher {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.CRYPTO, Type.FILTER);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		return	mediaObject.hasAttribute('data-crypto-key');
	}
}

module.exports = CryptoMatcher;

});

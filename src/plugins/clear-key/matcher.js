const Identifier = 	require('../../enums/identifier');
const Type = 		require('../../enums/type');
const Matcher =		require('../matcher');

class ClearKeyMatcher extends Matcher {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.CLEAR_KEY, Type.FILTER);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		return	mediaObject.hasAttribute('data-clear-key');
	}
}

module.exports = ClearKeyMatcher;

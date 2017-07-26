const Identifier = 	require('../../enums/identifier');
const Type = 		require('../../enums/type');
const Matcher =		require('../matcher');

class MediaObjectMatcher extends Matcher {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.MEDIA_OBJECT, Type.SANITIZER);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		return	mediaObject.hasAttribute('src') &&
				mediaObject.hasAttribute('data-type');
	}
}

module.exports = MediaObjectMatcher;

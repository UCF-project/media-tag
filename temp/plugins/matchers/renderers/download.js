define(function (require, exports, module) {const Identifier = 	require('../../../enums/identifier');
const Type = 		require('../../../enums/type');
const Matcher =		require('../../matcher');

class ImageMatcher extends Matcher {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.DOWNLOAD, Type.RENDERER);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'download';
	}
}

module.exports = ImageMatcher;

});

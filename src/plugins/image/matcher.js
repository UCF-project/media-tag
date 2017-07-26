const Identifier = 	require('../../enums/identifier');
const Type = 		require('../../enums/type');
const Matcher =		require('../matcher');

class ImageMatcher extends Matcher {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.IMAGE, Type.RENDERER);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const regexExtensions = /^png|jpg|jpeg|gif|svg[+]xml$/;
		const regexMimes = /^image[/](png|jpg|jpeg|gif|svg[+]xml)$/;

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'image' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	}
}

module.exports = ImageMatcher;

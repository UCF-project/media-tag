const Identifier = 	require('../../../enums/identifier');
const Type = 		require('../../../enums/type');
const Matcher =		require('../../matcher');

class PdfMatcher extends Matcher {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.PDF, Type.RENDERER);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const regexExtensions = new RegExp('^pdf$');
		const regexMimes = new RegExp('^application/pdf$');

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'application' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	}
}

module.exports = PdfMatcher;

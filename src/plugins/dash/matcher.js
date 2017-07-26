const Identifier = 	require('../../enums/identifier');
const Type = 		require('../../enums/type');
const Matcher =		require('../matcher');

class DashMatcher extends Matcher {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.DASH, Type.RENDERER);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const regexExtensions = /^dash[+]xml$/;
		const regexMimes = /^application[/]dash[+]xml$/;

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'application' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	}
}

module.exports = DashMatcher;

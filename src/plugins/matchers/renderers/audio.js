const Identifier = 	require('../../../enums/identifier');
const Type = 		require('../../../enums/type');
const Matcher =		require('../../matcher');

class AudioMatcher extends Matcher {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.AUDIO, Type.RENDERER);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const regexExtensions = new RegExp('^mp3|ogg|webm|wav|mpeg$');
		const regexMimes = new RegExp('^audio/(mp3|ogg|webm|wav)$');

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'audio' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	}
}

module.exports = AudioMatcher;

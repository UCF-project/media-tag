const Identifier = 	require('../../../enums/identifier');
const Type = 		require('../../../enums/type');
const Matcher =		require('../../matcher');

class VideoMatcher extends Matcher {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.VIDEO, Type.RENDERER);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const regexExtensions = new RegExp('^mp4|ogg|webm$');
		const regexMimes = new RegExp('^video/(mp4|ogg|webm)$');

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'video' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	}
}

module.exports = VideoMatcher;

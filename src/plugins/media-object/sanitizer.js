const Sanitizer =	require('../sanitizer');
const Identifier = 	require('../../enums/identifier');

class MediaObjectSanitizer extends Sanitizer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.MEDIA_OBJECT);
	}

	/**
	 * Job to process on mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		mediaObject.return();
	}
}

module.exports = MediaObjectSanitizer;

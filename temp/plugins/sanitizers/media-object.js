define(function (require, exports, module) {const Sanitizer =	require('../sanitizer');
const Identifier = 	require('../../enums/identifier');
const MediaTag = 	require('../../core/media-tag-api');

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
		// TODO Add a library to sanitize content.
		MediaTag.processingEngine.return(mediaObject);
	}
}

module.exports = MediaObjectSanitizer;

});

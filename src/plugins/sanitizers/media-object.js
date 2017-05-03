const Sanitizer =	require('../sanitizer');
const Identifier = 	require('../../enums/identifier');
const RunningEngine = require('../../engines/running-engine');

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
		console.log('Some stuff to sanitize media object');
		RunningEngine.return(mediaObject);
	}
}

module.exports = MediaObjectSanitizer;

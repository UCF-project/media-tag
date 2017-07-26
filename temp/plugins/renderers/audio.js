define(function (require, exports, module) {/* global document */
const Renderer =	require('../renderer');
const Identifier = 	require('../../enums/identifier');
const MediaTag = 	require('../../core/media-tag-api');

class AudioRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.AUDIO);
	}

	/**
	 * Job to realise to render an audio with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const element = document.createElement('audio');

		element.setAttribute('src', mediaObject.getAttribute('src'));
		element.setAttribute('controls', true);
		mediaObject.utilsSetAllDataAttributes(element);
		mediaObject.replaceContents([element]);

		MediaTag.processingEngine.return(mediaObject);
	}
}

module.exports = AudioRenderer;

});

/* global document */
const Renderer =		require('../renderer');
const Identifier = 	require('../../enums/identifier');

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
		mediaObject.utilsSetAllDataAttributes(element);
		mediaObject.replaceContents([element]);
	}
}

module.exports = AudioRenderer;

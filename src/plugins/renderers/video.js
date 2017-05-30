/* global document */
const Renderer =		require('../renderer');
const Identifier = 	require('../../enums/identifier');

class VideoRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.VIDEO);
	}

	/**
	 * Job to realise to render a video with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const element = document.createElement('video');

		element.setAttribute('src', mediaObject.getAttribute('src'));
		element.setAttribute('controls', true);
		mediaObject.utilsSetAllDataAttributes(element);
		mediaObject.replaceContents([element]);
	}
}

module.exports = VideoRenderer;

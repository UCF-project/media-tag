/* global document */
const Renderer =	require('../renderer');
const Identifier = 	require('../../enums/identifier');
const MediaTag = 	require('../../core/media-tag');

class ImageRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.IMAGE);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const element = document.createElement('img');

		element.setAttribute('src', mediaObject.getAttribute('src'));
		mediaObject.utilsSetAllDataAttributes(element);
		mediaObject.replaceContents([element]);

		MediaTag.processingEngine.return(mediaObject);
	}
}

module.exports = ImageRenderer;

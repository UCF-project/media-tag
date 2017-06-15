/* global document, PDFJS */
const Renderer =	require('../renderer');
const Identifier = 	require('../../enums/identifier');
const MediaTag = 	require('../../core/media-tag');

class PdfRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.PDF);
	}

	/**
	 * Job to realise to render a pdf with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		// Get the pdf url
		const url = mediaObject.getAttribute('src');
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.height = '100vw';
        iframe.width = '100%';

        //mediaObject.utilsSetAllDataAttributes(iframe);
		mediaObject.replaceContents([iframe]);
        MediaTag.processingEngine.return(mediaObject);
        return;
	}
}

module.exports = PdfRenderer;

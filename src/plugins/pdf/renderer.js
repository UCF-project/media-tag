/* global document, XMLHttpRequest */
const Renderer =	require('../renderer');
const Identifier = 	require('../../enums/identifier');

const Mode = {
	PDFJS: 'pdfjs',
	DEFAULT: 'default'
};

class PdfRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.PDF);
		this.viewer = PdfRenderer.viewer;
		this.mode = PdfRenderer.mode;
	}

	/**
	 * Job to realise to render a pdf with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const url = mediaObject.getAttribute('src');
		const iframe = document.createElement('iframe');

		/**
		 * Default dimention for the iframe if nothing is specified.
		 */
		if (!mediaObject.getAttribute('data-attr-width')) {
			iframe.setAttribute('width', '100%');
		}
		if (!mediaObject.getAttribute('data-attr-height')) {
			iframe.setAttribute('height', document.body.scrollHeight);
		}

		/**
		 * When no viewer is set, the pdf is rendered by the browser.
		 */
		if (!this.viewer) {
			this.mode = Mode.DEFAULT;
		}

		switch (this.mode) {
			case Mode.PDFJS: {
				const viewerUrl = `${this.viewer}?file=${url}`;
				const xhr = new XMLHttpRequest();

				xhr.onload = () => {
					if (xhr.status < 400) {
						iframe.src = viewerUrl;
					} else {
						console.warn(`The pdfjs viewer has not been found ...
							The browser viewer will be used by default`);
						iframe.src = `${url}`;
					}
				};
				xhr.open('HEAD', viewerUrl, true);
				xhr.send();

				break;
			}
			default: {
				iframe.src = `${url}`;
			}
		}

		mediaObject.utilsSetAllDataAttributes(iframe);
		mediaObject.replaceContents([iframe]);

		iframe.onload = () => {
			mediaObject.return();
		};
	}
}

/**
 * Viewer for pdfjs render.
 */
PdfRenderer.viewer = null;

/**
 * Render mode.
 */
PdfRenderer.mode = Mode.PDFJS;

module.exports = PdfRenderer;

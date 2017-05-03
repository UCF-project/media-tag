/* global document, XMLHttpRequest */
const FileSaver =	require('file-saver');
const Renderer =	require('../renderer');
const Identifier = 	require('../../enums/identifier');

class DownloadRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.DOWNLOAD);
		this.message = 	'<p>' +
						'MediaTag hasn\'t found the best renderer for your source, ' +
						'please can download the content by clicking the button below' +
						'</p>';
	}

	/**
	 * Job to realise to render a dash with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const container = document.createElement('div');
		const button = document.createElement('button');

		container.innerHTML = this.message;
		button.innerHTML = 'Download';

		button.onclick = () => {
			const xhr = new XMLHttpRequest();
			const src = mediaObject.getAttribute('src');

			xhr.open('GET', src, true);
			xhr.responseType = 'blob';
			xhr.onload = () => {
				const blob = xhr.response;
				if (blob) {
					FileSaver.saveAs(blob);
				}
			};
			xhr.send();
		};

		container.appendChild(button);

		mediaObject.utilsSetAllDataAttributes(container);
		mediaObject.replaceContents([container]);
	}
}

module.exports = DownloadRenderer;

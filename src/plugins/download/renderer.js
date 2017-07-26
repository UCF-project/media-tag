/* global document, XMLHttpRequest, saveAs, File */
const Renderer =	require('../renderer');
const Identifier = 	require('../../enums/identifier');

class DownloadRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor(message, buttonMessage) {
		super(Identifier.DOWNLOAD);
		this.message = 	message;
		this.buttonMessage = buttonMessage || 'Download';
	}

	/**
	 * Job to realise to render a dash with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const button = document.createElement('button');

		button.innerHTML = this.buttonMessage;

		button.onclick = () => {
			const xhr = new XMLHttpRequest();
			const src = mediaObject.getAttribute('src');

			xhr.open('GET', src, true);
			xhr.responseType = 'blob';
			xhr.onload = () => {
				const blob = xhr.response;
				if (blob) {
					if (mediaObject.name) {
						saveAs(blob, mediaObject.name);
					} else if (mediaObject.getAttribute('data-attr-type')) {
						const mime = mediaObject.getAttribute('data-attr-type');
						const ar = mime.split('/');
						const file = new File([blob], `download.${ar[1] || 'txt'}`, {type: mime});
						saveAs(file);
					} else {
						saveAs(blob);
					}
				}
			};
			xhr.send();
		};

		mediaObject.utilsSetAllDataAttributes(button);
		mediaObject.replaceContents([button]);
		mediaObject.return();
	}
}

module.exports = DownloadRenderer;

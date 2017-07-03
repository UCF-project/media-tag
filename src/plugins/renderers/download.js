/* global document, XMLHttpRequest, saveAs, File */
const Renderer =	require('../renderer');
const Identifier = 	require('../../enums/identifier');
// const MediaTag = 	require('../../core/media-tag-api');

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
		const container = document.createElement('div');
		const button = document.createElement('button');

		container.innerHTML = this.message;
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

		container.appendChild(button);

		mediaObject.utilsSetAllDataAttributes(container);
		mediaObject.replaceContents([container]);

		// MediaTag.processingEngine.return(mediaObject);
		mediaObject.return();
	}
}

module.exports = DownloadRenderer;

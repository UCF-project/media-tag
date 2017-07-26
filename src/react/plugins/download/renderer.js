/* global ReactDOM */
const Renderer =	require('../../../plugins/renderer');
const Identifier = 	require('../../../enums/identifier');
const AttributesObject = require('../../../core/attributes-object');

const DownloadComponent = require('./component.jsx');

class DownloadRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor(buttonMessage) {
		super(Identifier.DOWNLOAD);

		this.buttonMessage = buttonMessage || 'Download';
	}

	handleClick(mediaObject) {
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
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const props = new AttributesObject({attributes: []});

		this.handleClick.bind(this, mediaObject);
		mediaObject.utilsSetAllDataAttributes(props);
		props.buttonMessage = this.buttonMessage;
		ReactDOM.render(
			<DownloadComponent
				onClick={this.handleClick}
				{...props} />,
			mediaObject.element);
		mediaObject.return();
	}
}

module.exports = DownloadRenderer;

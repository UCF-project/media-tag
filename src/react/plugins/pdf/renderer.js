/* global ReactDOM, XMLHttpRequest */
const Renderer =	require('../../../plugins/renderer');
const Identifier = 	require('../../../enums/identifier');
const AttributesObject = require('../../../core/attributes-object');

const PdfComponent = require('./component.jsx');

class PdfRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.PDF);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const ping = new Promise(resolve => {
			const src = mediaObject.getAttribute('src');
			const url = `${PdfRenderer.viewer}?file=${src}`;
			const xhr = new XMLHttpRequest();

			xhr.onload = () => {
				if (xhr.status < 400) {
					resolve(url);
				} else {
					console.warn(`The pdfjs viewer has not been found ...
						The browser viewer will be used by default`);
					resolve(src);
				}
			};
			xhr.open('HEAD', url, true);
			xhr.send();
		});

		ping.then(url => {
			const props = new AttributesObject({attributes: []});

			mediaObject.utilsSetAllDataAttributes(props);
			ReactDOM.render(
				<PdfComponent src={url} {...props} />,
				mediaObject.element);
			mediaObject.return();
		});
	}
}

module.exports = PdfRenderer;

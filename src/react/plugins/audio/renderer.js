/* global ReactDOM */
const Renderer =	require('../../../plugins/renderer');
const Identifier = 	require('../../../enums/identifier');
const AttributesObject = require('../../../core/attributes-object');

const AudioComponent = require('./component.jsx');

class AudioRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.AUDIO);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const props = new AttributesObject({attributes: []});

		mediaObject.utilsSetAllDataAttributes(props);
		ReactDOM.render(
			<AudioComponent src={mediaObject.getAttribute('src')} {...props} />,
			mediaObject.element);
		mediaObject.return();
	}
}

module.exports = AudioRenderer;

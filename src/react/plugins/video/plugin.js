/* global ReactDOM */
const Renderer =	require('../../../plugins/renderer');
const Identifier = 	require('../../../enums/identifier');
const AttributesObject = require('../../../core/attributes-object');

const VideoComponent = require('./component.jsx');

class VideoRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.VIDEO);
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
			<VideoComponent src={mediaObject.getSource()} {...props} />,
			mediaObject.element);
		mediaObject.return();
	}
}

module.exports = VideoRenderer;

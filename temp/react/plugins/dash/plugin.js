/* global ReactDOM */
const Renderer =	require('../../../plugins/renderer');
const Identifier = 	require('../../../enums/identifier');
const AttributesObject = require('../../../core/attributes-object');

const DashComponent = require('./component.jsx');

class DashRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.DASH);
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
			<DashComponent
				src={mediaObject.getSource()}
				ckkey={mediaObject.getAttribute('key')}
				ckid={mediaObject.getAttribute('id')}
				id={mediaObject.getId()}
				{...props}/>,
			mediaObject.element);
		mediaObject.return();
	}
}

module.exports = DashRenderer;

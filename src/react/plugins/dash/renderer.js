/* global ReactDOM */
const Renderer =	require('../../../plugins/renderer');
const Identifier = 	require('../../../enums/identifier');
const AttributesObject = require('../../../core/attributes-object');

const DashComponent = require('./component.jsx');

/**
 * Class for dash renderer.
 *
 * @class      DashRenderer (name)
 */
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
				src={mediaObject.getAttribute('src')}
				ckkey={mediaObject.getAttribute('key')}
				ckid={mediaObject.getAttribute('id')}
				id={mediaObject.getId()}
				{...props}
				controls />,
			mediaObject.element);
		mediaObject.return();
	}
}

module.exports = DashRenderer;

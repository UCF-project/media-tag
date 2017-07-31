import React from 'react';
import Page from '../containers/Page.jsx';
import MediaTag from '../components/MediaTag.jsx';
import PluginBlock from '../containers/blocks/plugins/plugin/PluginBlock.jsx';

export default (
  <Page class={'flex fit-width page column background-grey scrollable'}>
  	<h1>React</h1>
  	<p>
  		Media-Tag has React implementation.<br />
  	</p>
  	<h3>Components</h3>
  	<h5>Media-Tag</h5>
  	<p>
  		Media-Tag is the entry point component of the application.<br />
  	</p>
  	<pre className={'code-block'}>
{`
import React from 'react';

/**
 * @brief      Class for image.
 */
class MediaTag extends React.Component {
	/**
	 * @brief      Constructs the object.
	 *
	 * @param      props  The properties
	 */
	constructor(props) {
		super(props);

		/**
		 * { item_description }
		 */
		this.state = {
			component: null
		}
	}
	
	/**
	 * @brief      { function_description }
	 *
	 * @return     { description_of_the_return_value }
	 */
	render() {
		return (
			<media-tag {...this.props}>
				{this.state.component}
			</media-tag>
		);
	}
}

module.exports = MediaTag;

`}
	</pre>

	<h3>End point components</h3>
	<p>
		Only renderers interact with the DOM in the JavaScript library.<br />
		So, only renderers have been adapted into React components.<br />
		You do not have to manipulate them directly.<br />
	</p>

	<h3>To adapt a renderer</h3>
	<p>
		The way to create a React end point is pretty the same than extension section.<br />
		Matchers are universal between full JavaScript implementation and React one.<br />
		In the React renderer you have to call <code className={'code'}>ReactDOM.render()</code> with the React component on <code className={'code'}>mediaObject.element</code>.<br/ >
	</p>
	<p>
		This is an example for image plugin.<br />
	</p>
	<em>renderer.js : </em>
	<pre className={'code-block'}>
{`
/* global ReactDOM */
const Renderer =	require('../../../plugins/renderer');
const Identifier = 	require('../../../enums/identifier');
const AttributesObject = require('../../../core/attributes-object');

const ImageComponent = require('./component.jsx');

class ImageRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.IMAGE);
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
			<ImageComponent src={mediaObject.getSource()} {...props} />,
			mediaObject.element);
		mediaObject.return();
	}
}

module.exports = ImageRenderer;

`}
	</pre>
	<em>component.js : </em>
	<pre className={'code-block'}>
{`
import React from 'react';

/**
 * @brief      Class for image.
 */
class ImageComponent extends React.Component {
	/**
	 * @brief      Constructs the object.
	 *
	 * @param      props  The properties
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * @brief      { function_description }
	 *
	 * @return     { description_of_the_return_value }
	 */
	render() {
		return (
			<img {...this.props}></img>
		);
	}
}

module.exports = ImageComponent;

`}
	</pre>
  </Page>
);

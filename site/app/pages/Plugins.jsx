import React from 'react';
import Page from '../containers/Page.jsx';
import {Component as MediaTag} from '../../www/assets/dist/media-tag-react.js';

export default (
	<Page class='flex fit-width page column background-grey scrollable'>
		<h1>Plugins</h1>
		<p>
			Media-Tag use plugins to provide media rendering and complexe other actions.<br />
			This section is about plugins, from their definition to their existing presets.<br />
		</p>
		<h3>Structure</h3>
		<p>
			A <b>Plugin</b> is composed of <b>three attributes</b> and <b>one method</b>.<br />
			Its attributes are the identifier, the type and the occurence.<br />
			<u>The method is process which takes only one parameter</u>, a <b>MediaObject</b> instance.<br />
			When the process ends, <u>the media object have to be returned to the ProcessingEngine</u>.<br />
			It is the processing engine which determines if a media object is rendered or not.<br />
		</p>
		<p>
			The processing engine will call the start method.<br />
		 	The method process is not defined in the plugin class.<br />
		 	Plugin class as abstract class behavior and have to be extended.<br />
		 	Is in it extension which the process method have to be defined.<br />
		 	This method takes one parameter, the media object.<br />
		 	The media object contains a copy of every data contained in the html tag.<br />
		 	These data can be modified by the media tag process chain.<br />
		 	Is for this reason that plugin as several abstract extensions.<br />
		</p>
		<p>
			To illustrate lets see the base plugin class.<br />
		</p>
		<em>example :</em>
		<pre className={'prompt'}>
{`
class Plugin {
	/**
	 * Constructs the object.
	 *
	 * @param      {string}  identifier  The identifier
	 * @param      {string}  type        The type
	 * @param      {string}  occurrence   The occurrence
	 */
	constructor(identifier, type, occurrence) {
		this.identifier = identifier;
		this.type = type;
		this.occurrence = occurrence;
	}

	...

	/**
	 * Starts the process on the media object.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @return     {*}
	 */
	start(mediaObject) {/
		return this.process(mediaObject);
	}
}

module.exports = Plugin;

`}
		</pre>
		
		<h3>Plugin extensions</h3>
		
		<p>
			Plugin is extended by severals specializations.<br />
		</p>

		<h5>Matcher</h5>
		
		<p>
			The Matcher is specialized in MediaObject analyses.<br />
			It is used to trigger when an other Plugin have to be called.<br />
		</p>
		<em>example :</em>
		<pre className={'prompt'}>
{`
const Type = 		require('../enums/type');
const Occurrence = 	require('../enums/occurrence');
const Plugin = 		require('./plugin');

class Matcher extends Plugin {
	/**
	 * Constructs the object.
	 *
	 * @param      {string}  identifier    The identifier
	 * @param      {Type}  matchingType  The matching type
	 */
	constructor(identifier, targetType) {
		super(identifier, Type.MATCHER, Occurrence.ANY);
		this.targetType = targetType;
	}

	/**
	 * Gets the target type.
	 *
	 * @return     {<type>}  The target type.
	 */
	getTargetType() {
		return this.targetType;
	}
}

module.exports = Matcher;

`}
		</pre>

		<h5>Renderer</h5>

		<p>
			The Renderer is specialized in MediaObject rendering.<br />
			It is the final Plugin called during a processing chain.<br />
		</p>
		<pre className={'prompt'}>
{`
const Type = 		require('../enums/type');
const Occurrence = 	require('../enums/occurrence');
const Plugin = 		require('./plugin');

class Renderer extends Plugin {
	/**
	 * Constructs the object.
	 *
	 * @param      {string}  identifier  The identifier
	 */
	constructor(identifier) {
		super(identifier, Type.RENDERER, Occurrence.ONCE);
	}
}

module.exports = Renderer;

`}
		</pre>

		<h5>Filter</h5>

		<p>
			The Filter is specialized in MediaObject filtering.<br />
			It modifies MediaObject attributes and data.<br />
		</p>
		<pre className={'prompt'}>
{`
const Type = 		require('../enums/type');
const Occurrence = 	require('../enums/occurrence');
const Plugin = 		require('./plugin');

class Filter extends Plugin {
	/**
	 * Constructs the object.
	 *
	 * @param      {string}  identifier  The identifier
	 */
	constructor(identifier) {
		super(identifier, Type.FILTER, Occurrence.ANY);
	}
}

module.exports = Filter;

`}
		</pre>

		<h5>Sanitizer</h5>

		<p>
			The Sanitizer is specialized in MediaObject sanitizing.<br />
			A Sanitizer is call between each processing step to clean MediaObject.<br />
		</p>
		<pre className={'prompt'}>
{`
const Type = 		require('../enums/type');
const Occurrence = 	require('../enums/occurrence');
const Plugin = 		require('./plugin');

class Sanitizer extends Plugin {
	/**
	 * Constructs the object.
	 *
	 * @param      {string}  identifier  The identifier
	 */
	constructor(identifier) {
		super(identifier, Type.SANITIZER, Occurrence.EVERY);
	}
}

module.exports = Sanitizer;

`}
		</pre>
		<h5>Group</h5>

		<p>
			The Group is specialized in plugin vectorization.<br />
			Has no specific type, but it can be useful to chain several plugin in a specific order.<br />
		</p>
		<pre className={'prompt'}>
{`
const Plugin = require('./plugin');

/**
 * Class for group plugins.
 *
 * @class      Group (name)
 */
class Group extends Plugin {
	/**
	 * Constructs the object.
	 */
	constructor(identifier, type, occurrence) {
		super(identifier, type, occurrence);
		this.plugins = [];
	}

	/**
	 * Adds a plugin.
	 *
	 * @param      {Plugin}  plugin  The plugin
	 */
	addPlugin(plugin) {
		if (this.plugins.includes(plugin) === false) {
			this.plugins.push(plugin);
		}
	}

	/**
	 * Removes a plugin.
	 *
	 * @param      {Identifier}  identifier  The identifier
	 * @param      {Type}  type        The type
	 * @param      {Occurrence}  occurrence  The occurrence
	 */
	removePlugin(identifier, type, occurrence) {
		if (!identifier) {
			throw new Error('Identifier is null or undefined');
		}

		this.plugin.filter(plugin => {
			if (type && occurrence) {
				return	identifier === plugin.identifier &&
						type === plugin.type &&
						occurrence === plugin.occurrence;
			}
			if (type) {
				return	identifier === plugin.identifier &&
						type === plugin.type;
			}
			return identifier === plugin.identifier;
		});
	}

	/**
	 * Starts all stored plugins on a media object.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	start(mediaObject) {
		this.plugins.forEach(plugin => {
			plugin.start(mediaObject);
		});
	}
}

module.exports = Group;

`}
		</pre>
		
		<h3>Plugin class and Media-Tag extension</h3>
		<p>
			In other sections, we call plugin a feature offered by the Media-Tag.<br />
			In fact, a feature is defined through Plugin instances.<br />
			A feature has two Plugin instances generally a Matcher and an other Plugin type.<br />
			You can define too two generic plugins, but they have to possess the same type and occurence than predefined ones.<br />
			Plugins can be defined through the configuration.<br />
			The advantage of this definition way is the fact that you do not need to rebuild the Media-Tag library.<br />
			Go to the configuration section for more details about feature addition.<br />
		</p>

	</Page>
);

/* global define */

define((require, exports, module) => {
	const MediaObject 	= require('../media-object');
	const Parser 		= require('../parser');
	const FilterManager = require('../filter-manager');
	const PluginManager = require('../plugin-manager');
	const Orchestrator 	= require('../orchestrator');
	const LoadingEngine = require('./loading-engine');

	/**
	 * @module MediaTag
	 * Media Tag Core
	 * @example
	 * var mediaTagObj = MediaTag(document.querySelector('.myMediaTag'));
	 * @since 0.2.0
	 */
	function MediaTag(element) {
		let mediaObject = element.mediaObject;

		/**
	     * If this element has already a mediaObject just return it,
	     * the mediaObject presence prevent to apply several times the
	     * MediaTag processing.
	     */
		if (mediaObject) {
			return mediaObject;
		}
		/**
		 * Else create one and startup a processing on it.
		 */
		mediaObject = new MediaObject(element);

		/**
		 * Finds and binds mediaObject properties.
		 */
		MediaTag.parse(mediaObject);

		/**
		 * Loads dynamically needed modules for this mediaObject.
		 */
		LoadingEngine.load(mediaObject, MediaTag.configuration, MediaTag.startup);
	}

	/**
	 * TODO Maybe do this when the mediaObject constructor is called.
	 * Parses the current mediaObject to extract some information and bind
	 * it with mediaObject getters.
	 *
	 * @param      {<type>}  mediaObject  The media object
	 * @return     {<type>}  { description_of_the_return_value }
	 */
	MediaTag.parse = mediaObject => {
		/**
		 * Parses properties from mediaObject.
		 *
		 * @type       {Object}
		 */
		const properties = Parser.parse(mediaObject);

		/**
		 * Sets properties to the mediaObject.
		 */
		mediaObject.setProperties(properties);
	};

	/**
	 * Applies all treatement on a mediaObject to display a content.
	 *
	 * @param      {Object}  mediaObject  The media object
	 * @return     {MediaObject}  { description_of_the_return_value }
	 */
	MediaTag.startup = mediaObject => {
		/**
		 * Starts up the processing which select the best rendering method.
		 */
		Orchestrator.startup(mediaObject);

		/**
		 * Returns the mediaObject in this final state.
		 */
		return mediaObject;
	};

	/**
	 * Sets a configuration to the MediaTag
	 *
	 * @param      {<type>}  configuration  The configuration
	 */
	MediaTag.configure = configuration => {
		MediaTag.configuration = configuration;
	};

	/**
	 * Register a new filter.
	 * @public
	 * @memberOf MediaTag
	 * @since 0.2.1
	 */
	MediaTag.registerFilter = FilterManager.register;

	/**
	 * Register a new plugin.
	 * @public
	 * @memberOf MediaTag
	 * @since 0.2.0
	 */
	MediaTag.registerPlugin = PluginManager.register;

	module.exports = MediaTag;
});

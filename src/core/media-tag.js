const MediaObject = require('./media-object');
const Parser = require('./parser');
const FilterManager = require('./filter-manager');
const PluginManager = require('./plugin-manager');
const Orchestrator = require('./orchestrator');

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
	 * Starts up the MediaTag processing.
	 */
	return MediaTag.startup(mediaObject);
}

/**
 * Applies all treatement on a mediaObject to display a content.
 *
 * @param      {Object}  mediaObject  The media object
 * @return     {MediaObject}  { description_of_the_return_value }
 */
MediaTag.startup = mediaObject => {
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

MediaTag.Orchestrator = Orchestrator;
MediaTag.MediaObject = MediaObject;
MediaTag.Parser = Parser;

module.exports = MediaTag;

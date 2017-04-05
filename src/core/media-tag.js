import MediaObject from './media-object';
import FilterManager from './filter-manager';
import PluginManager from './plugin-manager';

function getAttributesObject(element) {
	const attrsObj = {};
	if (element.hasAttributes()) {
		const attrs = element.attributes;
		for (let i = attrs.length - 1; i >= 0; i--) {
			attrsObj[attrs[i].name] = attrs[i].value;
		}
	}
	return attrsObj;
}

/**
 * @module MediaTag
 * Media Tag Core
 * @example
 * var mediaTagObj = MediaTag(document.querySelector('.myMediaTag'));
 * @since 0.2.0
 */
function MediaTag(node) {
    // If this element has already a mediaObject just return it
	if (node.mediaObject) {
		return node.mediaObject;
	}

    // Otherwise we create a new mediaObject
	node.mediaObject = new MediaObject(getAttributesObject(node), node);
	return node.mediaObject;
}

MediaTag.registerFilter = FilterManager.register;

/**
 * Register a new plugin.
 * @public
 * @memberOf MediaTag
 * @since 0.2.0
 */
MediaTag.registerPlugin = PluginManager.register;

export default MediaTag;

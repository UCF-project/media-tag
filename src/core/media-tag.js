import MediaObject from './media-object';
import Plugin from './plugin';

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

/**
 * Register a new plugin.
 * @public
 * @memberof MediaTag
 */
MediaTag.registerPlugin = Plugin.registerPlugin;

export default MediaTag;

/* global document */

/**
 * @module ImagePlugin
 * @since 0.2.0
 */
const ImagePlugin = {
	identifier: 'image',
	// typeCheck: mediaObject => {
	// 	const regexExtensions = new RegExp('^png|jpg|jpeg|gif$');
	// 	const regexMimes = new RegExp('^image/(png|svg+xml|jpeg|gif)$');

	// 	return	mediaObject.hasAttribute('src') &&
	// 			mediaObject.getType() === 'image' &&
	// 			regexExtensions.exec(mediaObject.getExtension()) !== null &&
	// 			regexMimes.exec(mediaObject.getMimeType()) !== null;
	// },
	startup: mediaObject => {
        // Create image element
		const element = document.createElement('img');

        // Set the source file
		element.setAttribute('src', mediaObject.getAttribute('src'));

        // Set all data-attr-something to the element.setAttribute('something', value)
		mediaObject.utilsSetAllDataAttributes(element);

        // Update mediaObject contents with the created element
		mediaObject.replaceContents([element]);
	}
};

module.exports = ImagePlugin;

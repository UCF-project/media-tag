/* global document */

/**
 * @module ImagePlugin
 * @since 0.2.0
 */
const ImagePlugin = {
	identifier: 'image',
	typeCheck: mediaObj => {
        // Verify if there is mandatory 'src' field
		if (!mediaObj.hasAttribute('src')) {
			return false;
		}

        // Verify extensions
		const regexExt = new RegExp('^png|jpg|jpeg|gif$');
		if (regexExt.exec(mediaObj.getExtension())) {
			return true;
		}

        // Verify mime type
		const regexMime = new RegExp('^image/(png|svg+xml|jpeg|gif)$');
		if (regexMime.exec(mediaObj.getMimeType())) {
			return true;
		}

        // Verify type
		if (mediaObj.getType() === 'image') {
			return true;
		}

        // Otherwise is not an image
		return false;
	},
	startup: mediaObj => {
        // Create image element
		const element = document.createElement('img');

        // Set the source file
		element.setAttribute('src', mediaObj.getAttribute('src'));

        // Set all data-attr-something to the element.setAttribute('something', value)
		mediaObj.utilsSetAllDataAttributes(element);

        // Update mediaObj contents with the created element
		mediaObj.replaceContents([element]);
	}
};

export default ImagePlugin;

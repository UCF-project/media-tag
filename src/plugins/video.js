/* global document */

/**
 * @module VideoPlugin
 * @since 0.2.0
 */
const VideoPlugin = {
	identifier: 'video',
	typeCheck: mediaObj => {
        // Verify if there is mandatory 'src' field
		if (!mediaObj.hasAttribute('src')) {
			return false;
		}

        // Verify extensions
		const regexExt = new RegExp('^mp4|ogg|webm$');
		if (regexExt.exec(mediaObj.getExtension())) {
			return true;
		}

        // Verify mime type
		const regexMime = new RegExp('^video/(mp4|ogg|webm)$');
		if (regexMime.exec(mediaObj.getMimeType())) {
			return true;
		}

        // Verify type
		if (mediaObj.getType() === 'video') {
			return true;
		}

        // Otherwise is not an video
		return false;
	},
	startup: mediaObj => {
        // Create video element
		const element = document.createElement('video');

        // Set the source file
		element.setAttribute('src', mediaObj.getAttribute('src'));

        // Set all data-attr-something to the element.setAttribute('something', value)
		mediaObj.utilsSetAllDataAttributes(element);

        // Update mediaObj contents with the created element
		mediaObj.replaceContents([element]);
	}
};

export default VideoPlugin;

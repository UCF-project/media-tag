/* global document */

/**
 * @module AudioPlugin
 * @since 0.2.0
 */
const AudioPlugin = {
	identifier: 'audio',
	typeCheck: mediaObj => {
        // Verify if there is mandatory 'src' field
		if (!mediaObj.hasAttribute('src')) {
			return false;
		}

        // Verify extensions
		const regexExt = new RegExp('^mp3|wav$');
		if (regexExt.exec(mediaObj.getExtension())) {
			return true;
		}

        // Verify mime type
		const regexMime = new RegExp('^audio/(mp3|ogg|webm|wav)$');
		if (regexMime.exec(mediaObj.getMimeType())) {
			return true;
		}

        // Verify type
		if (mediaObj.getType() === 'audio') {
			return true;
		}

        // Otherwise is not an audio
		return false;
	},
	startup: mediaObj => {
        // Create audio element
		const element = document.createElement('audio');

        // Set the source file
		element.setAttribute('src', mediaObj.getAttribute('src'));

        // Set all data-attr-something to the element.setAttribute('something', value)
		mediaObj.utilsSetAllDataAttributes(element);

        // Update mediaObj contents with the created element
		mediaObj.replaceContents([element]);
	}
};

export default AudioPlugin;

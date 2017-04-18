/* global document */

/**
 * @module AudioPlugin
 * @since 0.2.0
 */
const AudioPlugin = {
	identifier: 'audio',
	// typeCheck: mediaObject => {
	// 	const regexExtensions = new RegExp('^mp3|ogg|webm|wav$');
	// 	const regexMimes = new RegExp('^audio/(mp3|ogg|webm|wav)$');

	// 	return	mediaObject.hasAttribute('src') &&
	// 			mediaObject.getType() === 'audio' &&
	// 			regexExtensions.exec(mediaObject.getExtension()) !== null &&
	// 			regexMimes.exec(mediaObject.getMimeType()) !== null;
	// },
	startup: mediaObject => {
        // Create audio element
		const element = document.createElement('audio');

        // Set the source file
		element.setAttribute('src', mediaObject.getAttribute('src'));

        // Set all data-attr-something to the element.setAttribute('something', value)
		mediaObject.utilsSetAllDataAttributes(element);

        // Update mediaObject contents with the created element
		mediaObject.replaceContents([element]);
	}
};

module.exports = AudioPlugin;

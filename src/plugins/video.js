/* global document */

/**
 * @module VideoPlugin
 * @since 0.2.0
 */
const VideoPlugin = {
	identifier: 'video',
	// typeCheck: mediaObject => {
	// 	const regexExtensions = new RegExp('^mp4|ogg|webm$');
	// 	const regexMimes = new RegExp('^video/(mp4|ogg|webm)$');

	// 	return	mediaObject.hasAttribute('src') &&
	// 			mediaObject.getType() === 'video' &&
	// 			regexExtensions.exec(mediaObject.getExtension()) !== null &&
	// 			regexMimes.exec(mediaObject.getMimeType()) !== null;
	// },
	startup: mediaObject => {
        // Create video element
		const element = document.createElement('video');

        // Set the source file
		element.setAttribute('src', mediaObject.getAttribute('src'));

        // Set all data-attr-something to the element.setAttribute('something', value)
		mediaObject.utilsSetAllDataAttributes(element);

        // Update mediaObject contents with the created element
		mediaObject.replaceContents([element]);
	}
};

module.exports = VideoPlugin;

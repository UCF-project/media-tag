/* global document, shaka */

/**
 * @module DashPlugin
 * @since 0.2.0
 */

const DashPlugin = {
	identifier: 'dash',
	// typeCheck: mediaObject => {
	// 	const regexExtensions = new RegExp('^dash[+]xml$');
	// 	const regexMimes = new RegExp('^application/dash[+]xml$');

	// 	return	mediaObject.hasAttribute('src') &&
	// 			mediaObject.getType() === 'application' &&
	// 			regexExtensions.exec(mediaObject.getExtension()) !== null &&
	// 			regexMimes.exec(mediaObject.getMimeType()) !== null;
	// },
	startup: mediaObject => {
		const video = document.createElement('video');
		const player = new shaka.Player(video);
		const id = mediaObject.getAttribute('id');
		const key = mediaObject.getAttribute('key');
		if (id && key) {
			const clearKeyStringObject = '{"' + id + '": "' + key + '"}';
			const clearKey = JSON.parse(clearKeyStringObject);
			player.configure({
				drm: {
					clearKeys: clearKey
				}
			});
		}
		mediaObject.utilsSetAllDataAttributes(video);
		mediaObject.replaceContents([video]);
		player.load(mediaObject.getAttribute('src')).then(() => {});
	}
};

module.exports = DashPlugin;

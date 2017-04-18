module.exports = {
	identifier: 'video',
	type: 'plugin',
	apply: mediaObject => {
		const regexExtensions = new RegExp('^mp4|ogg|webm$');
		const regexMimes = new RegExp('^video/(mp4|ogg|webm)$');

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'video' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	}
};

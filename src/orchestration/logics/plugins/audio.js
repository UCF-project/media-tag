module.exports = {
	identifier: 'audio',
	type: 'plugin',
	apply: mediaObject => {
		const regexExtensions = new RegExp('^mp3|ogg|webm|wav$');
		const regexMimes = new RegExp('^audio/(mp3|ogg|webm|wav)$');

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'audio' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	}
};

module.exports = {
	identifier: 'dash',
	type: 'plugin',
	apply: mediaObject => {
		const regexExtensions = new RegExp('^dash[+]xml$');
		const regexMimes = new RegExp('^application/dash[+]xml$');

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'application' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	}
};

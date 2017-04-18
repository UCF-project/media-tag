module.exports = {
	identifier: 'pdf',
	type: 'plugin',
	apply: mediaObject => {
		const regexExtensions = new RegExp('^pdf$');
		const regexMimes = new RegExp('^application/pdf$');

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'application' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	}
};

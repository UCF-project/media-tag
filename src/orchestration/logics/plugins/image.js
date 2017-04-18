module.exports = {
	identifier: 'image',
	type: 'plugin',
	apply: mediaObject => {
		const regexExtensions = new RegExp('^png|jpg|jpeg|gif$');
		const regexMimes = new RegExp('^image/(png|svg+xml|jpeg|gif)$');

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'image' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	}
};

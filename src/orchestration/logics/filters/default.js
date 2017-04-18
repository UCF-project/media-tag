module.exports = {
	identifier: 'default',
	type: 'filter',
	apply: mediaObject => {
		return 	mediaObject.hasAttribute('src') &&
				mediaObject.hasAttribute('data-type');
	}
};

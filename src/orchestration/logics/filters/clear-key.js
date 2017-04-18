module.exports = {
	identifier: 'clear-key',
	type: 'filter',
	apply: mediaObject => {
		return	mediaObject.hasAttribute('data-clear-key');
	}
};

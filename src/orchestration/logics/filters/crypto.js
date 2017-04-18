module.exports = {
	identifier: 'crypto',
	type: 'filter',
	apply: mediaObject => {
		return	mediaObject.hasAttribute('data-crypto-key');
	}
};

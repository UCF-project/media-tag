const Filter =		require('../filter');
const Identifier = 	require('../../enums/identifier');
const Store = 		require('../../stores/store');

class CryptoFilter extends Filter {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.CRYPTO);
	}

	/**
	 * Job to realise on a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const dataCryptoKey = mediaObject.getAttribute('data-crypto-key');
		const schemes = /\w+:/.exec(dataCryptoKey);
		if (schemes === null) {
			throw new Error('No algorithm scheme found in data-crypto-key');
		}
		const algorithmScheme = schemes[0];	/* Takes the first encountered scheme */
		const algorithmName = algorithmScheme.replace(':', '');
		const stringKey = dataCryptoKey.replace(algorithmScheme, '');

		/**
		 * Replaces data-crypto-key by the key part only (less algorithm scheme).
		 */
		mediaObject.setAttribute('data-crypto-key', stringKey);

		if (CryptoFilter.functionStore.isStored(algorithmName)) {
			const algorithm = CryptoFilter.functionStore.get(algorithmName);

			/**
			 * Runs any algorithm on media object.
			 * The algorithm HAVE TO pay back the media object to
			 * the processing engine when its job is done.
			 */
			algorithm(mediaObject);
		} else {
			throw new Error(`Algorithm ${algorithmName} is not registered`);
		}
	}
}

/**
 * Function store to register every needed algorithms as a named callback.
 */
CryptoFilter.functionStore = CryptoFilter.functionStore || new Store();

/**
 * Allowed media types.
 */
CryptoFilter.mediaTypes = [];

/**
 * Sets the allowed media types.
 *
 * @param      {Array<string>}  mediaTypes  The media types
 */
CryptoFilter.setAllowedMediaTypes = mediaTypes => {
	CryptoFilter.mediaTypes = mediaTypes;
};

/**
 * Gets the allowed media types.
 *
 * @return     {Array<string>}  The allowed media types.
 */
CryptoFilter.getAllowedMediaTypes = () => {
	return CryptoFilter.mediaTypes;
};

/**
 * Adds an allowed media type.
 *
 * @param      {string}  mediaType  The media type
 */
CryptoFilter.addAllowedMediaType = mediaType => {
	CryptoFilter.mediaTypes.push(mediaType);
};

/**
 * Adds all allowed media types.
 *
 * @param      {Array<string>}  mediaTypes  The media types
 */
CryptoFilter.addAllAllowedMediaTypes = mediaTypes => {
	// CryptoFilter.mediaTypes.push(...mediaTypes); // ES7 variant
	mediaTypes.forEach(mediaType => {
		CryptoFilter.addAllowedMediaType(mediaType);
	});
};

/**
 * Removes an allowed media type.
 *
 * @param      {string}  mediaType  The media type
 */
CryptoFilter.removeAllowedMediaType = mediaType => {
	const index = CryptoFilter.mediaTypes.indexOf(mediaType);

	if (index >= 0) {
		CryptoFilter.mediaTypes.splice(index, 1);
	}
};

/**
 * Removes all allowed media type.
 *
 * @param      {Array<string>}  mediaTypes  The media types
 */
CryptoFilter.removeAllAllowedMediaTypes = mediaTypes => {
	mediaTypes.forEach(mediaType => {
		CryptoFilter.removeAllowedMediaType(mediaType);
	});
};

/**
 * Determines if allowed media type.
 *
 * @param      {string}   mediaType  The media type
 * @return     {boolean}  True if allowed media type, False otherwise.
 */
CryptoFilter.isAllowedMediaType = mediaType => {
	return CryptoFilter.mediaTypes.some(type => {
		return type === mediaType;
	});
};

module.exports = CryptoFilter;

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

module.exports = CryptoFilter;

const Filter =			require('../filter');
const Identifier = 		require('../../enums/identifier');
const FunctionStore = 	require('../../stores/function-store');

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

		if (CryptoFilter.FunctionStore.hasFunction(algorithmName)) {
			const algorithm = CryptoFilter.FunctionStore.get(algorithmName);

			/**
			 * Runs any algorithm on media object.
			 * The algorithm MUST ALWAYS pay back the media object to
			 * the running engine when its job is done.
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
CryptoFilter.FunctionStore = FunctionStore;

module.exports = CryptoFilter;

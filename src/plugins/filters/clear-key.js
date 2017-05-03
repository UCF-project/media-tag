const Filter =			require('../filter');
const Identifier = 		require('../../enums/identifier');
const RunningEngine =	require('../../engines/running-engine');

class ClearKeyFilter extends Filter {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.CLEAR_KEY);
	}

	/**
	 * Job to realise on a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const clearKey = mediaObject.getAttribute('data-clear-key');
		const id = clearKey.substring(0, 32);
		const key = clearKey.substring(33, 65);

		mediaObject.setAttribute('id', id);
		mediaObject.setAttribute('key', key);
		mediaObject.removeAttribute('data-clear-key');
		RunningEngine.return(mediaObject);
	}
}

module.exports = ClearKeyFilter;

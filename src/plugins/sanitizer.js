const Type = 		require('../enums/type');
const Occurrence = 	require('../enums/occurrence');
const Plugin = 		require('./plugin');

class Sanitizer extends Plugin {
	/**
	 * Constructs the object.
	 *
	 * @param      {string}  identifier  The identifier
	 */
	constructor(identifier) {
		super(identifier, Type.SANITIZER, Occurrence.EVERY);
	}
}

module.exports = Sanitizer;

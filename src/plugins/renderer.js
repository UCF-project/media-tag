const Type = 		require('../enums/type');
const Occurrence = 	require('../enums/occurrence');
const Plugin = 		require('./plugin');

class Renderer extends Plugin {
	/**
	 * Constructs the object.
	 *
	 * @param      {string}  identifier  The identifier
	 */
	constructor(identifier) {
		super(identifier, Type.RENDERER, Occurrence.ONCE);
	}
}

module.exports = Renderer;

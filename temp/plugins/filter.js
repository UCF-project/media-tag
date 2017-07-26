define(function (require, exports, module) {const Type = 		require('../enums/type');
const Occurrence = 	require('../enums/occurrence');
const Plugin = 		require('./plugin');

class Filter extends Plugin {
	/**
	 * Constructs the object.
	 *
	 * @param      {string}  identifier  The identifier
	 */
	constructor(identifier) {
		super(identifier, Type.FILTER, Occurrence.ANY);
	}
}

module.exports = Filter;

});

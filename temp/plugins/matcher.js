define(function (require, exports, module) {const Type = 		require('../enums/type');
const Occurrence = 	require('../enums/occurrence');
const Plugin = 		require('./plugin');

class Matcher extends Plugin {
	/**
	 * Constructs the object.
	 *
	 * @param      {string}  identifier    The identifier
	 * @param      {Type}  matchingType  The matching type
	 */
	constructor(identifier, targetType) {
		super(identifier, Type.MATCHER, Occurrence.ANY);
		this.targetType = targetType;
	}

	/**
	 * Gets the target type.
	 *
	 * @return     {<type>}  The target type.
	 */
	getTargetType() {
		return this.targetType;
	}
}

module.exports = Matcher;

});

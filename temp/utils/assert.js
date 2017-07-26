define(function (require, exports, module) {class Assert {
	/**
	 * Constructs the object.
	 *
	 * @param      {*}  truth   The truth
	 */
	constructor(truth) {
		this.truth = truth;
	}

	/**
	 * Instanciate an assertion on something considered as a truth.
	 *
	 * @param      {*}  truth   The truth
	 * @return     {Assert}
	 */
	static that(truth) {
		return new Assert(truth);
	}

	/**
	 * Asserts is something.
	 * @param      {*}  predicate  The predicate
	 * @return     {Object}
	 */
	is(predicate) {
		if (this.truth === predicate) {
			return this;
		}
		throw new Error(`Assertion fail on : ${this.truth} is ${predicate}`);
	}

	/**
	 * Asserts is not something.
	 *
	 * @param      {*}  predicate  The predicate
	 * @return     {Object}
	 */
	not(predicate) {
		if (this.truth !== predicate) {
			return this;
		}
		throw new Error(`Assertion fail on : ${this.truth} is not ${predicate}`);
	}
}

module.exports = Assert;

});

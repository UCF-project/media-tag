const Store = require('../../../stores/store');

class StackStore extends Store {
	/**
	 * Stacks an object.
	 *
	 * @param      {Object}  object  The object
	 */
	stack(key, object) {
		this.get(key).stack(object);
	}

	/**
	 * Unstacks an object.
	 *
	 * @return     {Object|undefined}
	 */
	unstack(key) {
		return this.get(key).unstack();
	}

	/**
	 * Top of the stack.
	 *
	 * @return     {Object|undefined}
	 */
	top(key) {
		return this.get(key).top();
	}

	/**
	 * Base of the stack.
	 *
	 * @return     {Object}
	 */
	base(key) {
		return this.get(key).base();
	}

	/**
	 * Determines if empty.
	 *
	 * @return     {boolean}  True if empty, False otherwise.
	 */
	isEmpty(key) {
		return this.get(key).isEmpty();
	}

	/**
	 * Stack length.
	 *
	 * @return     {number}
	 */
	length(key) {
		return this.get(key).content.length;
	}

	/**
	 * Stack content.
	 *
	 * @return     {Array}
	 */
	plugins(key) {
		return this.get(key).content;
	}
}

module.exports = StackStore;

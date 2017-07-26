define(function (require, exports, module) {class Stack {
	constructor() {
		this.content = [];
	}
	/**
	 * Stacks an object.
	 *
	 * @param      {Object}  object  The object
	 */
	stack(object) {
		this.content.push(object);
	}

	/**
	 * Unstacks an object.
	 *
	 * @return     {Object|undefined}
	 */
	unstack() {
		return this.content.pop();
	}

	/**
	 * Top of the stack.
	 *
	 * @return     {Object|undefined}
	 */
	top() {
		return this.content[this.content.length - 1];
	}

	/**
	 * Base of the stack.
	 *
	 * @return     {Object}
	 */
	base() {
		return this.content[0];
	}

	/**
	 * Determines if empty.
	 *
	 * @return     {boolean}  True if empty, False otherwise.
	 */
	isEmpty() {
		return this.content.length === 0;
	}

	/**
	 * Stack length.
	 *
	 * @return     {number}
	 */
	length() {
		return this.content.length;
	}
}

module.exports = Stack;

});

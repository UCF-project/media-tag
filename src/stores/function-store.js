const Store = 		require('./store');

class FunctionStore extends Store {
	/**
	 * Determines if it has function.
	 *
	 * @param      {<type>}   name    The name
	 * @return     {boolean}  True if has function, False otherwise.
	 */
	static hasFunction(name) {
		if (super.get(name)) {
			return true;
		}
		return false;
	}
}

module.exports = FunctionStore;

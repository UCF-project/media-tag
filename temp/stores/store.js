define(function (require, exports, module) {/**
 * Class for store.
 *
 * @class      Store (name)
 */
class Store {
	/**
	 * Constructs the object.
	 */
	constructor() {
		this.map = {};
	}

	/**
	 * Determines if stored.
	 *
	 * @param      {string}   key     The key
	 * @return     {boolean}  True if stored, False otherwise.
	 */
	isStored(key) {
		if (this.get(key)) {
			return true;
		}
		return false;
	}

	/**
	 * Stores a couple key value inside the store.
	 *
	 * @param      {string}  key     The key
	 * @param      {*}  value   The value
	 */
	store(key, value) {
		if (this.isStored(key)) {
			console.warn(`The key "${key}" is already registered, the content will be overwritten.`);
		}
		this.map[key] = value;
	}

	/**
	 * Unstores a value by deleting the entry and returning its value.
	 *
	 * @param      {string}  key     The key
	 */
	unstore(key) {
		if (this.isStored(key) === false) {
			console.warn(`The key "${key}" not exists in this manager`);
		} else {
			const value = this.map[key];
			delete this.map[key];
			return value;
		}
	}

	/**
	 * Gets a spcific value from the key.
	 *
	 * @param      {<type>}  key     The key
	 * @return     {<type>}  { description_of_the_return_value }
	 */
	get(key) {
		return this.map[key];
	}

	/**
	 * Returns all stored keys.
	 *
	 * @return     {Array<string>}
	 */
	keys() {
		return Object.keys(this.map);
	}

	/**
	 * Returns all stored values.
	 *
	 * @return     {Array}
	 */
	values() {
		const keys = this.keys();
		return keys.map(key => {
			return this.get(key);
		});
	}
}

module.exports = Store;

});

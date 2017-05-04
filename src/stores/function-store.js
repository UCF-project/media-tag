class FunctionStore {
	/**
	 * Determines if it has function.
	 *
	 * @param      {<type>}   name    The name
	 * @return     {boolean}  True if has function, False otherwise.
	 */
	static hasFunction(name) {
		if (FunctionStore.get(name)) {
			return true;
		}
		return false;
	}

	static isStored(key) {
		if (FunctionStore.get(key)) {
			return true;
		}
		return false;
	}

	static store(key, value) {
		if (FunctionStore.isStored(key)) {
			console.warn(`The key "${key}" is already registered, the content will be overwritten.`);
		}
		FunctionStore.map[key] = value;
	}

	static unstore(key) {
		if (FunctionStore.isStored(key)) {
			delete FunctionStore.map[key];
		} else {
			console.warn(`The key "${key}" not exists in this manager`);
		}
	}

	static get(key) {
		return FunctionStore.map[key];
	}

	static keys() {
		return Object.keys(FunctionStore.map);
	}

	static values() {
		const keys = FunctionStore.keys();
		return keys.map(key => {
			return FunctionStore.get(key);
		});
	}

	/* TODO Experimental */

	static knows(object) {
		const keys = Object.keys(FunctionStore.map);
		const values = Object.keys(FunctionStore.map).map(key => {
			return FunctionStore.map[key];
		});
		return keys.some(key => {
			const obj = {};
			obj[object] = null;
			return key === Object.keys(obj)[0];
		}) || values.some(key => {
			return key === object;
		});
	}

	/* TODO Experimental */

	static like(object) {
		const keys = Object.keys(FunctionStore.map);

		return keys.filter(key => {
			const obj = {};
			obj[object] = null;
			return key === Object.keys(obj)[0] || FunctionStore.map[key] === object;
		}).map(key => {
			const result = {};
			result[key] = FunctionStore.map[key];
			return result;
		});
	}
}

FunctionStore.map = {};

module.exports = FunctionStore;

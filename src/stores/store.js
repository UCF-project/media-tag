class Store {

	static isStored(key) {
		if (Store.get(key)) {
			return true;
		}
		return false;
	}

	static store(key, value) {
		if (Store.isStored(key)) {
			console.warn(`The key "${key}" is already registered, the content will be overwritten.`);
		}
		Store.map[key] = value;
	}

	static unstore(key) {
		if (Store.isStored(key)) {
			delete Store.map[key];
		} else {
			console.warn(`The key "${key}" not exists in this manager`);
		}
	}

	static get(key) {
		return Store.map[key];
	}

	static keys() {
		return Object.keys(Store.map);
	}

	static values() {
		const keys = Store.keys();
		return keys.map(key => {
			return Store.get(key);
		});
	}

	/* TODO Experimental */

	static knows(object) {
		const keys = Object.keys(Store.map);
		const values = Object.keys(Store.map).map(key => {
			return Store.map[key];
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
		const keys = Object.keys(Store.map);

		return keys.filter(key => {
			const obj = {};
			obj[object] = null;
			return key === Object.keys(obj)[0] || Store.map[key] === object;
		}).map(key => {
			const result = {};
			result[key] = Store.map[key];
			return result;
		});
	}
}

Store.map = {};

module.exports = Store;

define(function (require, exports, module) {const Store = require('./store');

class UriStore extends Store {
	/**
	 * Constructs the object.
	 *
	 * @param      {string}  targetDirectory  The target directory
	 */
	constructor(targetDirectory) {
		super();

		this.targetDirectory = targetDirectory;
	}

	/**
	 * Stores a couple key value inside the store.
	 *
	 * @param      {string}  identifier  The identifier
	 * @param      {string}  type        The type
	 * @override
	 */
	store(identifier, type) {
		const uri = this.targetDirectory + '/' + type + 's/' + identifier;

		super.store(identifier, uri);
	}

	/**
	 * Unstores a value by deleting the entry and returning its value.
	 *
	 * @param      {string}  identifier  The identifier
	 * @return     {*}
	 * @override
	 */
	unstore(identifier) {
		return super.unstore(identifier);
	}
}

module.exports = UriStore;

});

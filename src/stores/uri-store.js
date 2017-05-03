const Store = require('./store');

class UriStore extends Store {
	/**
	 * { function_description }
	 *
	 * @param      {string}  type        The type
	 * @param      {string}  identifier  The identifier
	 * @return     {<type>}  { description_of_the_return_value }
	 */
	createUri(identifier, type) {
		return UriStore.pluginsPathForTarget + type + '/' + identifier;
	}

	store(identifier, type) {
		const uri = UriStore.createUri(type, identifier);

		super.store(identifier, uri);
	}
}

module.exports = UriStore;

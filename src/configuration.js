/* global define */

define((require, exports, module) => {
	/**
	 * Class for configuration.
	 *
	 * @class      Configuration (name)
	 */
	class Configuration {
		/**
		 * Constructs the object.
		 *
		 * @param      {<type>}  data    The data
		 */
		constructor(data) {
			this.data = data;
		}

		/**
		 * Gets the permission.
		 *
		 * @param      {Identifier}  identifier  The identifier
		 * @return     {Permission}  The permission.
		 */
		getPermission(identifier) {
			return this.data[identifier];
		}

		/**
		 * Sets the permission.
		 *
		 * @param      {Identifier}  identifier  The identifier
		 * @param      {Permission}  permission  The permission
		 */
		setPermission(identifier, permission) {
			this.data[identifier] = permission;
		}

		/**
		 * Gets the data.
		 *
		 * @return     {Object}  The data.
		 */
		getData() {
			return this.data;
		}
	}

	module.exports = Configuration;
});

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
		 * @param      {<type>}  filterUris     The filter uris
		 * @param      {<type>}  pluginUris     The plugin uris
		 * @param      {<type>}  forbbidenUris  The forbbiden uris
		 */
		constructor(filterUris, pluginUris, forbbidenUris) {
			if (filterUris instanceof Array) {
				this.filterUris = filterUris;
			} else {
				this.filterUris = [];
			}
			if (pluginUris instanceof Array) {
				this.pluginUris = pluginUris;
			} else {
				this.pluginUris = [];
			}
			if (forbbidenUris instanceof Array) {
				this.forbbidenUris = forbbidenUris;
			} else {
				this.forbbidenUris = [];
			}
		}

		/**
		 * Adds a filter.
		 *
		 * @param      {<type>}  filterUri  The filter uri
		 */
		addFilter(filterUri) {
			this.filterUris.push(filterUri);
		}

		/**
		 * Adds a plugin.
		 *
		 * @param      {<type>}  pluginUri  The plugin uri
		 */
		addPlugin(pluginUri) {
			this.pluginUris.push(pluginUri);
		}

		/**
		 * Forbids a module.
		 *
		 * @param      {<type>}  moduleUri  The module uri
		 */
		forbid(moduleUri) {
			this.forbbidenUris.push(moduleUri);
		}

		/**
		 * Allows a module.
		 *
		 * @param      {<type>}  moduleUri  The module uri
		 */
		allow(moduleUri) {
			this.forbbidenUris.splice(
				this.forbbidenUris.indexOf(moduleUri),
				moduleUri);
		}

		/**
		 * Gets the filter uris.
		 *
		 * @return     {<type>}  The filter uris.
		 */
		getFilterUris() {
			return this.filterUris;
		}

		/**
		 * Gets the allowed filter uris.
		 *
		 * @return     {<type>}  The allowed filter uris.
		 */
		getAllowedFilterUris() {
			return this.filterUris.filter(e1 => {
				return !this.forbbidenUris.some(e2 => {
					return e1 === e2;
				});
			});
		}

		/**
		 * Gets the forbbiden filter uris.
		 *
		 * @return     {<type>}  The forbbiden filter uris.
		 */
		getForbbidenFilterUris() {
			return this.filterUris.filter(e1 => {
				return this.forbbidenUris.some(e2 => {
					return e1 === e2;
				});
			});
		}

		/**
		 * Gets the allowed plugin uris.
		 *
		 * @return     {<type>}  The allowed plugin uris.
		 */
		getAllowedPluginUris() {
			return this.pluginUris.filter(e1 => {
				return !this.forbbidenUris.some(e2 => {
					return e1 === e2;
				});
			});
		}

		/**
		 * Gets the forbbiden plugin uris.
		 *
		 * @return     {<type>}  The forbbiden plugin uris.
		 */
		getForbbidenPluginUris() {
			return this.pluginUris.filter(e1 => {
				return this.forbbidenUris.some(e2 => {
					return e1 === e2;
				});
			});
		}

		/**
		 * Gets the forbbiden uris.
		 *
		 * @return     {<type>}  The forbbiden uris.
		 */
		getForbbidenUris() {
			return this.forbbidenUris;
		}
	}

	module.exports = Configuration;
});

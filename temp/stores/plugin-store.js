define(function (require, exports, module) {const Store = require('./store');

class PluginStore extends Store {
	/**
	 * Gets the plugins.
	 *
	 * @param      {Type}  type    The type
	 * @return     {Array<Plugin>}  The plugins.
	 */
	getPlugins(type) {
		const plugins = this.values();

		return plugins.filter(plugin => {
			if (plugin.type === type) {
				return true;
			}
			return false;
		});
	}

	/**
	 * Stores a plugin.
	 *
	 * @param      {Plugin}  plugin  The plugin
	 * @override
	 */
	store(plugin) {
		// if (this.isStored([plugin.identifier, plugin.type])) {
		// 	console.warn(`The key "${[plugin.identifier, plugin.type]}" is already registered, the content will be overwritten.`);
		// }
		super.store([plugin.identifier, plugin.type], plugin);
	}

	/**
	 * Unstores a plugin.
	 *
	 * @param      {Plugin}  plugin  The plugin
	 */
	unstore(plugin) {
		if (PluginStore.isStored([plugin.identifier, plugin.type]) === false) {
			console.warn(`The key "${[plugin.identifier, plugin.type]}" not exists in this manager`);
		} else {
			return super.unstore([plugin.identifier, plugin.type]);
		}
	}
}

module.exports = PluginStore;

});

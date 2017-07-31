const Store = require('./store');

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
		/**
		 * Warning : A registered plugin can be replaced by another one.
		 */
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

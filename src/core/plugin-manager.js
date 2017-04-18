/**
 * Class for plugin manager.
 *
 * @class      PluginManager (name)
 */
class PluginManager {
	/**
	 * Returns an array with all plugin identifiers.
	 *
	 * @return     {Array<String>}  Plugin identifiers array
	 */
	static identifiers() {
		return Object.keys(PluginManager.pluginsMap);
	}

	/**
	 * Return an array with all plugins registered.
	 *
	 * @return     {Array<Plugin>}  Plugins array
	 */
	static plugins() {
		return Object.keys(PluginManager.pluginsMap).map(key => {
			return PluginManager.pluginsMap[key];
		});
	}

	/**
	 * Determines if registered.
	 *
	 * @param      {Plugin}   plugin  The plugin
	 * @return     {boolean}  True if registered, False otherwise.
	 */
	static isRegistered(plugin) {
		return plugin.identifier in PluginManager.pluginsMap;
	}

	/**
	 * Registers a new plugin or throws an error.
	 *
	 * @param      {Plugin}  plugin  The plugin to register.
	 */
	static register(plugin) {
		if (plugin) {
			// TODO Something when register the same again
			if (PluginManager.isRegistered(plugin)) {
				console.warn(`Plugin "${plugin.identifier}" is already registered and will be overwritten`);
			}
			PluginManager.pluginsMap[plugin.identifier] = plugin;
		}
	}

	/**
	 * Gets the plugin.
	 *
	 * @param      {String}  name    The plugin name.
	 * @return     {Plugin}  The plugin.
	 */
	static getPlugin(name) {
		const plugins = PluginManager.plugins();
		return plugins.find(plugin => plugin.identifier === name);
	}

	/**
	 * Finds the mediaObject type.
	 *
	 * @param      {MediaObject}  mediaObject  The media object.
	 * @return     {String}	A plugin identifier as type or undefined.
	 */
	static findType(mediaObject) {
		let type;
		const plugins = PluginManager.plugins();
		plugins.some(plugin => {
			if (plugin.typeCheck(mediaObject)) {
				type = plugin.identifier;
				return true;
			}
			return false;
		});
		return type;
	}
}

/**
 * Static plugins map
 */
PluginManager.pluginsMap = {};

module.exports = PluginManager;

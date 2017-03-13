import Errors from './errors';

/**
 * Stores registered plugins in a private space.
 *
 * @private
 * @type    {Object}
 */
const pluginStorage = {};

/**
 * Reports whether or not a plugin has been registered.
 *
 * @private
 * @param {string} name The name of a plugin.
 * @returns {boolean} Whether or not the plugin has been registered.
 */
const pluginExists = name => name in pluginStorage;

/**
 * Groups all plugin related methods.
 *
 * @class Plugin
 * @since 0.2.0
 */
class Plugin {
    /**
     * Register a new plugin.
     *
     * @param {Plugin} plugin
     */
	static registerPlugin(plugin) {
		if (pluginExists(plugin.identifier)) {
			throw new Errors.PluginExists(plugin);
		}

		pluginStorage[plugin.identifier] = plugin;
	}

	/**
	 * Returns a plugin given its identifier.
	 *
	 * @static
	 * @param {any} pluginName Plugin identifier
	 * @returns Plugin
	 *
	 * @memberOf Plugin
	 */
	static getPlugin(pluginName) {
		return pluginExists(pluginName) ? pluginStorage[pluginName] : undefined;
	}

	/**
	 * Returns a plugin identifier given a mediaObject.
	 * It will check over all registered plugins if the mediaObject
	 * returns `true` for the typeCheck function.
	 *
	 * @static
	 * @param {any} mediaObject Media object initialized by media tag library.
	 * @returns string Plugin identifier
	 *
	 * @memberOf Plugin
	 */
	static findType(mediaObject) {
		console.log({pluginStorage});
		const pluginIds = Object.keys(pluginStorage);
		for (let i = 0; i < pluginIds.length; i++) {
			const pluginId = pluginIds[i];
			console.log({pluginId});
			const plugin = Plugin.getPlugin(pluginId);
			console.log({plugin});
			if (plugin.typeCheck(mediaObject)) {
				return pluginId;
			}
		}
		return false;
	}
}

export default Plugin;

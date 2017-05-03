const Store = require('./store');

class PluginStore extends Store {
	/**
	 * Gets the plugins.
	 *
	 * @param      {Type}  type    The type
	 * @return     {Array<Plugin>}  The plugins.
	 */
	static getPlugins(type) {
		const plugins = super.values();

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
	 */
	static store(plugin) {
		super.store([plugin.identifier, plugin.type], plugin);
	}

	/**
	 * Unstores a plugin.
	 *
	 * @param      {Plugin}  plugin  The plugin
	 */
	static unstore(plugin) {
		super.unstore([plugin.identifier, plugin.type]);
	}

	/**
	 * Shows content in the console.
	 */
	static print() {
		console.log(PluginStore.keys(), PluginStore.values());
	}

	/**
	 * Filters a plugin list by occurrence.
	 *
	 * @param      {Array<Plugin>}  plugins     The plugins
	 * @param      {Occurence}  occurrence  The occurrence
	 * @return     {Array<Plugin>}  The list of plugins with the same occurrence.
	 */
	static filterByOccurrence(plugins, occurrence) {
		return plugins.filter(plugin => {
			return plugin.occurrence === occurrence;
		});
	}

	/**
	 * Filters plugins by occurencies.
	 *
	 * @param      {Array<Plugin>}  plugins  The plugins
	 * @return     {Object}  Object contaning for all occurrencies a plugin lists.
	 */
	static filterByOccurrencies(plugins) {
		const result = {
			once: [],
			any: [],
			every: []
		};

		for (const plugin of plugins) {
			if (result[plugin.occurrence]) {
				result[plugin.occurrence].push(plugin);
			} else {
				result[plugin.occurrence] = Array.of(plugin);
			}
		}
		return result;
	}
}

module.exports = PluginStore;

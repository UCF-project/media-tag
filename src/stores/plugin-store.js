class PluginStore {
	/**
	 * Gets the plugins.
	 *
	 * @param      {Type}  type    The type
	 * @return     {Array<Plugin>}  The plugins.
	 */
	static getPlugins(type) {
		const plugins = PluginStore.values();

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
		if (PluginStore.isStored([plugin.identifier, plugin.type])) {
			console.warn(`The key "${[plugin.identifier, plugin.type]}" is already registered, the content will be overwritten.`);
		}
		PluginStore.map[[plugin.identifier, plugin.type]] = plugin;
	}

	/**
	 * Unstores a plugin.
	 *
	 * @param      {Plugin}  plugin  The plugin
	 */
	static unstore(plugin) {
		if (PluginStore.isStored([plugin.identifier, plugin.type])) {
			delete PluginStore.map[[plugin.identifier, plugin.type]];
		} else {
			console.warn(`The key "${[plugin.identifier, plugin.type]}" not exists in this manager`);
		}
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

	static isStored(key) {
		if (PluginStore.get(key)) {
			return true;
		}
		return false;
	}

	static get(key) {
		return PluginStore.map[key];
	}

	static keys() {
		return Object.keys(PluginStore.map);
	}

	static values() {
		const keys = PluginStore.keys();
		return keys.map(key => {
			return PluginStore.get(key);
		});
	}

	/* TODO Experimental */

	static knows(object) {
		const keys = Object.keys(PluginStore.map);
		const values = Object.keys(PluginStore.map).map(key => {
			return PluginStore.map[key];
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
		const keys = Object.keys(PluginStore.map);

		return keys.filter(key => {
			const obj = {};
			obj[object] = null;
			return key === Object.keys(obj)[0] || PluginStore.map[key] === object;
		}).map(key => {
			const result = {};
			result[key] = PluginStore.map[key];
			return result;
		});
	}
}

PluginStore.map = {};

module.exports = PluginStore;

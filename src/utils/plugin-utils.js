class PluginUtils {
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

module.exports = PluginUtils;

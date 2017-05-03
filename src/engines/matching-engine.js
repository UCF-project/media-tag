const PluginStore = require('../stores/plugin-store');
const Type = require('../enums/type');

class MatchingEngine {

	/**
	 * Returns a object containing the relation between a plugin identifier and
	 * the uri of the effective plugin.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @return     {Object}
	 */
	static start(mediaObject) {
		const matchers = PluginStore.getPlugins(Type.MATCHER);
		const matchedMatchers = matchers.filter(matcher => {
			return matcher.process(mediaObject);
		});
		const matchedIdentifiers = matchedMatchers.map(matcher => {
			return matcher.getIdentifier();
		});
		const object = {};

		matchedIdentifiers.forEach(identifier => {
			if (MatchingEngine.map) {
				object[identifier] = MatchingEngine.map[identifier];
			} else {
				throw new Error('No map registrated for the matching engine');
			}
		});
		return object;
	}

	/**
	 * Sets the map.
	 *
	 * @param      {UriStore}  map     The map
	 */
	static setMap(map) {
		MatchingEngine.map = map;
	}
}

module.exports = MatchingEngine;

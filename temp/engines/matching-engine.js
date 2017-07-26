define(function (require, exports, module) {const Assert = require('../utils/assert');
const Type = require('../enums/type');

class MatchingEngine {
	/**
	 * Constructs the object.
	 *
	 * @param      {PluginStore}  pluginStore  The plugin store
	 */
	constructor(pluginStore, uriStore) {
		Assert.that(pluginStore).not(undefined);
		Assert.that(uriStore).not(undefined);

		this.pluginStore = pluginStore;
		this.uriStore = uriStore;
	}

	/**
	 * Returns a object containing the relation between a plugin identifier and
	 * the uri of the effective plugin.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @return     {Object}
	 */
	start(mediaObject) {
		const matchers = this.pluginStore.getPlugins(Type.MATCHER);
		const matchedMatchers = matchers.filter(matcher => {
			return matcher.process(mediaObject);
		});
		const matchedIdentifiers = matchedMatchers.map(matcher => {
			return matcher.getIdentifier();
		});
		const object = {};

		matchedIdentifiers.forEach(identifier => {
			if (this.uriStore) {
				const uri = this.uriStore.get(identifier);
				if (uri === undefined) {
					throw new Error(`No uri related to identifier : ${identifier}`);
				}
				object[identifier] = uri;
			} else {
				throw new Error('No map registrated for the matching engine');
			}
		});
		return object;
	}
}

module.exports = MatchingEngine;

});

const Plugin = require('./plugin');

/**
 * Class for group plugins.
 *
 * @class      Group (name)
 */
class Group extends Plugin {
	/**
	 * Constructs the object.
	 */
	constructor(identifier, type, occurrence) {
		super(identifier, type, occurrence);
		this.plugins = [];
	}

	/**
	 * Adds a plugin.
	 *
	 * @param      {Plugin}  plugin  The plugin
	 */
	addPlugin(plugin) {
		if (this.plugins.includes(plugin) === false) {
			this.plugins.push(plugin);
		}
	}

	/**
	 * Removes a plugin.
	 *
	 * @param      {Identifier}  identifier  The identifier
	 * @param      {Type}  type        The type
	 * @param      {Occurrence}  occurrence  The occurrence
	 */
	removePlugin(identifier, type, occurrence) {
		if (!identifier) {
			throw new Error('Identifier is null or undefined');
		}

		this.plugin.filter(plugin => {
			if (type && occurrence) {
				return	identifier === plugin.identifier &&
						type === plugin.type &&
						occurrence === plugin.occurrence;
			}
			if (type) {
				return	identifier === plugin.identifier &&
						type === plugin.type;
			}
			return identifier === plugin.identifier;
		});
	}

	/**
	 * Starts all stored plugins on a media object.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	start(mediaObject) {
		this.plugins.forEach(plugin => {
			plugin.start(mediaObject);
		});
	}
}

module.exports = Group;

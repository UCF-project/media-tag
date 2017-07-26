define(function (require, exports, module) {const Renderer = require('../plugins/renderer');
const Filter = require('../plugins/filter');
const Matcher = require('../plugins/matcher');
const Sanitizer = require('../plugins/sanitizer');
const Plugin = require('../plugins/plugin');
const Group = require('../plugins/group');

const Permission = require('../enums/permission');
const Type = require('../enums/type');

class Configuration {
	/**
	 * Constructs the object.
	 *
	 * @param      {Object}  configuration  The configuration
	 */
	constructor(configuration) {
		Object.keys(configuration).forEach(key => {
			this[key] = configuration[key];
		});
	}

	/**
	 * Determines if allowed.
	 *
	 * @param      {<type>}   identifier  The identifier
	 * @return     {boolean}  True if allowed, False otherwise.
	 */
	isAllowed(identifier) {
		if (!this.permissions) {
			return Permission.ALLOWED;
		} else if (!this.permissions[identifier]) {
			return Permission.ALLOWED;
		}

		return this.permissions[identifier] !== Permission.FORBIDDEN;
	}

	/**
	 * Gets the permission.
	 *
	 * @param      {Identifier|string}  identifier  The identifier
	 * @return     {Permission|string}  The permission.
	 */
	getPermission(identifier) {
		if (!this.permissions) {
			return Permission.ALLOWED;
		} else if (!this.permissions[identifier]) {
			return Permission.ALLOWED;
		}
		return this.permissions[identifier];
	}

	/**
	 * Gets the object permissions for each identifier.
	 *
	 * @return     {Object}  The permissions.
	 */
	getPermissions() {
		return this.permissions || {};
	}

	/**
	 * Gets instanciated plugins from the configuration definition.
	 *
	 * @return     {Array<Plugin>}  The plugins.
	 */
	getPlugins() {
		if (!this.plugins) {
			return [];
		}
		return Object.keys(this.plugins).map(identifier => {
			// console.log('IDENTIFIER', identifier);
			return Object.keys(this.plugins[identifier]).map(type => {
				// console.log('TYPE', type);
				let plugin;

				switch (type) {
					case Type.RENDERER:
						plugin = new Renderer(identifier);
						break;
					case Type.FILTER:
						plugin = new Filter(identifier);
						break;
					case Type.SANITIZER:
						plugin = new Sanitizer(identifier);
						break;
					case Type.MATCHER:
						plugin = new Matcher(identifier);
						break;
					case Type.GROUP:
						plugin = new Group(identifier, type);
						break;
					default:
						plugin = new Plugin(identifier, type);
						break;
				}
				// console.log('PLUGIN', plugin);
				Object.keys(this.plugins[identifier][type]).forEach(attribute => {
					// console.log('ATTRIBUTE', attribute);
					const value = this.plugins[identifier][type][attribute];
					plugin[attribute] = (typeof value === 'function' && attribute === 'process') ?
						((plugin, process) => mediaObject => {
							return process(plugin, mediaObject);
						})(plugin, value) : value;
				});

				return plugin;
			});
		}).reduce((plugin, next) => plugin.concat(next));
	}

	getDefaultPlugin() {
		const defaultPluginName = this.processingEngine.defaultPlugin;

		return this.getPlugins().filter(plugin => {
			return plugin.identifier === defaultPluginName;
		}).reduce((defaultPlugin, next) => {
			if (defaultPlugin.getType() !== Type.MATCHER) {
				return defaultPlugin;
			}
			return next;
		});
	}
}

module.exports = Configuration;

});

const Occurrence = require('../../../enums/occurrence');
const Type = require('../../../enums/type');
const Plugin = require('../../../plugins/plugin');
const Stack = require('./stack');

class PluginStack extends Stack {
	/**
	 * Determines if plugin.
	 *
	 * @param      {Object}   object  The object
	 * @return     {boolean}  True if plugin, False otherwise.
	 */
	isPlugin(object) {
		return object instanceof Plugin;
	}

	/**
	 * Determines if stackable.
	 *
	 * @param      {Object}   object  The object
	 * @return     {boolean}  True if stackable, False otherwise.
	 */
	isStackable(object) {
		const conditions = [
			this.isPlugin(object),
			!this.content.some(plugin => {
				return	plugin.getIdentifier() === object.getIdentifier() &&
						plugin.getType() === object.getType() &&
						plugin.getOccurrence() === object.getOccurrence() &&
						(
							object.occurrence === Occurrence.ONCE ||
							object.occurrence === Occurrence.ANY
						);
			})
		];

		return conditions.reduce((result, next) => {
			return result && next;
		});
	}

	/**
	 * Stacks a plugin.
	 *
	 * @param      {Plugin}  plugin  The plugin
	 * @override
	 */
	stack(plugin) {
		if (!this.isPlugin(plugin)) {
			throw new Error(`It can't stacks a non plugin instance`);
		}
		if (!this.isStackable(plugin)) {
			throw new Error(`A unique plugin cannot by stacked multiple times`);
		}
		super.stack(plugin);
	}

	/**
	 * Determines if it has renderer.
	 *
	 * @return     {boolean}  True if has renderer, False otherwise.
	 */
	hasRenderer() {
		return this.content.some(plugin => {
			return plugin.type === Type.renderer;
		});
	}

	/**
	 * Determines if ending by renderer.
	 *
	 * @return     {boolean}  True if ending by renderer, False otherwise.
	 */
	isEndingByRenderer() {
		const plugin = this.base();

		return plugin.type === Type.RENDERER;
	}

	/**
	 * Creates a new instance of the object with same properties than original.
	 *
	 * @return     {PluginStack}  Copy of this object.
	 */
	clone() {
		return JSON.parse(JSON.stringify(this));
	}

	plugins() {
		return this.content();
	}
}

module.exports = PluginStack;

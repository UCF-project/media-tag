import DebugFactory from 'debug';
import FilterManager from './filter-manager';
import PluginManager from './plugin-manager';

const debug = new DebugFactory('MT:Engine');

/**
 * Engine class to handle filter and plugin execution.
 * The goal is to run before all filters who matches
 * with mediaObject attributes and finalize with a plugin
 * who modifies the DOM to display content.
 *
 * @class      Engine (name)
 */

class Engine {
	/**
	 * Runs the engine over a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	static startup(mediaObject) {
		const id = mediaObject.getId();
		Engine.chains[id] = Engine.matchingFilters(mediaObject);
		if (Engine.chains[id].length > 0) {
			Engine.filter(mediaObject);
		} else {
			Engine.plugin(mediaObject);
		}
	}

	/**
	 * Retunrs a array with all filters typeCheck matching with the current mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @return     {Array<Filter>}  A array of filters
	 */
	static matchingFilters(mediaObject) {
		return FilterManager.filters().filter(filter => {
			return filter.typeCheck(mediaObject);
		});
	}

	/**
	 * Runs filter on mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	static filter(mediaObject) {
		const id = mediaObject.getId();
		const length = Engine.chains[id].length;
		const filter = Engine.chains[id][length - 1];
		if (filter) {
			filter.startup(mediaObject);
		}
	}

	/**
	 * Runs plugin with mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	static plugin(mediaObject) {
		const plugin = Engine.findPlugin(mediaObject);
		if (plugin) {
			plugin.startup(mediaObject);
		}
	}

	/**
	 * Finds a filter which matching with the Filter.typeCheck.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @return     {Filter|undefined}  A filter
	 */
	static findFilter(mediaObject) {
		const filterIdentifier = FilterManager.findType(mediaObject);
		if (filterIdentifier) {
			return FilterManager.getFilter(filterIdentifier);
		}
		return undefined;
	}

	/**
	 * Finds the first plugin which matching with the Plugin.typeCheck.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @return     {Plugin|undefined}  A plugin
	 */
	static findPlugin(mediaObject) {
		const pluginIdentifier = PluginManager.findType(mediaObject);
		if (pluginIdentifier) {
			return PluginManager.getPlugin(pluginIdentifier);
		}
		return undefined;
	}

	/**
	 * Runs an other filter after poping the last executed;
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	static chain(mediaObject) {
		if (Engine.isCoherent(mediaObject)) {
			const id = mediaObject.getId();
			Engine.chains[id].pop();
			if (Engine.chains[id].length > 0) {
				Engine.filter(mediaObject);
			} else {
				Engine.plugin(mediaObject);
			}
		} else {
			throw new Error('Incohenrent filter chain');
		}
	}

	/**
	 * Determines if coherent filter chain.
	 *
	 * @param      {MediaObject}   mediaObject  The media object
	 * @return     {boolean}  True if coherent filter chain, False otherwise.
	 */
	static isCoherent(mediaObject) {
		return Engine.filterChainRuleCallback(mediaObject);
	}
}

/**
 * To handle filter chains.
 */
Engine.chains = {};

/**
 * Unique id generator.
 */
Engine.uid = (i => () => i++)(0);

/**
 * Callback who's returns a boolean after passing some conditions.
 *
 * With this configuration, a valid filter chain is a chain
 * which after each filter execution the number of matching
 * is less one the previous filter execution or equal for the
 * case of the default filter.
 *
 * @param      {MediaObject}   mediaObject  The media object
 * @return     {boolean}  Returns true if rules are respected, false otherwise.
 */
Engine.filterChainRuleCallback = mediaObject => {
	const id = mediaObject.getId();
	const beforeLength = Engine.chains[id].length;
	const afterLength = Engine.matchingFilters(mediaObject).length;
	const differences = afterLength - beforeLength;
	const filter = Engine.chains[id][beforeLength - 1];

	if (differences === 0 && filter.identifier === 'default') {
		debug('Default filter applied');
		return true;
	} else if (differences === -1) {
		return true;
	} else if (differences < -1) {
		debug(`The plugin ${filter.identifier} have alterate too hightly the mediaObject`);
		return true;
	}
	return false;
};

export default Engine;

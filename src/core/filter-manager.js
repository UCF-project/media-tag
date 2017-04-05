import Errors from './errors';

/**
 * Class for filter manager.
 *
 * @class      FilterManager (name)
 */

class FilterManager {
	/**
	 * Returns an array with all filter identifiers.
	 *
	 * @return     {Array<String>}  Filter identifiers array
	 */
	static identifiers() {
		return Object.keys(FilterManager.filtersMap);
	}

	/**
	 * Return an array with all filters registered.
	 *
	 * @return     {Array<Filter>}  Filters array
	 */
	static filters() {
		return Object.values(FilterManager.filtersMap);
	}

	/**
	 * Determines if registered.
	 *
	 * @param      {Filter}   filter  The filter
	 * @return     {boolean}  True if registered, False otherwise.
	 */
	static isRegistered(filter) {
		return filter.identifier in FilterManager.filtersMap;
	}

	/**
	 * Registers a new filter or throws an error.
	 *
	 * @param      {Filter}  filter  The filter to register.
	 */
	static register(filter) {
		if (filter) {
			if (FilterManager.isRegistered(filter)) {
				throw new Errors.FilterExists(filter);
			}
			FilterManager.filtersMap[filter.identifier] = filter;
		}
	}

	/**
	 * Gets the filter.
	 *
	 * @param      {String}  name    The filter name.
	 * @return     {Filter}  The filter.
	 */
	static getFilter(name) {
		const filters = FilterManager.filters();
		return filters.find(filter => filter.identifier === name);
	}

	/**
	 * Finds the mediaObject type.
	 *
	 * @param      {MediaObject}  mediaObject  The media object.
	 * @return     {String}	A filter identifier as type or undefined.
	 */
	static findType(mediaObject) {
		let type;
		const filters = FilterManager.filters();
		filters.some(filter => {
			if (filter.typeCheck(mediaObject)) {
				type = filter.identifier;
				return true;
			}
			return false;
		});
		return type;
	}
}

/**
 * Static filters map
 */
FilterManager.filtersMap = {};

export default FilterManager;

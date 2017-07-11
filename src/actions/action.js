/**
 * Actions bundle.
 *
 * @type       {Object}
 */

const Action = {
	clear: require('./clear'),
	show: require('./show'),
	hide: require('./hide'),
	upgrade: require('./upgrade'),
	downgrade: require('./downgrade'),
	activate: require('./activate')
};

module.exports = Action;

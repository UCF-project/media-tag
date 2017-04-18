// const Engine = require('../core/engine');
const Orchestrator = require('../core/orchestrator');

/**
 * Default filter which checking the presence of 'src' and 'data-type' attributes.
 *
 * @type       {Filter}
 */

const DefaultFilter = {
	identifier: 'default',
	// typeCheck: mediaObject => {
	// 	const result =	mediaObject.hasAttribute('src') &&
	// 					mediaObject.hasAttribute('data-type');
	// 	if (result) {
	// 		return result;
	// 	}
	// 	throw new Error('Malformatted media-tag, it must have an attribute "src" and "data-type"');
	// },
	startup: mediaObject => {
		Orchestrator.chain(mediaObject);
	}
};

module.exports = DefaultFilter;

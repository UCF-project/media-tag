// const Engine = require('../core/engine');
const Orchestrator = require('../core/orchestrator');

/**
 * Filter which checking the presence of 'data-clear-key' attribute and
 * extract the id and the key to enable mpeg-dash content decryption.
 *
 * @type       {Filter}
 */

const ClearKeyFilter = {
	identifier: 'clear-key',
	// typeCheck: mediaObject => {
	// 	return	mediaObject.hasAttribute('data-clear-key');
	// },
	startup: mediaObject => {
		const clearKey = mediaObject.getAttribute('data-clear-key');
		const id = clearKey.substring(0, 32);
		const key = clearKey.substring(33, 65);
		mediaObject.setAttribute('id', id);
		mediaObject.setAttribute('key', key);
		mediaObject.removeAttribute('data-clear-key');
		Orchestrator.chain(mediaObject);
	}
};

module.exports = ClearKeyFilter;

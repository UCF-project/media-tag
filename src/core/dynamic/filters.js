/* global define */

/**
 * Static mapping of filters for dynamic filter loading.
 */
define((require, exports, module) => {
	module.exports = {
		DEFAULT: '../../filters/default',
		CRYPTO: '../../filters/crypto',
		CLEAR_KEY: '../../filters/clear-key'
	};
});

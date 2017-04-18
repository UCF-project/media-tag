/* global define */

/**
 * Static mapping of filters for dynamic plugin loading.
 */
define((require, exports, module) => {
	module.exports = {
		IMAGE: '../../plugins/image',
		AUDIO: '../../plugins/audio',
		VIDEO: '../../plugins/video',
		PDF: '../../plugins/pdf',
		DASH: '../../plugins/dash'
	};
});

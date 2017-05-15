/* global define, document */

define(require => {
	/**
	 * MediaTag with all this features.
	 *
	 * @type       {Function}
	 */
	const MediaTag = require('media-tag');

	/**
	 * Can process on various nodes at same time.
	 *
	 * @type       {Array}
	 */
	const nodes = [
		document.querySelector('media-tag#image-encrypted'),
		document.querySelector('media-tag#audio-encrypted'),
		document.querySelector('media-tag#video-encrypted'),
		document.querySelector('media-tag#dash-encrypted'),
		document.querySelector('media-tag#pdf-encrypted'),
		document.querySelector('media-tag#failure-encrypted')
	];

	/**
	 * Returns nothing, results are accessibles
	 * from <media-tag> node with attribute mediaObject
	 */
	MediaTag(nodes);
});

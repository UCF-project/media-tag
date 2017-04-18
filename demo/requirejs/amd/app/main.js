/* global define, document */

define(require => {
	const MediaTag 		= require('core/dynamic/media-tag');
	const Configuration = require('core/dynamic/configuration');
	const FilterUri 	= require('core/dynamic/filters');
	const PluginUri 	= require('core/dynamic/plugins');

	/**
	 * Static preset for the orchestrator.
	 */
	const Guidelines = require('orchestration/guidelines/all');

	/**
	 * A new configuration for MediaTag.
	 * A required module is loaded even if is not used.
	 * A forbidden module is never loaded.
	 *
	 * @type       {Configuration}
	 */
	const configuration = new Configuration(
		[	/* FILTERS REQUIRED */
			/**
			 * NONE
			 */
		],
		[	/* PLUGINS REQUIRED */
			/**
			 * NONE
			 */
		],
		[	/* FORBIDDEN MODULES */
			FilterUri.DEFAULT,	// Disable well formatted checking
			PluginUri.PDF		// Disable PDF renders
		]);

	/**
	 * Apply the configuation.
	 */
	MediaTag.configure(configuration);

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
		document.querySelector('media-tag#pdf-encrypted')
	];

	/**
	 * Returns nothing, results are accessibles
	 * from <media-tag> node with attribute mediaObject
	 */
	nodes.forEach(node => {
		MediaTag(node);
	});
});

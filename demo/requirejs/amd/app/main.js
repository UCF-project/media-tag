/* global define, document */

define(require => {
	const MediaTag 		= require('core/dynamic/media-tag');
	const Configuration = require('configuration');
	const Identifier = require('enums/identifier');
	const Permission = require('enums/permission');
	const MatchingEngineMap = require('maps/matching-engine');

	/** STEP I
	 * MediaTag is initially empty from any plugins.
	 *
	 * Matchers plugins are absolutely required to detect if active plugin
	 * part is needed or not. If is it then loading module will load dynamically
	 * required active parts.
	 *
	 * So we start to register matchers otherwise it's impossible to detect
	 * anything with the MediaTag.
	 */

	const ImageMatcher = require('plugins/matchers/renderers/image');
	const AudioMatcher = require('plugins/matchers/renderers/audio');
	const VideoMatcher = require('plugins/matchers/renderers/video');
	const PdfMatcher = require('plugins/matchers/renderers/pdf');
	const DashMatcher = require('plugins/matchers/renderers/dash');
	const DownloadMatcher = require('plugins/matchers/renderers/download');

	const CryptoMatcher = require('plugins/matchers/filters/crypto');
	const ClearKeyMatcher = require('plugins/matchers/filters/clear-key');

	const MediaObjectMatcher = require('plugins/matchers/sanitizers/media-object');

	MediaTag.PluginStore.store(new ImageMatcher());
	MediaTag.PluginStore.store(new AudioMatcher());
	MediaTag.PluginStore.store(new VideoMatcher());
	MediaTag.PluginStore.store(new PdfMatcher());
	MediaTag.PluginStore.store(new DashMatcher());
	MediaTag.PluginStore.store(new DownloadMatcher());

	MediaTag.PluginStore.store(new CryptoMatcher());
	MediaTag.PluginStore.store(new ClearKeyMatcher());

	MediaTag.PluginStore.store(new MediaObjectMatcher());

	/** STEP II
	 * We have plugins able to detect if an active part is needed by media
	 * object.
	 *
	 * Now we need to do the relation between a matching plugin and this active
	 * part. For that we need to register the matching engine map.
	 */

	MediaTag.setMap(MatchingEngineMap);

	/** STEP III
	 * A configuration for MediaTag plugin active part loading.
	 *
	 * @type       {Configuration}
	 */

	const configuration = new Configuration();

	configuration.setPermission(Identifier.IMAGE, Permission.FORBIDDEN);
	configuration.setPermission(Identifier.AUDIO, Permission.ALLOWED);
	configuration.setPermission(Identifier.VIDEO, Permission.ALLOWED);
	configuration.setPermission(Identifier.PDF, Permission.ALLOWED);
	configuration.setPermission(Identifier.DASH, Permission.ALLOWED);
	configuration.setPermission(Identifier.CRYPTO, Permission.REQUIRED);
	configuration.setPermission(Identifier.CLEAR_KEY, Permission.ALLOWED);
	configuration.setPermission(Identifier.MEDIA_OBJECT, Permission.ALLOWED);

	/**
	 * Apply the configuation to MediaTag
	 */
	MediaTag.configure(configuration);

	/** STEP IV
	 * We configure which algorithms are used by CryptoFilter
	 */
	const CryptoFilter = require('plugins/filters/crypto');

	const Salsa20Poly1305Algorithm = require('../algorithms/salsa20poly1305');

	CryptoFilter.FunctionStore.store('salsa20poly1305', Salsa20Poly1305Algorithm);

	/** STEP V
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

	const RunningEngine = require('engines/running-engine');
	console.log(RunningEngine.snapshots);
});

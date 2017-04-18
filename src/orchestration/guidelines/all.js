const Guidelines = require('../guidelines');

/**
 * Object with logics to statically register.
 *
 * @type       {Object}
 */

const logics = {
	FilterDefaultLogic: require('../logics/filters/default'),
	FilterCryptoLogic: require('../logics/filters/crypto'),
	FilterClearKeyLogic: require('../logics/filters/clear-key'),

	PluginImageLogic: require('../logics/plugins/image'),
	PluginAudioLogic: require('../logics/plugins/audio'),
	PluginVideoLogic: require('../logics/plugins/video'),
	PluginPdfLogic: require('../logics/plugins/pdf'),
	PluginDashLogic: require('../logics/plugins/dash')
};

/**
 * Register logics by their identifiers
 */

Guidelines.registerLogics(logics);

module.exports = Guidelines;

/* global document */
const MediaTag = require('../../src/presets/media-tag');
const Plugin = require('../../src/plugins/plugin');
const Matcher = require('../../src/plugins/matcher');
const Filter = require('../../src/plugins/filter');
const Sanitizer = require('../../src/plugins/sanitizer');
const RunningEngine = require('../../src/engines/running-engine');

const Identifier = require('../../src/enums/identifier');
const Type = require('../../src/enums/type');

/**
 * Front-end to create fake plugin objects.
 *
 * @class      FakePluginFactory (name)
 */
class FakePluginFactory {
	/**
	 * Creates a fake plugin.
	 *
	 * @param      {<type>}  identifier  The identifier
	 * @param      {<type>}  type        The type
	 * @param      {<type>}  occurrency  The occurrency
	 */
	static createFakePlugin(identifier, type, occurrency) {
		const plugin = new Plugin(identifier, type, occurrency);

		plugin.process = mediaObject => {
			console.log('Plugin is processing', mediaObject);
		};
	}

	/**
	 * Creates a fake matcher.
	 *
	 * @param      {<type>}  identifier  The identifier
	 * @param      {<type>}  targetType  The target type
	 * @return     {<type>}  { description_of_the_return_value }
	 */
	static createFakeMatcher(identifier, targetType) {
		const matcher = new Matcher(identifier, targetType);

		matcher.process = mediaObject => {
			console.log(`Matcher ${identifier} is processing`);
			return mediaObject.hasAttribute(matcher.identifier);
		};

		return matcher;
	}

	/**
	 * Creates a fake sanitizer matcher.
	 *
	 * @param      {<type>}   identifier  The identifier
	 * @param      {<type>}   targetType  The target type
	 * @return     {Matcher}  { description_of_the_return_value }
	 */
	static createFakeSanitizerMatcher(identifier, targetType) {
		const matcher = new Matcher(identifier, targetType);

		matcher.process = mediaObject => {
			console.log(`Matcher ${identifier} is processing`);
			return mediaObject.hasAttribute('src') && mediaObject.hasAttribute('data-type');
		};

		return matcher;
	}

	/**
	 * Creates a fake filter.
	 *
	 * @param      {<type>}  identifier  The identifier
	 */
	static createFakeFilter(identifier) {
		const filter = new Filter(identifier);

		filter.process = mediaObject => {
			console.log(`Filter ${identifier} is processing`);
			mediaObject.removeAttribute(filter.identifier);
			RunningEngine.return(mediaObject);
		};

		return filter;
	}

	/**
	 * Creates a fake sanitizer.
	 *
	 * @param      {<type>}  identifier  The identifier
	 */
	static createFakeSanitizer(identifier) {
		const sanitizer = new Sanitizer(identifier);

		sanitizer.process = mediaObject => {
			console.log(`Sanitizer ${identifier} is processing ${mediaObject}`);
			RunningEngine.return(mediaObject);
		};

		return sanitizer;
	}
}

/**
 * Class for fake plugin templater.
 *
 * @class      FakePluginTemplater (name)
 */
class FakePluginTemplater {
	/**
	 * Creates a html.
	 *
	 * @param      {<type>}  fakePlugin  The fake plugin
	 * @return     {<type>}  { description_of_the_return_value }
	 */
	static createMediaTagElement(fakePlugin) {
		const mediaTagElement = document.createElement('media-tag');

		mediaTagElement.setAttribute('src', 'nothing');
		mediaTagElement.setAttribute('data-type', 'none');
		mediaTagElement.setAttribute(fakePlugin.identifier, true);

		return mediaTagElement;
	}
}

const FAKE_PLUGIN_COUNT = 10;

MediaTag.fakeMediaTagElements = [];

for (let i = 1; i <= FAKE_PLUGIN_COUNT / 2; i++) {
	const identifier = ('TEST_' + i).toLowerCase();
	const matcher = FakePluginFactory.createFakeMatcher(identifier, Type.FILTER);
	const filter = FakePluginFactory.createFakeFilter(identifier);

	MediaTag.PluginStore.store(matcher);
	MediaTag.PluginStore.store(filter);
	Identifier[identifier] = identifier;
	MediaTag.fakeMediaTagElements.push(FakePluginTemplater.createMediaTagElement(filter));
}

for (let i = (FAKE_PLUGIN_COUNT / 2) + 1; i <= FAKE_PLUGIN_COUNT; i++) {
	const identifier = ('TEST_' + i).toLowerCase();
	const matcher = FakePluginFactory.createFakeSanitizerMatcher(identifier);
	const sanitizer = FakePluginFactory.createFakeSanitizer(identifier);

	MediaTag.PluginStore.store(matcher);
	MediaTag.PluginStore.store(sanitizer);
	Identifier[identifier] = identifier;
	MediaTag.fakeMediaTagElements.push(FakePluginTemplater.createMediaTagElement(sanitizer));
}

module.exports = MediaTag;

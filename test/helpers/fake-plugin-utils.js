/* global document */
const MediaTag = require('../../src/presets/static/media-tag');
const Matcher = require('../../src/plugins/matcher');
const Filter = require('../../src/plugins/filter');
const Sanitizer = require('../../src/plugins/sanitizer');

const Identifier = require('../../src/enums/identifier');
const Type = require('../../src/enums/type');

/**
 * Front-end to create fake plugin objects.
 *
 * @class      FakePluginFactory (name)
 */
class FakePluginFactory {
	/**
	 * Creates a fake matcher.
	 *
	 * @param      {Identifier}  identifier  The identifier
	 * @param      {Type}  targetType  The target type
	 * @return     {Matcher}
	 */
	static createFakeMatcher(identifier, targetType) {
		const matcher = new Matcher(identifier, targetType);

		matcher.process = mediaObject => {
			this.called = true;
			this.times = 0 || this.times++;
			return mediaObject.hasAttribute(matcher.identifier);
		};

		return matcher;
	}

	/**
	 * Creates a fake sanitizer matcher.
	 *
	 * @param      {Identifier}   identifier  The identifier
	 * @param      {Type}   targetType  The target type
	 * @return     {Matcher}
	 */
	static createFakeSanitizerMatcher(identifier, targetType) {
		const matcher = new Matcher(identifier, targetType);

		matcher.process = mediaObject => {
			this.called = true;
			this.times = 0 || this.times++;
			return mediaObject.hasAttribute('src') && mediaObject.hasAttribute('data-type');
		};

		return matcher;
	}

	/**
	 * Creates a fake filter.
	 *
	 * @param      {Identifier}  identifier  The identifier
	 * @return     {Filter}
	 */
	static createFakeFilter(identifier) {
		const filter = new Filter(identifier);

		filter.process = mediaObject => {
			this.called = true;
			this.times = 0 || this.times++;
			mediaObject.removeAttribute(filter.identifier);
			MediaTag.processingEngine.return(mediaObject);
		};

		return filter;
	}

	/**
	 * Creates a fake sanitizer.
	 *
	 * @param      {Identifier}  identifier  The identifier
	 * @return     {Sanitizer}
	 */
	static createFakeSanitizer(identifier) {
		const sanitizer = new Sanitizer(identifier);

		sanitizer.process = mediaObject => {
			this.called = true;
			this.times = 0 || this.times++;
			MediaTag.processingEngine.return(mediaObject);
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
	 * @param      {Plugin}  fakePlugin  The fake plugin
	 * @return     {Element}  <media-tag> element.
	 */
	static createMediaTagElement(plugin) {
		const element = document.createElement('media-tag');

		element.setAttribute('src', null);
		element.setAttribute('data-type', null);
		element.setAttribute(plugin.identifier, 'fake-template');

		return element;
	}

	/**
	 * Creates media tag elements.
	 *
	 * @param      {Array<Plugin>}  plugins  The plugins
	 * @return     {Array<Element>}  Array of <media-tag> elements.
	 */
	static createMediaTagElements(plugins) {
		return plugins.map(plugin => {
			return FakePluginTemplater.createMediaTagElement(plugin);
		});
	}

	/**
	 * Determines if fake template.
	 *
	 * @param      {Element}   element  The element
	 * @return     {boolean}  True if fake template, False otherwise.
	 */
	static isFakeTemplate(element) {
		return 	element.getAttribute('src') === null &&
				element.getAttribute('data-type') === null &&
				Array.of(...Object.values(element.attributes)).includes('fake-template'); // It's OVER ES6 !!!
	}
}

const FakePluginUtils = {};

FakePluginUtils.Factory = FakePluginFactory;
FakePluginUtils.Templater = FakePluginTemplater;

FakePluginUtils.nextId = (i => () => i++)(0);

FakePluginUtils.generate = (quantity, type) => {
	const plugins = [];

	while (quantity > 0) {
		const identifier = 'test_' + FakePluginUtils.nextId();
		let matcher;
		let plugin;

		Identifier[identifier.toUpperCase()] = identifier;

		switch (type) {
			case Type.FILTER:
				matcher = FakePluginUtils.Factory.createFakeMatcher(identifier, type);
				plugin = FakePluginUtils.Factory.createFakeFilter(identifier);
				break;
			case Type.SANITIZER:
				matcher = FakePluginUtils.Factory.createFakeSanitizerMatcher(identifier, type);
				plugin = FakePluginUtils.Factory.createFakeSanitizer(identifier);
				break;
			default:
				console.log('TYPE GENERATED:', type);
		}
		if (matcher && plugin) {
			plugins.push(matcher);
			plugins.push(plugin);
		} else {
			let message = 'Type: ' + type + '\n';

			if (!matcher) {
				message += 'Matcher is undefined \n';
			}
			if (!matcher) {
				message += 'Plugin is undefined \n';
			}
			throw new Error(message);
		}
		quantity--;
	}

	return plugins;
};

FakePluginUtils.register = plugins => {
	for (const plugin of plugins) {
		MediaTag.pluginStore.store(plugin);
	}
};

module.exports = FakePluginUtils;

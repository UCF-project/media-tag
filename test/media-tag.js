/* global document, describe, it */
import chai from 'chai';
import mediaTag from '../src/presets/static/media-tag';
import Identifier from '../src/enums/identifier';
import Type from '../src/enums/type';
import CryptoFilter from '../src/plugins/filters/crypto';
import FakePluginUtils from './helpers/fake-plugin-utils';

describe('Create different media tag contents: ', () => {
	it('can create a media-tag containing an image', () => {
		// Create container for media tag
		const mediaTagContainer = document.createElement('media-tag');
		mediaTagContainer.setAttribute('src', 'image-without-extension');
		mediaTagContainer.setAttribute('data-type', 'image/png');
		mediaTagContainer.setAttribute('data-attr-width', '300px');
		mediaTagContainer.setAttribute('data-attr-height', '200px');

		// Create contents based on the attributes
		mediaTag(mediaTagContainer);

		// Create the expected element
		const expectedResult = document.createElement('img');
		expectedResult.setAttribute('src', 'image-without-extension');
		expectedResult.setAttribute('width', '300px');
		expectedResult.setAttribute('height', '200px');

		// Compare expected contents
		// Like this we avoid problems when browsers change the order
		// of the attributes
		chai.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), 'media tag result element is like the expected element');
	});

	it('can create a media-tag containing an audio', () => {
		// Create container for media tag
		const mediaTagContainer = document.createElement('media-tag');
		mediaTagContainer.setAttribute('src', 'alterway.mp3');
		mediaTagContainer.setAttribute('data-type', 'audio/mp3');
		mediaTagContainer.setAttribute('data-attr-controls', 'controls');

		// Create contents based on the attributes
		mediaTag(mediaTagContainer);

		// Create the expected element
		const expectedResult = document.createElement('audio');
		expectedResult.setAttribute('src', 'alterway.mp3');
		expectedResult.setAttribute('controls', 'controls');

		// Compare expected contents
		// Like this we avoid problems when browsers change the order
		// of the attributes
		chai.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), 'media tag result element is like the expected element');
	});

	it('can create a media-tag containing a video', () => {
		// Create container for media tag
		const mediaTagContainer = document.createElement('media-tag');
		mediaTagContainer.setAttribute('src', 'cube.mp4');
		mediaTagContainer.setAttribute('data-type', 'video/mp4');
		mediaTagContainer.setAttribute('data-attr-width', '300px');
		mediaTagContainer.setAttribute('data-attr-height', '200px');

		// Create contents based on the attributes
		mediaTag(mediaTagContainer);

		// Create the expected element
		const expectedResult = document.createElement('video');
		expectedResult.setAttribute('src', 'cube.mp4');
		expectedResult.setAttribute('width', '300px');
		expectedResult.setAttribute('height', '200px');

		// Compare expected contents
		// Like this we avoid problems when browsers change the order
		// of the attributes
		chai.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), 'media tag result element is like the expected element');
	});
});

describe('Several plugins usage', () => {
	it('can instanciate some fake plugins', () => {
		const quantity = 5;
		const filterPlugins = FakePluginUtils.generate(quantity, Type.FILTER);
		const sanitizerPlugins = FakePluginUtils.generate(quantity, Type.SANITIZER);

		chai.assert.isTrue(filterPlugins.length === 10, 'filters are not instancied');
		chai.assert.isTrue(sanitizerPlugins.length === 10, 'saintizers are not instancied');
	});

	it('can register some fake plugins', () => {
		const quantity = 5;
		const filterPlugins = FakePluginUtils.generate(quantity, Type.FILTER);
		const sanitizerPlugins = FakePluginUtils.generate(quantity, Type.SANITIZER);

		FakePluginUtils.register(filterPlugins);
		FakePluginUtils.register(sanitizerPlugins);

		for (const filter of filterPlugins) {
			const result = Object.values(Identifier).includes(filter.identifier);
			chai.assert.isTrue(result, `filter identifier ${filter.identifier} is not registered`);
		}
	});

	it('can create filters templated elements', () => {
		const filters = mediaTag.pluginStore.getPlugins(Type.FILTER);

		filters.forEach(filter => {
			if (filter.called) {
				chai.assert.isTrue(filter.times > 0, 'incoherent filter state');
				const element = FakePluginUtils.Templater.createMediaTagElement(filter);
				chai.assert.isTrue(element.src === null, 'src is not null');
				chai.assert.isTrue(element['data-type'] === null, 'data-type is not null');
				chai.assert.isTrue(element[filter.identifier] === 'fake-template', 'is not a fake template');
			}
		});
	});

	it('can run media-tag on filter templated elements', () => {
		const filters = mediaTag.pluginStore.getPlugins(Type.FILTER);
		const filterTemplatedElements = FakePluginUtils.Templater.createMediaTagElements(filters);
		mediaTag(filterTemplatedElements);
	});
});

describe('CryptoFilter allowed types manipulations', () => {
	it('can\'t has already allowed media types', () => {
		const mediaTypes = CryptoFilter.getAllowedMediaTypes();

		chai.assert.isTrue(mediaTypes.length === 0, 'CryptoFilter contains allowed media types');
	});

	it('can allow all media types', () => {
		const mediaTypes = [
			'image',
			'audio',
			'video',
			'pdf',
			'dash'
		];

		CryptoFilter.setAllowedMediaTypes(mediaTypes);
		chai.assert.isTrue(CryptoFilter.getAllowedMediaTypes().length === mediaTypes.length, 'CryptoFilter not contains the same amount of allowed mediaTypes');
	});

	it('can remove all media types', () => {
		const mediaTypes = [
			'image',
			'audio',
			'video',
			'pdf',
			'dash'
		];

		CryptoFilter.removeAllAllowedMediaTypes(mediaTypes);
		chai.assert.isTrue(CryptoFilter.getAllowedMediaTypes().length === 0, 'CryptoFilter always contains a media type');
	});

	it('can find an allowed media type', () => {
		const mediaTypes = [
			'image',
			'audio',
			'video',
			'pdf',
			'dash'
		];

		CryptoFilter.setAllowedMediaTypes(mediaTypes);
		chai.assert.isTrue(CryptoFilter.isAllowedMediaType('dash'), 'CryptoFilter not contains "dash" media type');
	});

	it('can\'t find an allowed media type', () => {
		const mediaTypes = [
			'image',
			'audio',
			'video',
			'pdf',
			'dash'
		];

		CryptoFilter.setAllowedMediaTypes(mediaTypes);
		chai.assert.isFalse(CryptoFilter.isAllowedMediaType('penguins'), 'CryptoFilter not contains "penguins" media type');
	});
});

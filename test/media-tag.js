/* global document, describe, it */
import chai from 'chai';
import mediaTag from '../src/media-tag';

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

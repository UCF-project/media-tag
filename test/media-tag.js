/* global document */
import test from 'ava';
import mediaTag from '../src/media-tag';

test('can create a media-tag containing an image', t => {
	// Create container for media tag
	const mediaTagContainer = document.createElement('media-tag');
	mediaTagContainer.setAttribute('src', 'image-without-extension');
	mediaTagContainer.setAttribute('data-type', 'image');
	mediaTagContainer.setAttribute('data-attr-width', '300px');
	mediaTagContainer.setAttribute('data-attr-height', '200px');

	// Create contents based on the attributes
	mediaTag(mediaTagContainer);

	// Can't use snapshots for now https://github.com/avajs/ava/issues/1218
	// Compare contents of media container
	// TODO: remove eslint-disable when it lands in xo https://github.com/avajs/eslint-plugin-ava/issues/169
	// t.snapshot({mediaInnerHtml: mediaTagContainer.innerHTML}); // eslint-disable-line  ava/use-t-well

	t.is(mediaTagContainer.innerHTML, '<img src="image-without-extension" height="200px" width="300px">');
});

test('can create a media-tag containing an audio', t => {
	// Create container for media tag
	const mediaTagContainer = document.createElement('media-tag');
	mediaTagContainer.setAttribute('src', 'alterway.mp3');
	mediaTagContainer.setAttribute('data-type', 'audio');
	mediaTagContainer.setAttribute('data-attr-controls', 'controls');

	// Create contents based on the attributes
	mediaTag(mediaTagContainer);

	// Can't use snapshots for now https://github.com/avajs/ava/issues/1218
	// Compare contents of media container
	// TODO: remove eslint-disable when it lands in xo https://github.com/avajs/eslint-plugin-ava/issues/169
	// t.snapshot({mediaInnerHtml: mediaTagContainer.innerHTML}); // eslint-disable-line  ava/use-t-well

	t.is(mediaTagContainer.innerHTML, '<audio src="alterway.mp3" controls="controls"></audio>');
});

test('can create a media-tag containing a video', t => {
	// Create container for media tag
	const mediaTagContainer = document.createElement('media-tag');
	mediaTagContainer.setAttribute('src', 'cube.mp4');
	mediaTagContainer.setAttribute('data-type', 'video');
	mediaTagContainer.setAttribute('data-attr-width', '300px');
	mediaTagContainer.setAttribute('data-attr-height', '200px');

	// Create contents based on the attributes
	mediaTag(mediaTagContainer);

	// Can't use snapshots for now https://github.com/avajs/ava/issues/1218
	// Compare contents of media container
	// TODO: remove eslint-disable when it lands in xo https://github.com/avajs/eslint-plugin-ava/issues/169
	// t.snapshot({mediaInnerHtml: mediaTagContainer.innerHTML}); // eslint-disable-line  ava/use-t-well

	t.is(mediaTagContainer.innerHTML, '<video src="cube.mp4" height="200px" width="300px"></video>');
});

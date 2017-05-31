/* global document, shaka */
const Renderer =	require('../renderer');
const Identifier = 	require('../../enums/identifier');
const MediaTag = 	require('../../core/media-tag');

class DashRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.DASH);
	}

	/**
	 * Job to realise to render a dash with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const video = document.createElement('video');
		const player = new shaka.Player(video);
		const id = mediaObject.getAttribute('id');
		const key = mediaObject.getAttribute('key');

		if (id && key) {
			const clearKeyStringObject = '{"' + id + '": "' + key + '"}';
			const clearKey = JSON.parse(clearKeyStringObject);
			player.configure({
				drm: {
					clearKeys: clearKey
				}
			});
		}
		video.setAttribute('controls', true);
		mediaObject.utilsSetAllDataAttributes(video);
		mediaObject.replaceContents([video]);
		player.load(mediaObject.getAttribute('src')).then(() => {});

		MediaTag.processingEngine.return(mediaObject);
	}
}

module.exports = DashRenderer;

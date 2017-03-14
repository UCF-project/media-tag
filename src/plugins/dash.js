/* global document, shaka */

/**
 * @module ImagePlugin
 * @since 0.2.0
 */

const validCryptoKeyTags = ['clearkey'];

const DashPlugin = {
	identifier: 'dash',
	typeCheck: mediaObj => {
		const contract = [
			mediaObj.hasAttribute('data-crypto-src'),
			mediaObj.hasAttribute('data-crypto-key'),
			mediaObj.hasAttribute('data-crypto-type'),
			mediaObj.getAttribute('data-crypto-type') === 'dash'
		];

		for (const condition of contract) {
			if (!condition) {
				console.log(contract);
				return false;
			}
		}
		return true;
	},
	startup: mediaObj => {
		const video = document.createElement('video');
		const player = new shaka.Player(video);
		const array = mediaObj.rootElement.getAttribute('data-crypto-key').split(':');
		const tag = array[0];
		const id = array[1];
		const key = array[2];
		const clearkeyText = '{"' + id + '": "' + key + '"}';

		video.controls = true;
		mediaObj.utilsSetAllDataAttributes(video);
		mediaObj.replaceContents([video]);

		if (validCryptoKeyTags.includes(tag)) {
			player.configure({
				drm: {
					clearKeys: JSON.parse(clearkeyText)
				}
			});
		}

		player.load(mediaObj.rootElement.getAttribute('data-crypto-src')).then(() => {});
	}
};

export default DashPlugin;

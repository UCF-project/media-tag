#Plugin

We can add new plugins to current media-tag v2.

## Create a plugin

Under ```src/plugins/```, the first set consist to create a extended plugin component.

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

Example with dash plugin adding ```dash.js```

```
/* global document, shaka */

/**
 * @module DashPlugin
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
```

## Setup your plugin reference

Into to ```src/media-tag.js``` you need to register your fresh plugin by insert this :

```
// Plugin :: Dash
const DashPlugin = require('./plugins/dash').default;

MediaTag.registerPlugin(DashPlugin);
```



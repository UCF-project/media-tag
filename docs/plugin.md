# Plugin

We can add new plugins to current media-tag v2.

## Create a plugin

Under ```src/plugins/```, the first set consist to create a extended plugin component.

| Propertie | Type | Description |
|-----------|------|-------------|
| identifier | string | Plugin identifier |
| typeCheck | callback | Type checking |
| startup | callback | right-aligned |

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

Into ```src/media-tag.js``` you need to register your fresh plugin by insert this :

```
// Plugin :: Dash
const DashPlugin = require('./plugins/dash').default;

MediaTag.registerPlugin(DashPlugin);
```

## Add a new plugin using crypto plugin

The ```<media-tag>``` element should have at least three attributes:
   - data-crypto-type: which is the file type associated to the decrypted file, check CryptoPlugin.validCryptoTypes for valid values
   - data-crypto-src: encrypted file URL
   - data-crypto-key: key to decrypt the file

Inside ```src/plugins/crypto/index```, you need to add your custom crypto-type :

``` const validCryptoTypes = ['image', 'video', '<custom>'... ]; ```

example : ``` const validCryptoTypes = ['image', 'video', 'audio', 'dash' ]; ```

If you want use the current encryption/decryption algorithm that's all.
Else, into ```src/plugins/crypto/decrypt-file.js``` , you need to add your own algorithm in the switch case
and should return a bufferArray aka Array

example : 
```
switch (libType) {
		case 'xsalsa20poly1305': {
			if (keyParts.length !== 3) {
				throw new Errors.InvalidCryptoKey();
			}
			const box = new Uint8Array(fileBlob);
			const libKey = decodeBase64(keyParts[1]);
			const libNonce = decodeBase64(keyParts[2]);
			return decrypt(libKey, libNonce, box);
		}
		case 'myAlgorithm': {
			// Some stuff what should return a bufferArray
		}
		default:
			throw new Errors.InvalidCryptoLib();
	}
```

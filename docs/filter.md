# Plugin

We can add new filters to current media-tag v2.

## Create a filter

Under ```src/filters/```, the first set consist to create a extended filter component.

| Propertie | Type | Description |
|-----------|------|-------------|
| identifier | string | Filter unique identifier |
| typeCheck | callback | Type checking for media objects matching |
| startup | callback | Stuff to process on media object after matches them |

Example with crypto filter adding ```crypto.js```

```
/**
 * CryptoFilter to decrypt contents.
 *
 * @type       {Filter}
 */
const CryptoFilter = {
	identifier: 'crypto',
	typeCheck: mediaObject => {
		const result =
			mediaObject.hasAttribute('src') &&
			mediaObject.hasAttribute('data-type') &&
			mediaObject.hasAttribute('data-crypto-key');
		return result;
	},
	startup: mediaObject => {
		const src = mediaObject.getAttribute('src');
		const strKey = mediaObject.getAttribute('data-crypto-key');
		const cryptoKey = Crypto.getKeyFromStr(strKey);

		const xhr = new XMLHttpRequest();
		xhr.open('GET', src, true);
		xhr.responseType = 'arraybuffer';
		xhr.onload = () => {
			const arrayBuffer = xhr.response;
			if (arrayBuffer) {
				const u8 = new Uint8Array(arrayBuffer);
				const binStr = Crypto.decrypt(u8, cryptoKey);
				const url = DataManager.getBlobUrl(binStr, mediaObject.getMimeType());

				/**
				 * Modifications applied on mediaObject.
				 * After these modifications the typeCheck
				 * method must return false otherwise the
				 * filter may infinite loop.
				 */
				mediaObject.setAttribute('src', url);
				mediaObject.removeAttribute('data-crypto-key');

				/**
				 * Filters must call chain to try if the
				 * current mediaObject matches other filters.
				 */
				Engine.chain(mediaObject);
			}
		};
		xhr.send(null);
	}
};

export default CryptoFilter;

```

## Setup your filter reference

Into ```src/media-tag.js``` you need to register your fresh filter by insert this :

```
// Filter :: Crypto
const CryptoFilter = require('./filters/crypto').default;

MediaTag.registerPlugin(CryptoFilter);
```
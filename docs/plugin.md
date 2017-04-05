# Plugin

We can add new plugins to current media-tag v2.

## Create a plugin

Under ```src/plugins/```, the first set consist to create a extended plugin component.

| Propertie | Type | Description |
|-----------|------|-------------|
| identifier | string | Plugin unique identifier |
| typeCheck | callback | Type checking for media objects matching |
| startup | callback | Stuff to process with media object after matches them |

Example with dash plugin adding ```dash.js```

```
/* global document, shaka */

/**
 * @module DashPlugin
 * @since 0.2.0
 */

const DashPlugin = {
	identifier: 'dash',
	typeCheck: mediaObject => {
		const regexExtensions = new RegExp('^dash[+]xml$');
		const regexMimes = new RegExp('^application/dash[+]xml$');

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'application' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	},
	startup: mediaObject => {
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
		mediaObject.utilsSetAllDataAttributes(video);
		mediaObject.replaceContents([video]);
		player.load(mediaObject.getAttribute('src')).then(() => {});
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
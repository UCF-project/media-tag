# Plugin

The Media-Tag architecture enable plugin creation.

## Structure

A full functional plugin is constructed in two parts :

* An analytic part which used to determine if a plugin must be used.
* An active job part which operate modifications on MediaObject or the DOM.

### Analytic part

Analytic part is associated to matcher plugin type.

A matcher plugin provide a main method process() which analyses MediaObject with criterions and returns the boolean true if the job part can be applied or else false.

Analytic parts are defined into `src/plugins/matchers/<plugins type name>`

```
class ImageMatcher extends Matcher {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.IMAGE, Type.RENDERER);
	}

	/**
	 * Analyse to identify if an image renderer is appliable.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const regexExtensions = new RegExp('^png|jpg|jpeg|gif$');
		const regexMimes = new RegExp('^image/(png|svg+xml|jpeg|gif)$');

		return	mediaObject.hasAttribute('src') &&
				mediaObject.getType() === 'image' &&
				regexExtensions.exec(mediaObject.getExtension()) !== null &&
				regexMimes.exec(mediaObject.getMimeType()) !== null;
	}
}
```

### Job part

Job part is associated to any other plugin type than matcher.

Its role is realise any kind of action on MediaObject or the DOM or other.

Job parts are defined into `src/plugins/<plugins type name>`

```
class ImageRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.IMAGE);
	}

	/**
	 * Job to realise to render a image with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		const element = document.createElement('img');

		element.setAttribute('src', mediaObject.getAttribute('src'));
		mediaObject.utilsSetAllDataAttributes(element);
		mediaObject.replaceContents([element]);
	}
}
```

## Type

Plugins are divided into several types :

* RENDERER : To render a MediaObject referenced content. A renderer should be applied at MediaObject processing end.
* FILTER : To modify a MediaObject before a rendering. A filter could be applied any times you want but after applying it on MediaObject it didn't match again with MediaObject. So the MediaObject must have changed between before filter processing and after it.
* MATCHER : To find if a plugin is appliable on a MediaObject. Matcher should identify accuratly which other plugin must be used on a specific MediaObject.
* SANITIZER : To clear MediaObject content. Use any method to clear MediaObject data only (shouldn't modifity MediaObject structure like attributes count...).

## Registration

All plugins should be registrated into the PluginStore. 
Now the PluginStore referenced by the MediaTag.

```
	MediaTag.PluginStore.store(~a plugin instance~);
```

See `src/presets/` for an example for a MediaTag feature filled with lot of plugins.


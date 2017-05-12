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
	 * Job to realise to render a image with a mediaObject.
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
import MediaObject from '../core/media-object';


class ImagePlugin {
	static template = '<img src={{url}} />';

	static typeCheck(mediaObj: MediaObject) {
		// Verify extensions
		const regexExt = new RegExp('^png|jpg|jpeg|gif$');
		if (regexExt.exec(mediaObj.getExtension())) {
			return true;
		} else {
			// Verify mime type
			const regexMime = new RegExp('^image\/(png|svg\+xml|jpeg|gif)$');
			return regexMime.exec(mediaObj.getMimeType());
		}
	}
};

export default ImagePlugin;

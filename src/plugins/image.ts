import MediaObject from "../core/media-object";
import Plugin from "../core/plugin";

const ImagePlugin: Plugin = {
    identifier: "image",
    template: "<img src={{src}} />",
    typeCheck: (mediaObj: MediaObject) => {
        // Verify extensions
        const regexExt = new RegExp("^png|jpg|jpeg|gif$");
        if (regexExt.exec(mediaObj.getExtension())) {
            return true;
        } else {
            // Verify mime type
            const regexMime = new RegExp("^image\/(png|svg\+xml|jpeg|gif)$");
            return Boolean(regexMime.exec(mediaObj.getMimeType()));
        }
    },
};

export default ImagePlugin;

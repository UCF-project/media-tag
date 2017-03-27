(function (window) {
var main = function () {
    var ImagePlugin = {
        identifier: 'image',
        typeCheck: function (mediaObj) {
            // Verify if there is mandatory 'src' field
            if (!mediaObj.hasAttribute('src')) {
                return false;
            }

            // Verify extensions
            var regexExt = new RegExp('^png|jpg|jpeg|gif$');
            if (regexExt.exec(mediaObj.getExtension())) {
                return true;
            }

            // Verify mime type
            var regexMime = new RegExp('^image/(png|jpeg|gif)$');
            if (regexMime.exec(mediaObj.getMimeType())) {
                return true;
            }

            // Verify type
            if (mediaObj.getType() === 'image') {
                return true;
            }

            // Otherwise is not an image
            return false;
        },
        startup: function (data) {
            if (!data.mediaObj || !data.src) { throw new Error("Missing data", data); }

            // Create image element
            var element = document.createElement('img');

            // Set the source file
            element.setAttribute('src', data.src);

            // Set all data-attr-something to the element.setAttribute('something', value)
            data.mediaObj.setAttributesToElement(element);

            // Update mediaObj contents with the created element
            data.mediaObj.replaceContents([element]);
        }
    };

    return ImagePlugin;
};

    if (typeof(module) !== 'undefined' && module.exports) {
        module.exports = main()
    } else if ((typeof(define) !== 'undefined' && define !== null) && (define.amd !== null)) {
        define(main);
    } else {
        window.ImagePlugin = main(); // GLHF
    }
}(this));



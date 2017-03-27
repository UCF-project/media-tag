(function (window) {
var main = function (Crypto, Plugin, ImagePlugin) {
    var Nacl = Crypto.Nacl;


    var getMediaObject = function (el) {
        return {
            getAttribute : el.getAttribute,
            hasAttribute : function (a) {
                return el.hasAttribute(a);
            },
            getType : function () {
                return el.getAttribute('data-type');
            },
            getExtension : function () {
                var src = el.getAttribute('src');
                var srcList = src.split('/');
                var fileName = srcList[srcList.length - 1];
                var file = fileName.split('.');
                return file[1] || '';
            },
            getMimeType : function () {
                return el.getAttribute('data-attr-mimetype');
            },
            clearContents : function () {
                while (el.hasChildNodes()) {
                    el.removeChild(el.getLastChild());
                }
            },
            replaceContents : function (nodes) {
                this.clearContents();
                nodes.forEach(function (node) {
                    el.appendChild(node);
                });
            },
            setAttributesToElement : function (newEl) {
                var attr = el.attributes;
                var attrMap = {};
                for (var i=0; i<attr.length; i++) {
                    if (attr[i].name.indexOf('data-attr-') === 0) {
                        newEl.setAttribute(attr[i].name.slice(10), attr[i].value);
                    }
                }
            }
        };
    };

    var startUp = function (nodeList, config) {
        config = config || {};
        var plugins = config.plugins || [ImagePlugin];
        var pluginManager = Plugin(plugins);

        nodeList.forEach(function (el) {

            var type = el.getAttribute('data-type');
            var src = el.getAttribute('src');
            if (!src || !type) { return; }


            var keyStr = el.getAttribute('data-crypto-key');
            var cryptKey = Crypto.getKeyFromStr(keyStr);

            var xhr = new XMLHttpRequest();
            xhr.open("GET", src, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function (e) {
                var arrayBuffer = xhr.response;
                if (arrayBuffer) {
                    var u8 = new Uint8Array(arrayBuffer);
                    var binStr = Crypto.decrypt(u8, cryptKey);
                    var mediaObj = getMediaObject(el);
                    var type = pluginManager.findType(mediaObj);
                    if (type) {
                        pluginManager.getPlugin(type).startup({
                            mediaObj: mediaObj,
                            src: 'data:image/jpeg;base64,' + Nacl.util.encodeBase64(binStr)
                        });
                    }
                }
            };
            xhr.send(null);
        });
    };

    return startUp;
};

    if (typeof(module) !== 'undefined' && module.exports) {
        module.exports = main(
            require("./crypto.js"),
            require("./plugins.js"),
            require("./plugins/image.js"))
    } else if ((typeof(define) !== 'undefined' && define !== null) && (define.amd !== null)) {
        define([
            './crypto.js',
            './plugins.js',
            './plugins/image.js',
        ], main);
    } else {
        window.MediaTag = main(); // GLHF
    }
}(this));

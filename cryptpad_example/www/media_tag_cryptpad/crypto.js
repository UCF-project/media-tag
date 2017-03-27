(function (window) {
var main = function () {
    var Crypto = {};
    var Nacl = Crypto.Nacl = window.nacl;

    var slice = function (u8) {
        return Array.prototype.slice.call(u8);
    };

    var encryptFile = Crypto.encrypt = function (u8, key) {
        var array = u8;
        var nonce = Nacl.randomBytes(24);
        var packed = Nacl.secretbox(array, nonce, key);
        if (!packed) { throw new Error(); }
        return new Uint8Array(slice(nonce).concat(slice(packed)));
    };

    var decryptFile = Crypto.decrypt = function (u8, key) {
        if (u8.length < 24) { throw new Error(); }
        var nonce = new Uint8Array(slice(u8).slice(0, 24));
        var packed = new Uint8Array(slice(u8).slice(24));
        var unpacked = Nacl.secretbox.open(packed, nonce, key);
        if (!unpacked) { throw new Error("Decrypted file in undefined"); }
        return unpacked;
    };

    var getRandomKeyStr = Crypto.getRandomKey = function () {
        var rdm = Nacl.randomBytes(18);
        return Nacl.util.encodeBase64(rdm);
    };

    var getKeyFromStr = Crypto.getKeyFromStr = function (str) {
        var hash = Nacl.hash(Nacl.util.decodeBase64(str));
        return hash.subarray(32, 64);
    };

    return Crypto;
};

    if (typeof(module) !== 'undefined' && module.exports) {
        module.exports = main(
            require("tweetnacl"))
    } else if ((typeof(define) !== 'undefined' && define !== null) && (define.amd !== null)) {
        define([
            '/bower_components/tweetnacl/nacl-fast.min.js',
            '/bower_components/tweetnacl-util/nacl-util.min.js'
        ], main);
    } else {
        window.CryptoTools = main(); // GLHF
    }
}(this));

define(function (require, exports, module) {/* global window, fetch, XMLHttpRequest, Blob, Event */
const Errors = require('../core/errors');
const MediaTag = require('../core/media-tag-api');
const CryptoFilter = require('../plugins/filters/crypto');

/**
 * Class for crypto.
 *
 * @class      Crypto (name)
 */
class Crypto {
	/**
	 * Convert a Uint8Array into Array.
	 *
	 * @param      {Uint8Array}  u8      The u 8
	 * @return     {Array}  Array = require(Uint8Array.
	 */
	static slice(u8) {
		return Array.prototype.slice.call(u8);
	}

	/**
	 * Gets the random key string.
	 *
	 * @return     {String}  The random key string.
	 */
	static getRandomKeyStr() {
		const Nacl = Crypto.Nacl;
		const rdm = Nacl.randomBytes(18);
		return Nacl.util.encodeBase64(rdm);
	}

	/**
	 * Gets the key = require(string.
	 *
	 * @param      {String}  str     The string
	 * @return     {Uint8Array}  The key = require(string.
	 */
	static getKeyFromStr(str) {
		const Nacl = Crypto.Nacl;
		const hash = Nacl.hash(Nacl.util.decodeBase64(str));
		return hash.subarray(32, 64);
	}

	/**
	 * Encrypts a Uint8Array with the given key.
	 *
	 * @param      {<type>}      u8      The u 8
	 * @param      {<type>}      key     The key
	 * @return     {Uint8Array}  The encrypted content.
	 */
	static encrypt(u8, key) {
		const array = u8;
		const nonce = Crypto.Nacl.randomBytes(24);
		const packed = Crypto.Nacl.secretbox(array, nonce, key);
		if (packed) {
			return new Uint8Array(Crypto.slice(nonce).concat(Crypto.slice(packed)));
		}
		throw new Error();
	}

	/**
	 * Decrypts a Uint8Array with the given key.
	 *
	 * @param      {Uint8Array}  u8      The u 8
	 * @param      {String}  key     The key
	 * @return     {String}  The decrypted content.
	 */
	static decrypt(u8, key) {
		if (u8.length < 24) {
			throw new Error();
		}
		const slice = Crypto.slice;
		const Nacl = Crypto.Nacl;
		const nonce = new Uint8Array(slice(u8).slice(0, 24));
		const packed = new Uint8Array(slice(u8).slice(24));
		const unpacked = Nacl.secretbox.open(packed, nonce, key);
		if (unpacked) {
			return unpacked;
		}
		throw new Error('Decrypted file in undefined');
	}
}

/**
 * Binds the extern nacl lib to Crypto.
 */
Crypto.Nacl = window.nacl;

/**
 * Class for data manager.
 *
 * @class      DataManager (name)
 */
class DataManager {
	/**
	 * Gets the array buffer = require(a source url.
	 *
	 * @param      {<type>}  url     The url
	 * @return     {<type>}  The array buffer.
	 */
	static getArrayBuffer(url) {
		return fetch(url)
		.then(response => {
			if (response.ok) {
				return response.arrayBuffer();
			}
			throw new Errors.FetchFails();
		})
		.then(arrayBuffer => arrayBuffer);
	}

	/**
	 * Creates an url.
	 *
	 * @param      {ArrayBuffer}  arrayBuffer  The array buffer
	 * @return     {String}  The url.
	 */
	static createUrl(arrayBuffer) {
		return window.URL.createObjectURL(arrayBuffer);
	}

	/**
	 * Gets the blob url.
	 *
	 * @param      {ArrayBuffer}  data    The data
	 * @param      {String}  mtype   The mtype
	 * @return     {String}  The blob url.
	 */
	static getBlobUrl(data, mtype) {
		return window.URL.createObjectURL(new Blob([data], {
			type: mtype
		}));
	}

	/**
	 * Gets the data url.
	 *
	 * @param      {ArrayBuffer}  data    The data
	 * @param      {string}  mtype   The mtype
	 * @return     {string}  The data url.
	 */
	static getDataUrl(data, mtype) {
		return 'data:' + mtype + ';base64,' + Crypto.Nacl.util.encodeBase64(data);
	}
}

/**
 * Applies metadata on media object only if CryptoFilter knows the media type.
 * Without these metadata the processing engine does not find any renderer and apply the default one.
 * It's a non render by information lack.
 *
 * -------------------------------------------------------------------------------------------
 * //mediaObject.setAttribute('type', decrypted.metadata.type);
 * //mediaObject.type = decrypted.metadata.type;
 * ///console.log(mediaObject);
 *
 * original model :
 *      <media-tag src="something" data-type="image/png" data-crypto-key="cryptpad:something">
 *
 * hypothetical model : (mime is hidden inside src data)
 *      <media-tag src="something" data-crypto-key="cryptpad:something">
 *
 * Crypto extracts metadata from the decrypted source and applies it on the media object.
 *
 * @param      {MediaObject}  mediaObject  The media object
 * @param      {Object}  metadata     The metadata
 */
function applyMetadata(mediaObject, metadata) {
	if (CryptoFilter.isAllowedMediaType(metadata.type)) {
		/**
		 * @example
		 * Inside 'src/plugins/renderers/image.js'
		 *
		 * ...
		 * mediaObject.utilsSetAllDataAttributes(element); // Takes all [data-] from attributes and it's done inside plugin job parts.
		 * ...
		 */
		mediaObject.setAttribute('data-type', metadata.type);

		/**
		 * Theses data are used in identification phasis and have to be set.
		 */
		mediaObject.type = metadata.type;
		mediaObject.extension = metadata.extension;
		mediaObject.mime = metadata.mime;
	}
}

function algorithm(mediaObject) {
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

			const decryptionEvent = new Event('decryption');
			decryptionEvent.blob = new Blob([binStr], {
				type: mediaObject.getMimeType()
			});
			window.document.dispatchEvent(decryptionEvent);

			/**
			 * Modifications applied on mediaObject.
			 * After these modifications the typeCheck
			 * method must return false otherwise the
			 * filter may infinite loop.
			 */
			mediaObject.setAttribute('src', url);
			mediaObject.removeAttribute('data-crypto-key');

			if (!mediaObject.hasAttribute('data-type')) { // TODO TEST AND REMOVE IT
				applyMetadata(mediaObject, {
					type: 'image',
					extension: 'png',
					mime: 'image/png'
				});
			}

			/**
			 * Filters must call chain to try if the
			 * current mediaObject matches other filters.
			 */
			MediaTag.processingEngine.return(mediaObject);
		}
	};
	xhr.send(null);
}

module.exports = algorithm;

});

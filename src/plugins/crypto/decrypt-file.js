/* global atob, nacl */
import Errors from '../../core/errors';

/**
 * Decodes a base64 encoded string into an ArrayBuffer.
 *
 * @param {string} s String that will be decoded
 * @returns ArrayBuffer with decoded string.
 * @since 0.2.0
 */
function decodeBase64(s) {
	if (typeof atob === 'undefined') {
		return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
	}
	let i;
	const d = atob(s);
	const b = new Uint8Array(d.length);
	for (i = 0; i < d.length; i++) {
		b[i] = d.charCodeAt(i);
	}
	return b;
}

/**
 * Decrypts an ArrayBuffer (box) encrypted with a key and nonce, using
 * algorithm xsalsa20poly1305 from https://tweetnacl.js.org/
 * nacl library must be available globally.
 *
 * @param {ArrayBuffer} key Key that encoded box.
 * @param {ArrayBuffer} nonce Nonce that encoded box
 * @param {ArrayBuffer} box ArrayBuffer with encoded contents.
 * @returns ArrayBuffer Decoded contents.
 * @since 0.2.0
 */
function decrypt(key, nonce, box) {
	let decBox;
	try {
		decBox = nacl.secretbox.open(box, nonce, key);
		if (decBox === false) {
			throw new Errors.FailedCrypto();
		}
	} catch (err) {
		throw new Errors.FailedCrypto(err);
	}
	return decBox;
}

/**
 * Decrypt an ArrayBuffer given a key.
 *
 * @param {string} key key for decrypting contents.
 *                     Must have the format <algorithm>:<otherFields>.
 *                     For using the 'xsalsa20poly1305' algorithm the format is
 *                     'xsalsa20poly1305:<key>:<nonce>', for example
 *                     'xsalsa20poly1305:xxxxxxxxx:yyyyyyy' where key is
 *                     'xxxxxxxxx' and nounce is 'yyyyyyy'.
 * @param {ArrayBuffer} fileBlob Encrypted contents.
 * @returns ArrayBuffer with decrypted contents.
 * @memberof CryptoPlugin
 * @since 0.2.0
 */
function decryptFile(key, fileBlob) {
	const keyParts = key.split(':');
	const libType = keyParts[0];

	switch (libType) {
		case 'xsalsa20poly1305': {
			if (keyParts.length !== 3) {
				throw new Errors.InvalidCryptoKey();
			}
			const box = new Uint8Array(fileBlob);
			const libKey = decodeBase64(keyParts[1]);
			const libNonce = decodeBase64(keyParts[2]);
			return decrypt(libKey, libNonce, box);
		}
		default:
			throw new Errors.InvalidCryptoLib();
	}
}

export default decryptFile;

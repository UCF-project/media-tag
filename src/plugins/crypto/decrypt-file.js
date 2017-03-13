/* global atob, nacl */
import Errors from '../../core/errors';

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

function decryptFile(key, fileBlob) {
	const keyParts = key.split(':');
	const libType = keyParts[0];

	switch (libType) {
		case 'xsalsa20poly1305': {
			if (keyParts.length !== 3) {
				throw new Errors.InvalidCryptoKey();
			}
			const box = new Uint8Array(fileBlob);
			// const box = decodeBase64(fileBlob);
			const libKey = decodeBase64(keyParts[1]);
			const libNonce = decodeBase64(keyParts[2]);
			console.log('sizes', libKey.length, libNonce.length);
			return decrypt(libKey, libNonce, box);
		}
		default:
			throw new Errors.InvalidCryptoLib();
	}
}

// function decryptFile(key, fileBlob) {
// 	return fileBlob;
// }

export default decryptFile;

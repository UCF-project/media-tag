/* global document, mediaTag, URL, fetch, Blob */
import debugFactory from 'debug';
import Errors from '../../core/errors';
import decryptFile from './decrypt-file';

const debug = debugFactory('MT:Crypto');

function getBlobFromUrl(fileURL) {
	return fetch(fileURL).then(response => {
		if (response.ok) {
			return response.arrayBuffer();
		}
		throw new Errors.FetchFail(response);
	}).then(blob => blob);
}

function createUrlFromBlob(fileBlob) {
	return URL.createObjectURL(fileBlob);
}

const validCryptoTypes = ['image', 'video'];

// TODO: maybe this should be avoided and the type (data-crypto-type)
// should be mimetype
function type2Mime(typeStr) {
	switch (typeStr) {
		case 'image':
			return 'image';
			break;
		case 'video':
			return 'video/mp4';
			break;
		default: return null;
	}
}

/**
 * @module CryptoPlugin
 * @since 0.2.0
 */
const CryptoPlugin = {
	/**
	 * Identifies the plugin.
	 */
	identifier: 'crypto',

	/**
	 * Check if the media tag instance is a Crypto type
	 * The element should have at least three attributes:
	 *   - *data-crypto-type*: which is the file type associated to the decrypted file, check CryptoPlugin.validCryptoTypes for valid values
	 *   - *data-crypto-src*: encrypted file URL
	 *   - *data-crypto-key*: key to decrypt the file
	 * @param {MediaObject} mediaObj
	 */
	typeCheck: mediaObj => {
		return	mediaObj.hasAttribute('data-crypto-key') &&
				mediaObj.hasAttribute('data-crypto-type') &&
				mediaObj.hasAttribute('data-crypto-src') &&
				validCryptoTypes.indexOf(mediaObj.getAttribute('data-crypto-type')) !== -1;
	},

	startup: mediaObj => {
		const key = mediaObj.getAttribute('data-crypto-key');
		const elementType = mediaObj.getAttribute('data-crypto-type');
		const elementSource = mediaObj.getAttribute('data-crypto-src');

		// TODO: handle failure
		getBlobFromUrl(elementSource).then(fileEncryptedBlob => {
			const fileArrayBuffer = decryptFile(key, fileEncryptedBlob);
			const fileDecryptedBlob = new Blob([fileArrayBuffer], {type: type2Mime(elementType)});
			const fileDecryptedUrl = createUrlFromBlob(fileDecryptedBlob);

			const newElement = document.createElement('media-tag');
			newElement.setAttribute('src', fileDecryptedUrl);
			newElement.setAttribute('data-type', elementType);
			mediaObj.utilsPassAllDataAttributes(newElement);

			debug('Passed all data attributes.');
			mediaTag(newElement);
			debug('Started new element.');

			mediaObj.replaceContents([newElement]);
			debug('Replaced contents.');
		});
	}

};

export default CryptoPlugin;

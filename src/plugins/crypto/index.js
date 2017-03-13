/* global document, mediaTag, URL, fetch, Blob */
import Errors from '../../core/errors';
import decryptFile from './decrypt-file';

function getBlobFromUrl(fileURL) {
	return fetch(fileURL).then(response => {
		if (response.ok) {
			console.log('returning blob');
			return response.arrayBuffer();
		}
		throw new Errors.FetchFail(response);
	}).then(blob => blob);
}

function createUrlFromBlob(fileBlob) {
	return URL.createObjectURL(fileBlob);
}

const CryptoPlugin = {
	/**
	 * Identifies the plugin.
	 */
	identifier: 'crypto',

	validCryptoTypes: ['image', 'video'],

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
				CryptoPlugin.validCryptoTypes.indexOf(mediaObj.getAttribute('data-crypto-type')) !== -1;
	},

	startup: mediaObj => {
		const key = mediaObj.getAttribute('data-crypto-key');
		const elementType = mediaObj.getAttribute('data-crypto-type');
		const elementSource = mediaObj.getAttribute('data-crypto-src');

		// TODO: handle failure
		getBlobFromUrl(elementSource).then(fileEncryptedBlob => {
			const fileArrayBuffer = decryptFile(key, fileEncryptedBlob);
			const fileDecryptedBlob = new Blob([fileArrayBuffer]);
			const fileDecryptedUrl = createUrlFromBlob(fileDecryptedBlob);

			const newElement = document.createElement('media-tag');
			newElement.setAttribute('src', fileDecryptedUrl);
			newElement.setAttribute('data-type', elementType);
			mediaObj.utilsPassAllDataAttributes(newElement);
			mediaTag(newElement);

			mediaObj.replaceContents([newElement]);
		});
	}

};

export default CryptoPlugin;

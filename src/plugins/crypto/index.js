/* global document, mediaTag, URL, fetch */
import Errors from '../../core/errors';
import decryptFile from './decrypt-file';

function getBlobFromUrl(fileURL) {
	return fetch(fileURL).then(response => {
		if (response.ok) {
			return response.blob();
		}
		throw new Errors.FetchFail(response);
	});
}

function createUrlFromBlob(fileBlob) {
	return URL.createObjectURL(fileBlob);
}

const CryptoPlugin = {
	/**
	 * Identifies the plugin.
	 */
	identifier: 'crypto',

	validCryptoTypes: ['image'],

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
			const fileDecryptedBlob = decryptFile(key, fileEncryptedBlob);
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

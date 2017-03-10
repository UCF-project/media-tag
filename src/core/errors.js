
const Errors = {
	// Media Tag
	PluginExists: class PluginExists extends Error {
		constructor(objPlugin) {
			super(`Plugin with same "${objPlugin.identifier}" identifier found.`);
		}
	},
	TypeNotFound: class TypeNotFound extends Error {
		constructor(mediaObject) {
			super(`Media Tag could not find the content type of an instance. Please check element ${mediaObject.getRootElement()}.`);
		}
	},

	// Fetch
	FetchFail: class FetchFail extends Error {
		constructor(response) {
			super(`Could not fetch "${response.url}", received "${response.status}: ${response.statusText}".`);
		}
	},

	// Crypto plugin
	InvalidCryptoKey: class InvalidCryptoKey extends Error {
		constructor() {
			super('Invalid cryptographic key.');
		}
	},
	InvalidCryptoLib: class InvalidCryptoLib extends Error {
		constructor() {
			super('Invalid cryptographic algorithm name.');
		}
	},
	FailedCrypto: class FailedCrypto extends Error {
		constructor(err) {
			super(`Failed to decrypt file${err && err.message ? ` ${err.message}` : ''}.`);
		}
	}
};

export default Errors;

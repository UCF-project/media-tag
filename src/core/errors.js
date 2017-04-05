
/**
 * Aggregates all Errors classes that media tag throw.
 *
 * @since 0.2.0
 */
const Errors = {
	// Media Tag //

	/**
	 * @class {PluginExists} PluginExists Error thrown when a try to
	 * register a plugin but the same identifier has been already
	 * registered.
	 * @since 0.2.0
	 */
	PluginExists: class PluginExists extends Error {
		constructor(objPlugin) {
			super(`Plugin with same "${objPlugin.identifier}" identifier found.`);
		}
	},

	/**
	 * @class {TypeNotFound} TypeNotFound Error thrown when media tag
	 * is incapable to find the type of a given media content. It
	 * loops all the registered plugins, trying to find a match for
	 * typeCheck, if no plugin returns true then this error occurs.
	 * @since 0.2.0
	 */
	TypeNotFound: class TypeNotFound extends Error {
		constructor() {
			super(`Media Tag could not find the content type of an instance.}.`);
		}
	},

	/**
	 * @class {FilterExists} FilterExists Error thrown when a try to
	 * register a filter but the same identifier has been already
	 * registered.
	 * @since 0.2.1
	 */
	FilterExists: class FilterExists extends Error {
		constructor(filter) {
			super(`Filter with same "${filter.identifier} identifier found."`);
		}
	},

	// Fetch //

	/**
	 * @class {FetchFail} FetchFail Error thrown when media tag
	 * is incapable to fetch a resource.
	 * @since 0.2.0
	 */
	FetchFail: class FetchFail extends Error {
		constructor(response) {
			super(`Could not fetch "${response.url}", received "${response.status}: ${response.statusText}".`);
		}
	},

	// Crypto plugin //

	/**
	 * @class {InvalidCryptoKey} InvalidCryptoKey Error thrown when
	 * using the crypto plugin. The key informed is invalid (for
	 * example when a field is missing).
	 * @since 0.2.0
	 */
	InvalidCryptoKey: class InvalidCryptoKey extends Error {
		constructor() {
			super('Invalid cryptographic key.');
		}
	},

	/**
	 * @class {InvalidCryptoLib} InvalidCryptoLib Error thrown when
	 * using the crypto plugin. The key contains an invalid algorithm
	 * (for example, to the day, only 'xsalsa20poly1305' is supported).
	 * @since 0.2.0
	 */
	InvalidCryptoLib: class InvalidCryptoLib extends Error {
		constructor() {
			super('Invalid cryptographic algorithm name.');
		}
	},

	/**
	 * @class {FailedCrypto} FailedCrypto Error thrown when
	 * using the crypto plugin. The contents were impossible to
	 * decrypt (for example, the key may be wrong, or the encrypted
	 * file).
	 * @since 0.2.0
	 */
	FailedCrypto: class FailedCrypto extends Error {
		constructor(err) {
			super(`Failed to decrypt file${err && err.message ? ` ${err.message}` : ''}.`);
		}
	}
};

export default Errors;

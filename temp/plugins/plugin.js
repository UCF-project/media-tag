define(function (require, exports, module) {class Plugin {
	/**
	 * Constructs the object.
	 *
	 * @param      {string}  identifier  The identifier
	 * @param      {string}  type        The type
	 * @param      {string}  occurrence   The occurrence
	 */
	constructor(identifier, type, occurrence) {
		this.identifier = identifier;
		this.type = type;
		this.occurrence = occurrence;
	}

	/**
	 * Gets the identifier.
	 *
	 * @return     {string}  The identifier.
	 */
	getIdentifier() {
		if (this.identifier) {
			return this.identifier;
		}
		throw new Error('Plugin has not identifier');
	}

	/**
	 * Gets the type.
	 *
	 * @return     {string}  The type.
	 */
	getType() {
		if (this.type) {
			return this.type;
		}
		throw new Error('Plugin has no type');
	}

	/**
	 * Gets the occurrence.
	 *
	 * @return     {string}  The occurrence.
	 */
	getOccurrence() {
		if (this.occurrence) {
			return this.occurrence;
		}
		throw new Error('Plugin has no occurrence');
	}

	/**
	 * Starts the process on the media object.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 * @return     {*}
	 */
	start(mediaObject) {
		return this.process(mediaObject);
	}
}

module.exports = Plugin;

});

class Plugin {
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

	start(mediaObject) {
		return this.process(mediaObject);
	}
}

module.exports = Plugin;

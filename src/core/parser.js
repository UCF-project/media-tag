/* global window */

/**
 * Class for parse.
 *
 * @class      Parser (name)
 */
class Parser {

	/**
	 * Returns the AttributeObject extension.
	 *
	 * @param      {Object}  AttributeObject  The media object
	 * @return     {String}  The extension
	 */
	static extension(AttributeObject) {
		const dataType = AttributeObject.getAttribute('data-type');
		if (dataType) {
			return dataType.split('/')[1];
		}
		return undefined;
	}

	/**
	 * Returns the AttributeObject type.
	 *
	 * @param      {Object}  AttributeObject  The media object
	 * @return     {String}  The type
	 */
	static type(AttributeObject) {
		const dataType = AttributeObject.getAttribute('data-type');
		if (dataType) {
			return dataType.split('/')[0];
		}
		return undefined;
	}

	/**
	 * Returns the AttributeObject mime.
	 *
	 * @param      {Object}  AttributeObject  The media object
	 * @return     {String}  The mime
	 */
	static mime(AttributeObject) {
		return AttributeObject.getAttribute('data-type');
	}

	/**
	 * Returns the AttributeObject protocol.
	 *
	 * @param      {Object}  AttributeObject  The media object
	 * @return     {String}  The protocol
	 */
	static protocol(AttributeObject) {
		const array = AttributeObject.getAttribute('src').split('://');
		if (array.length > 1) {
			return array[0];
		}
		return window.location.protocol;
	}

	/**
	 * Returns the AttributeObject hostname.
	 *
	 * @param      {Object}  AttributeObject  The media object
	 * @return     {String}  The hostname
	 */
	static hostname(AttributeObject) {
		const array = AttributeObject.getAttribute('src').split('://');
		if (array.length > 1) {
			return array[1].split('/')[0];
		}
		return window.location.hostname;
	}

	/**
	 * Returns the AttributeObject source.
	 *
	 * @param      {Object}  AttributeObject  The media object
	 * @return     {String}  The source
	 */
	static source(AttributeObject) {
		const source = AttributeObject.getAttribute('src');

		return source;
	}

	/**
	 * Finds schemes in the source.
	 *
	 * @param      {Object}  AttributeObject  The media object
	 * @return     {Array<string>}  All schemes found in the source.
	 */
	static schemes(AttributeObject) {
		return /\w+:/.exec(AttributeObject.getAttribute('src'));
	}

	/**
	 * Returns json parsed object from AttributeObject sources.
	 *
	 * @param      {Object}  AttributeObject  The media object
	 * @return     {?Array<Object>}
	 */
	static sources(AttributeObject) {
		const sources =
			AttributeObject.getAttribute('sources') || AttributeObject.getAttribute('srcs');

		if (sources) {
			return JSON.parse(sources);
		}
		return null;
	}

	/**
	 * Returns json parsed object from AttributeObject actions.
	 *
	 * @param      {Object}  AttributeObject  The media object
	 * @return     {?Array<Object>}
	 */
	static actions(AttributeObject) {
		const actions = AttributeObject.getAttribute('actions');

		if (actions) {
			return JSON.parse(actions);
		}
		return null;
	}

	/**
	 * Returns a properties set extracted from the AttributeObject.
	 *
	 * @param      {Object}  AttributeObject  The media object
	 * @return     {Object}
	 */
	static parse(AttributeObject) {
		return {
			protocol: Parser.protocol(AttributeObject),
			hostname: Parser.hostname(AttributeObject),
			src: Parser.source(AttributeObject),
			type: Parser.type(AttributeObject),
			extension: Parser.extension(AttributeObject),
			mime: Parser.mime(AttributeObject),
			sources: Parser.sources(AttributeObject),
			actions: Parser.actions(AttributeObject)
		};
	}
}

module.exports = Parser;

/* global window */

/**
 * Class for parse.
 *
 * @class      Parser (name)
 */
class Parser {

	/**
	 * Returns the mediaObject extension.
	 *
	 * @param      {Object}  mediaObject  The media object
	 * @return     {String}  The extension
	 */
	static extension(mediaObject) {
		const dataType = mediaObject.getAttribute('data-type');
		return dataType.split('/')[1];
	}

	/**
	 * Returns the mediaObject type.
	 *
	 * @param      {Object}  mediaObject  The media object
	 * @return     {String}  The type
	 */
	static type(mediaObject) {
		const dataType = mediaObject.getAttribute('data-type');
		return dataType.split('/')[0];
	}

	/**
	 * Returns the mediaObject mime.
	 *
	 * @param      {Object}  mediaObject  The media object
	 * @return     {String}  The mime
	 */
	static mime(mediaObject) {
		return mediaObject.getAttribute('data-type');
	}

	/**
	 * Returns the mediaObject protocol.
	 *
	 * @param      {Object}  mediaObject  The media object
	 * @return     {String}  The protocol
	 */
	static protocol(mediaObject) {
		const array = mediaObject.getAttribute('src').split('://');
		if (array.length > 1) {
			return array[0];
		}
		return window.location.protocol;
	}

	/**
	 * Returns the mediaObject hostname.
	 *
	 * @param      {Object}  mediaObject  The media object
	 * @return     {String}  The hostname
	 */
	static hostname(mediaObject) {
		const array = mediaObject.getAttribute('src').split('://');
		if (array.length > 1) {
			return array[1].split('/')[0];
		}
		return window.location.hostname;
	}

	/**
	 * Returns the mediaObject source.
	 *
	 * @param      {Object}  mediaObject  The media object
	 * @return     {String}  The source
	 */
	static source(mediaObject) {
		return mediaObject.getAttribute('src');
	}

	/**
	 * Returns a properties set extracted from the mediaObject.
	 *
	 * @param      {Object}  mediaObject  The media object
	 * @return     {Object}  { description_of_the_return_value }
	 */
	static parse(mediaObject) {
		return {
			protocol: Parser.protocol(mediaObject),
			hostname: Parser.hostname(mediaObject),
			src: Parser.source(mediaObject),
			type: Parser.type(mediaObject),
			extension: Parser.extension(mediaObject),
			mime: Parser.mime(mediaObject)
		};
	}
}

module.exports = Parser;

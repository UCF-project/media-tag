/* global window */

class Parser {
	static extension(mediaObject) {
		const dataType = mediaObject.getAttribute('data-type');
		return dataType.split('/')[1];
	}

	static type(mediaObject) {
		const dataType = mediaObject.getAttribute('data-type');
		return dataType.split('/')[0];
	}

	static mime(mediaObject) {
		return mediaObject.getAttribute('data-type');
	}

	static protocol(mediaObject) {
		const array = mediaObject.getAttribute('src').split('://');
		if (array.length > 1) {
			return array[0];
		}
		return window.location.protocol;
	}

	static hostname(mediaObject) {
		const array = mediaObject.getAttribute('src').split('://');
		if (array.length > 1) {
			return array[1].split('/')[0];
		}
		return window.location.hostname;
	}

	static source(mediaObject) {
		return mediaObject.getAttribute('src');
	}

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

export default Parser;

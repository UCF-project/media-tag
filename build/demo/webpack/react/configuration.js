/* global document, Event */

(function () {
	const event = new Event('Configuration');

	event.configuration = {
		dependencies: [
			'https://cdnjs.cloudflare.com/ajax/libs/shaka-player/2.1.3/shaka-player.compiled.js',
			'https://cdnjs.cloudflare.com/ajax/libs/tweetnacl/1.0.0/nacl.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js',
			'/ext-lib/nacl-util.min.js'
		]
	};

	document.dispatchEvent(event);
})();

(function () {
	const event = new Event('Configuration');

	event.configuration = {
		dependencies: [
			'/assets/ext-lib/nacl-fast.min.js',
			'/assets/ext-lib/nacl-util.min.js',
			// '/assets/ext-lib/shaka-player.compiled.js', // Some media-tag dependencies seems don't work in requirejs context, due to a define call inside it. The dependency is loaded inside html directly.	
			'/assets/ext-lib/FileSaver.min.js'
		],
		plugins: {
			pdf: {
				renderer: {
					viewer: '/assets/pdfjs/web/viewer.html'
				}
			}
		}
	};

	document.dispatchEvent(event);
})();

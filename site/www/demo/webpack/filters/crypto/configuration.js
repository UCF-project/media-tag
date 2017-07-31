(function () {
	const event = new Event('Configuration');

	event.configuration = {
		dependencies: [
			'/assets/ext-lib/nacl-fast.min.js',
			'/assets/ext-lib/nacl-util.min.js',
			'/assets/ext-lib/fetch.min.js',
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

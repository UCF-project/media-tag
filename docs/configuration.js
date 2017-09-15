(function () {
	const event = new Event('Configuration');

	event.configuration = {
		plugins: {
			pdf: {
				renderer: {
					viewer: './assets/pdfjs/web/viewer.html'
				}
			}
		}
	};

	document.dispatchEvent(event);
})();

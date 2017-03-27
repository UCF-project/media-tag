/* global document, PDFJS */

/**
 * @module PdfPlugin
 * @since 0.2.0
 */
const PdfPlugin = {
	identifier: 'pdf',
	typeCheck: mediaObj => {
		// Verify if there is mandatory 'src' field
		if (!mediaObj.hasAttribute('src')) {
			return false;
		}

		// Verify extensions
		const regexExt = new RegExp('^pdf$');
		if (regexExt.exec(mediaObj.getExtension())) {
			return true;
		}

		// Verify mime type
		const regexMime = new RegExp('^application/pdf$');
		if (regexMime.exec(mediaObj.getMimeType())) {
			return true;
		}

		// Verify type
		if (mediaObj.getType() === 'pdf') {
			return true;
		}

		// Otherwise is not a pdf
		return false;
	},
	startup: mediaObj => {
		// Get the pdf url
		const url = mediaObj.getAttribute('src');

		// Create canvas element
		const canvas = document.createElement('canvas');

		// Update mediaObj contents with the created element
		mediaObj.replaceContents([canvas]);

		// Disable workers for now
		// TODO: verify what workers do and how to integrate it
		PDFJS.disableWorker = true;

		// Asynchronous download of PDF
		const loadingTask = PDFJS.getDocument(url);
		loadingTask.promise.then(pdf => {
			console.log('PDF loaded');

			// Fetch the first page
			const pageNumber = 1;
			pdf.getPage(pageNumber).then(page => {
				console.log('Page loaded');

				const scale = 1.5;
				const viewport = page.getViewport(scale);

				// Prepare canvas using PDF page dimensions
				const context = canvas.getContext('2d');
				canvas.height = viewport.height;
				canvas.width = viewport.width;

				// Render PDF page into canvas context
				const renderContext = {
					canvasContext: context,
					viewport
				};
				const renderTask = page.render(renderContext);
				renderTask.then(() => {
					console.log('Page rendered');
				});
			});
		}, reason => {
			// PDF loading error
			console.error(reason);
		});
	}
};

export default PdfPlugin;

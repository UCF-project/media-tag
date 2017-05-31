/* global document, PDFJS */
const Renderer =	require('../renderer');
const Identifier = 	require('../../enums/identifier');
const MediaTag = 	require('../../core/media-tag');

class PdfRenderer extends Renderer {
	/**
	 * Constructs the object.
	 */
	constructor() {
		super(Identifier.PDF);
	}

	/**
	 * Job to realise to render a pdf with a mediaObject.
	 *
	 * @param      {MediaObject}  mediaObject  The media object
	 */
	process(mediaObject) {
		// Get the pdf url
		const url = mediaObject.getAttribute('src');

		// Create canvas element
		const canvas = document.createElement('canvas');

		mediaObject.utilsSetAllDataAttributes(canvas);

		// Update mediaObject contents with the created element
		mediaObject.replaceContents([canvas]);

		// Disable workers for now
		// TODO: verify what workers do and how to integrate it
		PDFJS.disableWorker = true;

		// Asynchronous download of PDF
		const loadingTask = PDFJS.getDocument(url);
		loadingTask.promise.then(pdf => {
			// Fetch the first page
			let pageNumber = 1;

			function render(page) {
				const scale = 1;
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
				});
			}

			/**
			 * Update the pageNumber after each call.
			 * Based on click events.
			 *
			 * @param      {MouseEvent}  mouseEvent  The mouse event
			 */
			function update(mouseEvent) {
				if (!mouseEvent) {
					console.log('no event');
				}
				if (mouseEvent.buttons === 0) { 		// Left click
					if (pageNumber === pdf.numPages) {
						pageNumber = 1;
					} else {
						pageNumber++;
					}
				} else if (mouseEvent.buttons === 4) { 	// Left click + Wheel click
					if (pageNumber === 1) {
						pageNumber = pdf.numPages;
					} else {
						pageNumber--;
					}
				}
			}

			/**
			 * First render.
			 */
			pdf.getPage(pageNumber).then(page => {
				render(page);
			});

			/**
			 * Renders on click event.
			 *
			 * @param      {MouseEvent}  event   The event
			 */
			canvas.onclick = event => {
				update(event);
				pdf.getPage(pageNumber).then(page => {
					render(page);
				});
			};

			MediaTag.processingEngine.return(mediaObject);
		}, reason => {
			// PDF loading error
			console.error(reason);
		});
	}
}

module.exports = PdfRenderer;

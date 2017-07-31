
function loadPage(event, url) {
	const viewer = document.getElementById('viewer');

	event.stopPropagation();
	viewer.src = `${url}?void=0`;
}

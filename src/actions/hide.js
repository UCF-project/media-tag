module.exports = mediaObject => {
	mediaObject.element.style.display = 'none';
	for (const child of mediaObject.hookedFns.children()) {
		child.style.display = 'none';
	}
};

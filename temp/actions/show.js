define(function (require, exports, module) {module.exports = mediaObject => {
	mediaObject.element.style.display = 'block';
	for (const child of mediaObject.hookedFns.children()) {
		child.style.display = 'block';
	}
};

});

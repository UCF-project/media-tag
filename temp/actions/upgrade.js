define(function (require, exports, module) {const activate = require('./activate');

module.exports = mediaTag => {
	const index = mediaTag.mediaObjects.indexOf(mediaTag.activeMediaObject);
	if (index < mediaTag.mediaObjects.length) {
		activate(mediaTag.mediaObjects[index + 1], mediaTag);
	}
};

});

define(function (require, exports, module) {const hide = require('./hide');
const show = require('./show');

module.exports = (mediaObjectToActivate, mediaTag) => {
	mediaTag.mediaObjects.forEach(mediaObject => {
		hide(mediaObject);
	});
	mediaTag.activeMediaObject = mediaObjectToActivate;
	show(mediaObjectToActivate);
};

});

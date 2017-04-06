define(function (require) {
    var mediaTag = require('media-tag');

    var mediaObjectImg = mediaTag(document.querySelector('media-tag#image'));
    var mediaObjectImgE = mediaTag(document.querySelector('media-tag#image-encrypted'));
    var mediaObjectAudE = mediaTag(document.querySelector('media-tag#audio-encrypted'));
    var mediaObjectVidE = mediaTag(document.querySelector('media-tag#video-encrypted'));
    var mediaObjectDasE = mediaTag(document.querySelector('media-tag#dash-encrypted'));
    var mediaObjectPdfE = mediaTag(document.querySelector('media-tag#pdf-encrypted'));
});

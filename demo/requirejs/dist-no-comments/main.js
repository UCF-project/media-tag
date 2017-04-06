define([
	'https://cdnjs.cloudflare.com/ajax/libs/tweetnacl/0.14.5/nacl-fast.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/1.7.376/pdf.js',
	'/nacl-util.min.js',
	'/lib/media-tag.js',
	'/node_modules/jquery/dist/jquery.min.js'
], function (mediaTag) {
    var $ = window.jQuery;
    $(function () {
        mediaTag(document.getElementById('image'));
        mediaTag(document.getElementById('image-encrypted'));
        mediaTag(document.getElementById('video-encrypted'));
        mediaTag(document.getElementById('pdf-encrypted'));
    });
});

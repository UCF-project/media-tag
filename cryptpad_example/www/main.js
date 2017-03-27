define([
    '/media_tag_cryptpad/media-tag.js',
    '/bower_components/jquery/dist/jquery.min.js'
], function (MediaTag) {
    var $ = window.jQuery;
    $(function () {
        MediaTag([document.getElementById('raccoon')]);
    });
});

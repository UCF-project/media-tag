const Type = require('../../enums/type');
const Identifier = require('../../enums/identifier');
const MediaTag = require('../media-tag-matchers');

/**
 * MediaTag uri store makes relation between matchers and their other runnable plugin.
 */
MediaTag.uriStore.store(Identifier.IMAGE, Type.RENDERER);
MediaTag.uriStore.store(Identifier.AUDIO, Type.RENDERER);
MediaTag.uriStore.store(Identifier.VIDEO, Type.RENDERER);
MediaTag.uriStore.store(Identifier.PDF, Type.RENDERER);
MediaTag.uriStore.store(Identifier.DASH, Type.RENDERER);

MediaTag.uriStore.store(Identifier.CRYPTO, Type.FILTER);
MediaTag.uriStore.store(Identifier.CLEAR_KEY, Type.FILTER);
MediaTag.uriStore.store(Identifier.TEST, Type.FILTER);

MediaTag.uriStore.store(Identifier.MEDIA_OBJECT, Type.SANITIZER);

module.exports = MediaTag;

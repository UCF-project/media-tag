const Type = require('../enums/type');
const Identifier = require('../enums/identifier');
const UriStore = require('../stores/uri-store');

/**
 * Matching engine relative path to plugins.
 */
UriStore.pluginsPathForTarget = '../plugins';

/**
 * UriStore makes relation between matchers and their other runnable plugin.
 */
UriStore.store(Identifier.IMAGE, Type.RENDERER);
UriStore.store(Identifier.AUDIO, Type.RENDERER);
UriStore.store(Identifier.VIDEO, Type.RENDERER);
UriStore.store(Identifier.PDF, Type.RENDERER);
UriStore.store(Identifier.DASH, Type.RENDERER);

UriStore.store(Identifier.CRYPTO, Type.FILTER);
UriStore.store(Identifier.CLEAR_KEY, Type.FILTER);

UriStore.store(Identifier.MEDIA_OBJECT, Type.SANITIZER);

(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["mediaTag"] = factory(); else root["mediaTag"] = factory();
})(this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.i = function(value) {
            return value;
        };
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 63);
    }({
        0: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _debug = __webpack_require__(2);
            var _debug2 = _interopRequireDefault(_debug);
            var _filterManager = __webpack_require__(3);
            var _filterManager2 = _interopRequireDefault(_filterManager);
            var _pluginManager = __webpack_require__(4);
            var _pluginManager2 = _interopRequireDefault(_pluginManager);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var debug = new _debug2.default("MT:Engine");
            var Engine = function() {
                function Engine() {
                    _classCallCheck(this, Engine);
                }
                _createClass(Engine, null, [ {
                    key: "startup",
                    value: function startup(mediaObject) {
                        var id = mediaObject.getId();
                        Engine.chains[id] = Engine.matchingFilters(mediaObject);
                        if (Engine.chains[id].length > 0) {
                            Engine.filter(mediaObject);
                        } else {
                            Engine.plugin(mediaObject);
                        }
                    }
                }, {
                    key: "matchingFilters",
                    value: function matchingFilters(mediaObject) {
                        return _filterManager2.default.filters().filter(function(filter) {
                            return filter.typeCheck(mediaObject);
                        });
                    }
                }, {
                    key: "filter",
                    value: function filter(mediaObject) {
                        var id = mediaObject.getId();
                        var length = Engine.chains[id].length;
                        var filter = Engine.chains[id][length - 1];
                        if (filter) {
                            filter.startup(mediaObject);
                        }
                    }
                }, {
                    key: "plugin",
                    value: function plugin(mediaObject) {
                        var plugin = Engine.findPlugin(mediaObject);
                        if (plugin) {
                            plugin.startup(mediaObject);
                        }
                    }
                }, {
                    key: "findFilter",
                    value: function findFilter(mediaObject) {
                        var filterIdentifier = _filterManager2.default.findType(mediaObject);
                        if (filterIdentifier) {
                            return _filterManager2.default.getFilter(filterIdentifier);
                        }
                        return undefined;
                    }
                }, {
                    key: "findPlugin",
                    value: function findPlugin(mediaObject) {
                        var pluginIdentifier = _pluginManager2.default.findType(mediaObject);
                        if (pluginIdentifier) {
                            return _pluginManager2.default.getPlugin(pluginIdentifier);
                        }
                        return undefined;
                    }
                }, {
                    key: "chain",
                    value: function chain(mediaObject) {
                        if (Engine.isCoherent(mediaObject)) {
                            var id = mediaObject.getId();
                            Engine.chains[id].pop();
                            if (Engine.chains[id].length > 0) {
                                Engine.filter(mediaObject);
                            } else {
                                Engine.plugin(mediaObject);
                            }
                        } else {
                            throw new Error("Incohenrent filter chain");
                        }
                    }
                }, {
                    key: "isCoherent",
                    value: function isCoherent(mediaObject) {
                        return Engine.filterChainRuleCallback(mediaObject);
                    }
                } ]);
                return Engine;
            }();
            Engine.chains = {};
            Engine.uid = function(i) {
                return function() {
                    return i++;
                };
            }(0);
            Engine.filterChainRuleCallback = function(mediaObject) {
                var id = mediaObject.getId();
                var beforeLength = Engine.chains[id].length;
                var afterLength = Engine.matchingFilters(mediaObject).length;
                var differences = afterLength - beforeLength;
                var filter = Engine.chains[id][beforeLength - 1];
                if (differences === 0 && filter.identifier === "default") {
                    debug("Default filter applied");
                    return true;
                } else if (differences === -1) {
                    return true;
                } else if (differences < -1) {
                    debug("The plugin " + filter.identifier + " have alterate too hightly the mediaObject");
                    return true;
                }
                return false;
            };
            exports.default = Engine;
        },
        1: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var Errors = {
                PluginExists: function(_Error) {
                    _inherits(PluginExists, _Error);
                    function PluginExists(objPlugin) {
                        _classCallCheck(this, PluginExists);
                        return _possibleConstructorReturn(this, (PluginExists.__proto__ || Object.getPrototypeOf(PluginExists)).call(this, 'Plugin with same "' + objPlugin.identifier + '" identifier found.'));
                    }
                    return PluginExists;
                }(Error),
                TypeNotFound: function(_Error2) {
                    _inherits(TypeNotFound, _Error2);
                    function TypeNotFound() {
                        _classCallCheck(this, TypeNotFound);
                        return _possibleConstructorReturn(this, (TypeNotFound.__proto__ || Object.getPrototypeOf(TypeNotFound)).call(this, "Media Tag could not find the content type of an instance.}."));
                    }
                    return TypeNotFound;
                }(Error),
                FilterExists: function(_Error3) {
                    _inherits(FilterExists, _Error3);
                    function FilterExists(filter) {
                        _classCallCheck(this, FilterExists);
                        return _possibleConstructorReturn(this, (FilterExists.__proto__ || Object.getPrototypeOf(FilterExists)).call(this, 'Filter with same "' + filter.identifier + ' identifier found."'));
                    }
                    return FilterExists;
                }(Error),
                FetchFail: function(_Error4) {
                    _inherits(FetchFail, _Error4);
                    function FetchFail(response) {
                        _classCallCheck(this, FetchFail);
                        return _possibleConstructorReturn(this, (FetchFail.__proto__ || Object.getPrototypeOf(FetchFail)).call(this, 'Could not fetch "' + response.url + '", received "' + response.status + ": " + response.statusText + '".'));
                    }
                    return FetchFail;
                }(Error),
                InvalidCryptoKey: function(_Error5) {
                    _inherits(InvalidCryptoKey, _Error5);
                    function InvalidCryptoKey() {
                        _classCallCheck(this, InvalidCryptoKey);
                        return _possibleConstructorReturn(this, (InvalidCryptoKey.__proto__ || Object.getPrototypeOf(InvalidCryptoKey)).call(this, "Invalid cryptographic key."));
                    }
                    return InvalidCryptoKey;
                }(Error),
                InvalidCryptoLib: function(_Error6) {
                    _inherits(InvalidCryptoLib, _Error6);
                    function InvalidCryptoLib() {
                        _classCallCheck(this, InvalidCryptoLib);
                        return _possibleConstructorReturn(this, (InvalidCryptoLib.__proto__ || Object.getPrototypeOf(InvalidCryptoLib)).call(this, "Invalid cryptographic algorithm name."));
                    }
                    return InvalidCryptoLib;
                }(Error),
                FailedCrypto: function(_Error7) {
                    _inherits(FailedCrypto, _Error7);
                    function FailedCrypto(err) {
                        _classCallCheck(this, FailedCrypto);
                        return _possibleConstructorReturn(this, (FailedCrypto.__proto__ || Object.getPrototypeOf(FailedCrypto)).call(this, "Failed to decrypt file" + (err && err.message ? " " + err.message : "") + "."));
                    }
                    return FailedCrypto;
                }(Error)
            };
            exports.default = Errors;
        },
        10: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _debug = __webpack_require__(2);
            var _debug2 = _interopRequireDefault(_debug);
            var _engine = __webpack_require__(0);
            var _engine2 = _interopRequireDefault(_engine);
            var _parser = __webpack_require__(12);
            var _parser2 = _interopRequireDefault(_parser);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var debug = (0, _debug2.default)("MT:MediaObject");
            var MediaObject = function() {
                function MediaObject(options, rootElement) {
                    _classCallCheck(this, MediaObject);
                    debug("Creating media object.");
                    this.__uid = _engine2.default.uid();
                    this.__info = options;
                    this.hookedFns = {
                        hasChildNodes: rootElement.hasChildNodes.bind(rootElement),
                        removeChild: rootElement.removeChild.bind(rootElement),
                        getLastChild: function getLastChild() {
                            return rootElement.lastChild;
                        },
                        appendChild: rootElement.appendChild.bind(rootElement)
                    };
                    this.setProperties(_parser2.default.parse(this));
                    _engine2.default.startup(this);
                    debug("Starting media");
                }
                _createClass(MediaObject, [ {
                    key: "setProperties",
                    value: function setProperties(properties) {
                        for (var key in properties) {
                            if (this[key]) {
                                throw new Error("The property " + key + " already exists in this MediaObject !");
                            }
                            this[key] = properties[key];
                        }
                    }
                }, {
                    key: "getId",
                    value: function getId() {
                        return this.__uid;
                    }
                }, {
                    key: "getAttribute",
                    value: function getAttribute(attrName) {
                        return this.__info[attrName];
                    }
                }, {
                    key: "getAllDataAttrKeys",
                    value: function getAllDataAttrKeys() {
                        return Object.keys(this.__info).filter(function(field) {
                            return field.startsWith("data-attr");
                        });
                    }
                }, {
                    key: "getExtension",
                    value: function getExtension() {
                        return this.extension;
                    }
                }, {
                    key: "getMimeType",
                    value: function getMimeType() {
                        return this.mime;
                    }
                }, {
                    key: "hasAttribute",
                    value: function hasAttribute(attributeName) {
                        return attributeName in this.__info;
                    }
                }, {
                    key: "getType",
                    value: function getType() {
                        return this.type;
                    }
                }, {
                    key: "clearContents",
                    value: function clearContents() {
                        while (this.hookedFns.hasChildNodes()) {
                            this.hookedFns.removeChild(this.hookedFns.getLastChild());
                        }
                        debug("All media contents cleared.");
                    }
                }, {
                    key: "replaceContents",
                    value: function replaceContents(nodes) {
                        var _this = this;
                        this.clearContents();
                        nodes.forEach(function(node) {
                            return _this.hookedFns.appendChild(node);
                        });
                        debug("Media contents replaced.");
                    }
                }, {
                    key: "utilsSetAllDataAttributes",
                    value: function utilsSetAllDataAttributes(element) {
                        var _this2 = this;
                        debug("Setting data attributes.");
                        var dataAttributes = this.getAllDataAttrKeys();
                        dataAttributes.forEach(function(dataAttr) {
                            return element.setAttribute(dataAttr.substr(10), _this2.getAttribute(dataAttr));
                        });
                    }
                }, {
                    key: "utilsPassAllDataAttributes",
                    value: function utilsPassAllDataAttributes(element) {
                        var _this3 = this;
                        debug("Passing data attributes.");
                        var dataAttributes = this.getAllDataAttrKeys();
                        dataAttributes.forEach(function(dataAttr) {
                            return element.setAttribute(dataAttr, _this3.getAttribute(dataAttr));
                        });
                    }
                }, {
                    key: "setAttribute",
                    value: function setAttribute(name, value) {
                        this.__info[name] = value;
                    }
                }, {
                    key: "removeAttribute",
                    value: function removeAttribute(name) {
                        delete this.__info[name];
                    }
                } ]);
                return MediaObject;
            }();
            exports.default = MediaObject;
        },
        11: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _mediaObject = __webpack_require__(10);
            var _mediaObject2 = _interopRequireDefault(_mediaObject);
            var _filterManager = __webpack_require__(3);
            var _filterManager2 = _interopRequireDefault(_filterManager);
            var _pluginManager = __webpack_require__(4);
            var _pluginManager2 = _interopRequireDefault(_pluginManager);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function getAttributesObject(element) {
                var attrsObj = {};
                if (element.hasAttributes()) {
                    var attrs = element.attributes;
                    for (var i = attrs.length - 1; i >= 0; i--) {
                        attrsObj[attrs[i].name] = attrs[i].value;
                    }
                }
                return attrsObj;
            }
            function MediaTag(node) {
                if (node.mediaObject) {
                    return node.mediaObject;
                }
                node.mediaObject = new _mediaObject2.default(getAttributesObject(node), node);
                return node.mediaObject;
            }
            MediaTag.registerFilter = _filterManager2.default.register;
            MediaTag.registerPlugin = _pluginManager2.default.register;
            exports.default = MediaTag;
        },
        12: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var Parser = function() {
                function Parser() {
                    _classCallCheck(this, Parser);
                }
                _createClass(Parser, null, [ {
                    key: "extension",
                    value: function extension(mediaObject) {
                        var dataType = mediaObject.getAttribute("data-type");
                        return dataType.split("/")[1];
                    }
                }, {
                    key: "type",
                    value: function type(mediaObject) {
                        var dataType = mediaObject.getAttribute("data-type");
                        return dataType.split("/")[0];
                    }
                }, {
                    key: "mime",
                    value: function mime(mediaObject) {
                        return mediaObject.getAttribute("data-type");
                    }
                }, {
                    key: "protocol",
                    value: function protocol(mediaObject) {
                        var array = mediaObject.getAttribute("src").split("://");
                        if (array.length > 1) {
                            return array[0];
                        }
                        return window.location.protocol;
                    }
                }, {
                    key: "hostname",
                    value: function hostname(mediaObject) {
                        var array = mediaObject.getAttribute("src").split("://");
                        if (array.length > 1) {
                            return array[1].split("/")[0];
                        }
                        return window.location.hostname;
                    }
                }, {
                    key: "source",
                    value: function source(mediaObject) {
                        return mediaObject.getAttribute("src");
                    }
                }, {
                    key: "parse",
                    value: function parse(mediaObject) {
                        return {
                            protocol: Parser.protocol(mediaObject),
                            hostname: Parser.hostname(mediaObject),
                            src: Parser.source(mediaObject),
                            type: Parser.type(mediaObject),
                            extension: Parser.extension(mediaObject),
                            mime: Parser.mime(mediaObject)
                        };
                    }
                } ]);
                return Parser;
            }();
            exports.default = Parser;
        },
        13: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _errors = __webpack_require__(1);
            var _errors2 = _interopRequireDefault(_errors);
            var _engine = __webpack_require__(0);
            var _engine2 = _interopRequireDefault(_engine);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var Crypto = function() {
                function Crypto() {
                    _classCallCheck(this, Crypto);
                }
                _createClass(Crypto, null, [ {
                    key: "slice",
                    value: function slice(u8) {
                        return Array.prototype.slice.call(u8);
                    }
                }, {
                    key: "getRandomKeyStr",
                    value: function getRandomKeyStr() {
                        var Nacl = Crypto.Nacl;
                        var rdm = Nacl.randomBytes(18);
                        return Nacl.util.encodeBase64(rdm);
                    }
                }, {
                    key: "getKeyFromStr",
                    value: function getKeyFromStr(str) {
                        var Nacl = Crypto.Nacl;
                        var hash = Nacl.hash(Nacl.util.decodeBase64(str));
                        return hash.subarray(32, 64);
                    }
                }, {
                    key: "encrypt",
                    value: function encrypt(u8, key) {
                        var array = u8;
                        var nonce = Crypto.Nacl.randomBytes(24);
                        var packed = Crypto.Nacl.secretbox(array, nonce, key);
                        if (packed) {
                            return new Uint8Array(Crypto.slice(nonce).concat(Crypto.slice(packed)));
                        }
                        throw new Error();
                    }
                }, {
                    key: "decrypt",
                    value: function decrypt(u8, key) {
                        if (u8.length < 24) {
                            throw new Error();
                        }
                        var slice = Crypto.slice;
                        var Nacl = Crypto.Nacl;
                        var nonce = new Uint8Array(slice(u8).slice(0, 24));
                        var packed = new Uint8Array(slice(u8).slice(24));
                        var unpacked = Nacl.secretbox.open(packed, nonce, key);
                        if (unpacked) {
                            return unpacked;
                        }
                        throw new Error("Decrypted file in undefined");
                    }
                } ]);
                return Crypto;
            }();
            Crypto.Nacl = window.nacl;
            var DataManager = function() {
                function DataManager() {
                    _classCallCheck(this, DataManager);
                }
                _createClass(DataManager, null, [ {
                    key: "getArrayBuffer",
                    value: function getArrayBuffer(url) {
                        return fetch(url).then(function(response) {
                            if (response.ok) {
                                return response.arrayBuffer();
                            }
                            throw new _errors2.default.FetchFails();
                        }).then(function(arrayBuffer) {
                            return arrayBuffer;
                        });
                    }
                }, {
                    key: "createUrl",
                    value: function createUrl(arrayBuffer) {
                        return window.URL.createObjectURL(arrayBuffer);
                    }
                }, {
                    key: "getBlobUrl",
                    value: function getBlobUrl(data, mtype) {
                        return window.URL.createObjectURL(new Blob([ data ], {
                            type: mtype
                        }));
                    }
                }, {
                    key: "getDataUrl",
                    value: function getDataUrl(data, mtype) {
                        return "data:" + mtype + ";base64," + Crypto.Nacl.util.encodeBase64(data);
                    }
                } ]);
                return DataManager;
            }();
            var CryptoFilter = {
                identifier: "crypto",
                typeCheck: function typeCheck(mediaObject) {
                    var result = mediaObject.hasAttribute("src") && mediaObject.hasAttribute("data-type") && mediaObject.hasAttribute("data-crypto-key");
                    return result;
                },
                startup: function startup(mediaObject) {
                    var src = mediaObject.getAttribute("src");
                    var strKey = mediaObject.getAttribute("data-crypto-key");
                    var cryptoKey = Crypto.getKeyFromStr(strKey);
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", src, true);
                    xhr.responseType = "arraybuffer";
                    xhr.onload = function() {
                        var arrayBuffer = xhr.response;
                        if (arrayBuffer) {
                            var u8 = new Uint8Array(arrayBuffer);
                            var binStr = Crypto.decrypt(u8, cryptoKey);
                            var url = DataManager.getDataUrl(binStr, mediaObject.getMimeType());
                            mediaObject.setAttribute("src", url);
                            mediaObject.removeAttribute("data-crypto-key");
                            _engine2.default.chain(mediaObject);
                        }
                    };
                    xhr.send(null);
                }
            };
            exports.default = CryptoFilter;
        },
        14: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var ImagePlugin = {
                identifier: "image",
                typeCheck: function typeCheck(mediaObject) {
                    var regexExtensions = new RegExp("^png|jpg|jpeg|gif$");
                    var regexMimes = new RegExp("^image/(png|svg+xml|jpeg|gif)$");
                    return mediaObject.hasAttribute("src") && mediaObject.getType() === "image" && regexExtensions.exec(mediaObject.getExtension()) !== null && regexMimes.exec(mediaObject.getMimeType()) !== null;
                },
                startup: function startup(mediaObject) {
                    var element = document.createElement("img");
                    element.setAttribute("src", mediaObject.getAttribute("src"));
                    mediaObject.utilsSetAllDataAttributes(element);
                    mediaObject.replaceContents([ element ]);
                }
            };
            exports.default = ImagePlugin;
        },
        2: function(module, exports, __webpack_require__) {
            "use strict";
            (function(process) {
                var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                exports = module.exports = __webpack_require__(7);
                exports.log = log;
                exports.formatArgs = formatArgs;
                exports.save = save;
                exports.load = load;
                exports.useColors = useColors;
                exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
                exports.colors = [ "lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson" ];
                function useColors() {
                    if (typeof window !== "undefined" && window && typeof window.process !== "undefined" && window.process.type === "renderer") {
                        return true;
                    }
                    return typeof document !== "undefined" && document && "WebkitAppearance" in document.documentElement.style || typeof window !== "undefined" && window && window.console && (console.firebug || console.exception && console.table) || typeof navigator !== "undefined" && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
                }
                exports.formatters.j = function(v) {
                    try {
                        return JSON.stringify(v);
                    } catch (err) {
                        return "[UnexpectedJSONParseError]: " + err.message;
                    }
                };
                function formatArgs(args) {
                    var useColors = this.useColors;
                    args[0] = (useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ") + "+" + exports.humanize(this.diff);
                    if (!useColors) return;
                    var c = "color: " + this.color;
                    args.splice(1, 0, c, "color: inherit");
                    var index = 0;
                    var lastC = 0;
                    args[0].replace(/%[a-zA-Z%]/g, function(match) {
                        if ("%%" === match) return;
                        index++;
                        if ("%c" === match) {
                            lastC = index;
                        }
                    });
                    args.splice(lastC, 0, c);
                }
                function log() {
                    return "object" === (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
                }
                function save(namespaces) {
                    try {
                        if (null == namespaces) {
                            exports.storage.removeItem("debug");
                        } else {
                            exports.storage.debug = namespaces;
                        }
                    } catch (e) {}
                }
                function load() {
                    try {
                        return exports.storage.debug;
                    } catch (e) {}
                    if (typeof process !== "undefined" && "env" in process) {
                        return process.env.DEBUG;
                    }
                }
                exports.enable(load());
                function localstorage() {
                    try {
                        return window.localStorage;
                    } catch (e) {}
                }
            }).call(exports, __webpack_require__(9));
        },
        3: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _errors = __webpack_require__(1);
            var _errors2 = _interopRequireDefault(_errors);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var FilterManager = function() {
                function FilterManager() {
                    _classCallCheck(this, FilterManager);
                }
                _createClass(FilterManager, null, [ {
                    key: "identifiers",
                    value: function identifiers() {
                        return Object.keys(FilterManager.filtersMap);
                    }
                }, {
                    key: "filters",
                    value: function filters() {
                        return Object.keys(FilterManager.filtersMap).map(function(key) {
                            return FilterManager.filtersMap[key];
                        });
                    }
                }, {
                    key: "isRegistered",
                    value: function isRegistered(filter) {
                        return filter.identifier in FilterManager.filtersMap;
                    }
                }, {
                    key: "register",
                    value: function register(filter) {
                        if (filter) {
                            if (FilterManager.isRegistered(filter)) {
                                throw new _errors2.default.FilterExists(filter);
                            }
                            FilterManager.filtersMap[filter.identifier] = filter;
                        }
                    }
                }, {
                    key: "getFilter",
                    value: function getFilter(name) {
                        var filters = FilterManager.filters();
                        return filters.find(function(filter) {
                            return filter.identifier === name;
                        });
                    }
                }, {
                    key: "findType",
                    value: function findType(mediaObject) {
                        var type = void 0;
                        var filters = FilterManager.filters();
                        filters.some(function(filter) {
                            if (filter.typeCheck(mediaObject)) {
                                type = filter.identifier;
                                return true;
                            }
                            return false;
                        });
                        return type;
                    }
                } ]);
                return FilterManager;
            }();
            FilterManager.filtersMap = {};
            exports.default = FilterManager;
        },
        31: function(module, exports, __webpack_require__) {
            "use strict";
            var MediaTag = __webpack_require__(11).default;
            var ImagePlugin = __webpack_require__(14).default;
            MediaTag.registerPlugin(ImagePlugin);
            var CryptoFilter = __webpack_require__(13).default;
            MediaTag.registerFilter(CryptoFilter);
            module.exports = MediaTag;
        },
        4: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _errors = __webpack_require__(1);
            var _errors2 = _interopRequireDefault(_errors);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var PluginManager = function() {
                function PluginManager() {
                    _classCallCheck(this, PluginManager);
                }
                _createClass(PluginManager, null, [ {
                    key: "identifiers",
                    value: function identifiers() {
                        return Object.keys(PluginManager.pluginsMap);
                    }
                }, {
                    key: "plugins",
                    value: function plugins() {
                        return Object.keys(PluginManager.pluginsMap).map(function(key) {
                            return PluginManager.pluginsMap[key];
                        });
                    }
                }, {
                    key: "isRegistered",
                    value: function isRegistered(plugin) {
                        return plugin.identifier in PluginManager.pluginsMap;
                    }
                }, {
                    key: "register",
                    value: function register(plugin) {
                        if (plugin) {
                            if (PluginManager.isRegistered(plugin)) {
                                throw new _errors2.default.PluginExists(plugin);
                            }
                            PluginManager.pluginsMap[plugin.identifier] = plugin;
                        }
                    }
                }, {
                    key: "getPlugin",
                    value: function getPlugin(name) {
                        var plugins = PluginManager.plugins();
                        return plugins.find(function(plugin) {
                            return plugin.identifier === name;
                        });
                    }
                }, {
                    key: "findType",
                    value: function findType(mediaObject) {
                        var type = void 0;
                        var plugins = PluginManager.plugins();
                        plugins.some(function(plugin) {
                            if (plugin.typeCheck(mediaObject)) {
                                type = plugin.identifier;
                                return true;
                            }
                            return false;
                        });
                        return type;
                    }
                } ]);
                return PluginManager;
            }();
            PluginManager.pluginsMap = {};
            exports.default = PluginManager;
        },
        63: function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(31);
        },
        7: function(module, exports, __webpack_require__) {
            "use strict";
            exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
            exports.coerce = coerce;
            exports.disable = disable;
            exports.enable = enable;
            exports.enabled = enabled;
            exports.humanize = __webpack_require__(8);
            exports.names = [];
            exports.skips = [];
            exports.formatters = {};
            var prevTime;
            function selectColor(namespace) {
                var hash = 0, i;
                for (i in namespace) {
                    hash = (hash << 5) - hash + namespace.charCodeAt(i);
                    hash |= 0;
                }
                return exports.colors[Math.abs(hash) % exports.colors.length];
            }
            function createDebug(namespace) {
                function debug() {
                    if (!debug.enabled) return;
                    var self = debug;
                    var curr = +new Date();
                    var ms = curr - (prevTime || curr);
                    self.diff = ms;
                    self.prev = prevTime;
                    self.curr = curr;
                    prevTime = curr;
                    var args = new Array(arguments.length);
                    for (var i = 0; i < args.length; i++) {
                        args[i] = arguments[i];
                    }
                    args[0] = exports.coerce(args[0]);
                    if ("string" !== typeof args[0]) {
                        args.unshift("%O");
                    }
                    var index = 0;
                    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                        if (match === "%%") return match;
                        index++;
                        var formatter = exports.formatters[format];
                        if ("function" === typeof formatter) {
                            var val = args[index];
                            match = formatter.call(self, val);
                            args.splice(index, 1);
                            index--;
                        }
                        return match;
                    });
                    exports.formatArgs.call(self, args);
                    var logFn = debug.log || exports.log || console.log.bind(console);
                    logFn.apply(self, args);
                }
                debug.namespace = namespace;
                debug.enabled = exports.enabled(namespace);
                debug.useColors = exports.useColors();
                debug.color = selectColor(namespace);
                if ("function" === typeof exports.init) {
                    exports.init(debug);
                }
                return debug;
            }
            function enable(namespaces) {
                exports.save(namespaces);
                exports.names = [];
                exports.skips = [];
                var split = (namespaces || "").split(/[\s,]+/);
                var len = split.length;
                for (var i = 0; i < len; i++) {
                    if (!split[i]) continue;
                    namespaces = split[i].replace(/\*/g, ".*?");
                    if (namespaces[0] === "-") {
                        exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
                    } else {
                        exports.names.push(new RegExp("^" + namespaces + "$"));
                    }
                }
            }
            function disable() {
                exports.enable("");
            }
            function enabled(name) {
                var i, len;
                for (i = 0, len = exports.skips.length; i < len; i++) {
                    if (exports.skips[i].test(name)) {
                        return false;
                    }
                }
                for (i = 0, len = exports.names.length; i < len; i++) {
                    if (exports.names[i].test(name)) {
                        return true;
                    }
                }
                return false;
            }
            function coerce(val) {
                if (val instanceof Error) return val.stack || val.message;
                return val;
            }
        },
        8: function(module, exports, __webpack_require__) {
            "use strict";
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var s = 1e3;
            var m = s * 60;
            var h = m * 60;
            var d = h * 24;
            var y = d * 365.25;
            module.exports = function(val, options) {
                options = options || {};
                var type = typeof val === "undefined" ? "undefined" : _typeof(val);
                if (type === "string" && val.length > 0) {
                    return parse(val);
                } else if (type === "number" && isNaN(val) === false) {
                    return options.long ? fmtLong(val) : fmtShort(val);
                }
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
            };
            function parse(str) {
                str = String(str);
                if (str.length > 1e4) {
                    return;
                }
                var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
                if (!match) {
                    return;
                }
                var n = parseFloat(match[1]);
                var type = (match[2] || "ms").toLowerCase();
                switch (type) {
                  case "years":
                  case "year":
                  case "yrs":
                  case "yr":
                  case "y":
                    return n * y;

                  case "days":
                  case "day":
                  case "d":
                    return n * d;

                  case "hours":
                  case "hour":
                  case "hrs":
                  case "hr":
                  case "h":
                    return n * h;

                  case "minutes":
                  case "minute":
                  case "mins":
                  case "min":
                  case "m":
                    return n * m;

                  case "seconds":
                  case "second":
                  case "secs":
                  case "sec":
                  case "s":
                    return n * s;

                  case "milliseconds":
                  case "millisecond":
                  case "msecs":
                  case "msec":
                  case "ms":
                    return n;

                  default:
                    return undefined;
                }
            }
            function fmtShort(ms) {
                if (ms >= d) {
                    return Math.round(ms / d) + "d";
                }
                if (ms >= h) {
                    return Math.round(ms / h) + "h";
                }
                if (ms >= m) {
                    return Math.round(ms / m) + "m";
                }
                if (ms >= s) {
                    return Math.round(ms / s) + "s";
                }
                return ms + "ms";
            }
            function fmtLong(ms) {
                return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
            }
            function plural(ms, n, name) {
                if (ms < n) {
                    return;
                }
                if (ms < n * 1.5) {
                    return Math.floor(ms / n) + " " + name;
                }
                return Math.ceil(ms / n) + " " + name + "s";
            }
        },
        9: function(module, exports, __webpack_require__) {
            "use strict";
            var process = module.exports = {};
            var cachedSetTimeout;
            var cachedClearTimeout;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            (function() {
                try {
                    if (typeof setTimeout === "function") {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === "function") {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            })();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    return setTimeout(fun, 0);
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    return clearTimeout(marker);
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;
            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            process.title = "browser";
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = "";
            process.versions = {};
            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.binding = function(name) {
                throw new Error("process.binding is not supported");
            };
            process.cwd = function() {
                return "/";
            };
            process.chdir = function(dir) {
                throw new Error("process.chdir is not supported");
            };
            process.umask = function() {
                return 0;
            };
        }
    });
});
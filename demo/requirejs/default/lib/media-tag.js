(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["mediaTag"] = factory(); else root["mediaTag"] = factory();
})(this, function() {
    return function(modules) {
        // webpackBootstrap
        // The module cache
        var installedModules = {};
        // The require function
        function __webpack_require__(moduleId) {
            // Check if module is in cache
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            // Create a new module (and put it into the cache)
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            // Execute the module function
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            // Flag the module as loaded
            module.l = true;
            // Return the exports of the module
            return module.exports;
        }
        // expose the modules object (__webpack_modules__)
        __webpack_require__.m = modules;
        // expose the module cache
        __webpack_require__.c = installedModules;
        // identity function for calling harmony imports with the correct context
        __webpack_require__.i = function(value) {
            return value;
        };
        // define getter function for harmony exports
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter
                });
            }
        };
        // getDefaultExport function for compatibility with non-harmony modules
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        // Object.prototype.hasOwnProperty.call
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        // __webpack_public_path__
        __webpack_require__.p = "";
        // Load entry module and return exports
        return __webpack_require__(__webpack_require__.s = 64);
    }([ function(module, exports, __webpack_require__) {
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
        /**
 * Engine class to handle filter and plugin execution.
 * The goal is to run before all filters who matches
 * with mediaObject attributes and finalize with a plugin
 * who modifies the DOM to display content.
 *
 * @class      Engine (name)
 */
        var Engine = function() {
            function Engine() {
                _classCallCheck(this, Engine);
            }
            _createClass(Engine, null, [ {
                key: "startup",
                /**
   * Runs the engine over a mediaObject.
   *
   * @param      {MediaObject}  mediaObject  The media object
   */
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
        /**
 * To handle filter chains.
 */
        Engine.chains = {};
        /**
 * Unique id generator.
 */
        Engine.uid = function(i) {
            return function() {
                return i++;
            };
        }(0);
        /**
 * Callback who's returns a boolean after passing some conditions.
 *
 * With this configuration, a valid filter chain is a chain
 * which after each filter execution the number of matching
 * is less one the previous filter execution or equal for the
 * case of the default filter.
 *
 * @param      {MediaObject}   mediaObject  The media object
 * @return     {boolean}  Returns true if rules are respected, false otherwise.
 */
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
    }, function(module, exports, __webpack_require__) {
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
        /**
 * Aggregates all Errors classes that media tag throw.
 *
 * @since 0.2.0
 */
        var Errors = {
            // Media Tag //
            /**
  * @class {PluginExists} PluginExists Error thrown when a try to
  * register a plugin but the same identifier has been already
  * registered.
  * @since 0.2.0
  */
            PluginExists: function(_Error) {
                _inherits(PluginExists, _Error);
                function PluginExists(objPlugin) {
                    _classCallCheck(this, PluginExists);
                    return _possibleConstructorReturn(this, (PluginExists.__proto__ || Object.getPrototypeOf(PluginExists)).call(this, 'Plugin with same "' + objPlugin.identifier + '" identifier found.'));
                }
                return PluginExists;
            }(Error),
            /**
  * @class {TypeNotFound} TypeNotFound Error thrown when media tag
  * is incapable to find the type of a given media content. It
  * loops all the registered plugins, trying to find a match for
  * typeCheck, if no plugin returns true then this error occurs.
  * @since 0.2.0
  */
            TypeNotFound: function(_Error2) {
                _inherits(TypeNotFound, _Error2);
                function TypeNotFound() {
                    _classCallCheck(this, TypeNotFound);
                    return _possibleConstructorReturn(this, (TypeNotFound.__proto__ || Object.getPrototypeOf(TypeNotFound)).call(this, "Media Tag could not find the content type of an instance.}."));
                }
                return TypeNotFound;
            }(Error),
            /**
  * @class {FilterExists} FilterExists Error thrown when a try to
  * register a filter but the same identifier has been already
  * registered.
  * @since 0.2.1
  */
            FilterExists: function(_Error3) {
                _inherits(FilterExists, _Error3);
                function FilterExists(filter) {
                    _classCallCheck(this, FilterExists);
                    return _possibleConstructorReturn(this, (FilterExists.__proto__ || Object.getPrototypeOf(FilterExists)).call(this, 'Filter with same "' + filter.identifier + ' identifier found."'));
                }
                return FilterExists;
            }(Error),
            // Fetch //
            /**
  * @class {FetchFail} FetchFail Error thrown when media tag
  * is incapable to fetch a resource.
  * @since 0.2.0
  */
            FetchFail: function(_Error4) {
                _inherits(FetchFail, _Error4);
                function FetchFail(response) {
                    _classCallCheck(this, FetchFail);
                    return _possibleConstructorReturn(this, (FetchFail.__proto__ || Object.getPrototypeOf(FetchFail)).call(this, 'Could not fetch "' + response.url + '", received "' + response.status + ": " + response.statusText + '".'));
                }
                return FetchFail;
            }(Error),
            // Crypto plugin //
            /**
  * @class {InvalidCryptoKey} InvalidCryptoKey Error thrown when
  * using the crypto plugin. The key informed is invalid (for
  * example when a field is missing).
  * @since 0.2.0
  */
            InvalidCryptoKey: function(_Error5) {
                _inherits(InvalidCryptoKey, _Error5);
                function InvalidCryptoKey() {
                    _classCallCheck(this, InvalidCryptoKey);
                    return _possibleConstructorReturn(this, (InvalidCryptoKey.__proto__ || Object.getPrototypeOf(InvalidCryptoKey)).call(this, "Invalid cryptographic key."));
                }
                return InvalidCryptoKey;
            }(Error),
            /**
  * @class {InvalidCryptoLib} InvalidCryptoLib Error thrown when
  * using the crypto plugin. The key contains an invalid algorithm
  * (for example, to the day, only 'xsalsa20poly1305' is supported).
  * @since 0.2.0
  */
            InvalidCryptoLib: function(_Error6) {
                _inherits(InvalidCryptoLib, _Error6);
                function InvalidCryptoLib() {
                    _classCallCheck(this, InvalidCryptoLib);
                    return _possibleConstructorReturn(this, (InvalidCryptoLib.__proto__ || Object.getPrototypeOf(InvalidCryptoLib)).call(this, "Invalid cryptographic algorithm name."));
                }
                return InvalidCryptoLib;
            }(Error),
            /**
  * @class {FailedCrypto} FailedCrypto Error thrown when
  * using the crypto plugin. The contents were impossible to
  * decrypt (for example, the key may be wrong, or the encrypted
  * file).
  * @since 0.2.0
  */
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
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(process) {
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            /**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
            exports = module.exports = __webpack_require__(7);
            exports.log = log;
            exports.formatArgs = formatArgs;
            exports.save = save;
            exports.load = load;
            exports.useColors = useColors;
            exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
            /**
 * Colors.
 */
            exports.colors = [ "lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson" ];
            /**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
            function useColors() {
                // NB: In an Electron preload script, document will be defined but not fully
                // initialized. Since we know we're in Chrome, we'll just detect this case
                // explicitly
                if (typeof window !== "undefined" && window && typeof window.process !== "undefined" && window.process.type === "renderer") {
                    return true;
                }
                // is webkit? http://stackoverflow.com/a/16459606/376773
                // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
                // is firebug? http://stackoverflow.com/a/398120/376773
                // is firefox >= v31?
                // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
                // double check webkit in userAgent just in case we are in a worker
                return typeof document !== "undefined" && document && "WebkitAppearance" in document.documentElement.style || typeof window !== "undefined" && window && window.console && (console.firebug || console.exception && console.table) || typeof navigator !== "undefined" && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
            }
            /**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */
            exports.formatters.j = function(v) {
                try {
                    return JSON.stringify(v);
                } catch (err) {
                    return "[UnexpectedJSONParseError]: " + err.message;
                }
            };
            /**
 * Colorize log arguments if enabled.
 *
 * @api public
 */
            function formatArgs(args) {
                var useColors = this.useColors;
                args[0] = (useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ") + "+" + exports.humanize(this.diff);
                if (!useColors) return;
                var c = "color: " + this.color;
                args.splice(1, 0, c, "color: inherit");
                // the final "%c" is somewhat tricky, because there could be other
                // arguments passed either before or after the %c, so we need to
                // figure out the correct index to insert the CSS into
                var index = 0;
                var lastC = 0;
                args[0].replace(/%[a-zA-Z%]/g, function(match) {
                    if ("%%" === match) return;
                    index++;
                    if ("%c" === match) {
                        // we only are interested in the *last* %c
                        // (the user may have provided their own)
                        lastC = index;
                    }
                });
                args.splice(lastC, 0, c);
            }
            /**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
            function log() {
                // this hackery is required for IE8/9, where
                // the `console.log` function doesn't have 'apply'
                return "object" === (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }
            /**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
            function save(namespaces) {
                try {
                    if (null == namespaces) {
                        exports.storage.removeItem("debug");
                    } else {
                        exports.storage.debug = namespaces;
                    }
                } catch (e) {}
            }
            /**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
            function load() {
                try {
                    return exports.storage.debug;
                } catch (e) {}
                // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
                if (typeof process !== "undefined" && "env" in process) {
                    return process.env.DEBUG;
                }
            }
            /**
 * Enable namespaces listed in `localStorage.debug` initially.
 */
            exports.enable(load());
            /**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */
            function localstorage() {
                try {
                    return window.localStorage;
                } catch (e) {}
            }
        }).call(exports, __webpack_require__(9));
    }, function(module, exports, __webpack_require__) {
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
        /**
 * Class for filter manager.
 *
 * @class      FilterManager (name)
 */
        var FilterManager = function() {
            function FilterManager() {
                _classCallCheck(this, FilterManager);
            }
            _createClass(FilterManager, null, [ {
                key: "identifiers",
                /**
   * Returns an array with all filter identifiers.
   *
   * @return     {Array<String>}  Filter identifiers array
   */
                value: function identifiers() {
                    return Object.keys(FilterManager.filtersMap);
                }
            }, {
                key: "filters",
                value: function filters() {
                    return Object.values(FilterManager.filtersMap);
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
        /**
 * Static filters map
 */
        FilterManager.filtersMap = {};
        exports.default = FilterManager;
    }, function(module, exports, __webpack_require__) {
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
                /**
   * Returns an array with all plugin identifiers.
   *
   * @return     {Array<String>}  Plugin identifiers array
   */
                value: function identifiers() {
                    return Object.keys(PluginManager.pluginsMap);
                }
            }, {
                key: "plugins",
                value: function plugins() {
                    return Object.values(PluginManager.pluginsMap);
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
        /**
 * Static plugins map
 */
        PluginManager.pluginsMap = {};
        exports.default = PluginManager;
    }, , , function(module, exports, __webpack_require__) {
        "use strict";
        /**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
        exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
        exports.coerce = coerce;
        exports.disable = disable;
        exports.enable = enable;
        exports.enabled = enabled;
        exports.humanize = __webpack_require__(8);
        /**
 * The currently active debug mode names, and names to skip.
 */
        exports.names = [];
        exports.skips = [];
        /**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */
        exports.formatters = {};
        /**
 * Previous log timestamp.
 */
        var prevTime;
        /**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */
        function selectColor(namespace) {
            var hash = 0, i;
            for (i in namespace) {
                hash = (hash << 5) - hash + namespace.charCodeAt(i);
                hash |= 0;
            }
            return exports.colors[Math.abs(hash) % exports.colors.length];
        }
        /**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */
        function createDebug(namespace) {
            function debug() {
                // disabled?
                if (!debug.enabled) return;
                var self = debug;
                // set `diff` timestamp
                var curr = +new Date();
                var ms = curr - (prevTime || curr);
                self.diff = ms;
                self.prev = prevTime;
                self.curr = curr;
                prevTime = curr;
                // turn the `arguments` into a proper Array
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) {
                    args[i] = arguments[i];
                }
                args[0] = exports.coerce(args[0]);
                if ("string" !== typeof args[0]) {
                    // anything else let's inspect with %O
                    args.unshift("%O");
                }
                // apply any `formatters` transformations
                var index = 0;
                args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                    // if we encounter an escaped % then don't increase the array index
                    if (match === "%%") return match;
                    index++;
                    var formatter = exports.formatters[format];
                    if ("function" === typeof formatter) {
                        var val = args[index];
                        match = formatter.call(self, val);
                        // now we need to remove `args[index]` since it's inlined in the `format`
                        args.splice(index, 1);
                        index--;
                    }
                    return match;
                });
                // apply env-specific formatting (colors, etc.)
                exports.formatArgs.call(self, args);
                var logFn = debug.log || exports.log || console.log.bind(console);
                logFn.apply(self, args);
            }
            debug.namespace = namespace;
            debug.enabled = exports.enabled(namespace);
            debug.useColors = exports.useColors();
            debug.color = selectColor(namespace);
            // env-specific initialization logic for debug instances
            if ("function" === typeof exports.init) {
                exports.init(debug);
            }
            return debug;
        }
        /**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */
        function enable(namespaces) {
            exports.save(namespaces);
            exports.names = [];
            exports.skips = [];
            var split = (namespaces || "").split(/[\s,]+/);
            var len = split.length;
            for (var i = 0; i < len; i++) {
                if (!split[i]) continue;
                // ignore empty strings
                namespaces = split[i].replace(/\*/g, ".*?");
                if (namespaces[0] === "-") {
                    exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
                } else {
                    exports.names.push(new RegExp("^" + namespaces + "$"));
                }
            }
        }
        /**
 * Disable debug output.
 *
 * @api public
 */
        function disable() {
            exports.enable("");
        }
        /**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */
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
        /**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */
        function coerce(val) {
            if (val instanceof Error) return val.stack || val.message;
            return val;
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        /**
 * Helpers.
 */
        var s = 1e3;
        var m = s * 60;
        var h = m * 60;
        var d = h * 24;
        var y = d * 365.25;
        /**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */
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
        /**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */
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
        /**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */
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
        /**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */
        function fmtLong(ms) {
            return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
        }
        /**
 * Pluralization helper.
 */
        function plural(ms, n, name) {
            if (ms < n) {
                return;
            }
            if (ms < n * 1.5) {
                return Math.floor(ms / n) + " " + name;
            }
            return Math.ceil(ms / n) + " " + name + "s";
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        // shim for using process in browser
        var process = module.exports = {};
        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.
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
                //normal enviroments in sane situations
                return setTimeout(fun, 0);
            }
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                //normal enviroments in sane situations
                return clearTimeout(marker);
            }
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
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
        // v8 likes predictible objects
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
        // empty string to avoid regexp issues
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
    }, function(module, exports, __webpack_require__) {
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
        /**
 * Media Object is created for each media-tag and contains the
 * information about its contents. It also has helpers functions that
 * can be used by plugins to add functionality to media-tag.
 *
 * @class MediaObject
 * @since 0.2.0
 */
        var MediaObject = function() {
            /**
  * Creates an instance of MediaObject.
  * @param {Object} options Object with attributes that will specify the contents.
  * @param {HTMLElement} rootElement HTMLElement DOM Node that acts as container to this object.
  *
  * @memberOf MediaObject
  */
            function MediaObject(options, rootElement) {
                _classCallCheck(this, MediaObject);
                // TODO: parse src into url parts (protocol, domain, extension, etc)
                debug("Creating media object.");
                /**
   * Generate a unique id for this MediaObject.
   */
                this.__uid = _engine2.default.uid();
                /**
   * @type {Object} __info Object with attributes that will specify the contents.
   */
                this.__info = options;
                /**
   * @type {HTMLElement} rootElement HTMLElement DOM Node that acts as
   * container to this object.
   */
                // this.rootElement = rootElement;
                // TODO: rethink about what is the best, explicit bind needed
                // functions OR saving the node
                this.hookedFns = {
                    hasChildNodes: rootElement.hasChildNodes.bind(rootElement),
                    removeChild: rootElement.removeChild.bind(rootElement),
                    getLastChild: function getLastChild() {
                        return rootElement.lastChild;
                    },
                    appendChild: rootElement.appendChild.bind(rootElement)
                };
                /**
   * Parsing of options to extract mediaObject's properties
   */
                this.setProperties(_parser2.default.parse(this));
                /**
   * Starts up the engine on mediaObject which process all operations
   * possible from filters until plugin detection.
   */
                _engine2.default.startup(this);
                debug("Starting media");
            }
            /**
  * Sets the properties. Properties are unique, no redefinition otherwise throws error.
  *
  * @param      {Object}  properties  The properties
  */
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
                    // Cleanup element
                    // this.rootElement.innerHTML = '';
                    this.clearContents();
                    // Add nodes to rootElement
                    // nodes.forEach(node => this.rootElement.appendChild(node));
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
    }, function(module, exports, __webpack_require__) {
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
        /**
 * @module MediaTag
 * Media Tag Core
 * @example
 * var mediaTagObj = MediaTag(document.querySelector('.myMediaTag'));
 * @since 0.2.0
 */
        function MediaTag(node) {
            // If this element has already a mediaObject just return it
            if (node.mediaObject) {
                return node.mediaObject;
            }
            // Otherwise we create a new mediaObject
            node.mediaObject = new _mediaObject2.default(getAttributesObject(node), node);
            return node.mediaObject;
        }
        MediaTag.registerFilter = _filterManager2.default.register;
        /**
 * Register a new plugin.
 * @public
 * @memberOf MediaTag
 * @since 0.2.0
 */
        MediaTag.registerPlugin = _pluginManager2.default.register;
        exports.default = MediaTag;
    }, function(module, exports, __webpack_require__) {
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
        /* global window */
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
    }, function(module, exports, __webpack_require__) {
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
        /* global fetch, window, XMLHttpRequest, Blob */
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
        /**
 * Class for crypto.
 *
 * @class      Crypto (name)
 */
        var Crypto = function() {
            function Crypto() {
                _classCallCheck(this, Crypto);
            }
            _createClass(Crypto, null, [ {
                key: "slice",
                /**
   * Convert a Uint8Array into Array.
   *
   * @param      {Uint8Array}  u8      The u 8
   * @return     {Array}  Array from Uint8Array.
   */
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
        /**
 * Binds the extern nacl lib to Crypto.
 */
        Crypto.Nacl = window.nacl;
        /**
 * Class for data manager.
 *
 * @class      DataManager (name)
 */
        var DataManager = function() {
            function DataManager() {
                _classCallCheck(this, DataManager);
            }
            _createClass(DataManager, null, [ {
                key: "getArrayBuffer",
                /**
   * Gets the array buffer from a source url.
   *
   * @param      {<type>}  url     The url
   * @return     {<type>}  The array buffer.
   */
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
        /**
 * CryptoFilter to decrypt contents.
 *
 * @type       {Filter}
 */
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
                        // const blob = new Blob([binStr], {type: mediaObject.getType()});
                        var url = DataManager.getBlobUrl(binStr, mediaObject.getMimeType());
                        // const url = DataManager.getDataUrl(binStr, mediaObject.getMimeType());
                        /**
     * Modifications applied on mediaObject.
     * After these modifications the typeCheck
     * method must return false otherwise the
     * filter may infinite loop.
     */
                        mediaObject.setAttribute("src", url);
                        mediaObject.removeAttribute("data-crypto-key");
                        /**
     * Filters must call chain to try if the
     * current mediaObject matches other filters.
     */
                        _engine2.default.chain(mediaObject);
                    }
                };
                xhr.send(null);
            }
        };
        exports.default = CryptoFilter;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        /* global document */
        /**
 * @module ImagePlugin
 * @since 0.2.0
 */
        var ImagePlugin = {
            identifier: "image",
            typeCheck: function typeCheck(mediaObject) {
                var regexExtensions = new RegExp("^png|jpg|jpeg|gif$");
                var regexMimes = new RegExp("^image/(png|svg+xml|jpeg|gif)$");
                return mediaObject.hasAttribute("src") && mediaObject.getType() === "image" && regexExtensions.exec(mediaObject.getExtension()) !== null && regexMimes.exec(mediaObject.getMimeType()) !== null;
            },
            startup: function startup(mediaObject) {
                // Create image element
                var element = document.createElement("img");
                // Set the source file
                element.setAttribute("src", mediaObject.getAttribute("src"));
                // Set all data-attr-something to the element.setAttribute('something', value)
                mediaObject.utilsSetAllDataAttributes(element);
                // Update mediaObject contents with the created element
                mediaObject.replaceContents([ element ]);
            }
        };
        exports.default = ImagePlugin;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        // Why is this the only file with old style imports?
        // We can't use export default or webpack will not export the global
        // library var correctly.
        // https://github.com/webpack/webpack/issues/706
        // So the following does not work:
        // export default MediaTag;
        // And because of that we can't use module.exports mixed with imports
        // https://github.com/webpack/webpack/issues/4039
        var MediaTag = __webpack_require__(11).default;
        // Plugins
        // Plugin :: Image
        var ImagePlugin = __webpack_require__(14).default;
        MediaTag.registerPlugin(ImagePlugin);
        // Plugin :: Video
        var VideoPlugin = __webpack_require__(23).default;
        MediaTag.registerPlugin(VideoPlugin);
        // Plugin :: Audio
        var AudioPlugin = __webpack_require__(20).default;
        MediaTag.registerPlugin(AudioPlugin);
        // Plugin :: Dash
        var DashPlugin = __webpack_require__(21).default;
        MediaTag.registerPlugin(DashPlugin);
        // Plugin :: Pdf
        var PdfPlugin = __webpack_require__(22).default;
        MediaTag.registerPlugin(PdfPlugin);
        // Filter :: Default
        var DefaultFilter = __webpack_require__(19).default;
        MediaTag.registerFilter(DefaultFilter);
        // Filter :: Crypto
        var CryptoFilter = __webpack_require__(13).default;
        MediaTag.registerFilter(CryptoFilter);
        // Filter :: ClearKey
        var ClearKeyFilter = __webpack_require__(18).default;
        MediaTag.registerFilter(ClearKeyFilter);
        module.exports = MediaTag;
    }, , , function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _engine = __webpack_require__(0);
        var _engine2 = _interopRequireDefault(_engine);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        /**
 * Filter which checking the presence of 'data-clear-key' attribute and
 * extract the id and the key to enable mpeg-dash content decryption.
 *
 * @type       {Filter}
 */
        var ClearKeyFilter = {
            identifier: "clear-key",
            typeCheck: function typeCheck(mediaObject) {
                return mediaObject.hasAttribute("data-clear-key");
            },
            startup: function startup(mediaObject) {
                var clearKey = mediaObject.getAttribute("data-clear-key");
                var id = clearKey.substring(0, 32);
                var key = clearKey.substring(33, 65);
                mediaObject.setAttribute("id", id);
                mediaObject.setAttribute("key", key);
                mediaObject.removeAttribute("data-clear-key");
                _engine2.default.chain(mediaObject);
            }
        };
        exports.default = ClearKeyFilter;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _engine = __webpack_require__(0);
        var _engine2 = _interopRequireDefault(_engine);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        /**
 * Default filter which checking the presence of 'src' and 'data-type' attributes.
 *
 * @type       {Filter}
 */
        var DefaultFilter = {
            identifier: "default",
            typeCheck: function typeCheck(mediaObject) {
                var result = mediaObject.hasAttribute("src") && mediaObject.hasAttribute("data-type");
                if (result) {
                    return result;
                }
                throw new Error('Malformatted media-tag, it must have an attribute "src" and "data-type"');
            },
            startup: function startup(mediaObject) {
                _engine2.default.chain(mediaObject);
            }
        };
        exports.default = DefaultFilter;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        /* global document */
        /**
 * @module AudioPlugin
 * @since 0.2.0
 */
        var AudioPlugin = {
            identifier: "audio",
            typeCheck: function typeCheck(mediaObject) {
                var regexExtensions = new RegExp("^mp3|ogg|webm|wav$");
                var regexMimes = new RegExp("^audio/(mp3|ogg|webm|wav)$");
                return mediaObject.hasAttribute("src") && mediaObject.getType() === "audio" && regexExtensions.exec(mediaObject.getExtension()) !== null && regexMimes.exec(mediaObject.getMimeType()) !== null;
            },
            startup: function startup(mediaObject) {
                // Create audio element
                var element = document.createElement("audio");
                // Set the source file
                element.setAttribute("src", mediaObject.getAttribute("src"));
                // Set all data-attr-something to the element.setAttribute('something', value)
                mediaObject.utilsSetAllDataAttributes(element);
                // Update mediaObject contents with the created element
                mediaObject.replaceContents([ element ]);
            }
        };
        exports.default = AudioPlugin;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        /* global document, shaka */
        /**
 * @module DashPlugin
 * @since 0.2.0
 */
        var DashPlugin = {
            identifier: "dash",
            typeCheck: function typeCheck(mediaObject) {
                var regexExtensions = new RegExp("^dash[+]xml$");
                var regexMimes = new RegExp("^application/dash[+]xml$");
                return mediaObject.hasAttribute("src") && mediaObject.getType() === "application" && regexExtensions.exec(mediaObject.getExtension()) !== null && regexMimes.exec(mediaObject.getMimeType()) !== null;
            },
            startup: function startup(mediaObject) {
                var video = document.createElement("video");
                var player = new shaka.Player(video);
                var id = mediaObject.getAttribute("id");
                var key = mediaObject.getAttribute("key");
                if (id && key) {
                    var clearKeyStringObject = '{"' + id + '": "' + key + '"}';
                    var clearKey = JSON.parse(clearKeyStringObject);
                    player.configure({
                        drm: {
                            clearKeys: clearKey
                        }
                    });
                }
                mediaObject.utilsSetAllDataAttributes(video);
                mediaObject.replaceContents([ video ]);
                player.load(mediaObject.getAttribute("src")).then(function() {});
            }
        };
        exports.default = DashPlugin;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        /* global document, PDFJS */
        /**
 * @module PdfPlugin
 * @since 0.2.0
 */
        var PdfPlugin = {
            identifier: "pdf",
            typeCheck: function typeCheck(mediaObject) {
                var regexExtensions = new RegExp("^pdf$");
                var regexMimes = new RegExp("^application/pdf$");
                return mediaObject.hasAttribute("src") && mediaObject.getType() === "application" && regexExtensions.exec(mediaObject.getExtension()) !== null && regexMimes.exec(mediaObject.getMimeType()) !== null;
            },
            startup: function startup(mediaObject) {
                // Get the pdf url
                var url = mediaObject.getAttribute("src");
                // Create canvas element
                var canvas = document.createElement("canvas");
                mediaObject.utilsSetAllDataAttributes(canvas);
                // Update mediaObject contents with the created element
                mediaObject.replaceContents([ canvas ]);
                // Disable workers for now
                // TODO: verify what workers do and how to integrate it
                PDFJS.disableWorker = true;
                // Asynchronous download of PDF
                var loadingTask = PDFJS.getDocument(url);
                loadingTask.promise.then(function(pdf) {
                    // Fetch the first page
                    console.log(pdf);
                    var pageNumber = 1;
                    function render(page) {
                        var scale = 1;
                        var viewport = page.getViewport(scale);
                        // Prepare canvas using PDF page dimensions
                        var context = canvas.getContext("2d");
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        // Render PDF page into canvas context
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        var renderTask = page.render(renderContext);
                        renderTask.then(function() {});
                    }
                    /**
    * Update the pageNumber after each call.
    * Based on click events.
    *
    * @param      {MouseEvent}  mouseEvent  The mouse event
    */
                    function update(mouseEvent) {
                        if (!mouseEvent) {
                            console.log("no event");
                        }
                        if (mouseEvent.buttons === 0) {
                            // Left click
                            if (pageNumber === pdf.numPages) {
                                pageNumber = 1;
                            } else {
                                pageNumber++;
                            }
                        } else if (mouseEvent.buttons === 4) {
                            // Left click + Wheel click
                            if (pageNumber === 1) {
                                pageNumber = pdf.numPages;
                            } else {
                                pageNumber--;
                            }
                        }
                    }
                    /**
    * First render.
    */
                    pdf.getPage(pageNumber).then(function(page) {
                        render(page);
                    });
                    /**
    * Renders on click event.
    *
    * @param      {MouseEvent}  event   The event
    */
                    canvas.onclick = function(event) {
                        update(event);
                        pdf.getPage(pageNumber).then(function(page) {
                            render(page);
                        });
                    };
                }, function(reason) {
                    // PDF loading error
                    console.error(reason);
                });
            }
        };
        exports.default = PdfPlugin;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        /* global document */
        /**
 * @module VideoPlugin
 * @since 0.2.0
 */
        var VideoPlugin = {
            identifier: "video",
            typeCheck: function typeCheck(mediaObject) {
                var regexExtensions = new RegExp("^mp4|ogg|webm$");
                var regexMimes = new RegExp("^video/(mp4|ogg|webm)$");
                return mediaObject.hasAttribute("src") && mediaObject.getType() === "video" && regexExtensions.exec(mediaObject.getExtension()) !== null && regexMimes.exec(mediaObject.getMimeType()) !== null;
            },
            startup: function startup(mediaObject) {
                // Create video element
                var element = document.createElement("video");
                // Set the source file
                element.setAttribute("src", mediaObject.getAttribute("src"));
                // Set all data-attr-something to the element.setAttribute('something', value)
                mediaObject.utilsSetAllDataAttributes(element);
                // Update mediaObject contents with the created element
                mediaObject.replaceContents([ element ]);
            }
        };
        exports.default = VideoPlugin;
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(15);
    } ]);
});
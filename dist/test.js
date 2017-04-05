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
        return __webpack_require__(__webpack_require__.s = 65);
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
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /**
 * ### flag(object, key, [value])
 *
 * Get or set a flag value on an object. If a
 * value is provided it will be set, else it will
 * return the currently set value or `undefined` if
 * the value is not set.
 *
 *     utils.flag(this, 'foo', 'bar'); // setter
 *     utils.flag(this, 'foo'); // getter, returns `bar`
 *
 * @param {Object} object constructed Assertion
 * @param {String} key
 * @param {Mixed} value (optional)
 * @namespace Utils
 * @name flag
 * @api private
 */
        module.exports = function(obj, key, value) {
            var flags = obj.__flags || (obj.__flags = Object.create(null));
            if (arguments.length === 3) {
                flags[key] = value;
            } else {
                return flags[key];
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = {
            /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */
            includeStack: false,
            /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */
            showDiff: true,
            /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */
            truncateThreshold: 40
        };
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        // This is (almost) directly from Node.js utils
        // https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js
        var getName = __webpack_require__(26);
        var getProperties = __webpack_require__(49);
        var getEnumerableProperties = __webpack_require__(46);
        module.exports = inspect;
        /**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
 *    properties of objects.
 * @param {Number} depth Depth in which to descend in object. Default is 2.
 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
 *    output. Default is false (no coloring).
 * @namespace Utils
 * @name inspect
 */
        function inspect(obj, showHidden, depth, colors) {
            var ctx = {
                showHidden: showHidden,
                seen: [],
                stylize: function stylize(str) {
                    return str;
                }
            };
            return formatValue(ctx, obj, typeof depth === "undefined" ? 2 : depth);
        }
        // Returns true if object is a DOM element.
        var isDOMElement = function isDOMElement(object) {
            if ((typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object") {
                return object instanceof HTMLElement;
            } else {
                return object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === "object" && object.nodeType === 1 && typeof object.nodeName === "string";
            }
        };
        function formatValue(ctx, value, recurseTimes) {
            // Provide a hook for user-specified inspect functions.
            // Check that value is an object with an inspect function on it
            if (value && typeof value.inspect === "function" && // Filter out the util module, it's inspect function is special
            value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
            !(value.constructor && value.constructor.prototype === value)) {
                var ret = value.inspect(recurseTimes);
                if (typeof ret !== "string") {
                    ret = formatValue(ctx, ret, recurseTimes);
                }
                return ret;
            }
            // Primitive types cannot have properties
            var primitive = formatPrimitive(ctx, value);
            if (primitive) {
                return primitive;
            }
            // If this is a DOM element, try to get the outer HTML.
            if (isDOMElement(value)) {
                if ("outerHTML" in value) {
                    return value.outerHTML;
                } else {
                    // Attempt to serialize it
                    try {
                        if (document.xmlVersion) {
                            var xmlSerializer = new XMLSerializer();
                            return xmlSerializer.serializeToString(value);
                        } else {
                            // Firefox 11- do not support outerHTML
                            //   It does, however, support innerHTML
                            //   Use the following to render the element
                            var ns = "http://www.w3.org/1999/xhtml";
                            var container = document.createElementNS(ns, "_");
                            container.appendChild(value.cloneNode(false));
                            html = container.innerHTML.replace("><", ">" + value.innerHTML + "<");
                            container.innerHTML = "";
                            return html;
                        }
                    } catch (err) {}
                }
            }
            // Look up the keys of the object.
            var visibleKeys = getEnumerableProperties(value);
            var keys = ctx.showHidden ? getProperties(value) : visibleKeys;
            // Some type of object without properties can be shortcutted.
            // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
            // a `stack` plus `description` property; ignore those for consistency.
            if (keys.length === 0 || isError(value) && (keys.length === 1 && keys[0] === "stack" || keys.length === 2 && keys[0] === "description" && keys[1] === "stack")) {
                if (typeof value === "function") {
                    var name = getName(value);
                    var nameSuffix = name ? ": " + name : "";
                    return ctx.stylize("[Function" + nameSuffix + "]", "special");
                }
                if (isRegExp(value)) {
                    return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
                }
                if (isDate(value)) {
                    return ctx.stylize(Date.prototype.toUTCString.call(value), "date");
                }
                if (isError(value)) {
                    return formatError(value);
                }
            }
            var base = "", array = false, braces = [ "{", "}" ];
            // Make Array say that they are Array
            if (isArray(value)) {
                array = true;
                braces = [ "[", "]" ];
            }
            // Make functions say that they are functions
            if (typeof value === "function") {
                var name = getName(value);
                var nameSuffix = name ? ": " + name : "";
                base = " [Function" + nameSuffix + "]";
            }
            // Make RegExps say that they are RegExps
            if (isRegExp(value)) {
                base = " " + RegExp.prototype.toString.call(value);
            }
            // Make dates with properties first say the date
            if (isDate(value)) {
                base = " " + Date.prototype.toUTCString.call(value);
            }
            // Make error with message first say the error
            if (isError(value)) {
                return formatError(value);
            }
            if (keys.length === 0 && (!array || value.length == 0)) {
                return braces[0] + base + braces[1];
            }
            if (recurseTimes < 0) {
                if (isRegExp(value)) {
                    return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
                } else {
                    return ctx.stylize("[Object]", "special");
                }
            }
            ctx.seen.push(value);
            var output;
            if (array) {
                output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
            } else {
                output = keys.map(function(key) {
                    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                });
            }
            ctx.seen.pop();
            return reduceToSingleString(output, base, braces);
        }
        function formatPrimitive(ctx, value) {
            switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
              case "undefined":
                return ctx.stylize("undefined", "undefined");

              case "string":
                var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return ctx.stylize(simple, "string");

              case "number":
                if (value === 0 && 1 / value === -Infinity) {
                    return ctx.stylize("-0", "number");
                }
                return ctx.stylize("" + value, "number");

              case "boolean":
                return ctx.stylize("" + value, "boolean");
            }
            // For some reason typeof null is "object", so special case here.
            if (value === null) {
                return ctx.stylize("null", "null");
            }
        }
        function formatError(value) {
            return "[" + Error.prototype.toString.call(value) + "]";
        }
        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            var output = [];
            for (var i = 0, l = value.length; i < l; ++i) {
                if (Object.prototype.hasOwnProperty.call(value, String(i))) {
                    output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
                } else {
                    output.push("");
                }
            }
            keys.forEach(function(key) {
                if (!key.match(/^\d+$/)) {
                    output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
                }
            });
            return output;
        }
        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
            var name, str;
            if (value.__lookupGetter__) {
                if (value.__lookupGetter__(key)) {
                    if (value.__lookupSetter__(key)) {
                        str = ctx.stylize("[Getter/Setter]", "special");
                    } else {
                        str = ctx.stylize("[Getter]", "special");
                    }
                } else {
                    if (value.__lookupSetter__(key)) {
                        str = ctx.stylize("[Setter]", "special");
                    }
                }
            }
            if (visibleKeys.indexOf(key) < 0) {
                name = "[" + key + "]";
            }
            if (!str) {
                if (ctx.seen.indexOf(value[key]) < 0) {
                    if (recurseTimes === null) {
                        str = formatValue(ctx, value[key], null);
                    } else {
                        str = formatValue(ctx, value[key], recurseTimes - 1);
                    }
                    if (str.indexOf("\n") > -1) {
                        if (array) {
                            str = str.split("\n").map(function(line) {
                                return "  " + line;
                            }).join("\n").substr(2);
                        } else {
                            str = "\n" + str.split("\n").map(function(line) {
                                return "   " + line;
                            }).join("\n");
                        }
                    }
                } else {
                    str = ctx.stylize("[Circular]", "special");
                }
            }
            if (typeof name === "undefined") {
                if (array && key.match(/^\d+$/)) {
                    return str;
                }
                name = JSON.stringify("" + key);
                if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                    name = name.substr(1, name.length - 2);
                    name = ctx.stylize(name, "name");
                } else {
                    name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                    name = ctx.stylize(name, "string");
                }
            }
            return name + ": " + str;
        }
        function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0;
            var length = output.reduce(function(prev, cur) {
                numLinesEst++;
                if (cur.indexOf("\n") >= 0) numLinesEst++;
                return prev + cur.length + 1;
            }, 0);
            if (length > 60) {
                return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
            }
            return braces[0] + base + " " + output.join(", ") + " " + braces[1];
        }
        function isArray(ar) {
            return Array.isArray(ar) || (typeof ar === "undefined" ? "undefined" : _typeof(ar)) === "object" && objectToString(ar) === "[object Array]";
        }
        function isRegExp(re) {
            return (typeof re === "undefined" ? "undefined" : _typeof(re)) === "object" && objectToString(re) === "[object RegExp]";
        }
        function isDate(d) {
            return (typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && objectToString(d) === "[object Date]";
        }
        function isError(e) {
            return (typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" && objectToString(e) === "[object Error]";
        }
        function objectToString(o) {
            return Object.prototype.toString.call(o);
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(61);
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
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
        /*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
        function exclude() {
            var excludes = [].slice.call(arguments);
            function excludeProps(res, obj) {
                Object.keys(obj).forEach(function(key) {
                    if (!~excludes.indexOf(key)) res[key] = obj[key];
                });
            }
            return function extendExclude() {
                var args = [].slice.call(arguments), i = 0, res = {};
                for (;i < args.length; i++) {
                    excludeProps(res, args[i]);
                }
                return res;
            };
        }
        /*!
 * Primary Exports
 */
        module.exports = AssertionError;
        /**
 * ### AssertionError
 *
 * An extension of the JavaScript `Error` constructor for
 * assertion and validation scenarios.
 *
 * @param {String} message
 * @param {Object} properties to include (optional)
 * @param {callee} start stack function (optional)
 */
        function AssertionError(message, _props, ssf) {
            var extend = exclude("name", "message", "stack", "constructor", "toJSON"), props = extend(_props || {});
            // default values
            this.message = message || "Unspecified AssertionError";
            this.showDiff = false;
            // copy from properties
            for (var key in props) {
                this[key] = props[key];
            }
            // capture stack trace
            ssf = ssf || arguments.callee;
            if (ssf && Error.captureStackTrace) {
                Error.captureStackTrace(this, ssf);
            } else {
                try {
                    throw new Error();
                } catch (e) {
                    this.stack = e.stack;
                }
            }
        }
        /*!
 * Inherit from Error.prototype
 */
        AssertionError.prototype = Object.create(Error.prototype);
        /*!
 * Statically set name
 */
        AssertionError.prototype.name = "AssertionError";
        /*!
 * Ensure correct constructor
 */
        AssertionError.prototype.constructor = AssertionError;
        /**
 * Allow errors to be converted to JSON for static transfer.
 *
 * @param {Boolean} include stack (default: `true`)
 * @return {Object} object that can be `JSON.stringify`
 */
        AssertionError.prototype.toJSON = function(stack) {
            var extend = exclude("constructor", "toJSON", "stack"), props = extend({
                name: this.name
            }, this);
            // include stack if exists and not turned off
            if (false !== stack && this.stack) {
                props.stack = this.stack;
            }
            return props;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /**
 * # getActual(object, [actual])
 *
 * Returns the `actual` value for an Assertion
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getActual
 */
        module.exports = function(obj, args) {
            return args.length > 4 ? args[4] : obj._obj;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - getName utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /**
 * # getName(func)
 *
 * Gets the name of a function, in a cross-browser way.
 *
 * @param {Function} a function (usually a constructor)
 * @namespace Utils
 * @name getName
 */
        module.exports = function(func) {
            if (func.name) return func.name;
            var match = /^\s?function ([^(]*)\(/.exec(func);
            return match && match[1] ? match[1] : "";
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - getPathInfo utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        var hasProperty = __webpack_require__(28);
        /**
 * ### .getPathInfo(path, object)
 *
 * This allows the retrieval of property info in an
 * object given a string path.
 *
 * The path info consists of an object with the
 * following properties:
 *
 * * parent - The parent object of the property referenced by `path`
 * * name - The name of the final property, a number if it was an array indexer
 * * value - The value of the property, if it exists, otherwise `undefined`
 * * exists - Whether the property exists or not
 *
 * @param {String} path
 * @param {Object} object
 * @returns {Object} info
 * @namespace Utils
 * @name getPathInfo
 * @api public
 */
        module.exports = function getPathInfo(path, obj) {
            var parsed = parsePath(path), last = parsed[parsed.length - 1];
            var info = {
                parent: parsed.length > 1 ? _getPathValue(parsed, obj, parsed.length - 1) : obj,
                name: last.p || last.i,
                value: _getPathValue(parsed, obj)
            };
            info.exists = hasProperty(info.name, info.parent);
            return info;
        };
        /*!
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `_getPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be as near infinitely deep and nested
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */
        function parsePath(path) {
            var str = path.replace(/([^\\])\[/g, "$1.["), parts = str.match(/(\\\.|[^.]+?)+/g);
            return parts.map(function(value) {
                var re = /^\[(\d+)\]$/, mArr = re.exec(value);
                if (mArr) return {
                    i: parseFloat(mArr[1])
                }; else return {
                    p: value.replace(/\\([.\[\]])/g, "$1")
                };
            });
        }
        /*!
 * ## _getPathValue(parsed, obj)
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(parsed, obj);
 *
 * @param {Object} parsed definition from `parsePath`.
 * @param {Object} object to search against
 * @param {Number} object to search against
 * @returns {Object|Undefined} value
 * @api private
 */
        function _getPathValue(parsed, obj, index) {
            var tmp = obj, res;
            index = index === undefined ? parsed.length : index;
            for (var i = 0, l = index; i < l; i++) {
                var part = parsed[i];
                if (tmp) {
                    if ("undefined" !== typeof part.p) tmp = tmp[part.p]; else if ("undefined" !== typeof part.i) tmp = tmp[part.i];
                    if (i == l - 1) res = tmp;
                } else {
                    res = undefined;
                }
            }
            return res;
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        /*!
 * Chai - hasProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        var type = __webpack_require__(17);
        /**
 * ### .hasProperty(object, name)
 *
 * This allows checking whether an object has
 * named property or numeric array index.
 *
 * Basically does the same thing as the `in`
 * operator but works properly with natives
 * and null/undefined values.
 *
 *     var obj = {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *
 * The following would be the results.
 *
 *     hasProperty('str', obj);  // true
 *     hasProperty('constructor', obj);  // true
 *     hasProperty('bar', obj);  // false
 *
 *     hasProperty('length', obj.str); // true
 *     hasProperty(1, obj.str);  // true
 *     hasProperty(5, obj.str);  // false
 *
 *     hasProperty('length', obj.arr);  // true
 *     hasProperty(2, obj.arr);  // true
 *     hasProperty(3, obj.arr);  // false
 *
 * @param {Objuect} object
 * @param {String|Number} name
 * @returns {Boolean} whether it exists
 * @namespace Utils
 * @name getPathInfo
 * @api public
 */
        var literals = {
            number: Number,
            string: String
        };
        module.exports = function hasProperty(name, obj) {
            var ot = type(obj);
            // Bad Object, obviously no props at all
            if (ot === "null" || ot === "undefined") return false;
            // The `in` operator does not work with certain literals
            // box these before the check
            if (literals[ot] && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object") obj = new literals[ot](obj);
            return name in obj;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /*!
 * Module dependancies
 */
        var inspect = __webpack_require__(16);
        var config = __webpack_require__(6);
        /**
 * ### .objDisplay (object)
 *
 * Determines if an object or an array matches
 * criteria to be inspected in-line for error
 * messages or should be truncated.
 *
 * @param {Mixed} javascript object to inspect
 * @name objDisplay
 * @namespace Utils
 * @api public
 */
        module.exports = function(obj) {
            var str = inspect(obj), type = Object.prototype.toString.call(obj);
            if (config.truncateThreshold && str.length >= config.truncateThreshold) {
                if (type === "[object Function]") {
                    return !obj.name || obj.name === "" ? "[Function]" : "[Function: " + obj.name + "]";
                } else if (type === "[object Array]") {
                    return "[ Array(" + obj.length + ") ]";
                } else if (type === "[object Object]") {
                    var keys = Object.keys(obj), kstr = keys.length > 2 ? keys.splice(0, 2).join(", ") + ", ..." : keys.join(", ");
                    return "{ Object (" + kstr + ") }";
                } else {
                    return str;
                }
            } else {
                return str;
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /**
 * ### transferFlags(assertion, object, includeAll = true)
 *
 * Transfer all the flags for `assertion` to `object`. If
 * `includeAll` is set to `false`, then the base Chai
 * assertion flags (namely `object`, `ssfi`, and `message`)
 * will not be transferred.
 *
 *
 *     var newAssertion = new Assertion();
 *     utils.transferFlags(assertion, newAssertion);
 *
 *     var anotherAsseriton = new Assertion(myObj);
 *     utils.transferFlags(assertion, anotherAssertion, false);
 *
 * @param {Assertion} assertion the assertion to transfer the flags from
 * @param {Object} object the object to transfer the flags to; usually a new assertion
 * @param {Boolean} includeAll
 * @namespace Utils
 * @name transferFlags
 * @api private
 */
        module.exports = function(assertion, object, includeAll) {
            var flags = assertion.__flags || (assertion.__flags = Object.create(null));
            if (!object.__flags) {
                object.__flags = Object.create(null);
            }
            includeAll = arguments.length === 3 ? includeAll : true;
            for (var flag in flags) {
                if (includeAll || flag !== "object" && flag !== "ssfi" && flag != "message") {
                    object.__flags[flag] = flags[flag];
                }
            }
        };
    }, , function(module, exports, __webpack_require__) {
        "use strict";
        var _chai = __webpack_require__(35);
        var _chai2 = _interopRequireDefault(_chai);
        var _mediaTag = __webpack_require__(15);
        var _mediaTag2 = _interopRequireDefault(_mediaTag);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        /* global document, describe, it */
        describe("Create different media tag contents: ", function() {
            it("can create a media-tag containing an image", function() {
                // Create container for media tag
                var mediaTagContainer = document.createElement("media-tag");
                mediaTagContainer.setAttribute("src", "image-without-extension");
                mediaTagContainer.setAttribute("data-type", "image/png");
                mediaTagContainer.setAttribute("data-attr-width", "300px");
                mediaTagContainer.setAttribute("data-attr-height", "200px");
                // Create contents based on the attributes
                (0, _mediaTag2.default)(mediaTagContainer);
                // Create the expected element
                var expectedResult = document.createElement("img");
                expectedResult.setAttribute("src", "image-without-extension");
                expectedResult.setAttribute("width", "300px");
                expectedResult.setAttribute("height", "200px");
                // Compare expected contents
                // Like this we avoid problems when browsers change the order
                // of the attributes
                _chai2.default.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), "media tag result element is like the expected element");
            });
            it("can create a media-tag containing an audio", function() {
                // Create container for media tag
                var mediaTagContainer = document.createElement("media-tag");
                mediaTagContainer.setAttribute("src", "alterway.mp3");
                mediaTagContainer.setAttribute("data-type", "audio/mp3");
                mediaTagContainer.setAttribute("data-attr-controls", "controls");
                // Create contents based on the attributes
                (0, _mediaTag2.default)(mediaTagContainer);
                // Create the expected element
                var expectedResult = document.createElement("audio");
                expectedResult.setAttribute("src", "alterway.mp3");
                expectedResult.setAttribute("controls", "controls");
                // Compare expected contents
                // Like this we avoid problems when browsers change the order
                // of the attributes
                _chai2.default.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), "media tag result element is like the expected element");
            });
            it("can create a media-tag containing a video", function() {
                // Create container for media tag
                var mediaTagContainer = document.createElement("media-tag");
                mediaTagContainer.setAttribute("src", "cube.mp4");
                mediaTagContainer.setAttribute("data-type", "video/mp4");
                mediaTagContainer.setAttribute("data-attr-width", "300px");
                mediaTagContainer.setAttribute("data-attr-height", "200px");
                // Create contents based on the attributes
                (0, _mediaTag2.default)(mediaTagContainer);
                // Create the expected element
                var expectedResult = document.createElement("video");
                expectedResult.setAttribute("src", "cube.mp4");
                expectedResult.setAttribute("width", "300px");
                expectedResult.setAttribute("height", "200px");
                // Compare expected contents
                // Like this we avoid problems when browsers change the order
                // of the attributes
                _chai2.default.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), "media tag result element is like the expected element");
            });
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.byteLength = byteLength;
        exports.toByteArray = toByteArray;
        exports.fromByteArray = fromByteArray;
        var lookup = [];
        var revLookup = [];
        var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
        var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (var i = 0, len = code.length; i < len; ++i) {
            lookup[i] = code[i];
            revLookup[code.charCodeAt(i)] = i;
        }
        revLookup["-".charCodeAt(0)] = 62;
        revLookup["_".charCodeAt(0)] = 63;
        function placeHoldersCount(b64) {
            var len = b64.length;
            if (len % 4 > 0) {
                throw new Error("Invalid string. Length must be a multiple of 4");
            }
            // the number of equal signs (place holders)
            // if there are two placeholders, than the two characters before it
            // represent one byte
            // if there is only one, then the three characters before it represent 2 bytes
            // this is just a cheap hack to not do indexOf twice
            return b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
        }
        function byteLength(b64) {
            // base64 is 4/3 + up to two characters of the original data
            return b64.length * 3 / 4 - placeHoldersCount(b64);
        }
        function toByteArray(b64) {
            var i, j, l, tmp, placeHolders, arr;
            var len = b64.length;
            placeHolders = placeHoldersCount(b64);
            arr = new Arr(len * 3 / 4 - placeHolders);
            // if there are placeholders, only get up to the last complete 4 chars
            l = placeHolders > 0 ? len - 4 : len;
            var L = 0;
            for (i = 0, j = 0; i < l; i += 4, j += 3) {
                tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                arr[L++] = tmp >> 16 & 255;
                arr[L++] = tmp >> 8 & 255;
                arr[L++] = tmp & 255;
            }
            if (placeHolders === 2) {
                tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                arr[L++] = tmp & 255;
            } else if (placeHolders === 1) {
                tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                arr[L++] = tmp >> 8 & 255;
                arr[L++] = tmp & 255;
            }
            return arr;
        }
        function tripletToBase64(num) {
            return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
        }
        function encodeChunk(uint8, start, end) {
            var tmp;
            var output = [];
            for (var i = start; i < end; i += 3) {
                tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
                output.push(tripletToBase64(tmp));
            }
            return output.join("");
        }
        function fromByteArray(uint8) {
            var tmp;
            var len = uint8.length;
            var extraBytes = len % 3;
            // if we have 1 byte left, pad 2 bytes
            var output = "";
            var parts = [];
            var maxChunkLength = 16383;
            // must be multiple of 3
            // go through the array every three bytes, we'll deal with trailing stuff later
            for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
            }
            // pad the end with zeros, but make sure to not forget the extra bytes
            if (extraBytes === 1) {
                tmp = uint8[len - 1];
                output += lookup[tmp >> 2];
                output += lookup[tmp << 4 & 63];
                output += "==";
            } else if (extraBytes === 2) {
                tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                output += lookup[tmp >> 10];
                output += lookup[tmp >> 4 & 63];
                output += lookup[tmp << 2 & 63];
                output += "=";
            }
            parts.push(output);
            return parts.join("");
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(global) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
            /* eslint-disable no-proto */
            var base64 = __webpack_require__(33);
            var ieee754 = __webpack_require__(59);
            var isArray = __webpack_require__(60);
            exports.Buffer = Buffer;
            exports.SlowBuffer = SlowBuffer;
            exports.INSPECT_MAX_BYTES = 50;
            /**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
            Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
            /*
 * Export kMaxLength after typed array support is determined.
 */
            exports.kMaxLength = kMaxLength();
            function typedArraySupport() {
                try {
                    var arr = new Uint8Array(1);
                    arr.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function foo() {
                            return 42;
                        }
                    };
                    // typed array instances can be augmented
                    // chrome 9-10 lack `subarray`
                    return arr.foo() === 42 && typeof arr.subarray === "function" && arr.subarray(1, 1).byteLength === 0;
                } catch (e) {
                    return false;
                }
            }
            function kMaxLength() {
                return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function createBuffer(that, length) {
                if (kMaxLength() < length) {
                    throw new RangeError("Invalid typed array length");
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    // Return an augmented `Uint8Array` instance, for best performance
                    that = new Uint8Array(length);
                    that.__proto__ = Buffer.prototype;
                } else {
                    // Fallback: Return an object instance of the Buffer class
                    if (that === null) {
                        that = new Buffer(length);
                    }
                    that.length = length;
                }
                return that;
            }
            /**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */
            function Buffer(arg, encodingOrOffset, length) {
                if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
                    return new Buffer(arg, encodingOrOffset, length);
                }
                // Common case.
                if (typeof arg === "number") {
                    if (typeof encodingOrOffset === "string") {
                        throw new Error("If encoding is specified then the first argument must be a string");
                    }
                    return allocUnsafe(this, arg);
                }
                return from(this, arg, encodingOrOffset, length);
            }
            Buffer.poolSize = 8192;
            // not used by this implementation
            // TODO: Legacy, not needed anymore. Remove in next major version.
            Buffer._augment = function(arr) {
                arr.__proto__ = Buffer.prototype;
                return arr;
            };
            function from(that, value, encodingOrOffset, length) {
                if (typeof value === "number") {
                    throw new TypeError('"value" argument must not be a number');
                }
                if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
                    return fromArrayBuffer(that, value, encodingOrOffset, length);
                }
                if (typeof value === "string") {
                    return fromString(that, value, encodingOrOffset);
                }
                return fromObject(that, value);
            }
            /**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
            Buffer.from = function(value, encodingOrOffset, length) {
                return from(null, value, encodingOrOffset, length);
            };
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                Buffer.prototype.__proto__ = Uint8Array.prototype;
                Buffer.__proto__ = Uint8Array;
                if (typeof Symbol !== "undefined" && Symbol.species && Buffer[Symbol.species] === Buffer) {
                    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
                    Object.defineProperty(Buffer, Symbol.species, {
                        value: null,
                        configurable: true
                    });
                }
            }
            function assertSize(size) {
                if (typeof size !== "number") {
                    throw new TypeError('"size" argument must be a number');
                } else if (size < 0) {
                    throw new RangeError('"size" argument must not be negative');
                }
            }
            function alloc(that, size, fill, encoding) {
                assertSize(size);
                if (size <= 0) {
                    return createBuffer(that, size);
                }
                if (fill !== undefined) {
                    // Only pay attention to encoding if it's a string. This
                    // prevents accidentally sending in a number that would
                    // be interpretted as a start offset.
                    return typeof encoding === "string" ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
                }
                return createBuffer(that, size);
            }
            /**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
            Buffer.alloc = function(size, fill, encoding) {
                return alloc(null, size, fill, encoding);
            };
            function allocUnsafe(that, size) {
                assertSize(size);
                that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                    for (var i = 0; i < size; ++i) {
                        that[i] = 0;
                    }
                }
                return that;
            }
            /**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
            Buffer.allocUnsafe = function(size) {
                return allocUnsafe(null, size);
            };
            /**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
            Buffer.allocUnsafeSlow = function(size) {
                return allocUnsafe(null, size);
            };
            function fromString(that, string, encoding) {
                if (typeof encoding !== "string" || encoding === "") {
                    encoding = "utf8";
                }
                if (!Buffer.isEncoding(encoding)) {
                    throw new TypeError('"encoding" must be a valid string encoding');
                }
                var length = byteLength(string, encoding) | 0;
                that = createBuffer(that, length);
                var actual = that.write(string, encoding);
                if (actual !== length) {
                    // Writing a hex string, for example, that contains invalid characters will
                    // cause everything after the first invalid character to be ignored. (e.g.
                    // 'abxxcd' will be treated as 'ab')
                    that = that.slice(0, actual);
                }
                return that;
            }
            function fromArrayLike(that, array) {
                var length = array.length < 0 ? 0 : checked(array.length) | 0;
                that = createBuffer(that, length);
                for (var i = 0; i < length; i += 1) {
                    that[i] = array[i] & 255;
                }
                return that;
            }
            function fromArrayBuffer(that, array, byteOffset, length) {
                array.byteLength;
                // this throws if `array` is not a valid ArrayBuffer
                if (byteOffset < 0 || array.byteLength < byteOffset) {
                    throw new RangeError("'offset' is out of bounds");
                }
                if (array.byteLength < byteOffset + (length || 0)) {
                    throw new RangeError("'length' is out of bounds");
                }
                if (byteOffset === undefined && length === undefined) {
                    array = new Uint8Array(array);
                } else if (length === undefined) {
                    array = new Uint8Array(array, byteOffset);
                } else {
                    array = new Uint8Array(array, byteOffset, length);
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    // Return an augmented `Uint8Array` instance, for best performance
                    that = array;
                    that.__proto__ = Buffer.prototype;
                } else {
                    // Fallback: Return an object instance of the Buffer class
                    that = fromArrayLike(that, array);
                }
                return that;
            }
            function fromObject(that, obj) {
                if (Buffer.isBuffer(obj)) {
                    var len = checked(obj.length) | 0;
                    that = createBuffer(that, len);
                    if (that.length === 0) {
                        return that;
                    }
                    obj.copy(that, 0, 0, len);
                    return that;
                }
                if (obj) {
                    if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
                        if (typeof obj.length !== "number" || isnan(obj.length)) {
                            return createBuffer(that, 0);
                        }
                        return fromArrayLike(that, obj);
                    }
                    if (obj.type === "Buffer" && isArray(obj.data)) {
                        return fromArrayLike(that, obj.data);
                    }
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }
            function checked(length) {
                // Note: cannot use `length < kMaxLength()` here because that fails when
                // length is NaN (which is otherwise coerced to zero.)
                if (length >= kMaxLength()) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + kMaxLength().toString(16) + " bytes");
                }
                return length | 0;
            }
            function SlowBuffer(length) {
                if (+length != length) {
                    // eslint-disable-line eqeqeq
                    length = 0;
                }
                return Buffer.alloc(+length);
            }
            Buffer.isBuffer = function isBuffer(b) {
                return !!(b != null && b._isBuffer);
            };
            Buffer.compare = function compare(a, b) {
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                    throw new TypeError("Arguments must be Buffers");
                }
                if (a === b) return 0;
                var x = a.length;
                var y = b.length;
                for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                    if (a[i] !== b[i]) {
                        x = a[i];
                        y = b[i];
                        break;
                    }
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(encoding) {
                switch (String(encoding).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return true;

                  default:
                    return false;
                }
            };
            Buffer.concat = function concat(list, length) {
                if (!isArray(list)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (list.length === 0) {
                    return Buffer.alloc(0);
                }
                var i;
                if (length === undefined) {
                    length = 0;
                    for (i = 0; i < list.length; ++i) {
                        length += list[i].length;
                    }
                }
                var buffer = Buffer.allocUnsafe(length);
                var pos = 0;
                for (i = 0; i < list.length; ++i) {
                    var buf = list[i];
                    if (!Buffer.isBuffer(buf)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    buf.copy(buffer, pos);
                    pos += buf.length;
                }
                return buffer;
            };
            function byteLength(string, encoding) {
                if (Buffer.isBuffer(string)) {
                    return string.length;
                }
                if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
                    return string.byteLength;
                }
                if (typeof string !== "string") {
                    string = "" + string;
                }
                var len = string.length;
                if (len === 0) return 0;
                // Use a for loop to avoid recursion
                var loweredCase = false;
                for (;;) {
                    switch (encoding) {
                      case "ascii":
                      case "latin1":
                      case "binary":
                        return len;

                      case "utf8":
                      case "utf-8":
                      case undefined:
                        return utf8ToBytes(string).length;

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return len * 2;

                      case "hex":
                        return len >>> 1;

                      case "base64":
                        return base64ToBytes(string).length;

                      default:
                        if (loweredCase) return utf8ToBytes(string).length;
                        // assume utf8
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(encoding, start, end) {
                var loweredCase = false;
                // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
                // property of a typed array.
                // This behaves neither like String nor Uint8Array in that we set start/end
                // to their upper/lower bounds if the value passed is out of range.
                // undefined is handled specially as per ECMA-262 6th Edition,
                // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
                if (start === undefined || start < 0) {
                    start = 0;
                }
                // Return early if start > this.length. Done here to prevent potential uint32
                // coercion fail below.
                if (start > this.length) {
                    return "";
                }
                if (end === undefined || end > this.length) {
                    end = this.length;
                }
                if (end <= 0) {
                    return "";
                }
                // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
                end >>>= 0;
                start >>>= 0;
                if (end <= start) {
                    return "";
                }
                if (!encoding) encoding = "utf8";
                while (true) {
                    switch (encoding) {
                      case "hex":
                        return hexSlice(this, start, end);

                      case "utf8":
                      case "utf-8":
                        return utf8Slice(this, start, end);

                      case "ascii":
                        return asciiSlice(this, start, end);

                      case "latin1":
                      case "binary":
                        return latin1Slice(this, start, end);

                      case "base64":
                        return base64Slice(this, start, end);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return utf16leSlice(this, start, end);

                      default:
                        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                        encoding = (encoding + "").toLowerCase();
                        loweredCase = true;
                    }
                }
            }
            // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
            // Buffer instances.
            Buffer.prototype._isBuffer = true;
            function swap(b, n, m) {
                var i = b[n];
                b[n] = b[m];
                b[m] = i;
            }
            Buffer.prototype.swap16 = function swap16() {
                var len = this.length;
                if (len % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for (var i = 0; i < len; i += 2) {
                    swap(this, i, i + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var len = this.length;
                if (len % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for (var i = 0; i < len; i += 4) {
                    swap(this, i, i + 3);
                    swap(this, i + 1, i + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var len = this.length;
                if (len % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for (var i = 0; i < len; i += 8) {
                    swap(this, i, i + 7);
                    swap(this, i + 1, i + 6);
                    swap(this, i + 2, i + 5);
                    swap(this, i + 3, i + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var length = this.length | 0;
                if (length === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, length);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.equals = function equals(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                if (this === b) return true;
                return Buffer.compare(this, b) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var str = "";
                var max = exports.INSPECT_MAX_BYTES;
                if (this.length > 0) {
                    str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
                    if (this.length > max) str += " ... ";
                }
                return "<Buffer " + str + ">";
            };
            Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                if (!Buffer.isBuffer(target)) {
                    throw new TypeError("Argument must be a Buffer");
                }
                if (start === undefined) {
                    start = 0;
                }
                if (end === undefined) {
                    end = target ? target.length : 0;
                }
                if (thisStart === undefined) {
                    thisStart = 0;
                }
                if (thisEnd === undefined) {
                    thisEnd = this.length;
                }
                if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                    throw new RangeError("out of range index");
                }
                if (thisStart >= thisEnd && start >= end) {
                    return 0;
                }
                if (thisStart >= thisEnd) {
                    return -1;
                }
                if (start >= end) {
                    return 1;
                }
                start >>>= 0;
                end >>>= 0;
                thisStart >>>= 0;
                thisEnd >>>= 0;
                if (this === target) return 0;
                var x = thisEnd - thisStart;
                var y = end - start;
                var len = Math.min(x, y);
                var thisCopy = this.slice(thisStart, thisEnd);
                var targetCopy = target.slice(start, end);
                for (var i = 0; i < len; ++i) {
                    if (thisCopy[i] !== targetCopy[i]) {
                        x = thisCopy[i];
                        y = targetCopy[i];
                        break;
                    }
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
            // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
            // Arguments:
            // - buffer - a Buffer to search
            // - val - a string, Buffer, or number
            // - byteOffset - an index into `buffer`; will be clamped to an int32
            // - encoding - an optional encoding, relevant is val is a string
            // - dir - true for indexOf, false for lastIndexOf
            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                // Empty buffer means no match
                if (buffer.length === 0) return -1;
                // Normalize byteOffset
                if (typeof byteOffset === "string") {
                    encoding = byteOffset;
                    byteOffset = 0;
                } else if (byteOffset > 2147483647) {
                    byteOffset = 2147483647;
                } else if (byteOffset < -2147483648) {
                    byteOffset = -2147483648;
                }
                byteOffset = +byteOffset;
                // Coerce to Number.
                if (isNaN(byteOffset)) {
                    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
                    byteOffset = dir ? 0 : buffer.length - 1;
                }
                // Normalize byteOffset: negative offsets start from the end of the buffer
                if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                if (byteOffset >= buffer.length) {
                    if (dir) return -1; else byteOffset = buffer.length - 1;
                } else if (byteOffset < 0) {
                    if (dir) byteOffset = 0; else return -1;
                }
                // Normalize val
                if (typeof val === "string") {
                    val = Buffer.from(val, encoding);
                }
                // Finally, search either indexOf (if dir is true) or lastIndexOf
                if (Buffer.isBuffer(val)) {
                    // Special case: looking for empty string/buffer always fails
                    if (val.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                } else if (typeof val === "number") {
                    val = val & 255;
                    // Search for a byte value [0-255]
                    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
                        if (dir) {
                            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                        }
                    }
                    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                var indexSize = 1;
                var arrLength = arr.length;
                var valLength = val.length;
                if (encoding !== undefined) {
                    encoding = String(encoding).toLowerCase();
                    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                        if (arr.length < 2 || val.length < 2) {
                            return -1;
                        }
                        indexSize = 2;
                        arrLength /= 2;
                        valLength /= 2;
                        byteOffset /= 2;
                    }
                }
                function read(buf, i) {
                    if (indexSize === 1) {
                        return buf[i];
                    } else {
                        return buf.readUInt16BE(i * indexSize);
                    }
                }
                var i;
                if (dir) {
                    var foundIndex = -1;
                    for (i = byteOffset; i < arrLength; i++) {
                        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                            if (foundIndex === -1) foundIndex = i;
                            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                        } else {
                            if (foundIndex !== -1) i -= i - foundIndex;
                            foundIndex = -1;
                        }
                    }
                } else {
                    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                    for (i = byteOffset; i >= 0; i--) {
                        var found = true;
                        for (var j = 0; j < valLength; j++) {
                            if (read(arr, i + j) !== read(val, j)) {
                                found = false;
                                break;
                            }
                        }
                        if (found) return i;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
            };
            function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                var remaining = buf.length - offset;
                if (!length) {
                    length = remaining;
                } else {
                    length = Number(length);
                    if (length > remaining) {
                        length = remaining;
                    }
                }
                // must be an even number of digits
                var strLen = string.length;
                if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
                if (length > strLen / 2) {
                    length = strLen / 2;
                }
                for (var i = 0; i < length; ++i) {
                    var parsed = parseInt(string.substr(i * 2, 2), 16);
                    if (isNaN(parsed)) return i;
                    buf[offset + i] = parsed;
                }
                return i;
            }
            function utf8Write(buf, string, offset, length) {
                return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
            }
            function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length);
            }
            function latin1Write(buf, string, offset, length) {
                return asciiWrite(buf, string, offset, length);
            }
            function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length);
            }
            function ucs2Write(buf, string, offset, length) {
                return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
            }
            Buffer.prototype.write = function write(string, offset, length, encoding) {
                // Buffer#write(string)
                if (offset === undefined) {
                    encoding = "utf8";
                    length = this.length;
                    offset = 0;
                } else if (length === undefined && typeof offset === "string") {
                    encoding = offset;
                    length = this.length;
                    offset = 0;
                } else if (isFinite(offset)) {
                    offset = offset | 0;
                    if (isFinite(length)) {
                        length = length | 0;
                        if (encoding === undefined) encoding = "utf8";
                    } else {
                        encoding = length;
                        length = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var remaining = this.length - offset;
                if (length === undefined || length > remaining) length = remaining;
                if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!encoding) encoding = "utf8";
                var loweredCase = false;
                for (;;) {
                    switch (encoding) {
                      case "hex":
                        return hexWrite(this, string, offset, length);

                      case "utf8":
                      case "utf-8":
                        return utf8Write(this, string, offset, length);

                      case "ascii":
                        return asciiWrite(this, string, offset, length);

                      case "latin1":
                      case "binary":
                        return latin1Write(this, string, offset, length);

                      case "base64":
                        // Warning: maxLength not taken into account in base64Write
                        return base64Write(this, string, offset, length);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return ucs2Write(this, string, offset, length);

                      default:
                        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) {
                    return base64.fromByteArray(buf);
                } else {
                    return base64.fromByteArray(buf.slice(start, end));
                }
            }
            function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                var res = [];
                var i = start;
                while (i < end) {
                    var firstByte = buf[i];
                    var codePoint = null;
                    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                        var secondByte, thirdByte, fourthByte, tempCodePoint;
                        switch (bytesPerSequence) {
                          case 1:
                            if (firstByte < 128) {
                                codePoint = firstByte;
                            }
                            break;

                          case 2:
                            secondByte = buf[i + 1];
                            if ((secondByte & 192) === 128) {
                                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                                if (tempCodePoint > 127) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break;

                          case 3:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break;

                          case 4:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            fourthByte = buf[i + 3];
                            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                                    codePoint = tempCodePoint;
                                }
                            }
                        }
                    }
                    if (codePoint === null) {
                        // we did not generate a valid codePoint so insert a
                        // replacement char (U+FFFD) and advance only 1 byte
                        codePoint = 65533;
                        bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                        // encode to utf16 (surrogate pair dance)
                        codePoint -= 65536;
                        res.push(codePoint >>> 10 & 1023 | 55296);
                        codePoint = 56320 | codePoint & 1023;
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
            }
            // Based on http://stackoverflow.com/a/22747272/680742, the browser with
            // the lowest limit is Chrome, with 0x10000 args.
            // We go 1 magnitude less, for safety
            var MAX_ARGUMENTS_LENGTH = 4096;
            function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) {
                    return String.fromCharCode.apply(String, codePoints);
                }
                // Decode in chunks to avoid "call stack size exceeded".
                var res = "";
                var i = 0;
                while (i < len) {
                    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                }
                return res;
            }
            function asciiSlice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i] & 127);
                }
                return ret;
            }
            function latin1Slice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i]);
                }
                return ret;
            }
            function hexSlice(buf, start, end) {
                var len = buf.length;
                if (!start || start < 0) start = 0;
                if (!end || end < 0 || end > len) end = len;
                var out = "";
                for (var i = start; i < end; ++i) {
                    out += toHex(buf[i]);
                }
                return out;
            }
            function utf16leSlice(buf, start, end) {
                var bytes = buf.slice(start, end);
                var res = "";
                for (var i = 0; i < bytes.length; i += 2) {
                    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                }
                return res;
            }
            Buffer.prototype.slice = function slice(start, end) {
                var len = this.length;
                start = ~~start;
                end = end === undefined ? len : ~~end;
                if (start < 0) {
                    start += len;
                    if (start < 0) start = 0;
                } else if (start > len) {
                    start = len;
                }
                if (end < 0) {
                    end += len;
                    if (end < 0) end = 0;
                } else if (end > len) {
                    end = len;
                }
                if (end < start) end = start;
                var newBuf;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    newBuf = this.subarray(start, end);
                    newBuf.__proto__ = Buffer.prototype;
                } else {
                    var sliceLen = end - start;
                    newBuf = new Buffer(sliceLen, undefined);
                    for (var i = 0; i < sliceLen; ++i) {
                        newBuf[i] = this[i + start];
                    }
                }
                return newBuf;
            };
            /*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
            function checkOffset(offset, ext, length) {
                if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
                if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) {
                    val += this[offset + i] * mul;
                }
                return val;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                    checkOffset(offset, byteLength, this.length);
                }
                var val = this[offset + --byteLength];
                var mul = 1;
                while (byteLength > 0 && (mul *= 256)) {
                    val += this[offset + --byteLength] * mul;
                }
                return val;
            };
            Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 1, this.length);
                return this[offset];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] | this[offset + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] << 8 | this[offset + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) {
                    val += this[offset + i] * mul;
                }
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var i = byteLength;
                var mul = 1;
                var val = this[offset + --i];
                while (i > 0 && (mul *= 256)) {
                    val += this[offset + --i] * mul;
                }
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 1, this.length);
                if (!(this[offset] & 128)) return this[offset];
                return (255 - this[offset] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset] | this[offset + 1] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset + 1] | this[offset] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, false, 52, 8);
            };
            function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var mul = 1;
                var i = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var i = byteLength - 1;
                var mul = 1;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                this[offset] = value & 255;
                return offset + 1;
            };
            function objectWriteUInt16(buf, value, offset, littleEndian) {
                if (value < 0) value = 65535 + value + 1;
                for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
                    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
                }
            }
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                } else {
                    objectWriteUInt16(this, value, offset, true);
                }
                return offset + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 8;
                    this[offset + 1] = value & 255;
                } else {
                    objectWriteUInt16(this, value, offset, false);
                }
                return offset + 2;
            };
            function objectWriteUInt32(buf, value, offset, littleEndian) {
                if (value < 0) value = 4294967295 + value + 1;
                for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
                    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
                }
            }
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset + 3] = value >>> 24;
                    this[offset + 2] = value >>> 16;
                    this[offset + 1] = value >>> 8;
                    this[offset] = value & 255;
                } else {
                    objectWriteUInt32(this, value, offset, true);
                }
                return offset + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = value & 255;
                } else {
                    objectWriteUInt32(this, value, offset, false);
                }
                return offset + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = 0;
                var mul = 1;
                var sub = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                        sub = 1;
                    }
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = byteLength - 1;
                var mul = 1;
                var sub = 0;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                        sub = 1;
                    }
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                if (value < 0) value = 255 + value + 1;
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                } else {
                    objectWriteUInt16(this, value, offset, true);
                }
                return offset + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 8;
                    this[offset + 1] = value & 255;
                } else {
                    objectWriteUInt16(this, value, offset, false);
                }
                return offset + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                    this[offset + 2] = value >>> 16;
                    this[offset + 3] = value >>> 24;
                } else {
                    objectWriteUInt32(this, value, offset, true);
                }
                return offset + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (value < 0) value = 4294967295 + value + 1;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = value & 255;
                } else {
                    objectWriteUInt32(this, value, offset, false);
                }
                return offset + 4;
            };
            function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
                if (offset < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e38, -3.4028234663852886e38);
                }
                ieee754.write(buf, value, offset, littleEndian, 23, 4);
                return offset + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                return writeFloat(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                return writeFloat(this, value, offset, false, noAssert);
            };
            function writeDouble(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 8, 1.7976931348623157e308, -1.7976931348623157e308);
                }
                ieee754.write(buf, value, offset, littleEndian, 52, 8);
                return offset + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                return writeDouble(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                return writeDouble(this, value, offset, false, noAssert);
            };
            // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (targetStart >= target.length) targetStart = target.length;
                if (!targetStart) targetStart = 0;
                if (end > 0 && end < start) end = start;
                // Copy 0 bytes; we're done
                if (end === start) return 0;
                if (target.length === 0 || this.length === 0) return 0;
                // Fatal error conditions
                if (targetStart < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
                if (end < 0) throw new RangeError("sourceEnd out of bounds");
                // Are we oob?
                if (end > this.length) end = this.length;
                if (target.length - targetStart < end - start) {
                    end = target.length - targetStart + start;
                }
                var len = end - start;
                var i;
                if (this === target && start < targetStart && targetStart < end) {
                    // descending copy from end
                    for (i = len - 1; i >= 0; --i) {
                        target[i + targetStart] = this[i + start];
                    }
                } else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) {
                    // ascending copy from start
                    for (i = 0; i < len; ++i) {
                        target[i + targetStart] = this[i + start];
                    }
                } else {
                    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
                }
                return len;
            };
            // Usage:
            //    buffer.fill(number[, offset[, end]])
            //    buffer.fill(buffer[, offset[, end]])
            //    buffer.fill(string[, offset[, end]][, encoding])
            Buffer.prototype.fill = function fill(val, start, end, encoding) {
                // Handle string cases:
                if (typeof val === "string") {
                    if (typeof start === "string") {
                        encoding = start;
                        start = 0;
                        end = this.length;
                    } else if (typeof end === "string") {
                        encoding = end;
                        end = this.length;
                    }
                    if (val.length === 1) {
                        var code = val.charCodeAt(0);
                        if (code < 256) {
                            val = code;
                        }
                    }
                    if (encoding !== undefined && typeof encoding !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
                        throw new TypeError("Unknown encoding: " + encoding);
                    }
                } else if (typeof val === "number") {
                    val = val & 255;
                }
                // Invalid ranges are not set to a default, so can range check early.
                if (start < 0 || this.length < start || this.length < end) {
                    throw new RangeError("Out of range index");
                }
                if (end <= start) {
                    return this;
                }
                start = start >>> 0;
                end = end === undefined ? this.length : end >>> 0;
                if (!val) val = 0;
                var i;
                if (typeof val === "number") {
                    for (i = start; i < end; ++i) {
                        this[i] = val;
                    }
                } else {
                    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
                    var len = bytes.length;
                    for (i = 0; i < end - start; ++i) {
                        this[i + start] = bytes[i % len];
                    }
                }
                return this;
            };
            // HELPER FUNCTIONS
            var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
            function base64clean(str) {
                // Node strips out invalid characters like \n and \t from the string, base64-js does not
                str = stringtrim(str).replace(INVALID_BASE64_RE, "");
                // Node converts strings with length < 2 to ''
                if (str.length < 2) return "";
                // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
                while (str.length % 4 !== 0) {
                    str = str + "=";
                }
                return str;
            }
            function stringtrim(str) {
                if (str.trim) return str.trim();
                return str.replace(/^\s+|\s+$/g, "");
            }
            function toHex(n) {
                if (n < 16) return "0" + n.toString(16);
                return n.toString(16);
            }
            function utf8ToBytes(string, units) {
                units = units || Infinity;
                var codePoint;
                var length = string.length;
                var leadSurrogate = null;
                var bytes = [];
                for (var i = 0; i < length; ++i) {
                    codePoint = string.charCodeAt(i);
                    // is surrogate component
                    if (codePoint > 55295 && codePoint < 57344) {
                        // last char was a lead
                        if (!leadSurrogate) {
                            // no lead yet
                            if (codePoint > 56319) {
                                // unexpected trail
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            } else if (i + 1 === length) {
                                // unpaired lead
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            }
                            // valid lead
                            leadSurrogate = codePoint;
                            continue;
                        }
                        // 2 leads in a row
                        if (codePoint < 56320) {
                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                            leadSurrogate = codePoint;
                            continue;
                        }
                        // valid surrogate pair
                        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                    } else if (leadSurrogate) {
                        // valid bmp char, but last char was a lead
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    }
                    leadSurrogate = null;
                    // encode utf8
                    if (codePoint < 128) {
                        if ((units -= 1) < 0) break;
                        bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                        if ((units -= 2) < 0) break;
                        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                    } else if (codePoint < 65536) {
                        if ((units -= 3) < 0) break;
                        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else if (codePoint < 1114112) {
                        if ((units -= 4) < 0) break;
                        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return bytes;
            }
            function asciiToBytes(str) {
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                    // Node's code seems to be doing this and not & 0x7F..
                    byteArray.push(str.charCodeAt(i) & 255);
                }
                return byteArray;
            }
            function utf16leToBytes(str, units) {
                var c, hi, lo;
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                    if ((units -= 2) < 0) break;
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                }
                return byteArray;
            }
            function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
            }
            function blitBuffer(src, dst, offset, length) {
                for (var i = 0; i < length; ++i) {
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                }
                return i;
            }
            function isnan(val) {
                return val !== val;
            }
        }).call(exports, __webpack_require__(62));
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(36);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        var used = [], _exports = module.exports = {};
        /*!
 * Chai version
 */
        _exports.version = "3.5.0";
        /*!
 * Assertion Error
 */
        _exports.AssertionError = __webpack_require__(24);
        /*!
 * Utils for plugins (not exported)
 */
        var util = __webpack_require__(50);
        /**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai
 *
 * @param {Function}
 * @returns {this} for chaining
 * @api public
 */
        _exports.use = function(fn) {
            if (!~used.indexOf(fn)) {
                fn(this, util);
                used.push(fn);
            }
            return this;
        };
        /*!
 * Utility Functions
 */
        _exports.util = util;
        /*!
 * Configuration
 */
        var config = __webpack_require__(6);
        _exports.config = config;
        /*!
 * Primary `Assertion` prototype
 */
        var assertion = __webpack_require__(37);
        _exports.use(assertion);
        /*!
 * Core Assertions
 */
        var core = __webpack_require__(38);
        _exports.use(core);
        /*!
 * Expect interface
 */
        var expect = __webpack_require__(40);
        _exports.use(expect);
        /*!
 * Should interface
 */
        var should = __webpack_require__(41);
        _exports.use(should);
        /*!
 * Assert interface
 */
        var assert = __webpack_require__(39);
        _exports.use(assert);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        var config = __webpack_require__(6);
        module.exports = function(_chai, util) {
            /*!
   * Module dependencies.
   */
            var AssertionError = _chai.AssertionError, flag = util.flag;
            /*!
   * Module export.
   */
            _chai.Assertion = Assertion;
            /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * @api private
   */
            function Assertion(obj, msg, stack) {
                flag(this, "ssfi", stack || arguments.callee);
                flag(this, "object", obj);
                flag(this, "message", msg);
            }
            Object.defineProperty(Assertion, "includeStack", {
                get: function get() {
                    console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
                    return config.includeStack;
                },
                set: function set(value) {
                    console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
                    config.includeStack = value;
                }
            });
            Object.defineProperty(Assertion, "showDiff", {
                get: function get() {
                    console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
                    return config.showDiff;
                },
                set: function set(value) {
                    console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
                    config.showDiff = value;
                }
            });
            Assertion.addProperty = function(name, fn) {
                util.addProperty(this.prototype, name, fn);
            };
            Assertion.addMethod = function(name, fn) {
                util.addMethod(this.prototype, name, fn);
            };
            Assertion.addChainableMethod = function(name, fn, chainingBehavior) {
                util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
            };
            Assertion.overwriteProperty = function(name, fn) {
                util.overwriteProperty(this.prototype, name, fn);
            };
            Assertion.overwriteMethod = function(name, fn) {
                util.overwriteMethod(this.prototype, name, fn);
            };
            Assertion.overwriteChainableMethod = function(name, fn, chainingBehavior) {
                util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
            };
            /**
   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
   *
   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
   *
   * @name assert
   * @param {Philosophical} expression to be tested
   * @param {String|Function} message or function that returns message to display if expression fails
   * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
   * @param {Mixed} expected value (remember to check for negation)
   * @param {Mixed} actual (optional) will default to `this.obj`
   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
   * @api private
   */
            Assertion.prototype.assert = function(expr, msg, negateMsg, expected, _actual, showDiff) {
                var ok = util.test(this, arguments);
                if (true !== showDiff) showDiff = false;
                if (true !== config.showDiff) showDiff = false;
                if (!ok) {
                    var msg = util.getMessage(this, arguments), actual = util.getActual(this, arguments);
                    throw new AssertionError(msg, {
                        actual: actual,
                        expected: expected,
                        showDiff: showDiff
                    }, config.includeStack ? this.assert : flag(this, "ssfi"));
                }
            };
            /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
            Object.defineProperty(Assertion.prototype, "_obj", {
                get: function get() {
                    return flag(this, "object");
                },
                set: function set(val) {
                    flag(this, "object", val);
                }
            });
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        /*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        module.exports = function(chai, _) {
            var Assertion = chai.Assertion, toString = Object.prototype.toString, flag = _.flag;
            /**
   * ### Language Chains
   *
   * The following are provided as chainable getters to
   * improve the readability of your assertions. They
   * do not provide testing capabilities unless they
   * have been overwritten by a plugin.
   *
   * **Chains**
   *
   * - to
   * - be
   * - been
   * - is
   * - that
   * - which
   * - and
   * - has
   * - have
   * - with
   * - at
   * - of
   * - same
   *
   * @name language chains
   * @namespace BDD
   * @api public
   */
            [ "to", "be", "been", "is", "and", "has", "have", "with", "that", "which", "at", "of", "same" ].forEach(function(chain) {
                Assertion.addProperty(chain, function() {
                    return this;
                });
            });
            /**
   * ### .not
   *
   * Negates any of assertions following in the chain.
   *
   *     expect(foo).to.not.equal('bar');
   *     expect(goodFn).to.not.throw(Error);
   *     expect({ foo: 'baz' }).to.have.property('foo')
   *       .and.not.equal('bar');
   *
   * @name not
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("not", function() {
                flag(this, "negate", true);
            });
            /**
   * ### .deep
   *
   * Sets the `deep` flag, later used by the `equal` and
   * `property` assertions.
   *
   *     expect(foo).to.deep.equal({ bar: 'baz' });
   *     expect({ foo: { bar: { baz: 'quux' } } })
   *       .to.have.deep.property('foo.bar.baz', 'quux');
   *
   * `.deep.property` special characters can be escaped
   * by adding two slashes before the `.` or `[]`.
   *
   *     var deepCss = { '.link': { '[target]': 42 }};
   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
   *
   * @name deep
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("deep", function() {
                flag(this, "deep", true);
            });
            /**
   * ### .any
   *
   * Sets the `any` flag, (opposite of the `all` flag)
   * later used in the `keys` assertion.
   *
   *     expect(foo).to.have.any.keys('bar', 'baz');
   *
   * @name any
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("any", function() {
                flag(this, "any", true);
                flag(this, "all", false);
            });
            /**
   * ### .all
   *
   * Sets the `all` flag (opposite of the `any` flag)
   * later used by the `keys` assertion.
   *
   *     expect(foo).to.have.all.keys('bar', 'baz');
   *
   * @name all
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("all", function() {
                flag(this, "all", true);
                flag(this, "any", false);
            });
            /**
   * ### .a(type)
   *
   * The `a` and `an` assertions are aliases that can be
   * used either as language chains or to assert a value's
   * type.
   *
   *     // typeof
   *     expect('test').to.be.a('string');
   *     expect({ foo: 'bar' }).to.be.an('object');
   *     expect(null).to.be.a('null');
   *     expect(undefined).to.be.an('undefined');
   *     expect(new Error).to.be.an('error');
   *     expect(new Promise).to.be.a('promise');
   *     expect(new Float32Array()).to.be.a('float32array');
   *     expect(Symbol()).to.be.a('symbol');
   *
   *     // es6 overrides
   *     expect({[Symbol.toStringTag]:()=>'foo'}).to.be.a('foo');
   *
   *     // language chain
   *     expect(foo).to.be.an.instanceof(Foo);
   *
   * @name a
   * @alias an
   * @param {String} type
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function an(type, msg) {
                if (msg) flag(this, "message", msg);
                type = type.toLowerCase();
                var obj = flag(this, "object"), article = ~[ "a", "e", "i", "o", "u" ].indexOf(type.charAt(0)) ? "an " : "a ";
                this.assert(type === _.type(obj), "expected #{this} to be " + article + type, "expected #{this} not to be " + article + type);
            }
            Assertion.addChainableMethod("an", an);
            Assertion.addChainableMethod("a", an);
            /**
   * ### .include(value)
   *
   * The `include` and `contain` assertions can be used as either property
   * based language chains or as methods to assert the inclusion of an object
   * in an array or a substring in a string. When used as language chains,
   * they toggle the `contains` flag for the `keys` assertion.
   *
   *     expect([1,2,3]).to.include(2);
   *     expect('foobar').to.contain('foo');
   *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
   *
   * @name include
   * @alias contain
   * @alias includes
   * @alias contains
   * @param {Object|String|Number} obj
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function includeChainingBehavior() {
                flag(this, "contains", true);
            }
            function include(val, msg) {
                _.expectTypes(this, [ "array", "object", "string" ]);
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                var expected = false;
                if (_.type(obj) === "array" && _.type(val) === "object") {
                    for (var i in obj) {
                        if (_.eql(obj[i], val)) {
                            expected = true;
                            break;
                        }
                    }
                } else if (_.type(val) === "object") {
                    if (!flag(this, "negate")) {
                        for (var k in val) {
                            new Assertion(obj).property(k, val[k]);
                        }
                        return;
                    }
                    var subset = {};
                    for (var k in val) {
                        subset[k] = obj[k];
                    }
                    expected = _.eql(subset, val);
                } else {
                    expected = obj != undefined && ~obj.indexOf(val);
                }
                this.assert(expected, "expected #{this} to include " + _.inspect(val), "expected #{this} to not include " + _.inspect(val));
            }
            Assertion.addChainableMethod("include", include, includeChainingBehavior);
            Assertion.addChainableMethod("contain", include, includeChainingBehavior);
            Assertion.addChainableMethod("contains", include, includeChainingBehavior);
            Assertion.addChainableMethod("includes", include, includeChainingBehavior);
            /**
   * ### .ok
   *
   * Asserts that the target is truthy.
   *
   *     expect('everything').to.be.ok;
   *     expect(1).to.be.ok;
   *     expect(false).to.not.be.ok;
   *     expect(undefined).to.not.be.ok;
   *     expect(null).to.not.be.ok;
   *
   * @name ok
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("ok", function() {
                this.assert(flag(this, "object"), "expected #{this} to be truthy", "expected #{this} to be falsy");
            });
            /**
   * ### .true
   *
   * Asserts that the target is `true`.
   *
   *     expect(true).to.be.true;
   *     expect(1).to.not.be.true;
   *
   * @name true
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("true", function() {
                this.assert(true === flag(this, "object"), "expected #{this} to be true", "expected #{this} to be false", this.negate ? false : true);
            });
            /**
   * ### .false
   *
   * Asserts that the target is `false`.
   *
   *     expect(false).to.be.false;
   *     expect(0).to.not.be.false;
   *
   * @name false
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("false", function() {
                this.assert(false === flag(this, "object"), "expected #{this} to be false", "expected #{this} to be true", this.negate ? true : false);
            });
            /**
   * ### .null
   *
   * Asserts that the target is `null`.
   *
   *     expect(null).to.be.null;
   *     expect(undefined).to.not.be.null;
   *
   * @name null
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("null", function() {
                this.assert(null === flag(this, "object"), "expected #{this} to be null", "expected #{this} not to be null");
            });
            /**
   * ### .undefined
   *
   * Asserts that the target is `undefined`.
   *
   *     expect(undefined).to.be.undefined;
   *     expect(null).to.not.be.undefined;
   *
   * @name undefined
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("undefined", function() {
                this.assert(undefined === flag(this, "object"), "expected #{this} to be undefined", "expected #{this} not to be undefined");
            });
            /**
   * ### .NaN
   * Asserts that the target is `NaN`.
   *
   *     expect('foo').to.be.NaN;
   *     expect(4).not.to.be.NaN;
   *
   * @name NaN
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("NaN", function() {
                this.assert(isNaN(flag(this, "object")), "expected #{this} to be NaN", "expected #{this} not to be NaN");
            });
            /**
   * ### .exist
   *
   * Asserts that the target is neither `null` nor `undefined`.
   *
   *     var foo = 'hi'
   *       , bar = null
   *       , baz;
   *
   *     expect(foo).to.exist;
   *     expect(bar).to.not.exist;
   *     expect(baz).to.not.exist;
   *
   * @name exist
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("exist", function() {
                this.assert(null != flag(this, "object"), "expected #{this} to exist", "expected #{this} to not exist");
            });
            /**
   * ### .empty
   *
   * Asserts that the target's length is `0`. For arrays and strings, it checks
   * the `length` property. For objects, it gets the count of
   * enumerable keys.
   *
   *     expect([]).to.be.empty;
   *     expect('').to.be.empty;
   *     expect({}).to.be.empty;
   *
   * @name empty
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("empty", function() {
                var obj = flag(this, "object"), expected = obj;
                if (Array.isArray(obj) || "string" === typeof object) {
                    expected = obj.length;
                } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
                    expected = Object.keys(obj).length;
                }
                this.assert(!expected, "expected #{this} to be empty", "expected #{this} not to be empty");
            });
            /**
   * ### .arguments
   *
   * Asserts that the target is an arguments object.
   *
   *     function test () {
   *       expect(arguments).to.be.arguments;
   *     }
   *
   * @name arguments
   * @alias Arguments
   * @namespace BDD
   * @api public
   */
            function checkArguments() {
                var obj = flag(this, "object"), type = Object.prototype.toString.call(obj);
                this.assert("[object Arguments]" === type, "expected #{this} to be arguments but got " + type, "expected #{this} to not be arguments");
            }
            Assertion.addProperty("arguments", checkArguments);
            Assertion.addProperty("Arguments", checkArguments);
            /**
   * ### .equal(value)
   *
   * Asserts that the target is strictly equal (`===`) to `value`.
   * Alternately, if the `deep` flag is set, asserts that
   * the target is deeply equal to `value`.
   *
   *     expect('hello').to.equal('hello');
   *     expect(42).to.equal(42);
   *     expect(1).to.not.equal(true);
   *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
   *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
   *
   * @name equal
   * @alias equals
   * @alias eq
   * @alias deep.equal
   * @param {Mixed} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertEqual(val, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                if (flag(this, "deep")) {
                    return this.eql(val);
                } else {
                    this.assert(val === obj, "expected #{this} to equal #{exp}", "expected #{this} to not equal #{exp}", val, this._obj, true);
                }
            }
            Assertion.addMethod("equal", assertEqual);
            Assertion.addMethod("equals", assertEqual);
            Assertion.addMethod("eq", assertEqual);
            /**
   * ### .eql(value)
   *
   * Asserts that the target is deeply equal to `value`.
   *
   *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
   *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
   *
   * @name eql
   * @alias eqls
   * @param {Mixed} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertEql(obj, msg) {
                if (msg) flag(this, "message", msg);
                this.assert(_.eql(obj, flag(this, "object")), "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", obj, this._obj, true);
            }
            Assertion.addMethod("eql", assertEql);
            Assertion.addMethod("eqls", assertEql);
            /**
   * ### .above(value)
   *
   * Asserts that the target is greater than `value`.
   *
   *     expect(10).to.be.above(5);
   *
   * Can also be used in conjunction with `length` to
   * assert a minimum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.above(2);
   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
   *
   * @name above
   * @alias gt
   * @alias greaterThan
   * @param {Number} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertAbove(n, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                if (flag(this, "doLength")) {
                    new Assertion(obj, msg).to.have.property("length");
                    var len = obj.length;
                    this.assert(len > n, "expected #{this} to have a length above #{exp} but got #{act}", "expected #{this} to not have a length above #{exp}", n, len);
                } else {
                    this.assert(obj > n, "expected #{this} to be above " + n, "expected #{this} to be at most " + n);
                }
            }
            Assertion.addMethod("above", assertAbove);
            Assertion.addMethod("gt", assertAbove);
            Assertion.addMethod("greaterThan", assertAbove);
            /**
   * ### .least(value)
   *
   * Asserts that the target is greater than or equal to `value`.
   *
   *     expect(10).to.be.at.least(10);
   *
   * Can also be used in conjunction with `length` to
   * assert a minimum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.of.at.least(2);
   *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
   *
   * @name least
   * @alias gte
   * @param {Number} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertLeast(n, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                if (flag(this, "doLength")) {
                    new Assertion(obj, msg).to.have.property("length");
                    var len = obj.length;
                    this.assert(len >= n, "expected #{this} to have a length at least #{exp} but got #{act}", "expected #{this} to have a length below #{exp}", n, len);
                } else {
                    this.assert(obj >= n, "expected #{this} to be at least " + n, "expected #{this} to be below " + n);
                }
            }
            Assertion.addMethod("least", assertLeast);
            Assertion.addMethod("gte", assertLeast);
            /**
   * ### .below(value)
   *
   * Asserts that the target is less than `value`.
   *
   *     expect(5).to.be.below(10);
   *
   * Can also be used in conjunction with `length` to
   * assert a maximum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.below(4);
   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
   *
   * @name below
   * @alias lt
   * @alias lessThan
   * @param {Number} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertBelow(n, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                if (flag(this, "doLength")) {
                    new Assertion(obj, msg).to.have.property("length");
                    var len = obj.length;
                    this.assert(len < n, "expected #{this} to have a length below #{exp} but got #{act}", "expected #{this} to not have a length below #{exp}", n, len);
                } else {
                    this.assert(obj < n, "expected #{this} to be below " + n, "expected #{this} to be at least " + n);
                }
            }
            Assertion.addMethod("below", assertBelow);
            Assertion.addMethod("lt", assertBelow);
            Assertion.addMethod("lessThan", assertBelow);
            /**
   * ### .most(value)
   *
   * Asserts that the target is less than or equal to `value`.
   *
   *     expect(5).to.be.at.most(5);
   *
   * Can also be used in conjunction with `length` to
   * assert a maximum length. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.of.at.most(4);
   *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
   *
   * @name most
   * @alias lte
   * @param {Number} value
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertMost(n, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                if (flag(this, "doLength")) {
                    new Assertion(obj, msg).to.have.property("length");
                    var len = obj.length;
                    this.assert(len <= n, "expected #{this} to have a length at most #{exp} but got #{act}", "expected #{this} to have a length above #{exp}", n, len);
                } else {
                    this.assert(obj <= n, "expected #{this} to be at most " + n, "expected #{this} to be above " + n);
                }
            }
            Assertion.addMethod("most", assertMost);
            Assertion.addMethod("lte", assertMost);
            /**
   * ### .within(start, finish)
   *
   * Asserts that the target is within a range.
   *
   *     expect(7).to.be.within(5,10);
   *
   * Can also be used in conjunction with `length` to
   * assert a length range. The benefit being a
   * more informative error message than if the length
   * was supplied directly.
   *
   *     expect('foo').to.have.length.within(2,4);
   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
   *
   * @name within
   * @param {Number} start lowerbound inclusive
   * @param {Number} finish upperbound inclusive
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            Assertion.addMethod("within", function(start, finish, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object"), range = start + ".." + finish;
                if (flag(this, "doLength")) {
                    new Assertion(obj, msg).to.have.property("length");
                    var len = obj.length;
                    this.assert(len >= start && len <= finish, "expected #{this} to have a length within " + range, "expected #{this} to not have a length within " + range);
                } else {
                    this.assert(obj >= start && obj <= finish, "expected #{this} to be within " + range, "expected #{this} to not be within " + range);
                }
            });
            /**
   * ### .instanceof(constructor)
   *
   * Asserts that the target is an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , Chai = new Tea('chai');
   *
   *     expect(Chai).to.be.an.instanceof(Tea);
   *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
   *
   * @name instanceof
   * @param {Constructor} constructor
   * @param {String} message _optional_
   * @alias instanceOf
   * @namespace BDD
   * @api public
   */
            function assertInstanceOf(constructor, msg) {
                if (msg) flag(this, "message", msg);
                var name = _.getName(constructor);
                this.assert(flag(this, "object") instanceof constructor, "expected #{this} to be an instance of " + name, "expected #{this} to not be an instance of " + name);
            }
            Assertion.addMethod("instanceof", assertInstanceOf);
            Assertion.addMethod("instanceOf", assertInstanceOf);
            /**
   * ### .property(name, [value])
   *
   * Asserts that the target has a property `name`, optionally asserting that
   * the value of that property is strictly equal to  `value`.
   * If the `deep` flag is set, you can use dot- and bracket-notation for deep
   * references into objects and arrays.
   *
   *     // simple referencing
   *     var obj = { foo: 'bar' };
   *     expect(obj).to.have.property('foo');
   *     expect(obj).to.have.property('foo', 'bar');
   *
   *     // deep referencing
   *     var deepObj = {
   *         green: { tea: 'matcha' }
   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
   *     };
   *
   *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
   *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
   *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
   *
   * You can also use an array as the starting point of a `deep.property`
   * assertion, or traverse nested arrays.
   *
   *     var arr = [
   *         [ 'chai', 'matcha', 'konacha' ]
   *       , [ { tea: 'chai' }
   *         , { tea: 'matcha' }
   *         , { tea: 'konacha' } ]
   *     ];
   *
   *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
   *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
   *
   * Furthermore, `property` changes the subject of the assertion
   * to be the value of that property from the original object. This
   * permits for further chainable assertions on that property.
   *
   *     expect(obj).to.have.property('foo')
   *       .that.is.a('string');
   *     expect(deepObj).to.have.property('green')
   *       .that.is.an('object')
   *       .that.deep.equals({ tea: 'matcha' });
   *     expect(deepObj).to.have.property('teas')
   *       .that.is.an('array')
   *       .with.deep.property('[2]')
   *         .that.deep.equals({ tea: 'konacha' });
   *
   * Note that dots and bracket in `name` must be backslash-escaped when
   * the `deep` flag is set, while they must NOT be escaped when the `deep`
   * flag is not set.
   *
   *     // simple referencing
   *     var css = { '.link[target]': 42 };
   *     expect(css).to.have.property('.link[target]', 42);
   *
   *     // deep referencing
   *     var deepCss = { '.link': { '[target]': 42 }};
   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
   *
   * @name property
   * @alias deep.property
   * @param {String} name
   * @param {Mixed} value (optional)
   * @param {String} message _optional_
   * @returns value of property for chaining
   * @namespace BDD
   * @api public
   */
            Assertion.addMethod("property", function(name, val, msg) {
                if (msg) flag(this, "message", msg);
                var isDeep = !!flag(this, "deep"), descriptor = isDeep ? "deep property " : "property ", negate = flag(this, "negate"), obj = flag(this, "object"), pathInfo = isDeep ? _.getPathInfo(name, obj) : null, hasProperty = isDeep ? pathInfo.exists : _.hasProperty(name, obj), value = isDeep ? pathInfo.value : obj[name];
                if (negate && arguments.length > 1) {
                    if (undefined === value) {
                        msg = msg != null ? msg + ": " : "";
                        throw new Error(msg + _.inspect(obj) + " has no " + descriptor + _.inspect(name));
                    }
                } else {
                    this.assert(hasProperty, "expected #{this} to have a " + descriptor + _.inspect(name), "expected #{this} to not have " + descriptor + _.inspect(name));
                }
                if (arguments.length > 1) {
                    this.assert(val === value, "expected #{this} to have a " + descriptor + _.inspect(name) + " of #{exp}, but got #{act}", "expected #{this} to not have a " + descriptor + _.inspect(name) + " of #{act}", val, value);
                }
                flag(this, "object", value);
            });
            /**
   * ### .ownProperty(name)
   *
   * Asserts that the target has an own property `name`.
   *
   *     expect('test').to.have.ownProperty('length');
   *
   * @name ownProperty
   * @alias haveOwnProperty
   * @param {String} name
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertOwnProperty(name, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                this.assert(obj.hasOwnProperty(name), "expected #{this} to have own property " + _.inspect(name), "expected #{this} to not have own property " + _.inspect(name));
            }
            Assertion.addMethod("ownProperty", assertOwnProperty);
            Assertion.addMethod("haveOwnProperty", assertOwnProperty);
            /**
   * ### .ownPropertyDescriptor(name[, descriptor[, message]])
   *
   * Asserts that the target has an own property descriptor `name`, that optionally matches `descriptor`.
   *
   *     expect('test').to.have.ownPropertyDescriptor('length');
   *     expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
   *     expect('test').not.to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
   *     expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
   *     expect('test').ownPropertyDescriptor('length').to.have.keys('value');
   *
   * @name ownPropertyDescriptor
   * @alias haveOwnPropertyDescriptor
   * @param {String} name
   * @param {Object} descriptor _optional_
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertOwnPropertyDescriptor(name, descriptor, msg) {
                if (typeof descriptor === "string") {
                    msg = descriptor;
                    descriptor = null;
                }
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
                if (actualDescriptor && descriptor) {
                    this.assert(_.eql(descriptor, actualDescriptor), "expected the own property descriptor for " + _.inspect(name) + " on #{this} to match " + _.inspect(descriptor) + ", got " + _.inspect(actualDescriptor), "expected the own property descriptor for " + _.inspect(name) + " on #{this} to not match " + _.inspect(descriptor), descriptor, actualDescriptor, true);
                } else {
                    this.assert(actualDescriptor, "expected #{this} to have an own property descriptor for " + _.inspect(name), "expected #{this} to not have an own property descriptor for " + _.inspect(name));
                }
                flag(this, "object", actualDescriptor);
            }
            Assertion.addMethod("ownPropertyDescriptor", assertOwnPropertyDescriptor);
            Assertion.addMethod("haveOwnPropertyDescriptor", assertOwnPropertyDescriptor);
            /**
   * ### .length
   *
   * Sets the `doLength` flag later used as a chain precursor to a value
   * comparison for the `length` property.
   *
   *     expect('foo').to.have.length.above(2);
   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
   *     expect('foo').to.have.length.below(4);
   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
   *     expect('foo').to.have.length.within(2,4);
   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
   *
   * *Deprecation notice:* Using `length` as an assertion will be deprecated
   * in version 2.4.0 and removed in 3.0.0. Code using the old style of
   * asserting for `length` property value using `length(value)` should be
   * switched to use `lengthOf(value)` instead.
   *
   * @name length
   * @namespace BDD
   * @api public
   */
            /**
   * ### .lengthOf(value[, message])
   *
   * Asserts that the target's `length` property has
   * the expected value.
   *
   *     expect([ 1, 2, 3]).to.have.lengthOf(3);
   *     expect('foobar').to.have.lengthOf(6);
   *
   * @name lengthOf
   * @param {Number} length
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertLengthChain() {
                flag(this, "doLength", true);
            }
            function assertLength(n, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                new Assertion(obj, msg).to.have.property("length");
                var len = obj.length;
                this.assert(len == n, "expected #{this} to have a length of #{exp} but got #{act}", "expected #{this} to not have a length of #{act}", n, len);
            }
            Assertion.addChainableMethod("length", assertLength, assertLengthChain);
            Assertion.addMethod("lengthOf", assertLength);
            /**
   * ### .match(regexp)
   *
   * Asserts that the target matches a regular expression.
   *
   *     expect('foobar').to.match(/^foo/);
   *
   * @name match
   * @alias matches
   * @param {RegExp} RegularExpression
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertMatch(re, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                this.assert(re.exec(obj), "expected #{this} to match " + re, "expected #{this} not to match " + re);
            }
            Assertion.addMethod("match", assertMatch);
            Assertion.addMethod("matches", assertMatch);
            /**
   * ### .string(string)
   *
   * Asserts that the string target contains another string.
   *
   *     expect('foobar').to.have.string('bar');
   *
   * @name string
   * @param {String} string
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            Assertion.addMethod("string", function(str, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                new Assertion(obj, msg).is.a("string");
                this.assert(~obj.indexOf(str), "expected #{this} to contain " + _.inspect(str), "expected #{this} to not contain " + _.inspect(str));
            });
            /**
   * ### .keys(key1, [key2], [...])
   *
   * Asserts that the target contains any or all of the passed-in keys.
   * Use in combination with `any`, `all`, `contains`, or `have` will affect
   * what will pass.
   *
   * When used in conjunction with `any`, at least one key that is passed
   * in must exist in the target object. This is regardless whether or not
   * the `have` or `contain` qualifiers are used. Note, either `any` or `all`
   * should be used in the assertion. If neither are used, the assertion is
   * defaulted to `all`.
   *
   * When both `all` and `contain` are used, the target object must have at
   * least all of the passed-in keys but may have more keys not listed.
   *
   * When both `all` and `have` are used, the target object must both contain
   * all of the passed-in keys AND the number of keys in the target object must
   * match the number of keys passed in (in other words, a target object must
   * have all and only all of the passed-in keys).
   *
   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');
   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');
   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);
   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});
   *     expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
   *     expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo': 7});
   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);
   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys({'bar': 6});
   *
   *
   * @name keys
   * @alias key
   * @param {...String|Array|Object} keys
   * @namespace BDD
   * @api public
   */
            function assertKeys(keys) {
                var obj = flag(this, "object"), str, ok = true, mixedArgsMsg = "keys must be given single argument of Array|Object|String, or multiple String arguments";
                switch (_.type(keys)) {
                  case "array":
                    if (arguments.length > 1) throw new Error(mixedArgsMsg);
                    break;

                  case "object":
                    if (arguments.length > 1) throw new Error(mixedArgsMsg);
                    keys = Object.keys(keys);
                    break;

                  default:
                    keys = Array.prototype.slice.call(arguments);
                }
                if (!keys.length) throw new Error("keys required");
                var actual = Object.keys(obj), expected = keys, len = keys.length, any = flag(this, "any"), all = flag(this, "all");
                if (!any && !all) {
                    all = true;
                }
                // Has any
                if (any) {
                    var intersection = expected.filter(function(key) {
                        return ~actual.indexOf(key);
                    });
                    ok = intersection.length > 0;
                }
                // Has all
                if (all) {
                    ok = keys.every(function(key) {
                        return ~actual.indexOf(key);
                    });
                    if (!flag(this, "negate") && !flag(this, "contains")) {
                        ok = ok && keys.length == actual.length;
                    }
                }
                // Key string
                if (len > 1) {
                    keys = keys.map(function(key) {
                        return _.inspect(key);
                    });
                    var last = keys.pop();
                    if (all) {
                        str = keys.join(", ") + ", and " + last;
                    }
                    if (any) {
                        str = keys.join(", ") + ", or " + last;
                    }
                } else {
                    str = _.inspect(keys[0]);
                }
                // Form
                str = (len > 1 ? "keys " : "key ") + str;
                // Have / include
                str = (flag(this, "contains") ? "contain " : "have ") + str;
                // Assertion
                this.assert(ok, "expected #{this} to " + str, "expected #{this} to not " + str, expected.slice(0).sort(), actual.sort(), true);
            }
            Assertion.addMethod("keys", assertKeys);
            Assertion.addMethod("key", assertKeys);
            /**
   * ### .throw(constructor)
   *
   * Asserts that the function target will throw a specific error, or specific type of error
   * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
   * for the error's message.
   *
   *     var err = new ReferenceError('This is a bad function.');
   *     var fn = function () { throw err; }
   *     expect(fn).to.throw(ReferenceError);
   *     expect(fn).to.throw(Error);
   *     expect(fn).to.throw(/bad function/);
   *     expect(fn).to.not.throw('good function');
   *     expect(fn).to.throw(ReferenceError, /bad function/);
   *     expect(fn).to.throw(err);
   *
   * Please note that when a throw expectation is negated, it will check each
   * parameter independently, starting with error constructor type. The appropriate way
   * to check for the existence of a type of error but for a message that does not match
   * is to use `and`.
   *
   *     expect(fn).to.throw(ReferenceError)
   *        .and.not.throw(/good function/);
   *
   * @name throw
   * @alias throws
   * @alias Throw
   * @param {ErrorConstructor} constructor
   * @param {String|RegExp} expected error message
   * @param {String} message _optional_
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @returns error for chaining (null if no error)
   * @namespace BDD
   * @api public
   */
            function assertThrows(constructor, errMsg, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                new Assertion(obj, msg).is.a("function");
                var thrown = false, desiredError = null, name = null, thrownError = null;
                if (arguments.length === 0) {
                    errMsg = null;
                    constructor = null;
                } else if (constructor && (constructor instanceof RegExp || "string" === typeof constructor)) {
                    errMsg = constructor;
                    constructor = null;
                } else if (constructor && constructor instanceof Error) {
                    desiredError = constructor;
                    constructor = null;
                    errMsg = null;
                } else if (typeof constructor === "function") {
                    name = constructor.prototype.name;
                    if (!name || name === "Error" && constructor !== Error) {
                        name = constructor.name || new constructor().name;
                    }
                } else {
                    constructor = null;
                }
                try {
                    obj();
                } catch (err) {
                    // first, check desired error
                    if (desiredError) {
                        this.assert(err === desiredError, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}", desiredError instanceof Error ? desiredError.toString() : desiredError, err instanceof Error ? err.toString() : err);
                        flag(this, "object", err);
                        return this;
                    }
                    // next, check constructor
                    if (constructor) {
                        this.assert(err instanceof constructor, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp} but #{act} was thrown", name, err instanceof Error ? err.toString() : err);
                        if (!errMsg) {
                            flag(this, "object", err);
                            return this;
                        }
                    }
                    // next, check message
                    var message = "error" === _.type(err) && "message" in err ? err.message : "" + err;
                    if (message != null && errMsg && errMsg instanceof RegExp) {
                        this.assert(errMsg.exec(message), "expected #{this} to throw error matching #{exp} but got #{act}", "expected #{this} to throw error not matching #{exp}", errMsg, message);
                        flag(this, "object", err);
                        return this;
                    } else if (message != null && errMsg && "string" === typeof errMsg) {
                        this.assert(~message.indexOf(errMsg), "expected #{this} to throw error including #{exp} but got #{act}", "expected #{this} to throw error not including #{act}", errMsg, message);
                        flag(this, "object", err);
                        return this;
                    } else {
                        thrown = true;
                        thrownError = err;
                    }
                }
                var actuallyGot = "", expectedThrown = name !== null ? name : desiredError ? "#{exp}" : "an error";
                if (thrown) {
                    actuallyGot = " but #{act} was thrown";
                }
                this.assert(thrown === true, "expected #{this} to throw " + expectedThrown + actuallyGot, "expected #{this} to not throw " + expectedThrown + actuallyGot, desiredError instanceof Error ? desiredError.toString() : desiredError, thrownError instanceof Error ? thrownError.toString() : thrownError);
                flag(this, "object", thrownError);
            }
            Assertion.addMethod("throw", assertThrows);
            Assertion.addMethod("throws", assertThrows);
            Assertion.addMethod("Throw", assertThrows);
            /**
   * ### .respondTo(method)
   *
   * Asserts that the object or class target will respond to a method.
   *
   *     Klass.prototype.bar = function(){};
   *     expect(Klass).to.respondTo('bar');
   *     expect(obj).to.respondTo('bar');
   *
   * To check if a constructor will respond to a static function,
   * set the `itself` flag.
   *
   *     Klass.baz = function(){};
   *     expect(Klass).itself.to.respondTo('baz');
   *
   * @name respondTo
   * @alias respondsTo
   * @param {String} method
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function respondTo(method, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object"), itself = flag(this, "itself"), context = "function" === _.type(obj) && !itself ? obj.prototype[method] : obj[method];
                this.assert("function" === typeof context, "expected #{this} to respond to " + _.inspect(method), "expected #{this} to not respond to " + _.inspect(method));
            }
            Assertion.addMethod("respondTo", respondTo);
            Assertion.addMethod("respondsTo", respondTo);
            /**
   * ### .itself
   *
   * Sets the `itself` flag, later used by the `respondTo` assertion.
   *
   *     function Foo() {}
   *     Foo.bar = function() {}
   *     Foo.prototype.baz = function() {}
   *
   *     expect(Foo).itself.to.respondTo('bar');
   *     expect(Foo).itself.not.to.respondTo('baz');
   *
   * @name itself
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("itself", function() {
                flag(this, "itself", true);
            });
            /**
   * ### .satisfy(method)
   *
   * Asserts that the target passes a given truth test.
   *
   *     expect(1).to.satisfy(function(num) { return num > 0; });
   *
   * @name satisfy
   * @alias satisfies
   * @param {Function} matcher
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function satisfy(matcher, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                var result = matcher(obj);
                this.assert(result, "expected #{this} to satisfy " + _.objDisplay(matcher), "expected #{this} to not satisfy" + _.objDisplay(matcher), this.negate ? false : true, result);
            }
            Assertion.addMethod("satisfy", satisfy);
            Assertion.addMethod("satisfies", satisfy);
            /**
   * ### .closeTo(expected, delta)
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     expect(1.5).to.be.closeTo(1, 0.5);
   *
   * @name closeTo
   * @alias approximately
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function closeTo(expected, delta, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                new Assertion(obj, msg).is.a("number");
                if (_.type(expected) !== "number" || _.type(delta) !== "number") {
                    throw new Error("the arguments to closeTo or approximately must be numbers");
                }
                this.assert(Math.abs(obj - expected) <= delta, "expected #{this} to be close to " + expected + " +/- " + delta, "expected #{this} not to be close to " + expected + " +/- " + delta);
            }
            Assertion.addMethod("closeTo", closeTo);
            Assertion.addMethod("approximately", closeTo);
            function isSubsetOf(subset, superset, cmp) {
                return subset.every(function(elem) {
                    if (!cmp) return superset.indexOf(elem) !== -1;
                    return superset.some(function(elem2) {
                        return cmp(elem, elem2);
                    });
                });
            }
            /**
   * ### .members(set)
   *
   * Asserts that the target is a superset of `set`,
   * or that the target and `set` have the same strictly-equal (===) members.
   * Alternately, if the `deep` flag is set, set members are compared for deep
   * equality.
   *
   *     expect([1, 2, 3]).to.include.members([3, 2]);
   *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
   *
   *     expect([4, 2]).to.have.members([2, 4]);
   *     expect([5, 2]).to.not.have.members([5, 2, 1]);
   *
   *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
   *
   * @name members
   * @param {Array} set
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            Assertion.addMethod("members", function(subset, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                new Assertion(obj).to.be.an("array");
                new Assertion(subset).to.be.an("array");
                var cmp = flag(this, "deep") ? _.eql : undefined;
                if (flag(this, "contains")) {
                    return this.assert(isSubsetOf(subset, obj, cmp), "expected #{this} to be a superset of #{act}", "expected #{this} to not be a superset of #{act}", obj, subset);
                }
                this.assert(isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp), "expected #{this} to have the same members as #{act}", "expected #{this} to not have the same members as #{act}", obj, subset);
            });
            /**
   * ### .oneOf(list)
   *
   * Assert that a value appears somewhere in the top level of array `list`.
   *
   *     expect('a').to.be.oneOf(['a', 'b', 'c']);
   *     expect(9).to.not.be.oneOf(['z']);
   *     expect([3]).to.not.be.oneOf([1, 2, [3]]);
   *
   *     var three = [3];
   *     // for object-types, contents are not compared
   *     expect(three).to.not.be.oneOf([1, 2, [3]]);
   *     // comparing references works
   *     expect(three).to.be.oneOf([1, 2, three]);
   *
   * @name oneOf
   * @param {Array<*>} list
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function oneOf(list, msg) {
                if (msg) flag(this, "message", msg);
                var expected = flag(this, "object");
                new Assertion(list).to.be.an("array");
                this.assert(list.indexOf(expected) > -1, "expected #{this} to be one of #{exp}", "expected #{this} to not be one of #{exp}", list, expected);
            }
            Assertion.addMethod("oneOf", oneOf);
            /**
   * ### .change(function)
   *
   * Asserts that a function changes an object property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 3 };
   *     var noChangeFn = function() { return 'foo' + 'bar'; }
   *     expect(fn).to.change(obj, 'val');
   *     expect(noChangeFn).to.not.change(obj, 'val')
   *
   * @name change
   * @alias changes
   * @alias Change
   * @param {String} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertChanges(object, prop, msg) {
                if (msg) flag(this, "message", msg);
                var fn = flag(this, "object");
                new Assertion(object, msg).to.have.property(prop);
                new Assertion(fn).is.a("function");
                var initial = object[prop];
                fn();
                this.assert(initial !== object[prop], "expected ." + prop + " to change", "expected ." + prop + " to not change");
            }
            Assertion.addChainableMethod("change", assertChanges);
            Assertion.addChainableMethod("changes", assertChanges);
            /**
   * ### .increase(function)
   *
   * Asserts that a function increases an object property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 15 };
   *     expect(fn).to.increase(obj, 'val');
   *
   * @name increase
   * @alias increases
   * @alias Increase
   * @param {String} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertIncreases(object, prop, msg) {
                if (msg) flag(this, "message", msg);
                var fn = flag(this, "object");
                new Assertion(object, msg).to.have.property(prop);
                new Assertion(fn).is.a("function");
                var initial = object[prop];
                fn();
                this.assert(object[prop] - initial > 0, "expected ." + prop + " to increase", "expected ." + prop + " to not increase");
            }
            Assertion.addChainableMethod("increase", assertIncreases);
            Assertion.addChainableMethod("increases", assertIncreases);
            /**
   * ### .decrease(function)
   *
   * Asserts that a function decreases an object property
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     expect(fn).to.decrease(obj, 'val');
   *
   * @name decrease
   * @alias decreases
   * @alias Decrease
   * @param {String} object
   * @param {String} property name
   * @param {String} message _optional_
   * @namespace BDD
   * @api public
   */
            function assertDecreases(object, prop, msg) {
                if (msg) flag(this, "message", msg);
                var fn = flag(this, "object");
                new Assertion(object, msg).to.have.property(prop);
                new Assertion(fn).is.a("function");
                var initial = object[prop];
                fn();
                this.assert(object[prop] - initial < 0, "expected ." + prop + " to decrease", "expected ." + prop + " to not decrease");
            }
            Assertion.addChainableMethod("decrease", assertDecreases);
            Assertion.addChainableMethod("decreases", assertDecreases);
            /**
   * ### .extensible
   *
   * Asserts that the target is extensible (can have new properties added to
   * it).
   *
   *     var nonExtensibleObject = Object.preventExtensions({});
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     expect({}).to.be.extensible;
   *     expect(nonExtensibleObject).to.not.be.extensible;
   *     expect(sealedObject).to.not.be.extensible;
   *     expect(frozenObject).to.not.be.extensible;
   *
   * @name extensible
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("extensible", function() {
                var obj = flag(this, "object");
                // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
                // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
                // The following provides ES6 behavior when a TypeError is thrown under ES5.
                var isExtensible;
                try {
                    isExtensible = Object.isExtensible(obj);
                } catch (err) {
                    if (err instanceof TypeError) isExtensible = false; else throw err;
                }
                this.assert(isExtensible, "expected #{this} to be extensible", "expected #{this} to not be extensible");
            });
            /**
   * ### .sealed
   *
   * Asserts that the target is sealed (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     expect(sealedObject).to.be.sealed;
   *     expect(frozenObject).to.be.sealed;
   *     expect({}).to.not.be.sealed;
   *
   * @name sealed
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("sealed", function() {
                var obj = flag(this, "object");
                // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
                // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
                // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
                // The following provides ES6 behavior when a TypeError is thrown under ES5.
                var isSealed;
                try {
                    isSealed = Object.isSealed(obj);
                } catch (err) {
                    if (err instanceof TypeError) isSealed = true; else throw err;
                }
                this.assert(isSealed, "expected #{this} to be sealed", "expected #{this} to not be sealed");
            });
            /**
   * ### .frozen
   *
   * Asserts that the target is frozen (cannot have new properties added to it
   * and its existing properties cannot be modified).
   *
   *     var frozenObject = Object.freeze({});
   *
   *     expect(frozenObject).to.be.frozen;
   *     expect({}).to.not.be.frozen;
   *
   * @name frozen
   * @namespace BDD
   * @api public
   */
            Assertion.addProperty("frozen", function() {
                var obj = flag(this, "object");
                // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
                // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
                // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
                // The following provides ES6 behavior when a TypeError is thrown under ES5.
                var isFrozen;
                try {
                    isFrozen = Object.isFrozen(obj);
                } catch (err) {
                    if (err instanceof TypeError) isFrozen = true; else throw err;
                }
                this.assert(isFrozen, "expected #{this} to be frozen", "expected #{this} to not be frozen");
            });
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        module.exports = function(chai, util) {
            /*!
   * Chai dependencies.
   */
            var Assertion = chai.Assertion, flag = util.flag;
            /*!
   * Module export.
   */
            /**
   * ### assert(expression, message)
   *
   * Write your own test expressions.
   *
   *     assert('foo' !== 'bar', 'foo is not bar');
   *     assert(Array.isArray([]), 'empty arrays are arrays');
   *
   * @param {Mixed} expression to test for truthiness
   * @param {String} message to display on error
   * @name assert
   * @namespace Assert
   * @api public
   */
            var assert = chai.assert = function(express, errmsg) {
                var test = new Assertion(null, null, chai.assert);
                test.assert(express, errmsg, "[ negation message unavailable ]");
            };
            /**
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure. Node.js `assert` module-compatible.
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace Assert
   * @api public
   */
            assert.fail = function(actual, expected, message, operator) {
                message = message || "assert.fail()";
                throw new chai.AssertionError(message, {
                    actual: actual,
                    expected: expected,
                    operator: operator
                }, assert.fail);
            };
            /**
   * ### .isOk(object, [message])
   *
   * Asserts that `object` is truthy.
   *
   *     assert.isOk('everything', 'everything is ok');
   *     assert.isOk(false, 'this will fail');
   *
   * @name isOk
   * @alias ok
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isOk = function(val, msg) {
                new Assertion(val, msg).is.ok;
            };
            /**
   * ### .isNotOk(object, [message])
   *
   * Asserts that `object` is falsy.
   *
   *     assert.isNotOk('everything', 'this will fail');
   *     assert.isNotOk(false, 'this will pass');
   *
   * @name isNotOk
   * @alias notOk
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNotOk = function(val, msg) {
                new Assertion(val, msg).is.not.ok;
            };
            /**
   * ### .equal(actual, expected, [message])
   *
   * Asserts non-strict equality (`==`) of `actual` and `expected`.
   *
   *     assert.equal(3, '3', '== coerces values to strings');
   *
   * @name equal
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.equal = function(act, exp, msg) {
                var test = new Assertion(act, msg, assert.equal);
                test.assert(exp == flag(test, "object"), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", exp, act);
            };
            /**
   * ### .notEqual(actual, expected, [message])
   *
   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
   *
   *     assert.notEqual(3, 4, 'these numbers are not equal');
   *
   * @name notEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.notEqual = function(act, exp, msg) {
                var test = new Assertion(act, msg, assert.notEqual);
                test.assert(exp != flag(test, "object"), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", exp, act);
            };
            /**
   * ### .strictEqual(actual, expected, [message])
   *
   * Asserts strict equality (`===`) of `actual` and `expected`.
   *
   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
   *
   * @name strictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.strictEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.equal(exp);
            };
            /**
   * ### .notStrictEqual(actual, expected, [message])
   *
   * Asserts strict inequality (`!==`) of `actual` and `expected`.
   *
   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
   *
   * @name notStrictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.notStrictEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.not.equal(exp);
            };
            /**
   * ### .deepEqual(actual, expected, [message])
   *
   * Asserts that `actual` is deeply equal to `expected`.
   *
   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
   *
   * @name deepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.deepEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.eql(exp);
            };
            /**
   * ### .notDeepEqual(actual, expected, [message])
   *
   * Assert that `actual` is not deeply equal to `expected`.
   *
   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
   *
   * @name notDeepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.notDeepEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.not.eql(exp);
            };
            /**
  * ### .isAbove(valueToCheck, valueToBeAbove, [message])
  *
  * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`
  *
  *     assert.isAbove(5, 2, '5 is strictly greater than 2');
  *
  * @name isAbove
  * @param {Mixed} valueToCheck
  * @param {Mixed} valueToBeAbove
  * @param {String} message
  * @namespace Assert
  * @api public
  */
            assert.isAbove = function(val, abv, msg) {
                new Assertion(val, msg).to.be.above(abv);
            };
            /**
  * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
  *
  * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`
  *
  *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
  *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
  *
  * @name isAtLeast
  * @param {Mixed} valueToCheck
  * @param {Mixed} valueToBeAtLeast
  * @param {String} message
  * @namespace Assert
  * @api public
  */
            assert.isAtLeast = function(val, atlst, msg) {
                new Assertion(val, msg).to.be.least(atlst);
            };
            /**
  * ### .isBelow(valueToCheck, valueToBeBelow, [message])
  *
  * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`
  *
  *     assert.isBelow(3, 6, '3 is strictly less than 6');
  *
  * @name isBelow
  * @param {Mixed} valueToCheck
  * @param {Mixed} valueToBeBelow
  * @param {String} message
  * @namespace Assert
  * @api public
  */
            assert.isBelow = function(val, blw, msg) {
                new Assertion(val, msg).to.be.below(blw);
            };
            /**
  * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
  *
  * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`
  *
  *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
  *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
  *
  * @name isAtMost
  * @param {Mixed} valueToCheck
  * @param {Mixed} valueToBeAtMost
  * @param {String} message
  * @namespace Assert
  * @api public
  */
            assert.isAtMost = function(val, atmst, msg) {
                new Assertion(val, msg).to.be.most(atmst);
            };
            /**
   * ### .isTrue(value, [message])
   *
   * Asserts that `value` is true.
   *
   *     var teaServed = true;
   *     assert.isTrue(teaServed, 'the tea has been served');
   *
   * @name isTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isTrue = function(val, msg) {
                new Assertion(val, msg).is["true"];
            };
            /**
   * ### .isNotTrue(value, [message])
   *
   * Asserts that `value` is not true.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotTrue(tea, 'great, time for tea!');
   *
   * @name isNotTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNotTrue = function(val, msg) {
                new Assertion(val, msg).to.not.equal(true);
            };
            /**
   * ### .isFalse(value, [message])
   *
   * Asserts that `value` is false.
   *
   *     var teaServed = false;
   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
   *
   * @name isFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isFalse = function(val, msg) {
                new Assertion(val, msg).is["false"];
            };
            /**
   * ### .isNotFalse(value, [message])
   *
   * Asserts that `value` is not false.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotFalse(tea, 'great, time for tea!');
   *
   * @name isNotFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNotFalse = function(val, msg) {
                new Assertion(val, msg).to.not.equal(false);
            };
            /**
   * ### .isNull(value, [message])
   *
   * Asserts that `value` is null.
   *
   *     assert.isNull(err, 'there was no error');
   *
   * @name isNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNull = function(val, msg) {
                new Assertion(val, msg).to.equal(null);
            };
            /**
   * ### .isNotNull(value, [message])
   *
   * Asserts that `value` is not null.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotNull(tea, 'great, time for tea!');
   *
   * @name isNotNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNotNull = function(val, msg) {
                new Assertion(val, msg).to.not.equal(null);
            };
            /**
   * ### .isNaN
   * Asserts that value is NaN
   *
   *    assert.isNaN('foo', 'foo is NaN');
   *
   * @name isNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNaN = function(val, msg) {
                new Assertion(val, msg).to.be.NaN;
            };
            /**
   * ### .isNotNaN
   * Asserts that value is not NaN
   *
   *    assert.isNotNaN(4, '4 is not NaN');
   *
   * @name isNotNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNotNaN = function(val, msg) {
                new Assertion(val, msg).not.to.be.NaN;
            };
            /**
   * ### .isUndefined(value, [message])
   *
   * Asserts that `value` is `undefined`.
   *
   *     var tea;
   *     assert.isUndefined(tea, 'no tea defined');
   *
   * @name isUndefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isUndefined = function(val, msg) {
                new Assertion(val, msg).to.equal(undefined);
            };
            /**
   * ### .isDefined(value, [message])
   *
   * Asserts that `value` is not `undefined`.
   *
   *     var tea = 'cup of chai';
   *     assert.isDefined(tea, 'tea has been defined');
   *
   * @name isDefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isDefined = function(val, msg) {
                new Assertion(val, msg).to.not.equal(undefined);
            };
            /**
   * ### .isFunction(value, [message])
   *
   * Asserts that `value` is a function.
   *
   *     function serveTea() { return 'cup of tea'; };
   *     assert.isFunction(serveTea, 'great, we can have tea now');
   *
   * @name isFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isFunction = function(val, msg) {
                new Assertion(val, msg).to.be.a("function");
            };
            /**
   * ### .isNotFunction(value, [message])
   *
   * Asserts that `value` is _not_ a function.
   *
   *     var serveTea = [ 'heat', 'pour', 'sip' ];
   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
   *
   * @name isNotFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNotFunction = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("function");
            };
            /**
   * ### .isObject(value, [message])
   *
   * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
   * _The assertion does not match subclassed objects._
   *
   *     var selection = { name: 'Chai', serve: 'with spices' };
   *     assert.isObject(selection, 'tea selection is an object');
   *
   * @name isObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isObject = function(val, msg) {
                new Assertion(val, msg).to.be.a("object");
            };
            /**
   * ### .isNotObject(value, [message])
   *
   * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
   *
   *     var selection = 'chai'
   *     assert.isNotObject(selection, 'tea selection is not an object');
   *     assert.isNotObject(null, 'null is not an object');
   *
   * @name isNotObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNotObject = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("object");
            };
            /**
   * ### .isArray(value, [message])
   *
   * Asserts that `value` is an array.
   *
   *     var menu = [ 'green', 'chai', 'oolong' ];
   *     assert.isArray(menu, 'what kind of tea do we want?');
   *
   * @name isArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isArray = function(val, msg) {
                new Assertion(val, msg).to.be.an("array");
            };
            /**
   * ### .isNotArray(value, [message])
   *
   * Asserts that `value` is _not_ an array.
   *
   *     var menu = 'green|chai|oolong';
   *     assert.isNotArray(menu, 'what kind of tea do we want?');
   *
   * @name isNotArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNotArray = function(val, msg) {
                new Assertion(val, msg).to.not.be.an("array");
            };
            /**
   * ### .isString(value, [message])
   *
   * Asserts that `value` is a string.
   *
   *     var teaOrder = 'chai';
   *     assert.isString(teaOrder, 'order placed');
   *
   * @name isString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isString = function(val, msg) {
                new Assertion(val, msg).to.be.a("string");
            };
            /**
   * ### .isNotString(value, [message])
   *
   * Asserts that `value` is _not_ a string.
   *
   *     var teaOrder = 4;
   *     assert.isNotString(teaOrder, 'order placed');
   *
   * @name isNotString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNotString = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("string");
            };
            /**
   * ### .isNumber(value, [message])
   *
   * Asserts that `value` is a number.
   *
   *     var cups = 2;
   *     assert.isNumber(cups, 'how many cups');
   *
   * @name isNumber
   * @param {Number} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNumber = function(val, msg) {
                new Assertion(val, msg).to.be.a("number");
            };
            /**
   * ### .isNotNumber(value, [message])
   *
   * Asserts that `value` is _not_ a number.
   *
   *     var cups = '2 cups please';
   *     assert.isNotNumber(cups, 'how many cups');
   *
   * @name isNotNumber
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNotNumber = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("number");
            };
            /**
   * ### .isBoolean(value, [message])
   *
   * Asserts that `value` is a boolean.
   *
   *     var teaReady = true
   *       , teaServed = false;
   *
   *     assert.isBoolean(teaReady, 'is the tea ready');
   *     assert.isBoolean(teaServed, 'has tea been served');
   *
   * @name isBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isBoolean = function(val, msg) {
                new Assertion(val, msg).to.be.a("boolean");
            };
            /**
   * ### .isNotBoolean(value, [message])
   *
   * Asserts that `value` is _not_ a boolean.
   *
   *     var teaReady = 'yep'
   *       , teaServed = 'nope';
   *
   *     assert.isNotBoolean(teaReady, 'is the tea ready');
   *     assert.isNotBoolean(teaServed, 'has tea been served');
   *
   * @name isNotBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.isNotBoolean = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("boolean");
            };
            /**
   * ### .typeOf(value, name, [message])
   *
   * Asserts that `value`'s type is `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
   *     assert.typeOf('tea', 'string', 'we have a string');
   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
   *     assert.typeOf(null, 'null', 'we have a null');
   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
   *
   * @name typeOf
   * @param {Mixed} value
   * @param {String} name
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.typeOf = function(val, type, msg) {
                new Assertion(val, msg).to.be.a(type);
            };
            /**
   * ### .notTypeOf(value, name, [message])
   *
   * Asserts that `value`'s type is _not_ `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
   *
   * @name notTypeOf
   * @param {Mixed} value
   * @param {String} typeof name
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.notTypeOf = function(val, type, msg) {
                new Assertion(val, msg).to.not.be.a(type);
            };
            /**
   * ### .instanceOf(object, constructor, [message])
   *
   * Asserts that `value` is an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new Tea('chai');
   *
   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
   *
   * @name instanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.instanceOf = function(val, type, msg) {
                new Assertion(val, msg).to.be.instanceOf(type);
            };
            /**
   * ### .notInstanceOf(object, constructor, [message])
   *
   * Asserts `value` is not an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new String('chai');
   *
   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
   *
   * @name notInstanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.notInstanceOf = function(val, type, msg) {
                new Assertion(val, msg).to.not.be.instanceOf(type);
            };
            /**
   * ### .include(haystack, needle, [message])
   *
   * Asserts that `haystack` includes `needle`. Works
   * for strings and arrays.
   *
   *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
   *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
   *
   * @name include
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.include = function(exp, inc, msg) {
                new Assertion(exp, msg, assert.include).include(inc);
            };
            /**
   * ### .notInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` does not include `needle`. Works
   * for strings and arrays.
   *
   *     assert.notInclude('foobar', 'baz', 'string not include substring');
   *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
   *
   * @name notInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.notInclude = function(exp, inc, msg) {
                new Assertion(exp, msg, assert.notInclude).not.include(inc);
            };
            /**
   * ### .match(value, regexp, [message])
   *
   * Asserts that `value` matches the regular expression `regexp`.
   *
   *     assert.match('foobar', /^foo/, 'regexp matches');
   *
   * @name match
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.match = function(exp, re, msg) {
                new Assertion(exp, msg).to.match(re);
            };
            /**
   * ### .notMatch(value, regexp, [message])
   *
   * Asserts that `value` does not match the regular expression `regexp`.
   *
   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
   *
   * @name notMatch
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.notMatch = function(exp, re, msg) {
                new Assertion(exp, msg).to.not.match(re);
            };
            /**
   * ### .property(object, property, [message])
   *
   * Asserts that `object` has a property named by `property`.
   *
   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
   *
   * @name property
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.property = function(obj, prop, msg) {
                new Assertion(obj, msg).to.have.property(prop);
            };
            /**
   * ### .notProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property`.
   *
   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
   *
   * @name notProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.notProperty = function(obj, prop, msg) {
                new Assertion(obj, msg).to.not.have.property(prop);
            };
            /**
   * ### .deepProperty(object, property, [message])
   *
   * Asserts that `object` has a property named by `property`, which can be a
   * string using dot- and bracket-notation for deep reference.
   *
   *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
   *
   * @name deepProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.deepProperty = function(obj, prop, msg) {
                new Assertion(obj, msg).to.have.deep.property(prop);
            };
            /**
   * ### .notDeepProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property`, which
   * can be a string using dot- and bracket-notation for deep reference.
   *
   *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
   *
   * @name notDeepProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.notDeepProperty = function(obj, prop, msg) {
                new Assertion(obj, msg).to.not.have.deep.property(prop);
            };
            /**
   * ### .propertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with value given
   * by `value`.
   *
   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
   *
   * @name propertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.propertyVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.have.property(prop, val);
            };
            /**
   * ### .propertyNotVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property`, but with a value
   * different from that given by `value`.
   *
   *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
   *
   * @name propertyNotVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.propertyNotVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.not.have.property(prop, val);
            };
            /**
   * ### .deepPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with value given
   * by `value`. `property` can use dot- and bracket-notation for deep
   * reference.
   *
   *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
   *
   * @name deepPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.deepPropertyVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.have.deep.property(prop, val);
            };
            /**
   * ### .deepPropertyNotVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property`, but with a value
   * different from that given by `value`. `property` can use dot- and
   * bracket-notation for deep reference.
   *
   *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
   *
   * @name deepPropertyNotVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.deepPropertyNotVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.not.have.deep.property(prop, val);
            };
            /**
   * ### .lengthOf(object, length, [message])
   *
   * Asserts that `object` has a `length` property with the expected value.
   *
   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
   *     assert.lengthOf('foobar', 6, 'string has length of 6');
   *
   * @name lengthOf
   * @param {Mixed} object
   * @param {Number} length
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.lengthOf = function(exp, len, msg) {
                new Assertion(exp, msg).to.have.length(len);
            };
            /**
   * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
   *
   * Asserts that `function` will throw an error that is an instance of
   * `constructor`, or alternately that it will throw an error with message
   * matching `regexp`.
   *
   *     assert.throws(fn, 'function throws a reference error');
   *     assert.throws(fn, /function throws a reference error/);
   *     assert.throws(fn, ReferenceError);
   *     assert.throws(fn, ReferenceError, 'function throws a reference error');
   *     assert.throws(fn, ReferenceError, /function throws a reference error/);
   *
   * @name throws
   * @alias throw
   * @alias Throw
   * @param {Function} function
   * @param {ErrorConstructor} constructor
   * @param {RegExp} regexp
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Assert
   * @api public
   */
            assert.throws = function(fn, errt, errs, msg) {
                if ("string" === typeof errt || errt instanceof RegExp) {
                    errs = errt;
                    errt = null;
                }
                var assertErr = new Assertion(fn, msg).to.throw(errt, errs);
                return flag(assertErr, "object");
            };
            /**
   * ### .doesNotThrow(function, [constructor/regexp], [message])
   *
   * Asserts that `function` will _not_ throw an error that is an instance of
   * `constructor`, or alternately that it will not throw an error with message
   * matching `regexp`.
   *
   *     assert.doesNotThrow(fn, Error, 'function does not throw');
   *
   * @name doesNotThrow
   * @param {Function} function
   * @param {ErrorConstructor} constructor
   * @param {RegExp} regexp
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Assert
   * @api public
   */
            assert.doesNotThrow = function(fn, type, msg) {
                if ("string" === typeof type) {
                    msg = type;
                    type = null;
                }
                new Assertion(fn, msg).to.not.Throw(type);
            };
            /**
   * ### .operator(val1, operator, val2, [message])
   *
   * Compares two values using `operator`.
   *
   *     assert.operator(1, '<', 2, 'everything is ok');
   *     assert.operator(1, '>', 2, 'this will fail');
   *
   * @name operator
   * @param {Mixed} val1
   * @param {String} operator
   * @param {Mixed} val2
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.operator = function(val, operator, val2, msg) {
                var ok;
                switch (operator) {
                  case "==":
                    ok = val == val2;
                    break;

                  case "===":
                    ok = val === val2;
                    break;

                  case ">":
                    ok = val > val2;
                    break;

                  case ">=":
                    ok = val >= val2;
                    break;

                  case "<":
                    ok = val < val2;
                    break;

                  case "<=":
                    ok = val <= val2;
                    break;

                  case "!=":
                    ok = val != val2;
                    break;

                  case "!==":
                    ok = val !== val2;
                    break;

                  default:
                    throw new Error('Invalid operator "' + operator + '"');
                }
                var test = new Assertion(ok, msg);
                test.assert(true === flag(test, "object"), "expected " + util.inspect(val) + " to be " + operator + " " + util.inspect(val2), "expected " + util.inspect(val) + " to not be " + operator + " " + util.inspect(val2));
            };
            /**
   * ### .closeTo(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
   *
   * @name closeTo
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.closeTo = function(act, exp, delta, msg) {
                new Assertion(act, msg).to.be.closeTo(exp, delta);
            };
            /**
   * ### .approximately(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
   *
   * @name approximately
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.approximately = function(act, exp, delta, msg) {
                new Assertion(act, msg).to.be.approximately(exp, delta);
            };
            /**
   * ### .sameMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members.
   * Order is not taken into account.
   *
   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
   *
   * @name sameMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.sameMembers = function(set1, set2, msg) {
                new Assertion(set1, msg).to.have.same.members(set2);
            };
            /**
   * ### .sameDeepMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members - using a deep equality checking.
   * Order is not taken into account.
   *
   *     assert.sameDeepMembers([ {b: 3}, {a: 2}, {c: 5} ], [ {c: 5}, {b: 3}, {a: 2} ], 'same deep members');
   *
   * @name sameDeepMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.sameDeepMembers = function(set1, set2, msg) {
                new Assertion(set1, msg).to.have.same.deep.members(set2);
            };
            /**
   * ### .includeMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset`.
   * Order is not taken into account.
   *
   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
   *
   * @name includeMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.includeMembers = function(superset, subset, msg) {
                new Assertion(superset, msg).to.include.members(subset);
            };
            /**
   * ### .includeDeepMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` - using deep equality checking.
   * Order is not taken into account.
   * Duplicates are ignored.
   *
   *     assert.includeDeepMembers([ {a: 1}, {b: 2}, {c: 3} ], [ {b: 2}, {a: 1}, {b: 2} ], 'include deep members');
   *
   * @name includeDeepMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.includeDeepMembers = function(superset, subset, msg) {
                new Assertion(superset, msg).to.include.deep.members(subset);
            };
            /**
   * ### .oneOf(inList, list, [message])
   *
   * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
   *
   *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
   *
   * @name oneOf
   * @param {*} inList
   * @param {Array<*>} list
   * @param {String} message
   * @namespace Assert
   * @api public
   */
            assert.oneOf = function(inList, list, msg) {
                new Assertion(inList, msg).to.be.oneOf(list);
            };
            /**
  * ### .changes(function, object, property)
  *
  * Asserts that a function changes the value of a property
  *
  *     var obj = { val: 10 };
  *     var fn = function() { obj.val = 22 };
  *     assert.changes(fn, obj, 'val');
  *
  * @name changes
  * @param {Function} modifier function
  * @param {Object} object
  * @param {String} property name
  * @param {String} message _optional_
  * @namespace Assert
  * @api public
  */
            assert.changes = function(fn, obj, prop) {
                new Assertion(fn).to.change(obj, prop);
            };
            /**
  * ### .doesNotChange(function, object, property)
  *
  * Asserts that a function does not changes the value of a property
  *
  *     var obj = { val: 10 };
  *     var fn = function() { console.log('foo'); };
  *     assert.doesNotChange(fn, obj, 'val');
  *
  * @name doesNotChange
  * @param {Function} modifier function
  * @param {Object} object
  * @param {String} property name
  * @param {String} message _optional_
  * @namespace Assert
  * @api public
  */
            assert.doesNotChange = function(fn, obj, prop) {
                new Assertion(fn).to.not.change(obj, prop);
            };
            /**
  * ### .increases(function, object, property)
  *
  * Asserts that a function increases an object property
  *
  *     var obj = { val: 10 };
  *     var fn = function() { obj.val = 13 };
  *     assert.increases(fn, obj, 'val');
  *
  * @name increases
  * @param {Function} modifier function
  * @param {Object} object
  * @param {String} property name
  * @param {String} message _optional_
  * @namespace Assert
  * @api public
  */
            assert.increases = function(fn, obj, prop) {
                new Assertion(fn).to.increase(obj, prop);
            };
            /**
  * ### .doesNotIncrease(function, object, property)
  *
  * Asserts that a function does not increase object property
  *
  *     var obj = { val: 10 };
  *     var fn = function() { obj.val = 8 };
  *     assert.doesNotIncrease(fn, obj, 'val');
  *
  * @name doesNotIncrease
  * @param {Function} modifier function
  * @param {Object} object
  * @param {String} property name
  * @param {String} message _optional_
  * @namespace Assert
  * @api public
  */
            assert.doesNotIncrease = function(fn, obj, prop) {
                new Assertion(fn).to.not.increase(obj, prop);
            };
            /**
  * ### .decreases(function, object, property)
  *
  * Asserts that a function decreases an object property
  *
  *     var obj = { val: 10 };
  *     var fn = function() { obj.val = 5 };
  *     assert.decreases(fn, obj, 'val');
  *
  * @name decreases
  * @param {Function} modifier function
  * @param {Object} object
  * @param {String} property name
  * @param {String} message _optional_
  * @namespace Assert
  * @api public
  */
            assert.decreases = function(fn, obj, prop) {
                new Assertion(fn).to.decrease(obj, prop);
            };
            /**
  * ### .doesNotDecrease(function, object, property)
  *
  * Asserts that a function does not decreases an object property
  *
  *     var obj = { val: 10 };
  *     var fn = function() { obj.val = 15 };
  *     assert.doesNotDecrease(fn, obj, 'val');
  *
  * @name doesNotDecrease
  * @param {Function} modifier function
  * @param {Object} object
  * @param {String} property name
  * @param {String} message _optional_
  * @namespace Assert
  * @api public
  */
            assert.doesNotDecrease = function(fn, obj, prop) {
                new Assertion(fn).to.not.decrease(obj, prop);
            };
            /*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */
            assert.ifError = function(val) {
                if (val) {
                    throw val;
                }
            };
            /**
   * ### .isExtensible(object)
   *
   * Asserts that `object` is extensible (can have new properties added to it).
   *
   *     assert.isExtensible({});
   *
   * @name isExtensible
   * @alias extensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */
            assert.isExtensible = function(obj, msg) {
                new Assertion(obj, msg).to.be.extensible;
            };
            /**
   * ### .isNotExtensible(object)
   *
   * Asserts that `object` is _not_ extensible.
   *
   *     var nonExtensibleObject = Object.preventExtensions({});
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freese({});
   *
   *     assert.isNotExtensible(nonExtensibleObject);
   *     assert.isNotExtensible(sealedObject);
   *     assert.isNotExtensible(frozenObject);
   *
   * @name isNotExtensible
   * @alias notExtensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */
            assert.isNotExtensible = function(obj, msg) {
                new Assertion(obj, msg).to.not.be.extensible;
            };
            /**
   * ### .isSealed(object)
   *
   * Asserts that `object` is sealed (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.seal({});
   *
   *     assert.isSealed(sealedObject);
   *     assert.isSealed(frozenObject);
   *
   * @name isSealed
   * @alias sealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */
            assert.isSealed = function(obj, msg) {
                new Assertion(obj, msg).to.be.sealed;
            };
            /**
   * ### .isNotSealed(object)
   *
   * Asserts that `object` is _not_ sealed.
   *
   *     assert.isNotSealed({});
   *
   * @name isNotSealed
   * @alias notSealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */
            assert.isNotSealed = function(obj, msg) {
                new Assertion(obj, msg).to.not.be.sealed;
            };
            /**
   * ### .isFrozen(object)
   *
   * Asserts that `object` is frozen (cannot have new properties added to it
   * and its existing properties cannot be modified).
   *
   *     var frozenObject = Object.freeze({});
   *     assert.frozen(frozenObject);
   *
   * @name isFrozen
   * @alias frozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */
            assert.isFrozen = function(obj, msg) {
                new Assertion(obj, msg).to.be.frozen;
            };
            /**
   * ### .isNotFrozen(object)
   *
   * Asserts that `object` is _not_ frozen.
   *
   *     assert.isNotFrozen({});
   *
   * @name isNotFrozen
   * @alias notFrozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */
            assert.isNotFrozen = function(obj, msg) {
                new Assertion(obj, msg).to.not.be.frozen;
            };
            /*!
   * Aliases.
   */
            (function alias(name, as) {
                assert[as] = assert[name];
                return alias;
            })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen");
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        module.exports = function(chai, util) {
            chai.expect = function(val, message) {
                return new chai.Assertion(val, message);
            };
            /**
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure.
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace Expect
   * @api public
   */
            chai.expect.fail = function(actual, expected, message, operator) {
                message = message || "expect.fail()";
                throw new chai.AssertionError(message, {
                    actual: actual,
                    expected: expected,
                    operator: operator
                }, chai.expect.fail);
            };
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        module.exports = function(chai, util) {
            var Assertion = chai.Assertion;
            function loadShould() {
                // explicitly define this method as function as to have it's name to include as `ssfi`
                function shouldGetter() {
                    if (this instanceof String || this instanceof Number || this instanceof Boolean) {
                        return new Assertion(this.valueOf(), null, shouldGetter);
                    }
                    return new Assertion(this, null, shouldGetter);
                }
                function shouldSetter(value) {
                    // See https://github.com/chaijs/chai/issues/86: this makes
                    // `whatever.should = someValue` actually set `someValue`, which is
                    // especially useful for `global.should = require('chai').should()`.
                    // Note that we have to use [[DefineProperty]] instead of [[Put]]
                    // since otherwise we would trigger this very setter!
                    Object.defineProperty(this, "should", {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                }
                // modify Object.prototype to have `should`
                Object.defineProperty(Object.prototype, "should", {
                    set: shouldSetter,
                    get: shouldGetter,
                    configurable: true
                });
                var should = {};
                /**
     * ### .fail(actual, expected, [message], [operator])
     *
     * Throw a failure.
     *
     * @name fail
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @param {String} operator
     * @namespace Should
     * @api public
     */
                should.fail = function(actual, expected, message, operator) {
                    message = message || "should.fail()";
                    throw new chai.AssertionError(message, {
                        actual: actual,
                        expected: expected,
                        operator: operator
                    }, should.fail);
                };
                /**
     * ### .equal(actual, expected, [message])
     *
     * Asserts non-strict equality (`==`) of `actual` and `expected`.
     *
     *     should.equal(3, '3', '== coerces values to strings');
     *
     * @name equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */
                should.equal = function(val1, val2, msg) {
                    new Assertion(val1, msg).to.equal(val2);
                };
                /**
     * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
     *
     * Asserts that `function` will throw an error that is an instance of
     * `constructor`, or alternately that it will throw an error with message
     * matching `regexp`.
     *
     *     should.throw(fn, 'function throws a reference error');
     *     should.throw(fn, /function throws a reference error/);
     *     should.throw(fn, ReferenceError);
     *     should.throw(fn, ReferenceError, 'function throws a reference error');
     *     should.throw(fn, ReferenceError, /function throws a reference error/);
     *
     * @name throw
     * @alias Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */
                should.Throw = function(fn, errt, errs, msg) {
                    new Assertion(fn, msg).to.Throw(errt, errs);
                };
                /**
     * ### .exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var foo = 'hi';
     *
     *     should.exist(foo, 'foo exists');
     *
     * @name exist
     * @namespace Should
     * @api public
     */
                should.exist = function(val, msg) {
                    new Assertion(val, msg).to.exist;
                };
                // negation
                should.not = {};
                /**
     * ### .not.equal(actual, expected, [message])
     *
     * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
     *
     *     should.not.equal(3, 4, 'these numbers are not equal');
     *
     * @name not.equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */
                should.not.equal = function(val1, val2, msg) {
                    new Assertion(val1, msg).to.not.equal(val2);
                };
                /**
     * ### .throw(function, [constructor/regexp], [message])
     *
     * Asserts that `function` will _not_ throw an error that is an instance of
     * `constructor`, or alternately that it will not throw an error with message
     * matching `regexp`.
     *
     *     should.not.throw(fn, Error, 'function does not throw');
     *
     * @name not.throw
     * @alias not.Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */
                should.not.Throw = function(fn, errt, errs, msg) {
                    new Assertion(fn, msg).to.not.Throw(errt, errs);
                };
                /**
     * ### .not.exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var bar = null;
     *
     *     should.not.exist(bar, 'bar does not exist');
     *
     * @name not.exist
     * @namespace Should
     * @api public
     */
                should.not.exist = function(val, msg) {
                    new Assertion(val, msg).to.not.exist;
                };
                should["throw"] = should["Throw"];
                should.not["throw"] = should.not["Throw"];
                return should;
            }
            chai.should = loadShould;
            chai.Should = loadShould;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /*!
 * Module dependencies
 */
        var transferFlags = __webpack_require__(30);
        var flag = __webpack_require__(5);
        var config = __webpack_require__(6);
        /*!
 * Module variables
 */
        // Check whether `__proto__` is supported
        var hasProtoSupport = "__proto__" in Object;
        // Without `__proto__` support, this module will need to add properties to a function.
        // However, some Function.prototype methods cannot be overwritten,
        // and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
        var excludeNames = /^(?:length|name|arguments|caller)$/;
        // Cache `Function` properties
        var call = Function.prototype.call, apply = Function.prototype.apply;
        /**
 * ### addChainableMethod (ctx, name, method, chainingBehavior)
 *
 * Adds a method to an object, such that the method can also be chained.
 *
 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
 *
 * The result can then be used as both a method assertion, executing both `method` and
 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
 *
 *     expect(fooStr).to.be.foo('bar');
 *     expect(fooStr).to.be.foo.equal('foo');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for `name`, when called
 * @param {Function} chainingBehavior function to be called every time the property is accessed
 * @namespace Utils
 * @name addChainableMethod
 * @api public
 */
        module.exports = function(ctx, name, method, chainingBehavior) {
            if (typeof chainingBehavior !== "function") {
                chainingBehavior = function chainingBehavior() {};
            }
            var chainableBehavior = {
                method: method,
                chainingBehavior: chainingBehavior
            };
            // save the methods so we can overwrite them later, if we need to.
            if (!ctx.__methods) {
                ctx.__methods = {};
            }
            ctx.__methods[name] = chainableBehavior;
            Object.defineProperty(ctx, name, {
                get: function get() {
                    chainableBehavior.chainingBehavior.call(this);
                    var assert = function assert() {
                        var old_ssfi = flag(this, "ssfi");
                        if (old_ssfi && config.includeStack === false) flag(this, "ssfi", assert);
                        var result = chainableBehavior.method.apply(this, arguments);
                        return result === undefined ? this : result;
                    };
                    // Use `__proto__` if available
                    if (hasProtoSupport) {
                        // Inherit all properties from the object by replacing the `Function` prototype
                        var prototype = assert.__proto__ = Object.create(this);
                        // Restore the `call` and `apply` methods from `Function`
                        prototype.call = call;
                        prototype.apply = apply;
                    } else {
                        var asserterNames = Object.getOwnPropertyNames(ctx);
                        asserterNames.forEach(function(asserterName) {
                            if (!excludeNames.test(asserterName)) {
                                var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
                                Object.defineProperty(assert, asserterName, pd);
                            }
                        });
                    }
                    transferFlags(this, assert);
                    return assert;
                },
                configurable: true
            });
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        var config = __webpack_require__(6);
        /**
 * ### .addMethod (ctx, name, method)
 *
 * Adds a method to the prototype of an object.
 *
 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(fooStr).to.be.foo('bar');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for name
 * @namespace Utils
 * @name addMethod
 * @api public
 */
        var flag = __webpack_require__(5);
        module.exports = function(ctx, name, method) {
            ctx[name] = function() {
                var old_ssfi = flag(this, "ssfi");
                if (old_ssfi && config.includeStack === false) flag(this, "ssfi", ctx[name]);
                var result = method.apply(this, arguments);
                return result === undefined ? this : result;
            };
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        var config = __webpack_require__(6);
        var flag = __webpack_require__(5);
        /**
 * ### addProperty (ctx, name, getter)
 *
 * Adds a property to the prototype of an object.
 *
 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.instanceof(Foo);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.foo;
 *
 * @param {Object} ctx object to which the property is added
 * @param {String} name of property to add
 * @param {Function} getter function to be used for name
 * @namespace Utils
 * @name addProperty
 * @api public
 */
        module.exports = function(ctx, name, getter) {
            Object.defineProperty(ctx, name, {
                get: function addProperty() {
                    var old_ssfi = flag(this, "ssfi");
                    if (old_ssfi && config.includeStack === false) flag(this, "ssfi", addProperty);
                    var result = getter.call(this);
                    return result === undefined ? this : result;
                },
                configurable: true
            });
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /**
 * ### expectTypes(obj, types)
 *
 * Ensures that the object being tested against is of a valid type.
 *
 *     utils.expectTypes(this, ['array', 'object', 'string']);
 *
 * @param {Mixed} obj constructed Assertion
 * @param {Array} type A list of allowed types for this assertion
 * @namespace Utils
 * @name expectTypes
 * @api public
 */
        var AssertionError = __webpack_require__(24);
        var flag = __webpack_require__(5);
        var type = __webpack_require__(17);
        module.exports = function(obj, types) {
            var obj = flag(obj, "object");
            types = types.map(function(t) {
                return t.toLowerCase();
            });
            types.sort();
            // Transforms ['lorem', 'ipsum'] into 'a lirum, or an ipsum'
            var str = types.map(function(t, index) {
                var art = ~[ "a", "e", "i", "o", "u" ].indexOf(t.charAt(0)) ? "an" : "a";
                var or = types.length > 1 && index === types.length - 1 ? "or " : "";
                return or + art + " " + t;
            }).join(", ");
            if (!types.some(function(expected) {
                return type(obj) === expected;
            })) {
                throw new AssertionError("object tested must be " + str + ", but " + type(obj) + " given");
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /**
 * ### .getEnumerableProperties(object)
 *
 * This allows the retrieval of enumerable property names of an object,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getEnumerableProperties
 * @api public
 */
        module.exports = function getEnumerableProperties(object) {
            var result = [];
            for (var name in object) {
                result.push(name);
            }
            return result;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /*!
 * Module dependancies
 */
        var flag = __webpack_require__(5), getActual = __webpack_require__(25), inspect = __webpack_require__(16), objDisplay = __webpack_require__(29);
        /**
 * ### .getMessage(object, message, negateMessage)
 *
 * Construct the error message based on flags
 * and template tags. Template tags will return
 * a stringified inspection of the object referenced.
 *
 * Message template tags:
 * - `#{this}` current asserted object
 * - `#{act}` actual value
 * - `#{exp}` expected value
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getMessage
 * @api public
 */
        module.exports = function(obj, args) {
            var negate = flag(obj, "negate"), val = flag(obj, "object"), expected = args[3], actual = getActual(obj, args), msg = negate ? args[2] : args[1], flagMsg = flag(obj, "message");
            if (typeof msg === "function") msg = msg();
            msg = msg || "";
            msg = msg.replace(/#\{this\}/g, function() {
                return objDisplay(val);
            }).replace(/#\{act\}/g, function() {
                return objDisplay(actual);
            }).replace(/#\{exp\}/g, function() {
                return objDisplay(expected);
            });
            return flagMsg ? flagMsg + ": " + msg : msg;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - getPathValue utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */
        var getPathInfo = __webpack_require__(27);
        /**
 * ### .getPathValue(path, object)
 *
 * This allows the retrieval of values in an
 * object given a string path.
 *
 *     var obj = {
 *         prop1: {
 *             arr: ['a', 'b', 'c']
 *           , str: 'Hello'
 *         }
 *       , prop2: {
 *             arr: [ { nested: 'Universe' } ]
 *           , str: 'Hello again!'
 *         }
 *     }
 *
 * The following would be the results.
 *
 *     getPathValue('prop1.str', obj); // Hello
 *     getPathValue('prop1.att[2]', obj); // b
 *     getPathValue('prop2.arr[0].nested', obj); // Universe
 *
 * @param {String} path
 * @param {Object} object
 * @returns {Object} value or `undefined`
 * @namespace Utils
 * @name getPathValue
 * @api public
 */
        module.exports = function(path, obj) {
            var info = getPathInfo(path, obj);
            return info.value;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /**
 * ### .getProperties(object)
 *
 * This allows the retrieval of property names of an object, enumerable or not,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getProperties
 * @api public
 */
        module.exports = function getProperties(object) {
            var result = Object.getOwnPropertyNames(object);
            function addProperty(property) {
                if (result.indexOf(property) === -1) {
                    result.push(property);
                }
            }
            var proto = Object.getPrototypeOf(object);
            while (proto !== null) {
                Object.getOwnPropertyNames(proto).forEach(addProperty);
                proto = Object.getPrototypeOf(proto);
            }
            return result;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /*!
 * Main exports
 */
        var _exports = module.exports = {};
        /*!
 * test utility
 */
        _exports.test = __webpack_require__(54);
        /*!
 * type utility
 */
        _exports.type = __webpack_require__(17);
        /*!
 * expectTypes utility
 */
        _exports.expectTypes = __webpack_require__(45);
        /*!
 * message utility
 */
        _exports.getMessage = __webpack_require__(47);
        /*!
 * actual utility
 */
        _exports.getActual = __webpack_require__(25);
        /*!
 * Inspect util
 */
        _exports.inspect = __webpack_require__(16);
        /*!
 * Object Display util
 */
        _exports.objDisplay = __webpack_require__(29);
        /*!
 * Flag utility
 */
        _exports.flag = __webpack_require__(5);
        /*!
 * Flag transferring utility
 */
        _exports.transferFlags = __webpack_require__(30);
        /*!
 * Deep equal utility
 */
        _exports.eql = __webpack_require__(55);
        /*!
 * Deep path value
 */
        _exports.getPathValue = __webpack_require__(48);
        /*!
 * Deep path info
 */
        _exports.getPathInfo = __webpack_require__(27);
        /*!
 * Check if a property exists
 */
        _exports.hasProperty = __webpack_require__(28);
        /*!
 * Function name
 */
        _exports.getName = __webpack_require__(26);
        /*!
 * add Property
 */
        _exports.addProperty = __webpack_require__(44);
        /*!
 * add Method
 */
        _exports.addMethod = __webpack_require__(43);
        /*!
 * overwrite Property
 */
        _exports.overwriteProperty = __webpack_require__(53);
        /*!
 * overwrite Method
 */
        _exports.overwriteMethod = __webpack_require__(52);
        /*!
 * Add a chainable method
 */
        _exports.addChainableMethod = __webpack_require__(42);
        /*!
 * Overwrite chainable method
 */
        _exports.overwriteChainableMethod = __webpack_require__(51);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /**
 * ### overwriteChainableMethod (ctx, name, method, chainingBehavior)
 *
 * Overwites an already existing chainable method
 * and provides access to the previous function or
 * property.  Must return functions to be used for
 * name.
 *
 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
 *       function (_super) {
 *       }
 *     , function (_super) {
 *       }
 *     );
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.have.length(3);
 *     expect(myFoo).to.have.length.above(3);
 *
 * @param {Object} ctx object whose method / property is to be overwritten
 * @param {String} name of method / property to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @param {Function} chainingBehavior function that returns a function to be used for property
 * @namespace Utils
 * @name overwriteChainableMethod
 * @api public
 */
        module.exports = function(ctx, name, method, chainingBehavior) {
            var chainableBehavior = ctx.__methods[name];
            var _chainingBehavior = chainableBehavior.chainingBehavior;
            chainableBehavior.chainingBehavior = function() {
                var result = chainingBehavior(_chainingBehavior).call(this);
                return result === undefined ? this : result;
            };
            var _method = chainableBehavior.method;
            chainableBehavior.method = function() {
                var result = method(_method).apply(this, arguments);
                return result === undefined ? this : result;
            };
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /**
 * ### overwriteMethod (ctx, name, fn)
 *
 * Overwites an already existing method and provides
 * access to previous function. Must return function
 * to be used for name.
 *
 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
 *       return function (str) {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.value).to.equal(str);
 *         } else {
 *           _super.apply(this, arguments);
 *         }
 *       }
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.equal('bar');
 *
 * @param {Object} ctx object whose method is to be overwritten
 * @param {String} name of method to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @namespace Utils
 * @name overwriteMethod
 * @api public
 */
        module.exports = function(ctx, name, method) {
            var _method = ctx[name], _super = function _super() {
                return this;
            };
            if (_method && "function" === typeof _method) _super = _method;
            ctx[name] = function() {
                var result = method(_super).apply(this, arguments);
                return result === undefined ? this : result;
            };
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /**
 * ### overwriteProperty (ctx, name, fn)
 *
 * Overwites an already existing property getter and provides
 * access to previous value. Must return function to use as getter.
 *
 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
 *       return function () {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.name).to.equal('bar');
 *         } else {
 *           _super.call(this);
 *         }
 *       }
 *     });
 *
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.ok;
 *
 * @param {Object} ctx object whose property is to be overwritten
 * @param {String} name of property to overwrite
 * @param {Function} getter function that returns a getter function to be used for name
 * @namespace Utils
 * @name overwriteProperty
 * @api public
 */
        module.exports = function(ctx, name, getter) {
            var _get = Object.getOwnPropertyDescriptor(ctx, name), _super = function _super() {};
            if (_get && "function" === typeof _get.get) _super = _get.get;
            Object.defineProperty(ctx, name, {
                get: function get() {
                    var result = getter(_super).call(this);
                    return result === undefined ? this : result;
                },
                configurable: true
            });
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /*!
 * Module dependancies
 */
        var flag = __webpack_require__(5);
        /**
 * # test(object, expression)
 *
 * Test and object for expression.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name test
 */
        module.exports = function(obj, args) {
            var negate = flag(obj, "negate"), expr = args[0];
            return negate ? !expr : expr;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(56);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /*!
 * Module dependencies
 */
        var type = __webpack_require__(57);
        /*!
 * Buffer.isBuffer browser shim
 */
        var Buffer;
        try {
            Buffer = __webpack_require__(34).Buffer;
        } catch (ex) {
            Buffer = {};
            Buffer.isBuffer = function() {
                return false;
            };
        }
        /*!
 * Primary Export
 */
        module.exports = deepEqual;
        /**
 * Assert super-strict (egal) equality between
 * two objects of any type.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @param {Array} memoised (optional)
 * @return {Boolean} equal match
 */
        function deepEqual(a, b, m) {
            if (sameValue(a, b)) {
                return true;
            } else if ("date" === type(a)) {
                return dateEqual(a, b);
            } else if ("regexp" === type(a)) {
                return regexpEqual(a, b);
            } else if (Buffer.isBuffer(a)) {
                return bufferEqual(a, b);
            } else if ("arguments" === type(a)) {
                return argumentsEqual(a, b, m);
            } else if (!typeEqual(a, b)) {
                return false;
            } else if ("object" !== type(a) && "object" !== type(b) && "array" !== type(a) && "array" !== type(b)) {
                return sameValue(a, b);
            } else {
                return objectEqual(a, b, m);
            }
        }
        /*!
 * Strict (egal) equality test. Ensures that NaN always
 * equals NaN and `-0` does not equal `+0`.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} equal match
 */
        function sameValue(a, b) {
            if (a === b) return a !== 0 || 1 / a === 1 / b;
            return a !== a && b !== b;
        }
        /*!
 * Compare the types of two given objects and
 * return if they are equal. Note that an Array
 * has a type of `array` (not `object`) and arguments
 * have a type of `arguments` (not `array`/`object`).
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
        function typeEqual(a, b) {
            return type(a) === type(b);
        }
        /*!
 * Compare two Date objects by asserting that
 * the time values are equal using `saveValue`.
 *
 * @param {Date} a
 * @param {Date} b
 * @return {Boolean} result
 */
        function dateEqual(a, b) {
            if ("date" !== type(b)) return false;
            return sameValue(a.getTime(), b.getTime());
        }
        /*!
 * Compare two regular expressions by converting them
 * to string and checking for `sameValue`.
 *
 * @param {RegExp} a
 * @param {RegExp} b
 * @return {Boolean} result
 */
        function regexpEqual(a, b) {
            if ("regexp" !== type(b)) return false;
            return sameValue(a.toString(), b.toString());
        }
        /*!
 * Assert deep equality of two `arguments` objects.
 * Unfortunately, these must be sliced to arrays
 * prior to test to ensure no bad behavior.
 *
 * @param {Arguments} a
 * @param {Arguments} b
 * @param {Array} memoize (optional)
 * @return {Boolean} result
 */
        function argumentsEqual(a, b, m) {
            if ("arguments" !== type(b)) return false;
            a = [].slice.call(a);
            b = [].slice.call(b);
            return deepEqual(a, b, m);
        }
        /*!
 * Get enumerable properties of a given object.
 *
 * @param {Object} a
 * @return {Array} property names
 */
        function enumerable(a) {
            var res = [];
            for (var key in a) {
                res.push(key);
            }
            return res;
        }
        /*!
 * Simple equality for flat iterable objects
 * such as Arrays or Node.js buffers.
 *
 * @param {Iterable} a
 * @param {Iterable} b
 * @return {Boolean} result
 */
        function iterableEqual(a, b) {
            if (a.length !== b.length) return false;
            var i = 0;
            var match = true;
            for (;i < a.length; i++) {
                if (a[i] !== b[i]) {
                    match = false;
                    break;
                }
            }
            return match;
        }
        /*!
 * Extension to `iterableEqual` specifically
 * for Node.js Buffers.
 *
 * @param {Buffer} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
        function bufferEqual(a, b) {
            if (!Buffer.isBuffer(b)) return false;
            return iterableEqual(a, b);
        }
        /*!
 * Block for `objectEqual` ensuring non-existing
 * values don't get in.
 *
 * @param {Mixed} object
 * @return {Boolean} result
 */
        function isValue(a) {
            return a !== null && a !== undefined;
        }
        /*!
 * Recursively check the equality of two objects.
 * Once basic sameness has been established it will
 * defer to `deepEqual` for each enumerable key
 * in the object.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
        function objectEqual(a, b, m) {
            if (!isValue(a) || !isValue(b)) {
                return false;
            }
            if (a.prototype !== b.prototype) {
                return false;
            }
            var i;
            if (m) {
                for (i = 0; i < m.length; i++) {
                    if (m[i][0] === a && m[i][1] === b || m[i][0] === b && m[i][1] === a) {
                        return true;
                    }
                }
            } else {
                m = [];
            }
            try {
                var ka = enumerable(a);
                var kb = enumerable(b);
            } catch (ex) {
                return false;
            }
            ka.sort();
            kb.sort();
            if (!iterableEqual(ka, kb)) {
                return false;
            }
            m.push([ a, b ]);
            var key;
            for (i = ka.length - 1; i >= 0; i--) {
                key = ka[i];
                if (!deepEqual(a[key], b[key], m)) {
                    return false;
                }
            }
            return true;
        }
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(58);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        /*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /*!
 * Primary Exports
 */
        var _exports = module.exports = getType;
        /*!
 * Detectable javascript natives
 */
        var natives = {
            "[object Array]": "array",
            "[object RegExp]": "regexp",
            "[object Function]": "function",
            "[object Arguments]": "arguments",
            "[object Date]": "date"
        };
        /**
 * ### typeOf (obj)
 *
 * Use several different techniques to determine
 * the type of object being tested.
 *
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
        function getType(obj) {
            var str = Object.prototype.toString.call(obj);
            if (natives[str]) return natives[str];
            if (obj === null) return "null";
            if (obj === undefined) return "undefined";
            if (obj === Object(obj)) return "object";
            return typeof obj === "undefined" ? "undefined" : _typeof(obj);
        }
        _exports.Library = Library;
        /**
 * ### Library
 *
 * Create a repository for custom type detection.
 *
 * ```js
 * var lib = new type.Library;
 * ```
 *
 */
        function Library() {
            this.tests = {};
        }
        /**
 * #### .of (obj)
 *
 * Expose replacement `typeof` detection to the library.
 *
 * ```js
 * if ('string' === lib.of('hello world')) {
 *   // ...
 * }
 * ```
 *
 * @param {Mixed} object to test
 * @return {String} type
 */
        Library.prototype.of = getType;
        /**
 * #### .define (type, test)
 *
 * Add a test to for the `.test()` assertion.
 *
 * Can be defined as a regular expression:
 *
 * ```js
 * lib.define('int', /^[0-9]+$/);
 * ```
 *
 * ... or as a function:
 *
 * ```js
 * lib.define('bln', function (obj) {
 *   if ('boolean' === lib.of(obj)) return true;
 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
 *   return !! ~blns.indexOf(obj);
 * });
 * ```
 *
 * @param {String} type
 * @param {RegExp|Function} test
 * @api public
 */
        Library.prototype.define = function(type, test) {
            if (arguments.length === 1) return this.tests[type];
            this.tests[type] = test;
            return this;
        };
        /**
 * #### .test (obj, test)
 *
 * Assert that an object is of type. Will first
 * check natives, and if that does not pass it will
 * use the user defined custom tests.
 *
 * ```js
 * assert(lib.test('1', 'int'));
 * assert(lib.test('yes', 'bln'));
 * ```
 *
 * @param {Mixed} object
 * @param {String} type
 * @return {Boolean} result
 * @api public
 */
        Library.prototype.test = function(obj, type) {
            if (type === getType(obj)) return true;
            var test = this.tests[type];
            if (test && "regexp" === getType(test)) {
                return test.test(obj);
            } else if (test && "function" === getType(test)) {
                return test(obj);
            } else {
                throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.read = function(buffer, offset, isLE, mLen, nBytes) {
            var e, m;
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var nBits = -7;
            var i = isLE ? nBytes - 1 : 0;
            var d = isLE ? -1 : 1;
            var s = buffer[offset + i];
            i += d;
            e = s & (1 << -nBits) - 1;
            s >>= -nBits;
            nBits += eLen;
            for (;nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
            m = e & (1 << -nBits) - 1;
            e >>= -nBits;
            nBits += mLen;
            for (;nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
            if (e === 0) {
                e = 1 - eBias;
            } else if (e === eMax) {
                return m ? NaN : (s ? -1 : 1) * Infinity;
            } else {
                m = m + Math.pow(2, mLen);
                e = e - eBias;
            }
            return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
        };
        exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
            var e, m, c;
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
            var i = isLE ? 0 : nBytes - 1;
            var d = isLE ? 1 : -1;
            var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
            value = Math.abs(value);
            if (isNaN(value) || value === Infinity) {
                m = isNaN(value) ? 1 : 0;
                e = eMax;
            } else {
                e = Math.floor(Math.log(value) / Math.LN2);
                if (value * (c = Math.pow(2, -e)) < 1) {
                    e--;
                    c *= 2;
                }
                if (e + eBias >= 1) {
                    value += rt / c;
                } else {
                    value += rt * Math.pow(2, 1 - eBias);
                }
                if (value * c >= 2) {
                    e++;
                    c /= 2;
                }
                if (e + eBias >= eMax) {
                    m = 0;
                    e = eMax;
                } else if (e + eBias >= 1) {
                    m = (value * c - 1) * Math.pow(2, mLen);
                    e = e + eBias;
                } else {
                    m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                    e = 0;
                }
            }
            for (;mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {}
            e = e << mLen | m;
            eLen += mLen;
            for (;eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {}
            buffer[offset + i - d] |= s * 128;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var toString = {}.toString;
        module.exports = Array.isArray || function(arr) {
            return toString.call(arr) == "[object Array]";
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        /*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
        /*!
 * Primary Exports
 */
        var _exports = module.exports = getType;
        /**
 * ### typeOf (obj)
 *
 * Use several different techniques to determine
 * the type of object being tested.
 *
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
        var objectTypeRegexp = /^\[object (.*)\]$/;
        function getType(obj) {
            var type = Object.prototype.toString.call(obj).match(objectTypeRegexp)[1].toLowerCase();
            // Let "new String('')" return 'object'
            if (typeof Promise === "function" && obj instanceof Promise) return "promise";
            // PhantomJS has type "DOMWindow" for null
            if (obj === null) return "null";
            // PhantomJS has type "DOMWindow" for undefined
            if (obj === undefined) return "undefined";
            return type;
        }
        _exports.Library = Library;
        /**
 * ### Library
 *
 * Create a repository for custom type detection.
 *
 * ```js
 * var lib = new type.Library;
 * ```
 *
 */
        function Library() {
            if (!(this instanceof Library)) return new Library();
            this.tests = {};
        }
        /**
 * #### .of (obj)
 *
 * Expose replacement `typeof` detection to the library.
 *
 * ```js
 * if ('string' === lib.of('hello world')) {
 *   // ...
 * }
 * ```
 *
 * @param {Mixed} object to test
 * @return {String} type
 */
        Library.prototype.of = getType;
        /**
 * #### .define (type, test)
 *
 * Add a test to for the `.test()` assertion.
 *
 * Can be defined as a regular expression:
 *
 * ```js
 * lib.define('int', /^[0-9]+$/);
 * ```
 *
 * ... or as a function:
 *
 * ```js
 * lib.define('bln', function (obj) {
 *   if ('boolean' === lib.of(obj)) return true;
 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
 *   return !! ~blns.indexOf(obj);
 * });
 * ```
 *
 * @param {String} type
 * @param {RegExp|Function} test
 * @api public
 */
        Library.prototype.define = function(type, test) {
            if (arguments.length === 1) return this.tests[type];
            this.tests[type] = test;
            return this;
        };
        /**
 * #### .test (obj, test)
 *
 * Assert that an object is of type. Will first
 * check natives, and if that does not pass it will
 * use the user defined custom tests.
 *
 * ```js
 * assert(lib.test('1', 'int'));
 * assert(lib.test('yes', 'bln'));
 * ```
 *
 * @param {Mixed} object
 * @param {String} type
 * @return {Boolean} result
 * @api public
 */
        Library.prototype.test = function(obj, type) {
            if (type === getType(obj)) return true;
            var test = this.tests[type];
            if (test && "regexp" === getType(test)) {
                return test.test(obj);
            } else if (test && "function" === getType(test)) {
                return test(obj);
            } else {
                throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var g;
        // This works in non-strict mode
        g = function() {
            return this;
        }();
        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (1, eval)("this");
        } catch (e) {
            // This works if the window reference is available
            if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
        }
        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}
        module.exports = g;
    }, , , function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(32);
    } ]);
});
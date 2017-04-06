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
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
        "use strict";
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
            includeStack: false,
            showDiff: true,
            truncateThreshold: 40
        };
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
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
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var MediaTag = __webpack_require__(11).default;
        var ImagePlugin = __webpack_require__(14).default;
        MediaTag.registerPlugin(ImagePlugin);
        var VideoPlugin = __webpack_require__(23).default;
        MediaTag.registerPlugin(VideoPlugin);
        var AudioPlugin = __webpack_require__(20).default;
        MediaTag.registerPlugin(AudioPlugin);
        var DashPlugin = __webpack_require__(21).default;
        MediaTag.registerPlugin(DashPlugin);
        var PdfPlugin = __webpack_require__(22).default;
        MediaTag.registerPlugin(PdfPlugin);
        var DefaultFilter = __webpack_require__(19).default;
        MediaTag.registerFilter(DefaultFilter);
        var CryptoFilter = __webpack_require__(13).default;
        MediaTag.registerFilter(CryptoFilter);
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
        var getName = __webpack_require__(26);
        var getProperties = __webpack_require__(49);
        var getEnumerableProperties = __webpack_require__(46);
        module.exports = inspect;
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
        var isDOMElement = function isDOMElement(object) {
            if ((typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object") {
                return object instanceof HTMLElement;
            } else {
                return object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === "object" && object.nodeType === 1 && typeof object.nodeName === "string";
            }
        };
        function formatValue(ctx, value, recurseTimes) {
            if (value && typeof value.inspect === "function" && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
                var ret = value.inspect(recurseTimes);
                if (typeof ret !== "string") {
                    ret = formatValue(ctx, ret, recurseTimes);
                }
                return ret;
            }
            var primitive = formatPrimitive(ctx, value);
            if (primitive) {
                return primitive;
            }
            if (isDOMElement(value)) {
                if ("outerHTML" in value) {
                    return value.outerHTML;
                } else {
                    try {
                        if (document.xmlVersion) {
                            var xmlSerializer = new XMLSerializer();
                            return xmlSerializer.serializeToString(value);
                        } else {
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
            var visibleKeys = getEnumerableProperties(value);
            var keys = ctx.showHidden ? getProperties(value) : visibleKeys;
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
            if (isArray(value)) {
                array = true;
                braces = [ "[", "]" ];
            }
            if (typeof value === "function") {
                var name = getName(value);
                var nameSuffix = name ? ": " + name : "";
                base = " [Function" + nameSuffix + "]";
            }
            if (isRegExp(value)) {
                base = " " + RegExp.prototype.toString.call(value);
            }
            if (isDate(value)) {
                base = " " + Date.prototype.toUTCString.call(value);
            }
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
        var AudioPlugin = {
            identifier: "audio",
            typeCheck: function typeCheck(mediaObject) {
                var regexExtensions = new RegExp("^mp3|ogg|webm|wav$");
                var regexMimes = new RegExp("^audio/(mp3|ogg|webm|wav)$");
                return mediaObject.hasAttribute("src") && mediaObject.getType() === "audio" && regexExtensions.exec(mediaObject.getExtension()) !== null && regexMimes.exec(mediaObject.getMimeType()) !== null;
            },
            startup: function startup(mediaObject) {
                var element = document.createElement("audio");
                element.setAttribute("src", mediaObject.getAttribute("src"));
                mediaObject.utilsSetAllDataAttributes(element);
                mediaObject.replaceContents([ element ]);
            }
        };
        exports.default = AudioPlugin;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
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
        var PdfPlugin = {
            identifier: "pdf",
            typeCheck: function typeCheck(mediaObject) {
                var regexExtensions = new RegExp("^pdf$");
                var regexMimes = new RegExp("^application/pdf$");
                return mediaObject.hasAttribute("src") && mediaObject.getType() === "application" && regexExtensions.exec(mediaObject.getExtension()) !== null && regexMimes.exec(mediaObject.getMimeType()) !== null;
            },
            startup: function startup(mediaObject) {
                var url = mediaObject.getAttribute("src");
                var canvas = document.createElement("canvas");
                mediaObject.utilsSetAllDataAttributes(canvas);
                mediaObject.replaceContents([ canvas ]);
                PDFJS.disableWorker = true;
                var loadingTask = PDFJS.getDocument(url);
                loadingTask.promise.then(function(pdf) {
                    var pageNumber = 1;
                    function render(page) {
                        var scale = 1;
                        var viewport = page.getViewport(scale);
                        var context = canvas.getContext("2d");
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        var renderTask = page.render(renderContext);
                        renderTask.then(function() {});
                    }
                    function update(mouseEvent) {
                        if (!mouseEvent) {
                            console.log("no event");
                        }
                        if (mouseEvent.buttons === 0) {
                            if (pageNumber === pdf.numPages) {
                                pageNumber = 1;
                            } else {
                                pageNumber++;
                            }
                        } else if (mouseEvent.buttons === 4) {
                            if (pageNumber === 1) {
                                pageNumber = pdf.numPages;
                            } else {
                                pageNumber--;
                            }
                        }
                    }
                    pdf.getPage(pageNumber).then(function(page) {
                        render(page);
                    });
                    canvas.onclick = function(event) {
                        update(event);
                        pdf.getPage(pageNumber).then(function(page) {
                            render(page);
                        });
                    };
                }, function(reason) {
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
        var VideoPlugin = {
            identifier: "video",
            typeCheck: function typeCheck(mediaObject) {
                var regexExtensions = new RegExp("^mp4|ogg|webm$");
                var regexMimes = new RegExp("^video/(mp4|ogg|webm)$");
                return mediaObject.hasAttribute("src") && mediaObject.getType() === "video" && regexExtensions.exec(mediaObject.getExtension()) !== null && regexMimes.exec(mediaObject.getMimeType()) !== null;
            },
            startup: function startup(mediaObject) {
                var element = document.createElement("video");
                element.setAttribute("src", mediaObject.getAttribute("src"));
                mediaObject.utilsSetAllDataAttributes(element);
                mediaObject.replaceContents([ element ]);
            }
        };
        exports.default = VideoPlugin;
    }, function(module, exports, __webpack_require__) {
        "use strict";
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
        module.exports = AssertionError;
        function AssertionError(message, _props, ssf) {
            var extend = exclude("name", "message", "stack", "constructor", "toJSON"), props = extend(_props || {});
            this.message = message || "Unspecified AssertionError";
            this.showDiff = false;
            for (var key in props) {
                this[key] = props[key];
            }
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
        AssertionError.prototype = Object.create(Error.prototype);
        AssertionError.prototype.name = "AssertionError";
        AssertionError.prototype.constructor = AssertionError;
        AssertionError.prototype.toJSON = function(stack) {
            var extend = exclude("constructor", "toJSON", "stack"), props = extend({
                name: this.name
            }, this);
            if (false !== stack && this.stack) {
                props.stack = this.stack;
            }
            return props;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(obj, args) {
            return args.length > 4 ? args[4] : obj._obj;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(func) {
            if (func.name) return func.name;
            var match = /^\s?function ([^(]*)\(/.exec(func);
            return match && match[1] ? match[1] : "";
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var hasProperty = __webpack_require__(28);
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
        var type = __webpack_require__(17);
        var literals = {
            number: Number,
            string: String
        };
        module.exports = function hasProperty(name, obj) {
            var ot = type(obj);
            if (ot === "null" || ot === "undefined") return false;
            if (literals[ot] && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object") obj = new literals[ot](obj);
            return name in obj;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var inspect = __webpack_require__(16);
        var config = __webpack_require__(6);
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
        describe("Create different media tag contents: ", function() {
            it("can create a media-tag containing an image", function() {
                var mediaTagContainer = document.createElement("media-tag");
                mediaTagContainer.setAttribute("src", "image-without-extension");
                mediaTagContainer.setAttribute("data-type", "image/png");
                mediaTagContainer.setAttribute("data-attr-width", "300px");
                mediaTagContainer.setAttribute("data-attr-height", "200px");
                (0, _mediaTag2.default)(mediaTagContainer);
                var expectedResult = document.createElement("img");
                expectedResult.setAttribute("src", "image-without-extension");
                expectedResult.setAttribute("width", "300px");
                expectedResult.setAttribute("height", "200px");
                _chai2.default.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), "media tag result element is like the expected element");
            });
            it("can create a media-tag containing an audio", function() {
                var mediaTagContainer = document.createElement("media-tag");
                mediaTagContainer.setAttribute("src", "alterway.mp3");
                mediaTagContainer.setAttribute("data-type", "audio/mp3");
                mediaTagContainer.setAttribute("data-attr-controls", "controls");
                (0, _mediaTag2.default)(mediaTagContainer);
                var expectedResult = document.createElement("audio");
                expectedResult.setAttribute("src", "alterway.mp3");
                expectedResult.setAttribute("controls", "controls");
                _chai2.default.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), "media tag result element is like the expected element");
            });
            it("can create a media-tag containing a video", function() {
                var mediaTagContainer = document.createElement("media-tag");
                mediaTagContainer.setAttribute("src", "cube.mp4");
                mediaTagContainer.setAttribute("data-type", "video/mp4");
                mediaTagContainer.setAttribute("data-attr-width", "300px");
                mediaTagContainer.setAttribute("data-attr-height", "200px");
                (0, _mediaTag2.default)(mediaTagContainer);
                var expectedResult = document.createElement("video");
                expectedResult.setAttribute("src", "cube.mp4");
                expectedResult.setAttribute("width", "300px");
                expectedResult.setAttribute("height", "200px");
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
            return b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
        }
        function byteLength(b64) {
            return b64.length * 3 / 4 - placeHoldersCount(b64);
        }
        function toByteArray(b64) {
            var i, j, l, tmp, placeHolders, arr;
            var len = b64.length;
            placeHolders = placeHoldersCount(b64);
            arr = new Arr(len * 3 / 4 - placeHolders);
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
            var output = "";
            var parts = [];
            var maxChunkLength = 16383;
            for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
            }
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
        (function(global) {
            var base64 = __webpack_require__(33);
            var ieee754 = __webpack_require__(59);
            var isArray = __webpack_require__(60);
            exports.Buffer = Buffer;
            exports.SlowBuffer = SlowBuffer;
            exports.INSPECT_MAX_BYTES = 50;
            Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
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
                    that = new Uint8Array(length);
                    that.__proto__ = Buffer.prototype;
                } else {
                    if (that === null) {
                        that = new Buffer(length);
                    }
                    that.length = length;
                }
                return that;
            }
            function Buffer(arg, encodingOrOffset, length) {
                if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
                    return new Buffer(arg, encodingOrOffset, length);
                }
                if (typeof arg === "number") {
                    if (typeof encodingOrOffset === "string") {
                        throw new Error("If encoding is specified then the first argument must be a string");
                    }
                    return allocUnsafe(this, arg);
                }
                return from(this, arg, encodingOrOffset, length);
            }
            Buffer.poolSize = 8192;
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
            Buffer.from = function(value, encodingOrOffset, length) {
                return from(null, value, encodingOrOffset, length);
            };
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                Buffer.prototype.__proto__ = Uint8Array.prototype;
                Buffer.__proto__ = Uint8Array;
                if (typeof Symbol !== "undefined" && Symbol.species && Buffer[Symbol.species] === Buffer) {
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
                    return typeof encoding === "string" ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
                }
                return createBuffer(that, size);
            }
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
            Buffer.allocUnsafe = function(size) {
                return allocUnsafe(null, size);
            };
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
                    that = array;
                    that.__proto__ = Buffer.prototype;
                } else {
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
                if (length >= kMaxLength()) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + kMaxLength().toString(16) + " bytes");
                }
                return length | 0;
            }
            function SlowBuffer(length) {
                if (+length != length) {
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
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(encoding, start, end) {
                var loweredCase = false;
                if (start === undefined || start < 0) {
                    start = 0;
                }
                if (start > this.length) {
                    return "";
                }
                if (end === undefined || end > this.length) {
                    end = this.length;
                }
                if (end <= 0) {
                    return "";
                }
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
            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                if (buffer.length === 0) return -1;
                if (typeof byteOffset === "string") {
                    encoding = byteOffset;
                    byteOffset = 0;
                } else if (byteOffset > 2147483647) {
                    byteOffset = 2147483647;
                } else if (byteOffset < -2147483648) {
                    byteOffset = -2147483648;
                }
                byteOffset = +byteOffset;
                if (isNaN(byteOffset)) {
                    byteOffset = dir ? 0 : buffer.length - 1;
                }
                if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                if (byteOffset >= buffer.length) {
                    if (dir) return -1; else byteOffset = buffer.length - 1;
                } else if (byteOffset < 0) {
                    if (dir) byteOffset = 0; else return -1;
                }
                if (typeof val === "string") {
                    val = Buffer.from(val, encoding);
                }
                if (Buffer.isBuffer(val)) {
                    if (val.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                } else if (typeof val === "number") {
                    val = val & 255;
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
                        codePoint = 65533;
                        bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                        codePoint -= 65536;
                        res.push(codePoint >>> 10 & 1023 | 55296);
                        codePoint = 56320 | codePoint & 1023;
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
            }
            var MAX_ARGUMENTS_LENGTH = 4096;
            function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) {
                    return String.fromCharCode.apply(String, codePoints);
                }
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
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (targetStart >= target.length) targetStart = target.length;
                if (!targetStart) targetStart = 0;
                if (end > 0 && end < start) end = start;
                if (end === start) return 0;
                if (target.length === 0 || this.length === 0) return 0;
                if (targetStart < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
                if (end < 0) throw new RangeError("sourceEnd out of bounds");
                if (end > this.length) end = this.length;
                if (target.length - targetStart < end - start) {
                    end = target.length - targetStart + start;
                }
                var len = end - start;
                var i;
                if (this === target && start < targetStart && targetStart < end) {
                    for (i = len - 1; i >= 0; --i) {
                        target[i + targetStart] = this[i + start];
                    }
                } else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) {
                    for (i = 0; i < len; ++i) {
                        target[i + targetStart] = this[i + start];
                    }
                } else {
                    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
                }
                return len;
            };
            Buffer.prototype.fill = function fill(val, start, end, encoding) {
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
            var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
            function base64clean(str) {
                str = stringtrim(str).replace(INVALID_BASE64_RE, "");
                if (str.length < 2) return "";
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
                    if (codePoint > 55295 && codePoint < 57344) {
                        if (!leadSurrogate) {
                            if (codePoint > 56319) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            } else if (i + 1 === length) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            }
                            leadSurrogate = codePoint;
                            continue;
                        }
                        if (codePoint < 56320) {
                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                            leadSurrogate = codePoint;
                            continue;
                        }
                        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                    } else if (leadSurrogate) {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    }
                    leadSurrogate = null;
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
        var used = [], _exports = module.exports = {};
        _exports.version = "3.5.0";
        _exports.AssertionError = __webpack_require__(24);
        var util = __webpack_require__(50);
        _exports.use = function(fn) {
            if (!~used.indexOf(fn)) {
                fn(this, util);
                used.push(fn);
            }
            return this;
        };
        _exports.util = util;
        var config = __webpack_require__(6);
        _exports.config = config;
        var assertion = __webpack_require__(37);
        _exports.use(assertion);
        var core = __webpack_require__(38);
        _exports.use(core);
        var expect = __webpack_require__(40);
        _exports.use(expect);
        var should = __webpack_require__(41);
        _exports.use(should);
        var assert = __webpack_require__(39);
        _exports.use(assert);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var config = __webpack_require__(6);
        module.exports = function(_chai, util) {
            var AssertionError = _chai.AssertionError, flag = util.flag;
            _chai.Assertion = Assertion;
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
        module.exports = function(chai, _) {
            var Assertion = chai.Assertion, toString = Object.prototype.toString, flag = _.flag;
            [ "to", "be", "been", "is", "and", "has", "have", "with", "that", "which", "at", "of", "same" ].forEach(function(chain) {
                Assertion.addProperty(chain, function() {
                    return this;
                });
            });
            Assertion.addProperty("not", function() {
                flag(this, "negate", true);
            });
            Assertion.addProperty("deep", function() {
                flag(this, "deep", true);
            });
            Assertion.addProperty("any", function() {
                flag(this, "any", true);
                flag(this, "all", false);
            });
            Assertion.addProperty("all", function() {
                flag(this, "all", true);
                flag(this, "any", false);
            });
            function an(type, msg) {
                if (msg) flag(this, "message", msg);
                type = type.toLowerCase();
                var obj = flag(this, "object"), article = ~[ "a", "e", "i", "o", "u" ].indexOf(type.charAt(0)) ? "an " : "a ";
                this.assert(type === _.type(obj), "expected #{this} to be " + article + type, "expected #{this} not to be " + article + type);
            }
            Assertion.addChainableMethod("an", an);
            Assertion.addChainableMethod("a", an);
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
            Assertion.addProperty("ok", function() {
                this.assert(flag(this, "object"), "expected #{this} to be truthy", "expected #{this} to be falsy");
            });
            Assertion.addProperty("true", function() {
                this.assert(true === flag(this, "object"), "expected #{this} to be true", "expected #{this} to be false", this.negate ? false : true);
            });
            Assertion.addProperty("false", function() {
                this.assert(false === flag(this, "object"), "expected #{this} to be false", "expected #{this} to be true", this.negate ? true : false);
            });
            Assertion.addProperty("null", function() {
                this.assert(null === flag(this, "object"), "expected #{this} to be null", "expected #{this} not to be null");
            });
            Assertion.addProperty("undefined", function() {
                this.assert(undefined === flag(this, "object"), "expected #{this} to be undefined", "expected #{this} not to be undefined");
            });
            Assertion.addProperty("NaN", function() {
                this.assert(isNaN(flag(this, "object")), "expected #{this} to be NaN", "expected #{this} not to be NaN");
            });
            Assertion.addProperty("exist", function() {
                this.assert(null != flag(this, "object"), "expected #{this} to exist", "expected #{this} to not exist");
            });
            Assertion.addProperty("empty", function() {
                var obj = flag(this, "object"), expected = obj;
                if (Array.isArray(obj) || "string" === typeof object) {
                    expected = obj.length;
                } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
                    expected = Object.keys(obj).length;
                }
                this.assert(!expected, "expected #{this} to be empty", "expected #{this} not to be empty");
            });
            function checkArguments() {
                var obj = flag(this, "object"), type = Object.prototype.toString.call(obj);
                this.assert("[object Arguments]" === type, "expected #{this} to be arguments but got " + type, "expected #{this} to not be arguments");
            }
            Assertion.addProperty("arguments", checkArguments);
            Assertion.addProperty("Arguments", checkArguments);
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
            function assertEql(obj, msg) {
                if (msg) flag(this, "message", msg);
                this.assert(_.eql(obj, flag(this, "object")), "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", obj, this._obj, true);
            }
            Assertion.addMethod("eql", assertEql);
            Assertion.addMethod("eqls", assertEql);
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
            function assertInstanceOf(constructor, msg) {
                if (msg) flag(this, "message", msg);
                var name = _.getName(constructor);
                this.assert(flag(this, "object") instanceof constructor, "expected #{this} to be an instance of " + name, "expected #{this} to not be an instance of " + name);
            }
            Assertion.addMethod("instanceof", assertInstanceOf);
            Assertion.addMethod("instanceOf", assertInstanceOf);
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
            function assertOwnProperty(name, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                this.assert(obj.hasOwnProperty(name), "expected #{this} to have own property " + _.inspect(name), "expected #{this} to not have own property " + _.inspect(name));
            }
            Assertion.addMethod("ownProperty", assertOwnProperty);
            Assertion.addMethod("haveOwnProperty", assertOwnProperty);
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
            function assertMatch(re, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                this.assert(re.exec(obj), "expected #{this} to match " + re, "expected #{this} not to match " + re);
            }
            Assertion.addMethod("match", assertMatch);
            Assertion.addMethod("matches", assertMatch);
            Assertion.addMethod("string", function(str, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                new Assertion(obj, msg).is.a("string");
                this.assert(~obj.indexOf(str), "expected #{this} to contain " + _.inspect(str), "expected #{this} to not contain " + _.inspect(str));
            });
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
                if (any) {
                    var intersection = expected.filter(function(key) {
                        return ~actual.indexOf(key);
                    });
                    ok = intersection.length > 0;
                }
                if (all) {
                    ok = keys.every(function(key) {
                        return ~actual.indexOf(key);
                    });
                    if (!flag(this, "negate") && !flag(this, "contains")) {
                        ok = ok && keys.length == actual.length;
                    }
                }
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
                str = (len > 1 ? "keys " : "key ") + str;
                str = (flag(this, "contains") ? "contain " : "have ") + str;
                this.assert(ok, "expected #{this} to " + str, "expected #{this} to not " + str, expected.slice(0).sort(), actual.sort(), true);
            }
            Assertion.addMethod("keys", assertKeys);
            Assertion.addMethod("key", assertKeys);
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
                    if (desiredError) {
                        this.assert(err === desiredError, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}", desiredError instanceof Error ? desiredError.toString() : desiredError, err instanceof Error ? err.toString() : err);
                        flag(this, "object", err);
                        return this;
                    }
                    if (constructor) {
                        this.assert(err instanceof constructor, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp} but #{act} was thrown", name, err instanceof Error ? err.toString() : err);
                        if (!errMsg) {
                            flag(this, "object", err);
                            return this;
                        }
                    }
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
            function respondTo(method, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object"), itself = flag(this, "itself"), context = "function" === _.type(obj) && !itself ? obj.prototype[method] : obj[method];
                this.assert("function" === typeof context, "expected #{this} to respond to " + _.inspect(method), "expected #{this} to not respond to " + _.inspect(method));
            }
            Assertion.addMethod("respondTo", respondTo);
            Assertion.addMethod("respondsTo", respondTo);
            Assertion.addProperty("itself", function() {
                flag(this, "itself", true);
            });
            function satisfy(matcher, msg) {
                if (msg) flag(this, "message", msg);
                var obj = flag(this, "object");
                var result = matcher(obj);
                this.assert(result, "expected #{this} to satisfy " + _.objDisplay(matcher), "expected #{this} to not satisfy" + _.objDisplay(matcher), this.negate ? false : true, result);
            }
            Assertion.addMethod("satisfy", satisfy);
            Assertion.addMethod("satisfies", satisfy);
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
            function oneOf(list, msg) {
                if (msg) flag(this, "message", msg);
                var expected = flag(this, "object");
                new Assertion(list).to.be.an("array");
                this.assert(list.indexOf(expected) > -1, "expected #{this} to be one of #{exp}", "expected #{this} to not be one of #{exp}", list, expected);
            }
            Assertion.addMethod("oneOf", oneOf);
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
            Assertion.addProperty("extensible", function() {
                var obj = flag(this, "object");
                var isExtensible;
                try {
                    isExtensible = Object.isExtensible(obj);
                } catch (err) {
                    if (err instanceof TypeError) isExtensible = false; else throw err;
                }
                this.assert(isExtensible, "expected #{this} to be extensible", "expected #{this} to not be extensible");
            });
            Assertion.addProperty("sealed", function() {
                var obj = flag(this, "object");
                var isSealed;
                try {
                    isSealed = Object.isSealed(obj);
                } catch (err) {
                    if (err instanceof TypeError) isSealed = true; else throw err;
                }
                this.assert(isSealed, "expected #{this} to be sealed", "expected #{this} to not be sealed");
            });
            Assertion.addProperty("frozen", function() {
                var obj = flag(this, "object");
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
        module.exports = function(chai, util) {
            var Assertion = chai.Assertion, flag = util.flag;
            var assert = chai.assert = function(express, errmsg) {
                var test = new Assertion(null, null, chai.assert);
                test.assert(express, errmsg, "[ negation message unavailable ]");
            };
            assert.fail = function(actual, expected, message, operator) {
                message = message || "assert.fail()";
                throw new chai.AssertionError(message, {
                    actual: actual,
                    expected: expected,
                    operator: operator
                }, assert.fail);
            };
            assert.isOk = function(val, msg) {
                new Assertion(val, msg).is.ok;
            };
            assert.isNotOk = function(val, msg) {
                new Assertion(val, msg).is.not.ok;
            };
            assert.equal = function(act, exp, msg) {
                var test = new Assertion(act, msg, assert.equal);
                test.assert(exp == flag(test, "object"), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", exp, act);
            };
            assert.notEqual = function(act, exp, msg) {
                var test = new Assertion(act, msg, assert.notEqual);
                test.assert(exp != flag(test, "object"), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", exp, act);
            };
            assert.strictEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.equal(exp);
            };
            assert.notStrictEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.not.equal(exp);
            };
            assert.deepEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.eql(exp);
            };
            assert.notDeepEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.not.eql(exp);
            };
            assert.isAbove = function(val, abv, msg) {
                new Assertion(val, msg).to.be.above(abv);
            };
            assert.isAtLeast = function(val, atlst, msg) {
                new Assertion(val, msg).to.be.least(atlst);
            };
            assert.isBelow = function(val, blw, msg) {
                new Assertion(val, msg).to.be.below(blw);
            };
            assert.isAtMost = function(val, atmst, msg) {
                new Assertion(val, msg).to.be.most(atmst);
            };
            assert.isTrue = function(val, msg) {
                new Assertion(val, msg).is["true"];
            };
            assert.isNotTrue = function(val, msg) {
                new Assertion(val, msg).to.not.equal(true);
            };
            assert.isFalse = function(val, msg) {
                new Assertion(val, msg).is["false"];
            };
            assert.isNotFalse = function(val, msg) {
                new Assertion(val, msg).to.not.equal(false);
            };
            assert.isNull = function(val, msg) {
                new Assertion(val, msg).to.equal(null);
            };
            assert.isNotNull = function(val, msg) {
                new Assertion(val, msg).to.not.equal(null);
            };
            assert.isNaN = function(val, msg) {
                new Assertion(val, msg).to.be.NaN;
            };
            assert.isNotNaN = function(val, msg) {
                new Assertion(val, msg).not.to.be.NaN;
            };
            assert.isUndefined = function(val, msg) {
                new Assertion(val, msg).to.equal(undefined);
            };
            assert.isDefined = function(val, msg) {
                new Assertion(val, msg).to.not.equal(undefined);
            };
            assert.isFunction = function(val, msg) {
                new Assertion(val, msg).to.be.a("function");
            };
            assert.isNotFunction = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("function");
            };
            assert.isObject = function(val, msg) {
                new Assertion(val, msg).to.be.a("object");
            };
            assert.isNotObject = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("object");
            };
            assert.isArray = function(val, msg) {
                new Assertion(val, msg).to.be.an("array");
            };
            assert.isNotArray = function(val, msg) {
                new Assertion(val, msg).to.not.be.an("array");
            };
            assert.isString = function(val, msg) {
                new Assertion(val, msg).to.be.a("string");
            };
            assert.isNotString = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("string");
            };
            assert.isNumber = function(val, msg) {
                new Assertion(val, msg).to.be.a("number");
            };
            assert.isNotNumber = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("number");
            };
            assert.isBoolean = function(val, msg) {
                new Assertion(val, msg).to.be.a("boolean");
            };
            assert.isNotBoolean = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("boolean");
            };
            assert.typeOf = function(val, type, msg) {
                new Assertion(val, msg).to.be.a(type);
            };
            assert.notTypeOf = function(val, type, msg) {
                new Assertion(val, msg).to.not.be.a(type);
            };
            assert.instanceOf = function(val, type, msg) {
                new Assertion(val, msg).to.be.instanceOf(type);
            };
            assert.notInstanceOf = function(val, type, msg) {
                new Assertion(val, msg).to.not.be.instanceOf(type);
            };
            assert.include = function(exp, inc, msg) {
                new Assertion(exp, msg, assert.include).include(inc);
            };
            assert.notInclude = function(exp, inc, msg) {
                new Assertion(exp, msg, assert.notInclude).not.include(inc);
            };
            assert.match = function(exp, re, msg) {
                new Assertion(exp, msg).to.match(re);
            };
            assert.notMatch = function(exp, re, msg) {
                new Assertion(exp, msg).to.not.match(re);
            };
            assert.property = function(obj, prop, msg) {
                new Assertion(obj, msg).to.have.property(prop);
            };
            assert.notProperty = function(obj, prop, msg) {
                new Assertion(obj, msg).to.not.have.property(prop);
            };
            assert.deepProperty = function(obj, prop, msg) {
                new Assertion(obj, msg).to.have.deep.property(prop);
            };
            assert.notDeepProperty = function(obj, prop, msg) {
                new Assertion(obj, msg).to.not.have.deep.property(prop);
            };
            assert.propertyVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.have.property(prop, val);
            };
            assert.propertyNotVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.not.have.property(prop, val);
            };
            assert.deepPropertyVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.have.deep.property(prop, val);
            };
            assert.deepPropertyNotVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.not.have.deep.property(prop, val);
            };
            assert.lengthOf = function(exp, len, msg) {
                new Assertion(exp, msg).to.have.length(len);
            };
            assert.throws = function(fn, errt, errs, msg) {
                if ("string" === typeof errt || errt instanceof RegExp) {
                    errs = errt;
                    errt = null;
                }
                var assertErr = new Assertion(fn, msg).to.throw(errt, errs);
                return flag(assertErr, "object");
            };
            assert.doesNotThrow = function(fn, type, msg) {
                if ("string" === typeof type) {
                    msg = type;
                    type = null;
                }
                new Assertion(fn, msg).to.not.Throw(type);
            };
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
            assert.closeTo = function(act, exp, delta, msg) {
                new Assertion(act, msg).to.be.closeTo(exp, delta);
            };
            assert.approximately = function(act, exp, delta, msg) {
                new Assertion(act, msg).to.be.approximately(exp, delta);
            };
            assert.sameMembers = function(set1, set2, msg) {
                new Assertion(set1, msg).to.have.same.members(set2);
            };
            assert.sameDeepMembers = function(set1, set2, msg) {
                new Assertion(set1, msg).to.have.same.deep.members(set2);
            };
            assert.includeMembers = function(superset, subset, msg) {
                new Assertion(superset, msg).to.include.members(subset);
            };
            assert.includeDeepMembers = function(superset, subset, msg) {
                new Assertion(superset, msg).to.include.deep.members(subset);
            };
            assert.oneOf = function(inList, list, msg) {
                new Assertion(inList, msg).to.be.oneOf(list);
            };
            assert.changes = function(fn, obj, prop) {
                new Assertion(fn).to.change(obj, prop);
            };
            assert.doesNotChange = function(fn, obj, prop) {
                new Assertion(fn).to.not.change(obj, prop);
            };
            assert.increases = function(fn, obj, prop) {
                new Assertion(fn).to.increase(obj, prop);
            };
            assert.doesNotIncrease = function(fn, obj, prop) {
                new Assertion(fn).to.not.increase(obj, prop);
            };
            assert.decreases = function(fn, obj, prop) {
                new Assertion(fn).to.decrease(obj, prop);
            };
            assert.doesNotDecrease = function(fn, obj, prop) {
                new Assertion(fn).to.not.decrease(obj, prop);
            };
            assert.ifError = function(val) {
                if (val) {
                    throw val;
                }
            };
            assert.isExtensible = function(obj, msg) {
                new Assertion(obj, msg).to.be.extensible;
            };
            assert.isNotExtensible = function(obj, msg) {
                new Assertion(obj, msg).to.not.be.extensible;
            };
            assert.isSealed = function(obj, msg) {
                new Assertion(obj, msg).to.be.sealed;
            };
            assert.isNotSealed = function(obj, msg) {
                new Assertion(obj, msg).to.not.be.sealed;
            };
            assert.isFrozen = function(obj, msg) {
                new Assertion(obj, msg).to.be.frozen;
            };
            assert.isNotFrozen = function(obj, msg) {
                new Assertion(obj, msg).to.not.be.frozen;
            };
            (function alias(name, as) {
                assert[as] = assert[name];
                return alias;
            })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen");
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(chai, util) {
            chai.expect = function(val, message) {
                return new chai.Assertion(val, message);
            };
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
        module.exports = function(chai, util) {
            var Assertion = chai.Assertion;
            function loadShould() {
                function shouldGetter() {
                    if (this instanceof String || this instanceof Number || this instanceof Boolean) {
                        return new Assertion(this.valueOf(), null, shouldGetter);
                    }
                    return new Assertion(this, null, shouldGetter);
                }
                function shouldSetter(value) {
                    Object.defineProperty(this, "should", {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                }
                Object.defineProperty(Object.prototype, "should", {
                    set: shouldSetter,
                    get: shouldGetter,
                    configurable: true
                });
                var should = {};
                should.fail = function(actual, expected, message, operator) {
                    message = message || "should.fail()";
                    throw new chai.AssertionError(message, {
                        actual: actual,
                        expected: expected,
                        operator: operator
                    }, should.fail);
                };
                should.equal = function(val1, val2, msg) {
                    new Assertion(val1, msg).to.equal(val2);
                };
                should.Throw = function(fn, errt, errs, msg) {
                    new Assertion(fn, msg).to.Throw(errt, errs);
                };
                should.exist = function(val, msg) {
                    new Assertion(val, msg).to.exist;
                };
                should.not = {};
                should.not.equal = function(val1, val2, msg) {
                    new Assertion(val1, msg).to.not.equal(val2);
                };
                should.not.Throw = function(fn, errt, errs, msg) {
                    new Assertion(fn, msg).to.not.Throw(errt, errs);
                };
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
        var transferFlags = __webpack_require__(30);
        var flag = __webpack_require__(5);
        var config = __webpack_require__(6);
        var hasProtoSupport = "__proto__" in Object;
        var excludeNames = /^(?:length|name|arguments|caller)$/;
        var call = Function.prototype.call, apply = Function.prototype.apply;
        module.exports = function(ctx, name, method, chainingBehavior) {
            if (typeof chainingBehavior !== "function") {
                chainingBehavior = function chainingBehavior() {};
            }
            var chainableBehavior = {
                method: method,
                chainingBehavior: chainingBehavior
            };
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
                    if (hasProtoSupport) {
                        var prototype = assert.__proto__ = Object.create(this);
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
        var config = __webpack_require__(6);
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
        var config = __webpack_require__(6);
        var flag = __webpack_require__(5);
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
        var AssertionError = __webpack_require__(24);
        var flag = __webpack_require__(5);
        var type = __webpack_require__(17);
        module.exports = function(obj, types) {
            var obj = flag(obj, "object");
            types = types.map(function(t) {
                return t.toLowerCase();
            });
            types.sort();
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
        module.exports = function getEnumerableProperties(object) {
            var result = [];
            for (var name in object) {
                result.push(name);
            }
            return result;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var flag = __webpack_require__(5), getActual = __webpack_require__(25), inspect = __webpack_require__(16), objDisplay = __webpack_require__(29);
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
        var getPathInfo = __webpack_require__(27);
        module.exports = function(path, obj) {
            var info = getPathInfo(path, obj);
            return info.value;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
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
        var _exports = module.exports = {};
        _exports.test = __webpack_require__(54);
        _exports.type = __webpack_require__(17);
        _exports.expectTypes = __webpack_require__(45);
        _exports.getMessage = __webpack_require__(47);
        _exports.getActual = __webpack_require__(25);
        _exports.inspect = __webpack_require__(16);
        _exports.objDisplay = __webpack_require__(29);
        _exports.flag = __webpack_require__(5);
        _exports.transferFlags = __webpack_require__(30);
        _exports.eql = __webpack_require__(55);
        _exports.getPathValue = __webpack_require__(48);
        _exports.getPathInfo = __webpack_require__(27);
        _exports.hasProperty = __webpack_require__(28);
        _exports.getName = __webpack_require__(26);
        _exports.addProperty = __webpack_require__(44);
        _exports.addMethod = __webpack_require__(43);
        _exports.overwriteProperty = __webpack_require__(53);
        _exports.overwriteMethod = __webpack_require__(52);
        _exports.addChainableMethod = __webpack_require__(42);
        _exports.overwriteChainableMethod = __webpack_require__(51);
    }, function(module, exports, __webpack_require__) {
        "use strict";
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
        var flag = __webpack_require__(5);
        module.exports = function(obj, args) {
            var negate = flag(obj, "negate"), expr = args[0];
            return negate ? !expr : expr;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(56);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var type = __webpack_require__(57);
        var Buffer;
        try {
            Buffer = __webpack_require__(34).Buffer;
        } catch (ex) {
            Buffer = {};
            Buffer.isBuffer = function() {
                return false;
            };
        }
        module.exports = deepEqual;
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
        function sameValue(a, b) {
            if (a === b) return a !== 0 || 1 / a === 1 / b;
            return a !== a && b !== b;
        }
        function typeEqual(a, b) {
            return type(a) === type(b);
        }
        function dateEqual(a, b) {
            if ("date" !== type(b)) return false;
            return sameValue(a.getTime(), b.getTime());
        }
        function regexpEqual(a, b) {
            if ("regexp" !== type(b)) return false;
            return sameValue(a.toString(), b.toString());
        }
        function argumentsEqual(a, b, m) {
            if ("arguments" !== type(b)) return false;
            a = [].slice.call(a);
            b = [].slice.call(b);
            return deepEqual(a, b, m);
        }
        function enumerable(a) {
            var res = [];
            for (var key in a) {
                res.push(key);
            }
            return res;
        }
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
        function bufferEqual(a, b) {
            if (!Buffer.isBuffer(b)) return false;
            return iterableEqual(a, b);
        }
        function isValue(a) {
            return a !== null && a !== undefined;
        }
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
        var _exports = module.exports = getType;
        var natives = {
            "[object Array]": "array",
            "[object RegExp]": "regexp",
            "[object Function]": "function",
            "[object Arguments]": "arguments",
            "[object Date]": "date"
        };
        function getType(obj) {
            var str = Object.prototype.toString.call(obj);
            if (natives[str]) return natives[str];
            if (obj === null) return "null";
            if (obj === undefined) return "undefined";
            if (obj === Object(obj)) return "object";
            return typeof obj === "undefined" ? "undefined" : _typeof(obj);
        }
        _exports.Library = Library;
        function Library() {
            this.tests = {};
        }
        Library.prototype.of = getType;
        Library.prototype.define = function(type, test) {
            if (arguments.length === 1) return this.tests[type];
            this.tests[type] = test;
            return this;
        };
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
        var _exports = module.exports = getType;
        var objectTypeRegexp = /^\[object (.*)\]$/;
        function getType(obj) {
            var type = Object.prototype.toString.call(obj).match(objectTypeRegexp)[1].toLowerCase();
            if (typeof Promise === "function" && obj instanceof Promise) return "promise";
            if (obj === null) return "null";
            if (obj === undefined) return "undefined";
            return type;
        }
        _exports.Library = Library;
        function Library() {
            if (!(this instanceof Library)) return new Library();
            this.tests = {};
        }
        Library.prototype.of = getType;
        Library.prototype.define = function(type, test) {
            if (arguments.length === 1) return this.tests[type];
            this.tests[type] = test;
            return this;
        };
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
        g = function() {
            return this;
        }();
        try {
            g = g || Function("return this")() || (1, eval)("this");
        } catch (e) {
            if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
        }
        module.exports = g;
    }, , , function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(32);
    } ]);
});
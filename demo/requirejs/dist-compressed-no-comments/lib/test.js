!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define([], factory) : "object" == typeof exports ? exports.mediaTag = factory() : root.mediaTag = factory();
}(this, function() {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.i = function(value) {
            return value;
        }, __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 65);
    }([ function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _debug = __webpack_require__(2), _debug2 = _interopRequireDefault(_debug), _filterManager = __webpack_require__(3), _filterManager2 = _interopRequireDefault(_filterManager), _pluginManager = __webpack_require__(4), _pluginManager2 = _interopRequireDefault(_pluginManager), debug = new _debug2.default("MT:Engine"), Engine = function() {
            function Engine() {
                _classCallCheck(this, Engine);
            }
            return _createClass(Engine, null, [ {
                key: "startup",
                value: function(mediaObject) {
                    var id = mediaObject.getId();
                    Engine.chains[id] = Engine.matchingFilters(mediaObject), Engine.chains[id].length > 0 ? Engine.filter(mediaObject) : Engine.plugin(mediaObject);
                }
            }, {
                key: "matchingFilters",
                value: function(mediaObject) {
                    return _filterManager2.default.filters().filter(function(filter) {
                        return filter.typeCheck(mediaObject);
                    });
                }
            }, {
                key: "filter",
                value: function filter(mediaObject) {
                    var id = mediaObject.getId(), length = Engine.chains[id].length, filter = Engine.chains[id][length - 1];
                    filter && filter.startup(mediaObject);
                }
            }, {
                key: "plugin",
                value: function plugin(mediaObject) {
                    var plugin = Engine.findPlugin(mediaObject);
                    plugin && plugin.startup(mediaObject);
                }
            }, {
                key: "findFilter",
                value: function(mediaObject) {
                    var filterIdentifier = _filterManager2.default.findType(mediaObject);
                    if (filterIdentifier) return _filterManager2.default.getFilter(filterIdentifier);
                }
            }, {
                key: "findPlugin",
                value: function(mediaObject) {
                    var pluginIdentifier = _pluginManager2.default.findType(mediaObject);
                    if (pluginIdentifier) return _pluginManager2.default.getPlugin(pluginIdentifier);
                }
            }, {
                key: "chain",
                value: function(mediaObject) {
                    if (!Engine.isCoherent(mediaObject)) throw new Error("Incohenrent filter chain");
                    var id = mediaObject.getId();
                    Engine.chains[id].pop(), Engine.chains[id].length > 0 ? Engine.filter(mediaObject) : Engine.plugin(mediaObject);
                }
            }, {
                key: "isCoherent",
                value: function(mediaObject) {
                    return Engine.filterChainRuleCallback(mediaObject);
                }
            } ]), Engine;
        }();
        Engine.chains = {}, Engine.uid = function(i) {
            return function() {
                return i++;
            };
        }(0), Engine.filterChainRuleCallback = function(mediaObject) {
            var id = mediaObject.getId(), beforeLength = Engine.chains[id].length, afterLength = Engine.matchingFilters(mediaObject).length, differences = afterLength - beforeLength, filter = Engine.chains[id][beforeLength - 1];
            return 0 === differences && "default" === filter.identifier ? (debug("Default filter applied"), 
            !0) : differences === -1 || differences < -1 && (debug("The plugin " + filter.identifier + " have alterate too hightly the mediaObject"), 
            !0);
        }, exports.default = Engine;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Errors = {
            PluginExists: function(_Error) {
                function PluginExists(objPlugin) {
                    return _classCallCheck(this, PluginExists), _possibleConstructorReturn(this, (PluginExists.__proto__ || Object.getPrototypeOf(PluginExists)).call(this, 'Plugin with same "' + objPlugin.identifier + '" identifier found.'));
                }
                return _inherits(PluginExists, _Error), PluginExists;
            }(Error),
            TypeNotFound: function(_Error2) {
                function TypeNotFound() {
                    return _classCallCheck(this, TypeNotFound), _possibleConstructorReturn(this, (TypeNotFound.__proto__ || Object.getPrototypeOf(TypeNotFound)).call(this, "Media Tag could not find the content type of an instance.}."));
                }
                return _inherits(TypeNotFound, _Error2), TypeNotFound;
            }(Error),
            FilterExists: function(_Error3) {
                function FilterExists(filter) {
                    return _classCallCheck(this, FilterExists), _possibleConstructorReturn(this, (FilterExists.__proto__ || Object.getPrototypeOf(FilterExists)).call(this, 'Filter with same "' + filter.identifier + ' identifier found."'));
                }
                return _inherits(FilterExists, _Error3), FilterExists;
            }(Error),
            FetchFail: function(_Error4) {
                function FetchFail(response) {
                    return _classCallCheck(this, FetchFail), _possibleConstructorReturn(this, (FetchFail.__proto__ || Object.getPrototypeOf(FetchFail)).call(this, 'Could not fetch "' + response.url + '", received "' + response.status + ": " + response.statusText + '".'));
                }
                return _inherits(FetchFail, _Error4), FetchFail;
            }(Error),
            InvalidCryptoKey: function(_Error5) {
                function InvalidCryptoKey() {
                    return _classCallCheck(this, InvalidCryptoKey), _possibleConstructorReturn(this, (InvalidCryptoKey.__proto__ || Object.getPrototypeOf(InvalidCryptoKey)).call(this, "Invalid cryptographic key."));
                }
                return _inherits(InvalidCryptoKey, _Error5), InvalidCryptoKey;
            }(Error),
            InvalidCryptoLib: function(_Error6) {
                function InvalidCryptoLib() {
                    return _classCallCheck(this, InvalidCryptoLib), _possibleConstructorReturn(this, (InvalidCryptoLib.__proto__ || Object.getPrototypeOf(InvalidCryptoLib)).call(this, "Invalid cryptographic algorithm name."));
                }
                return _inherits(InvalidCryptoLib, _Error6), InvalidCryptoLib;
            }(Error),
            FailedCrypto: function(_Error7) {
                function FailedCrypto(err) {
                    return _classCallCheck(this, FailedCrypto), _possibleConstructorReturn(this, (FailedCrypto.__proto__ || Object.getPrototypeOf(FailedCrypto)).call(this, "Failed to decrypt file" + (err && err.message ? " " + err.message : "") + "."));
                }
                return _inherits(FailedCrypto, _Error7), FailedCrypto;
            }(Error)
        };
        exports.default = Errors;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        (function(process) {
            function useColors() {
                return !("undefined" == typeof window || !window || void 0 === window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document && "WebkitAppearance" in document.documentElement.style || "undefined" != typeof window && window && window.console && (console.firebug || console.exception && console.table) || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
            }
            function formatArgs(args) {
                var useColors = this.useColors;
                if (args[0] = (useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ") + "+" + exports.humanize(this.diff), 
                useColors) {
                    var c = "color: " + this.color;
                    args.splice(1, 0, c, "color: inherit");
                    var index = 0, lastC = 0;
                    args[0].replace(/%[a-zA-Z%]/g, function(match) {
                        "%%" !== match && (index++, "%c" === match && (lastC = index));
                    }), args.splice(lastC, 0, c);
                }
            }
            function log() {
                return "object" === ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }
            function save(namespaces) {
                try {
                    null == namespaces ? exports.storage.removeItem("debug") : exports.storage.debug = namespaces;
                } catch (e) {}
            }
            function load() {
                try {
                    return exports.storage.debug;
                } catch (e) {}
                if (void 0 !== process && "env" in process) return process.env.DEBUG;
            }
            function localstorage() {
                try {
                    return window.localStorage;
                } catch (e) {}
            }
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports = module.exports = __webpack_require__(7), exports.log = log, exports.formatArgs = formatArgs, 
            exports.save = save, exports.load = load, exports.useColors = useColors, exports.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : localstorage(), 
            exports.colors = [ "lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson" ], 
            exports.formatters.j = function(v) {
                try {
                    return JSON.stringify(v);
                } catch (err) {
                    return "[UnexpectedJSONParseError]: " + err.message;
                }
            }, exports.enable(load());
        }).call(exports, __webpack_require__(9));
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _errors = __webpack_require__(1), _errors2 = _interopRequireDefault(_errors), FilterManager = function() {
            function FilterManager() {
                _classCallCheck(this, FilterManager);
            }
            return _createClass(FilterManager, null, [ {
                key: "identifiers",
                value: function() {
                    return Object.keys(FilterManager.filtersMap);
                }
            }, {
                key: "filters",
                value: function() {
                    return Object.keys(FilterManager.filtersMap).map(function(key) {
                        return FilterManager.filtersMap[key];
                    });
                }
            }, {
                key: "isRegistered",
                value: function(filter) {
                    return filter.identifier in FilterManager.filtersMap;
                }
            }, {
                key: "register",
                value: function(filter) {
                    if (filter) {
                        if (FilterManager.isRegistered(filter)) throw new _errors2.default.FilterExists(filter);
                        FilterManager.filtersMap[filter.identifier] = filter;
                    }
                }
            }, {
                key: "getFilter",
                value: function(name) {
                    return FilterManager.filters().find(function(filter) {
                        return filter.identifier === name;
                    });
                }
            }, {
                key: "findType",
                value: function(mediaObject) {
                    var type = void 0;
                    return FilterManager.filters().some(function(filter) {
                        return !!filter.typeCheck(mediaObject) && (type = filter.identifier, !0);
                    }), type;
                }
            } ]), FilterManager;
        }();
        FilterManager.filtersMap = {}, exports.default = FilterManager;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _errors = __webpack_require__(1), _errors2 = _interopRequireDefault(_errors), PluginManager = function() {
            function PluginManager() {
                _classCallCheck(this, PluginManager);
            }
            return _createClass(PluginManager, null, [ {
                key: "identifiers",
                value: function() {
                    return Object.keys(PluginManager.pluginsMap);
                }
            }, {
                key: "plugins",
                value: function() {
                    return Object.keys(PluginManager.pluginsMap).map(function(key) {
                        return PluginManager.pluginsMap[key];
                    });
                }
            }, {
                key: "isRegistered",
                value: function(plugin) {
                    return plugin.identifier in PluginManager.pluginsMap;
                }
            }, {
                key: "register",
                value: function(plugin) {
                    if (plugin) {
                        if (PluginManager.isRegistered(plugin)) throw new _errors2.default.PluginExists(plugin);
                        PluginManager.pluginsMap[plugin.identifier] = plugin;
                    }
                }
            }, {
                key: "getPlugin",
                value: function(name) {
                    return PluginManager.plugins().find(function(plugin) {
                        return plugin.identifier === name;
                    });
                }
            }, {
                key: "findType",
                value: function(mediaObject) {
                    var type = void 0;
                    return PluginManager.plugins().some(function(plugin) {
                        return !!plugin.typeCheck(mediaObject) && (type = plugin.identifier, !0);
                    }), type;
                }
            } ]), PluginManager;
        }();
        PluginManager.pluginsMap = {}, exports.default = PluginManager;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(obj, key, value) {
            var flags = obj.__flags || (obj.__flags = Object.create(null));
            if (3 !== arguments.length) return flags[key];
            flags[key] = value;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = {
            includeStack: !1,
            showDiff: !0,
            truncateThreshold: 40
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function selectColor(namespace) {
            var i, hash = 0;
            for (i in namespace) hash = (hash << 5) - hash + namespace.charCodeAt(i), hash |= 0;
            return exports.colors[Math.abs(hash) % exports.colors.length];
        }
        function createDebug(namespace) {
            function debug() {
                if (debug.enabled) {
                    var self = debug, curr = +new Date(), ms = curr - (prevTime || curr);
                    self.diff = ms, self.prev = prevTime, self.curr = curr, prevTime = curr;
                    for (var args = new Array(arguments.length), i = 0; i < args.length; i++) args[i] = arguments[i];
                    args[0] = exports.coerce(args[0]), "string" != typeof args[0] && args.unshift("%O");
                    var index = 0;
                    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                        if ("%%" === match) return match;
                        index++;
                        var formatter = exports.formatters[format];
                        if ("function" == typeof formatter) {
                            var val = args[index];
                            match = formatter.call(self, val), args.splice(index, 1), index--;
                        }
                        return match;
                    }), exports.formatArgs.call(self, args);
                    (debug.log || exports.log || console.log.bind(console)).apply(self, args);
                }
            }
            return debug.namespace = namespace, debug.enabled = exports.enabled(namespace), 
            debug.useColors = exports.useColors(), debug.color = selectColor(namespace), "function" == typeof exports.init && exports.init(debug), 
            debug;
        }
        function enable(namespaces) {
            exports.save(namespaces), exports.names = [], exports.skips = [];
            for (var split = (namespaces || "").split(/[\s,]+/), len = split.length, i = 0; i < len; i++) split[i] && (namespaces = split[i].replace(/\*/g, ".*?"), 
            "-" === namespaces[0] ? exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$")) : exports.names.push(new RegExp("^" + namespaces + "$")));
        }
        function disable() {
            exports.enable("");
        }
        function enabled(name) {
            var i, len;
            for (i = 0, len = exports.skips.length; i < len; i++) if (exports.skips[i].test(name)) return !1;
            for (i = 0, len = exports.names.length; i < len; i++) if (exports.names[i].test(name)) return !0;
            return !1;
        }
        function coerce(val) {
            return val instanceof Error ? val.stack || val.message : val;
        }
        exports = module.exports = createDebug.debug = createDebug.default = createDebug, 
        exports.coerce = coerce, exports.disable = disable, exports.enable = enable, exports.enabled = enabled, 
        exports.humanize = __webpack_require__(8), exports.names = [], exports.skips = [], 
        exports.formatters = {};
        var prevTime;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function parse(str) {
            if (str = String(str), !(str.length > 1e4)) {
                var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
                if (match) {
                    var n = parseFloat(match[1]);
                    switch ((match[2] || "ms").toLowerCase()) {
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
                        return;
                    }
                }
            }
        }
        function fmtShort(ms) {
            return ms >= d ? Math.round(ms / d) + "d" : ms >= h ? Math.round(ms / h) + "h" : ms >= m ? Math.round(ms / m) + "m" : ms >= s ? Math.round(ms / s) + "s" : ms + "ms";
        }
        function fmtLong(ms) {
            return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
        }
        function plural(ms, n, name) {
            if (!(ms < n)) return ms < 1.5 * n ? Math.floor(ms / n) + " " + name : Math.ceil(ms / n) + " " + name + "s";
        }
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, s = 1e3, m = 60 * s, h = 60 * m, d = 24 * h, y = 365.25 * d;
        module.exports = function(val, options) {
            options = options || {};
            var type = void 0 === val ? "undefined" : _typeof(val);
            if ("string" === type && val.length > 0) return parse(val);
            if ("number" === type && isNaN(val) === !1) return options.long ? fmtLong(val) : fmtShort(val);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
            setTimeout(fun, 0);
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
            if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
            clearTimeout(marker);
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
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
            queue.length && drainQueue());
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var len = queue.length; len; ) {
                    for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length;
                }
                currentQueue = null, draining = !1, runClearTimeout(timeout);
            }
        }
        function Item(fun, array) {
            this.fun = fun, this.array = array;
        }
        function noop() {}
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        !function() {
            try {
                cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
        process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, 
        process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
        process.emit = noop, process.binding = function(name) {
            throw new Error("process.binding is not supported");
        }, process.cwd = function() {
            return "/";
        }, process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        }, process.umask = function() {
            return 0;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _debug = __webpack_require__(2), _debug2 = _interopRequireDefault(_debug), _engine = __webpack_require__(0), _engine2 = _interopRequireDefault(_engine), _parser = __webpack_require__(12), _parser2 = _interopRequireDefault(_parser), debug = (0, 
        _debug2.default)("MT:MediaObject"), MediaObject = function() {
            function MediaObject(options, rootElement) {
                _classCallCheck(this, MediaObject), debug("Creating media object."), this.__uid = _engine2.default.uid(), 
                this.__info = options, this.hookedFns = {
                    hasChildNodes: rootElement.hasChildNodes.bind(rootElement),
                    removeChild: rootElement.removeChild.bind(rootElement),
                    getLastChild: function() {
                        return rootElement.lastChild;
                    },
                    appendChild: rootElement.appendChild.bind(rootElement)
                }, this.setProperties(_parser2.default.parse(this)), _engine2.default.startup(this), 
                debug("Starting media");
            }
            return _createClass(MediaObject, [ {
                key: "setProperties",
                value: function(properties) {
                    for (var key in properties) {
                        if (this[key]) throw new Error("The property " + key + " already exists in this MediaObject !");
                        this[key] = properties[key];
                    }
                }
            }, {
                key: "getId",
                value: function() {
                    return this.__uid;
                }
            }, {
                key: "getAttribute",
                value: function(attrName) {
                    return this.__info[attrName];
                }
            }, {
                key: "getAllDataAttrKeys",
                value: function() {
                    return Object.keys(this.__info).filter(function(field) {
                        return field.startsWith("data-attr");
                    });
                }
            }, {
                key: "getExtension",
                value: function() {
                    return this.extension;
                }
            }, {
                key: "getMimeType",
                value: function() {
                    return this.mime;
                }
            }, {
                key: "hasAttribute",
                value: function(attributeName) {
                    return attributeName in this.__info;
                }
            }, {
                key: "getType",
                value: function() {
                    return this.type;
                }
            }, {
                key: "clearContents",
                value: function() {
                    for (;this.hookedFns.hasChildNodes(); ) this.hookedFns.removeChild(this.hookedFns.getLastChild());
                    debug("All media contents cleared.");
                }
            }, {
                key: "replaceContents",
                value: function(nodes) {
                    var _this = this;
                    this.clearContents(), nodes.forEach(function(node) {
                        return _this.hookedFns.appendChild(node);
                    }), debug("Media contents replaced.");
                }
            }, {
                key: "utilsSetAllDataAttributes",
                value: function(element) {
                    var _this2 = this;
                    debug("Setting data attributes."), this.getAllDataAttrKeys().forEach(function(dataAttr) {
                        return element.setAttribute(dataAttr.substr(10), _this2.getAttribute(dataAttr));
                    });
                }
            }, {
                key: "utilsPassAllDataAttributes",
                value: function(element) {
                    var _this3 = this;
                    debug("Passing data attributes."), this.getAllDataAttrKeys().forEach(function(dataAttr) {
                        return element.setAttribute(dataAttr, _this3.getAttribute(dataAttr));
                    });
                }
            }, {
                key: "setAttribute",
                value: function(name, value) {
                    this.__info[name] = value;
                }
            }, {
                key: "removeAttribute",
                value: function(name) {
                    delete this.__info[name];
                }
            } ]), MediaObject;
        }();
        exports.default = MediaObject;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function getAttributesObject(element) {
            var attrsObj = {};
            if (element.hasAttributes()) for (var attrs = element.attributes, i = attrs.length - 1; i >= 0; i--) attrsObj[attrs[i].name] = attrs[i].value;
            return attrsObj;
        }
        function MediaTag(node) {
            return node.mediaObject ? node.mediaObject : (node.mediaObject = new _mediaObject2.default(getAttributesObject(node), node), 
            node.mediaObject);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _mediaObject = __webpack_require__(10), _mediaObject2 = _interopRequireDefault(_mediaObject), _filterManager = __webpack_require__(3), _filterManager2 = _interopRequireDefault(_filterManager), _pluginManager = __webpack_require__(4), _pluginManager2 = _interopRequireDefault(_pluginManager);
        MediaTag.registerFilter = _filterManager2.default.register, MediaTag.registerPlugin = _pluginManager2.default.register, 
        exports.default = MediaTag;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), Parser = function() {
            function Parser() {
                _classCallCheck(this, Parser);
            }
            return _createClass(Parser, null, [ {
                key: "extension",
                value: function(mediaObject) {
                    return mediaObject.getAttribute("data-type").split("/")[1];
                }
            }, {
                key: "type",
                value: function(mediaObject) {
                    return mediaObject.getAttribute("data-type").split("/")[0];
                }
            }, {
                key: "mime",
                value: function(mediaObject) {
                    return mediaObject.getAttribute("data-type");
                }
            }, {
                key: "protocol",
                value: function(mediaObject) {
                    var array = mediaObject.getAttribute("src").split("://");
                    return array.length > 1 ? array[0] : window.location.protocol;
                }
            }, {
                key: "hostname",
                value: function(mediaObject) {
                    var array = mediaObject.getAttribute("src").split("://");
                    return array.length > 1 ? array[1].split("/")[0] : window.location.hostname;
                }
            }, {
                key: "source",
                value: function(mediaObject) {
                    return mediaObject.getAttribute("src");
                }
            }, {
                key: "parse",
                value: function(mediaObject) {
                    return {
                        protocol: Parser.protocol(mediaObject),
                        hostname: Parser.hostname(mediaObject),
                        src: Parser.source(mediaObject),
                        type: Parser.type(mediaObject),
                        extension: Parser.extension(mediaObject),
                        mime: Parser.mime(mediaObject)
                    };
                }
            } ]), Parser;
        }();
        exports.default = Parser;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _errors = __webpack_require__(1), _errors2 = _interopRequireDefault(_errors), _engine = __webpack_require__(0), _engine2 = _interopRequireDefault(_engine), Crypto = function() {
            function Crypto() {
                _classCallCheck(this, Crypto);
            }
            return _createClass(Crypto, null, [ {
                key: "slice",
                value: function(u8) {
                    return Array.prototype.slice.call(u8);
                }
            }, {
                key: "getRandomKeyStr",
                value: function() {
                    var Nacl = Crypto.Nacl, rdm = Nacl.randomBytes(18);
                    return Nacl.util.encodeBase64(rdm);
                }
            }, {
                key: "getKeyFromStr",
                value: function(str) {
                    var Nacl = Crypto.Nacl;
                    return Nacl.hash(Nacl.util.decodeBase64(str)).subarray(32, 64);
                }
            }, {
                key: "encrypt",
                value: function(u8, key) {
                    var array = u8, nonce = Crypto.Nacl.randomBytes(24), packed = Crypto.Nacl.secretbox(array, nonce, key);
                    if (packed) return new Uint8Array(Crypto.slice(nonce).concat(Crypto.slice(packed)));
                    throw new Error();
                }
            }, {
                key: "decrypt",
                value: function(u8, key) {
                    if (u8.length < 24) throw new Error();
                    var slice = Crypto.slice, Nacl = Crypto.Nacl, nonce = new Uint8Array(slice(u8).slice(0, 24)), packed = new Uint8Array(slice(u8).slice(24)), unpacked = Nacl.secretbox.open(packed, nonce, key);
                    if (unpacked) return unpacked;
                    throw new Error("Decrypted file in undefined");
                }
            } ]), Crypto;
        }();
        Crypto.Nacl = window.nacl;
        var DataManager = function() {
            function DataManager() {
                _classCallCheck(this, DataManager);
            }
            return _createClass(DataManager, null, [ {
                key: "getArrayBuffer",
                value: function(url) {
                    return fetch(url).then(function(response) {
                        if (response.ok) return response.arrayBuffer();
                        throw new _errors2.default.FetchFails();
                    }).then(function(arrayBuffer) {
                        return arrayBuffer;
                    });
                }
            }, {
                key: "createUrl",
                value: function(arrayBuffer) {
                    return window.URL.createObjectURL(arrayBuffer);
                }
            }, {
                key: "getBlobUrl",
                value: function(data, mtype) {
                    return window.URL.createObjectURL(new Blob([ data ], {
                        type: mtype
                    }));
                }
            }, {
                key: "getDataUrl",
                value: function(data, mtype) {
                    return "data:" + mtype + ";base64," + Crypto.Nacl.util.encodeBase64(data);
                }
            } ]), DataManager;
        }(), CryptoFilter = {
            identifier: "crypto",
            typeCheck: function(mediaObject) {
                return mediaObject.hasAttribute("src") && mediaObject.hasAttribute("data-type") && mediaObject.hasAttribute("data-crypto-key");
            },
            startup: function(mediaObject) {
                var src = mediaObject.getAttribute("src"), strKey = mediaObject.getAttribute("data-crypto-key"), cryptoKey = Crypto.getKeyFromStr(strKey), xhr = new XMLHttpRequest();
                xhr.open("GET", src, !0), xhr.responseType = "arraybuffer", xhr.onload = function() {
                    var arrayBuffer = xhr.response;
                    if (arrayBuffer) {
                        var u8 = new Uint8Array(arrayBuffer), binStr = Crypto.decrypt(u8, cryptoKey), url = DataManager.getDataUrl(binStr, mediaObject.getMimeType());
                        mediaObject.setAttribute("src", url), mediaObject.removeAttribute("data-crypto-key"), 
                        _engine2.default.chain(mediaObject);
                    }
                }, xhr.send(null);
            }
        };
        exports.default = CryptoFilter;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ImagePlugin = {
            identifier: "image",
            typeCheck: function(mediaObject) {
                var regexExtensions = new RegExp("^png|jpg|jpeg|gif$"), regexMimes = new RegExp("^image/(png|svg+xml|jpeg|gif)$");
                return mediaObject.hasAttribute("src") && "image" === mediaObject.getType() && null !== regexExtensions.exec(mediaObject.getExtension()) && null !== regexMimes.exec(mediaObject.getMimeType());
            },
            startup: function(mediaObject) {
                var element = document.createElement("img");
                element.setAttribute("src", mediaObject.getAttribute("src")), mediaObject.utilsSetAllDataAttributes(element), 
                mediaObject.replaceContents([ element ]);
            }
        };
        exports.default = ImagePlugin;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var MediaTag = __webpack_require__(11).default, ImagePlugin = __webpack_require__(14).default;
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
        MediaTag.registerFilter(ClearKeyFilter), module.exports = MediaTag;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function inspect(obj, showHidden, depth, colors) {
            return formatValue({
                showHidden: showHidden,
                seen: [],
                stylize: function(str) {
                    return str;
                }
            }, obj, void 0 === depth ? 2 : depth);
        }
        function formatValue(ctx, value, recurseTimes) {
            if (value && "function" == typeof value.inspect && value.inspect !== exports.inspect && (!value.constructor || value.constructor.prototype !== value)) {
                var ret = value.inspect(recurseTimes);
                return "string" != typeof ret && (ret = formatValue(ctx, ret, recurseTimes)), ret;
            }
            var primitive = formatPrimitive(ctx, value);
            if (primitive) return primitive;
            if (isDOMElement(value)) {
                if ("outerHTML" in value) return value.outerHTML;
                try {
                    if (document.xmlVersion) {
                        return new XMLSerializer().serializeToString(value);
                    }
                    var ns = "http://www.w3.org/1999/xhtml", container = document.createElementNS(ns, "_");
                    return container.appendChild(value.cloneNode(!1)), html = container.innerHTML.replace("><", ">" + value.innerHTML + "<"), 
                    container.innerHTML = "", html;
                } catch (err) {}
            }
            var visibleKeys = getEnumerableProperties(value), keys = ctx.showHidden ? getProperties(value) : visibleKeys;
            if (0 === keys.length || isError(value) && (1 === keys.length && "stack" === keys[0] || 2 === keys.length && "description" === keys[0] && "stack" === keys[1])) {
                if ("function" == typeof value) {
                    var name = getName(value), nameSuffix = name ? ": " + name : "";
                    return ctx.stylize("[Function" + nameSuffix + "]", "special");
                }
                if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
                if (isDate(value)) return ctx.stylize(Date.prototype.toUTCString.call(value), "date");
                if (isError(value)) return formatError(value);
            }
            var base = "", array = !1, braces = [ "{", "}" ];
            if (isArray(value) && (array = !0, braces = [ "[", "]" ]), "function" == typeof value) {
                var name = getName(value), nameSuffix = name ? ": " + name : "";
                base = " [Function" + nameSuffix + "]";
            }
            if (isRegExp(value) && (base = " " + RegExp.prototype.toString.call(value)), isDate(value) && (base = " " + Date.prototype.toUTCString.call(value)), 
            isError(value)) return formatError(value);
            if (0 === keys.length && (!array || 0 == value.length)) return braces[0] + base + braces[1];
            if (recurseTimes < 0) return isRegExp(value) ? ctx.stylize(RegExp.prototype.toString.call(value), "regexp") : ctx.stylize("[Object]", "special");
            ctx.seen.push(value);
            var output;
            return output = array ? formatArray(ctx, value, recurseTimes, visibleKeys, keys) : keys.map(function(key) {
                return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
            }), ctx.seen.pop(), reduceToSingleString(output, base, braces);
        }
        function formatPrimitive(ctx, value) {
            switch (void 0 === value ? "undefined" : _typeof(value)) {
              case "undefined":
                return ctx.stylize("undefined", "undefined");

              case "string":
                var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return ctx.stylize(simple, "string");

              case "number":
                return 0 === value && 1 / value == -(1 / 0) ? ctx.stylize("-0", "number") : ctx.stylize("" + value, "number");

              case "boolean":
                return ctx.stylize("" + value, "boolean");
            }
            if (null === value) return ctx.stylize("null", "null");
        }
        function formatError(value) {
            return "[" + Error.prototype.toString.call(value) + "]";
        }
        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            for (var output = [], i = 0, l = value.length; i < l; ++i) Object.prototype.hasOwnProperty.call(value, String(i)) ? output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), !0)) : output.push("");
            return keys.forEach(function(key) {
                key.match(/^\d+$/) || output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, !0));
            }), output;
        }
        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
            var name, str;
            if (value.__lookupGetter__ && (value.__lookupGetter__(key) ? str = value.__lookupSetter__(key) ? ctx.stylize("[Getter/Setter]", "special") : ctx.stylize("[Getter]", "special") : value.__lookupSetter__(key) && (str = ctx.stylize("[Setter]", "special"))), 
            visibleKeys.indexOf(key) < 0 && (name = "[" + key + "]"), str || (ctx.seen.indexOf(value[key]) < 0 ? (str = null === recurseTimes ? formatValue(ctx, value[key], null) : formatValue(ctx, value[key], recurseTimes - 1), 
            str.indexOf("\n") > -1 && (str = array ? str.split("\n").map(function(line) {
                return "  " + line;
            }).join("\n").substr(2) : "\n" + str.split("\n").map(function(line) {
                return "   " + line;
            }).join("\n"))) : str = ctx.stylize("[Circular]", "special")), void 0 === name) {
                if (array && key.match(/^\d+$/)) return str;
                name = JSON.stringify("" + key), name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (name = name.substr(1, name.length - 2), 
                name = ctx.stylize(name, "name")) : (name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), 
                name = ctx.stylize(name, "string"));
            }
            return name + ": " + str;
        }
        function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0;
            return output.reduce(function(prev, cur) {
                return numLinesEst++, cur.indexOf("\n") >= 0 && numLinesEst++, prev + cur.length + 1;
            }, 0) > 60 ? braces[0] + ("" === base ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1] : braces[0] + base + " " + output.join(", ") + " " + braces[1];
        }
        function isArray(ar) {
            return Array.isArray(ar) || "object" === (void 0 === ar ? "undefined" : _typeof(ar)) && "[object Array]" === objectToString(ar);
        }
        function isRegExp(re) {
            return "object" === (void 0 === re ? "undefined" : _typeof(re)) && "[object RegExp]" === objectToString(re);
        }
        function isDate(d) {
            return "object" === (void 0 === d ? "undefined" : _typeof(d)) && "[object Date]" === objectToString(d);
        }
        function isError(e) {
            return "object" === (void 0 === e ? "undefined" : _typeof(e)) && "[object Error]" === objectToString(e);
        }
        function objectToString(o) {
            return Object.prototype.toString.call(o);
        }
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, getName = __webpack_require__(26), getProperties = __webpack_require__(49), getEnumerableProperties = __webpack_require__(46);
        module.exports = inspect;
        var isDOMElement = function(object) {
            return "object" === ("undefined" == typeof HTMLElement ? "undefined" : _typeof(HTMLElement)) ? object instanceof HTMLElement : object && "object" === (void 0 === object ? "undefined" : _typeof(object)) && 1 === object.nodeType && "string" == typeof object.nodeName;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(61);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _engine = __webpack_require__(0), _engine2 = _interopRequireDefault(_engine), ClearKeyFilter = {
            identifier: "clear-key",
            typeCheck: function(mediaObject) {
                return mediaObject.hasAttribute("data-clear-key");
            },
            startup: function(mediaObject) {
                var clearKey = mediaObject.getAttribute("data-clear-key"), id = clearKey.substring(0, 32), key = clearKey.substring(33, 65);
                mediaObject.setAttribute("id", id), mediaObject.setAttribute("key", key), mediaObject.removeAttribute("data-clear-key"), 
                _engine2.default.chain(mediaObject);
            }
        };
        exports.default = ClearKeyFilter;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _engine = __webpack_require__(0), _engine2 = _interopRequireDefault(_engine), DefaultFilter = {
            identifier: "default",
            typeCheck: function(mediaObject) {
                var result = mediaObject.hasAttribute("src") && mediaObject.hasAttribute("data-type");
                if (result) return result;
                throw new Error('Malformatted media-tag, it must have an attribute "src" and "data-type"');
            },
            startup: function(mediaObject) {
                _engine2.default.chain(mediaObject);
            }
        };
        exports.default = DefaultFilter;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var AudioPlugin = {
            identifier: "audio",
            typeCheck: function(mediaObject) {
                var regexExtensions = new RegExp("^mp3|ogg|webm|wav$"), regexMimes = new RegExp("^audio/(mp3|ogg|webm|wav)$");
                return mediaObject.hasAttribute("src") && "audio" === mediaObject.getType() && null !== regexExtensions.exec(mediaObject.getExtension()) && null !== regexMimes.exec(mediaObject.getMimeType());
            },
            startup: function(mediaObject) {
                var element = document.createElement("audio");
                element.setAttribute("src", mediaObject.getAttribute("src")), mediaObject.utilsSetAllDataAttributes(element), 
                mediaObject.replaceContents([ element ]);
            }
        };
        exports.default = AudioPlugin;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var DashPlugin = {
            identifier: "dash",
            typeCheck: function(mediaObject) {
                var regexExtensions = new RegExp("^dash[+]xml$"), regexMimes = new RegExp("^application/dash[+]xml$");
                return mediaObject.hasAttribute("src") && "application" === mediaObject.getType() && null !== regexExtensions.exec(mediaObject.getExtension()) && null !== regexMimes.exec(mediaObject.getMimeType());
            },
            startup: function(mediaObject) {
                var video = document.createElement("video"), player = new shaka.Player(video), id = mediaObject.getAttribute("id"), key = mediaObject.getAttribute("key");
                if (id && key) {
                    var clearKeyStringObject = '{"' + id + '": "' + key + '"}', clearKey = JSON.parse(clearKeyStringObject);
                    player.configure({
                        drm: {
                            clearKeys: clearKey
                        }
                    });
                }
                mediaObject.utilsSetAllDataAttributes(video), mediaObject.replaceContents([ video ]), 
                player.load(mediaObject.getAttribute("src")).then(function() {});
            }
        };
        exports.default = DashPlugin;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var PdfPlugin = {
            identifier: "pdf",
            typeCheck: function(mediaObject) {
                var regexExtensions = new RegExp("^pdf$"), regexMimes = new RegExp("^application/pdf$");
                return mediaObject.hasAttribute("src") && "application" === mediaObject.getType() && null !== regexExtensions.exec(mediaObject.getExtension()) && null !== regexMimes.exec(mediaObject.getMimeType());
            },
            startup: function(mediaObject) {
                var url = mediaObject.getAttribute("src"), canvas = document.createElement("canvas");
                mediaObject.utilsSetAllDataAttributes(canvas), mediaObject.replaceContents([ canvas ]), 
                PDFJS.disableWorker = !0, PDFJS.getDocument(url).promise.then(function(pdf) {
                    function render(page) {
                        var scale = 1, viewport = page.getViewport(scale), context = canvas.getContext("2d");
                        canvas.height = viewport.height, canvas.width = viewport.width;
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        page.render(renderContext).then(function() {});
                    }
                    function update(mouseEvent) {
                        mouseEvent || console.log("no event"), 0 === mouseEvent.buttons ? pageNumber === pdf.numPages ? pageNumber = 1 : pageNumber++ : 4 === mouseEvent.buttons && (1 === pageNumber ? pageNumber = pdf.numPages : pageNumber--);
                    }
                    var pageNumber = 1;
                    pdf.getPage(pageNumber).then(function(page) {
                        render(page);
                    }), canvas.onclick = function(event) {
                        update(event), pdf.getPage(pageNumber).then(function(page) {
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
            value: !0
        });
        var VideoPlugin = {
            identifier: "video",
            typeCheck: function(mediaObject) {
                var regexExtensions = new RegExp("^mp4|ogg|webm$"), regexMimes = new RegExp("^video/(mp4|ogg|webm)$");
                return mediaObject.hasAttribute("src") && "video" === mediaObject.getType() && null !== regexExtensions.exec(mediaObject.getExtension()) && null !== regexMimes.exec(mediaObject.getMimeType());
            },
            startup: function(mediaObject) {
                var element = document.createElement("video");
                element.setAttribute("src", mediaObject.getAttribute("src")), mediaObject.utilsSetAllDataAttributes(element), 
                mediaObject.replaceContents([ element ]);
            }
        };
        exports.default = VideoPlugin;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function exclude() {
            function excludeProps(res, obj) {
                Object.keys(obj).forEach(function(key) {
                    ~excludes.indexOf(key) || (res[key] = obj[key]);
                });
            }
            var excludes = [].slice.call(arguments);
            return function() {
                for (var args = [].slice.call(arguments), i = 0, res = {}; i < args.length; i++) excludeProps(res, args[i]);
                return res;
            };
        }
        function AssertionError(message, _props, ssf) {
            var extend = exclude("name", "message", "stack", "constructor", "toJSON"), props = extend(_props || {});
            this.message = message || "Unspecified AssertionError", this.showDiff = !1;
            for (var key in props) this[key] = props[key];
            if ((ssf = ssf || arguments.callee) && Error.captureStackTrace) Error.captureStackTrace(this, ssf); else try {
                throw new Error();
            } catch (e) {
                this.stack = e.stack;
            }
        }
        module.exports = AssertionError, AssertionError.prototype = Object.create(Error.prototype), 
        AssertionError.prototype.name = "AssertionError", AssertionError.prototype.constructor = AssertionError, 
        AssertionError.prototype.toJSON = function(stack) {
            var extend = exclude("constructor", "toJSON", "stack"), props = extend({
                name: this.name
            }, this);
            return !1 !== stack && this.stack && (props.stack = this.stack), props;
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
        function parsePath(path) {
            return path.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map(function(value) {
                var re = /^\[(\d+)\]$/, mArr = re.exec(value);
                return mArr ? {
                    i: parseFloat(mArr[1])
                } : {
                    p: value.replace(/\\([.\[\]])/g, "$1")
                };
            });
        }
        function _getPathValue(parsed, obj, index) {
            var res, tmp = obj;
            index = void 0 === index ? parsed.length : index;
            for (var i = 0, l = index; i < l; i++) {
                var part = parsed[i];
                tmp ? (void 0 !== part.p ? tmp = tmp[part.p] : void 0 !== part.i && (tmp = tmp[part.i]), 
                i == l - 1 && (res = tmp)) : res = void 0;
            }
            return res;
        }
        var hasProperty = __webpack_require__(28);
        module.exports = function(path, obj) {
            var parsed = parsePath(path), last = parsed[parsed.length - 1], info = {
                parent: parsed.length > 1 ? _getPathValue(parsed, obj, parsed.length - 1) : obj,
                name: last.p || last.i,
                value: _getPathValue(parsed, obj)
            };
            return info.exists = hasProperty(info.name, info.parent), info;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, type = __webpack_require__(17), literals = {
            number: Number,
            string: String
        };
        module.exports = function(name, obj) {
            var ot = type(obj);
            return "null" !== ot && "undefined" !== ot && (literals[ot] && "object" !== (void 0 === obj ? "undefined" : _typeof(obj)) && (obj = new literals[ot](obj)), 
            name in obj);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var inspect = __webpack_require__(16), config = __webpack_require__(6);
        module.exports = function(obj) {
            var str = inspect(obj), type = Object.prototype.toString.call(obj);
            if (config.truncateThreshold && str.length >= config.truncateThreshold) {
                if ("[object Function]" === type) return obj.name && "" !== obj.name ? "[Function: " + obj.name + "]" : "[Function]";
                if ("[object Array]" === type) return "[ Array(" + obj.length + ") ]";
                if ("[object Object]" === type) {
                    var keys = Object.keys(obj);
                    return "{ Object (" + (keys.length > 2 ? keys.splice(0, 2).join(", ") + ", ..." : keys.join(", ")) + ") }";
                }
                return str;
            }
            return str;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(assertion, object, includeAll) {
            var flags = assertion.__flags || (assertion.__flags = Object.create(null));
            object.__flags || (object.__flags = Object.create(null)), includeAll = 3 !== arguments.length || includeAll;
            for (var flag in flags) (includeAll || "object" !== flag && "ssfi" !== flag && "message" != flag) && (object.__flags[flag] = flags[flag]);
        };
    }, , function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var _chai = __webpack_require__(35), _chai2 = _interopRequireDefault(_chai), _mediaTag = __webpack_require__(15), _mediaTag2 = _interopRequireDefault(_mediaTag);
        describe("Create different media tag contents: ", function() {
            it("can create a media-tag containing an image", function() {
                var mediaTagContainer = document.createElement("media-tag");
                mediaTagContainer.setAttribute("src", "image-without-extension"), mediaTagContainer.setAttribute("data-type", "image/png"), 
                mediaTagContainer.setAttribute("data-attr-width", "300px"), mediaTagContainer.setAttribute("data-attr-height", "200px"), 
                (0, _mediaTag2.default)(mediaTagContainer);
                var expectedResult = document.createElement("img");
                expectedResult.setAttribute("src", "image-without-extension"), expectedResult.setAttribute("width", "300px"), 
                expectedResult.setAttribute("height", "200px"), _chai2.default.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), "media tag result element is like the expected element");
            }), it("can create a media-tag containing an audio", function() {
                var mediaTagContainer = document.createElement("media-tag");
                mediaTagContainer.setAttribute("src", "alterway.mp3"), mediaTagContainer.setAttribute("data-type", "audio/mp3"), 
                mediaTagContainer.setAttribute("data-attr-controls", "controls"), (0, _mediaTag2.default)(mediaTagContainer);
                var expectedResult = document.createElement("audio");
                expectedResult.setAttribute("src", "alterway.mp3"), expectedResult.setAttribute("controls", "controls"), 
                _chai2.default.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), "media tag result element is like the expected element");
            }), it("can create a media-tag containing a video", function() {
                var mediaTagContainer = document.createElement("media-tag");
                mediaTagContainer.setAttribute("src", "cube.mp4"), mediaTagContainer.setAttribute("data-type", "video/mp4"), 
                mediaTagContainer.setAttribute("data-attr-width", "300px"), mediaTagContainer.setAttribute("data-attr-height", "200px"), 
                (0, _mediaTag2.default)(mediaTagContainer);
                var expectedResult = document.createElement("video");
                expectedResult.setAttribute("src", "cube.mp4"), expectedResult.setAttribute("width", "300px"), 
                expectedResult.setAttribute("height", "200px"), _chai2.default.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), "media tag result element is like the expected element");
            });
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function placeHoldersCount(b64) {
            var len = b64.length;
            if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            return "=" === b64[len - 2] ? 2 : "=" === b64[len - 1] ? 1 : 0;
        }
        function byteLength(b64) {
            return 3 * b64.length / 4 - placeHoldersCount(b64);
        }
        function toByteArray(b64) {
            var i, j, l, tmp, placeHolders, arr, len = b64.length;
            placeHolders = placeHoldersCount(b64), arr = new Arr(3 * len / 4 - placeHolders), 
            l = placeHolders > 0 ? len - 4 : len;
            var L = 0;
            for (i = 0, j = 0; i < l; i += 4, j += 3) tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)], 
            arr[L++] = tmp >> 16 & 255, arr[L++] = tmp >> 8 & 255, arr[L++] = 255 & tmp;
            return 2 === placeHolders ? (tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4, 
            arr[L++] = 255 & tmp) : 1 === placeHolders && (tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2, 
            arr[L++] = tmp >> 8 & 255, arr[L++] = 255 & tmp), arr;
        }
        function tripletToBase64(num) {
            return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num];
        }
        function encodeChunk(uint8, start, end) {
            for (var tmp, output = [], i = start; i < end; i += 3) tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2], 
            output.push(tripletToBase64(tmp));
            return output.join("");
        }
        function fromByteArray(uint8) {
            for (var tmp, len = uint8.length, extraBytes = len % 3, output = "", parts = [], maxChunkLength = 16383, i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
            return 1 === extraBytes ? (tmp = uint8[len - 1], output += lookup[tmp >> 2], output += lookup[tmp << 4 & 63], 
            output += "==") : 2 === extraBytes && (tmp = (uint8[len - 2] << 8) + uint8[len - 1], 
            output += lookup[tmp >> 10], output += lookup[tmp >> 4 & 63], output += lookup[tmp << 2 & 63], 
            output += "="), parts.push(output), parts.join("");
        }
        exports.byteLength = byteLength, exports.toByteArray = toByteArray, exports.fromByteArray = fromByteArray;
        for (var lookup = [], revLookup = [], Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i) lookup[i] = code[i], 
        revLookup[code.charCodeAt(i)] = i;
        revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        (function(global) {
            function typedArraySupport() {
                try {
                    var arr = new Uint8Array(1);
                    return arr.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42;
                        }
                    }, 42 === arr.foo() && "function" == typeof arr.subarray && 0 === arr.subarray(1, 1).byteLength;
                } catch (e) {
                    return !1;
                }
            }
            function kMaxLength() {
                return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function createBuffer(that, length) {
                if (kMaxLength() < length) throw new RangeError("Invalid typed array length");
                return Buffer.TYPED_ARRAY_SUPPORT ? (that = new Uint8Array(length), that.__proto__ = Buffer.prototype) : (null === that && (that = new Buffer(length)), 
                that.length = length), that;
            }
            function Buffer(arg, encodingOrOffset, length) {
                if (!(Buffer.TYPED_ARRAY_SUPPORT || this instanceof Buffer)) return new Buffer(arg, encodingOrOffset, length);
                if ("number" == typeof arg) {
                    if ("string" == typeof encodingOrOffset) throw new Error("If encoding is specified then the first argument must be a string");
                    return allocUnsafe(this, arg);
                }
                return from(this, arg, encodingOrOffset, length);
            }
            function from(that, value, encodingOrOffset, length) {
                if ("number" == typeof value) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && value instanceof ArrayBuffer ? fromArrayBuffer(that, value, encodingOrOffset, length) : "string" == typeof value ? fromString(that, value, encodingOrOffset) : fromObject(that, value);
            }
            function assertSize(size) {
                if ("number" != typeof size) throw new TypeError('"size" argument must be a number');
                if (size < 0) throw new RangeError('"size" argument must not be negative');
            }
            function alloc(that, size, fill, encoding) {
                return assertSize(size), size <= 0 ? createBuffer(that, size) : void 0 !== fill ? "string" == typeof encoding ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill) : createBuffer(that, size);
            }
            function allocUnsafe(that, size) {
                if (assertSize(size), that = createBuffer(that, size < 0 ? 0 : 0 | checked(size)), 
                !Buffer.TYPED_ARRAY_SUPPORT) for (var i = 0; i < size; ++i) that[i] = 0;
                return that;
            }
            function fromString(that, string, encoding) {
                if ("string" == typeof encoding && "" !== encoding || (encoding = "utf8"), !Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
                var length = 0 | byteLength(string, encoding);
                that = createBuffer(that, length);
                var actual = that.write(string, encoding);
                return actual !== length && (that = that.slice(0, actual)), that;
            }
            function fromArrayLike(that, array) {
                var length = array.length < 0 ? 0 : 0 | checked(array.length);
                that = createBuffer(that, length);
                for (var i = 0; i < length; i += 1) that[i] = 255 & array[i];
                return that;
            }
            function fromArrayBuffer(that, array, byteOffset, length) {
                if (array.byteLength, byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("'offset' is out of bounds");
                if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("'length' is out of bounds");
                return array = void 0 === byteOffset && void 0 === length ? new Uint8Array(array) : void 0 === length ? new Uint8Array(array, byteOffset) : new Uint8Array(array, byteOffset, length), 
                Buffer.TYPED_ARRAY_SUPPORT ? (that = array, that.__proto__ = Buffer.prototype) : that = fromArrayLike(that, array), 
                that;
            }
            function fromObject(that, obj) {
                if (Buffer.isBuffer(obj)) {
                    var len = 0 | checked(obj.length);
                    return that = createBuffer(that, len), 0 === that.length ? that : (obj.copy(that, 0, 0, len), 
                    that);
                }
                if (obj) {
                    if ("undefined" != typeof ArrayBuffer && obj.buffer instanceof ArrayBuffer || "length" in obj) return "number" != typeof obj.length || isnan(obj.length) ? createBuffer(that, 0) : fromArrayLike(that, obj);
                    if ("Buffer" === obj.type && isArray(obj.data)) return fromArrayLike(that, obj.data);
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }
            function checked(length) {
                if (length >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
                return 0 | length;
            }
            function SlowBuffer(length) {
                return +length != length && (length = 0), Buffer.alloc(+length);
            }
            function byteLength(string, encoding) {
                if (Buffer.isBuffer(string)) return string.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
                "string" != typeof string && (string = "" + string);
                var len = string.length;
                if (0 === len) return 0;
                for (var loweredCase = !1; ;) switch (encoding) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return len;

                  case "utf8":
                  case "utf-8":
                  case void 0:
                    return utf8ToBytes(string).length;

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * len;

                  case "hex":
                    return len >>> 1;

                  case "base64":
                    return base64ToBytes(string).length;

                  default:
                    if (loweredCase) return utf8ToBytes(string).length;
                    encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
                }
            }
            function slowToString(encoding, start, end) {
                var loweredCase = !1;
                if ((void 0 === start || start < 0) && (start = 0), start > this.length) return "";
                if ((void 0 === end || end > this.length) && (end = this.length), end <= 0) return "";
                if (end >>>= 0, start >>>= 0, end <= start) return "";
                for (encoding || (encoding = "utf8"); ;) switch (encoding) {
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
                    encoding = (encoding + "").toLowerCase(), loweredCase = !0;
                }
            }
            function swap(b, n, m) {
                var i = b[n];
                b[n] = b[m], b[m] = i;
            }
            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                if (0 === buffer.length) return -1;
                if ("string" == typeof byteOffset ? (encoding = byteOffset, byteOffset = 0) : byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648), 
                byteOffset = +byteOffset, isNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1), 
                byteOffset < 0 && (byteOffset = buffer.length + byteOffset), byteOffset >= buffer.length) {
                    if (dir) return -1;
                    byteOffset = buffer.length - 1;
                } else if (byteOffset < 0) {
                    if (!dir) return -1;
                    byteOffset = 0;
                }
                if ("string" == typeof val && (val = Buffer.from(val, encoding)), Buffer.isBuffer(val)) return 0 === val.length ? -1 : arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                if ("number" == typeof val) return val &= 255, Buffer.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset) : arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                function read(buf, i) {
                    return 1 === indexSize ? buf[i] : buf.readUInt16BE(i * indexSize);
                }
                var indexSize = 1, arrLength = arr.length, valLength = val.length;
                if (void 0 !== encoding && ("ucs2" === (encoding = String(encoding).toLowerCase()) || "ucs-2" === encoding || "utf16le" === encoding || "utf-16le" === encoding)) {
                    if (arr.length < 2 || val.length < 2) return -1;
                    indexSize = 2, arrLength /= 2, valLength /= 2, byteOffset /= 2;
                }
                var i;
                if (dir) {
                    var foundIndex = -1;
                    for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                        if (foundIndex === -1 && (foundIndex = i), i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                    } else foundIndex !== -1 && (i -= i - foundIndex), foundIndex = -1;
                } else for (byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength), 
                i = byteOffset; i >= 0; i--) {
                    for (var found = !0, j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
                        found = !1;
                        break;
                    }
                    if (found) return i;
                }
                return -1;
            }
            function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                var remaining = buf.length - offset;
                length ? (length = Number(length)) > remaining && (length = remaining) : length = remaining;
                var strLen = string.length;
                if (strLen % 2 != 0) throw new TypeError("Invalid hex string");
                length > strLen / 2 && (length = strLen / 2);
                for (var i = 0; i < length; ++i) {
                    var parsed = parseInt(string.substr(2 * i, 2), 16);
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
            function base64Slice(buf, start, end) {
                return 0 === start && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end));
            }
            function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                for (var res = [], i = start; i < end; ) {
                    var firstByte = buf[i], codePoint = null, bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                        var secondByte, thirdByte, fourthByte, tempCodePoint;
                        switch (bytesPerSequence) {
                          case 1:
                            firstByte < 128 && (codePoint = firstByte);
                            break;

                          case 2:
                            secondByte = buf[i + 1], 128 == (192 & secondByte) && (tempCodePoint = (31 & firstByte) << 6 | 63 & secondByte) > 127 && (codePoint = tempCodePoint);
                            break;

                          case 3:
                            secondByte = buf[i + 1], thirdByte = buf[i + 2], 128 == (192 & secondByte) && 128 == (192 & thirdByte) && (tempCodePoint = (15 & firstByte) << 12 | (63 & secondByte) << 6 | 63 & thirdByte) > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint);
                            break;

                          case 4:
                            secondByte = buf[i + 1], thirdByte = buf[i + 2], fourthByte = buf[i + 3], 128 == (192 & secondByte) && 128 == (192 & thirdByte) && 128 == (192 & fourthByte) && (tempCodePoint = (15 & firstByte) << 18 | (63 & secondByte) << 12 | (63 & thirdByte) << 6 | 63 & fourthByte) > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint);
                        }
                    }
                    null === codePoint ? (codePoint = 65533, bytesPerSequence = 1) : codePoint > 65535 && (codePoint -= 65536, 
                    res.push(codePoint >>> 10 & 1023 | 55296), codePoint = 56320 | 1023 & codePoint), 
                    res.push(codePoint), i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
            }
            function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
                for (var res = "", i = 0; i < len; ) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                return res;
            }
            function asciiSlice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) ret += String.fromCharCode(127 & buf[i]);
                return ret;
            }
            function latin1Slice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
                return ret;
            }
            function hexSlice(buf, start, end) {
                var len = buf.length;
                (!start || start < 0) && (start = 0), (!end || end < 0 || end > len) && (end = len);
                for (var out = "", i = start; i < end; ++i) out += toHex(buf[i]);
                return out;
            }
            function utf16leSlice(buf, start, end) {
                for (var bytes = buf.slice(start, end), res = "", i = 0; i < bytes.length; i += 2) res += String.fromCharCode(bytes[i] + 256 * bytes[i + 1]);
                return res;
            }
            function checkOffset(offset, ext, length) {
                if (offset % 1 != 0 || offset < 0) throw new RangeError("offset is not uint");
                if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
            }
            function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
            }
            function objectWriteUInt16(buf, value, offset, littleEndian) {
                value < 0 && (value = 65535 + value + 1);
                for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> 8 * (littleEndian ? i : 1 - i);
            }
            function objectWriteUInt32(buf, value, offset, littleEndian) {
                value < 0 && (value = 4294967295 + value + 1);
                for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) buf[offset + i] = value >>> 8 * (littleEndian ? i : 3 - i) & 255;
            }
            function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
                if (offset < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(buf, value, offset, littleEndian, noAssert) {
                return noAssert || checkIEEE754(buf, value, offset, 4, 3.4028234663852886e38, -3.4028234663852886e38), 
                ieee754.write(buf, value, offset, littleEndian, 23, 4), offset + 4;
            }
            function writeDouble(buf, value, offset, littleEndian, noAssert) {
                return noAssert || checkIEEE754(buf, value, offset, 8, 1.7976931348623157e308, -1.7976931348623157e308), 
                ieee754.write(buf, value, offset, littleEndian, 52, 8), offset + 8;
            }
            function base64clean(str) {
                if (str = stringtrim(str).replace(INVALID_BASE64_RE, ""), str.length < 2) return "";
                for (;str.length % 4 != 0; ) str += "=";
                return str;
            }
            function stringtrim(str) {
                return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
            }
            function toHex(n) {
                return n < 16 ? "0" + n.toString(16) : n.toString(16);
            }
            function utf8ToBytes(string, units) {
                units = units || 1 / 0;
                for (var codePoint, length = string.length, leadSurrogate = null, bytes = [], i = 0; i < length; ++i) {
                    if ((codePoint = string.charCodeAt(i)) > 55295 && codePoint < 57344) {
                        if (!leadSurrogate) {
                            if (codePoint > 56319) {
                                (units -= 3) > -1 && bytes.push(239, 191, 189);
                                continue;
                            }
                            if (i + 1 === length) {
                                (units -= 3) > -1 && bytes.push(239, 191, 189);
                                continue;
                            }
                            leadSurrogate = codePoint;
                            continue;
                        }
                        if (codePoint < 56320) {
                            (units -= 3) > -1 && bytes.push(239, 191, 189), leadSurrogate = codePoint;
                            continue;
                        }
                        codePoint = 65536 + (leadSurrogate - 55296 << 10 | codePoint - 56320);
                    } else leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
                    if (leadSurrogate = null, codePoint < 128) {
                        if ((units -= 1) < 0) break;
                        bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                        if ((units -= 2) < 0) break;
                        bytes.push(codePoint >> 6 | 192, 63 & codePoint | 128);
                    } else if (codePoint < 65536) {
                        if ((units -= 3) < 0) break;
                        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
                    } else {
                        if (!(codePoint < 1114112)) throw new Error("Invalid code point");
                        if ((units -= 4) < 0) break;
                        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
                    }
                }
                return bytes;
            }
            function asciiToBytes(str) {
                for (var byteArray = [], i = 0; i < str.length; ++i) byteArray.push(255 & str.charCodeAt(i));
                return byteArray;
            }
            function utf16leToBytes(str, units) {
                for (var c, hi, lo, byteArray = [], i = 0; i < str.length && !((units -= 2) < 0); ++i) c = str.charCodeAt(i), 
                hi = c >> 8, lo = c % 256, byteArray.push(lo), byteArray.push(hi);
                return byteArray;
            }
            function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
            }
            function blitBuffer(src, dst, offset, length) {
                for (var i = 0; i < length && !(i + offset >= dst.length || i >= src.length); ++i) dst[i + offset] = src[i];
                return i;
            }
            function isnan(val) {
                return val !== val;
            }
            var base64 = __webpack_require__(33), ieee754 = __webpack_require__(59), isArray = __webpack_require__(60);
            exports.Buffer = Buffer, exports.SlowBuffer = SlowBuffer, exports.INSPECT_MAX_BYTES = 50, 
            Buffer.TYPED_ARRAY_SUPPORT = void 0 !== global.TYPED_ARRAY_SUPPORT ? global.TYPED_ARRAY_SUPPORT : typedArraySupport(), 
            exports.kMaxLength = kMaxLength(), Buffer.poolSize = 8192, Buffer._augment = function(arr) {
                return arr.__proto__ = Buffer.prototype, arr;
            }, Buffer.from = function(value, encodingOrOffset, length) {
                return from(null, value, encodingOrOffset, length);
            }, Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype, 
            Buffer.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
                value: null,
                configurable: !0
            })), Buffer.alloc = function(size, fill, encoding) {
                return alloc(null, size, fill, encoding);
            }, Buffer.allocUnsafe = function(size) {
                return allocUnsafe(null, size);
            }, Buffer.allocUnsafeSlow = function(size) {
                return allocUnsafe(null, size);
            }, Buffer.isBuffer = function(b) {
                return !(null == b || !b._isBuffer);
            }, Buffer.compare = function(a, b) {
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
                if (a === b) return 0;
                for (var x = a.length, y = b.length, i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
                    x = a[i], y = b[i];
                    break;
                }
                return x < y ? -1 : y < x ? 1 : 0;
            }, Buffer.isEncoding = function(encoding) {
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
                    return !0;

                  default:
                    return !1;
                }
            }, Buffer.concat = function(list, length) {
                if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === list.length) return Buffer.alloc(0);
                var i;
                if (void 0 === length) for (length = 0, i = 0; i < list.length; ++i) length += list[i].length;
                var buffer = Buffer.allocUnsafe(length), pos = 0;
                for (i = 0; i < list.length; ++i) {
                    var buf = list[i];
                    if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
                    buf.copy(buffer, pos), pos += buf.length;
                }
                return buffer;
            }, Buffer.byteLength = byteLength, Buffer.prototype._isBuffer = !0, Buffer.prototype.swap16 = function() {
                var len = this.length;
                if (len % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var i = 0; i < len; i += 2) swap(this, i, i + 1);
                return this;
            }, Buffer.prototype.swap32 = function() {
                var len = this.length;
                if (len % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var i = 0; i < len; i += 4) swap(this, i, i + 3), swap(this, i + 1, i + 2);
                return this;
            }, Buffer.prototype.swap64 = function() {
                var len = this.length;
                if (len % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var i = 0; i < len; i += 8) swap(this, i, i + 7), swap(this, i + 1, i + 6), 
                swap(this, i + 2, i + 5), swap(this, i + 3, i + 4);
                return this;
            }, Buffer.prototype.toString = function() {
                var length = 0 | this.length;
                return 0 === length ? "" : 0 === arguments.length ? utf8Slice(this, 0, length) : slowToString.apply(this, arguments);
            }, Buffer.prototype.equals = function(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                return this === b || 0 === Buffer.compare(this, b);
            }, Buffer.prototype.inspect = function() {
                var str = "", max = exports.INSPECT_MAX_BYTES;
                return this.length > 0 && (str = this.toString("hex", 0, max).match(/.{2}/g).join(" "), 
                this.length > max && (str += " ... ")), "<Buffer " + str + ">";
            }, Buffer.prototype.compare = function(target, start, end, thisStart, thisEnd) {
                if (!Buffer.isBuffer(target)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === start && (start = 0), void 0 === end && (end = target ? target.length : 0), 
                void 0 === thisStart && (thisStart = 0), void 0 === thisEnd && (thisEnd = this.length), 
                start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
                if (thisStart >= thisEnd && start >= end) return 0;
                if (thisStart >= thisEnd) return -1;
                if (start >= end) return 1;
                if (start >>>= 0, end >>>= 0, thisStart >>>= 0, thisEnd >>>= 0, this === target) return 0;
                for (var x = thisEnd - thisStart, y = end - start, len = Math.min(x, y), thisCopy = this.slice(thisStart, thisEnd), targetCopy = target.slice(start, end), i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
                    x = thisCopy[i], y = targetCopy[i];
                    break;
                }
                return x < y ? -1 : y < x ? 1 : 0;
            }, Buffer.prototype.includes = function(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1;
            }, Buffer.prototype.indexOf = function(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, !0);
            }, Buffer.prototype.lastIndexOf = function(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, !1);
            }, Buffer.prototype.write = function(string, offset, length, encoding) {
                if (void 0 === offset) encoding = "utf8", length = this.length, offset = 0; else if (void 0 === length && "string" == typeof offset) encoding = offset, 
                length = this.length, offset = 0; else {
                    if (!isFinite(offset)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    offset |= 0, isFinite(length) ? (length |= 0, void 0 === encoding && (encoding = "utf8")) : (encoding = length, 
                    length = void 0);
                }
                var remaining = this.length - offset;
                if ((void 0 === length || length > remaining) && (length = remaining), string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                encoding || (encoding = "utf8");
                for (var loweredCase = !1; ;) switch (encoding) {
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
                    encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
                }
            }, Buffer.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            var MAX_ARGUMENTS_LENGTH = 4096;
            Buffer.prototype.slice = function(start, end) {
                var len = this.length;
                start = ~~start, end = void 0 === end ? len : ~~end, start < 0 ? (start += len) < 0 && (start = 0) : start > len && (start = len), 
                end < 0 ? (end += len) < 0 && (end = 0) : end > len && (end = len), end < start && (end = start);
                var newBuf;
                if (Buffer.TYPED_ARRAY_SUPPORT) newBuf = this.subarray(start, end), newBuf.__proto__ = Buffer.prototype; else {
                    var sliceLen = end - start;
                    newBuf = new Buffer(sliceLen, void 0);
                    for (var i = 0; i < sliceLen; ++i) newBuf[i] = this[i + start];
                }
                return newBuf;
            }, Buffer.prototype.readUIntLE = function(offset, byteLength, noAssert) {
                offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
                for (var val = this[offset], mul = 1, i = 0; ++i < byteLength && (mul *= 256); ) val += this[offset + i] * mul;
                return val;
            }, Buffer.prototype.readUIntBE = function(offset, byteLength, noAssert) {
                offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
                for (var val = this[offset + --byteLength], mul = 1; byteLength > 0 && (mul *= 256); ) val += this[offset + --byteLength] * mul;
                return val;
            }, Buffer.prototype.readUInt8 = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 1, this.length), this[offset];
            }, Buffer.prototype.readUInt16LE = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 2, this.length), this[offset] | this[offset + 1] << 8;
            }, Buffer.prototype.readUInt16BE = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 2, this.length), this[offset] << 8 | this[offset + 1];
            }, Buffer.prototype.readUInt32LE = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 4, this.length), (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + 16777216 * this[offset + 3];
            }, Buffer.prototype.readUInt32BE = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 4, this.length), 16777216 * this[offset] + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
            }, Buffer.prototype.readIntLE = function(offset, byteLength, noAssert) {
                offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
                for (var val = this[offset], mul = 1, i = 0; ++i < byteLength && (mul *= 256); ) val += this[offset + i] * mul;
                return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength)), val;
            }, Buffer.prototype.readIntBE = function(offset, byteLength, noAssert) {
                offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
                for (var i = byteLength, mul = 1, val = this[offset + --i]; i > 0 && (mul *= 256); ) val += this[offset + --i] * mul;
                return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength)), val;
            }, Buffer.prototype.readInt8 = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 1, this.length), 128 & this[offset] ? (255 - this[offset] + 1) * -1 : this[offset];
            }, Buffer.prototype.readInt16LE = function(offset, noAssert) {
                noAssert || checkOffset(offset, 2, this.length);
                var val = this[offset] | this[offset + 1] << 8;
                return 32768 & val ? 4294901760 | val : val;
            }, Buffer.prototype.readInt16BE = function(offset, noAssert) {
                noAssert || checkOffset(offset, 2, this.length);
                var val = this[offset + 1] | this[offset] << 8;
                return 32768 & val ? 4294901760 | val : val;
            }, Buffer.prototype.readInt32LE = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 4, this.length), this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
            }, Buffer.prototype.readInt32BE = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 4, this.length), this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
            }, Buffer.prototype.readFloatLE = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 4, this.length), ieee754.read(this, offset, !0, 23, 4);
            }, Buffer.prototype.readFloatBE = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 4, this.length), ieee754.read(this, offset, !1, 23, 4);
            }, Buffer.prototype.readDoubleLE = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 8, this.length), ieee754.read(this, offset, !0, 52, 8);
            }, Buffer.prototype.readDoubleBE = function(offset, noAssert) {
                return noAssert || checkOffset(offset, 8, this.length), ieee754.read(this, offset, !1, 52, 8);
            }, Buffer.prototype.writeUIntLE = function(value, offset, byteLength, noAssert) {
                if (value = +value, offset |= 0, byteLength |= 0, !noAssert) {
                    checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength) - 1, 0);
                }
                var mul = 1, i = 0;
                for (this[offset] = 255 & value; ++i < byteLength && (mul *= 256); ) this[offset + i] = value / mul & 255;
                return offset + byteLength;
            }, Buffer.prototype.writeUIntBE = function(value, offset, byteLength, noAssert) {
                if (value = +value, offset |= 0, byteLength |= 0, !noAssert) {
                    checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength) - 1, 0);
                }
                var i = byteLength - 1, mul = 1;
                for (this[offset + i] = 255 & value; --i >= 0 && (mul *= 256); ) this[offset + i] = value / mul & 255;
                return offset + byteLength;
            }, Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
                return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 1, 255, 0), 
                Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), this[offset] = 255 & value, 
                offset + 1;
            }, Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
                return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), 
                Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), 
                offset + 2;
            }, Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
                return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), 
                Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = 255 & value) : objectWriteUInt16(this, value, offset, !1), 
                offset + 2;
            }, Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
                return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), 
                Buffer.TYPED_ARRAY_SUPPORT ? (this[offset + 3] = value >>> 24, this[offset + 2] = value >>> 16, 
                this[offset + 1] = value >>> 8, this[offset] = 255 & value) : objectWriteUInt32(this, value, offset, !0), 
                offset + 4;
            }, Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
                return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), 
                Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, this[offset + 1] = value >>> 16, 
                this[offset + 2] = value >>> 8, this[offset + 3] = 255 & value) : objectWriteUInt32(this, value, offset, !1), 
                offset + 4;
            }, Buffer.prototype.writeIntLE = function(value, offset, byteLength, noAssert) {
                if (value = +value, offset |= 0, !noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = 0, mul = 1, sub = 0;
                for (this[offset] = 255 & value; ++i < byteLength && (mul *= 256); ) value < 0 && 0 === sub && 0 !== this[offset + i - 1] && (sub = 1), 
                this[offset + i] = (value / mul >> 0) - sub & 255;
                return offset + byteLength;
            }, Buffer.prototype.writeIntBE = function(value, offset, byteLength, noAssert) {
                if (value = +value, offset |= 0, !noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = byteLength - 1, mul = 1, sub = 0;
                for (this[offset + i] = 255 & value; --i >= 0 && (mul *= 256); ) value < 0 && 0 === sub && 0 !== this[offset + i + 1] && (sub = 1), 
                this[offset + i] = (value / mul >> 0) - sub & 255;
                return offset + byteLength;
            }, Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
                return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 1, 127, -128), 
                Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), value < 0 && (value = 255 + value + 1), 
                this[offset] = 255 & value, offset + 1;
            }, Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
                return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), 
                Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), 
                offset + 2;
            }, Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
                return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), 
                Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = 255 & value) : objectWriteUInt16(this, value, offset, !1), 
                offset + 2;
            }, Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
                return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), 
                Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8, 
                this[offset + 2] = value >>> 16, this[offset + 3] = value >>> 24) : objectWriteUInt32(this, value, offset, !0), 
                offset + 4;
            }, Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
                return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), 
                value < 0 && (value = 4294967295 + value + 1), Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, 
                this[offset + 1] = value >>> 16, this[offset + 2] = value >>> 8, this[offset + 3] = 255 & value) : objectWriteUInt32(this, value, offset, !1), 
                offset + 4;
            }, Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
                return writeFloat(this, value, offset, !0, noAssert);
            }, Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
                return writeFloat(this, value, offset, !1, noAssert);
            }, Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
                return writeDouble(this, value, offset, !0, noAssert);
            }, Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
                return writeDouble(this, value, offset, !1, noAssert);
            }, Buffer.prototype.copy = function(target, targetStart, start, end) {
                if (start || (start = 0), end || 0 === end || (end = this.length), targetStart >= target.length && (targetStart = target.length), 
                targetStart || (targetStart = 0), end > 0 && end < start && (end = start), end === start) return 0;
                if (0 === target.length || 0 === this.length) return 0;
                if (targetStart < 0) throw new RangeError("targetStart out of bounds");
                if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
                if (end < 0) throw new RangeError("sourceEnd out of bounds");
                end > this.length && (end = this.length), target.length - targetStart < end - start && (end = target.length - targetStart + start);
                var i, len = end - start;
                if (this === target && start < targetStart && targetStart < end) for (i = len - 1; i >= 0; --i) target[i + targetStart] = this[i + start]; else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) for (i = 0; i < len; ++i) target[i + targetStart] = this[i + start]; else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
                return len;
            }, Buffer.prototype.fill = function(val, start, end, encoding) {
                if ("string" == typeof val) {
                    if ("string" == typeof start ? (encoding = start, start = 0, end = this.length) : "string" == typeof end && (encoding = end, 
                    end = this.length), 1 === val.length) {
                        var code = val.charCodeAt(0);
                        code < 256 && (val = code);
                    }
                    if (void 0 !== encoding && "string" != typeof encoding) throw new TypeError("encoding must be a string");
                    if ("string" == typeof encoding && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
                } else "number" == typeof val && (val &= 255);
                if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
                if (end <= start) return this;
                start >>>= 0, end = void 0 === end ? this.length : end >>> 0, val || (val = 0);
                var i;
                if ("number" == typeof val) for (i = start; i < end; ++i) this[i] = val; else {
                    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString()), len = bytes.length;
                    for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
                }
                return this;
            };
            var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
        }).call(exports, __webpack_require__(62));
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(36);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var used = [], _exports = module.exports = {};
        _exports.version = "3.5.0", _exports.AssertionError = __webpack_require__(24);
        var util = __webpack_require__(50);
        _exports.use = function(fn) {
            return ~used.indexOf(fn) || (fn(this, util), used.push(fn)), this;
        }, _exports.util = util;
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
            function Assertion(obj, msg, stack) {
                flag(this, "ssfi", stack || arguments.callee), flag(this, "object", obj), flag(this, "message", msg);
            }
            var AssertionError = _chai.AssertionError, flag = util.flag;
            _chai.Assertion = Assertion, Object.defineProperty(Assertion, "includeStack", {
                get: function() {
                    return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), 
                    config.includeStack;
                },
                set: function(value) {
                    console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), 
                    config.includeStack = value;
                }
            }), Object.defineProperty(Assertion, "showDiff", {
                get: function() {
                    return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), 
                    config.showDiff;
                },
                set: function(value) {
                    console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), 
                    config.showDiff = value;
                }
            }), Assertion.addProperty = function(name, fn) {
                util.addProperty(this.prototype, name, fn);
            }, Assertion.addMethod = function(name, fn) {
                util.addMethod(this.prototype, name, fn);
            }, Assertion.addChainableMethod = function(name, fn, chainingBehavior) {
                util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
            }, Assertion.overwriteProperty = function(name, fn) {
                util.overwriteProperty(this.prototype, name, fn);
            }, Assertion.overwriteMethod = function(name, fn) {
                util.overwriteMethod(this.prototype, name, fn);
            }, Assertion.overwriteChainableMethod = function(name, fn, chainingBehavior) {
                util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
            }, Assertion.prototype.assert = function(expr, msg, negateMsg, expected, _actual, showDiff) {
                var ok = util.test(this, arguments);
                if (!0 !== showDiff && (showDiff = !1), !0 !== config.showDiff && (showDiff = !1), 
                !ok) {
                    throw new AssertionError(util.getMessage(this, arguments), {
                        actual: util.getActual(this, arguments),
                        expected: expected,
                        showDiff: showDiff
                    }, config.includeStack ? this.assert : flag(this, "ssfi"));
                }
            }, Object.defineProperty(Assertion.prototype, "_obj", {
                get: function() {
                    return flag(this, "object");
                },
                set: function(val) {
                    flag(this, "object", val);
                }
            });
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        module.exports = function(chai, _) {
            function an(type, msg) {
                msg && flag(this, "message", msg), type = type.toLowerCase();
                var obj = flag(this, "object"), article = ~[ "a", "e", "i", "o", "u" ].indexOf(type.charAt(0)) ? "an " : "a ";
                this.assert(type === _.type(obj), "expected #{this} to be " + article + type, "expected #{this} not to be " + article + type);
            }
            function includeChainingBehavior() {
                flag(this, "contains", !0);
            }
            function include(val, msg) {
                _.expectTypes(this, [ "array", "object", "string" ]), msg && flag(this, "message", msg);
                var obj = flag(this, "object"), expected = !1;
                if ("array" === _.type(obj) && "object" === _.type(val)) {
                    for (var i in obj) if (_.eql(obj[i], val)) {
                        expected = !0;
                        break;
                    }
                } else if ("object" === _.type(val)) {
                    if (!flag(this, "negate")) {
                        for (var k in val) new Assertion(obj).property(k, val[k]);
                        return;
                    }
                    var subset = {};
                    for (var k in val) subset[k] = obj[k];
                    expected = _.eql(subset, val);
                } else expected = void 0 != obj && ~obj.indexOf(val);
                this.assert(expected, "expected #{this} to include " + _.inspect(val), "expected #{this} to not include " + _.inspect(val));
            }
            function checkArguments() {
                var obj = flag(this, "object"), type = Object.prototype.toString.call(obj);
                this.assert("[object Arguments]" === type, "expected #{this} to be arguments but got " + type, "expected #{this} to not be arguments");
            }
            function assertEqual(val, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                if (flag(this, "deep")) return this.eql(val);
                this.assert(val === obj, "expected #{this} to equal #{exp}", "expected #{this} to not equal #{exp}", val, this._obj, !0);
            }
            function assertEql(obj, msg) {
                msg && flag(this, "message", msg), this.assert(_.eql(obj, flag(this, "object")), "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", obj, this._obj, !0);
            }
            function assertAbove(n, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                if (flag(this, "doLength")) {
                    new Assertion(obj, msg).to.have.property("length");
                    var len = obj.length;
                    this.assert(len > n, "expected #{this} to have a length above #{exp} but got #{act}", "expected #{this} to not have a length above #{exp}", n, len);
                } else this.assert(obj > n, "expected #{this} to be above " + n, "expected #{this} to be at most " + n);
            }
            function assertLeast(n, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                if (flag(this, "doLength")) {
                    new Assertion(obj, msg).to.have.property("length");
                    var len = obj.length;
                    this.assert(len >= n, "expected #{this} to have a length at least #{exp} but got #{act}", "expected #{this} to have a length below #{exp}", n, len);
                } else this.assert(obj >= n, "expected #{this} to be at least " + n, "expected #{this} to be below " + n);
            }
            function assertBelow(n, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                if (flag(this, "doLength")) {
                    new Assertion(obj, msg).to.have.property("length");
                    var len = obj.length;
                    this.assert(len < n, "expected #{this} to have a length below #{exp} but got #{act}", "expected #{this} to not have a length below #{exp}", n, len);
                } else this.assert(obj < n, "expected #{this} to be below " + n, "expected #{this} to be at least " + n);
            }
            function assertMost(n, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                if (flag(this, "doLength")) {
                    new Assertion(obj, msg).to.have.property("length");
                    var len = obj.length;
                    this.assert(len <= n, "expected #{this} to have a length at most #{exp} but got #{act}", "expected #{this} to have a length above #{exp}", n, len);
                } else this.assert(obj <= n, "expected #{this} to be at most " + n, "expected #{this} to be above " + n);
            }
            function assertInstanceOf(constructor, msg) {
                msg && flag(this, "message", msg);
                var name = _.getName(constructor);
                this.assert(flag(this, "object") instanceof constructor, "expected #{this} to be an instance of " + name, "expected #{this} to not be an instance of " + name);
            }
            function assertOwnProperty(name, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                this.assert(obj.hasOwnProperty(name), "expected #{this} to have own property " + _.inspect(name), "expected #{this} to not have own property " + _.inspect(name));
            }
            function assertOwnPropertyDescriptor(name, descriptor, msg) {
                "string" == typeof descriptor && (msg = descriptor, descriptor = null), msg && flag(this, "message", msg);
                var obj = flag(this, "object"), actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
                actualDescriptor && descriptor ? this.assert(_.eql(descriptor, actualDescriptor), "expected the own property descriptor for " + _.inspect(name) + " on #{this} to match " + _.inspect(descriptor) + ", got " + _.inspect(actualDescriptor), "expected the own property descriptor for " + _.inspect(name) + " on #{this} to not match " + _.inspect(descriptor), descriptor, actualDescriptor, !0) : this.assert(actualDescriptor, "expected #{this} to have an own property descriptor for " + _.inspect(name), "expected #{this} to not have an own property descriptor for " + _.inspect(name)), 
                flag(this, "object", actualDescriptor);
            }
            function assertLengthChain() {
                flag(this, "doLength", !0);
            }
            function assertLength(n, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                new Assertion(obj, msg).to.have.property("length");
                var len = obj.length;
                this.assert(len == n, "expected #{this} to have a length of #{exp} but got #{act}", "expected #{this} to not have a length of #{act}", n, len);
            }
            function assertMatch(re, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                this.assert(re.exec(obj), "expected #{this} to match " + re, "expected #{this} not to match " + re);
            }
            function assertKeys(keys) {
                var str, obj = flag(this, "object"), ok = !0, mixedArgsMsg = "keys must be given single argument of Array|Object|String, or multiple String arguments";
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
                if (any || all || (all = !0), any) {
                    ok = expected.filter(function(key) {
                        return ~actual.indexOf(key);
                    }).length > 0;
                }
                if (all && (ok = keys.every(function(key) {
                    return ~actual.indexOf(key);
                }), flag(this, "negate") || flag(this, "contains") || (ok = ok && keys.length == actual.length)), 
                len > 1) {
                    keys = keys.map(function(key) {
                        return _.inspect(key);
                    });
                    var last = keys.pop();
                    all && (str = keys.join(", ") + ", and " + last), any && (str = keys.join(", ") + ", or " + last);
                } else str = _.inspect(keys[0]);
                str = (len > 1 ? "keys " : "key ") + str, str = (flag(this, "contains") ? "contain " : "have ") + str, 
                this.assert(ok, "expected #{this} to " + str, "expected #{this} to not " + str, expected.slice(0).sort(), actual.sort(), !0);
            }
            function assertThrows(constructor, errMsg, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                new Assertion(obj, msg).is.a("function");
                var thrown = !1, desiredError = null, name = null, thrownError = null;
                0 === arguments.length ? (errMsg = null, constructor = null) : constructor && (constructor instanceof RegExp || "string" == typeof constructor) ? (errMsg = constructor, 
                constructor = null) : constructor && constructor instanceof Error ? (desiredError = constructor, 
                constructor = null, errMsg = null) : "function" == typeof constructor ? (!(name = constructor.prototype.name) || "Error" === name && constructor !== Error) && (name = constructor.name || new constructor().name) : constructor = null;
                try {
                    obj();
                } catch (err) {
                    if (desiredError) return this.assert(err === desiredError, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}", desiredError instanceof Error ? desiredError.toString() : desiredError, err instanceof Error ? err.toString() : err), 
                    flag(this, "object", err), this;
                    if (constructor && (this.assert(err instanceof constructor, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp} but #{act} was thrown", name, err instanceof Error ? err.toString() : err), 
                    !errMsg)) return flag(this, "object", err), this;
                    var message = "error" === _.type(err) && "message" in err ? err.message : "" + err;
                    if (null != message && errMsg && errMsg instanceof RegExp) return this.assert(errMsg.exec(message), "expected #{this} to throw error matching #{exp} but got #{act}", "expected #{this} to throw error not matching #{exp}", errMsg, message), 
                    flag(this, "object", err), this;
                    if (null != message && errMsg && "string" == typeof errMsg) return this.assert(~message.indexOf(errMsg), "expected #{this} to throw error including #{exp} but got #{act}", "expected #{this} to throw error not including #{act}", errMsg, message), 
                    flag(this, "object", err), this;
                    thrown = !0, thrownError = err;
                }
                var actuallyGot = "", expectedThrown = null !== name ? name : desiredError ? "#{exp}" : "an error";
                thrown && (actuallyGot = " but #{act} was thrown"), this.assert(thrown === !0, "expected #{this} to throw " + expectedThrown + actuallyGot, "expected #{this} to not throw " + expectedThrown + actuallyGot, desiredError instanceof Error ? desiredError.toString() : desiredError, thrownError instanceof Error ? thrownError.toString() : thrownError), 
                flag(this, "object", thrownError);
            }
            function respondTo(method, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object"), itself = flag(this, "itself"), context = "function" !== _.type(obj) || itself ? obj[method] : obj.prototype[method];
                this.assert("function" == typeof context, "expected #{this} to respond to " + _.inspect(method), "expected #{this} to not respond to " + _.inspect(method));
            }
            function satisfy(matcher, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object"), result = matcher(obj);
                this.assert(result, "expected #{this} to satisfy " + _.objDisplay(matcher), "expected #{this} to not satisfy" + _.objDisplay(matcher), !this.negate, result);
            }
            function closeTo(expected, delta, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                if (new Assertion(obj, msg).is.a("number"), "number" !== _.type(expected) || "number" !== _.type(delta)) throw new Error("the arguments to closeTo or approximately must be numbers");
                this.assert(Math.abs(obj - expected) <= delta, "expected #{this} to be close to " + expected + " +/- " + delta, "expected #{this} not to be close to " + expected + " +/- " + delta);
            }
            function isSubsetOf(subset, superset, cmp) {
                return subset.every(function(elem) {
                    return cmp ? superset.some(function(elem2) {
                        return cmp(elem, elem2);
                    }) : superset.indexOf(elem) !== -1;
                });
            }
            function oneOf(list, msg) {
                msg && flag(this, "message", msg);
                var expected = flag(this, "object");
                new Assertion(list).to.be.an("array"), this.assert(list.indexOf(expected) > -1, "expected #{this} to be one of #{exp}", "expected #{this} to not be one of #{exp}", list, expected);
            }
            function assertChanges(object, prop, msg) {
                msg && flag(this, "message", msg);
                var fn = flag(this, "object");
                new Assertion(object, msg).to.have.property(prop), new Assertion(fn).is.a("function");
                var initial = object[prop];
                fn(), this.assert(initial !== object[prop], "expected ." + prop + " to change", "expected ." + prop + " to not change");
            }
            function assertIncreases(object, prop, msg) {
                msg && flag(this, "message", msg);
                var fn = flag(this, "object");
                new Assertion(object, msg).to.have.property(prop), new Assertion(fn).is.a("function");
                var initial = object[prop];
                fn(), this.assert(object[prop] - initial > 0, "expected ." + prop + " to increase", "expected ." + prop + " to not increase");
            }
            function assertDecreases(object, prop, msg) {
                msg && flag(this, "message", msg);
                var fn = flag(this, "object");
                new Assertion(object, msg).to.have.property(prop), new Assertion(fn).is.a("function");
                var initial = object[prop];
                fn(), this.assert(object[prop] - initial < 0, "expected ." + prop + " to decrease", "expected ." + prop + " to not decrease");
            }
            var Assertion = chai.Assertion, flag = (Object.prototype.toString, _.flag);
            [ "to", "be", "been", "is", "and", "has", "have", "with", "that", "which", "at", "of", "same" ].forEach(function(chain) {
                Assertion.addProperty(chain, function() {
                    return this;
                });
            }), Assertion.addProperty("not", function() {
                flag(this, "negate", !0);
            }), Assertion.addProperty("deep", function() {
                flag(this, "deep", !0);
            }), Assertion.addProperty("any", function() {
                flag(this, "any", !0), flag(this, "all", !1);
            }), Assertion.addProperty("all", function() {
                flag(this, "all", !0), flag(this, "any", !1);
            }), Assertion.addChainableMethod("an", an), Assertion.addChainableMethod("a", an), 
            Assertion.addChainableMethod("include", include, includeChainingBehavior), Assertion.addChainableMethod("contain", include, includeChainingBehavior), 
            Assertion.addChainableMethod("contains", include, includeChainingBehavior), Assertion.addChainableMethod("includes", include, includeChainingBehavior), 
            Assertion.addProperty("ok", function() {
                this.assert(flag(this, "object"), "expected #{this} to be truthy", "expected #{this} to be falsy");
            }), Assertion.addProperty("true", function() {
                this.assert(!0 === flag(this, "object"), "expected #{this} to be true", "expected #{this} to be false", !this.negate);
            }), Assertion.addProperty("false", function() {
                this.assert(!1 === flag(this, "object"), "expected #{this} to be false", "expected #{this} to be true", !!this.negate);
            }), Assertion.addProperty("null", function() {
                this.assert(null === flag(this, "object"), "expected #{this} to be null", "expected #{this} not to be null");
            }), Assertion.addProperty("undefined", function() {
                this.assert(void 0 === flag(this, "object"), "expected #{this} to be undefined", "expected #{this} not to be undefined");
            }), Assertion.addProperty("NaN", function() {
                this.assert(isNaN(flag(this, "object")), "expected #{this} to be NaN", "expected #{this} not to be NaN");
            }), Assertion.addProperty("exist", function() {
                this.assert(null != flag(this, "object"), "expected #{this} to exist", "expected #{this} to not exist");
            }), Assertion.addProperty("empty", function() {
                var obj = flag(this, "object"), expected = obj;
                Array.isArray(obj) || "string" == typeof object ? expected = obj.length : "object" === (void 0 === obj ? "undefined" : _typeof(obj)) && (expected = Object.keys(obj).length), 
                this.assert(!expected, "expected #{this} to be empty", "expected #{this} not to be empty");
            }), Assertion.addProperty("arguments", checkArguments), Assertion.addProperty("Arguments", checkArguments), 
            Assertion.addMethod("equal", assertEqual), Assertion.addMethod("equals", assertEqual), 
            Assertion.addMethod("eq", assertEqual), Assertion.addMethod("eql", assertEql), Assertion.addMethod("eqls", assertEql), 
            Assertion.addMethod("above", assertAbove), Assertion.addMethod("gt", assertAbove), 
            Assertion.addMethod("greaterThan", assertAbove), Assertion.addMethod("least", assertLeast), 
            Assertion.addMethod("gte", assertLeast), Assertion.addMethod("below", assertBelow), 
            Assertion.addMethod("lt", assertBelow), Assertion.addMethod("lessThan", assertBelow), 
            Assertion.addMethod("most", assertMost), Assertion.addMethod("lte", assertMost), 
            Assertion.addMethod("within", function(start, finish, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object"), range = start + ".." + finish;
                if (flag(this, "doLength")) {
                    new Assertion(obj, msg).to.have.property("length");
                    var len = obj.length;
                    this.assert(len >= start && len <= finish, "expected #{this} to have a length within " + range, "expected #{this} to not have a length within " + range);
                } else this.assert(obj >= start && obj <= finish, "expected #{this} to be within " + range, "expected #{this} to not be within " + range);
            }), Assertion.addMethod("instanceof", assertInstanceOf), Assertion.addMethod("instanceOf", assertInstanceOf), 
            Assertion.addMethod("property", function(name, val, msg) {
                msg && flag(this, "message", msg);
                var isDeep = !!flag(this, "deep"), descriptor = isDeep ? "deep property " : "property ", negate = flag(this, "negate"), obj = flag(this, "object"), pathInfo = isDeep ? _.getPathInfo(name, obj) : null, hasProperty = isDeep ? pathInfo.exists : _.hasProperty(name, obj), value = isDeep ? pathInfo.value : obj[name];
                if (negate && arguments.length > 1) {
                    if (void 0 === value) throw msg = null != msg ? msg + ": " : "", new Error(msg + _.inspect(obj) + " has no " + descriptor + _.inspect(name));
                } else this.assert(hasProperty, "expected #{this} to have a " + descriptor + _.inspect(name), "expected #{this} to not have " + descriptor + _.inspect(name));
                arguments.length > 1 && this.assert(val === value, "expected #{this} to have a " + descriptor + _.inspect(name) + " of #{exp}, but got #{act}", "expected #{this} to not have a " + descriptor + _.inspect(name) + " of #{act}", val, value), 
                flag(this, "object", value);
            }), Assertion.addMethod("ownProperty", assertOwnProperty), Assertion.addMethod("haveOwnProperty", assertOwnProperty), 
            Assertion.addMethod("ownPropertyDescriptor", assertOwnPropertyDescriptor), Assertion.addMethod("haveOwnPropertyDescriptor", assertOwnPropertyDescriptor), 
            Assertion.addChainableMethod("length", assertLength, assertLengthChain), Assertion.addMethod("lengthOf", assertLength), 
            Assertion.addMethod("match", assertMatch), Assertion.addMethod("matches", assertMatch), 
            Assertion.addMethod("string", function(str, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                new Assertion(obj, msg).is.a("string"), this.assert(~obj.indexOf(str), "expected #{this} to contain " + _.inspect(str), "expected #{this} to not contain " + _.inspect(str));
            }), Assertion.addMethod("keys", assertKeys), Assertion.addMethod("key", assertKeys), 
            Assertion.addMethod("throw", assertThrows), Assertion.addMethod("throws", assertThrows), 
            Assertion.addMethod("Throw", assertThrows), Assertion.addMethod("respondTo", respondTo), 
            Assertion.addMethod("respondsTo", respondTo), Assertion.addProperty("itself", function() {
                flag(this, "itself", !0);
            }), Assertion.addMethod("satisfy", satisfy), Assertion.addMethod("satisfies", satisfy), 
            Assertion.addMethod("closeTo", closeTo), Assertion.addMethod("approximately", closeTo), 
            Assertion.addMethod("members", function(subset, msg) {
                msg && flag(this, "message", msg);
                var obj = flag(this, "object");
                new Assertion(obj).to.be.an("array"), new Assertion(subset).to.be.an("array");
                var cmp = flag(this, "deep") ? _.eql : void 0;
                if (flag(this, "contains")) return this.assert(isSubsetOf(subset, obj, cmp), "expected #{this} to be a superset of #{act}", "expected #{this} to not be a superset of #{act}", obj, subset);
                this.assert(isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp), "expected #{this} to have the same members as #{act}", "expected #{this} to not have the same members as #{act}", obj, subset);
            }), Assertion.addMethod("oneOf", oneOf), Assertion.addChainableMethod("change", assertChanges), 
            Assertion.addChainableMethod("changes", assertChanges), Assertion.addChainableMethod("increase", assertIncreases), 
            Assertion.addChainableMethod("increases", assertIncreases), Assertion.addChainableMethod("decrease", assertDecreases), 
            Assertion.addChainableMethod("decreases", assertDecreases), Assertion.addProperty("extensible", function() {
                var isExtensible, obj = flag(this, "object");
                try {
                    isExtensible = Object.isExtensible(obj);
                } catch (err) {
                    if (!(err instanceof TypeError)) throw err;
                    isExtensible = !1;
                }
                this.assert(isExtensible, "expected #{this} to be extensible", "expected #{this} to not be extensible");
            }), Assertion.addProperty("sealed", function() {
                var isSealed, obj = flag(this, "object");
                try {
                    isSealed = Object.isSealed(obj);
                } catch (err) {
                    if (!(err instanceof TypeError)) throw err;
                    isSealed = !0;
                }
                this.assert(isSealed, "expected #{this} to be sealed", "expected #{this} to not be sealed");
            }), Assertion.addProperty("frozen", function() {
                var isFrozen, obj = flag(this, "object");
                try {
                    isFrozen = Object.isFrozen(obj);
                } catch (err) {
                    if (!(err instanceof TypeError)) throw err;
                    isFrozen = !0;
                }
                this.assert(isFrozen, "expected #{this} to be frozen", "expected #{this} to not be frozen");
            });
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(chai, util) {
            var Assertion = chai.Assertion, flag = util.flag, assert = chai.assert = function(express, errmsg) {
                new Assertion(null, null, chai.assert).assert(express, errmsg, "[ negation message unavailable ]");
            };
            assert.fail = function(actual, expected, message, operator) {
                throw message = message || "assert.fail()", new chai.AssertionError(message, {
                    actual: actual,
                    expected: expected,
                    operator: operator
                }, assert.fail);
            }, assert.isOk = function(val, msg) {
                new Assertion(val, msg).is.ok;
            }, assert.isNotOk = function(val, msg) {
                new Assertion(val, msg).is.not.ok;
            }, assert.equal = function(act, exp, msg) {
                var test = new Assertion(act, msg, assert.equal);
                test.assert(exp == flag(test, "object"), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", exp, act);
            }, assert.notEqual = function(act, exp, msg) {
                var test = new Assertion(act, msg, assert.notEqual);
                test.assert(exp != flag(test, "object"), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", exp, act);
            }, assert.strictEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.equal(exp);
            }, assert.notStrictEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.not.equal(exp);
            }, assert.deepEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.eql(exp);
            }, assert.notDeepEqual = function(act, exp, msg) {
                new Assertion(act, msg).to.not.eql(exp);
            }, assert.isAbove = function(val, abv, msg) {
                new Assertion(val, msg).to.be.above(abv);
            }, assert.isAtLeast = function(val, atlst, msg) {
                new Assertion(val, msg).to.be.least(atlst);
            }, assert.isBelow = function(val, blw, msg) {
                new Assertion(val, msg).to.be.below(blw);
            }, assert.isAtMost = function(val, atmst, msg) {
                new Assertion(val, msg).to.be.most(atmst);
            }, assert.isTrue = function(val, msg) {
                new Assertion(val, msg).is.true;
            }, assert.isNotTrue = function(val, msg) {
                new Assertion(val, msg).to.not.equal(!0);
            }, assert.isFalse = function(val, msg) {
                new Assertion(val, msg).is.false;
            }, assert.isNotFalse = function(val, msg) {
                new Assertion(val, msg).to.not.equal(!1);
            }, assert.isNull = function(val, msg) {
                new Assertion(val, msg).to.equal(null);
            }, assert.isNotNull = function(val, msg) {
                new Assertion(val, msg).to.not.equal(null);
            }, assert.isNaN = function(val, msg) {
                new Assertion(val, msg).to.be.NaN;
            }, assert.isNotNaN = function(val, msg) {
                new Assertion(val, msg).not.to.be.NaN;
            }, assert.isUndefined = function(val, msg) {
                new Assertion(val, msg).to.equal(void 0);
            }, assert.isDefined = function(val, msg) {
                new Assertion(val, msg).to.not.equal(void 0);
            }, assert.isFunction = function(val, msg) {
                new Assertion(val, msg).to.be.a("function");
            }, assert.isNotFunction = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("function");
            }, assert.isObject = function(val, msg) {
                new Assertion(val, msg).to.be.a("object");
            }, assert.isNotObject = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("object");
            }, assert.isArray = function(val, msg) {
                new Assertion(val, msg).to.be.an("array");
            }, assert.isNotArray = function(val, msg) {
                new Assertion(val, msg).to.not.be.an("array");
            }, assert.isString = function(val, msg) {
                new Assertion(val, msg).to.be.a("string");
            }, assert.isNotString = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("string");
            }, assert.isNumber = function(val, msg) {
                new Assertion(val, msg).to.be.a("number");
            }, assert.isNotNumber = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("number");
            }, assert.isBoolean = function(val, msg) {
                new Assertion(val, msg).to.be.a("boolean");
            }, assert.isNotBoolean = function(val, msg) {
                new Assertion(val, msg).to.not.be.a("boolean");
            }, assert.typeOf = function(val, type, msg) {
                new Assertion(val, msg).to.be.a(type);
            }, assert.notTypeOf = function(val, type, msg) {
                new Assertion(val, msg).to.not.be.a(type);
            }, assert.instanceOf = function(val, type, msg) {
                new Assertion(val, msg).to.be.instanceOf(type);
            }, assert.notInstanceOf = function(val, type, msg) {
                new Assertion(val, msg).to.not.be.instanceOf(type);
            }, assert.include = function(exp, inc, msg) {
                new Assertion(exp, msg, assert.include).include(inc);
            }, assert.notInclude = function(exp, inc, msg) {
                new Assertion(exp, msg, assert.notInclude).not.include(inc);
            }, assert.match = function(exp, re, msg) {
                new Assertion(exp, msg).to.match(re);
            }, assert.notMatch = function(exp, re, msg) {
                new Assertion(exp, msg).to.not.match(re);
            }, assert.property = function(obj, prop, msg) {
                new Assertion(obj, msg).to.have.property(prop);
            }, assert.notProperty = function(obj, prop, msg) {
                new Assertion(obj, msg).to.not.have.property(prop);
            }, assert.deepProperty = function(obj, prop, msg) {
                new Assertion(obj, msg).to.have.deep.property(prop);
            }, assert.notDeepProperty = function(obj, prop, msg) {
                new Assertion(obj, msg).to.not.have.deep.property(prop);
            }, assert.propertyVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.have.property(prop, val);
            }, assert.propertyNotVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.not.have.property(prop, val);
            }, assert.deepPropertyVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.have.deep.property(prop, val);
            }, assert.deepPropertyNotVal = function(obj, prop, val, msg) {
                new Assertion(obj, msg).to.not.have.deep.property(prop, val);
            }, assert.lengthOf = function(exp, len, msg) {
                new Assertion(exp, msg).to.have.length(len);
            }, assert.throws = function(fn, errt, errs, msg) {
                return ("string" == typeof errt || errt instanceof RegExp) && (errs = errt, errt = null), 
                flag(new Assertion(fn, msg).to.throw(errt, errs), "object");
            }, assert.doesNotThrow = function(fn, type, msg) {
                "string" == typeof type && (msg = type, type = null), new Assertion(fn, msg).to.not.Throw(type);
            }, assert.operator = function(val, operator, val2, msg) {
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
                test.assert(!0 === flag(test, "object"), "expected " + util.inspect(val) + " to be " + operator + " " + util.inspect(val2), "expected " + util.inspect(val) + " to not be " + operator + " " + util.inspect(val2));
            }, assert.closeTo = function(act, exp, delta, msg) {
                new Assertion(act, msg).to.be.closeTo(exp, delta);
            }, assert.approximately = function(act, exp, delta, msg) {
                new Assertion(act, msg).to.be.approximately(exp, delta);
            }, assert.sameMembers = function(set1, set2, msg) {
                new Assertion(set1, msg).to.have.same.members(set2);
            }, assert.sameDeepMembers = function(set1, set2, msg) {
                new Assertion(set1, msg).to.have.same.deep.members(set2);
            }, assert.includeMembers = function(superset, subset, msg) {
                new Assertion(superset, msg).to.include.members(subset);
            }, assert.includeDeepMembers = function(superset, subset, msg) {
                new Assertion(superset, msg).to.include.deep.members(subset);
            }, assert.oneOf = function(inList, list, msg) {
                new Assertion(inList, msg).to.be.oneOf(list);
            }, assert.changes = function(fn, obj, prop) {
                new Assertion(fn).to.change(obj, prop);
            }, assert.doesNotChange = function(fn, obj, prop) {
                new Assertion(fn).to.not.change(obj, prop);
            }, assert.increases = function(fn, obj, prop) {
                new Assertion(fn).to.increase(obj, prop);
            }, assert.doesNotIncrease = function(fn, obj, prop) {
                new Assertion(fn).to.not.increase(obj, prop);
            }, assert.decreases = function(fn, obj, prop) {
                new Assertion(fn).to.decrease(obj, prop);
            }, assert.doesNotDecrease = function(fn, obj, prop) {
                new Assertion(fn).to.not.decrease(obj, prop);
            }, assert.ifError = function(val) {
                if (val) throw val;
            }, assert.isExtensible = function(obj, msg) {
                new Assertion(obj, msg).to.be.extensible;
            }, assert.isNotExtensible = function(obj, msg) {
                new Assertion(obj, msg).to.not.be.extensible;
            }, assert.isSealed = function(obj, msg) {
                new Assertion(obj, msg).to.be.sealed;
            }, assert.isNotSealed = function(obj, msg) {
                new Assertion(obj, msg).to.not.be.sealed;
            }, assert.isFrozen = function(obj, msg) {
                new Assertion(obj, msg).to.be.frozen;
            }, assert.isNotFrozen = function(obj, msg) {
                new Assertion(obj, msg).to.not.be.frozen;
            }, function alias(name, as) {
                return assert[as] = assert[name], alias;
            }("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen");
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(chai, util) {
            chai.expect = function(val, message) {
                return new chai.Assertion(val, message);
            }, chai.expect.fail = function(actual, expected, message, operator) {
                throw message = message || "expect.fail()", new chai.AssertionError(message, {
                    actual: actual,
                    expected: expected,
                    operator: operator
                }, chai.expect.fail);
            };
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(chai, util) {
            function loadShould() {
                function shouldGetter() {
                    return this instanceof String || this instanceof Number || this instanceof Boolean ? new Assertion(this.valueOf(), null, shouldGetter) : new Assertion(this, null, shouldGetter);
                }
                function shouldSetter(value) {
                    Object.defineProperty(this, "should", {
                        value: value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    });
                }
                Object.defineProperty(Object.prototype, "should", {
                    set: shouldSetter,
                    get: shouldGetter,
                    configurable: !0
                });
                var should = {};
                return should.fail = function(actual, expected, message, operator) {
                    throw message = message || "should.fail()", new chai.AssertionError(message, {
                        actual: actual,
                        expected: expected,
                        operator: operator
                    }, should.fail);
                }, should.equal = function(val1, val2, msg) {
                    new Assertion(val1, msg).to.equal(val2);
                }, should.Throw = function(fn, errt, errs, msg) {
                    new Assertion(fn, msg).to.Throw(errt, errs);
                }, should.exist = function(val, msg) {
                    new Assertion(val, msg).to.exist;
                }, should.not = {}, should.not.equal = function(val1, val2, msg) {
                    new Assertion(val1, msg).to.not.equal(val2);
                }, should.not.Throw = function(fn, errt, errs, msg) {
                    new Assertion(fn, msg).to.not.Throw(errt, errs);
                }, should.not.exist = function(val, msg) {
                    new Assertion(val, msg).to.not.exist;
                }, should.throw = should.Throw, should.not.throw = should.not.Throw, should;
            }
            var Assertion = chai.Assertion;
            chai.should = loadShould, chai.Should = loadShould;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var transferFlags = __webpack_require__(30), flag = __webpack_require__(5), config = __webpack_require__(6), hasProtoSupport = "__proto__" in Object, excludeNames = /^(?:length|name|arguments|caller)$/, call = Function.prototype.call, apply = Function.prototype.apply;
        module.exports = function(ctx, name, method, chainingBehavior) {
            "function" != typeof chainingBehavior && (chainingBehavior = function() {});
            var chainableBehavior = {
                method: method,
                chainingBehavior: chainingBehavior
            };
            ctx.__methods || (ctx.__methods = {}), ctx.__methods[name] = chainableBehavior, 
            Object.defineProperty(ctx, name, {
                get: function() {
                    chainableBehavior.chainingBehavior.call(this);
                    var assert = function assert() {
                        flag(this, "ssfi") && config.includeStack === !1 && flag(this, "ssfi", assert);
                        var result = chainableBehavior.method.apply(this, arguments);
                        return void 0 === result ? this : result;
                    };
                    if (hasProtoSupport) {
                        var prototype = assert.__proto__ = Object.create(this);
                        prototype.call = call, prototype.apply = apply;
                    } else {
                        Object.getOwnPropertyNames(ctx).forEach(function(asserterName) {
                            if (!excludeNames.test(asserterName)) {
                                var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
                                Object.defineProperty(assert, asserterName, pd);
                            }
                        });
                    }
                    return transferFlags(this, assert), assert;
                },
                configurable: !0
            });
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var config = __webpack_require__(6), flag = __webpack_require__(5);
        module.exports = function(ctx, name, method) {
            ctx[name] = function() {
                flag(this, "ssfi") && config.includeStack === !1 && flag(this, "ssfi", ctx[name]);
                var result = method.apply(this, arguments);
                return void 0 === result ? this : result;
            };
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var config = __webpack_require__(6), flag = __webpack_require__(5);
        module.exports = function(ctx, name, getter) {
            Object.defineProperty(ctx, name, {
                get: function addProperty() {
                    flag(this, "ssfi") && config.includeStack === !1 && flag(this, "ssfi", addProperty);
                    var result = getter.call(this);
                    return void 0 === result ? this : result;
                },
                configurable: !0
            });
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var AssertionError = __webpack_require__(24), flag = __webpack_require__(5), type = __webpack_require__(17);
        module.exports = function(obj, types) {
            var obj = flag(obj, "object");
            types = types.map(function(t) {
                return t.toLowerCase();
            }), types.sort();
            var str = types.map(function(t, index) {
                var art = ~[ "a", "e", "i", "o", "u" ].indexOf(t.charAt(0)) ? "an" : "a";
                return (types.length > 1 && index === types.length - 1 ? "or " : "") + art + " " + t;
            }).join(", ");
            if (!types.some(function(expected) {
                return type(obj) === expected;
            })) throw new AssertionError("object tested must be " + str + ", but " + type(obj) + " given");
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(object) {
            var result = [];
            for (var name in object) result.push(name);
            return result;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var flag = __webpack_require__(5), getActual = __webpack_require__(25), objDisplay = (__webpack_require__(16), 
        __webpack_require__(29));
        module.exports = function(obj, args) {
            var negate = flag(obj, "negate"), val = flag(obj, "object"), expected = args[3], actual = getActual(obj, args), msg = negate ? args[2] : args[1], flagMsg = flag(obj, "message");
            return "function" == typeof msg && (msg = msg()), msg = msg || "", msg = msg.replace(/#\{this\}/g, function() {
                return objDisplay(val);
            }).replace(/#\{act\}/g, function() {
                return objDisplay(actual);
            }).replace(/#\{exp\}/g, function() {
                return objDisplay(expected);
            }), flagMsg ? flagMsg + ": " + msg : msg;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var getPathInfo = __webpack_require__(27);
        module.exports = function(path, obj) {
            return getPathInfo(path, obj).value;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(object) {
            function addProperty(property) {
                result.indexOf(property) === -1 && result.push(property);
            }
            for (var result = Object.getOwnPropertyNames(object), proto = Object.getPrototypeOf(object); null !== proto; ) Object.getOwnPropertyNames(proto).forEach(addProperty), 
            proto = Object.getPrototypeOf(proto);
            return result;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _exports = module.exports = {};
        _exports.test = __webpack_require__(54), _exports.type = __webpack_require__(17), 
        _exports.expectTypes = __webpack_require__(45), _exports.getMessage = __webpack_require__(47), 
        _exports.getActual = __webpack_require__(25), _exports.inspect = __webpack_require__(16), 
        _exports.objDisplay = __webpack_require__(29), _exports.flag = __webpack_require__(5), 
        _exports.transferFlags = __webpack_require__(30), _exports.eql = __webpack_require__(55), 
        _exports.getPathValue = __webpack_require__(48), _exports.getPathInfo = __webpack_require__(27), 
        _exports.hasProperty = __webpack_require__(28), _exports.getName = __webpack_require__(26), 
        _exports.addProperty = __webpack_require__(44), _exports.addMethod = __webpack_require__(43), 
        _exports.overwriteProperty = __webpack_require__(53), _exports.overwriteMethod = __webpack_require__(52), 
        _exports.addChainableMethod = __webpack_require__(42), _exports.overwriteChainableMethod = __webpack_require__(51);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(ctx, name, method, chainingBehavior) {
            var chainableBehavior = ctx.__methods[name], _chainingBehavior = chainableBehavior.chainingBehavior;
            chainableBehavior.chainingBehavior = function() {
                var result = chainingBehavior(_chainingBehavior).call(this);
                return void 0 === result ? this : result;
            };
            var _method = chainableBehavior.method;
            chainableBehavior.method = function() {
                var result = method(_method).apply(this, arguments);
                return void 0 === result ? this : result;
            };
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(ctx, name, method) {
            var _method = ctx[name], _super = function() {
                return this;
            };
            _method && "function" == typeof _method && (_super = _method), ctx[name] = function() {
                var result = method(_super).apply(this, arguments);
                return void 0 === result ? this : result;
            };
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function(ctx, name, getter) {
            var _get = Object.getOwnPropertyDescriptor(ctx, name), _super = function() {};
            _get && "function" == typeof _get.get && (_super = _get.get), Object.defineProperty(ctx, name, {
                get: function() {
                    var result = getter(_super).call(this);
                    return void 0 === result ? this : result;
                },
                configurable: !0
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
        function deepEqual(a, b, m) {
            return !!sameValue(a, b) || ("date" === type(a) ? dateEqual(a, b) : "regexp" === type(a) ? regexpEqual(a, b) : Buffer.isBuffer(a) ? bufferEqual(a, b) : "arguments" === type(a) ? argumentsEqual(a, b, m) : !!typeEqual(a, b) && ("object" !== type(a) && "object" !== type(b) && "array" !== type(a) && "array" !== type(b) ? sameValue(a, b) : objectEqual(a, b, m)));
        }
        function sameValue(a, b) {
            return a === b ? 0 !== a || 1 / a == 1 / b : a !== a && b !== b;
        }
        function typeEqual(a, b) {
            return type(a) === type(b);
        }
        function dateEqual(a, b) {
            return "date" === type(b) && sameValue(a.getTime(), b.getTime());
        }
        function regexpEqual(a, b) {
            return "regexp" === type(b) && sameValue(a.toString(), b.toString());
        }
        function argumentsEqual(a, b, m) {
            return "arguments" === type(b) && (a = [].slice.call(a), b = [].slice.call(b), deepEqual(a, b, m));
        }
        function enumerable(a) {
            var res = [];
            for (var key in a) res.push(key);
            return res;
        }
        function iterableEqual(a, b) {
            if (a.length !== b.length) return !1;
            for (var i = 0, match = !0; i < a.length; i++) if (a[i] !== b[i]) {
                match = !1;
                break;
            }
            return match;
        }
        function bufferEqual(a, b) {
            return !!Buffer.isBuffer(b) && iterableEqual(a, b);
        }
        function isValue(a) {
            return null !== a && void 0 !== a;
        }
        function objectEqual(a, b, m) {
            if (!isValue(a) || !isValue(b)) return !1;
            if (a.prototype !== b.prototype) return !1;
            var i;
            if (m) {
                for (i = 0; i < m.length; i++) if (m[i][0] === a && m[i][1] === b || m[i][0] === b && m[i][1] === a) return !0;
            } else m = [];
            try {
                var ka = enumerable(a), kb = enumerable(b);
            } catch (ex) {
                return !1;
            }
            if (ka.sort(), kb.sort(), !iterableEqual(ka, kb)) return !1;
            m.push([ a, b ]);
            var key;
            for (i = ka.length - 1; i >= 0; i--) if (key = ka[i], !deepEqual(a[key], b[key], m)) return !1;
            return !0;
        }
        var Buffer, type = __webpack_require__(57);
        try {
            Buffer = __webpack_require__(34).Buffer;
        } catch (ex) {
            Buffer = {}, Buffer.isBuffer = function() {
                return !1;
            };
        }
        module.exports = deepEqual;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(58);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function getType(obj) {
            var str = Object.prototype.toString.call(obj);
            return natives[str] ? natives[str] : null === obj ? "null" : void 0 === obj ? "undefined" : obj === Object(obj) ? "object" : void 0 === obj ? "undefined" : _typeof(obj);
        }
        function Library() {
            this.tests = {};
        }
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _exports = module.exports = getType, natives = {
            "[object Array]": "array",
            "[object RegExp]": "regexp",
            "[object Function]": "function",
            "[object Arguments]": "arguments",
            "[object Date]": "date"
        };
        _exports.Library = Library, Library.prototype.of = getType, Library.prototype.define = function(type, test) {
            return 1 === arguments.length ? this.tests[type] : (this.tests[type] = test, this);
        }, Library.prototype.test = function(obj, type) {
            if (type === getType(obj)) return !0;
            var test = this.tests[type];
            if (test && "regexp" === getType(test)) return test.test(obj);
            if (test && "function" === getType(test)) return test(obj);
            throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.read = function(buffer, offset, isLE, mLen, nBytes) {
            var e, m, eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7, i = isLE ? nBytes - 1 : 0, d = isLE ? -1 : 1, s = buffer[offset + i];
            for (i += d, e = s & (1 << -nBits) - 1, s >>= -nBits, nBits += eLen; nBits > 0; e = 256 * e + buffer[offset + i], 
            i += d, nBits -= 8) ;
            for (m = e & (1 << -nBits) - 1, e >>= -nBits, nBits += mLen; nBits > 0; m = 256 * m + buffer[offset + i], 
            i += d, nBits -= 8) ;
            if (0 === e) e = 1 - eBias; else {
                if (e === eMax) return m ? NaN : 1 / 0 * (s ? -1 : 1);
                m += Math.pow(2, mLen), e -= eBias;
            }
            return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
        }, exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
            var e, m, c, eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = isLE ? 0 : nBytes - 1, d = isLE ? 1 : -1, s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
            for (value = Math.abs(value), isNaN(value) || value === 1 / 0 ? (m = isNaN(value) ? 1 : 0, 
            e = eMax) : (e = Math.floor(Math.log(value) / Math.LN2), value * (c = Math.pow(2, -e)) < 1 && (e--, 
            c *= 2), value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias), value * c >= 2 && (e++, 
            c /= 2), e + eBias >= eMax ? (m = 0, e = eMax) : e + eBias >= 1 ? (m = (value * c - 1) * Math.pow(2, mLen), 
            e += eBias) : (m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen), e = 0)); mLen >= 8; buffer[offset + i] = 255 & m, 
            i += d, m /= 256, mLen -= 8) ;
            for (e = e << mLen | m, eLen += mLen; eLen > 0; buffer[offset + i] = 255 & e, i += d, 
            e /= 256, eLen -= 8) ;
            buffer[offset + i - d] |= 128 * s;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var toString = {}.toString;
        module.exports = Array.isArray || function(arr) {
            return "[object Array]" == toString.call(arr);
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function getType(obj) {
            var type = Object.prototype.toString.call(obj).match(objectTypeRegexp)[1].toLowerCase();
            return "function" == typeof Promise && obj instanceof Promise ? "promise" : null === obj ? "null" : void 0 === obj ? "undefined" : type;
        }
        function Library() {
            if (!(this instanceof Library)) return new Library();
            this.tests = {};
        }
        var objectTypeRegexp = /^\[object (.*)\]$/;
        (module.exports = getType).Library = Library, Library.prototype.of = getType, Library.prototype.define = function(type, test) {
            return 1 === arguments.length ? this.tests[type] : (this.tests[type] = test, this);
        }, Library.prototype.test = function(obj, type) {
            if (type === getType(obj)) return !0;
            var test = this.tests[type];
            if (test && "regexp" === getType(test)) return test.test(obj);
            if (test && "function" === getType(test)) return test(obj);
            throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var g, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        g = function() {
            return this;
        }();
        try {
            g = g || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && (g = window);
        }
        module.exports = g;
    }, , , function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(32);
    } ]);
});
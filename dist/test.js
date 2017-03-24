(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mediaTag"] = factory();
	else
		root["mediaTag"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 357);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(26)
  , hide      = __webpack_require__(13)
  , redefine  = __webpack_require__(14)
  , ctx       = __webpack_require__(27)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(75)('wks')
  , uid        = __webpack_require__(43)
  , Symbol     = __webpack_require__(2).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(1)
  , IE8_DOM_DEFINE = __webpack_require__(125)
  , toPrimitive    = __webpack_require__(25)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(33)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(20);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2674lycw1g = function () {
	var path = '/home/dradeau/git/media_tag_v2/src/core/errors.js',
	    hash = '0244493a439f275371fdac6caaf478c6d6e8cbc2',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/dradeau/git/media_tag_v2/src/core/errors.js',
		statementMap: {
			'0': {
				start: {
					line: 7,
					column: 15
				},
				end: {
					line: 86,
					column: 1
				}
			},
			'1': {
				start: {
					line: 18,
					column: 3
				},
				end: {
					line: 18,
					column: 73
				}
			},
			'2': {
				start: {
					line: 31,
					column: 3
				},
				end: {
					line: 31,
					column: 72
				}
			},
			'3': {
				start: {
					line: 44,
					column: 3
				},
				end: {
					line: 44,
					column: 102
				}
			},
			'4': {
				start: {
					line: 58,
					column: 3
				},
				end: {
					line: 58,
					column: 39
				}
			},
			'5': {
				start: {
					line: 70,
					column: 3
				},
				end: {
					line: 70,
					column: 50
				}
			},
			'6': {
				start: {
					line: 83,
					column: 3
				},
				end: {
					line: 83,
					column: 82
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 17,
						column: 2
					},
					end: {
						line: 17,
						column: 3
					}
				},
				loc: {
					start: {
						line: 17,
						column: 25
					},
					end: {
						line: 19,
						column: 3
					}
				},
				line: 17
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 30,
						column: 2
					},
					end: {
						line: 30,
						column: 3
					}
				},
				loc: {
					start: {
						line: 30,
						column: 16
					},
					end: {
						line: 32,
						column: 3
					}
				},
				line: 30
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 43,
						column: 2
					},
					end: {
						line: 43,
						column: 3
					}
				},
				loc: {
					start: {
						line: 43,
						column: 24
					},
					end: {
						line: 45,
						column: 3
					}
				},
				line: 43
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 57,
						column: 2
					},
					end: {
						line: 57,
						column: 3
					}
				},
				loc: {
					start: {
						line: 57,
						column: 16
					},
					end: {
						line: 59,
						column: 3
					}
				},
				line: 57
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 69,
						column: 2
					},
					end: {
						line: 69,
						column: 3
					}
				},
				loc: {
					start: {
						line: 69,
						column: 16
					},
					end: {
						line: 71,
						column: 3
					}
				},
				line: 69
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 82,
						column: 2
					},
					end: {
						line: 82,
						column: 3
					}
				},
				loc: {
					start: {
						line: 82,
						column: 19
					},
					end: {
						line: 84,
						column: 3
					}
				},
				line: 82
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 83,
						column: 34
					},
					end: {
						line: 83,
						column: 77
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 83,
						column: 55
					},
					end: {
						line: 83,
						column: 72
					}
				}, {
					start: {
						line: 83,
						column: 75
					},
					end: {
						line: 83,
						column: 77
					}
				}],
				line: 83
			},
			'1': {
				loc: {
					start: {
						line: 83,
						column: 34
					},
					end: {
						line: 83,
						column: 52
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 83,
						column: 34
					},
					end: {
						line: 83,
						column: 37
					}
				}, {
					start: {
						line: 83,
						column: 41
					},
					end: {
						line: 83,
						column: 52
					}
				}],
				line: 83
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Aggregates all Errors classes that media tag throw.
 *
 * @since 0.2.0
 */
var Errors = (++cov_2674lycw1g.s[0], {
	// Media Tag //

	/**
  * @class {PluginExists} PluginExists Error thrown when a try to
  * register a plugin but the same identifier has been already
  * registered.
  * @since 0.2.0
  */
	PluginExists: function (_Error) {
		_inherits(PluginExists, _Error);

		function PluginExists(objPlugin) {
			_classCallCheck(this, PluginExists);

			++cov_2674lycw1g.f[0];
			++cov_2674lycw1g.s[1];
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
	TypeNotFound: function (_Error2) {
		_inherits(TypeNotFound, _Error2);

		function TypeNotFound() {
			_classCallCheck(this, TypeNotFound);

			++cov_2674lycw1g.f[1];
			++cov_2674lycw1g.s[2];
			return _possibleConstructorReturn(this, (TypeNotFound.__proto__ || Object.getPrototypeOf(TypeNotFound)).call(this, 'Media Tag could not find the content type of an instance.}.'));
		}

		return TypeNotFound;
	}(Error),

	// Fetch //

	/**
  * @class {FetchFail} FetchFail Error thrown when media tag
  * is incapable to fetch a resource.
  * @since 0.2.0
  */
	FetchFail: function (_Error3) {
		_inherits(FetchFail, _Error3);

		function FetchFail(response) {
			_classCallCheck(this, FetchFail);

			++cov_2674lycw1g.f[2];
			++cov_2674lycw1g.s[3];
			return _possibleConstructorReturn(this, (FetchFail.__proto__ || Object.getPrototypeOf(FetchFail)).call(this, 'Could not fetch "' + response.url + '", received "' + response.status + ': ' + response.statusText + '".'));
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
	InvalidCryptoKey: function (_Error4) {
		_inherits(InvalidCryptoKey, _Error4);

		function InvalidCryptoKey() {
			_classCallCheck(this, InvalidCryptoKey);

			++cov_2674lycw1g.f[3];
			++cov_2674lycw1g.s[4];
			return _possibleConstructorReturn(this, (InvalidCryptoKey.__proto__ || Object.getPrototypeOf(InvalidCryptoKey)).call(this, 'Invalid cryptographic key.'));
		}

		return InvalidCryptoKey;
	}(Error),

	/**
  * @class {InvalidCryptoLib} InvalidCryptoLib Error thrown when
  * using the crypto plugin. The key contains an invalid algorithm
  * (for example, to the day, only 'xsalsa20poly1305' is supported).
  * @since 0.2.0
  */
	InvalidCryptoLib: function (_Error5) {
		_inherits(InvalidCryptoLib, _Error5);

		function InvalidCryptoLib() {
			_classCallCheck(this, InvalidCryptoLib);

			++cov_2674lycw1g.f[4];
			++cov_2674lycw1g.s[5];
			return _possibleConstructorReturn(this, (InvalidCryptoLib.__proto__ || Object.getPrototypeOf(InvalidCryptoLib)).call(this, 'Invalid cryptographic algorithm name.'));
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
	FailedCrypto: function (_Error6) {
		_inherits(FailedCrypto, _Error6);

		function FailedCrypto(err) {
			_classCallCheck(this, FailedCrypto);

			++cov_2674lycw1g.f[5];
			++cov_2674lycw1g.s[6];
			return _possibleConstructorReturn(this, (FailedCrypto.__proto__ || Object.getPrototypeOf(FailedCrypto)).call(this, 'Failed to decrypt file' + ((++cov_2674lycw1g.b[1][0], err) && (++cov_2674lycw1g.b[1][1], err.message) ? (++cov_2674lycw1g.b[0][0], ' ' + err.message) : (++cov_2674lycw1g.b[0][1], '')) + '.'));
		}

		return FailedCrypto;
	}(Error)
});

exports.default = Errors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2Vycm9ycy5qcyJdLCJuYW1lcyI6WyJFcnJvcnMiLCJQbHVnaW5FeGlzdHMiLCJvYmpQbHVnaW4iLCJpZGVudGlmaWVyIiwiRXJyb3IiLCJUeXBlTm90Rm91bmQiLCJGZXRjaEZhaWwiLCJyZXNwb25zZSIsInVybCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJJbnZhbGlkQ3J5cHRvS2V5IiwiSW52YWxpZENyeXB0b0xpYiIsIkZhaWxlZENyeXB0byIsImVyciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7O0FBS0EsSUFBTUEsaUNBQVM7QUFDZDs7QUFFQTs7Ozs7O0FBTUFDO0FBQUE7O0FBQ0Msd0JBQVlDLFNBQVosRUFBdUI7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNklBQ0tBLFVBQVVDLFVBRGY7QUFFdEI7O0FBSEY7QUFBQSxHQUF5Q0MsS0FBekMsQ0FUYzs7QUFlZDs7Ozs7OztBQU9BQztBQUFBOztBQUNDLDBCQUFjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBRWI7O0FBSEY7QUFBQSxHQUF5Q0QsS0FBekMsQ0F0QmM7O0FBNEJkOztBQUVBOzs7OztBQUtBRTtBQUFBOztBQUNDLHFCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNJQUNLQSxTQUFTQyxHQURkLHFCQUNpQ0QsU0FBU0UsTUFEMUMsVUFDcURGLFNBQVNHLFVBRDlEO0FBRXJCOztBQUhGO0FBQUEsR0FBbUNOLEtBQW5DLENBbkNjOztBQXlDZDs7QUFFQTs7Ozs7O0FBTUFPO0FBQUE7O0FBQ0MsOEJBQWM7QUFBQTs7QUFBQTtBQUFBO0FBQUEsOEhBQ1AsNEJBRE87QUFFYjs7QUFIRjtBQUFBLEdBQWlEUCxLQUFqRCxDQWpEYzs7QUF1RGQ7Ozs7OztBQU1BUTtBQUFBOztBQUNDLDhCQUFjO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDhIQUNQLHVDQURPO0FBRWI7O0FBSEY7QUFBQSxHQUFpRFIsS0FBakQsQ0E3RGM7O0FBbUVkOzs7Ozs7O0FBT0FTO0FBQUE7O0FBQ0Msd0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFBQTtBQUFBO0FBQUEsa0pBQ2UsOERBQU9BLElBQUlDLE9BQVgscUNBQXlCRCxJQUFJQyxPQUE3QiwrQkFBeUMsRUFBekMsQ0FEZjtBQUVoQjs7QUFIRjtBQUFBLEdBQXlDWCxLQUF6QztBQTFFYyxDQUFULENBQU47O2tCQWlGZUosTSIsImZpbGUiOiJlcnJvcnMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZHJhZGVhdS9naXQvbWVkaWFfdGFnX3YyIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEFnZ3JlZ2F0ZXMgYWxsIEVycm9ycyBjbGFzc2VzIHRoYXQgbWVkaWEgdGFnIHRocm93LlxuICpcbiAqIEBzaW5jZSAwLjIuMFxuICovXG5jb25zdCBFcnJvcnMgPSB7XG5cdC8vIE1lZGlhIFRhZyAvL1xuXG5cdC8qKlxuXHQgKiBAY2xhc3Mge1BsdWdpbkV4aXN0c30gUGx1Z2luRXhpc3RzIEVycm9yIHRocm93biB3aGVuIGEgdHJ5IHRvXG5cdCAqIHJlZ2lzdGVyIGEgcGx1Z2luIGJ1dCB0aGUgc2FtZSBpZGVudGlmaWVyIGhhcyBiZWVuIGFscmVhZHlcblx0ICogcmVnaXN0ZXJlZC5cblx0ICogQHNpbmNlIDAuMi4wXG5cdCAqL1xuXHRQbHVnaW5FeGlzdHM6IGNsYXNzIFBsdWdpbkV4aXN0cyBleHRlbmRzIEVycm9yIHtcblx0XHRjb25zdHJ1Y3RvcihvYmpQbHVnaW4pIHtcblx0XHRcdHN1cGVyKGBQbHVnaW4gd2l0aCBzYW1lIFwiJHtvYmpQbHVnaW4uaWRlbnRpZmllcn1cIiBpZGVudGlmaWVyIGZvdW5kLmApO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogQGNsYXNzIHtUeXBlTm90Rm91bmR9IFR5cGVOb3RGb3VuZCBFcnJvciB0aHJvd24gd2hlbiBtZWRpYSB0YWdcblx0ICogaXMgaW5jYXBhYmxlIHRvIGZpbmQgdGhlIHR5cGUgb2YgYSBnaXZlbiBtZWRpYSBjb250ZW50LiBJdFxuXHQgKiBsb29wcyBhbGwgdGhlIHJlZ2lzdGVyZWQgcGx1Z2lucywgdHJ5aW5nIHRvIGZpbmQgYSBtYXRjaCBmb3Jcblx0ICogdHlwZUNoZWNrLCBpZiBubyBwbHVnaW4gcmV0dXJucyB0cnVlIHRoZW4gdGhpcyBlcnJvciBvY2N1cnMuXG5cdCAqIEBzaW5jZSAwLjIuMFxuXHQgKi9cblx0VHlwZU5vdEZvdW5kOiBjbGFzcyBUeXBlTm90Rm91bmQgZXh0ZW5kcyBFcnJvciB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcihgTWVkaWEgVGFnIGNvdWxkIG5vdCBmaW5kIHRoZSBjb250ZW50IHR5cGUgb2YgYW4gaW5zdGFuY2UufS5gKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gRmV0Y2ggLy9cblxuXHQvKipcblx0ICogQGNsYXNzIHtGZXRjaEZhaWx9IEZldGNoRmFpbCBFcnJvciB0aHJvd24gd2hlbiBtZWRpYSB0YWdcblx0ICogaXMgaW5jYXBhYmxlIHRvIGZldGNoIGEgcmVzb3VyY2UuXG5cdCAqIEBzaW5jZSAwLjIuMFxuXHQgKi9cblx0RmV0Y2hGYWlsOiBjbGFzcyBGZXRjaEZhaWwgZXh0ZW5kcyBFcnJvciB7XG5cdFx0Y29uc3RydWN0b3IocmVzcG9uc2UpIHtcblx0XHRcdHN1cGVyKGBDb3VsZCBub3QgZmV0Y2ggXCIke3Jlc3BvbnNlLnVybH1cIiwgcmVjZWl2ZWQgXCIke3Jlc3BvbnNlLnN0YXR1c306ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1cIi5gKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gQ3J5cHRvIHBsdWdpbiAvL1xuXG5cdC8qKlxuXHQgKiBAY2xhc3Mge0ludmFsaWRDcnlwdG9LZXl9IEludmFsaWRDcnlwdG9LZXkgRXJyb3IgdGhyb3duIHdoZW5cblx0ICogdXNpbmcgdGhlIGNyeXB0byBwbHVnaW4uIFRoZSBrZXkgaW5mb3JtZWQgaXMgaW52YWxpZCAoZm9yXG5cdCAqIGV4YW1wbGUgd2hlbiBhIGZpZWxkIGlzIG1pc3NpbmcpLlxuXHQgKiBAc2luY2UgMC4yLjBcblx0ICovXG5cdEludmFsaWRDcnlwdG9LZXk6IGNsYXNzIEludmFsaWRDcnlwdG9LZXkgZXh0ZW5kcyBFcnJvciB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcignSW52YWxpZCBjcnlwdG9ncmFwaGljIGtleS4nKTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEBjbGFzcyB7SW52YWxpZENyeXB0b0xpYn0gSW52YWxpZENyeXB0b0xpYiBFcnJvciB0aHJvd24gd2hlblxuXHQgKiB1c2luZyB0aGUgY3J5cHRvIHBsdWdpbi4gVGhlIGtleSBjb250YWlucyBhbiBpbnZhbGlkIGFsZ29yaXRobVxuXHQgKiAoZm9yIGV4YW1wbGUsIHRvIHRoZSBkYXksIG9ubHkgJ3hzYWxzYTIwcG9seTEzMDUnIGlzIHN1cHBvcnRlZCkuXG5cdCAqIEBzaW5jZSAwLjIuMFxuXHQgKi9cblx0SW52YWxpZENyeXB0b0xpYjogY2xhc3MgSW52YWxpZENyeXB0b0xpYiBleHRlbmRzIEVycm9yIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHN1cGVyKCdJbnZhbGlkIGNyeXB0b2dyYXBoaWMgYWxnb3JpdGhtIG5hbWUuJyk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBAY2xhc3Mge0ZhaWxlZENyeXB0b30gRmFpbGVkQ3J5cHRvIEVycm9yIHRocm93biB3aGVuXG5cdCAqIHVzaW5nIHRoZSBjcnlwdG8gcGx1Z2luLiBUaGUgY29udGVudHMgd2VyZSBpbXBvc3NpYmxlIHRvXG5cdCAqIGRlY3J5cHQgKGZvciBleGFtcGxlLCB0aGUga2V5IG1heSBiZSB3cm9uZywgb3IgdGhlIGVuY3J5cHRlZFxuXHQgKiBmaWxlKS5cblx0ICogQHNpbmNlIDAuMi4wXG5cdCAqL1xuXHRGYWlsZWRDcnlwdG86IGNsYXNzIEZhaWxlZENyeXB0byBleHRlbmRzIEVycm9yIHtcblx0XHRjb25zdHJ1Y3RvcihlcnIpIHtcblx0XHRcdHN1cGVyKGBGYWlsZWQgdG8gZGVjcnlwdCBmaWxlJHtlcnIgJiYgZXJyLm1lc3NhZ2UgPyBgICR7ZXJyLm1lc3NhZ2V9YCA6ICcnfS5gKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ycztcbiJdfQ==

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(32);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , hide      = __webpack_require__(13)
  , has       = __webpack_require__(11)
  , SRC       = __webpack_require__(43)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__(26).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0)
  , fails   = __webpack_require__(3)
  , defined = __webpack_require__(20)
  , quot    = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
  var S  = String(defined(string))
    , p1 = '<' + tag;
  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function(NAME, exec){
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function(){
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(60)
  , defined = __webpack_require__(20);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(61)
  , createDesc     = __webpack_require__(32)
  , toIObject      = __webpack_require__(16)
  , toPrimitive    = __webpack_require__(25)
  , has            = __webpack_require__(11)
  , IE8_DOM_DEFINE = __webpack_require__(125)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(11)
  , toObject    = __webpack_require__(9)
  , IE_PROTO    = __webpack_require__(98)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = function(method, arg){
  return !!method && fails(function(){
    arg ? method.call(null, function(){}, 1) : method.call(null);
  });
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(62);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

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
  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window && window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
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
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
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
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(27)
  , IObject  = __webpack_require__(60)
  , toObject = __webpack_require__(9)
  , toLength = __webpack_require__(8)
  , asc      = __webpack_require__(170);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0)
  , core    = __webpack_require__(26)
  , fails   = __webpack_require__(3);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(12);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Map     = __webpack_require__(141)
  , $export = __webpack_require__(0)
  , shared  = __webpack_require__(75)('metadata')
  , store   = shared.store || (shared.store = new (__webpack_require__(144)));

var getOrCreateMetadataMap = function(target, targetKey, create){
  var targetMetadata = store.get(target);
  if(!targetMetadata){
    if(!create)return undefined;
    store.set(target, targetMetadata = new Map);
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if(!keyMetadata){
    if(!create)return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map);
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function(target, targetKey){
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
    , keys        = [];
  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
  return keys;
};
var toMetaKey = function(it){
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function(O){
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if(__webpack_require__(6)){
  var LIBRARY             = __webpack_require__(36)
    , global              = __webpack_require__(2)
    , fails               = __webpack_require__(3)
    , $export             = __webpack_require__(0)
    , $typed              = __webpack_require__(76)
    , $buffer             = __webpack_require__(105)
    , ctx                 = __webpack_require__(27)
    , anInstance          = __webpack_require__(35)
    , propertyDesc        = __webpack_require__(32)
    , hide                = __webpack_require__(13)
    , redefineAll         = __webpack_require__(40)
    , toInteger           = __webpack_require__(33)
    , toLength            = __webpack_require__(8)
    , toIndex             = __webpack_require__(42)
    , toPrimitive         = __webpack_require__(25)
    , has                 = __webpack_require__(11)
    , same                = __webpack_require__(138)
    , classof             = __webpack_require__(59)
    , isObject            = __webpack_require__(4)
    , toObject            = __webpack_require__(9)
    , isArrayIter         = __webpack_require__(90)
    , create              = __webpack_require__(37)
    , getPrototypeOf      = __webpack_require__(18)
    , gOPN                = __webpack_require__(38).f
    , getIterFn           = __webpack_require__(107)
    , uid                 = __webpack_require__(43)
    , wks                 = __webpack_require__(5)
    , createArrayMethod   = __webpack_require__(23)
    , createArrayIncludes = __webpack_require__(66)
    , speciesConstructor  = __webpack_require__(99)
    , ArrayIterators      = __webpack_require__(108)
    , Iterators           = __webpack_require__(49)
    , $iterDetect         = __webpack_require__(72)
    , setSpecies          = __webpack_require__(41)
    , arrayFill           = __webpack_require__(83)
    , arrayCopyWithin     = __webpack_require__(118)
    , $DP                 = __webpack_require__(7)
    , $GOPD               = __webpack_require__(17)
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks('iterator')
    , TAG                 = wks('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined)throw TypeError(WRONG_LENGTH);
    var number = +it
      , length = toLength(it);
    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function(it){
    if(isObject(it) && TYPED_ARRAY in it)return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index)result[index] = list[index++];
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index)result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject(arrayLike)
      , len    = toLength(src.length)
      , index  = 0;
    if(len + offset > length)throw RangeError(WRONG_LENGTH);
    while(index < len)this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    }
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject(data)){
          length     = strictToLength(data, true)
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES)throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length)addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function(){ /* empty */ };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1m1o91khh4 = function () {
	var path = '/home/dradeau/git/media_tag_v2/src/core/plugin.js',
	    hash = '8e278f0c3fc78c57d0b26082cd4f9cc1fae4863c',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/dradeau/git/media_tag_v2/src/core/plugin.js',
		statementMap: {
			'0': {
				start: {
					line: 4,
					column: 14
				},
				end: {
					line: 4,
					column: 39
				}
			},
			'1': {
				start: {
					line: 12,
					column: 22
				},
				end: {
					line: 12,
					column: 24
				}
			},
			'2': {
				start: {
					line: 21,
					column: 21
				},
				end: {
					line: 21,
					column: 50
				}
			},
			'3': {
				start: {
					line: 21,
					column: 29
				},
				end: {
					line: 21,
					column: 50
				}
			},
			'4': {
				start: {
					line: 36,
					column: 2
				},
				end: {
					line: 38,
					column: 3
				}
			},
			'5': {
				start: {
					line: 37,
					column: 3
				},
				end: {
					line: 37,
					column: 41
				}
			},
			'6': {
				start: {
					line: 40,
					column: 2
				},
				end: {
					line: 40,
					column: 44
				}
			},
			'7': {
				start: {
					line: 41,
					column: 2
				},
				end: {
					line: 41,
					column: 51
				}
			},
			'8': {
				start: {
					line: 54,
					column: 2
				},
				end: {
					line: 54,
					column: 74
				}
			},
			'9': {
				start: {
					line: 70,
					column: 20
				},
				end: {
					line: 70,
					column: 46
				}
			},
			'10': {
				start: {
					line: 71,
					column: 2
				},
				end: {
					line: 79,
					column: 3
				}
			},
			'11': {
				start: {
					line: 72,
					column: 20
				},
				end: {
					line: 72,
					column: 32
				}
			},
			'12': {
				start: {
					line: 74,
					column: 18
				},
				end: {
					line: 74,
					column: 44
				}
			},
			'13': {
				start: {
					line: 76,
					column: 3
				},
				end: {
					line: 78,
					column: 4
				}
			},
			'14': {
				start: {
					line: 77,
					column: 4
				},
				end: {
					line: 77,
					column: 20
				}
			},
			'15': {
				start: {
					line: 80,
					column: 2
				},
				end: {
					line: 80,
					column: 15
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 21,
						column: 21
					},
					end: {
						line: 21,
						column: 22
					}
				},
				loc: {
					start: {
						line: 21,
						column: 29
					},
					end: {
						line: 21,
						column: 50
					}
				},
				line: 21
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 35,
						column: 1
					},
					end: {
						line: 35,
						column: 2
					}
				},
				loc: {
					start: {
						line: 35,
						column: 31
					},
					end: {
						line: 42,
						column: 2
					}
				},
				line: 35
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 53,
						column: 1
					},
					end: {
						line: 53,
						column: 2
					}
				},
				loc: {
					start: {
						line: 53,
						column: 30
					},
					end: {
						line: 55,
						column: 2
					}
				},
				line: 53
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 68,
						column: 1
					},
					end: {
						line: 68,
						column: 2
					}
				},
				loc: {
					start: {
						line: 68,
						column: 30
					},
					end: {
						line: 81,
						column: 2
					}
				},
				line: 68
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 36,
						column: 2
					},
					end: {
						line: 38,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 36,
						column: 2
					},
					end: {
						line: 38,
						column: 3
					}
				}, {
					start: {
						line: 36,
						column: 2
					},
					end: {
						line: 38,
						column: 3
					}
				}],
				line: 36
			},
			'1': {
				loc: {
					start: {
						line: 54,
						column: 9
					},
					end: {
						line: 54,
						column: 73
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 54,
						column: 36
					},
					end: {
						line: 54,
						column: 61
					}
				}, {
					start: {
						line: 54,
						column: 64
					},
					end: {
						line: 54,
						column: 73
					}
				}],
				line: 54
			},
			'2': {
				loc: {
					start: {
						line: 76,
						column: 3
					},
					end: {
						line: 78,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 76,
						column: 3
					},
					end: {
						line: 78,
						column: 4
					}
				}, {
					start: {
						line: 76,
						column: 3
					},
					end: {
						line: 78,
						column: 4
					}
				}],
				line: 76
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debug = __webpack_require__(22);

var _debug2 = _interopRequireDefault(_debug);

var _errors = __webpack_require__(10);

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (++cov_1m1o91khh4.s[0], (0, _debug2.default)('MT:Plugin'));

/**
 * Stores registered plugins in a private space.
 *
 * @private
 * @type    {Object}
 */
var pluginStorage = (++cov_1m1o91khh4.s[1], {});

/**
 * Reports whether or not a plugin has been registered.
 *
 * @private
 * @param {string} name The name of a plugin.
 * @returns {boolean} Whether or not the plugin has been registered.
 */
++cov_1m1o91khh4.s[2];
var pluginExists = function pluginExists(name) {
	++cov_1m1o91khh4.f[0];
	++cov_1m1o91khh4.s[3];
	return name in pluginStorage;
};

/**
 * Groups all plugin related methods.
 *
 * @class Plugin
 * @since 0.2.0
 */

var Plugin = function () {
	function Plugin() {
		_classCallCheck(this, Plugin);
	}

	_createClass(Plugin, null, [{
		key: 'registerPlugin',

		/**
   * Register a new plugin.
   *
   * @param {Plugin} plugin
   */
		value: function registerPlugin(plugin) {
			++cov_1m1o91khh4.f[1];
			++cov_1m1o91khh4.s[4];

			if (pluginExists(plugin.identifier)) {
				++cov_1m1o91khh4.b[0][0];
				++cov_1m1o91khh4.s[5];

				throw new _errors2.default.PluginExists(plugin);
			} else {
				++cov_1m1o91khh4.b[0][1];
			}

			++cov_1m1o91khh4.s[6];
			pluginStorage[plugin.identifier] = plugin;
			++cov_1m1o91khh4.s[7];
			debug('Plugin ' + plugin.identifier + ' registered.');
		}

		/**
   * Returns a plugin given its identifier.
   *
   * @static
   * @param {any} pluginName Plugin identifier
   * @returns Plugin
   *
   * @memberOf Plugin
   */

	}, {
		key: 'getPlugin',
		value: function getPlugin(pluginName) {
			++cov_1m1o91khh4.f[2];
			++cov_1m1o91khh4.s[8];

			return pluginExists(pluginName) ? (++cov_1m1o91khh4.b[1][0], pluginStorage[pluginName]) : (++cov_1m1o91khh4.b[1][1], undefined);
		}

		/**
   * Returns a plugin identifier given a mediaObject.
   * It will check over all registered plugins if the mediaObject
   * returns `true` for the typeCheck function.
   *
   * @static
   * @param {any} mediaObject Media object initialized by media tag library.
   * @returns string Plugin identifier
   *
   * @memberOf Plugin
   */

	}, {
		key: 'findType',
		value: function findType(mediaObject) {
			++cov_1m1o91khh4.f[3];

			// console.log({pluginStorage});
			var pluginIds = (++cov_1m1o91khh4.s[9], Object.keys(pluginStorage));
			++cov_1m1o91khh4.s[10];
			for (var i = 0; i < pluginIds.length; i++) {
				var pluginId = (++cov_1m1o91khh4.s[11], pluginIds[i]);
				// console.log({pluginId});
				var plugin = (++cov_1m1o91khh4.s[12], Plugin.getPlugin(pluginId));
				// console.log({plugin});
				++cov_1m1o91khh4.s[13];
				if (plugin.typeCheck(mediaObject)) {
					++cov_1m1o91khh4.b[2][0];
					++cov_1m1o91khh4.s[14];

					return pluginId;
				} else {
					++cov_1m1o91khh4.b[2][1];
				}
			}
			++cov_1m1o91khh4.s[15];
			return false;
		}
	}]);

	return Plugin;
}();

exports.default = Plugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL3BsdWdpbi5qcyJdLCJuYW1lcyI6WyJkZWJ1ZyIsInBsdWdpblN0b3JhZ2UiLCJwbHVnaW5FeGlzdHMiLCJQbHVnaW4iLCJwbHVnaW4iLCJpZGVudGlmaWVyIiwiUGx1Z2luRXhpc3RzIiwicGx1Z2luTmFtZSIsInVuZGVmaW5lZCIsIm1lZGlhT2JqZWN0IiwicGx1Z2luSWRzIiwiT2JqZWN0Iiwia2V5cyIsImkiLCJsZW5ndGgiLCJwbHVnaW5JZCIsImdldFBsdWdpbiIsInR5cGVDaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxnQ0FBUSxxQkFBYSxXQUFiLENBQVIsQ0FBTjs7QUFFQTs7Ozs7O0FBTUEsSUFBTUMsd0NBQWdCLEVBQWhCLENBQU47O0FBRUE7Ozs7Ozs7O0FBT0EsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLE9BQVE7QUFBQTtBQUFBO0FBQUEsZ0JBQVFELGFBQVI7QUFBcUIsQ0FBbEQ7O0FBRUE7Ozs7Ozs7SUFNTUUsTTs7Ozs7Ozs7QUFDRjs7Ozs7aUNBS21CQyxNLEVBQVE7QUFBQTtBQUFBOztBQUM3QixPQUFJRixhQUFhRSxPQUFPQyxVQUFwQixDQUFKLEVBQXFDO0FBQUE7QUFBQTs7QUFDcEMsVUFBTSxJQUFJLGlCQUFPQyxZQUFYLENBQXdCRixNQUF4QixDQUFOO0FBQ0EsSUFGRDtBQUFBO0FBQUE7O0FBRDZCO0FBSzdCSCxpQkFBY0csT0FBT0MsVUFBckIsSUFBbUNELE1BQW5DO0FBTDZCO0FBTTdCSixxQkFBZ0JJLE9BQU9DLFVBQXZCO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7Ozs0QkFTaUJFLFUsRUFBWTtBQUFBO0FBQUE7O0FBQzVCLFVBQU9MLGFBQWFLLFVBQWIsK0JBQTJCTixjQUFjTSxVQUFkLENBQTNCLCtCQUF1REMsU0FBdkQsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7OzsyQkFXZ0JDLFcsRUFBYTtBQUFBOztBQUM1QjtBQUNBLE9BQU1DLG9DQUFZQyxPQUFPQyxJQUFQLENBQVlYLGFBQVosQ0FBWixDQUFOO0FBRjRCO0FBRzVCLFFBQUssSUFBSVksSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxVQUFVSSxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDMUMsUUFBTUUsb0NBQVdMLFVBQVVHLENBQVYsQ0FBWCxDQUFOO0FBQ0E7QUFDQSxRQUFNVCxrQ0FBU0QsT0FBT2EsU0FBUCxDQUFpQkQsUUFBakIsQ0FBVCxDQUFOO0FBQ0E7QUFKMEM7QUFLMUMsUUFBSVgsT0FBT2EsU0FBUCxDQUFpQlIsV0FBakIsQ0FBSixFQUFtQztBQUFBO0FBQUE7O0FBQ2xDLFlBQU9NLFFBQVA7QUFDQSxLQUZEO0FBQUE7QUFBQTtBQUdBO0FBWDJCO0FBWTVCLFVBQU8sS0FBUDtBQUNBOzs7Ozs7a0JBR2FaLE0iLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2RyYWRlYXUvZ2l0L21lZGlhX3RhZ192MiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWJ1Z0ZhY3RvcnkgZnJvbSAnZGVidWcnO1xuaW1wb3J0IEVycm9ycyBmcm9tICcuL2Vycm9ycyc7XG5cbmNvbnN0IGRlYnVnID0gZGVidWdGYWN0b3J5KCdNVDpQbHVnaW4nKTtcblxuLyoqXG4gKiBTdG9yZXMgcmVnaXN0ZXJlZCBwbHVnaW5zIGluIGEgcHJpdmF0ZSBzcGFjZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUgICAge09iamVjdH1cbiAqL1xuY29uc3QgcGx1Z2luU3RvcmFnZSA9IHt9O1xuXG4vKipcbiAqIFJlcG9ydHMgd2hldGhlciBvciBub3QgYSBwbHVnaW4gaGFzIGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgYSBwbHVnaW4uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgdGhlIHBsdWdpbiBoYXMgYmVlbiByZWdpc3RlcmVkLlxuICovXG5jb25zdCBwbHVnaW5FeGlzdHMgPSBuYW1lID0+IG5hbWUgaW4gcGx1Z2luU3RvcmFnZTtcblxuLyoqXG4gKiBHcm91cHMgYWxsIHBsdWdpbiByZWxhdGVkIG1ldGhvZHMuXG4gKlxuICogQGNsYXNzIFBsdWdpblxuICogQHNpbmNlIDAuMi4wXG4gKi9cbmNsYXNzIFBsdWdpbiB7XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgcGx1Z2luLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQbHVnaW59IHBsdWdpblxuICAgICAqL1xuXHRzdGF0aWMgcmVnaXN0ZXJQbHVnaW4ocGx1Z2luKSB7XG5cdFx0aWYgKHBsdWdpbkV4aXN0cyhwbHVnaW4uaWRlbnRpZmllcikpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcnMuUGx1Z2luRXhpc3RzKHBsdWdpbik7XG5cdFx0fVxuXG5cdFx0cGx1Z2luU3RvcmFnZVtwbHVnaW4uaWRlbnRpZmllcl0gPSBwbHVnaW47XG5cdFx0ZGVidWcoYFBsdWdpbiAke3BsdWdpbi5pZGVudGlmaWVyfSByZWdpc3RlcmVkLmApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYSBwbHVnaW4gZ2l2ZW4gaXRzIGlkZW50aWZpZXIuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHthbnl9IHBsdWdpbk5hbWUgUGx1Z2luIGlkZW50aWZpZXJcblx0ICogQHJldHVybnMgUGx1Z2luXG5cdCAqXG5cdCAqIEBtZW1iZXJPZiBQbHVnaW5cblx0ICovXG5cdHN0YXRpYyBnZXRQbHVnaW4ocGx1Z2luTmFtZSkge1xuXHRcdHJldHVybiBwbHVnaW5FeGlzdHMocGx1Z2luTmFtZSkgPyBwbHVnaW5TdG9yYWdlW3BsdWdpbk5hbWVdIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYSBwbHVnaW4gaWRlbnRpZmllciBnaXZlbiBhIG1lZGlhT2JqZWN0LlxuXHQgKiBJdCB3aWxsIGNoZWNrIG92ZXIgYWxsIHJlZ2lzdGVyZWQgcGx1Z2lucyBpZiB0aGUgbWVkaWFPYmplY3Rcblx0ICogcmV0dXJucyBgdHJ1ZWAgZm9yIHRoZSB0eXBlQ2hlY2sgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHthbnl9IG1lZGlhT2JqZWN0IE1lZGlhIG9iamVjdCBpbml0aWFsaXplZCBieSBtZWRpYSB0YWcgbGlicmFyeS5cblx0ICogQHJldHVybnMgc3RyaW5nIFBsdWdpbiBpZGVudGlmaWVyXG5cdCAqXG5cdCAqIEBtZW1iZXJPZiBQbHVnaW5cblx0ICovXG5cdHN0YXRpYyBmaW5kVHlwZShtZWRpYU9iamVjdCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKHtwbHVnaW5TdG9yYWdlfSk7XG5cdFx0Y29uc3QgcGx1Z2luSWRzID0gT2JqZWN0LmtleXMocGx1Z2luU3RvcmFnZSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbHVnaW5JZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBsdWdpbklkID0gcGx1Z2luSWRzW2ldO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coe3BsdWdpbklkfSk7XG5cdFx0XHRjb25zdCBwbHVnaW4gPSBQbHVnaW4uZ2V0UGx1Z2luKHBsdWdpbklkKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHtwbHVnaW59KTtcblx0XHRcdGlmIChwbHVnaW4udHlwZUNoZWNrKG1lZGlhT2JqZWN0KSkge1xuXHRcdFx0XHRyZXR1cm4gcGx1Z2luSWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVnaW47XG4iXX0=

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(43)('meta')
  , isObject = __webpack_require__(4)
  , has      = __webpack_require__(11)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(3)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

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

module.exports = function (obj, key, value) {
  var flags = obj.__flags || (obj.__flags = Object.create(null));
  if (arguments.length === 3) {
    flags[key] = value;
  } else {
    return flags[key];
  }
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(1)
  , dPs         = __webpack_require__(131)
  , enumBugKeys = __webpack_require__(86)
  , IE_PROTO    = __webpack_require__(98)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(85)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(88).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(133)
  , hiddenKeys = __webpack_require__(86).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(133)
  , enumBugKeys = __webpack_require__(86);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(14);
module.exports = function(target, src, safe){
  for(var key in src)redefine(target, key, src[key], safe);
  return target;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(2)
  , dP          = __webpack_require__(7)
  , DESCRIPTORS = __webpack_require__(6)
  , SPECIES     = __webpack_require__(5)('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() ;// || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(58)
var ieee754 = __webpack_require__(63)
var isArray = __webpack_require__(64)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

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
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
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

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

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


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(5)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(13)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(27)
  , call        = __webpack_require__(127)
  , isArrayIter = __webpack_require__(90)
  , anObject    = __webpack_require__(1)
  , toLength    = __webpack_require__(8)
  , getIterFn   = __webpack_require__(107)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(11)
  , TAG = __webpack_require__(5)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0)
  , defined = __webpack_require__(20)
  , fails   = __webpack_require__(3)
  , spaces  = __webpack_require__(103)
  , space   = '[' + spaces + ']'
  , non     = '\u200b\u0085'
  , ltrim   = RegExp('^' + space + space + '*')
  , rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = fails(function(){
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if(ALIAS)exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
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
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
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
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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

process.nextTick = function (fun) {
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
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_186h6t7o8v = function () {
	var path = '/home/dradeau/git/media_tag_v2/src/core/media-object.js',
	    hash = '63e0676bf73d4926b6fa3b249fb0792e08610c9b',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/dradeau/git/media_tag_v2/src/core/media-object.js',
		statementMap: {
			'0': {
				start: {
					line: 5,
					column: 14
				},
				end: {
					line: 5,
					column: 44
				}
			},
			'1': {
				start: {
					line: 29,
					column: 2
				},
				end: {
					line: 29,
					column: 24
				}
			},
			'2': {
				start: {
					line: 38,
					column: 2
				},
				end: {
					line: 43,
					column: 4
				}
			},
			'3': {
				start: {
					line: 41,
					column: 23
				},
				end: {
					line: 41,
					column: 44
				}
			},
			'4': {
				start: {
					line: 45,
					column: 2
				},
				end: {
					line: 45,
					column: 34
				}
			},
			'5': {
				start: {
					line: 53,
					column: 2
				},
				end: {
					line: 53,
					column: 45
				}
			},
			'6': {
				start: {
					line: 54,
					column: 2
				},
				end: {
					line: 56,
					column: 3
				}
			},
			'7': {
				start: {
					line: 55,
					column: 3
				},
				end: {
					line: 55,
					column: 39
				}
			},
			'8': {
				start: {
					line: 57,
					column: 2
				},
				end: {
					line: 57,
					column: 51
				}
			},
			'9': {
				start: {
					line: 60,
					column: 22
				},
				end: {
					line: 60,
					column: 58
				}
			},
			'10': {
				start: {
					line: 61,
					column: 2
				},
				end: {
					line: 61,
					column: 28
				}
			},
			'11': {
				start: {
					line: 62,
					column: 2
				},
				end: {
					line: 62,
					column: 26
				}
			},
			'12': {
				start: {
					line: 86,
					column: 2
				},
				end: {
					line: 86,
					column: 31
				}
			},
			'13': {
				start: {
					line: 98,
					column: 2
				},
				end: {
					line: 98,
					column: 81
				}
			},
			'14': {
				start: {
					line: 98,
					column: 50
				},
				end: {
					line: 98,
					column: 79
				}
			},
			'15': {
				start: {
					line: 110,
					column: 2
				},
				end: {
					line: 110,
					column: 31
				}
			},
			'16': {
				start: {
					line: 122,
					column: 2
				},
				end: {
					line: 122,
					column: 30
				}
			},
			'17': {
				start: {
					line: 134,
					column: 2
				},
				end: {
					line: 134,
					column: 38
				}
			},
			'18': {
				start: {
					line: 145,
					column: 2
				},
				end: {
					line: 145,
					column: 34
				}
			},
			'19': {
				start: {
					line: 149,
					column: 2
				},
				end: {
					line: 151,
					column: 3
				}
			},
			'20': {
				start: {
					line: 150,
					column: 3
				},
				end: {
					line: 150,
					column: 61
				}
			},
			'21': {
				start: {
					line: 153,
					column: 2
				},
				end: {
					line: 153,
					column: 39
				}
			},
			'22': {
				start: {
					line: 168,
					column: 2
				},
				end: {
					line: 168,
					column: 23
				}
			},
			'23': {
				start: {
					line: 172,
					column: 2
				},
				end: {
					line: 172,
					column: 58
				}
			},
			'24': {
				start: {
					line: 172,
					column: 24
				},
				end: {
					line: 172,
					column: 56
				}
			},
			'25': {
				start: {
					line: 173,
					column: 2
				},
				end: {
					line: 173,
					column: 36
				}
			},
			'26': {
				start: {
					line: 187,
					column: 2
				},
				end: {
					line: 187,
					column: 36
				}
			},
			'27': {
				start: {
					line: 188,
					column: 25
				},
				end: {
					line: 188,
					column: 50
				}
			},
			'28': {
				start: {
					line: 189,
					column: 2
				},
				end: {
					line: 189,
					column: 109
				}
			},
			'29': {
				start: {
					line: 189,
					column: 37
				},
				end: {
					line: 189,
					column: 107
				}
			},
			'30': {
				start: {
					line: 203,
					column: 2
				},
				end: {
					line: 203,
					column: 36
				}
			},
			'31': {
				start: {
					line: 204,
					column: 25
				},
				end: {
					line: 204,
					column: 50
				}
			},
			'32': {
				start: {
					line: 205,
					column: 2
				},
				end: {
					line: 205,
					column: 98
				}
			},
			'33': {
				start: {
					line: 205,
					column: 37
				},
				end: {
					line: 205,
					column: 96
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 24,
						column: 1
					},
					end: {
						line: 24,
						column: 2
					}
				},
				loc: {
					start: {
						line: 24,
						column: 35
					},
					end: {
						line: 63,
						column: 2
					}
				},
				line: 24
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 41,
						column: 17
					},
					end: {
						line: 41,
						column: 18
					}
				},
				loc: {
					start: {
						line: 41,
						column: 23
					},
					end: {
						line: 41,
						column: 44
					}
				},
				line: 41
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 85,
						column: 1
					},
					end: {
						line: 85,
						column: 2
					}
				},
				loc: {
					start: {
						line: 85,
						column: 24
					},
					end: {
						line: 87,
						column: 2
					}
				},
				line: 85
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 97,
						column: 1
					},
					end: {
						line: 97,
						column: 2
					}
				},
				loc: {
					start: {
						line: 97,
						column: 22
					},
					end: {
						line: 99,
						column: 2
					}
				},
				line: 97
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 98,
						column: 41
					},
					end: {
						line: 98,
						column: 42
					}
				},
				loc: {
					start: {
						line: 98,
						column: 50
					},
					end: {
						line: 98,
						column: 79
					}
				},
				line: 98
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 109,
						column: 1
					},
					end: {
						line: 109,
						column: 2
					}
				},
				loc: {
					start: {
						line: 109,
						column: 16
					},
					end: {
						line: 111,
						column: 2
					}
				},
				line: 109
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 121,
						column: 1
					},
					end: {
						line: 121,
						column: 2
					}
				},
				loc: {
					start: {
						line: 121,
						column: 15
					},
					end: {
						line: 123,
						column: 2
					}
				},
				line: 121
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 133,
						column: 1
					},
					end: {
						line: 133,
						column: 2
					}
				},
				loc: {
					start: {
						line: 133,
						column: 29
					},
					end: {
						line: 135,
						column: 2
					}
				},
				line: 133
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 144,
						column: 1
					},
					end: {
						line: 144,
						column: 2
					}
				},
				loc: {
					start: {
						line: 144,
						column: 11
					},
					end: {
						line: 146,
						column: 2
					}
				},
				line: 144
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 148,
						column: 1
					},
					end: {
						line: 148,
						column: 2
					}
				},
				loc: {
					start: {
						line: 148,
						column: 17
					},
					end: {
						line: 154,
						column: 2
					}
				},
				line: 148
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 165,
						column: 1
					},
					end: {
						line: 165,
						column: 2
					}
				},
				loc: {
					start: {
						line: 165,
						column: 24
					},
					end: {
						line: 174,
						column: 2
					}
				},
				line: 165
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 172,
						column: 16
					},
					end: {
						line: 172,
						column: 17
					}
				},
				loc: {
					start: {
						line: 172,
						column: 24
					},
					end: {
						line: 172,
						column: 56
					}
				},
				line: 172
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 186,
						column: 1
					},
					end: {
						line: 186,
						column: 2
					}
				},
				loc: {
					start: {
						line: 186,
						column: 36
					},
					end: {
						line: 190,
						column: 2
					}
				},
				line: 186
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 189,
						column: 25
					},
					end: {
						line: 189,
						column: 26
					}
				},
				loc: {
					start: {
						line: 189,
						column: 37
					},
					end: {
						line: 189,
						column: 107
					}
				},
				line: 189
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 202,
						column: 1
					},
					end: {
						line: 202,
						column: 2
					}
				},
				loc: {
					start: {
						line: 202,
						column: 37
					},
					end: {
						line: 206,
						column: 2
					}
				},
				line: 202
			},
			'15': {
				name: '(anonymous_15)',
				decl: {
					start: {
						line: 205,
						column: 25
					},
					end: {
						line: 205,
						column: 26
					}
				},
				loc: {
					start: {
						line: 205,
						column: 37
					},
					end: {
						line: 205,
						column: 96
					}
				},
				line: 205
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 54,
						column: 2
					},
					end: {
						line: 56,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 54,
						column: 2
					},
					end: {
						line: 56,
						column: 3
					}
				}, {
					start: {
						line: 54,
						column: 2
					},
					end: {
						line: 56,
						column: 3
					}
				}],
				line: 54
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debug = __webpack_require__(22);

var _debug2 = _interopRequireDefault(_debug);

var _errors = __webpack_require__(10);

var _errors2 = _interopRequireDefault(_errors);

var _plugin = __webpack_require__(30);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (++cov_186h6t7o8v.s[0], (0, _debug2.default)('MT:MediaObject'));

/**
 * Media Object is created for each media-tag and contains the
 * information about its contents. It also has helpers functions that
 * can be used by plugins to add functionality to media-tag.
 *
 * @class MediaObject
 * @since 0.2.0
 */

var MediaObject = function () {

	/**
  * Creates an instance of MediaObject.
  * @param {Object} options Object with attributes that will specify the contents.
  * @param {HTMLElement} rootElement HTMLElement DOM Node that acts as container to this object.
  *
  * @memberOf MediaObject
  */
	function MediaObject(options, rootElement) {
		_classCallCheck(this, MediaObject);

		++cov_186h6t7o8v.f[0];
		++cov_186h6t7o8v.s[1];

		// TODO: parse src into url parts (protocol, domain, extension, etc)
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
		++cov_186h6t7o8v.s[2];
		this.hookedFns = {
			hasChildNodes: rootElement.hasChildNodes.bind(rootElement),
			removeChild: rootElement.removeChild.bind(rootElement),
			getLastChild: function getLastChild() {
				++cov_186h6t7o8v.f[1];
				++cov_186h6t7o8v.s[3];
				return rootElement.lastChild;
			},
			appendChild: rootElement.appendChild.bind(rootElement)
		};

		++cov_186h6t7o8v.s[4];
		debug('Creating media object.');
		// console.log({options});
		// Identify type

		/**
   * @type {string} contentTypeId plugin identifier that matches
   * typeCheck with this media
   */
		++cov_186h6t7o8v.s[5];
		this.contentTypeId = _plugin2.default.findType(this);
		++cov_186h6t7o8v.s[6];
		if (!this.contentTypeId) {
			++cov_186h6t7o8v.b[0][0];
			++cov_186h6t7o8v.s[7];

			throw new _errors2.default.TypeNotFound(this);
		} else {
			++cov_186h6t7o8v.b[0][1];
		}
		++cov_186h6t7o8v.s[8];
		debug('Found media type ' + this.contentTypeId + '.');

		// Startup
		var contentType = (++cov_186h6t7o8v.s[9], _plugin2.default.getPlugin(this.contentTypeId));
		++cov_186h6t7o8v.s[10];
		contentType.startup(this);
		++cov_186h6t7o8v.s[11];
		debug('Starting media');
	}

	/**
  * Returns the associated HTMLElement.
  *
  * @returns HTMLElement rootElement HTMLElement DOM Node that acts as container to this object.
  *
  * @memberOf MediaObject
  */
	// getRootElement() {
	// 	return this.rootElement;
	// }

	// TODO: define what will be direct method and what will be by getAttribute
	/**
  * Returns the value of a given attribute.
  *
  * @param {string} attrName Attribute identifier.
  * @returns any the contents of the attribute.
  *
  * @memberOf MediaObject
  */


	_createClass(MediaObject, [{
		key: 'getAttribute',
		value: function getAttribute(attrName) {
			++cov_186h6t7o8v.f[2];
			++cov_186h6t7o8v.s[12];

			return this.__info[attrName];
		}

		/**
   * Returns all the attribute identifiers that starts with 'data-attr'.
   * These attributes are normally passed down to the final element.
   *
   * @returns string[] List of attribute identifiers.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'getAllDataAttrKeys',
		value: function getAllDataAttrKeys() {
			++cov_186h6t7o8v.f[3];
			++cov_186h6t7o8v.s[13];

			return Object.keys(this.__info).filter(function (field) {
				++cov_186h6t7o8v.f[4];
				++cov_186h6t7o8v.s[14];
				return field.startsWith('data-attr');
			});
		}

		/**
   * Returns the media content extension when available.
   *
   * @returns string Extension of media. For example, if the media
   * source is "image.png" the extension is "png".
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'getExtension',
		value: function getExtension() {
			++cov_186h6t7o8v.f[5];
			++cov_186h6t7o8v.s[15];

			return this.__info.extension;
		}

		/**
   * Returns the media content mime type when available.
   *
   * @returns string Media mime type. For example, if the media
   * source is "image.png" the mime type is "image/png".
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'getMimeType',
		value: function getMimeType() {
			++cov_186h6t7o8v.f[6];
			++cov_186h6t7o8v.s[16];

			return this.__info.mimeType;
		}

		/**
   * Check for existence of a given attribute.
   *
   * @param {string} attributeName Attribute identifier to be checked.
   * @returns Boolean true if attribute exists, false otherwise.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'hasAttribute',
		value: function hasAttribute(attributeName) {
			++cov_186h6t7o8v.f[7];
			++cov_186h6t7o8v.s[17];

			return attributeName in this.__info;
		}

		/**
   * Return the data-type attribute value.
   *
   * @returns string data-type attribute value.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'getType',
		value: function getType() {
			++cov_186h6t7o8v.f[8];
			++cov_186h6t7o8v.s[18];

			return this.__info['data-type'];
		}
	}, {
		key: 'clearContents',
		value: function clearContents() {
			++cov_186h6t7o8v.f[9];
			++cov_186h6t7o8v.s[19];

			while (this.hookedFns.hasChildNodes()) {
				++cov_186h6t7o8v.s[20];

				this.hookedFns.removeChild(this.hookedFns.getLastChild());
			}

			++cov_186h6t7o8v.s[21];
			debug('All media contents cleared.');
		}

		/**
   * Replace the contents of the container, associated to the object,
   * by the given nodes. All previous contents of the container are
   * erased.
   *
   * @param {HTMLElement[]} nodes List of HTMLElement nodes.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'replaceContents',
		value: function replaceContents(nodes) {
			var _this = this;

			++cov_186h6t7o8v.f[10];
			++cov_186h6t7o8v.s[22];

			// Cleanup element
			// this.rootElement.innerHTML = '';
			this.clearContents();

			// Add nodes to rootElement
			// nodes.forEach(node => this.rootElement.appendChild(node));
			++cov_186h6t7o8v.s[23];
			nodes.forEach(function (node) {
				++cov_186h6t7o8v.f[11];
				++cov_186h6t7o8v.s[24];
				return _this.hookedFns.appendChild(node);
			});
			++cov_186h6t7o8v.s[25];
			debug('Media contents replaced.');
		}

		/**
   * Sets all data-attr-* to * on the given element. For example,
   * given a media-tag with data-attr-width="200px", this function
   * will set element.setAttribute('width', '200px'). Notice that
   * the attribute set have the prefix 'data-attr-' removed.
   *
   * @param {HTMLElement} element Element that will have attributes set.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'utilsSetAllDataAttributes',
		value: function utilsSetAllDataAttributes(element) {
			var _this2 = this;

			++cov_186h6t7o8v.f[12];
			++cov_186h6t7o8v.s[26];

			debug('Setting data attributes.');
			var dataAttributes = (++cov_186h6t7o8v.s[27], this.getAllDataAttrKeys());
			++cov_186h6t7o8v.s[28];
			dataAttributes.forEach(function (dataAttr) {
				++cov_186h6t7o8v.f[13];
				++cov_186h6t7o8v.s[29];
				return element.setAttribute(dataAttr.substr(10), _this2.getAttribute(dataAttr));
			});
		}

		/**
   * Pass to the given element all data-attr-* attributes. For
   * example, given a media-tag with data-attr-width="200px", this
   * function will set element.setAttribute('data-attr-width','200px').
   * Notice that the attribute set has still the prefix 'data-attr-'.
   *
   * @param {HTMLElement} element Element that will have attributes set.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'utilsPassAllDataAttributes',
		value: function utilsPassAllDataAttributes(element) {
			var _this3 = this;

			++cov_186h6t7o8v.f[14];
			++cov_186h6t7o8v.s[30];

			debug('Passing data attributes.');
			var dataAttributes = (++cov_186h6t7o8v.s[31], this.getAllDataAttrKeys());
			++cov_186h6t7o8v.s[32];
			dataAttributes.forEach(function (dataAttr) {
				++cov_186h6t7o8v.f[15];
				++cov_186h6t7o8v.s[33];
				return element.setAttribute(dataAttr, _this3.getAttribute(dataAttr));
			});
		}
	}]);

	return MediaObject;
}();

exports.default = MediaObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL21lZGlhLW9iamVjdC5qcyJdLCJuYW1lcyI6WyJkZWJ1ZyIsIk1lZGlhT2JqZWN0Iiwib3B0aW9ucyIsInJvb3RFbGVtZW50IiwiX19pbmZvIiwiaG9va2VkRm5zIiwiaGFzQ2hpbGROb2RlcyIsImJpbmQiLCJyZW1vdmVDaGlsZCIsImdldExhc3RDaGlsZCIsImxhc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiY29udGVudFR5cGVJZCIsImZpbmRUeXBlIiwiVHlwZU5vdEZvdW5kIiwiY29udGVudFR5cGUiLCJnZXRQbHVnaW4iLCJzdGFydHVwIiwiYXR0ck5hbWUiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwic3RhcnRzV2l0aCIsImV4dGVuc2lvbiIsIm1pbWVUeXBlIiwiYXR0cmlidXRlTmFtZSIsIm5vZGVzIiwiY2xlYXJDb250ZW50cyIsImZvckVhY2giLCJub2RlIiwiZWxlbWVudCIsImRhdGFBdHRyaWJ1dGVzIiwiZ2V0QWxsRGF0YUF0dHJLZXlzIiwic2V0QXR0cmlidXRlIiwiZGF0YUF0dHIiLCJzdWJzdHIiLCJnZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0NBQVEscUJBQWEsZ0JBQWIsQ0FBUixDQUFOOztBQUVBOzs7Ozs7Ozs7SUFRTUMsVzs7QUFFTDs7Ozs7OztBQU9BLHNCQUFZQyxPQUFaLEVBQXFCQyxXQUFyQixFQUFrQztBQUFBOztBQUFBO0FBQUE7O0FBQ2pDO0FBQ0E7OztBQUdBLE9BQUtDLE1BQUwsR0FBY0YsT0FBZDtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQWJpQztBQWNqQyxPQUFLRyxTQUFMLEdBQWlCO0FBQ2hCQyxrQkFBZUgsWUFBWUcsYUFBWixDQUEwQkMsSUFBMUIsQ0FBK0JKLFdBQS9CLENBREM7QUFFaEJLLGdCQUFhTCxZQUFZSyxXQUFaLENBQXdCRCxJQUF4QixDQUE2QkosV0FBN0IsQ0FGRztBQUdoQk0saUJBQWMsd0JBQU07QUFBQTtBQUFBO0FBQUEsdUJBQVlDLFNBQVo7QUFBcUIsSUFIekI7QUFJaEJDLGdCQUFhUixZQUFZUSxXQUFaLENBQXdCSixJQUF4QixDQUE2QkosV0FBN0I7QUFKRyxHQUFqQjs7QUFkaUM7QUFxQmpDSDtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUF6QmlDO0FBNkJqQyxPQUFLWSxhQUFMLEdBQXFCLGlCQUFPQyxRQUFQLENBQWdCLElBQWhCLENBQXJCO0FBN0JpQztBQThCakMsTUFBSSxDQUFDLEtBQUtELGFBQVYsRUFBeUI7QUFBQTtBQUFBOztBQUN4QixTQUFNLElBQUksaUJBQU9FLFlBQVgsQ0FBd0IsSUFBeEIsQ0FBTjtBQUNBLEdBRkQ7QUFBQTtBQUFBO0FBOUJpQztBQWlDakNkLDhCQUEwQixLQUFLWSxhQUEvQjs7QUFFQTtBQUNBLE1BQU1HLHNDQUFjLGlCQUFPQyxTQUFQLENBQWlCLEtBQUtKLGFBQXRCLENBQWQsQ0FBTjtBQXBDaUM7QUFxQ2pDRyxjQUFZRSxPQUFaLENBQW9CLElBQXBCO0FBckNpQztBQXNDakNqQjtBQUNBOztBQUVEOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OzsrQkFRYWtCLFEsRUFBVTtBQUFBO0FBQUE7O0FBQ3RCLFVBQU8sS0FBS2QsTUFBTCxDQUFZYyxRQUFaLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7dUNBUXFCO0FBQUE7QUFBQTs7QUFDcEIsVUFBT0MsT0FBT0MsSUFBUCxDQUFZLEtBQUtoQixNQUFqQixFQUF5QmlCLE1BQXpCLENBQWdDLGlCQUFTO0FBQUE7QUFBQTtBQUFBLGlCQUFNQyxVQUFOLENBQWlCLFdBQWpCO0FBQTZCLElBQXRFLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7aUNBUWU7QUFBQTtBQUFBOztBQUNkLFVBQU8sS0FBS2xCLE1BQUwsQ0FBWW1CLFNBQW5CO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7O2dDQVFjO0FBQUE7QUFBQTs7QUFDYixVQUFPLEtBQUtuQixNQUFMLENBQVlvQixRQUFuQjtBQUNBOztBQUVEOzs7Ozs7Ozs7OzsrQkFRYUMsYSxFQUFlO0FBQUE7QUFBQTs7QUFDM0IsVUFBT0EsaUJBQWlCLEtBQUtyQixNQUE3QjtBQUNBOztBQUVEOzs7Ozs7Ozs7OzRCQU9VO0FBQUE7QUFBQTs7QUFDVCxVQUFPLEtBQUtBLE1BQUwsQ0FBWSxXQUFaLENBQVA7QUFDQTs7O2tDQUVlO0FBQUE7QUFBQTs7QUFDZixVQUFPLEtBQUtDLFNBQUwsQ0FBZUMsYUFBZixFQUFQLEVBQXVDO0FBQUE7O0FBQ3RDLFNBQUtELFNBQUwsQ0FBZUcsV0FBZixDQUEyQixLQUFLSCxTQUFMLENBQWVJLFlBQWYsRUFBM0I7QUFDQTs7QUFIYztBQUtmVDtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7a0NBU2dCMEIsSyxFQUFPO0FBQUE7O0FBQUE7QUFBQTs7QUFDdEI7QUFDQTtBQUNBLFFBQUtDLGFBQUw7O0FBRUE7QUFDQTtBQU5zQjtBQU90QkQsU0FBTUUsT0FBTixDQUFjLGdCQUFRO0FBQUE7QUFBQTtBQUFBLGlCQUFLdkIsU0FBTCxDQUFlTSxXQUFmLENBQTJCa0IsSUFBM0I7QUFBZ0MsSUFBdEQ7QUFQc0I7QUFRdEI3QjtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7OzRDQVUwQjhCLE8sRUFBUztBQUFBOztBQUFBO0FBQUE7O0FBQ2xDOUI7QUFDQSxPQUFNK0IsMENBQWlCLEtBQUtDLGtCQUFMLEVBQWpCLENBQU47QUFGa0M7QUFHbENELGtCQUFlSCxPQUFmLENBQXVCLG9CQUFZO0FBQUE7QUFBQTtBQUFBLG1CQUFRSyxZQUFSLENBQXFCQyxTQUFTQyxNQUFULENBQWdCLEVBQWhCLENBQXJCLEVBQTBDLE9BQUtDLFlBQUwsQ0FBa0JGLFFBQWxCLENBQTFDO0FBQXNFLElBQXpHO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7NkNBVTJCSixPLEVBQVM7QUFBQTs7QUFBQTtBQUFBOztBQUNuQzlCO0FBQ0EsT0FBTStCLDBDQUFpQixLQUFLQyxrQkFBTCxFQUFqQixDQUFOO0FBRm1DO0FBR25DRCxrQkFBZUgsT0FBZixDQUF1QixvQkFBWTtBQUFBO0FBQUE7QUFBQSxtQkFBUUssWUFBUixDQUFxQkMsUUFBckIsRUFBK0IsT0FBS0UsWUFBTCxDQUFrQkYsUUFBbEIsQ0FBL0I7QUFBMkQsSUFBOUY7QUFDQTs7Ozs7O2tCQUlhakMsVyIsImZpbGUiOiJtZWRpYS1vYmplY3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZHJhZGVhdS9naXQvbWVkaWFfdGFnX3YyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlYnVnRmFjdG9yeSBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgRXJyb3JzIGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi9wbHVnaW4nO1xuXG5jb25zdCBkZWJ1ZyA9IGRlYnVnRmFjdG9yeSgnTVQ6TWVkaWFPYmplY3QnKTtcblxuLyoqXG4gKiBNZWRpYSBPYmplY3QgaXMgY3JlYXRlZCBmb3IgZWFjaCBtZWRpYS10YWcgYW5kIGNvbnRhaW5zIHRoZVxuICogaW5mb3JtYXRpb24gYWJvdXQgaXRzIGNvbnRlbnRzLiBJdCBhbHNvIGhhcyBoZWxwZXJzIGZ1bmN0aW9ucyB0aGF0XG4gKiBjYW4gYmUgdXNlZCBieSBwbHVnaW5zIHRvIGFkZCBmdW5jdGlvbmFsaXR5IHRvIG1lZGlhLXRhZy5cbiAqXG4gKiBAY2xhc3MgTWVkaWFPYmplY3RcbiAqIEBzaW5jZSAwLjIuMFxuICovXG5jbGFzcyBNZWRpYU9iamVjdCB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTWVkaWFPYmplY3QuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9iamVjdCB3aXRoIGF0dHJpYnV0ZXMgdGhhdCB3aWxsIHNwZWNpZnkgdGhlIGNvbnRlbnRzLlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290RWxlbWVudCBIVE1MRWxlbWVudCBET00gTm9kZSB0aGF0IGFjdHMgYXMgY29udGFpbmVyIHRvIHRoaXMgb2JqZWN0LlxuXHQgKlxuXHQgKiBAbWVtYmVyT2YgTWVkaWFPYmplY3Rcblx0ICovXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHJvb3RFbGVtZW50KSB7XG5cdFx0Ly8gVE9ETzogcGFyc2Ugc3JjIGludG8gdXJsIHBhcnRzIChwcm90b2NvbCwgZG9tYWluLCBleHRlbnNpb24sIGV0Yylcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JqZWN0fSBfX2luZm8gT2JqZWN0IHdpdGggYXR0cmlidXRlcyB0aGF0IHdpbGwgc3BlY2lmeSB0aGUgY29udGVudHMuXG5cdFx0ICovXG5cdFx0dGhpcy5fX2luZm8gPSBvcHRpb25zO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtIVE1MRWxlbWVudH0gcm9vdEVsZW1lbnQgSFRNTEVsZW1lbnQgRE9NIE5vZGUgdGhhdCBhY3RzIGFzXG5cdFx0ICogY29udGFpbmVyIHRvIHRoaXMgb2JqZWN0LlxuXHRcdCAqL1xuXHRcdC8vIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuXHRcdC8vIFRPRE86IHJldGhpbmsgYWJvdXQgd2hhdCBpcyB0aGUgYmVzdCwgZXhwbGljaXQgYmluZCBuZWVkZWRcblx0XHQvLyBmdW5jdGlvbnMgT1Igc2F2aW5nIHRoZSBub2RlXG5cdFx0dGhpcy5ob29rZWRGbnMgPSB7XG5cdFx0XHRoYXNDaGlsZE5vZGVzOiByb290RWxlbWVudC5oYXNDaGlsZE5vZGVzLmJpbmQocm9vdEVsZW1lbnQpLFxuXHRcdFx0cmVtb3ZlQ2hpbGQ6IHJvb3RFbGVtZW50LnJlbW92ZUNoaWxkLmJpbmQocm9vdEVsZW1lbnQpLFxuXHRcdFx0Z2V0TGFzdENoaWxkOiAoKSA9PiByb290RWxlbWVudC5sYXN0Q2hpbGQsXG5cdFx0XHRhcHBlbmRDaGlsZDogcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQuYmluZChyb290RWxlbWVudClcblx0XHR9O1xuXG5cdFx0ZGVidWcoYENyZWF0aW5nIG1lZGlhIG9iamVjdC5gKTtcblx0XHQvLyBjb25zb2xlLmxvZyh7b3B0aW9uc30pO1xuXHRcdC8vIElkZW50aWZ5IHR5cGVcblxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9IGNvbnRlbnRUeXBlSWQgcGx1Z2luIGlkZW50aWZpZXIgdGhhdCBtYXRjaGVzXG5cdFx0ICogdHlwZUNoZWNrIHdpdGggdGhpcyBtZWRpYVxuXHRcdCAqL1xuXHRcdHRoaXMuY29udGVudFR5cGVJZCA9IFBsdWdpbi5maW5kVHlwZSh0aGlzKTtcblx0XHRpZiAoIXRoaXMuY29udGVudFR5cGVJZCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9ycy5UeXBlTm90Rm91bmQodGhpcyk7XG5cdFx0fVxuXHRcdGRlYnVnKGBGb3VuZCBtZWRpYSB0eXBlICR7dGhpcy5jb250ZW50VHlwZUlkfS5gKTtcblxuXHRcdC8vIFN0YXJ0dXBcblx0XHRjb25zdCBjb250ZW50VHlwZSA9IFBsdWdpbi5nZXRQbHVnaW4odGhpcy5jb250ZW50VHlwZUlkKTtcblx0XHRjb250ZW50VHlwZS5zdGFydHVwKHRoaXMpO1xuXHRcdGRlYnVnKGBTdGFydGluZyBtZWRpYWApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGFzc29jaWF0ZWQgSFRNTEVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm5zIEhUTUxFbGVtZW50IHJvb3RFbGVtZW50IEhUTUxFbGVtZW50IERPTSBOb2RlIHRoYXQgYWN0cyBhcyBjb250YWluZXIgdG8gdGhpcyBvYmplY3QuXG5cdCAqXG5cdCAqIEBtZW1iZXJPZiBNZWRpYU9iamVjdFxuXHQgKi9cblx0Ly8gZ2V0Um9vdEVsZW1lbnQoKSB7XG5cdC8vIFx0cmV0dXJuIHRoaXMucm9vdEVsZW1lbnQ7XG5cdC8vIH1cblxuXHQvLyBUT0RPOiBkZWZpbmUgd2hhdCB3aWxsIGJlIGRpcmVjdCBtZXRob2QgYW5kIHdoYXQgd2lsbCBiZSBieSBnZXRBdHRyaWJ1dGVcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgZ2l2ZW4gYXR0cmlidXRlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXR0ck5hbWUgQXR0cmlidXRlIGlkZW50aWZpZXIuXG5cdCAqIEByZXR1cm5zIGFueSB0aGUgY29udGVudHMgb2YgdGhlIGF0dHJpYnV0ZS5cblx0ICpcblx0ICogQG1lbWJlck9mIE1lZGlhT2JqZWN0XG5cdCAqL1xuXHRnZXRBdHRyaWJ1dGUoYXR0ck5hbWUpIHtcblx0XHRyZXR1cm4gdGhpcy5fX2luZm9bYXR0ck5hbWVdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYWxsIHRoZSBhdHRyaWJ1dGUgaWRlbnRpZmllcnMgdGhhdCBzdGFydHMgd2l0aCAnZGF0YS1hdHRyJy5cblx0ICogVGhlc2UgYXR0cmlidXRlcyBhcmUgbm9ybWFsbHkgcGFzc2VkIGRvd24gdG8gdGhlIGZpbmFsIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHN0cmluZ1tdIExpc3Qgb2YgYXR0cmlidXRlIGlkZW50aWZpZXJzLlxuXHQgKlxuXHQgKiBAbWVtYmVyT2YgTWVkaWFPYmplY3Rcblx0ICovXG5cdGdldEFsbERhdGFBdHRyS2V5cygpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fX2luZm8pLmZpbHRlcihmaWVsZCA9PiBmaWVsZC5zdGFydHNXaXRoKCdkYXRhLWF0dHInKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgbWVkaWEgY29udGVudCBleHRlbnNpb24gd2hlbiBhdmFpbGFibGUuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHN0cmluZyBFeHRlbnNpb24gb2YgbWVkaWEuIEZvciBleGFtcGxlLCBpZiB0aGUgbWVkaWFcblx0ICogc291cmNlIGlzIFwiaW1hZ2UucG5nXCIgdGhlIGV4dGVuc2lvbiBpcyBcInBuZ1wiLlxuXHQgKlxuXHQgKiBAbWVtYmVyT2YgTWVkaWFPYmplY3Rcblx0ICovXG5cdGdldEV4dGVuc2lvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fX2luZm8uZXh0ZW5zaW9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG1lZGlhIGNvbnRlbnQgbWltZSB0eXBlIHdoZW4gYXZhaWxhYmxlLlxuXHQgKlxuXHQgKiBAcmV0dXJucyBzdHJpbmcgTWVkaWEgbWltZSB0eXBlLiBGb3IgZXhhbXBsZSwgaWYgdGhlIG1lZGlhXG5cdCAqIHNvdXJjZSBpcyBcImltYWdlLnBuZ1wiIHRoZSBtaW1lIHR5cGUgaXMgXCJpbWFnZS9wbmdcIi5cblx0ICpcblx0ICogQG1lbWJlck9mIE1lZGlhT2JqZWN0XG5cdCAqL1xuXHRnZXRNaW1lVHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fX2luZm8ubWltZVR5cGU7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2sgZm9yIGV4aXN0ZW5jZSBvZiBhIGdpdmVuIGF0dHJpYnV0ZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgQXR0cmlidXRlIGlkZW50aWZpZXIgdG8gYmUgY2hlY2tlZC5cblx0ICogQHJldHVybnMgQm9vbGVhbiB0cnVlIGlmIGF0dHJpYnV0ZSBleGlzdHMsIGZhbHNlIG90aGVyd2lzZS5cblx0ICpcblx0ICogQG1lbWJlck9mIE1lZGlhT2JqZWN0XG5cdCAqL1xuXHRoYXNBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkge1xuXHRcdHJldHVybiBhdHRyaWJ1dGVOYW1lIGluIHRoaXMuX19pbmZvO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgZGF0YS10eXBlIGF0dHJpYnV0ZSB2YWx1ZS5cblx0ICpcblx0ICogQHJldHVybnMgc3RyaW5nIGRhdGEtdHlwZSBhdHRyaWJ1dGUgdmFsdWUuXG5cdCAqXG5cdCAqIEBtZW1iZXJPZiBNZWRpYU9iamVjdFxuXHQgKi9cblx0Z2V0VHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fX2luZm9bJ2RhdGEtdHlwZSddO1xuXHR9XG5cblx0Y2xlYXJDb250ZW50cygpIHtcblx0XHR3aGlsZSAodGhpcy5ob29rZWRGbnMuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHR0aGlzLmhvb2tlZEZucy5yZW1vdmVDaGlsZCh0aGlzLmhvb2tlZEZucy5nZXRMYXN0Q2hpbGQoKSk7XG5cdFx0fVxuXG5cdFx0ZGVidWcoYEFsbCBtZWRpYSBjb250ZW50cyBjbGVhcmVkLmApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBjb250YWluZXIsIGFzc29jaWF0ZWQgdG8gdGhlIG9iamVjdCxcblx0ICogYnkgdGhlIGdpdmVuIG5vZGVzLiBBbGwgcHJldmlvdXMgY29udGVudHMgb2YgdGhlIGNvbnRhaW5lciBhcmVcblx0ICogZXJhc2VkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50W119IG5vZGVzIExpc3Qgb2YgSFRNTEVsZW1lbnQgbm9kZXMuXG5cdCAqXG5cdCAqIEBtZW1iZXJPZiBNZWRpYU9iamVjdFxuXHQgKi9cblx0cmVwbGFjZUNvbnRlbnRzKG5vZGVzKSB7XG5cdFx0Ly8gQ2xlYW51cCBlbGVtZW50XG5cdFx0Ly8gdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSAnJztcblx0XHR0aGlzLmNsZWFyQ29udGVudHMoKTtcblxuXHRcdC8vIEFkZCBub2RlcyB0byByb290RWxlbWVudFxuXHRcdC8vIG5vZGVzLmZvckVhY2gobm9kZSA9PiB0aGlzLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpKTtcblx0XHRub2Rlcy5mb3JFYWNoKG5vZGUgPT4gdGhpcy5ob29rZWRGbnMuYXBwZW5kQ2hpbGQobm9kZSkpO1xuXHRcdGRlYnVnKGBNZWRpYSBjb250ZW50cyByZXBsYWNlZC5gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIGFsbCBkYXRhLWF0dHItKiB0byAqIG9uIHRoZSBnaXZlbiBlbGVtZW50LiBGb3IgZXhhbXBsZSxcblx0ICogZ2l2ZW4gYSBtZWRpYS10YWcgd2l0aCBkYXRhLWF0dHItd2lkdGg9XCIyMDBweFwiLCB0aGlzIGZ1bmN0aW9uXG5cdCAqIHdpbGwgc2V0IGVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcyMDBweCcpLiBOb3RpY2UgdGhhdFxuXHQgKiB0aGUgYXR0cmlidXRlIHNldCBoYXZlIHRoZSBwcmVmaXggJ2RhdGEtYXR0ci0nIHJlbW92ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHdpbGwgaGF2ZSBhdHRyaWJ1dGVzIHNldC5cblx0ICpcblx0ICogQG1lbWJlck9mIE1lZGlhT2JqZWN0XG5cdCAqL1xuXHR1dGlsc1NldEFsbERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcblx0XHRkZWJ1ZyhgU2V0dGluZyBkYXRhIGF0dHJpYnV0ZXMuYCk7XG5cdFx0Y29uc3QgZGF0YUF0dHJpYnV0ZXMgPSB0aGlzLmdldEFsbERhdGFBdHRyS2V5cygpO1xuXHRcdGRhdGFBdHRyaWJ1dGVzLmZvckVhY2goZGF0YUF0dHIgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoZGF0YUF0dHIuc3Vic3RyKDEwKSwgdGhpcy5nZXRBdHRyaWJ1dGUoZGF0YUF0dHIpKSk7XG5cdH1cblxuXHQvKipcblx0ICogUGFzcyB0byB0aGUgZ2l2ZW4gZWxlbWVudCBhbGwgZGF0YS1hdHRyLSogYXR0cmlidXRlcy4gRm9yXG5cdCAqIGV4YW1wbGUsIGdpdmVuIGEgbWVkaWEtdGFnIHdpdGggZGF0YS1hdHRyLXdpZHRoPVwiMjAwcHhcIiwgdGhpc1xuXHQgKiBmdW5jdGlvbiB3aWxsIHNldCBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1hdHRyLXdpZHRoJywnMjAwcHgnKS5cblx0ICogTm90aWNlIHRoYXQgdGhlIGF0dHJpYnV0ZSBzZXQgaGFzIHN0aWxsIHRoZSBwcmVmaXggJ2RhdGEtYXR0ci0nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCB3aWxsIGhhdmUgYXR0cmlidXRlcyBzZXQuXG5cdCAqXG5cdCAqIEBtZW1iZXJPZiBNZWRpYU9iamVjdFxuXHQgKi9cblx0dXRpbHNQYXNzQWxsRGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuXHRcdGRlYnVnKGBQYXNzaW5nIGRhdGEgYXR0cmlidXRlcy5gKTtcblx0XHRjb25zdCBkYXRhQXR0cmlidXRlcyA9IHRoaXMuZ2V0QWxsRGF0YUF0dHJLZXlzKCk7XG5cdFx0ZGF0YUF0dHJpYnV0ZXMuZm9yRWFjaChkYXRhQXR0ciA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShkYXRhQXR0ciwgdGhpcy5nZXRBdHRyaWJ1dGUoZGF0YUF0dHIpKSk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYU9iamVjdDtcbiJdfQ==

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_175o0ttq40 = function () {
  var path = '/home/dradeau/git/media_tag_v2/src/core/media-tag.js',
      hash = '0a15ba3face8fd8eb488c6f06eb76e6fdf58487b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/home/dradeau/git/media_tag_v2/src/core/media-tag.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 5,
          column: 20
        }
      },
      '1': {
        start: {
          line: 6,
          column: 1
        },
        end: {
          line: 11,
          column: 2
        }
      },
      '2': {
        start: {
          line: 7,
          column: 16
        },
        end: {
          line: 7,
          column: 34
        }
      },
      '3': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      '4': {
        start: {
          line: 9,
          column: 3
        },
        end: {
          line: 9,
          column: 44
        }
      },
      '5': {
        start: {
          line: 12,
          column: 1
        },
        end: {
          line: 12,
          column: 17
        }
      },
      '6': {
        start: {
          line: 24,
          column: 1
        },
        end: {
          line: 26,
          column: 2
        }
      },
      '7': {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 26
        }
      },
      '8': {
        start: {
          line: 29,
          column: 1
        },
        end: {
          line: 29,
          column: 69
        }
      },
      '9': {
        start: {
          line: 30,
          column: 1
        },
        end: {
          line: 30,
          column: 25
        }
      },
      '10': {
        start: {
          line: 39,
          column: 0
        },
        end: {
          line: 39,
          column: 48
        }
      }
    },
    fnMap: {
      '0': {
        name: 'getAttributesObject',
        decl: {
          start: {
            line: 4,
            column: 9
          },
          end: {
            line: 4,
            column: 28
          }
        },
        loc: {
          start: {
            line: 4,
            column: 38
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 4
      },
      '1': {
        name: 'MediaTag',
        decl: {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 17
          }
        },
        loc: {
          start: {
            line: 22,
            column: 24
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 6,
            column: 1
          },
          end: {
            line: 11,
            column: 2
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 6,
            column: 1
          },
          end: {
            line: 11,
            column: 2
          }
        }, {
          start: {
            line: 6,
            column: 1
          },
          end: {
            line: 11,
            column: 2
          }
        }],
        line: 6
      },
      '1': {
        loc: {
          start: {
            line: 24,
            column: 1
          },
          end: {
            line: 26,
            column: 2
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 24,
            column: 1
          },
          end: {
            line: 26,
            column: 2
          }
        }, {
          start: {
            line: 24,
            column: 1
          },
          end: {
            line: 26,
            column: 2
          }
        }],
        line: 24
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mediaObject = __webpack_require__(53);

var _mediaObject2 = _interopRequireDefault(_mediaObject);

var _plugin = __webpack_require__(30);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAttributesObject(element) {
  ++cov_175o0ttq40.f[0];

  var attrsObj = (++cov_175o0ttq40.s[0], {});
  ++cov_175o0ttq40.s[1];
  if (element.hasAttributes()) {
    ++cov_175o0ttq40.b[0][0];

    var attrs = (++cov_175o0ttq40.s[2], element.attributes);
    ++cov_175o0ttq40.s[3];
    for (var i = attrs.length - 1; i >= 0; i--) {
      ++cov_175o0ttq40.s[4];

      attrsObj[attrs[i].name] = attrs[i].value;
    }
  } else {
    ++cov_175o0ttq40.b[0][1];
  }
  ++cov_175o0ttq40.s[5];
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
  ++cov_175o0ttq40.f[1];
  ++cov_175o0ttq40.s[6];

  // If this element has already a mediaObject just return it
  if (node.mediaObject) {
    ++cov_175o0ttq40.b[1][0];
    ++cov_175o0ttq40.s[7];

    return node.mediaObject;
  } else {
    ++cov_175o0ttq40.b[1][1];
  }

  // Otherwise we create a new mediaObject
  ++cov_175o0ttq40.s[8];
  node.mediaObject = new _mediaObject2.default(getAttributesObject(node), node);
  ++cov_175o0ttq40.s[9];
  return node.mediaObject;
}

/**
 * Register a new plugin.
 * @public
 * @memberOf MediaTag
 * @since 0.2.0
 */
++cov_175o0ttq40.s[10];
MediaTag.registerPlugin = _plugin2.default.registerPlugin;

exports.default = MediaTag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL21lZGlhLXRhZy5qcyJdLCJuYW1lcyI6WyJnZXRBdHRyaWJ1dGVzT2JqZWN0IiwiZWxlbWVudCIsImF0dHJzT2JqIiwiaGFzQXR0cmlidXRlcyIsImF0dHJzIiwiYXR0cmlidXRlcyIsImkiLCJsZW5ndGgiLCJuYW1lIiwidmFsdWUiLCJNZWRpYVRhZyIsIm5vZGUiLCJtZWRpYU9iamVjdCIsInJlZ2lzdGVyUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFBQTs7QUFDckMsTUFBTUMsbUNBQVcsRUFBWCxDQUFOO0FBRHFDO0FBRXJDLE1BQUlELFFBQVFFLGFBQVIsRUFBSixFQUE2QjtBQUFBOztBQUM1QixRQUFNQyxnQ0FBUUgsUUFBUUksVUFBaEIsQ0FBTjtBQUQ0QjtBQUU1QixTQUFLLElBQUlDLElBQUlGLE1BQU1HLE1BQU4sR0FBZSxDQUE1QixFQUErQkQsS0FBSyxDQUFwQyxFQUF1Q0EsR0FBdkMsRUFBNEM7QUFBQTs7QUFDM0NKLGVBQVNFLE1BQU1FLENBQU4sRUFBU0UsSUFBbEIsSUFBMEJKLE1BQU1FLENBQU4sRUFBU0csS0FBbkM7QUFDQTtBQUNELEdBTEQ7QUFBQTtBQUFBO0FBRnFDO0FBUXJDLFNBQU9QLFFBQVA7QUFDQTs7QUFFRDs7Ozs7OztBQU9BLFNBQVNRLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQUE7QUFBQTs7QUFDcEI7QUFDSCxNQUFJQSxLQUFLQyxXQUFULEVBQXNCO0FBQUE7QUFBQTs7QUFDckIsV0FBT0QsS0FBS0MsV0FBWjtBQUNBLEdBRkQ7QUFBQTtBQUFBOztBQUlHO0FBTm9CO0FBT3ZCRCxPQUFLQyxXQUFMLEdBQW1CLDBCQUFnQlosb0JBQW9CVyxJQUFwQixDQUFoQixFQUEyQ0EsSUFBM0MsQ0FBbkI7QUFQdUI7QUFRdkIsU0FBT0EsS0FBS0MsV0FBWjtBQUNBOztBQUVEOzs7Ozs7O0FBTUFGLFNBQVNHLGNBQVQsR0FBMEIsaUJBQU9BLGNBQWpDOztrQkFFZUgsUSIsImZpbGUiOiJtZWRpYS10YWcuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZHJhZGVhdS9naXQvbWVkaWFfdGFnX3YyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhT2JqZWN0IGZyb20gJy4vbWVkaWEtb2JqZWN0JztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi9wbHVnaW4nO1xuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVzT2JqZWN0KGVsZW1lbnQpIHtcblx0Y29uc3QgYXR0cnNPYmogPSB7fTtcblx0aWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlcygpKSB7XG5cdFx0Y29uc3QgYXR0cnMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XG5cdFx0Zm9yIChsZXQgaSA9IGF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRhdHRyc09ialthdHRyc1tpXS5uYW1lXSA9IGF0dHJzW2ldLnZhbHVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYXR0cnNPYmo7XG59XG5cbi8qKlxuICogQG1vZHVsZSBNZWRpYVRhZ1xuICogTWVkaWEgVGFnIENvcmVcbiAqIEBleGFtcGxlXG4gKiB2YXIgbWVkaWFUYWdPYmogPSBNZWRpYVRhZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXlNZWRpYVRhZycpKTtcbiAqIEBzaW5jZSAwLjIuMFxuICovXG5mdW5jdGlvbiBNZWRpYVRhZyhub2RlKSB7XG4gICAgLy8gSWYgdGhpcyBlbGVtZW50IGhhcyBhbHJlYWR5IGEgbWVkaWFPYmplY3QganVzdCByZXR1cm4gaXRcblx0aWYgKG5vZGUubWVkaWFPYmplY3QpIHtcblx0XHRyZXR1cm4gbm9kZS5tZWRpYU9iamVjdDtcblx0fVxuXG4gICAgLy8gT3RoZXJ3aXNlIHdlIGNyZWF0ZSBhIG5ldyBtZWRpYU9iamVjdFxuXHRub2RlLm1lZGlhT2JqZWN0ID0gbmV3IE1lZGlhT2JqZWN0KGdldEF0dHJpYnV0ZXNPYmplY3Qobm9kZSksIG5vZGUpO1xuXHRyZXR1cm4gbm9kZS5tZWRpYU9iamVjdDtcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBhIG5ldyBwbHVnaW4uXG4gKiBAcHVibGljXG4gKiBAbWVtYmVyT2YgTWVkaWFUYWdcbiAqIEBzaW5jZSAwLjIuMFxuICovXG5NZWRpYVRhZy5yZWdpc3RlclBsdWdpbiA9IFBsdWdpbi5yZWdpc3RlclBsdWdpbjtcblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFUYWc7XG4iXX0=

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var cov_2lotzzdp4z = function () {
	var path = '/home/dradeau/git/media_tag_v2/src/plugins/crypto/decrypt-file.js',
	    hash = '0ded235bd198dd14b74559db828c595a41fe3812',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/dradeau/git/media_tag_v2/src/plugins/crypto/decrypt-file.js',
		statementMap: {
			'0': {
				start: {
					line: 12,
					column: 1
				},
				end: {
					line: 14,
					column: 2
				}
			},
			'1': {
				start: {
					line: 13,
					column: 2
				},
				end: {
					line: 13,
					column: 80
				}
			},
			'2': {
				start: {
					line: 16,
					column: 11
				},
				end: {
					line: 16,
					column: 18
				}
			},
			'3': {
				start: {
					line: 17,
					column: 11
				},
				end: {
					line: 17,
					column: 35
				}
			},
			'4': {
				start: {
					line: 18,
					column: 1
				},
				end: {
					line: 20,
					column: 2
				}
			},
			'5': {
				start: {
					line: 19,
					column: 2
				},
				end: {
					line: 19,
					column: 25
				}
			},
			'6': {
				start: {
					line: 21,
					column: 1
				},
				end: {
					line: 21,
					column: 10
				}
			},
			'7': {
				start: {
					line: 37,
					column: 1
				},
				end: {
					line: 44,
					column: 2
				}
			},
			'8': {
				start: {
					line: 38,
					column: 2
				},
				end: {
					line: 38,
					column: 48
				}
			},
			'9': {
				start: {
					line: 39,
					column: 2
				},
				end: {
					line: 41,
					column: 3
				}
			},
			'10': {
				start: {
					line: 40,
					column: 3
				},
				end: {
					line: 40,
					column: 35
				}
			},
			'11': {
				start: {
					line: 43,
					column: 2
				},
				end: {
					line: 43,
					column: 37
				}
			},
			'12': {
				start: {
					line: 45,
					column: 1
				},
				end: {
					line: 45,
					column: 15
				}
			},
			'13': {
				start: {
					line: 63,
					column: 18
				},
				end: {
					line: 63,
					column: 32
				}
			},
			'14': {
				start: {
					line: 64,
					column: 17
				},
				end: {
					line: 64,
					column: 28
				}
			},
			'15': {
				start: {
					line: 66,
					column: 1
				},
				end: {
					line: 78,
					column: 2
				}
			},
			'16': {
				start: {
					line: 68,
					column: 3
				},
				end: {
					line: 70,
					column: 4
				}
			},
			'17': {
				start: {
					line: 69,
					column: 4
				},
				end: {
					line: 69,
					column: 40
				}
			},
			'18': {
				start: {
					line: 71,
					column: 15
				},
				end: {
					line: 71,
					column: 39
				}
			},
			'19': {
				start: {
					line: 72,
					column: 18
				},
				end: {
					line: 72,
					column: 43
				}
			},
			'20': {
				start: {
					line: 73,
					column: 20
				},
				end: {
					line: 73,
					column: 45
				}
			},
			'21': {
				start: {
					line: 74,
					column: 3
				},
				end: {
					line: 74,
					column: 41
				}
			},
			'22': {
				start: {
					line: 77,
					column: 3
				},
				end: {
					line: 77,
					column: 39
				}
			}
		},
		fnMap: {
			'0': {
				name: 'decodeBase64',
				decl: {
					start: {
						line: 11,
						column: 9
					},
					end: {
						line: 11,
						column: 21
					}
				},
				loc: {
					start: {
						line: 11,
						column: 25
					},
					end: {
						line: 22,
						column: 1
					}
				},
				line: 11
			},
			'1': {
				name: 'decrypt',
				decl: {
					start: {
						line: 35,
						column: 9
					},
					end: {
						line: 35,
						column: 16
					}
				},
				loc: {
					start: {
						line: 35,
						column: 34
					},
					end: {
						line: 46,
						column: 1
					}
				},
				line: 35
			},
			'2': {
				name: 'decryptFile',
				decl: {
					start: {
						line: 62,
						column: 9
					},
					end: {
						line: 62,
						column: 20
					}
				},
				loc: {
					start: {
						line: 62,
						column: 36
					},
					end: {
						line: 79,
						column: 1
					}
				},
				line: 62
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 12,
						column: 1
					},
					end: {
						line: 14,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 12,
						column: 1
					},
					end: {
						line: 14,
						column: 2
					}
				}, {
					start: {
						line: 12,
						column: 1
					},
					end: {
						line: 14,
						column: 2
					}
				}],
				line: 12
			},
			'1': {
				loc: {
					start: {
						line: 39,
						column: 2
					},
					end: {
						line: 41,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 39,
						column: 2
					},
					end: {
						line: 41,
						column: 3
					}
				}, {
					start: {
						line: 39,
						column: 2
					},
					end: {
						line: 41,
						column: 3
					}
				}],
				line: 39
			},
			'2': {
				loc: {
					start: {
						line: 66,
						column: 1
					},
					end: {
						line: 78,
						column: 2
					}
				},
				type: 'switch',
				locations: [{
					start: {
						line: 67,
						column: 2
					},
					end: {
						line: 75,
						column: 3
					}
				}, {
					start: {
						line: 76,
						column: 2
					},
					end: {
						line: 77,
						column: 39
					}
				}],
				line: 66
			},
			'3': {
				loc: {
					start: {
						line: 68,
						column: 3
					},
					end: {
						line: 70,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 68,
						column: 3
					},
					end: {
						line: 70,
						column: 4
					}
				}, {
					start: {
						line: 68,
						column: 3
					},
					end: {
						line: 70,
						column: 4
					}
				}],
				line: 68
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _errors = __webpack_require__(10);

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decodes a base64 encoded string into an ArrayBuffer.
 *
 * @param {string} s String that will be decoded
 * @returns ArrayBuffer with decoded string.
 * @since 0.2.0
 */
function decodeBase64(s) {
	++cov_2lotzzdp4z.f[0];
	++cov_2lotzzdp4z.s[0];

	if (typeof atob === 'undefined') {
		++cov_2lotzzdp4z.b[0][0];
		++cov_2lotzzdp4z.s[1];

		return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
	} else {
		++cov_2lotzzdp4z.b[0][1];
	}
	var i = void 0;
	var d = (++cov_2lotzzdp4z.s[2], atob(s));
	var b = (++cov_2lotzzdp4z.s[3], new Uint8Array(d.length));
	++cov_2lotzzdp4z.s[4];
	for (i = 0; i < d.length; i++) {
		++cov_2lotzzdp4z.s[5];

		b[i] = d.charCodeAt(i);
	}
	++cov_2lotzzdp4z.s[6];
	return b;
}

/**
 * Decrypts an ArrayBuffer (box) encrypted with a key and nonce, using
 * algorithm xsalsa20poly1305 from https://tweetnacl.js.org/
 * nacl library must be available globally.
 *
 * @param {ArrayBuffer} key Key that encoded box.
 * @param {ArrayBuffer} nonce Nonce that encoded box
 * @param {ArrayBuffer} box ArrayBuffer with encoded contents.
 * @returns ArrayBuffer Decoded contents.
 * @since 0.2.0
 */
/* global atob, nacl */
function decrypt(key, nonce, box) {
	++cov_2lotzzdp4z.f[1];

	var decBox = void 0;
	++cov_2lotzzdp4z.s[7];
	try {
		++cov_2lotzzdp4z.s[8];

		decBox = nacl.secretbox.open(box, nonce, key);
		++cov_2lotzzdp4z.s[9];
		if (decBox === false) {
			++cov_2lotzzdp4z.b[1][0];
			++cov_2lotzzdp4z.s[10];

			throw new _errors2.default.FailedCrypto();
		} else {
			++cov_2lotzzdp4z.b[1][1];
		}
	} catch (err) {
		++cov_2lotzzdp4z.s[11];

		throw new _errors2.default.FailedCrypto(err);
	}
	++cov_2lotzzdp4z.s[12];
	return decBox;
}

/**
 * Decrypt an ArrayBuffer given a key.
 *
 * @param {string} key key for decrypting contents.
 *                     Must have the format <algorithm>:<otherFields>.
 *                     For using the 'xsalsa20poly1305' algorithm the format is
 *                     'xsalsa20poly1305:<key>:<nonce>', for example
 *                     'xsalsa20poly1305:xxxxxxxxx:yyyyyyy' where key is
 *                     'xxxxxxxxx' and nounce is 'yyyyyyy'.
 * @param {ArrayBuffer} fileBlob Encrypted contents.
 * @returns ArrayBuffer with decrypted contents.
 * @memberof CryptoPlugin
 * @since 0.2.0
 */
function decryptFile(key, fileBlob) {
	++cov_2lotzzdp4z.f[2];

	var keyParts = (++cov_2lotzzdp4z.s[13], key.split(':'));
	var libType = (++cov_2lotzzdp4z.s[14], keyParts[0]);

	++cov_2lotzzdp4z.s[15];
	switch (libType) {
		case 'xsalsa20poly1305':
			++cov_2lotzzdp4z.b[2][0];
			{
				++cov_2lotzzdp4z.s[16];

				if (keyParts.length !== 3) {
					++cov_2lotzzdp4z.b[3][0];
					++cov_2lotzzdp4z.s[17];

					throw new _errors2.default.InvalidCryptoKey();
				} else {
					++cov_2lotzzdp4z.b[3][1];
				}
				var box = (++cov_2lotzzdp4z.s[18], new Uint8Array(fileBlob));
				var libKey = (++cov_2lotzzdp4z.s[19], decodeBase64(keyParts[1]));
				var libNonce = (++cov_2lotzzdp4z.s[20], decodeBase64(keyParts[2]));
				++cov_2lotzzdp4z.s[21];
				return decrypt(libKey, libNonce, box);
			}
		default:
			++cov_2lotzzdp4z.b[2][1];
			++cov_2lotzzdp4z.s[22];

			throw new _errors2.default.InvalidCryptoLib();
	}
}

exports.default = decryptFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2NyeXB0by9kZWNyeXB0LWZpbGUuanMiXSwibmFtZXMiOlsiZGVjb2RlQmFzZTY0IiwicyIsImF0b2IiLCJVaW50OEFycmF5IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJCdWZmZXIiLCJpIiwiZCIsImIiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiZGVjcnlwdCIsImtleSIsIm5vbmNlIiwiYm94IiwiZGVjQm94IiwibmFjbCIsInNlY3JldGJveCIsIm9wZW4iLCJGYWlsZWRDcnlwdG8iLCJlcnIiLCJkZWNyeXB0RmlsZSIsImZpbGVCbG9iIiwia2V5UGFydHMiLCJzcGxpdCIsImxpYlR5cGUiLCJJbnZhbGlkQ3J5cHRvS2V5IiwibGliS2V5IiwibGliTm9uY2UiLCJJbnZhbGlkQ3J5cHRvTGliIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTQSxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUFBO0FBQUE7O0FBQ3hCLEtBQUksT0FBT0MsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUFBO0FBQUE7O0FBQ2hDLFNBQU8sSUFBSUMsVUFBSixDQUFlQyxNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBSUMsTUFBSixDQUFXUCxDQUFYLEVBQWMsUUFBZCxDQUEzQixFQUFvRCxDQUFwRCxDQUFmLENBQVA7QUFDQSxFQUZEO0FBQUE7QUFBQTtBQUdBLEtBQUlRLFVBQUo7QUFDQSxLQUFNQyw0QkFBSVIsS0FBS0QsQ0FBTCxDQUFKLENBQU47QUFDQSxLQUFNVSw0QkFBSSxJQUFJUixVQUFKLENBQWVPLEVBQUVFLE1BQWpCLENBQUosQ0FBTjtBQU53QjtBQU94QixNQUFLSCxJQUFJLENBQVQsRUFBWUEsSUFBSUMsRUFBRUUsTUFBbEIsRUFBMEJILEdBQTFCLEVBQStCO0FBQUE7O0FBQzlCRSxJQUFFRixDQUFGLElBQU9DLEVBQUVHLFVBQUYsQ0FBYUosQ0FBYixDQUFQO0FBQ0E7QUFUdUI7QUFVeEIsUUFBT0UsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OztBQXZCQTtBQWtDQSxTQUFTRyxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsS0FBdEIsRUFBNkJDLEdBQTdCLEVBQWtDO0FBQUE7O0FBQ2pDLEtBQUlDLGVBQUo7QUFEaUM7QUFFakMsS0FBSTtBQUFBOztBQUNIQSxXQUFTQyxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0JKLEdBQXBCLEVBQXlCRCxLQUF6QixFQUFnQ0QsR0FBaEMsQ0FBVDtBQURHO0FBRUgsTUFBSUcsV0FBVyxLQUFmLEVBQXNCO0FBQUE7QUFBQTs7QUFDckIsU0FBTSxJQUFJLGlCQUFPSSxZQUFYLEVBQU47QUFDQSxHQUZEO0FBQUE7QUFBQTtBQUdBLEVBTEQsQ0FLRSxPQUFPQyxHQUFQLEVBQVk7QUFBQTs7QUFDYixRQUFNLElBQUksaUJBQU9ELFlBQVgsQ0FBd0JDLEdBQXhCLENBQU47QUFDQTtBQVRnQztBQVVqQyxRQUFPTCxNQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBY0EsU0FBU00sV0FBVCxDQUFxQlQsR0FBckIsRUFBMEJVLFFBQTFCLEVBQW9DO0FBQUE7O0FBQ25DLEtBQU1DLG9DQUFXWCxJQUFJWSxLQUFKLENBQVUsR0FBVixDQUFYLENBQU47QUFDQSxLQUFNQyxtQ0FBVUYsU0FBUyxDQUFULENBQVYsQ0FBTjs7QUFGbUM7QUFJbkMsU0FBUUUsT0FBUjtBQUNDLE9BQUssa0JBQUw7QUFBQTtBQUF5QjtBQUFBOztBQUN4QixRQUFJRixTQUFTZCxNQUFULEtBQW9CLENBQXhCLEVBQTJCO0FBQUE7QUFBQTs7QUFDMUIsV0FBTSxJQUFJLGlCQUFPaUIsZ0JBQVgsRUFBTjtBQUNBLEtBRkQ7QUFBQTtBQUFBO0FBR0EsUUFBTVosK0JBQU0sSUFBSWQsVUFBSixDQUFlc0IsUUFBZixDQUFOLENBQU47QUFDQSxRQUFNSyxrQ0FBUzlCLGFBQWEwQixTQUFTLENBQVQsQ0FBYixDQUFULENBQU47QUFDQSxRQUFNSyxvQ0FBVy9CLGFBQWEwQixTQUFTLENBQVQsQ0FBYixDQUFYLENBQU47QUFOd0I7QUFPeEIsV0FBT1osUUFBUWdCLE1BQVIsRUFBZ0JDLFFBQWhCLEVBQTBCZCxHQUExQixDQUFQO0FBQ0E7QUFDRDtBQUFBO0FBQUE7O0FBQ0MsU0FBTSxJQUFJLGlCQUFPZSxnQkFBWCxFQUFOO0FBWEY7QUFhQTs7a0JBRWNSLFciLCJmaWxlIjoiZGVjcnlwdC1maWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2RyYWRlYXUvZ2l0L21lZGlhX3RhZ192MiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBhdG9iLCBuYWNsICovXG5pbXBvcnQgRXJyb3JzIGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzJztcblxuLyoqXG4gKiBEZWNvZGVzIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIGludG8gYW4gQXJyYXlCdWZmZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHMgU3RyaW5nIHRoYXQgd2lsbCBiZSBkZWNvZGVkXG4gKiBAcmV0dXJucyBBcnJheUJ1ZmZlciB3aXRoIGRlY29kZWQgc3RyaW5nLlxuICogQHNpbmNlIDAuMi4wXG4gKi9cbmZ1bmN0aW9uIGRlY29kZUJhc2U2NChzKSB7XG5cdGlmICh0eXBlb2YgYXRvYiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobmV3IEJ1ZmZlcihzLCAnYmFzZTY0JyksIDApKTtcblx0fVxuXHRsZXQgaTtcblx0Y29uc3QgZCA9IGF0b2Iocyk7XG5cdGNvbnN0IGIgPSBuZXcgVWludDhBcnJheShkLmxlbmd0aCk7XG5cdGZvciAoaSA9IDA7IGkgPCBkLmxlbmd0aDsgaSsrKSB7XG5cdFx0YltpXSA9IGQuY2hhckNvZGVBdChpKTtcblx0fVxuXHRyZXR1cm4gYjtcbn1cblxuLyoqXG4gKiBEZWNyeXB0cyBhbiBBcnJheUJ1ZmZlciAoYm94KSBlbmNyeXB0ZWQgd2l0aCBhIGtleSBhbmQgbm9uY2UsIHVzaW5nXG4gKiBhbGdvcml0aG0geHNhbHNhMjBwb2x5MTMwNSBmcm9tIGh0dHBzOi8vdHdlZXRuYWNsLmpzLm9yZy9cbiAqIG5hY2wgbGlicmFyeSBtdXN0IGJlIGF2YWlsYWJsZSBnbG9iYWxseS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBrZXkgS2V5IHRoYXQgZW5jb2RlZCBib3guXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBub25jZSBOb25jZSB0aGF0IGVuY29kZWQgYm94XG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBib3ggQXJyYXlCdWZmZXIgd2l0aCBlbmNvZGVkIGNvbnRlbnRzLlxuICogQHJldHVybnMgQXJyYXlCdWZmZXIgRGVjb2RlZCBjb250ZW50cy5cbiAqIEBzaW5jZSAwLjIuMFxuICovXG5mdW5jdGlvbiBkZWNyeXB0KGtleSwgbm9uY2UsIGJveCkge1xuXHRsZXQgZGVjQm94O1xuXHR0cnkge1xuXHRcdGRlY0JveCA9IG5hY2wuc2VjcmV0Ym94Lm9wZW4oYm94LCBub25jZSwga2V5KTtcblx0XHRpZiAoZGVjQm94ID09PSBmYWxzZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9ycy5GYWlsZWRDcnlwdG8oKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHRocm93IG5ldyBFcnJvcnMuRmFpbGVkQ3J5cHRvKGVycik7XG5cdH1cblx0cmV0dXJuIGRlY0JveDtcbn1cblxuLyoqXG4gKiBEZWNyeXB0IGFuIEFycmF5QnVmZmVyIGdpdmVuIGEga2V5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkga2V5IGZvciBkZWNyeXB0aW5nIGNvbnRlbnRzLlxuICogICAgICAgICAgICAgICAgICAgICBNdXN0IGhhdmUgdGhlIGZvcm1hdCA8YWxnb3JpdGhtPjo8b3RoZXJGaWVsZHM+LlxuICogICAgICAgICAgICAgICAgICAgICBGb3IgdXNpbmcgdGhlICd4c2Fsc2EyMHBvbHkxMzA1JyBhbGdvcml0aG0gdGhlIGZvcm1hdCBpc1xuICogICAgICAgICAgICAgICAgICAgICAneHNhbHNhMjBwb2x5MTMwNTo8a2V5Pjo8bm9uY2U+JywgZm9yIGV4YW1wbGVcbiAqICAgICAgICAgICAgICAgICAgICAgJ3hzYWxzYTIwcG9seTEzMDU6eHh4eHh4eHh4Onl5eXl5eXknIHdoZXJlIGtleSBpc1xuICogICAgICAgICAgICAgICAgICAgICAneHh4eHh4eHh4JyBhbmQgbm91bmNlIGlzICd5eXl5eXl5Jy5cbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGZpbGVCbG9iIEVuY3J5cHRlZCBjb250ZW50cy5cbiAqIEByZXR1cm5zIEFycmF5QnVmZmVyIHdpdGggZGVjcnlwdGVkIGNvbnRlbnRzLlxuICogQG1lbWJlcm9mIENyeXB0b1BsdWdpblxuICogQHNpbmNlIDAuMi4wXG4gKi9cbmZ1bmN0aW9uIGRlY3J5cHRGaWxlKGtleSwgZmlsZUJsb2IpIHtcblx0Y29uc3Qga2V5UGFydHMgPSBrZXkuc3BsaXQoJzonKTtcblx0Y29uc3QgbGliVHlwZSA9IGtleVBhcnRzWzBdO1xuXG5cdHN3aXRjaCAobGliVHlwZSkge1xuXHRcdGNhc2UgJ3hzYWxzYTIwcG9seTEzMDUnOiB7XG5cdFx0XHRpZiAoa2V5UGFydHMubGVuZ3RoICE9PSAzKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcnMuSW52YWxpZENyeXB0b0tleSgpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgYm94ID0gbmV3IFVpbnQ4QXJyYXkoZmlsZUJsb2IpO1xuXHRcdFx0Y29uc3QgbGliS2V5ID0gZGVjb2RlQmFzZTY0KGtleVBhcnRzWzFdKTtcblx0XHRcdGNvbnN0IGxpYk5vbmNlID0gZGVjb2RlQmFzZTY0KGtleVBhcnRzWzJdKTtcblx0XHRcdHJldHVybiBkZWNyeXB0KGxpYktleSwgbGliTm9uY2UsIGJveCk7XG5cdFx0fVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3JzLkludmFsaWRDcnlwdG9MaWIoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWNyeXB0RmlsZTtcbiJdfQ==
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45).Buffer))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_gx0ipo6mz = function () {
	var path = '/home/dradeau/git/media_tag_v2/src/plugins/crypto/index.js',
	    hash = '40f628ef7f5e495859c8fb6e6a3b6b6f9a843cc8',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/dradeau/git/media_tag_v2/src/plugins/crypto/index.js',
		statementMap: {
			'0': {
				start: {
					line: 6,
					column: 14
				},
				end: {
					line: 6,
					column: 39
				}
			},
			'1': {
				start: {
					line: 9,
					column: 1
				},
				end: {
					line: 14,
					column: 23
				}
			},
			'2': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 12,
					column: 3
				}
			},
			'3': {
				start: {
					line: 11,
					column: 3
				},
				end: {
					line: 11,
					column: 33
				}
			},
			'4': {
				start: {
					line: 13,
					column: 2
				},
				end: {
					line: 13,
					column: 39
				}
			},
			'5': {
				start: {
					line: 14,
					column: 17
				},
				end: {
					line: 14,
					column: 21
				}
			},
			'6': {
				start: {
					line: 18,
					column: 1
				},
				end: {
					line: 18,
					column: 38
				}
			},
			'7': {
				start: {
					line: 21,
					column: 25
				},
				end: {
					line: 21,
					column: 50
				}
			},
			'8': {
				start: {
					line: 26,
					column: 1
				},
				end: {
					line: 33,
					column: 2
				}
			},
			'9': {
				start: {
					line: 28,
					column: 3
				},
				end: {
					line: 28,
					column: 18
				}
			},
			'10': {
				start: {
					line: 30,
					column: 3
				},
				end: {
					line: 30,
					column: 22
				}
			},
			'11': {
				start: {
					line: 32,
					column: 3
				},
				end: {
					line: 32,
					column: 15
				}
			},
			'12': {
				start: {
					line: 40,
					column: 21
				},
				end: {
					line: 86,
					column: 1
				}
			},
			'13': {
				start: {
					line: 55,
					column: 2
				},
				end: {
					line: 58,
					column: 79
				}
			},
			'14': {
				start: {
					line: 62,
					column: 14
				},
				end: {
					line: 62,
					column: 54
				}
			},
			'15': {
				start: {
					line: 63,
					column: 22
				},
				end: {
					line: 63,
					column: 63
				}
			},
			'16': {
				start: {
					line: 64,
					column: 24
				},
				end: {
					line: 64,
					column: 64
				}
			},
			'17': {
				start: {
					line: 67,
					column: 2
				},
				end: {
					line: 83,
					column: 5
				}
			},
			'18': {
				start: {
					line: 68,
					column: 27
				},
				end: {
					line: 68,
					column: 62
				}
			},
			'19': {
				start: {
					line: 69,
					column: 29
				},
				end: {
					line: 69,
					column: 88
				}
			},
			'20': {
				start: {
					line: 70,
					column: 28
				},
				end: {
					line: 70,
					column: 64
				}
			},
			'21': {
				start: {
					line: 72,
					column: 22
				},
				end: {
					line: 72,
					column: 57
				}
			},
			'22': {
				start: {
					line: 73,
					column: 3
				},
				end: {
					line: 73,
					column: 52
				}
			},
			'23': {
				start: {
					line: 74,
					column: 3
				},
				end: {
					line: 74,
					column: 53
				}
			},
			'24': {
				start: {
					line: 75,
					column: 3
				},
				end: {
					line: 75,
					column: 51
				}
			},
			'25': {
				start: {
					line: 77,
					column: 3
				},
				end: {
					line: 77,
					column: 40
				}
			},
			'26': {
				start: {
					line: 78,
					column: 3
				},
				end: {
					line: 78,
					column: 24
				}
			},
			'27': {
				start: {
					line: 79,
					column: 3
				},
				end: {
					line: 79,
					column: 33
				}
			},
			'28': {
				start: {
					line: 81,
					column: 3
				},
				end: {
					line: 81,
					column: 42
				}
			},
			'29': {
				start: {
					line: 82,
					column: 3
				},
				end: {
					line: 82,
					column: 31
				}
			}
		},
		fnMap: {
			'0': {
				name: 'getBlobFromUrl',
				decl: {
					start: {
						line: 8,
						column: 9
					},
					end: {
						line: 8,
						column: 23
					}
				},
				loc: {
					start: {
						line: 8,
						column: 33
					},
					end: {
						line: 15,
						column: 1
					}
				},
				line: 8
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 9,
						column: 28
					},
					end: {
						line: 9,
						column: 29
					}
				},
				loc: {
					start: {
						line: 9,
						column: 40
					},
					end: {
						line: 14,
						column: 2
					}
				},
				line: 9
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 14,
						column: 9
					},
					end: {
						line: 14,
						column: 10
					}
				},
				loc: {
					start: {
						line: 14,
						column: 17
					},
					end: {
						line: 14,
						column: 21
					}
				},
				line: 14
			},
			'3': {
				name: 'createUrlFromBlob',
				decl: {
					start: {
						line: 17,
						column: 9
					},
					end: {
						line: 17,
						column: 26
					}
				},
				loc: {
					start: {
						line: 17,
						column: 37
					},
					end: {
						line: 19,
						column: 1
					}
				},
				line: 17
			},
			'4': {
				name: 'type2Mime',
				decl: {
					start: {
						line: 25,
						column: 9
					},
					end: {
						line: 25,
						column: 18
					}
				},
				loc: {
					start: {
						line: 25,
						column: 28
					},
					end: {
						line: 34,
						column: 1
					}
				},
				line: 25
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 54,
						column: 12
					},
					end: {
						line: 54,
						column: 13
					}
				},
				loc: {
					start: {
						line: 54,
						column: 24
					},
					end: {
						line: 59,
						column: 2
					}
				},
				line: 54
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 61,
						column: 10
					},
					end: {
						line: 61,
						column: 11
					}
				},
				loc: {
					start: {
						line: 61,
						column: 22
					},
					end: {
						line: 84,
						column: 2
					}
				},
				line: 61
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 67,
						column: 37
					},
					end: {
						line: 67,
						column: 38
					}
				},
				loc: {
					start: {
						line: 67,
						column: 58
					},
					end: {
						line: 83,
						column: 3
					}
				},
				line: 67
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 10,
						column: 2
					},
					end: {
						line: 12,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 10,
						column: 2
					},
					end: {
						line: 12,
						column: 3
					}
				}, {
					start: {
						line: 10,
						column: 2
					},
					end: {
						line: 12,
						column: 3
					}
				}],
				line: 10
			},
			'1': {
				loc: {
					start: {
						line: 26,
						column: 1
					},
					end: {
						line: 33,
						column: 2
					}
				},
				type: 'switch',
				locations: [{
					start: {
						line: 27,
						column: 2
					},
					end: {
						line: 28,
						column: 18
					}
				}, {
					start: {
						line: 29,
						column: 2
					},
					end: {
						line: 30,
						column: 22
					}
				}, {
					start: {
						line: 31,
						column: 2
					},
					end: {
						line: 32,
						column: 15
					}
				}],
				line: 26
			},
			'2': {
				loc: {
					start: {
						line: 55,
						column: 9
					},
					end: {
						line: 58,
						column: 78
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 55,
						column: 9
					},
					end: {
						line: 55,
						column: 49
					}
				}, {
					start: {
						line: 56,
						column: 4
					},
					end: {
						line: 56,
						column: 45
					}
				}, {
					start: {
						line: 57,
						column: 4
					},
					end: {
						line: 57,
						column: 44
					}
				}, {
					start: {
						line: 58,
						column: 4
					},
					end: {
						line: 58,
						column: 78
					}
				}],
				line: 55
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0, 0],
			'2': [0, 0, 0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _debug = __webpack_require__(22);

var _debug2 = _interopRequireDefault(_debug);

var _errors = __webpack_require__(10);

var _errors2 = _interopRequireDefault(_errors);

var _decryptFile = __webpack_require__(55);

var _decryptFile2 = _interopRequireDefault(_decryptFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (++cov_gx0ipo6mz.s[0], (0, _debug2.default)('MT:Crypto')); /* global document, mediaTag, URL, fetch, Blob */


function getBlobFromUrl(fileURL) {
	++cov_gx0ipo6mz.f[0];
	++cov_gx0ipo6mz.s[1];

	return fetch(fileURL).then(function (response) {
		++cov_gx0ipo6mz.f[1];
		++cov_gx0ipo6mz.s[2];

		if (response.ok) {
			++cov_gx0ipo6mz.b[0][0];
			++cov_gx0ipo6mz.s[3];

			return response.arrayBuffer();
		} else {
			++cov_gx0ipo6mz.b[0][1];
		}
		++cov_gx0ipo6mz.s[4];
		throw new _errors2.default.FetchFail(response);
	}).then(function (blob) {
		++cov_gx0ipo6mz.f[2];
		++cov_gx0ipo6mz.s[5];
		return blob;
	});
}

function createUrlFromBlob(fileBlob) {
	++cov_gx0ipo6mz.f[3];
	++cov_gx0ipo6mz.s[6];

	return URL.createObjectURL(fileBlob);
}

var validCryptoTypes = (++cov_gx0ipo6mz.s[7], ['image', 'video', 'pdf']);

// TODO: maybe this should be avoided and the type (data-crypto-type)
// should be mimetype
function type2Mime(typeStr) {
	++cov_gx0ipo6mz.f[4];
	++cov_gx0ipo6mz.s[8];

	switch (typeStr) {
		case 'image':
			++cov_gx0ipo6mz.b[1][0];
			++cov_gx0ipo6mz.s[9];

			return 'image';
		case 'video':
			++cov_gx0ipo6mz.b[1][1];
			++cov_gx0ipo6mz.s[10];

			return 'video/mp4';
		default:
			++cov_gx0ipo6mz.b[1][2];
			++cov_gx0ipo6mz.s[11];

			return null;
	}
}

/**
 * @module CryptoPlugin
 * @since 0.2.0
 */
var CryptoPlugin = (++cov_gx0ipo6mz.s[12], {
	/**
  * Identifies the plugin.
  */
	identifier: 'crypto',

	/**
  * Check if the media tag instance is a Crypto type
  * The element should have at least three attributes:
  *   - *data-crypto-type*: which is the file type associated to the decrypted file, check CryptoPlugin.validCryptoTypes for valid values
  *   - *data-crypto-src*: encrypted file URL
  *   - *data-crypto-key*: key to decrypt the file
  * @param {MediaObject} mediaObj
  */
	typeCheck: function typeCheck(mediaObj) {
		++cov_gx0ipo6mz.f[5];
		++cov_gx0ipo6mz.s[13];

		return (++cov_gx0ipo6mz.b[2][0], mediaObj.hasAttribute('data-crypto-key')) && (++cov_gx0ipo6mz.b[2][1], mediaObj.hasAttribute('data-crypto-type')) && (++cov_gx0ipo6mz.b[2][2], mediaObj.hasAttribute('data-crypto-src')) && (++cov_gx0ipo6mz.b[2][3], validCryptoTypes.indexOf(mediaObj.getAttribute('data-crypto-type')) !== -1);
	},

	startup: function startup(mediaObj) {
		++cov_gx0ipo6mz.f[6];

		var key = (++cov_gx0ipo6mz.s[14], mediaObj.getAttribute('data-crypto-key'));
		var elementType = (++cov_gx0ipo6mz.s[15], mediaObj.getAttribute('data-crypto-type'));
		var elementSource = (++cov_gx0ipo6mz.s[16], mediaObj.getAttribute('data-crypto-src'));

		// TODO: handle failure
		++cov_gx0ipo6mz.s[17];
		getBlobFromUrl(elementSource).then(function (fileEncryptedBlob) {
			++cov_gx0ipo6mz.f[7];

			var fileArrayBuffer = (++cov_gx0ipo6mz.s[18], (0, _decryptFile2.default)(key, fileEncryptedBlob));
			var fileDecryptedBlob = (++cov_gx0ipo6mz.s[19], new Blob([fileArrayBuffer], { type: type2Mime(elementType) }));
			var fileDecryptedUrl = (++cov_gx0ipo6mz.s[20], createUrlFromBlob(fileDecryptedBlob));

			var newElement = (++cov_gx0ipo6mz.s[21], document.createElement('media-tag'));
			++cov_gx0ipo6mz.s[22];
			newElement.setAttribute('src', fileDecryptedUrl);
			++cov_gx0ipo6mz.s[23];
			newElement.setAttribute('data-type', elementType);
			++cov_gx0ipo6mz.s[24];
			mediaObj.utilsPassAllDataAttributes(newElement);

			++cov_gx0ipo6mz.s[25];
			debug('Passed all data attributes.');
			++cov_gx0ipo6mz.s[26];
			mediaTag(newElement);
			++cov_gx0ipo6mz.s[27];
			debug('Started new element.');

			++cov_gx0ipo6mz.s[28];
			mediaObj.replaceContents([newElement]);
			++cov_gx0ipo6mz.s[29];
			debug('Replaced contents.');
		});
	}

});

exports.default = CryptoPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2NyeXB0by9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWJ1ZyIsImdldEJsb2JGcm9tVXJsIiwiZmlsZVVSTCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJhcnJheUJ1ZmZlciIsIkZldGNoRmFpbCIsImJsb2IiLCJjcmVhdGVVcmxGcm9tQmxvYiIsImZpbGVCbG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidmFsaWRDcnlwdG9UeXBlcyIsInR5cGUyTWltZSIsInR5cGVTdHIiLCJDcnlwdG9QbHVnaW4iLCJpZGVudGlmaWVyIiwidHlwZUNoZWNrIiwiaGFzQXR0cmlidXRlIiwibWVkaWFPYmoiLCJpbmRleE9mIiwiZ2V0QXR0cmlidXRlIiwic3RhcnR1cCIsImtleSIsImVsZW1lbnRUeXBlIiwiZWxlbWVudFNvdXJjZSIsImZpbGVBcnJheUJ1ZmZlciIsImZpbGVFbmNyeXB0ZWRCbG9iIiwiZmlsZURlY3J5cHRlZEJsb2IiLCJCbG9iIiwidHlwZSIsImZpbGVEZWNyeXB0ZWRVcmwiLCJuZXdFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidXRpbHNQYXNzQWxsRGF0YUF0dHJpYnV0ZXMiLCJtZWRpYVRhZyIsInJlcGxhY2VDb250ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSwrQkFBUSxxQkFBYSxXQUFiLENBQVIsQ0FBTixDLENBTEE7OztBQU9BLFNBQVNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDO0FBQUE7QUFBQTs7QUFDaEMsUUFBT0MsTUFBTUQsT0FBTixFQUFlRSxJQUFmLENBQW9CLG9CQUFZO0FBQUE7QUFBQTs7QUFDdEMsTUFBSUMsU0FBU0MsRUFBYixFQUFpQjtBQUFBO0FBQUE7O0FBQ2hCLFVBQU9ELFNBQVNFLFdBQVQsRUFBUDtBQUNBLEdBRkQ7QUFBQTtBQUFBO0FBRHNDO0FBSXRDLFFBQU0sSUFBSSxpQkFBT0MsU0FBWCxDQUFxQkgsUUFBckIsQ0FBTjtBQUNBLEVBTE0sRUFLSkQsSUFMSSxDQUtDLGdCQUFRSztBQUFBQTtBQUFBQTtBQUFBQTtBQUFJQSxFQUxiLENBQVA7QUFNQTs7QUFFRCxTQUFTQyxpQkFBVCxDQUEyQkMsUUFBM0IsRUFBcUM7QUFBQTtBQUFBOztBQUNwQyxRQUFPQyxJQUFJQyxlQUFKLENBQW9CRixRQUFwQixDQUFQO0FBQ0E7O0FBRUQsSUFBTUcsMENBQW1CLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsS0FBbkIsQ0FBbkIsQ0FBTjs7QUFFQTtBQUNBO0FBQ0EsU0FBU0MsU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTtBQUFBOztBQUMzQixTQUFRQSxPQUFSO0FBQ0MsT0FBSyxPQUFMO0FBQUE7QUFBQTs7QUFDQyxVQUFPLE9BQVA7QUFDRCxPQUFLLE9BQUw7QUFBQTtBQUFBOztBQUNDLFVBQU8sV0FBUDtBQUNEO0FBQUE7QUFBQTs7QUFDQyxVQUFPLElBQVA7QUFORjtBQVFBOztBQUVEOzs7O0FBSUEsSUFBTUMsdUNBQWU7QUFDcEI7OztBQUdBQyxhQUFZLFFBSlE7O0FBTXBCOzs7Ozs7OztBQVFBQyxZQUFXLDZCQUFZO0FBQUE7QUFBQTs7QUFDdEIsU0FBTyxtQ0FBU0MsWUFBVCxDQUFzQixpQkFBdEIsZ0NBQ0xDLFNBQVNELFlBQVQsQ0FBc0Isa0JBQXRCLENBREssK0JBRUxDLFNBQVNELFlBQVQsQ0FBc0IsaUJBQXRCLENBRkssK0JBR0xOLGlCQUFpQlEsT0FBakIsQ0FBeUJELFNBQVNFLFlBQVQsQ0FBc0Isa0JBQXRCLENBQXpCLE1BQXdFLENBQUMsQ0FIcEUsQ0FBUDtBQUlBLEVBbkJtQjs7QUFxQnBCQyxVQUFTLDJCQUFZO0FBQUE7O0FBQ3BCLE1BQU1DLDhCQUFNSixTQUFTRSxZQUFULENBQXNCLGlCQUF0QixDQUFOLENBQU47QUFDQSxNQUFNRyxzQ0FBY0wsU0FBU0UsWUFBVCxDQUFzQixrQkFBdEIsQ0FBZCxDQUFOO0FBQ0EsTUFBTUksd0NBQWdCTixTQUFTRSxZQUFULENBQXNCLGlCQUF0QixDQUFoQixDQUFOOztBQUVBO0FBTG9CO0FBTXBCdEIsaUJBQWUwQixhQUFmLEVBQThCdkIsSUFBOUIsQ0FBbUMsNkJBQXFCO0FBQUE7O0FBQ3ZELE9BQU13QiwwQ0FBa0IsMkJBQVlILEdBQVosRUFBaUJJLGlCQUFqQixDQUFsQixDQUFOO0FBQ0EsT0FBTUMsNENBQW9CLElBQUlDLElBQUosQ0FBUyxDQUFDSCxlQUFELENBQVQsRUFBNEIsRUFBQ0ksTUFBTWpCLFVBQVVXLFdBQVYsQ0FBUCxFQUE1QixDQUFwQixDQUFOO0FBQ0EsT0FBTU8sMkNBQW1CdkIsa0JBQWtCb0IsaUJBQWxCLENBQW5CLENBQU47O0FBRUEsT0FBTUkscUNBQWFDLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBYixDQUFOO0FBTHVEO0FBTXZERixjQUFXRyxZQUFYLENBQXdCLEtBQXhCLEVBQStCSixnQkFBL0I7QUFOdUQ7QUFPdkRDLGNBQVdHLFlBQVgsQ0FBd0IsV0FBeEIsRUFBcUNYLFdBQXJDO0FBUHVEO0FBUXZETCxZQUFTaUIsMEJBQVQsQ0FBb0NKLFVBQXBDOztBQVJ1RDtBQVV2RGxDLFNBQU0sNkJBQU47QUFWdUQ7QUFXdkR1QyxZQUFTTCxVQUFUO0FBWHVEO0FBWXZEbEMsU0FBTSxzQkFBTjs7QUFadUQ7QUFjdkRxQixZQUFTbUIsZUFBVCxDQUF5QixDQUFDTixVQUFELENBQXpCO0FBZHVEO0FBZXZEbEMsU0FBTSxvQkFBTjtBQUNBLEdBaEJEO0FBaUJBOztBQTVDbUIsQ0FBZixDQUFOOztrQkFnRGVpQixZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2RyYWRlYXUvZ2l0L21lZGlhX3RhZ192MiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBkb2N1bWVudCwgbWVkaWFUYWcsIFVSTCwgZmV0Y2gsIEJsb2IgKi9cbmltcG9ydCBkZWJ1Z0ZhY3RvcnkgZnJvbSAnZGVidWcnO1xuaW1wb3J0IEVycm9ycyBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycyc7XG5pbXBvcnQgZGVjcnlwdEZpbGUgZnJvbSAnLi9kZWNyeXB0LWZpbGUnO1xuXG5jb25zdCBkZWJ1ZyA9IGRlYnVnRmFjdG9yeSgnTVQ6Q3J5cHRvJyk7XG5cbmZ1bmN0aW9uIGdldEJsb2JGcm9tVXJsKGZpbGVVUkwpIHtcblx0cmV0dXJuIGZldGNoKGZpbGVVUkwpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdGlmIChyZXNwb25zZS5vaykge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBFcnJvcnMuRmV0Y2hGYWlsKHJlc3BvbnNlKTtcblx0fSkudGhlbihibG9iID0+IGJsb2IpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVcmxGcm9tQmxvYihmaWxlQmxvYikge1xuXHRyZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlQmxvYik7XG59XG5cbmNvbnN0IHZhbGlkQ3J5cHRvVHlwZXMgPSBbJ2ltYWdlJywgJ3ZpZGVvJywgJ3BkZiddO1xuXG4vLyBUT0RPOiBtYXliZSB0aGlzIHNob3VsZCBiZSBhdm9pZGVkIGFuZCB0aGUgdHlwZSAoZGF0YS1jcnlwdG8tdHlwZSlcbi8vIHNob3VsZCBiZSBtaW1ldHlwZVxuZnVuY3Rpb24gdHlwZTJNaW1lKHR5cGVTdHIpIHtcblx0c3dpdGNoICh0eXBlU3RyKSB7XG5cdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0cmV0dXJuICdpbWFnZSc7XG5cdFx0Y2FzZSAndmlkZW8nOlxuXHRcdFx0cmV0dXJuICd2aWRlby9tcDQnO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG4vKipcbiAqIEBtb2R1bGUgQ3J5cHRvUGx1Z2luXG4gKiBAc2luY2UgMC4yLjBcbiAqL1xuY29uc3QgQ3J5cHRvUGx1Z2luID0ge1xuXHQvKipcblx0ICogSWRlbnRpZmllcyB0aGUgcGx1Z2luLlxuXHQgKi9cblx0aWRlbnRpZmllcjogJ2NyeXB0bycsXG5cblx0LyoqXG5cdCAqIENoZWNrIGlmIHRoZSBtZWRpYSB0YWcgaW5zdGFuY2UgaXMgYSBDcnlwdG8gdHlwZVxuXHQgKiBUaGUgZWxlbWVudCBzaG91bGQgaGF2ZSBhdCBsZWFzdCB0aHJlZSBhdHRyaWJ1dGVzOlxuXHQgKiAgIC0gKmRhdGEtY3J5cHRvLXR5cGUqOiB3aGljaCBpcyB0aGUgZmlsZSB0eXBlIGFzc29jaWF0ZWQgdG8gdGhlIGRlY3J5cHRlZCBmaWxlLCBjaGVjayBDcnlwdG9QbHVnaW4udmFsaWRDcnlwdG9UeXBlcyBmb3IgdmFsaWQgdmFsdWVzXG5cdCAqICAgLSAqZGF0YS1jcnlwdG8tc3JjKjogZW5jcnlwdGVkIGZpbGUgVVJMXG5cdCAqICAgLSAqZGF0YS1jcnlwdG8ta2V5Kjoga2V5IHRvIGRlY3J5cHQgdGhlIGZpbGVcblx0ICogQHBhcmFtIHtNZWRpYU9iamVjdH0gbWVkaWFPYmpcblx0ICovXG5cdHR5cGVDaGVjazogbWVkaWFPYmogPT4ge1xuXHRcdHJldHVyblx0bWVkaWFPYmouaGFzQXR0cmlidXRlKCdkYXRhLWNyeXB0by1rZXknKSAmJlxuXHRcdFx0XHRtZWRpYU9iai5oYXNBdHRyaWJ1dGUoJ2RhdGEtY3J5cHRvLXR5cGUnKSAmJlxuXHRcdFx0XHRtZWRpYU9iai5oYXNBdHRyaWJ1dGUoJ2RhdGEtY3J5cHRvLXNyYycpICYmXG5cdFx0XHRcdHZhbGlkQ3J5cHRvVHlwZXMuaW5kZXhPZihtZWRpYU9iai5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3J5cHRvLXR5cGUnKSkgIT09IC0xO1xuXHR9LFxuXG5cdHN0YXJ0dXA6IG1lZGlhT2JqID0+IHtcblx0XHRjb25zdCBrZXkgPSBtZWRpYU9iai5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3J5cHRvLWtleScpO1xuXHRcdGNvbnN0IGVsZW1lbnRUeXBlID0gbWVkaWFPYmouZ2V0QXR0cmlidXRlKCdkYXRhLWNyeXB0by10eXBlJyk7XG5cdFx0Y29uc3QgZWxlbWVudFNvdXJjZSA9IG1lZGlhT2JqLmdldEF0dHJpYnV0ZSgnZGF0YS1jcnlwdG8tc3JjJyk7XG5cblx0XHQvLyBUT0RPOiBoYW5kbGUgZmFpbHVyZVxuXHRcdGdldEJsb2JGcm9tVXJsKGVsZW1lbnRTb3VyY2UpLnRoZW4oZmlsZUVuY3J5cHRlZEJsb2IgPT4ge1xuXHRcdFx0Y29uc3QgZmlsZUFycmF5QnVmZmVyID0gZGVjcnlwdEZpbGUoa2V5LCBmaWxlRW5jcnlwdGVkQmxvYik7XG5cdFx0XHRjb25zdCBmaWxlRGVjcnlwdGVkQmxvYiA9IG5ldyBCbG9iKFtmaWxlQXJyYXlCdWZmZXJdLCB7dHlwZTogdHlwZTJNaW1lKGVsZW1lbnRUeXBlKX0pO1xuXHRcdFx0Y29uc3QgZmlsZURlY3J5cHRlZFVybCA9IGNyZWF0ZVVybEZyb21CbG9iKGZpbGVEZWNyeXB0ZWRCbG9iKTtcblxuXHRcdFx0Y29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21lZGlhLXRhZycpO1xuXHRcdFx0bmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVEZWNyeXB0ZWRVcmwpO1xuXHRcdFx0bmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsIGVsZW1lbnRUeXBlKTtcblx0XHRcdG1lZGlhT2JqLnV0aWxzUGFzc0FsbERhdGFBdHRyaWJ1dGVzKG5ld0VsZW1lbnQpO1xuXG5cdFx0XHRkZWJ1ZygnUGFzc2VkIGFsbCBkYXRhIGF0dHJpYnV0ZXMuJyk7XG5cdFx0XHRtZWRpYVRhZyhuZXdFbGVtZW50KTtcblx0XHRcdGRlYnVnKCdTdGFydGVkIG5ldyBlbGVtZW50LicpO1xuXG5cdFx0XHRtZWRpYU9iai5yZXBsYWNlQ29udGVudHMoW25ld0VsZW1lbnRdKTtcblx0XHRcdGRlYnVnKCdSZXBsYWNlZCBjb250ZW50cy4nKTtcblx0XHR9KTtcblx0fVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcnlwdG9QbHVnaW47XG4iXX0=

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_24d6nka6gt = function () {
						var path = '/home/dradeau/git/media_tag_v2/src/plugins/image.js',
						    hash = '99f79941ee73c193a1f5c0d22131dd6d9a087b05',
						    global = new Function('return this')(),
						    gcv = '__coverage__',
						    coverageData = {
												path: '/home/dradeau/git/media_tag_v2/src/plugins/image.js',
												statementMap: {
																		'0': {
																								start: {
																														line: 7,
																														column: 20
																								},
																								end: {
																														line: 48,
																														column: 1
																								}
																		},
																		'1': {
																								start: {
																														line: 11,
																														column: 2
																								},
																								end: {
																														line: 13,
																														column: 3
																								}
																		},
																		'2': {
																								start: {
																														line: 12,
																														column: 3
																								},
																								end: {
																														line: 12,
																														column: 16
																								}
																		},
																		'3': {
																								start: {
																														line: 16,
																														column: 19
																								},
																								end: {
																														line: 16,
																														column: 51
																								}
																		},
																		'4': {
																								start: {
																														line: 17,
																														column: 2
																								},
																								end: {
																														line: 19,
																														column: 3
																								}
																		},
																		'5': {
																								start: {
																														line: 18,
																														column: 3
																								},
																								end: {
																														line: 18,
																														column: 15
																								}
																		},
																		'6': {
																								start: {
																														line: 22,
																														column: 20
																								},
																								end: {
																														line: 22,
																														column: 64
																								}
																		},
																		'7': {
																								start: {
																														line: 23,
																														column: 2
																								},
																								end: {
																														line: 25,
																														column: 3
																								}
																		},
																		'8': {
																								start: {
																														line: 24,
																														column: 3
																								},
																								end: {
																														line: 24,
																														column: 15
																								}
																		},
																		'9': {
																								start: {
																														line: 28,
																														column: 2
																								},
																								end: {
																														line: 30,
																														column: 3
																								}
																		},
																		'10': {
																								start: {
																														line: 29,
																														column: 3
																								},
																								end: {
																														line: 29,
																														column: 15
																								}
																		},
																		'11': {
																								start: {
																														line: 33,
																														column: 2
																								},
																								end: {
																														line: 33,
																														column: 15
																								}
																		},
																		'12': {
																								start: {
																														line: 37,
																														column: 18
																								},
																								end: {
																														line: 37,
																														column: 47
																								}
																		},
																		'13': {
																								start: {
																														line: 40,
																														column: 2
																								},
																								end: {
																														line: 40,
																														column: 60
																								}
																		},
																		'14': {
																								start: {
																														line: 43,
																														column: 2
																								},
																								end: {
																														line: 43,
																														column: 46
																								}
																		},
																		'15': {
																								start: {
																														line: 46,
																														column: 2
																								},
																								end: {
																														line: 46,
																														column: 38
																								}
																		}
												},
												fnMap: {
																		'0': {
																								name: '(anonymous_0)',
																								decl: {
																														start: {
																																				line: 9,
																																				column: 12
																														},
																														end: {
																																				line: 9,
																																				column: 13
																														}
																								},
																								loc: {
																														start: {
																																				line: 9,
																																				column: 24
																														},
																														end: {
																																				line: 34,
																																				column: 2
																														}
																								},
																								line: 9
																		},
																		'1': {
																								name: '(anonymous_1)',
																								decl: {
																														start: {
																																				line: 35,
																																				column: 10
																														},
																														end: {
																																				line: 35,
																																				column: 11
																														}
																								},
																								loc: {
																														start: {
																																				line: 35,
																																				column: 22
																														},
																														end: {
																																				line: 47,
																																				column: 2
																														}
																								},
																								line: 35
																		}
												},
												branchMap: {
																		'0': {
																								loc: {
																														start: {
																																				line: 11,
																																				column: 2
																														},
																														end: {
																																				line: 13,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 11,
																																				column: 2
																														},
																														end: {
																																				line: 13,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 11,
																																				column: 2
																														},
																														end: {
																																				line: 13,
																																				column: 3
																														}
																								}],
																								line: 11
																		},
																		'1': {
																								loc: {
																														start: {
																																				line: 17,
																																				column: 2
																														},
																														end: {
																																				line: 19,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 17,
																																				column: 2
																														},
																														end: {
																																				line: 19,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 17,
																																				column: 2
																														},
																														end: {
																																				line: 19,
																																				column: 3
																														}
																								}],
																								line: 17
																		},
																		'2': {
																								loc: {
																														start: {
																																				line: 23,
																																				column: 2
																														},
																														end: {
																																				line: 25,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 23,
																																				column: 2
																														},
																														end: {
																																				line: 25,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 23,
																																				column: 2
																														},
																														end: {
																																				line: 25,
																																				column: 3
																														}
																								}],
																								line: 23
																		},
																		'3': {
																								loc: {
																														start: {
																																				line: 28,
																																				column: 2
																														},
																														end: {
																																				line: 30,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 28,
																																				column: 2
																														},
																														end: {
																																				line: 30,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 28,
																																				column: 2
																														},
																														end: {
																																				line: 30,
																																				column: 3
																														}
																								}],
																								line: 28
																		}
												},
												s: {
																		'0': 0,
																		'1': 0,
																		'2': 0,
																		'3': 0,
																		'4': 0,
																		'5': 0,
																		'6': 0,
																		'7': 0,
																		'8': 0,
																		'9': 0,
																		'10': 0,
																		'11': 0,
																		'12': 0,
																		'13': 0,
																		'14': 0,
																		'15': 0
												},
												f: {
																		'0': 0,
																		'1': 0
												},
												b: {
																		'0': [0, 0],
																		'1': [0, 0],
																		'2': [0, 0],
																		'3': [0, 0]
												},
												_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
						},
						    coverage = global[gcv] || (global[gcv] = {});

						if (coverage[path] && coverage[path].hash === hash) {
												return coverage[path];
						}

						coverageData.hash = hash;
						return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
						value: true
});
/* global document */

/**
 * @module ImagePlugin
 * @since 0.2.0
 */
var ImagePlugin = (++cov_24d6nka6gt.s[0], {
						identifier: 'image',
						typeCheck: function typeCheck(mediaObj) {
												++cov_24d6nka6gt.f[0];
												++cov_24d6nka6gt.s[1];

												// Verify if there is mandatory 'src' field
												if (!mediaObj.hasAttribute('src')) {
																		++cov_24d6nka6gt.b[0][0];
																		++cov_24d6nka6gt.s[2];

																		return false;
												} else {
																		++cov_24d6nka6gt.b[0][1];
												}

												// Verify extensions
												var regexExt = (++cov_24d6nka6gt.s[3], new RegExp('^png|jpg|jpeg|gif$'));
												++cov_24d6nka6gt.s[4];
												if (regexExt.exec(mediaObj.getExtension())) {
																		++cov_24d6nka6gt.b[1][0];
																		++cov_24d6nka6gt.s[5];

																		return true;
												} else {
																		++cov_24d6nka6gt.b[1][1];
												}

												// Verify mime type
												var regexMime = (++cov_24d6nka6gt.s[6], new RegExp('^image/(png|svg+xml|jpeg|gif)$'));
												++cov_24d6nka6gt.s[7];
												if (regexMime.exec(mediaObj.getMimeType())) {
																		++cov_24d6nka6gt.b[2][0];
																		++cov_24d6nka6gt.s[8];

																		return true;
												} else {
																		++cov_24d6nka6gt.b[2][1];
												}

												// Verify type
												++cov_24d6nka6gt.s[9];
												if (mediaObj.getType() === 'image') {
																		++cov_24d6nka6gt.b[3][0];
																		++cov_24d6nka6gt.s[10];

																		return true;
												} else {
																		++cov_24d6nka6gt.b[3][1];
												}

												// Otherwise is not an image
												++cov_24d6nka6gt.s[11];
												return false;
						},
						startup: function startup(mediaObj) {
												++cov_24d6nka6gt.f[1];

												// Create image element
												var element = (++cov_24d6nka6gt.s[12], document.createElement('img'));

												// Set the source file
												++cov_24d6nka6gt.s[13];
												element.setAttribute('src', mediaObj.getAttribute('src'));

												// Set all data-attr-something to the element.setAttribute('something', value)
												++cov_24d6nka6gt.s[14];
												mediaObj.utilsSetAllDataAttributes(element);

												// Update mediaObj contents with the created element
												++cov_24d6nka6gt.s[15];
												mediaObj.replaceContents([element]);
						}
});

exports.default = ImagePlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2ltYWdlLmpzIl0sIm5hbWVzIjpbIkltYWdlUGx1Z2luIiwiaWRlbnRpZmllciIsInR5cGVDaGVjayIsIm1lZGlhT2JqIiwiaGFzQXR0cmlidXRlIiwicmVnZXhFeHQiLCJSZWdFeHAiLCJleGVjIiwiZ2V0RXh0ZW5zaW9uIiwicmVnZXhNaW1lIiwiZ2V0TWltZVR5cGUiLCJnZXRUeXBlIiwic3RhcnR1cCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ1dGlsc1NldEFsbERhdGFBdHRyaWJ1dGVzIiwicmVwbGFjZUNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7O0FBSUEsSUFBTUEsc0NBQWM7QUFDbkJDLGtCQUFZLE9BRE87QUFFbkJDLGlCQUFXLDZCQUFZO0FBQUE7QUFBQTs7QUFDaEI7QUFDTixnQkFBSSxDQUFDQyxTQUFTQyxZQUFULENBQXNCLEtBQXRCLENBQUwsRUFBbUM7QUFBQTtBQUFBOztBQUNsQyx5QkFBTyxLQUFQO0FBQ0EsYUFGRDtBQUFBO0FBQUE7O0FBSU07QUFDTixnQkFBTUMsbUNBQVcsSUFBSUMsTUFBSixDQUFXLG9CQUFYLENBQVgsQ0FBTjtBQVBzQjtBQVF0QixnQkFBSUQsU0FBU0UsSUFBVCxDQUFjSixTQUFTSyxZQUFULEVBQWQsQ0FBSixFQUE0QztBQUFBO0FBQUE7O0FBQzNDLHlCQUFPLElBQVA7QUFDQSxhQUZEO0FBQUE7QUFBQTs7QUFJTTtBQUNOLGdCQUFNQyxvQ0FBWSxJQUFJSCxNQUFKLENBQVcsZ0NBQVgsQ0FBWixDQUFOO0FBYnNCO0FBY3RCLGdCQUFJRyxVQUFVRixJQUFWLENBQWVKLFNBQVNPLFdBQVQsRUFBZixDQUFKLEVBQTRDO0FBQUE7QUFBQTs7QUFDM0MseUJBQU8sSUFBUDtBQUNBLGFBRkQ7QUFBQTtBQUFBOztBQUlNO0FBbEJnQjtBQW1CdEIsZ0JBQUlQLFNBQVNRLE9BQVQsT0FBdUIsT0FBM0IsRUFBb0M7QUFBQTtBQUFBOztBQUNuQyx5QkFBTyxJQUFQO0FBQ0EsYUFGRDtBQUFBO0FBQUE7O0FBSU07QUF2QmdCO0FBd0J0QixtQkFBTyxLQUFQO0FBQ0EsT0EzQmtCO0FBNEJuQkMsZUFBUywyQkFBWTtBQUFBOztBQUNkO0FBQ04sZ0JBQU1DLG1DQUFVQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQVYsQ0FBTjs7QUFFTTtBQUpjO0FBS3BCRixvQkFBUUcsWUFBUixDQUFxQixLQUFyQixFQUE0QmIsU0FBU2MsWUFBVCxDQUFzQixLQUF0QixDQUE1Qjs7QUFFTTtBQVBjO0FBUXBCZCxxQkFBU2UseUJBQVQsQ0FBbUNMLE9BQW5DOztBQUVNO0FBVmM7QUFXcEJWLHFCQUFTZ0IsZUFBVCxDQUF5QixDQUFDTixPQUFELENBQXpCO0FBQ0E7QUF4Q2tCLENBQWQsQ0FBTjs7a0JBMkNlYixXIiwiZmlsZSI6ImltYWdlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2RyYWRlYXUvZ2l0L21lZGlhX3RhZ192MiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBkb2N1bWVudCAqL1xuXG4vKipcbiAqIEBtb2R1bGUgSW1hZ2VQbHVnaW5cbiAqIEBzaW5jZSAwLjIuMFxuICovXG5jb25zdCBJbWFnZVBsdWdpbiA9IHtcblx0aWRlbnRpZmllcjogJ2ltYWdlJyxcblx0dHlwZUNoZWNrOiBtZWRpYU9iaiA9PiB7XG4gICAgICAgIC8vIFZlcmlmeSBpZiB0aGVyZSBpcyBtYW5kYXRvcnkgJ3NyYycgZmllbGRcblx0XHRpZiAoIW1lZGlhT2JqLmhhc0F0dHJpYnV0ZSgnc3JjJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cbiAgICAgICAgLy8gVmVyaWZ5IGV4dGVuc2lvbnNcblx0XHRjb25zdCByZWdleEV4dCA9IG5ldyBSZWdFeHAoJ15wbmd8anBnfGpwZWd8Z2lmJCcpO1xuXHRcdGlmIChyZWdleEV4dC5leGVjKG1lZGlhT2JqLmdldEV4dGVuc2lvbigpKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG4gICAgICAgIC8vIFZlcmlmeSBtaW1lIHR5cGVcblx0XHRjb25zdCByZWdleE1pbWUgPSBuZXcgUmVnRXhwKCdeaW1hZ2UvKHBuZ3xzdmcreG1sfGpwZWd8Z2lmKSQnKTtcblx0XHRpZiAocmVnZXhNaW1lLmV4ZWMobWVkaWFPYmouZ2V0TWltZVR5cGUoKSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuICAgICAgICAvLyBWZXJpZnkgdHlwZVxuXHRcdGlmIChtZWRpYU9iai5nZXRUeXBlKCkgPT09ICdpbWFnZScpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuICAgICAgICAvLyBPdGhlcndpc2UgaXMgbm90IGFuIGltYWdlXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRzdGFydHVwOiBtZWRpYU9iaiA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSBpbWFnZSBlbGVtZW50XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgc291cmNlIGZpbGVcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgbWVkaWFPYmouZ2V0QXR0cmlidXRlKCdzcmMnKSk7XG5cbiAgICAgICAgLy8gU2V0IGFsbCBkYXRhLWF0dHItc29tZXRoaW5nIHRvIHRoZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc29tZXRoaW5nJywgdmFsdWUpXG5cdFx0bWVkaWFPYmoudXRpbHNTZXRBbGxEYXRhQXR0cmlidXRlcyhlbGVtZW50KTtcblxuICAgICAgICAvLyBVcGRhdGUgbWVkaWFPYmogY29udGVudHMgd2l0aCB0aGUgY3JlYXRlZCBlbGVtZW50XG5cdFx0bWVkaWFPYmoucmVwbGFjZUNvbnRlbnRzKFtlbGVtZW50XSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlUGx1Z2luO1xuIl19

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(19)
  , TAG = __webpack_require__(5)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(65);

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
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
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

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
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
  if ('function' === typeof exports.init) {
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

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
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


/***/ }),
/* 63 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 64 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000
var m = s * 60
var h = m * 60
var d = h * 24
var y = d * 365.25

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

module.exports = function (val, options) {
  options = options || {}
  var type = typeof val
  if (type === 'string' && val.length > 0) {
    return parse(val)
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ?
			fmtLong(val) :
			fmtShort(val)
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
}

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str)
  if (str.length > 10000) {
    return
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
  if (!match) {
    return
  }
  var n = parseFloat(match[1])
  var type = (match[2] || 'ms').toLowerCase()
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y
    case 'days':
    case 'day':
    case 'd':
      return n * d
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n
    default:
      return undefined
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
    return Math.round(ms / d) + 'd'
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h'
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm'
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's'
  }
  return ms + 'ms'
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms'
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name
  }
  return Math.ceil(ms / n) + ' ' + name + 's'
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16)
  , toLength  = __webpack_require__(8)
  , toIndex   = __webpack_require__(42);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global            = __webpack_require__(2)
  , $export           = __webpack_require__(0)
  , redefine          = __webpack_require__(14)
  , redefineAll       = __webpack_require__(40)
  , meta              = __webpack_require__(31)
  , forOf             = __webpack_require__(48)
  , anInstance        = __webpack_require__(35)
  , isObject          = __webpack_require__(4)
  , fails             = __webpack_require__(3)
  , $iterDetect       = __webpack_require__(72)
  , setToStringTag    = __webpack_require__(50)
  , inheritIfRequired = __webpack_require__(89);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && fails(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base, target, C);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide     = __webpack_require__(13)
  , redefine = __webpack_require__(14)
  , fails    = __webpack_require__(3)
  , defined  = __webpack_require__(20)
  , wks      = __webpack_require__(5);

module.exports = function(KEY, length, exec){
  var SYMBOL   = wks(KEY)
    , fns      = exec(defined, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(fails(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(1);
module.exports = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(4)
  , cof      = __webpack_require__(19)
  , MATCH    = __webpack_require__(5)('match');
module.exports = function(it){
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(5)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(36)|| !__webpack_require__(3)(function(){
  var K = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, K, function(){ /* empty */});
  delete __webpack_require__(2)[K];
});

/***/ }),
/* 74 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , hide   = __webpack_require__(13)
  , uid    = __webpack_require__(43)
  , TYPED  = uid('typed_array')
  , VIEW   = uid('view')
  , ABV    = !!(global.ArrayBuffer && global.DataView)
  , CONSTR = ABV
  , i = 0, l = 9, Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i < l){
  if(Typed = global[TypedArrayConstructors[i++]]){
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2ee3fxhkzs = function () {
  var path = '/home/dradeau/git/media_tag_v2/src/media-tag.js',
      hash = 'a81172f8478ffa920ef2fae2c5e1d88eae417030',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/home/dradeau/git/media_tag_v2/src/media-tag.js',
    statementMap: {
      '0': {
        start: {
          line: 12,
          column: 17
        },
        end: {
          line: 12,
          column: 52
        }
      },
      '1': {
        start: {
          line: 17,
          column: 20
        },
        end: {
          line: 17,
          column: 54
        }
      },
      '2': {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 37
        }
      },
      '3': {
        start: {
          line: 22,
          column: 20
        },
        end: {
          line: 22,
          column: 54
        }
      },
      '4': {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 37
        }
      },
      '5': {
        start: {
          line: 27,
          column: 20
        },
        end: {
          line: 27,
          column: 54
        }
      },
      '6': {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 29,
          column: 37
        }
      },
      '7': {
        start: {
          line: 32,
          column: 19
        },
        end: {
          line: 32,
          column: 52
        }
      },
      '8': {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 34,
          column: 36
        }
      },
      '9': {
        start: {
          line: 37,
          column: 18
        },
        end: {
          line: 37,
          column: 50
        }
      },
      '10': {
        start: {
          line: 39,
          column: 0
        },
        end: {
          line: 39,
          column: 35
        }
      },
      '11': {
        start: {
          line: 42,
          column: 21
        },
        end: {
          line: 42,
          column: 56
        }
      },
      '12': {
        start: {
          line: 44,
          column: 0
        },
        end: {
          line: 44,
          column: 38
        }
      },
      '13': {
        start: {
          line: 46,
          column: 0
        },
        end: {
          line: 46,
          column: 26
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

// Why is this the only file with old style imports?

// We can't use export default or webpack will not export the global
// library var correctly.
// https://github.com/webpack/webpack/issues/706
// So the following does not work:
// export default MediaTag;
// And because of that we can't use module.exports mixed with imports
// https://github.com/webpack/webpack/issues/4039

var MediaTag = (++cov_2ee3fxhkzs.s[0], __webpack_require__(54).default);

// Plugins

// Plugin :: Image
var ImagePlugin = (++cov_2ee3fxhkzs.s[1], __webpack_require__(57).default);

++cov_2ee3fxhkzs.s[2];
MediaTag.registerPlugin(ImagePlugin);

// Plugin :: Video
var VideoPlugin = (++cov_2ee3fxhkzs.s[3], __webpack_require__(81).default);

++cov_2ee3fxhkzs.s[4];
MediaTag.registerPlugin(VideoPlugin);

// Plugin :: Audio
var AudioPlugin = (++cov_2ee3fxhkzs.s[5], __webpack_require__(78).default);

++cov_2ee3fxhkzs.s[6];
MediaTag.registerPlugin(AudioPlugin);

// Plugin :: Dash
var DashPlugin = (++cov_2ee3fxhkzs.s[7], __webpack_require__(79).default);

++cov_2ee3fxhkzs.s[8];
MediaTag.registerPlugin(DashPlugin);

// Plugin :: Pdf
var PdfPlugin = (++cov_2ee3fxhkzs.s[9], __webpack_require__(80).default);

++cov_2ee3fxhkzs.s[10];
MediaTag.registerPlugin(PdfPlugin);

// Plugin :: Crypto
var CryptoPlugin = (++cov_2ee3fxhkzs.s[11], __webpack_require__(56).default);

++cov_2ee3fxhkzs.s[12];
MediaTag.registerPlugin(CryptoPlugin);

++cov_2ee3fxhkzs.s[13];
module.exports = MediaTag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tZWRpYS10YWcuanMiXSwibmFtZXMiOlsiTWVkaWFUYWciLCJyZXF1aXJlIiwiZGVmYXVsdCIsIkltYWdlUGx1Z2luIiwicmVnaXN0ZXJQbHVnaW4iLCJWaWRlb1BsdWdpbiIsIkF1ZGlvUGx1Z2luIiwiRGFzaFBsdWdpbiIsIlBkZlBsdWdpbiIsIkNyeXB0b1BsdWdpbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG1DQUFXQyxRQUFRLGtCQUFSLEVBQTRCQyxPQUF2QyxDQUFOOztBQUVBOztBQUVBO0FBQ0EsSUFBTUMsc0NBQWNGLFFBQVEsaUJBQVIsRUFBMkJDLE9BQXpDLENBQU47OztBQUVBRixTQUFTSSxjQUFULENBQXdCRCxXQUF4Qjs7QUFFQTtBQUNBLElBQU1FLHNDQUFjSixRQUFRLGlCQUFSLEVBQTJCQyxPQUF6QyxDQUFOOzs7QUFFQUYsU0FBU0ksY0FBVCxDQUF3QkMsV0FBeEI7O0FBRUE7QUFDQSxJQUFNQyxzQ0FBY0wsUUFBUSxpQkFBUixFQUEyQkMsT0FBekMsQ0FBTjs7O0FBRUFGLFNBQVNJLGNBQVQsQ0FBd0JFLFdBQXhCOztBQUVBO0FBQ0EsSUFBTUMscUNBQWFOLFFBQVEsZ0JBQVIsRUFBMEJDLE9BQXZDLENBQU47OztBQUVBRixTQUFTSSxjQUFULENBQXdCRyxVQUF4Qjs7QUFFQTtBQUNBLElBQU1DLG9DQUFZUCxRQUFRLGVBQVIsRUFBeUJDLE9BQXJDLENBQU47OztBQUVBRixTQUFTSSxjQUFULENBQXdCSSxTQUF4Qjs7QUFFQTtBQUNBLElBQU1DLHdDQUFlUixRQUFRLGtCQUFSLEVBQTRCQyxPQUEzQyxDQUFOOzs7QUFFQUYsU0FBU0ksY0FBVCxDQUF3QkssWUFBeEI7OztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCWCxRQUFqQiIsImZpbGUiOiJtZWRpYS10YWcuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZHJhZGVhdS9naXQvbWVkaWFfdGFnX3YyIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBXaHkgaXMgdGhpcyB0aGUgb25seSBmaWxlIHdpdGggb2xkIHN0eWxlIGltcG9ydHM/XG5cbi8vIFdlIGNhbid0IHVzZSBleHBvcnQgZGVmYXVsdCBvciB3ZWJwYWNrIHdpbGwgbm90IGV4cG9ydCB0aGUgZ2xvYmFsXG4vLyBsaWJyYXJ5IHZhciBjb3JyZWN0bHkuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2lzc3Vlcy83MDZcbi8vIFNvIHRoZSBmb2xsb3dpbmcgZG9lcyBub3Qgd29yazpcbi8vIGV4cG9ydCBkZWZhdWx0IE1lZGlhVGFnO1xuLy8gQW5kIGJlY2F1c2Ugb2YgdGhhdCB3ZSBjYW4ndCB1c2UgbW9kdWxlLmV4cG9ydHMgbWl4ZWQgd2l0aCBpbXBvcnRzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2lzc3Vlcy80MDM5XG5cbmNvbnN0IE1lZGlhVGFnID0gcmVxdWlyZSgnLi9jb3JlL21lZGlhLXRhZycpLmRlZmF1bHQ7XG5cbi8vIFBsdWdpbnNcblxuLy8gUGx1Z2luIDo6IEltYWdlXG5jb25zdCBJbWFnZVBsdWdpbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy9pbWFnZScpLmRlZmF1bHQ7XG5cbk1lZGlhVGFnLnJlZ2lzdGVyUGx1Z2luKEltYWdlUGx1Z2luKTtcblxuLy8gUGx1Z2luIDo6IFZpZGVvXG5jb25zdCBWaWRlb1BsdWdpbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy92aWRlbycpLmRlZmF1bHQ7XG5cbk1lZGlhVGFnLnJlZ2lzdGVyUGx1Z2luKFZpZGVvUGx1Z2luKTtcblxuLy8gUGx1Z2luIDo6IEF1ZGlvXG5jb25zdCBBdWRpb1BsdWdpbiA9IHJlcXVpcmUoJy4vcGx1Z2lucy9hdWRpbycpLmRlZmF1bHQ7XG5cbk1lZGlhVGFnLnJlZ2lzdGVyUGx1Z2luKEF1ZGlvUGx1Z2luKTtcblxuLy8gUGx1Z2luIDo6IERhc2hcbmNvbnN0IERhc2hQbHVnaW4gPSByZXF1aXJlKCcuL3BsdWdpbnMvZGFzaCcpLmRlZmF1bHQ7XG5cbk1lZGlhVGFnLnJlZ2lzdGVyUGx1Z2luKERhc2hQbHVnaW4pO1xuXG4vLyBQbHVnaW4gOjogUGRmXG5jb25zdCBQZGZQbHVnaW4gPSByZXF1aXJlKCcuL3BsdWdpbnMvcGRmJykuZGVmYXVsdDtcblxuTWVkaWFUYWcucmVnaXN0ZXJQbHVnaW4oUGRmUGx1Z2luKTtcblxuLy8gUGx1Z2luIDo6IENyeXB0b1xuY29uc3QgQ3J5cHRvUGx1Z2luID0gcmVxdWlyZSgnLi9wbHVnaW5zL2NyeXB0bycpLmRlZmF1bHQ7XG5cbk1lZGlhVGFnLnJlZ2lzdGVyUGx1Z2luKENyeXB0b1BsdWdpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFUYWc7XG4iXX0=

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_22uw0m4tv6 = function () {
						var path = '/home/dradeau/git/media_tag_v2/src/plugins/audio.js',
						    hash = 'a6aef8a1f042f9a1b1d72dc2a6b411a54e2f134d',
						    global = new Function('return this')(),
						    gcv = '__coverage__',
						    coverageData = {
												path: '/home/dradeau/git/media_tag_v2/src/plugins/audio.js',
												statementMap: {
																		'0': {
																								start: {
																														line: 7,
																														column: 20
																								},
																								end: {
																														line: 48,
																														column: 1
																								}
																		},
																		'1': {
																								start: {
																														line: 11,
																														column: 2
																								},
																								end: {
																														line: 13,
																														column: 3
																								}
																		},
																		'2': {
																								start: {
																														line: 12,
																														column: 3
																								},
																								end: {
																														line: 12,
																														column: 16
																								}
																		},
																		'3': {
																								start: {
																														line: 16,
																														column: 19
																								},
																								end: {
																														line: 16,
																														column: 42
																								}
																		},
																		'4': {
																								start: {
																														line: 17,
																														column: 2
																								},
																								end: {
																														line: 19,
																														column: 3
																								}
																		},
																		'5': {
																								start: {
																														line: 18,
																														column: 3
																								},
																								end: {
																														line: 18,
																														column: 15
																								}
																		},
																		'6': {
																								start: {
																														line: 22,
																														column: 20
																								},
																								end: {
																														line: 22,
																														column: 60
																								}
																		},
																		'7': {
																								start: {
																														line: 23,
																														column: 2
																								},
																								end: {
																														line: 25,
																														column: 3
																								}
																		},
																		'8': {
																								start: {
																														line: 24,
																														column: 3
																								},
																								end: {
																														line: 24,
																														column: 15
																								}
																		},
																		'9': {
																								start: {
																														line: 28,
																														column: 2
																								},
																								end: {
																														line: 30,
																														column: 3
																								}
																		},
																		'10': {
																								start: {
																														line: 29,
																														column: 3
																								},
																								end: {
																														line: 29,
																														column: 15
																								}
																		},
																		'11': {
																								start: {
																														line: 33,
																														column: 2
																								},
																								end: {
																														line: 33,
																														column: 15
																								}
																		},
																		'12': {
																								start: {
																														line: 37,
																														column: 18
																								},
																								end: {
																														line: 37,
																														column: 49
																								}
																		},
																		'13': {
																								start: {
																														line: 40,
																														column: 2
																								},
																								end: {
																														line: 40,
																														column: 60
																								}
																		},
																		'14': {
																								start: {
																														line: 43,
																														column: 2
																								},
																								end: {
																														line: 43,
																														column: 46
																								}
																		},
																		'15': {
																								start: {
																														line: 46,
																														column: 2
																								},
																								end: {
																														line: 46,
																														column: 38
																								}
																		}
												},
												fnMap: {
																		'0': {
																								name: '(anonymous_0)',
																								decl: {
																														start: {
																																				line: 9,
																																				column: 12
																														},
																														end: {
																																				line: 9,
																																				column: 13
																														}
																								},
																								loc: {
																														start: {
																																				line: 9,
																																				column: 24
																														},
																														end: {
																																				line: 34,
																																				column: 2
																														}
																								},
																								line: 9
																		},
																		'1': {
																								name: '(anonymous_1)',
																								decl: {
																														start: {
																																				line: 35,
																																				column: 10
																														},
																														end: {
																																				line: 35,
																																				column: 11
																														}
																								},
																								loc: {
																														start: {
																																				line: 35,
																																				column: 22
																														},
																														end: {
																																				line: 47,
																																				column: 2
																														}
																								},
																								line: 35
																		}
												},
												branchMap: {
																		'0': {
																								loc: {
																														start: {
																																				line: 11,
																																				column: 2
																														},
																														end: {
																																				line: 13,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 11,
																																				column: 2
																														},
																														end: {
																																				line: 13,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 11,
																																				column: 2
																														},
																														end: {
																																				line: 13,
																																				column: 3
																														}
																								}],
																								line: 11
																		},
																		'1': {
																								loc: {
																														start: {
																																				line: 17,
																																				column: 2
																														},
																														end: {
																																				line: 19,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 17,
																																				column: 2
																														},
																														end: {
																																				line: 19,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 17,
																																				column: 2
																														},
																														end: {
																																				line: 19,
																																				column: 3
																														}
																								}],
																								line: 17
																		},
																		'2': {
																								loc: {
																														start: {
																																				line: 23,
																																				column: 2
																														},
																														end: {
																																				line: 25,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 23,
																																				column: 2
																														},
																														end: {
																																				line: 25,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 23,
																																				column: 2
																														},
																														end: {
																																				line: 25,
																																				column: 3
																														}
																								}],
																								line: 23
																		},
																		'3': {
																								loc: {
																														start: {
																																				line: 28,
																																				column: 2
																														},
																														end: {
																																				line: 30,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 28,
																																				column: 2
																														},
																														end: {
																																				line: 30,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 28,
																																				column: 2
																														},
																														end: {
																																				line: 30,
																																				column: 3
																														}
																								}],
																								line: 28
																		}
												},
												s: {
																		'0': 0,
																		'1': 0,
																		'2': 0,
																		'3': 0,
																		'4': 0,
																		'5': 0,
																		'6': 0,
																		'7': 0,
																		'8': 0,
																		'9': 0,
																		'10': 0,
																		'11': 0,
																		'12': 0,
																		'13': 0,
																		'14': 0,
																		'15': 0
												},
												f: {
																		'0': 0,
																		'1': 0
												},
												b: {
																		'0': [0, 0],
																		'1': [0, 0],
																		'2': [0, 0],
																		'3': [0, 0]
												},
												_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
						},
						    coverage = global[gcv] || (global[gcv] = {});

						if (coverage[path] && coverage[path].hash === hash) {
												return coverage[path];
						}

						coverageData.hash = hash;
						return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
						value: true
});
/* global document */

/**
 * @module AudioPlugin
 * @since 0.2.0
 */
var AudioPlugin = (++cov_22uw0m4tv6.s[0], {
						identifier: 'audio',
						typeCheck: function typeCheck(mediaObj) {
												++cov_22uw0m4tv6.f[0];
												++cov_22uw0m4tv6.s[1];

												// Verify if there is mandatory 'src' field
												if (!mediaObj.hasAttribute('src')) {
																		++cov_22uw0m4tv6.b[0][0];
																		++cov_22uw0m4tv6.s[2];

																		return false;
												} else {
																		++cov_22uw0m4tv6.b[0][1];
												}

												// Verify extensions
												var regexExt = (++cov_22uw0m4tv6.s[3], new RegExp('^mp3|wav$'));
												++cov_22uw0m4tv6.s[4];
												if (regexExt.exec(mediaObj.getExtension())) {
																		++cov_22uw0m4tv6.b[1][0];
																		++cov_22uw0m4tv6.s[5];

																		return true;
												} else {
																		++cov_22uw0m4tv6.b[1][1];
												}

												// Verify mime type
												var regexMime = (++cov_22uw0m4tv6.s[6], new RegExp('^audio/(mp3|ogg|webm|wav)$'));
												++cov_22uw0m4tv6.s[7];
												if (regexMime.exec(mediaObj.getMimeType())) {
																		++cov_22uw0m4tv6.b[2][0];
																		++cov_22uw0m4tv6.s[8];

																		return true;
												} else {
																		++cov_22uw0m4tv6.b[2][1];
												}

												// Verify type
												++cov_22uw0m4tv6.s[9];
												if (mediaObj.getType() === 'audio') {
																		++cov_22uw0m4tv6.b[3][0];
																		++cov_22uw0m4tv6.s[10];

																		return true;
												} else {
																		++cov_22uw0m4tv6.b[3][1];
												}

												// Otherwise is not an audio
												++cov_22uw0m4tv6.s[11];
												return false;
						},
						startup: function startup(mediaObj) {
												++cov_22uw0m4tv6.f[1];

												// Create audio element
												var element = (++cov_22uw0m4tv6.s[12], document.createElement('audio'));

												// Set the source file
												++cov_22uw0m4tv6.s[13];
												element.setAttribute('src', mediaObj.getAttribute('src'));

												// Set all data-attr-something to the element.setAttribute('something', value)
												++cov_22uw0m4tv6.s[14];
												mediaObj.utilsSetAllDataAttributes(element);

												// Update mediaObj contents with the created element
												++cov_22uw0m4tv6.s[15];
												mediaObj.replaceContents([element]);
						}
});

exports.default = AudioPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2F1ZGlvLmpzIl0sIm5hbWVzIjpbIkF1ZGlvUGx1Z2luIiwiaWRlbnRpZmllciIsInR5cGVDaGVjayIsIm1lZGlhT2JqIiwiaGFzQXR0cmlidXRlIiwicmVnZXhFeHQiLCJSZWdFeHAiLCJleGVjIiwiZ2V0RXh0ZW5zaW9uIiwicmVnZXhNaW1lIiwiZ2V0TWltZVR5cGUiLCJnZXRUeXBlIiwic3RhcnR1cCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ1dGlsc1NldEFsbERhdGFBdHRyaWJ1dGVzIiwicmVwbGFjZUNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7O0FBSUEsSUFBTUEsc0NBQWM7QUFDbkJDLGtCQUFZLE9BRE87QUFFbkJDLGlCQUFXLDZCQUFZO0FBQUE7QUFBQTs7QUFDaEI7QUFDTixnQkFBSSxDQUFDQyxTQUFTQyxZQUFULENBQXNCLEtBQXRCLENBQUwsRUFBbUM7QUFBQTtBQUFBOztBQUNsQyx5QkFBTyxLQUFQO0FBQ0EsYUFGRDtBQUFBO0FBQUE7O0FBSU07QUFDTixnQkFBTUMsbUNBQVcsSUFBSUMsTUFBSixDQUFXLFdBQVgsQ0FBWCxDQUFOO0FBUHNCO0FBUXRCLGdCQUFJRCxTQUFTRSxJQUFULENBQWNKLFNBQVNLLFlBQVQsRUFBZCxDQUFKLEVBQTRDO0FBQUE7QUFBQTs7QUFDM0MseUJBQU8sSUFBUDtBQUNBLGFBRkQ7QUFBQTtBQUFBOztBQUlNO0FBQ04sZ0JBQU1DLG9DQUFZLElBQUlILE1BQUosQ0FBVyw0QkFBWCxDQUFaLENBQU47QUFic0I7QUFjdEIsZ0JBQUlHLFVBQVVGLElBQVYsQ0FBZUosU0FBU08sV0FBVCxFQUFmLENBQUosRUFBNEM7QUFBQTtBQUFBOztBQUMzQyx5QkFBTyxJQUFQO0FBQ0EsYUFGRDtBQUFBO0FBQUE7O0FBSU07QUFsQmdCO0FBbUJ0QixnQkFBSVAsU0FBU1EsT0FBVCxPQUF1QixPQUEzQixFQUFvQztBQUFBO0FBQUE7O0FBQ25DLHlCQUFPLElBQVA7QUFDQSxhQUZEO0FBQUE7QUFBQTs7QUFJTTtBQXZCZ0I7QUF3QnRCLG1CQUFPLEtBQVA7QUFDQSxPQTNCa0I7QUE0Qm5CQyxlQUFTLDJCQUFZO0FBQUE7O0FBQ2Q7QUFDTixnQkFBTUMsbUNBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBVixDQUFOOztBQUVNO0FBSmM7QUFLcEJGLG9CQUFRRyxZQUFSLENBQXFCLEtBQXJCLEVBQTRCYixTQUFTYyxZQUFULENBQXNCLEtBQXRCLENBQTVCOztBQUVNO0FBUGM7QUFRcEJkLHFCQUFTZSx5QkFBVCxDQUFtQ0wsT0FBbkM7O0FBRU07QUFWYztBQVdwQlYscUJBQVNnQixlQUFULENBQXlCLENBQUNOLE9BQUQsQ0FBekI7QUFDQTtBQXhDa0IsQ0FBZCxDQUFOOztrQkEyQ2ViLFciLCJmaWxlIjoiYXVkaW8uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZHJhZGVhdS9naXQvbWVkaWFfdGFnX3YyIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIGRvY3VtZW50ICovXG5cbi8qKlxuICogQG1vZHVsZSBBdWRpb1BsdWdpblxuICogQHNpbmNlIDAuMi4wXG4gKi9cbmNvbnN0IEF1ZGlvUGx1Z2luID0ge1xuXHRpZGVudGlmaWVyOiAnYXVkaW8nLFxuXHR0eXBlQ2hlY2s6IG1lZGlhT2JqID0+IHtcbiAgICAgICAgLy8gVmVyaWZ5IGlmIHRoZXJlIGlzIG1hbmRhdG9yeSAnc3JjJyBmaWVsZFxuXHRcdGlmICghbWVkaWFPYmouaGFzQXR0cmlidXRlKCdzcmMnKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuICAgICAgICAvLyBWZXJpZnkgZXh0ZW5zaW9uc1xuXHRcdGNvbnN0IHJlZ2V4RXh0ID0gbmV3IFJlZ0V4cCgnXm1wM3x3YXYkJyk7XG5cdFx0aWYgKHJlZ2V4RXh0LmV4ZWMobWVkaWFPYmouZ2V0RXh0ZW5zaW9uKCkpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cbiAgICAgICAgLy8gVmVyaWZ5IG1pbWUgdHlwZVxuXHRcdGNvbnN0IHJlZ2V4TWltZSA9IG5ldyBSZWdFeHAoJ15hdWRpby8obXAzfG9nZ3x3ZWJtfHdhdikkJyk7XG5cdFx0aWYgKHJlZ2V4TWltZS5leGVjKG1lZGlhT2JqLmdldE1pbWVUeXBlKCkpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cbiAgICAgICAgLy8gVmVyaWZ5IHR5cGVcblx0XHRpZiAobWVkaWFPYmouZ2V0VHlwZSgpID09PSAnYXVkaW8nKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGlzIG5vdCBhbiBhdWRpb1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0c3RhcnR1cDogbWVkaWFPYmogPT4ge1xuICAgICAgICAvLyBDcmVhdGUgYXVkaW8gZWxlbWVudFxuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgc291cmNlIGZpbGVcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgbWVkaWFPYmouZ2V0QXR0cmlidXRlKCdzcmMnKSk7XG5cbiAgICAgICAgLy8gU2V0IGFsbCBkYXRhLWF0dHItc29tZXRoaW5nIHRvIHRoZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc29tZXRoaW5nJywgdmFsdWUpXG5cdFx0bWVkaWFPYmoudXRpbHNTZXRBbGxEYXRhQXR0cmlidXRlcyhlbGVtZW50KTtcblxuICAgICAgICAvLyBVcGRhdGUgbWVkaWFPYmogY29udGVudHMgd2l0aCB0aGUgY3JlYXRlZCBlbGVtZW50XG5cdFx0bWVkaWFPYmoucmVwbGFjZUNvbnRlbnRzKFtlbGVtZW50XSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvUGx1Z2luO1xuIl19

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_25rdb33dg9 = function () {
	var path = '/home/dradeau/git/media_tag_v2/src/plugins/dash.js',
	    hash = '0211f642fb9877b6cf6a9004358a787b9deb6102',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/dradeau/git/media_tag_v2/src/plugins/dash.js',
		statementMap: {
			'0': {
				start: {
					line: 8,
					column: 27
				},
				end: {
					line: 8,
					column: 39
				}
			},
			'1': {
				start: {
					line: 10,
					column: 19
				},
				end: {
					line: 51,
					column: 1
				}
			},
			'2': {
				start: {
					line: 13,
					column: 19
				},
				end: {
					line: 18,
					column: 3
				}
			},
			'3': {
				start: {
					line: 20,
					column: 2
				},
				end: {
					line: 25,
					column: 3
				}
			},
			'4': {
				start: {
					line: 21,
					column: 3
				},
				end: {
					line: 24,
					column: 4
				}
			},
			'5': {
				start: {
					line: 22,
					column: 4
				},
				end: {
					line: 22,
					column: 26
				}
			},
			'6': {
				start: {
					line: 23,
					column: 4
				},
				end: {
					line: 23,
					column: 17
				}
			},
			'7': {
				start: {
					line: 26,
					column: 2
				},
				end: {
					line: 26,
					column: 14
				}
			},
			'8': {
				start: {
					line: 29,
					column: 16
				},
				end: {
					line: 29,
					column: 47
				}
			},
			'9': {
				start: {
					line: 30,
					column: 17
				},
				end: {
					line: 30,
					column: 40
				}
			},
			'10': {
				start: {
					line: 31,
					column: 16
				},
				end: {
					line: 31,
					column: 67
				}
			},
			'11': {
				start: {
					line: 32,
					column: 14
				},
				end: {
					line: 32,
					column: 22
				}
			},
			'12': {
				start: {
					line: 33,
					column: 13
				},
				end: {
					line: 33,
					column: 21
				}
			},
			'13': {
				start: {
					line: 34,
					column: 14
				},
				end: {
					line: 34,
					column: 22
				}
			},
			'14': {
				start: {
					line: 35,
					column: 23
				},
				end: {
					line: 35,
					column: 54
				}
			},
			'15': {
				start: {
					line: 37,
					column: 2
				},
				end: {
					line: 37,
					column: 24
				}
			},
			'16': {
				start: {
					line: 38,
					column: 2
				},
				end: {
					line: 38,
					column: 44
				}
			},
			'17': {
				start: {
					line: 39,
					column: 2
				},
				end: {
					line: 39,
					column: 36
				}
			},
			'18': {
				start: {
					line: 41,
					column: 2
				},
				end: {
					line: 47,
					column: 3
				}
			},
			'19': {
				start: {
					line: 42,
					column: 3
				},
				end: {
					line: 46,
					column: 6
				}
			},
			'20': {
				start: {
					line: 49,
					column: 2
				},
				end: {
					line: 49,
					column: 71
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 12,
						column: 12
					},
					end: {
						line: 12,
						column: 13
					}
				},
				loc: {
					start: {
						line: 12,
						column: 24
					},
					end: {
						line: 27,
						column: 2
					}
				},
				line: 12
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 28,
						column: 10
					},
					end: {
						line: 28,
						column: 11
					}
				},
				loc: {
					start: {
						line: 28,
						column: 22
					},
					end: {
						line: 50,
						column: 2
					}
				},
				line: 28
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 49,
						column: 61
					},
					end: {
						line: 49,
						column: 62
					}
				},
				loc: {
					start: {
						line: 49,
						column: 67
					},
					end: {
						line: 49,
						column: 69
					}
				},
				line: 49
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 21,
						column: 3
					},
					end: {
						line: 24,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 21,
						column: 3
					},
					end: {
						line: 24,
						column: 4
					}
				}, {
					start: {
						line: 21,
						column: 3
					},
					end: {
						line: 24,
						column: 4
					}
				}],
				line: 21
			},
			'1': {
				loc: {
					start: {
						line: 41,
						column: 2
					},
					end: {
						line: 47,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 41,
						column: 2
					},
					end: {
						line: 47,
						column: 3
					}
				}, {
					start: {
						line: 41,
						column: 2
					},
					end: {
						line: 47,
						column: 3
					}
				}],
				line: 41
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
	value: true
});
/* global document, shaka */

/**
 * @module DashPlugin
 * @since 0.2.0
 */

var validCryptoKeyTags = (++cov_25rdb33dg9.s[0], ['clearkey']);

var DashPlugin = (++cov_25rdb33dg9.s[1], {
	identifier: 'dash',
	typeCheck: function typeCheck(mediaObj) {
		++cov_25rdb33dg9.f[0];

		var contract = (++cov_25rdb33dg9.s[2], [mediaObj.hasAttribute('data-crypto-src'), mediaObj.hasAttribute('data-crypto-key'), mediaObj.hasAttribute('data-crypto-type'), mediaObj.getAttribute('data-crypto-type') === 'dash']);

		++cov_25rdb33dg9.s[3];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = contract[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var condition = _step.value;
				++cov_25rdb33dg9.s[4];

				if (!condition) {
					++cov_25rdb33dg9.b[0][0];
					++cov_25rdb33dg9.s[5];

					console.log(contract);
					++cov_25rdb33dg9.s[6];
					return false;
				} else {
					++cov_25rdb33dg9.b[0][1];
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		++cov_25rdb33dg9.s[7];
		return true;
	},
	startup: function startup(mediaObj) {
		++cov_25rdb33dg9.f[1];

		var video = (++cov_25rdb33dg9.s[8], document.createElement('video'));
		var player = (++cov_25rdb33dg9.s[9], new shaka.Player(video));
		var array = (++cov_25rdb33dg9.s[10], mediaObj.getAttribute('data-crypto-key').split(':'));
		var tag = (++cov_25rdb33dg9.s[11], array[0]);
		var id = (++cov_25rdb33dg9.s[12], array[1]);
		var key = (++cov_25rdb33dg9.s[13], array[2]);
		var clearkeyText = (++cov_25rdb33dg9.s[14], '{"' + id + '": "' + key + '"}');

		++cov_25rdb33dg9.s[15];
		video.controls = true;
		++cov_25rdb33dg9.s[16];
		mediaObj.utilsSetAllDataAttributes(video);
		++cov_25rdb33dg9.s[17];
		mediaObj.replaceContents([video]);

		++cov_25rdb33dg9.s[18];
		if (validCryptoKeyTags.includes(tag)) {
			++cov_25rdb33dg9.b[1][0];
			++cov_25rdb33dg9.s[19];

			player.configure({
				drm: {
					clearKeys: JSON.parse(clearkeyText)
				}
			});
		} else {
			++cov_25rdb33dg9.b[1][1];
		}

		++cov_25rdb33dg9.s[20];
		player.load(mediaObj.getAttribute('data-crypto-src')).then(function () {
			++cov_25rdb33dg9.f[2];
		});
	}
});

exports.default = DashPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2Rhc2guanMiXSwibmFtZXMiOlsidmFsaWRDcnlwdG9LZXlUYWdzIiwiRGFzaFBsdWdpbiIsImlkZW50aWZpZXIiLCJ0eXBlQ2hlY2siLCJjb250cmFjdCIsIm1lZGlhT2JqIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiY29uZGl0aW9uIiwiY29uc29sZSIsImxvZyIsInN0YXJ0dXAiLCJ2aWRlbyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInBsYXllciIsInNoYWthIiwiUGxheWVyIiwiYXJyYXkiLCJzcGxpdCIsInRhZyIsImlkIiwia2V5IiwiY2xlYXJrZXlUZXh0IiwiY29udHJvbHMiLCJ1dGlsc1NldEFsbERhdGFBdHRyaWJ1dGVzIiwicmVwbGFjZUNvbnRlbnRzIiwiaW5jbHVkZXMiLCJjb25maWd1cmUiLCJkcm0iLCJjbGVhcktleXMiLCJKU09OIiwicGFyc2UiLCJsb2FkIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7QUFLQSxJQUFNQSw2Q0FBcUIsQ0FBQyxVQUFELENBQXJCLENBQU47O0FBRUEsSUFBTUMscUNBQWE7QUFDbEJDLGFBQVksTUFETTtBQUVsQkMsWUFBVyw2QkFBWTtBQUFBOztBQUN0QixNQUFNQyxtQ0FBVyxDQUNoQkMsU0FBU0MsWUFBVCxDQUFzQixpQkFBdEIsQ0FEZ0IsRUFFaEJELFNBQVNDLFlBQVQsQ0FBc0IsaUJBQXRCLENBRmdCLEVBR2hCRCxTQUFTQyxZQUFULENBQXNCLGtCQUF0QixDQUhnQixFQUloQkQsU0FBU0UsWUFBVCxDQUFzQixrQkFBdEIsTUFBOEMsTUFKOUIsQ0FBWCxDQUFOOztBQURzQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQVF0Qix3QkFBd0JILFFBQXhCLDhIQUFrQztBQUFBLFFBQXZCSSxTQUF1QjtBQUFBOztBQUNqQyxRQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFBQTtBQUFBOztBQUNmQyxhQUFRQyxHQUFSLENBQVlOLFFBQVo7QUFEZTtBQUVmLFlBQU8sS0FBUDtBQUNBLEtBSEQ7QUFBQTtBQUFBO0FBSUE7QUFicUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWN0QixTQUFPLElBQVA7QUFDQSxFQWpCaUI7QUFrQmxCTyxVQUFTLDJCQUFZO0FBQUE7O0FBQ3BCLE1BQU1DLGdDQUFRQyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVIsQ0FBTjtBQUNBLE1BQU1DLGlDQUFTLElBQUlDLE1BQU1DLE1BQVYsQ0FBaUJMLEtBQWpCLENBQVQsQ0FBTjtBQUNBLE1BQU1NLGlDQUFRYixTQUFTRSxZQUFULENBQXNCLGlCQUF0QixFQUF5Q1ksS0FBekMsQ0FBK0MsR0FBL0MsQ0FBUixDQUFOO0FBQ0EsTUFBTUMsK0JBQU1GLE1BQU0sQ0FBTixDQUFOLENBQU47QUFDQSxNQUFNRyw4QkFBS0gsTUFBTSxDQUFOLENBQUwsQ0FBTjtBQUNBLE1BQU1JLCtCQUFNSixNQUFNLENBQU4sQ0FBTixDQUFOO0FBQ0EsTUFBTUssd0NBQWUsT0FBT0YsRUFBUCxHQUFZLE1BQVosR0FBcUJDLEdBQXJCLEdBQTJCLElBQTFDLENBQU47O0FBUG9CO0FBU3BCVixRQUFNWSxRQUFOLEdBQWlCLElBQWpCO0FBVG9CO0FBVXBCbkIsV0FBU29CLHlCQUFULENBQW1DYixLQUFuQztBQVZvQjtBQVdwQlAsV0FBU3FCLGVBQVQsQ0FBeUIsQ0FBQ2QsS0FBRCxDQUF6Qjs7QUFYb0I7QUFhcEIsTUFBSVosbUJBQW1CMkIsUUFBbkIsQ0FBNEJQLEdBQTVCLENBQUosRUFBc0M7QUFBQTtBQUFBOztBQUNyQ0wsVUFBT2EsU0FBUCxDQUFpQjtBQUNoQkMsU0FBSztBQUNKQyxnQkFBV0MsS0FBS0MsS0FBTCxDQUFXVCxZQUFYO0FBRFA7QUFEVyxJQUFqQjtBQUtBLEdBTkQ7QUFBQTtBQUFBOztBQWJvQjtBQXFCcEJSLFNBQU9rQixJQUFQLENBQVk1QixTQUFTRSxZQUFULENBQXNCLGlCQUF0QixDQUFaLEVBQXNEMkIsSUFBdEQsQ0FBMkQsWUFBTTtBQUFBO0FBQUUsR0FBbkU7QUFDQTtBQXhDaUIsQ0FBYixDQUFOOztrQkEyQ2VqQyxVIiwiZmlsZSI6ImRhc2guanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZHJhZGVhdS9naXQvbWVkaWFfdGFnX3YyIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIGRvY3VtZW50LCBzaGFrYSAqL1xuXG4vKipcbiAqIEBtb2R1bGUgRGFzaFBsdWdpblxuICogQHNpbmNlIDAuMi4wXG4gKi9cblxuY29uc3QgdmFsaWRDcnlwdG9LZXlUYWdzID0gWydjbGVhcmtleSddO1xuXG5jb25zdCBEYXNoUGx1Z2luID0ge1xuXHRpZGVudGlmaWVyOiAnZGFzaCcsXG5cdHR5cGVDaGVjazogbWVkaWFPYmogPT4ge1xuXHRcdGNvbnN0IGNvbnRyYWN0ID0gW1xuXHRcdFx0bWVkaWFPYmouaGFzQXR0cmlidXRlKCdkYXRhLWNyeXB0by1zcmMnKSxcblx0XHRcdG1lZGlhT2JqLmhhc0F0dHJpYnV0ZSgnZGF0YS1jcnlwdG8ta2V5JyksXG5cdFx0XHRtZWRpYU9iai5oYXNBdHRyaWJ1dGUoJ2RhdGEtY3J5cHRvLXR5cGUnKSxcblx0XHRcdG1lZGlhT2JqLmdldEF0dHJpYnV0ZSgnZGF0YS1jcnlwdG8tdHlwZScpID09PSAnZGFzaCdcblx0XHRdO1xuXG5cdFx0Zm9yIChjb25zdCBjb25kaXRpb24gb2YgY29udHJhY3QpIHtcblx0XHRcdGlmICghY29uZGl0aW9uKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGNvbnRyYWN0KTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0c3RhcnR1cDogbWVkaWFPYmogPT4ge1xuXHRcdGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcblx0XHRjb25zdCBwbGF5ZXIgPSBuZXcgc2hha2EuUGxheWVyKHZpZGVvKTtcblx0XHRjb25zdCBhcnJheSA9IG1lZGlhT2JqLmdldEF0dHJpYnV0ZSgnZGF0YS1jcnlwdG8ta2V5Jykuc3BsaXQoJzonKTtcblx0XHRjb25zdCB0YWcgPSBhcnJheVswXTtcblx0XHRjb25zdCBpZCA9IGFycmF5WzFdO1xuXHRcdGNvbnN0IGtleSA9IGFycmF5WzJdO1xuXHRcdGNvbnN0IGNsZWFya2V5VGV4dCA9ICd7XCInICsgaWQgKyAnXCI6IFwiJyArIGtleSArICdcIn0nO1xuXG5cdFx0dmlkZW8uY29udHJvbHMgPSB0cnVlO1xuXHRcdG1lZGlhT2JqLnV0aWxzU2V0QWxsRGF0YUF0dHJpYnV0ZXModmlkZW8pO1xuXHRcdG1lZGlhT2JqLnJlcGxhY2VDb250ZW50cyhbdmlkZW9dKTtcblxuXHRcdGlmICh2YWxpZENyeXB0b0tleVRhZ3MuaW5jbHVkZXModGFnKSkge1xuXHRcdFx0cGxheWVyLmNvbmZpZ3VyZSh7XG5cdFx0XHRcdGRybToge1xuXHRcdFx0XHRcdGNsZWFyS2V5czogSlNPTi5wYXJzZShjbGVhcmtleVRleHQpXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHBsYXllci5sb2FkKG1lZGlhT2JqLmdldEF0dHJpYnV0ZSgnZGF0YS1jcnlwdG8tc3JjJykpLnRoZW4oKCkgPT4ge30pO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoUGx1Z2luO1xuIl19

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_wd5cr19cx = function () {
	var path = '/home/dradeau/git/media_tag_v2/src/plugins/pdf.js',
	    hash = '68123484a5f0a17d350b38a5c24a9bf42e244ac3',
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/home/dradeau/git/media_tag_v2/src/plugins/pdf.js',
		statementMap: {
			'0': {
				start: {
					line: 7,
					column: 18
				},
				end: {
					line: 82,
					column: 1
				}
			},
			'1': {
				start: {
					line: 11,
					column: 2
				},
				end: {
					line: 13,
					column: 3
				}
			},
			'2': {
				start: {
					line: 12,
					column: 3
				},
				end: {
					line: 12,
					column: 16
				}
			},
			'3': {
				start: {
					line: 16,
					column: 19
				},
				end: {
					line: 16,
					column: 38
				}
			},
			'4': {
				start: {
					line: 17,
					column: 2
				},
				end: {
					line: 19,
					column: 3
				}
			},
			'5': {
				start: {
					line: 18,
					column: 3
				},
				end: {
					line: 18,
					column: 15
				}
			},
			'6': {
				start: {
					line: 22,
					column: 20
				},
				end: {
					line: 22,
					column: 51
				}
			},
			'7': {
				start: {
					line: 23,
					column: 2
				},
				end: {
					line: 25,
					column: 3
				}
			},
			'8': {
				start: {
					line: 24,
					column: 3
				},
				end: {
					line: 24,
					column: 15
				}
			},
			'9': {
				start: {
					line: 28,
					column: 2
				},
				end: {
					line: 30,
					column: 3
				}
			},
			'10': {
				start: {
					line: 29,
					column: 3
				},
				end: {
					line: 29,
					column: 15
				}
			},
			'11': {
				start: {
					line: 33,
					column: 2
				},
				end: {
					line: 33,
					column: 15
				}
			},
			'12': {
				start: {
					line: 37,
					column: 14
				},
				end: {
					line: 37,
					column: 42
				}
			},
			'13': {
				start: {
					line: 40,
					column: 17
				},
				end: {
					line: 40,
					column: 49
				}
			},
			'14': {
				start: {
					line: 43,
					column: 2
				},
				end: {
					line: 43,
					column: 37
				}
			},
			'15': {
				start: {
					line: 47,
					column: 2
				},
				end: {
					line: 47,
					column: 29
				}
			},
			'16': {
				start: {
					line: 50,
					column: 22
				},
				end: {
					line: 50,
					column: 44
				}
			},
			'17': {
				start: {
					line: 51,
					column: 2
				},
				end: {
					line: 80,
					column: 5
				}
			},
			'18': {
				start: {
					line: 52,
					column: 3
				},
				end: {
					line: 52,
					column: 29
				}
			},
			'19': {
				start: {
					line: 55,
					column: 22
				},
				end: {
					line: 55,
					column: 23
				}
			},
			'20': {
				start: {
					line: 56,
					column: 3
				},
				end: {
					line: 76,
					column: 6
				}
			},
			'21': {
				start: {
					line: 57,
					column: 4
				},
				end: {
					line: 57,
					column: 31
				}
			},
			'22': {
				start: {
					line: 59,
					column: 18
				},
				end: {
					line: 59,
					column: 21
				}
			},
			'23': {
				start: {
					line: 60,
					column: 21
				},
				end: {
					line: 60,
					column: 44
				}
			},
			'24': {
				start: {
					line: 63,
					column: 20
				},
				end: {
					line: 63,
					column: 43
				}
			},
			'25': {
				start: {
					line: 64,
					column: 4
				},
				end: {
					line: 64,
					column: 36
				}
			},
			'26': {
				start: {
					line: 65,
					column: 4
				},
				end: {
					line: 65,
					column: 34
				}
			},
			'27': {
				start: {
					line: 68,
					column: 26
				},
				end: {
					line: 71,
					column: 5
				}
			},
			'28': {
				start: {
					line: 72,
					column: 23
				},
				end: {
					line: 72,
					column: 49
				}
			},
			'29': {
				start: {
					line: 73,
					column: 4
				},
				end: {
					line: 75,
					column: 7
				}
			},
			'30': {
				start: {
					line: 74,
					column: 5
				},
				end: {
					line: 74,
					column: 34
				}
			},
			'31': {
				start: {
					line: 79,
					column: 3
				},
				end: {
					line: 79,
					column: 25
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 12
					},
					end: {
						line: 9,
						column: 13
					}
				},
				loc: {
					start: {
						line: 9,
						column: 24
					},
					end: {
						line: 34,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 35,
						column: 10
					},
					end: {
						line: 35,
						column: 11
					}
				},
				loc: {
					start: {
						line: 35,
						column: 22
					},
					end: {
						line: 81,
						column: 2
					}
				},
				line: 35
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 51,
						column: 27
					},
					end: {
						line: 51,
						column: 28
					}
				},
				loc: {
					start: {
						line: 51,
						column: 34
					},
					end: {
						line: 77,
						column: 3
					}
				},
				line: 51
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 56,
						column: 32
					},
					end: {
						line: 56,
						column: 33
					}
				},
				loc: {
					start: {
						line: 56,
						column: 40
					},
					end: {
						line: 76,
						column: 4
					}
				},
				line: 56
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 73,
						column: 20
					},
					end: {
						line: 73,
						column: 21
					}
				},
				loc: {
					start: {
						line: 73,
						column: 26
					},
					end: {
						line: 75,
						column: 5
					}
				},
				line: 73
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 77,
						column: 5
					},
					end: {
						line: 77,
						column: 6
					}
				},
				loc: {
					start: {
						line: 77,
						column: 15
					},
					end: {
						line: 80,
						column: 3
					}
				},
				line: 77
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 11,
						column: 2
					},
					end: {
						line: 13,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 11,
						column: 2
					},
					end: {
						line: 13,
						column: 3
					}
				}, {
					start: {
						line: 11,
						column: 2
					},
					end: {
						line: 13,
						column: 3
					}
				}],
				line: 11
			},
			'1': {
				loc: {
					start: {
						line: 17,
						column: 2
					},
					end: {
						line: 19,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 17,
						column: 2
					},
					end: {
						line: 19,
						column: 3
					}
				}, {
					start: {
						line: 17,
						column: 2
					},
					end: {
						line: 19,
						column: 3
					}
				}],
				line: 17
			},
			'2': {
				loc: {
					start: {
						line: 23,
						column: 2
					},
					end: {
						line: 25,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 23,
						column: 2
					},
					end: {
						line: 25,
						column: 3
					}
				}, {
					start: {
						line: 23,
						column: 2
					},
					end: {
						line: 25,
						column: 3
					}
				}],
				line: 23
			},
			'3': {
				loc: {
					start: {
						line: 28,
						column: 2
					},
					end: {
						line: 30,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 28,
						column: 2
					},
					end: {
						line: 30,
						column: 3
					}
				}, {
					start: {
						line: 28,
						column: 2
					},
					end: {
						line: 30,
						column: 3
					}
				}],
				line: 28
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
	value: true
});
/* global document, PDFJS */

/**
 * @module PdfPlugin
 * @since 0.2.0
 */
var PdfPlugin = (++cov_wd5cr19cx.s[0], {
	identifier: 'pdf',
	typeCheck: function typeCheck(mediaObj) {
		++cov_wd5cr19cx.f[0];
		++cov_wd5cr19cx.s[1];

		// Verify if there is mandatory 'src' field
		if (!mediaObj.hasAttribute('src')) {
			++cov_wd5cr19cx.b[0][0];
			++cov_wd5cr19cx.s[2];

			return false;
		} else {
			++cov_wd5cr19cx.b[0][1];
		}

		// Verify extensions
		var regexExt = (++cov_wd5cr19cx.s[3], new RegExp('^pdf$'));
		++cov_wd5cr19cx.s[4];
		if (regexExt.exec(mediaObj.getExtension())) {
			++cov_wd5cr19cx.b[1][0];
			++cov_wd5cr19cx.s[5];

			return true;
		} else {
			++cov_wd5cr19cx.b[1][1];
		}

		// Verify mime type
		var regexMime = (++cov_wd5cr19cx.s[6], new RegExp('^application/pdf$'));
		++cov_wd5cr19cx.s[7];
		if (regexMime.exec(mediaObj.getMimeType())) {
			++cov_wd5cr19cx.b[2][0];
			++cov_wd5cr19cx.s[8];

			return true;
		} else {
			++cov_wd5cr19cx.b[2][1];
		}

		// Verify type
		++cov_wd5cr19cx.s[9];
		if (mediaObj.getType() === 'pdf') {
			++cov_wd5cr19cx.b[3][0];
			++cov_wd5cr19cx.s[10];

			return true;
		} else {
			++cov_wd5cr19cx.b[3][1];
		}

		// Otherwise is not a pdf
		++cov_wd5cr19cx.s[11];
		return false;
	},
	startup: function startup(mediaObj) {
		++cov_wd5cr19cx.f[1];

		// Get the pdf url
		var url = (++cov_wd5cr19cx.s[12], mediaObj.getAttribute('src'));

		// Create canvas element
		var canvas = (++cov_wd5cr19cx.s[13], document.createElement('canvas'));

		// Update mediaObj contents with the created element
		++cov_wd5cr19cx.s[14];
		mediaObj.replaceContents([canvas]);

		// Disable workers for now
		// TODO: verify what workers do and how to integrate it
		++cov_wd5cr19cx.s[15];
		PDFJS.disableWorker = true;

		// Asynchronous download of PDF
		var loadingTask = (++cov_wd5cr19cx.s[16], PDFJS.getDocument(url));
		++cov_wd5cr19cx.s[17];
		loadingTask.promise.then(function (pdf) {
			++cov_wd5cr19cx.f[2];
			++cov_wd5cr19cx.s[18];

			console.log('PDF loaded');

			// Fetch the first page
			var pageNumber = (++cov_wd5cr19cx.s[19], 1);
			++cov_wd5cr19cx.s[20];
			pdf.getPage(pageNumber).then(function (page) {
				++cov_wd5cr19cx.f[3];
				++cov_wd5cr19cx.s[21];

				console.log('Page loaded');

				var scale = (++cov_wd5cr19cx.s[22], 1.5);
				var viewport = (++cov_wd5cr19cx.s[23], page.getViewport(scale));

				// Prepare canvas using PDF page dimensions
				var context = (++cov_wd5cr19cx.s[24], canvas.getContext('2d'));
				++cov_wd5cr19cx.s[25];
				canvas.height = viewport.height;
				++cov_wd5cr19cx.s[26];
				canvas.width = viewport.width;

				// Render PDF page into canvas context
				var renderContext = (++cov_wd5cr19cx.s[27], {
					canvasContext: context,
					viewport: viewport
				});
				var renderTask = (++cov_wd5cr19cx.s[28], page.render(renderContext));
				++cov_wd5cr19cx.s[29];
				renderTask.then(function () {
					++cov_wd5cr19cx.f[4];
					++cov_wd5cr19cx.s[30];

					console.log('Page rendered');
				});
			});
		}, function (reason) {
			++cov_wd5cr19cx.f[5];
			++cov_wd5cr19cx.s[31];

			// PDF loading error
			console.error(reason);
		});
	}
});

exports.default = PdfPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3BkZi5qcyJdLCJuYW1lcyI6WyJQZGZQbHVnaW4iLCJpZGVudGlmaWVyIiwidHlwZUNoZWNrIiwibWVkaWFPYmoiLCJoYXNBdHRyaWJ1dGUiLCJyZWdleEV4dCIsIlJlZ0V4cCIsImV4ZWMiLCJnZXRFeHRlbnNpb24iLCJyZWdleE1pbWUiLCJnZXRNaW1lVHlwZSIsImdldFR5cGUiLCJzdGFydHVwIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVwbGFjZUNvbnRlbnRzIiwiUERGSlMiLCJkaXNhYmxlV29ya2VyIiwibG9hZGluZ1Rhc2siLCJnZXREb2N1bWVudCIsInByb21pc2UiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInBhZ2VOdW1iZXIiLCJwZGYiLCJnZXRQYWdlIiwic2NhbGUiLCJ2aWV3cG9ydCIsInBhZ2UiLCJnZXRWaWV3cG9ydCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJyZW5kZXJDb250ZXh0IiwiY2FudmFzQ29udGV4dCIsInJlbmRlclRhc2siLCJyZW5kZXIiLCJlcnJvciIsInJlYXNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUlBLElBQU1BLG1DQUFZO0FBQ2pCQyxhQUFZLEtBREs7QUFFakJDLFlBQVcsNkJBQVk7QUFBQTtBQUFBOztBQUN0QjtBQUNBLE1BQUksQ0FBQ0MsU0FBU0MsWUFBVCxDQUFzQixLQUF0QixDQUFMLEVBQW1DO0FBQUE7QUFBQTs7QUFDbEMsVUFBTyxLQUFQO0FBQ0EsR0FGRDtBQUFBO0FBQUE7O0FBSUE7QUFDQSxNQUFNQyxrQ0FBVyxJQUFJQyxNQUFKLENBQVcsT0FBWCxDQUFYLENBQU47QUFQc0I7QUFRdEIsTUFBSUQsU0FBU0UsSUFBVCxDQUFjSixTQUFTSyxZQUFULEVBQWQsQ0FBSixFQUE0QztBQUFBO0FBQUE7O0FBQzNDLFVBQU8sSUFBUDtBQUNBLEdBRkQ7QUFBQTtBQUFBOztBQUlBO0FBQ0EsTUFBTUMsbUNBQVksSUFBSUgsTUFBSixDQUFXLG1CQUFYLENBQVosQ0FBTjtBQWJzQjtBQWN0QixNQUFJRyxVQUFVRixJQUFWLENBQWVKLFNBQVNPLFdBQVQsRUFBZixDQUFKLEVBQTRDO0FBQUE7QUFBQTs7QUFDM0MsVUFBTyxJQUFQO0FBQ0EsR0FGRDtBQUFBO0FBQUE7O0FBSUE7QUFsQnNCO0FBbUJ0QixNQUFJUCxTQUFTUSxPQUFULE9BQXVCLEtBQTNCLEVBQWtDO0FBQUE7QUFBQTs7QUFDakMsVUFBTyxJQUFQO0FBQ0EsR0FGRDtBQUFBO0FBQUE7O0FBSUE7QUF2QnNCO0FBd0J0QixTQUFPLEtBQVA7QUFDQSxFQTNCZ0I7QUE0QmpCQyxVQUFTLDJCQUFZO0FBQUE7O0FBQ3BCO0FBQ0EsTUFBTUMsOEJBQU1WLFNBQVNXLFlBQVQsQ0FBc0IsS0FBdEIsQ0FBTixDQUFOOztBQUVBO0FBQ0EsTUFBTUMsaUNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVCxDQUFOOztBQUVBO0FBUG9CO0FBUXBCZCxXQUFTZSxlQUFULENBQXlCLENBQUNILE1BQUQsQ0FBekI7O0FBRUE7QUFDQTtBQVhvQjtBQVlwQkksUUFBTUMsYUFBTixHQUFzQixJQUF0Qjs7QUFFQTtBQUNBLE1BQU1DLHNDQUFjRixNQUFNRyxXQUFOLENBQWtCVCxHQUFsQixDQUFkLENBQU47QUFmb0I7QUFnQnBCUSxjQUFZRSxPQUFaLENBQW9CQyxJQUFwQixDQUF5QixlQUFPO0FBQUE7QUFBQTs7QUFDL0JDLFdBQVFDLEdBQVIsQ0FBWSxZQUFaOztBQUVBO0FBQ0EsT0FBTUMscUNBQWEsQ0FBYixDQUFOO0FBSitCO0FBSy9CQyxPQUFJQyxPQUFKLENBQVlGLFVBQVosRUFBd0JILElBQXhCLENBQTZCLGdCQUFRO0FBQUE7QUFBQTs7QUFDcENDLFlBQVFDLEdBQVIsQ0FBWSxhQUFaOztBQUVBLFFBQU1JLGdDQUFRLEdBQVIsQ0FBTjtBQUNBLFFBQU1DLG1DQUFXQyxLQUFLQyxXQUFMLENBQWlCSCxLQUFqQixDQUFYLENBQU47O0FBRUE7QUFDQSxRQUFNSSxrQ0FBVW5CLE9BQU9vQixVQUFQLENBQWtCLElBQWxCLENBQVYsQ0FBTjtBQVBvQztBQVFwQ3BCLFdBQU9xQixNQUFQLEdBQWdCTCxTQUFTSyxNQUF6QjtBQVJvQztBQVNwQ3JCLFdBQU9zQixLQUFQLEdBQWVOLFNBQVNNLEtBQXhCOztBQUVBO0FBQ0EsUUFBTUMsd0NBQWdCO0FBQ3JCQyxvQkFBZUwsT0FETTtBQUVyQkg7QUFGcUIsS0FBaEIsQ0FBTjtBQUlBLFFBQU1TLHFDQUFhUixLQUFLUyxNQUFMLENBQVlILGFBQVosQ0FBYixDQUFOO0FBaEJvQztBQWlCcENFLGVBQVdoQixJQUFYLENBQWdCLFlBQU07QUFBQTtBQUFBOztBQUNyQkMsYUFBUUMsR0FBUixDQUFZLGVBQVo7QUFDQSxLQUZEO0FBR0EsSUFwQkQ7QUFxQkEsR0ExQkQsRUEwQkcsa0JBQVU7QUFBQTtBQUFBOztBQUNaO0FBQ0FELFdBQVFpQixLQUFSLENBQWNDLE1BQWQ7QUFDQSxHQTdCRDtBQThCQTtBQTFFZ0IsQ0FBWixDQUFOOztrQkE2RWUzQyxTIiwiZmlsZSI6InBkZi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9kcmFkZWF1L2dpdC9tZWRpYV90YWdfdjIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgZG9jdW1lbnQsIFBERkpTICovXG5cbi8qKlxuICogQG1vZHVsZSBQZGZQbHVnaW5cbiAqIEBzaW5jZSAwLjIuMFxuICovXG5jb25zdCBQZGZQbHVnaW4gPSB7XG5cdGlkZW50aWZpZXI6ICdwZGYnLFxuXHR0eXBlQ2hlY2s6IG1lZGlhT2JqID0+IHtcblx0XHQvLyBWZXJpZnkgaWYgdGhlcmUgaXMgbWFuZGF0b3J5ICdzcmMnIGZpZWxkXG5cdFx0aWYgKCFtZWRpYU9iai5oYXNBdHRyaWJ1dGUoJ3NyYycpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gVmVyaWZ5IGV4dGVuc2lvbnNcblx0XHRjb25zdCByZWdleEV4dCA9IG5ldyBSZWdFeHAoJ15wZGYkJyk7XG5cdFx0aWYgKHJlZ2V4RXh0LmV4ZWMobWVkaWFPYmouZ2V0RXh0ZW5zaW9uKCkpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBWZXJpZnkgbWltZSB0eXBlXG5cdFx0Y29uc3QgcmVnZXhNaW1lID0gbmV3IFJlZ0V4cCgnXmFwcGxpY2F0aW9uL3BkZiQnKTtcblx0XHRpZiAocmVnZXhNaW1lLmV4ZWMobWVkaWFPYmouZ2V0TWltZVR5cGUoKSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFZlcmlmeSB0eXBlXG5cdFx0aWYgKG1lZGlhT2JqLmdldFR5cGUoKSA9PT0gJ3BkZicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSBpcyBub3QgYSBwZGZcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHN0YXJ0dXA6IG1lZGlhT2JqID0+IHtcblx0XHQvLyBHZXQgdGhlIHBkZiB1cmxcblx0XHRjb25zdCB1cmwgPSBtZWRpYU9iai5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG5cdFx0Ly8gQ3JlYXRlIGNhbnZhcyBlbGVtZW50XG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cblx0XHQvLyBVcGRhdGUgbWVkaWFPYmogY29udGVudHMgd2l0aCB0aGUgY3JlYXRlZCBlbGVtZW50XG5cdFx0bWVkaWFPYmoucmVwbGFjZUNvbnRlbnRzKFtjYW52YXNdKTtcblxuXHRcdC8vIERpc2FibGUgd29ya2VycyBmb3Igbm93XG5cdFx0Ly8gVE9ETzogdmVyaWZ5IHdoYXQgd29ya2VycyBkbyBhbmQgaG93IHRvIGludGVncmF0ZSBpdFxuXHRcdFBERkpTLmRpc2FibGVXb3JrZXIgPSB0cnVlO1xuXG5cdFx0Ly8gQXN5bmNocm9ub3VzIGRvd25sb2FkIG9mIFBERlxuXHRcdGNvbnN0IGxvYWRpbmdUYXNrID0gUERGSlMuZ2V0RG9jdW1lbnQodXJsKTtcblx0XHRsb2FkaW5nVGFzay5wcm9taXNlLnRoZW4ocGRmID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdQREYgbG9hZGVkJyk7XG5cblx0XHRcdC8vIEZldGNoIHRoZSBmaXJzdCBwYWdlXG5cdFx0XHRjb25zdCBwYWdlTnVtYmVyID0gMTtcblx0XHRcdHBkZi5nZXRQYWdlKHBhZ2VOdW1iZXIpLnRoZW4ocGFnZSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdQYWdlIGxvYWRlZCcpO1xuXG5cdFx0XHRcdGNvbnN0IHNjYWxlID0gMS41O1xuXHRcdFx0XHRjb25zdCB2aWV3cG9ydCA9IHBhZ2UuZ2V0Vmlld3BvcnQoc2NhbGUpO1xuXG5cdFx0XHRcdC8vIFByZXBhcmUgY2FudmFzIHVzaW5nIFBERiBwYWdlIGRpbWVuc2lvbnNcblx0XHRcdFx0Y29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRcdFx0XHRjYW52YXMuaGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXHRcdFx0XHRjYW52YXMud2lkdGggPSB2aWV3cG9ydC53aWR0aDtcblxuXHRcdFx0XHQvLyBSZW5kZXIgUERGIHBhZ2UgaW50byBjYW52YXMgY29udGV4dFxuXHRcdFx0XHRjb25zdCByZW5kZXJDb250ZXh0ID0ge1xuXHRcdFx0XHRcdGNhbnZhc0NvbnRleHQ6IGNvbnRleHQsXG5cdFx0XHRcdFx0dmlld3BvcnRcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc3QgcmVuZGVyVGFzayA9IHBhZ2UucmVuZGVyKHJlbmRlckNvbnRleHQpO1xuXHRcdFx0XHRyZW5kZXJUYXNrLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdQYWdlIHJlbmRlcmVkJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSwgcmVhc29uID0+IHtcblx0XHRcdC8vIFBERiBsb2FkaW5nIGVycm9yXG5cdFx0XHRjb25zb2xlLmVycm9yKHJlYXNvbik7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBkZlBsdWdpbjtcbiJdfQ==

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_a2xgjegmr = function () {
						var path = '/home/dradeau/git/media_tag_v2/src/plugins/video.js',
						    hash = 'e171def7a6b9ba82903e543bcf8d812a08db546b',
						    global = new Function('return this')(),
						    gcv = '__coverage__',
						    coverageData = {
												path: '/home/dradeau/git/media_tag_v2/src/plugins/video.js',
												statementMap: {
																		'0': {
																								start: {
																														line: 7,
																														column: 20
																								},
																								end: {
																														line: 48,
																														column: 1
																								}
																		},
																		'1': {
																								start: {
																														line: 11,
																														column: 2
																								},
																								end: {
																														line: 13,
																														column: 3
																								}
																		},
																		'2': {
																								start: {
																														line: 12,
																														column: 3
																								},
																								end: {
																														line: 12,
																														column: 16
																								}
																		},
																		'3': {
																								start: {
																														line: 16,
																														column: 19
																								},
																								end: {
																														line: 16,
																														column: 47
																								}
																		},
																		'4': {
																								start: {
																														line: 17,
																														column: 2
																								},
																								end: {
																														line: 19,
																														column: 3
																								}
																		},
																		'5': {
																								start: {
																														line: 18,
																														column: 3
																								},
																								end: {
																														line: 18,
																														column: 15
																								}
																		},
																		'6': {
																								start: {
																														line: 22,
																														column: 20
																								},
																								end: {
																														line: 22,
																														column: 56
																								}
																		},
																		'7': {
																								start: {
																														line: 23,
																														column: 2
																								},
																								end: {
																														line: 25,
																														column: 3
																								}
																		},
																		'8': {
																								start: {
																														line: 24,
																														column: 3
																								},
																								end: {
																														line: 24,
																														column: 15
																								}
																		},
																		'9': {
																								start: {
																														line: 28,
																														column: 2
																								},
																								end: {
																														line: 30,
																														column: 3
																								}
																		},
																		'10': {
																								start: {
																														line: 29,
																														column: 3
																								},
																								end: {
																														line: 29,
																														column: 15
																								}
																		},
																		'11': {
																								start: {
																														line: 33,
																														column: 2
																								},
																								end: {
																														line: 33,
																														column: 15
																								}
																		},
																		'12': {
																								start: {
																														line: 37,
																														column: 18
																								},
																								end: {
																														line: 37,
																														column: 49
																								}
																		},
																		'13': {
																								start: {
																														line: 40,
																														column: 2
																								},
																								end: {
																														line: 40,
																														column: 60
																								}
																		},
																		'14': {
																								start: {
																														line: 43,
																														column: 2
																								},
																								end: {
																														line: 43,
																														column: 46
																								}
																		},
																		'15': {
																								start: {
																														line: 46,
																														column: 2
																								},
																								end: {
																														line: 46,
																														column: 38
																								}
																		}
												},
												fnMap: {
																		'0': {
																								name: '(anonymous_0)',
																								decl: {
																														start: {
																																				line: 9,
																																				column: 12
																														},
																														end: {
																																				line: 9,
																																				column: 13
																														}
																								},
																								loc: {
																														start: {
																																				line: 9,
																																				column: 24
																														},
																														end: {
																																				line: 34,
																																				column: 2
																														}
																								},
																								line: 9
																		},
																		'1': {
																								name: '(anonymous_1)',
																								decl: {
																														start: {
																																				line: 35,
																																				column: 10
																														},
																														end: {
																																				line: 35,
																																				column: 11
																														}
																								},
																								loc: {
																														start: {
																																				line: 35,
																																				column: 22
																														},
																														end: {
																																				line: 47,
																																				column: 2
																														}
																								},
																								line: 35
																		}
												},
												branchMap: {
																		'0': {
																								loc: {
																														start: {
																																				line: 11,
																																				column: 2
																														},
																														end: {
																																				line: 13,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 11,
																																				column: 2
																														},
																														end: {
																																				line: 13,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 11,
																																				column: 2
																														},
																														end: {
																																				line: 13,
																																				column: 3
																														}
																								}],
																								line: 11
																		},
																		'1': {
																								loc: {
																														start: {
																																				line: 17,
																																				column: 2
																														},
																														end: {
																																				line: 19,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 17,
																																				column: 2
																														},
																														end: {
																																				line: 19,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 17,
																																				column: 2
																														},
																														end: {
																																				line: 19,
																																				column: 3
																														}
																								}],
																								line: 17
																		},
																		'2': {
																								loc: {
																														start: {
																																				line: 23,
																																				column: 2
																														},
																														end: {
																																				line: 25,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 23,
																																				column: 2
																														},
																														end: {
																																				line: 25,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 23,
																																				column: 2
																														},
																														end: {
																																				line: 25,
																																				column: 3
																														}
																								}],
																								line: 23
																		},
																		'3': {
																								loc: {
																														start: {
																																				line: 28,
																																				column: 2
																														},
																														end: {
																																				line: 30,
																																				column: 3
																														}
																								},
																								type: 'if',
																								locations: [{
																														start: {
																																				line: 28,
																																				column: 2
																														},
																														end: {
																																				line: 30,
																																				column: 3
																														}
																								}, {
																														start: {
																																				line: 28,
																																				column: 2
																														},
																														end: {
																																				line: 30,
																																				column: 3
																														}
																								}],
																								line: 28
																		}
												},
												s: {
																		'0': 0,
																		'1': 0,
																		'2': 0,
																		'3': 0,
																		'4': 0,
																		'5': 0,
																		'6': 0,
																		'7': 0,
																		'8': 0,
																		'9': 0,
																		'10': 0,
																		'11': 0,
																		'12': 0,
																		'13': 0,
																		'14': 0,
																		'15': 0
												},
												f: {
																		'0': 0,
																		'1': 0
												},
												b: {
																		'0': [0, 0],
																		'1': [0, 0],
																		'2': [0, 0],
																		'3': [0, 0]
												},
												_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
						},
						    coverage = global[gcv] || (global[gcv] = {});

						if (coverage[path] && coverage[path].hash === hash) {
												return coverage[path];
						}

						coverageData.hash = hash;
						return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
						value: true
});
/* global document */

/**
 * @module VideoPlugin
 * @since 0.2.0
 */
var VideoPlugin = (++cov_a2xgjegmr.s[0], {
						identifier: 'video',
						typeCheck: function typeCheck(mediaObj) {
												++cov_a2xgjegmr.f[0];
												++cov_a2xgjegmr.s[1];

												// Verify if there is mandatory 'src' field
												if (!mediaObj.hasAttribute('src')) {
																		++cov_a2xgjegmr.b[0][0];
																		++cov_a2xgjegmr.s[2];

																		return false;
												} else {
																		++cov_a2xgjegmr.b[0][1];
												}

												// Verify extensions
												var regexExt = (++cov_a2xgjegmr.s[3], new RegExp('^mp4|ogg|webm$'));
												++cov_a2xgjegmr.s[4];
												if (regexExt.exec(mediaObj.getExtension())) {
																		++cov_a2xgjegmr.b[1][0];
																		++cov_a2xgjegmr.s[5];

																		return true;
												} else {
																		++cov_a2xgjegmr.b[1][1];
												}

												// Verify mime type
												var regexMime = (++cov_a2xgjegmr.s[6], new RegExp('^video/(mp4|ogg|webm)$'));
												++cov_a2xgjegmr.s[7];
												if (regexMime.exec(mediaObj.getMimeType())) {
																		++cov_a2xgjegmr.b[2][0];
																		++cov_a2xgjegmr.s[8];

																		return true;
												} else {
																		++cov_a2xgjegmr.b[2][1];
												}

												// Verify type
												++cov_a2xgjegmr.s[9];
												if (mediaObj.getType() === 'video') {
																		++cov_a2xgjegmr.b[3][0];
																		++cov_a2xgjegmr.s[10];

																		return true;
												} else {
																		++cov_a2xgjegmr.b[3][1];
												}

												// Otherwise is not an video
												++cov_a2xgjegmr.s[11];
												return false;
						},
						startup: function startup(mediaObj) {
												++cov_a2xgjegmr.f[1];

												// Create video element
												var element = (++cov_a2xgjegmr.s[12], document.createElement('video'));

												// Set the source file
												++cov_a2xgjegmr.s[13];
												element.setAttribute('src', mediaObj.getAttribute('src'));

												// Set all data-attr-something to the element.setAttribute('something', value)
												++cov_a2xgjegmr.s[14];
												mediaObj.utilsSetAllDataAttributes(element);

												// Update mediaObj contents with the created element
												++cov_a2xgjegmr.s[15];
												mediaObj.replaceContents([element]);
						}
});

exports.default = VideoPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3ZpZGVvLmpzIl0sIm5hbWVzIjpbIlZpZGVvUGx1Z2luIiwiaWRlbnRpZmllciIsInR5cGVDaGVjayIsIm1lZGlhT2JqIiwiaGFzQXR0cmlidXRlIiwicmVnZXhFeHQiLCJSZWdFeHAiLCJleGVjIiwiZ2V0RXh0ZW5zaW9uIiwicmVnZXhNaW1lIiwiZ2V0TWltZVR5cGUiLCJnZXRUeXBlIiwic3RhcnR1cCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ1dGlsc1NldEFsbERhdGFBdHRyaWJ1dGVzIiwicmVwbGFjZUNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7O0FBSUEsSUFBTUEscUNBQWM7QUFDbkJDLGtCQUFZLE9BRE87QUFFbkJDLGlCQUFXLDZCQUFZO0FBQUE7QUFBQTs7QUFDaEI7QUFDTixnQkFBSSxDQUFDQyxTQUFTQyxZQUFULENBQXNCLEtBQXRCLENBQUwsRUFBbUM7QUFBQTtBQUFBOztBQUNsQyx5QkFBTyxLQUFQO0FBQ0EsYUFGRDtBQUFBO0FBQUE7O0FBSU07QUFDTixnQkFBTUMsa0NBQVcsSUFBSUMsTUFBSixDQUFXLGdCQUFYLENBQVgsQ0FBTjtBQVBzQjtBQVF0QixnQkFBSUQsU0FBU0UsSUFBVCxDQUFjSixTQUFTSyxZQUFULEVBQWQsQ0FBSixFQUE0QztBQUFBO0FBQUE7O0FBQzNDLHlCQUFPLElBQVA7QUFDQSxhQUZEO0FBQUE7QUFBQTs7QUFJTTtBQUNOLGdCQUFNQyxtQ0FBWSxJQUFJSCxNQUFKLENBQVcsd0JBQVgsQ0FBWixDQUFOO0FBYnNCO0FBY3RCLGdCQUFJRyxVQUFVRixJQUFWLENBQWVKLFNBQVNPLFdBQVQsRUFBZixDQUFKLEVBQTRDO0FBQUE7QUFBQTs7QUFDM0MseUJBQU8sSUFBUDtBQUNBLGFBRkQ7QUFBQTtBQUFBOztBQUlNO0FBbEJnQjtBQW1CdEIsZ0JBQUlQLFNBQVNRLE9BQVQsT0FBdUIsT0FBM0IsRUFBb0M7QUFBQTtBQUFBOztBQUNuQyx5QkFBTyxJQUFQO0FBQ0EsYUFGRDtBQUFBO0FBQUE7O0FBSU07QUF2QmdCO0FBd0J0QixtQkFBTyxLQUFQO0FBQ0EsT0EzQmtCO0FBNEJuQkMsZUFBUywyQkFBWTtBQUFBOztBQUNkO0FBQ04sZ0JBQU1DLGtDQUFVQyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVYsQ0FBTjs7QUFFTTtBQUpjO0FBS3BCRixvQkFBUUcsWUFBUixDQUFxQixLQUFyQixFQUE0QmIsU0FBU2MsWUFBVCxDQUFzQixLQUF0QixDQUE1Qjs7QUFFTTtBQVBjO0FBUXBCZCxxQkFBU2UseUJBQVQsQ0FBbUNMLE9BQW5DOztBQUVNO0FBVmM7QUFXcEJWLHFCQUFTZ0IsZUFBVCxDQUF5QixDQUFDTixPQUFELENBQXpCO0FBQ0E7QUF4Q2tCLENBQWQsQ0FBTjs7a0JBMkNlYixXIiwiZmlsZSI6InZpZGVvLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2RyYWRlYXUvZ2l0L21lZGlhX3RhZ192MiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBkb2N1bWVudCAqL1xuXG4vKipcbiAqIEBtb2R1bGUgVmlkZW9QbHVnaW5cbiAqIEBzaW5jZSAwLjIuMFxuICovXG5jb25zdCBWaWRlb1BsdWdpbiA9IHtcblx0aWRlbnRpZmllcjogJ3ZpZGVvJyxcblx0dHlwZUNoZWNrOiBtZWRpYU9iaiA9PiB7XG4gICAgICAgIC8vIFZlcmlmeSBpZiB0aGVyZSBpcyBtYW5kYXRvcnkgJ3NyYycgZmllbGRcblx0XHRpZiAoIW1lZGlhT2JqLmhhc0F0dHJpYnV0ZSgnc3JjJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cbiAgICAgICAgLy8gVmVyaWZ5IGV4dGVuc2lvbnNcblx0XHRjb25zdCByZWdleEV4dCA9IG5ldyBSZWdFeHAoJ15tcDR8b2dnfHdlYm0kJyk7XG5cdFx0aWYgKHJlZ2V4RXh0LmV4ZWMobWVkaWFPYmouZ2V0RXh0ZW5zaW9uKCkpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cbiAgICAgICAgLy8gVmVyaWZ5IG1pbWUgdHlwZVxuXHRcdGNvbnN0IHJlZ2V4TWltZSA9IG5ldyBSZWdFeHAoJ152aWRlby8obXA0fG9nZ3x3ZWJtKSQnKTtcblx0XHRpZiAocmVnZXhNaW1lLmV4ZWMobWVkaWFPYmouZ2V0TWltZVR5cGUoKSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuICAgICAgICAvLyBWZXJpZnkgdHlwZVxuXHRcdGlmIChtZWRpYU9iai5nZXRUeXBlKCkgPT09ICd2aWRlbycpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuICAgICAgICAvLyBPdGhlcndpc2UgaXMgbm90IGFuIHZpZGVvXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRzdGFydHVwOiBtZWRpYU9iaiA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSB2aWRlbyBlbGVtZW50XG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBzb3VyY2UgZmlsZVxuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBtZWRpYU9iai5nZXRBdHRyaWJ1dGUoJ3NyYycpKTtcblxuICAgICAgICAvLyBTZXQgYWxsIGRhdGEtYXR0ci1zb21ldGhpbmcgdG8gdGhlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzb21ldGhpbmcnLCB2YWx1ZSlcblx0XHRtZWRpYU9iai51dGlsc1NldEFsbERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBtZWRpYU9iaiBjb250ZW50cyB3aXRoIHRoZSBjcmVhdGVkIGVsZW1lbnRcblx0XHRtZWRpYU9iai5yZXBsYWNlQ29udGVudHMoW2VsZW1lbnRdKTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QbHVnaW47XG4iXX0=

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// This is (almost) directly from Node.js utils
// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

var getName = __webpack_require__(112);
var getProperties = __webpack_require__(162);
var getEnumerableProperties = __webpack_require__(159);

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
    stylize: function (str) { return str; }
  };
  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
}

// Returns true if object is a DOM element.
var isDOMElement = function (object) {
  if (typeof HTMLElement === 'object') {
    return object instanceof HTMLElement;
  } else {
    return object &&
      typeof object === 'object' &&
      object.nodeType === 1 &&
      typeof object.nodeName === 'string';
  }
};

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (value && typeof value.inspect === 'function' &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes);
    if (typeof ret !== 'string') {
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
    if ('outerHTML' in value) {
      return value.outerHTML;
      // This value does not have an outerHTML attribute,
      //   it could still be an XML element
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
          var container = document.createElementNS(ns, '_');

          container.appendChild(value.cloneNode(false));
          html = container.innerHTML
            .replace('><', '>' + value.innerHTML + '<');
          container.innerHTML = '';
          return html;
        }
      } catch (err) {
        // This could be a non-native DOM implementation,
        //   continue with the normal flow:
        //   printing the element as if it is an object.
      }
    }
  }

  // Look up the keys of the object.
  var visibleKeys = getEnumerableProperties(value);
  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

  // Some type of object without properties can be shortcutted.
  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
  // a `stack` plus `description` property; ignore those for consistency.
  if (keys.length === 0 || (isError(value) && (
      (keys.length === 1 && keys[0] === 'stack') ||
      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
     ))) {
    if (typeof value === 'function') {
      var name = getName(value);
      var nameSuffix = name ? ': ' + name : '';
      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (typeof value === 'function') {
    var name = getName(value);
    var nameSuffix = name ? ': ' + name : '';
    base = ' [Function' + nameSuffix + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
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
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
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
  switch (typeof value) {
    case 'undefined':
      return ctx.stylize('undefined', 'undefined');

    case 'string':
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');

    case 'number':
      if (value === 0 && (1/value) === -Infinity) {
        return ctx.stylize('-0', 'number');
      }
      return ctx.stylize('' + value, 'number');

    case 'boolean':
      return ctx.stylize('' + value, 'boolean');
  }
  // For some reason typeof null is "object", so special case here.
  if (value === null) {
    return ctx.stylize('null', 'null');
  }
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str;
  if (value.__lookupGetter__) {
    if (value.__lookupGetter__(key)) {
      if (value.__lookupSetter__(key)) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (value.__lookupSetter__(key)) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
  }
  if (visibleKeys.indexOf(key) < 0) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(value[key]) < 0) {
      if (recurseTimes === null) {
        str = formatValue(ctx, value[key], null);
      } else {
        str = formatValue(ctx, value[key], recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (typeof name === 'undefined') {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

function isArray(ar) {
  return Array.isArray(ar) ||
         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
}

function isRegExp(re) {
  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
}

function isDate(d) {
  return typeof d === 'object' && objectToString(d) === '[object Date]';
}

function isError(e) {
  return typeof e === 'object' && objectToString(e) === '[object Error]';
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(9)
  , toIndex  = __webpack_require__(42)
  , toLength = __webpack_require__(8);
module.exports = function fill(value /*, start = 0, end = @length */){
  var O      = toObject(this)
    , length = toLength(O.length)
    , aLen   = arguments.length
    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : toIndex(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7)
  , createDesc      = __webpack_require__(32);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(5)('match');
module.exports = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var isObject       = __webpack_require__(4)
  , setPrototypeOf = __webpack_require__(97).set;
module.exports = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(49)
  , ITERATOR   = __webpack_require__(5)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(19);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(37)
  , descriptor     = __webpack_require__(32)
  , setToStringTag = __webpack_require__(50)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(13)(IteratorPrototype, __webpack_require__(5)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(36)
  , $export        = __webpack_require__(0)
  , redefine       = __webpack_require__(14)
  , hide           = __webpack_require__(13)
  , has            = __webpack_require__(11)
  , Iterators      = __webpack_require__(49)
  , $iterCreate    = __webpack_require__(92)
  , setToStringTag = __webpack_require__(50)
  , getPrototypeOf = __webpack_require__(18)
  , ITERATOR       = __webpack_require__(5)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , macrotask = __webpack_require__(104).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(19)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4)
  , anObject = __webpack_require__(1);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(27)(Function.call, __webpack_require__(17).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(75)('keys')
  , uid    = __webpack_require__(43);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(1)
  , aFunction = __webpack_require__(12)
  , SPECIES   = __webpack_require__(5)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33)
  , defined   = __webpack_require__(20);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(71)
  , defined  = __webpack_require__(20);

module.exports = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(33)
  , defined   = __webpack_require__(20);

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(27)
  , invoke             = __webpack_require__(70)
  , html               = __webpack_require__(88)
  , cel                = __webpack_require__(85)
  , global             = __webpack_require__(2)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(19)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(2)
  , DESCRIPTORS    = __webpack_require__(6)
  , LIBRARY        = __webpack_require__(36)
  , $typed         = __webpack_require__(76)
  , hide           = __webpack_require__(13)
  , redefineAll    = __webpack_require__(40)
  , fails          = __webpack_require__(3)
  , anInstance     = __webpack_require__(35)
  , toInteger      = __webpack_require__(33)
  , toLength       = __webpack_require__(8)
  , gOPN           = __webpack_require__(38).f
  , dP             = __webpack_require__(7).f
  , arrayFill      = __webpack_require__(83)
  , setToStringTag = __webpack_require__(50)
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = global[ARRAY_BUFFER]
  , $DataView      = global[DATA_VIEW]
  , Math           = global.Math
  , RangeError     = global.RangeError
  , Infinity       = global.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value)
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
};

var validateArrayBufferArguments = function(that, length){
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = toLength(numberLength);
  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if(!$typed.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = toInteger(byteOffset);
    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(DESCRIPTORS){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!fails(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !fails(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
    };
    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(2)
  , core           = __webpack_require__(26)
  , LIBRARY        = __webpack_require__(36)
  , wksExt         = __webpack_require__(140)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(59)
  , ITERATOR  = __webpack_require__(5)('iterator')
  , Iterators = __webpack_require__(49);
module.exports = __webpack_require__(26).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(47)
  , step             = __webpack_require__(128)
  , Iterators        = __webpack_require__(49)
  , toIObject        = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(93)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(354);


/***/ }),
/* 110 */
/***/ (function(module, exports) {

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

function exclude () {
  var excludes = [].slice.call(arguments);

  function excludeProps (res, obj) {
    Object.keys(obj).forEach(function (key) {
      if (!~excludes.indexOf(key)) res[key] = obj[key];
    });
  }

  return function extendExclude () {
    var args = [].slice.call(arguments)
      , i = 0
      , res = {};

    for (; i < args.length; i++) {
      excludeProps(res, args[i]);
    }

    return res;
  };
};

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

function AssertionError (message, _props, ssf) {
  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
    , props = extend(_props || {});

  // default values
  this.message = message || 'Unspecified AssertionError';
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
    } catch(e) {
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

AssertionError.prototype.name = 'AssertionError';

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

AssertionError.prototype.toJSON = function (stack) {
  var extend = exclude('constructor', 'toJSON', 'stack')
    , props = extend({ name: this.name }, this);

  // include stack if exists and not turned off
  if (false !== stack && this.stack) {
    props.stack = this.stack;
  }

  return props;
};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

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

module.exports = function (obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

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

module.exports = function (func) {
  if (func.name) return func.name;

  var match = /^\s?function ([^(]*)\(/.exec(func);
  return match && match[1] ? match[1] : "";
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - getPathInfo utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var hasProperty = __webpack_require__(114);

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
  var parsed = parsePath(path),
      last = parsed[parsed.length - 1];

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

function parsePath (path) {
  var str = path.replace(/([^\\])\[/g, '$1.[')
    , parts = str.match(/(\\\.|[^.]+?)+/g);
  return parts.map(function (value) {
    var re = /^\[(\d+)\]$/
      , mArr = re.exec(value);
    if (mArr) return { i: parseFloat(mArr[1]) };
    else return { p: value.replace(/\\([.\[\]])/g, '$1') };
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

function _getPathValue (parsed, obj, index) {
  var tmp = obj
    , res;

  index = (index === undefined ? parsed.length : index);

  for (var i = 0, l = index; i < l; i++) {
    var part = parsed[i];
    if (tmp) {
      if ('undefined' !== typeof part.p)
        tmp = tmp[part.p];
      else if ('undefined' !== typeof part.i)
        tmp = tmp[part.i];
      if (i == (l - 1)) res = tmp;
    } else {
      res = undefined;
    }
  }
  return res;
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - hasProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var type = __webpack_require__(109);

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
    'number': Number
  , 'string': String
};

module.exports = function hasProperty(name, obj) {
  var ot = type(obj);

  // Bad Object, obviously no props at all
  if(ot === 'null' || ot === 'undefined')
    return false;

  // The `in` operator does not work with certain literals
  // box these before the check
  if(literals[ot] && typeof obj !== 'object')
    obj = new literals[ot](obj);

  return name in obj;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var inspect = __webpack_require__(82);
var config = __webpack_require__(46);

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

module.exports = function (obj) {
  var str = inspect(obj)
    , type = Object.prototype.toString.call(obj);

  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
    if (type === '[object Function]') {
      return !obj.name || obj.name === ''
        ? '[Function]'
        : '[Function: ' + obj.name + ']';
    } else if (type === '[object Array]') {
      return '[ Array(' + obj.length + ') ]';
    } else if (type === '[object Object]') {
      var keys = Object.keys(obj)
        , kstr = keys.length > 2
          ? keys.splice(0, 2).join(', ') + ', ...'
          : keys.join(', ');
      return '{ Object (' + kstr + ') }';
    } else {
      return str;
    }
  } else {
    return str;
  }
};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

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

module.exports = function (assertion, object, includeAll) {
  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

  if (!object.__flags) {
    object.__flags = Object.create(null);
  }

  includeAll = arguments.length === 3 ? includeAll : true;

  for (var flag in flags) {
    if (includeAll ||
        (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
      object.__flags[flag] = flags[flag];
    }
  }
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(19);
module.exports = function(it, msg){
  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
  return +it;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(9)
  , toIndex  = __webpack_require__(42)
  , toLength = __webpack_require__(8);

module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject(this)
    , len   = toLength(O.length)
    , to    = toIndex(target, len)
    , from  = toIndex(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(48);

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(12)
  , toObject  = __webpack_require__(9)
  , IObject   = __webpack_require__(60)
  , toLength  = __webpack_require__(8);

module.exports = function(that, callbackfn, aLen, memo, isRight){
  aFunction(callbackfn);
  var O      = toObject(that)
    , self   = IObject(O)
    , length = toLength(O.length)
    , index  = isRight ? length - 1 : 0
    , i      = isRight ? -1 : 1;
  if(aLen < 2)for(;;){
    if(index in self){
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if(isRight ? index < 0 : length <= index){
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction  = __webpack_require__(12)
  , isObject   = __webpack_require__(4)
  , invoke     = __webpack_require__(70)
  , arraySlice = [].slice
  , factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /*, args... */){
  var fn       = aFunction(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if(isObject(fn.prototype))bound.prototype = fn.prototype;
  return bound;
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__(7).f
  , create      = __webpack_require__(37)
  , redefineAll = __webpack_require__(40)
  , ctx         = __webpack_require__(27)
  , anInstance  = __webpack_require__(35)
  , defined     = __webpack_require__(20)
  , forOf       = __webpack_require__(48)
  , $iterDefine = __webpack_require__(93)
  , step        = __webpack_require__(128)
  , setSpecies  = __webpack_require__(41)
  , DESCRIPTORS = __webpack_require__(6)
  , fastKey     = __webpack_require__(31).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(59)
  , from    = __webpack_require__(119);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll       = __webpack_require__(40)
  , getWeak           = __webpack_require__(31).getWeak
  , anObject          = __webpack_require__(1)
  , isObject          = __webpack_require__(4)
  , anInstance        = __webpack_require__(35)
  , forOf             = __webpack_require__(48)
  , createArrayMethod = __webpack_require__(23)
  , $has              = __webpack_require__(11)
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(3)(function(){
  return Object.defineProperty(__webpack_require__(85)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(4)
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(1);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 129 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(39)
  , gOPS     = __webpack_require__(74)
  , pIE      = __webpack_require__(61)
  , toObject = __webpack_require__(9)
  , IObject  = __webpack_require__(60)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(1)
  , getKeys  = __webpack_require__(39);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16)
  , gOPN      = __webpack_require__(38).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(11)
  , toIObject    = __webpack_require__(16)
  , arrayIndexOf = __webpack_require__(66)(false)
  , IE_PROTO     = __webpack_require__(98)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(39)
  , toIObject = __webpack_require__(16)
  , isEnum    = __webpack_require__(61).f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN     = __webpack_require__(38)
  , gOPS     = __webpack_require__(74)
  , anObject = __webpack_require__(1)
  , Reflect  = __webpack_require__(2).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = gOPN.f(anObject(it))
    , getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(2).parseFloat
  , $trim       = __webpack_require__(51).trim;

module.exports = 1 / $parseFloat(__webpack_require__(103) + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim(String(str), 3)
    , result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(2).parseInt
  , $trim     = __webpack_require__(51).trim
  , ws        = __webpack_require__(103)
  , hex       = /^[\-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),
/* 138 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(8)
  , repeat   = __webpack_require__(102)
  , defined  = __webpack_require__(20);

module.exports = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength || fillStr == '')return S;
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(122);

// 23.1 Map Objects
module.exports = __webpack_require__(67)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(7).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(69)
});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(122);

// 23.2 Set Objects
module.exports = __webpack_require__(67)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each         = __webpack_require__(23)(0)
  , redefine     = __webpack_require__(14)
  , meta         = __webpack_require__(31)
  , assign       = __webpack_require__(130)
  , weak         = __webpack_require__(124)
  , isObject     = __webpack_require__(4)
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(67)('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 145 */,
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chai = __webpack_require__(148);

var _chai2 = _interopRequireDefault(_chai);

var _mediaTag = __webpack_require__(77);

var _mediaTag2 = _interopRequireDefault(_mediaTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document, describe, it */
describe('Create different media tag contents: ', function () {
	it('can create a media-tag containing an image', function () {
		// Create container for media tag
		var mediaTagContainer = document.createElement('media-tag');
		mediaTagContainer.setAttribute('src', 'image-without-extension');
		mediaTagContainer.setAttribute('data-type', 'image');
		mediaTagContainer.setAttribute('data-attr-width', '300px');
		mediaTagContainer.setAttribute('data-attr-height', '200px');

		// Create contents based on the attributes
		(0, _mediaTag2.default)(mediaTagContainer);

		// Create the expected element
		var expectedResult = document.createElement('img');
		expectedResult.setAttribute('src', 'image-without-extension');
		expectedResult.setAttribute('width', '300px');
		expectedResult.setAttribute('height', '200px');

		// Compare expected contents
		// Like this we avoid problems when browsers change the order
		// of the attributes
		_chai2.default.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), 'media tag result element is like the expected element');
	});

	it('can create a media-tag containing an audio', function () {
		// Create container for media tag
		var mediaTagContainer = document.createElement('media-tag');
		mediaTagContainer.setAttribute('src', 'alterway.mp3');
		mediaTagContainer.setAttribute('data-type', 'audio');
		mediaTagContainer.setAttribute('data-attr-controls', 'controls');

		// Create contents based on the attributes
		(0, _mediaTag2.default)(mediaTagContainer);

		// Create the expected element
		var expectedResult = document.createElement('audio');
		expectedResult.setAttribute('src', 'alterway.mp3');
		expectedResult.setAttribute('controls', 'controls');

		// Compare expected contents
		// Like this we avoid problems when browsers change the order
		// of the attributes
		_chai2.default.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), 'media tag result element is like the expected element');
	});

	it('can create a media-tag containing a video', function () {
		// Create container for media tag
		var mediaTagContainer = document.createElement('media-tag');
		mediaTagContainer.setAttribute('src', 'cube.mp4');
		mediaTagContainer.setAttribute('data-type', 'video');
		mediaTagContainer.setAttribute('data-attr-width', '300px');
		mediaTagContainer.setAttribute('data-attr-height', '200px');

		// Create contents based on the attributes
		(0, _mediaTag2.default)(mediaTagContainer);

		// Create the expected element
		var expectedResult = document.createElement('video');
		expectedResult.setAttribute('src', 'cube.mp4');
		expectedResult.setAttribute('width', '300px');
		expectedResult.setAttribute('height', '200px');

		// Compare expected contents
		// Like this we avoid problems when browsers change the order
		// of the attributes
		_chai2.default.assert.isTrue(mediaTagContainer.firstChild.isEqualNode(expectedResult), 'media tag result element is like the expected element');
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvbWVkaWEtdGFnLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJtZWRpYVRhZ0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImV4cGVjdGVkUmVzdWx0IiwiYXNzZXJ0IiwiaXNUcnVlIiwiZmlyc3RDaGlsZCIsImlzRXF1YWxOb2RlIl0sIm1hcHBpbmdzIjoiOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUZBO0FBSUFBLFNBQVMsdUNBQVQsRUFBa0QsWUFBTTtBQUN2REMsSUFBRyw0Q0FBSCxFQUFpRCxZQUFNO0FBQ3REO0FBQ0EsTUFBTUMsb0JBQW9CQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQTFCO0FBQ0FGLG9CQUFrQkcsWUFBbEIsQ0FBK0IsS0FBL0IsRUFBc0MseUJBQXRDO0FBQ0FILG9CQUFrQkcsWUFBbEIsQ0FBK0IsV0FBL0IsRUFBNEMsT0FBNUM7QUFDQUgsb0JBQWtCRyxZQUFsQixDQUErQixpQkFBL0IsRUFBa0QsT0FBbEQ7QUFDQUgsb0JBQWtCRyxZQUFsQixDQUErQixrQkFBL0IsRUFBbUQsT0FBbkQ7O0FBRUE7QUFDQSwwQkFBU0gsaUJBQVQ7O0FBRUE7QUFDQSxNQUFNSSxpQkFBaUJILFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdkI7QUFDQUUsaUJBQWVELFlBQWYsQ0FBNEIsS0FBNUIsRUFBbUMseUJBQW5DO0FBQ0FDLGlCQUFlRCxZQUFmLENBQTRCLE9BQTVCLEVBQXFDLE9BQXJDO0FBQ0FDLGlCQUFlRCxZQUFmLENBQTRCLFFBQTVCLEVBQXNDLE9BQXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFLRSxNQUFMLENBQVlDLE1BQVosQ0FBbUJOLGtCQUFrQk8sVUFBbEIsQ0FBNkJDLFdBQTdCLENBQXlDSixjQUF6QyxDQUFuQixFQUE2RSx1REFBN0U7QUFDQSxFQXJCRDs7QUF1QkFMLElBQUcsNENBQUgsRUFBaUQsWUFBTTtBQUN0RDtBQUNBLE1BQU1DLG9CQUFvQkMsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUExQjtBQUNBRixvQkFBa0JHLFlBQWxCLENBQStCLEtBQS9CLEVBQXNDLGNBQXRDO0FBQ0FILG9CQUFrQkcsWUFBbEIsQ0FBK0IsV0FBL0IsRUFBNEMsT0FBNUM7QUFDQUgsb0JBQWtCRyxZQUFsQixDQUErQixvQkFBL0IsRUFBcUQsVUFBckQ7O0FBRUE7QUFDQSwwQkFBU0gsaUJBQVQ7O0FBRUE7QUFDQSxNQUFNSSxpQkFBaUJILFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBdkI7QUFDQUUsaUJBQWVELFlBQWYsQ0FBNEIsS0FBNUIsRUFBbUMsY0FBbkM7QUFDQUMsaUJBQWVELFlBQWYsQ0FBNEIsVUFBNUIsRUFBd0MsVUFBeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQUtFLE1BQUwsQ0FBWUMsTUFBWixDQUFtQk4sa0JBQWtCTyxVQUFsQixDQUE2QkMsV0FBN0IsQ0FBeUNKLGNBQXpDLENBQW5CLEVBQTZFLHVEQUE3RTtBQUNBLEVBbkJEOztBQXFCQUwsSUFBRywyQ0FBSCxFQUFnRCxZQUFNO0FBQ3JEO0FBQ0EsTUFBTUMsb0JBQW9CQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQTFCO0FBQ0FGLG9CQUFrQkcsWUFBbEIsQ0FBK0IsS0FBL0IsRUFBc0MsVUFBdEM7QUFDQUgsb0JBQWtCRyxZQUFsQixDQUErQixXQUEvQixFQUE0QyxPQUE1QztBQUNBSCxvQkFBa0JHLFlBQWxCLENBQStCLGlCQUEvQixFQUFrRCxPQUFsRDtBQUNBSCxvQkFBa0JHLFlBQWxCLENBQStCLGtCQUEvQixFQUFtRCxPQUFuRDs7QUFFQTtBQUNBLDBCQUFTSCxpQkFBVDs7QUFFQTtBQUNBLE1BQU1JLGlCQUFpQkgsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUF2QjtBQUNBRSxpQkFBZUQsWUFBZixDQUE0QixLQUE1QixFQUFtQyxVQUFuQztBQUNBQyxpQkFBZUQsWUFBZixDQUE0QixPQUE1QixFQUFxQyxPQUFyQztBQUNBQyxpQkFBZUQsWUFBZixDQUE0QixRQUE1QixFQUFzQyxPQUF0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBS0UsTUFBTCxDQUFZQyxNQUFaLENBQW1CTixrQkFBa0JPLFVBQWxCLENBQTZCQyxXQUE3QixDQUF5Q0osY0FBekMsQ0FBbkIsRUFBNkUsdURBQTdFO0FBQ0EsRUFyQkQ7QUFzQkEsQ0FuRUQiLCJmaWxlIjoibWVkaWEtdGFnLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2RyYWRlYXUvZ2l0L21lZGlhX3RhZ192MiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBkb2N1bWVudCwgZGVzY3JpYmUsIGl0ICovXG5pbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBtZWRpYVRhZyBmcm9tICcuLi9zcmMvbWVkaWEtdGFnJztcblxuZGVzY3JpYmUoJ0NyZWF0ZSBkaWZmZXJlbnQgbWVkaWEgdGFnIGNvbnRlbnRzOiAnLCAoKSA9PiB7XG5cdGl0KCdjYW4gY3JlYXRlIGEgbWVkaWEtdGFnIGNvbnRhaW5pbmcgYW4gaW1hZ2UnLCAoKSA9PiB7XG5cdFx0Ly8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgbWVkaWEgdGFnXG5cdFx0Y29uc3QgbWVkaWFUYWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZWRpYS10YWcnKTtcblx0XHRtZWRpYVRhZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWFnZS13aXRob3V0LWV4dGVuc2lvbicpO1xuXHRcdG1lZGlhVGFnQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgJ2ltYWdlJyk7XG5cdFx0bWVkaWFUYWdDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWF0dHItd2lkdGgnLCAnMzAwcHgnKTtcblx0XHRtZWRpYVRhZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0ci1oZWlnaHQnLCAnMjAwcHgnKTtcblxuXHRcdC8vIENyZWF0ZSBjb250ZW50cyBiYXNlZCBvbiB0aGUgYXR0cmlidXRlc1xuXHRcdG1lZGlhVGFnKG1lZGlhVGFnQ29udGFpbmVyKTtcblxuXHRcdC8vIENyZWF0ZSB0aGUgZXhwZWN0ZWQgZWxlbWVudFxuXHRcdGNvbnN0IGV4cGVjdGVkUmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0ZXhwZWN0ZWRSZXN1bHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaW1hZ2Utd2l0aG91dC1leHRlbnNpb24nKTtcblx0XHRleHBlY3RlZFJlc3VsdC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzMwMHB4Jyk7XG5cdFx0ZXhwZWN0ZWRSZXN1bHQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMjAwcHgnKTtcblxuXHRcdC8vIENvbXBhcmUgZXhwZWN0ZWQgY29udGVudHNcblx0XHQvLyBMaWtlIHRoaXMgd2UgYXZvaWQgcHJvYmxlbXMgd2hlbiBicm93c2VycyBjaGFuZ2UgdGhlIG9yZGVyXG5cdFx0Ly8gb2YgdGhlIGF0dHJpYnV0ZXNcblx0XHRjaGFpLmFzc2VydC5pc1RydWUobWVkaWFUYWdDb250YWluZXIuZmlyc3RDaGlsZC5pc0VxdWFsTm9kZShleHBlY3RlZFJlc3VsdCksICdtZWRpYSB0YWcgcmVzdWx0IGVsZW1lbnQgaXMgbGlrZSB0aGUgZXhwZWN0ZWQgZWxlbWVudCcpO1xuXHR9KTtcblxuXHRpdCgnY2FuIGNyZWF0ZSBhIG1lZGlhLXRhZyBjb250YWluaW5nIGFuIGF1ZGlvJywgKCkgPT4ge1xuXHRcdC8vIENyZWF0ZSBjb250YWluZXIgZm9yIG1lZGlhIHRhZ1xuXHRcdGNvbnN0IG1lZGlhVGFnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWVkaWEtdGFnJyk7XG5cdFx0bWVkaWFUYWdDb250YWluZXIuc2V0QXR0cmlidXRlKCdzcmMnLCAnYWx0ZXJ3YXkubXAzJyk7XG5cdFx0bWVkaWFUYWdDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnLCAnYXVkaW8nKTtcblx0XHRtZWRpYVRhZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0ci1jb250cm9scycsICdjb250cm9scycpO1xuXG5cdFx0Ly8gQ3JlYXRlIGNvbnRlbnRzIGJhc2VkIG9uIHRoZSBhdHRyaWJ1dGVzXG5cdFx0bWVkaWFUYWcobWVkaWFUYWdDb250YWluZXIpO1xuXG5cdFx0Ly8gQ3JlYXRlIHRoZSBleHBlY3RlZCBlbGVtZW50XG5cdFx0Y29uc3QgZXhwZWN0ZWRSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuXHRcdGV4cGVjdGVkUmVzdWx0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2FsdGVyd2F5Lm1wMycpO1xuXHRcdGV4cGVjdGVkUmVzdWx0LnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAnY29udHJvbHMnKTtcblxuXHRcdC8vIENvbXBhcmUgZXhwZWN0ZWQgY29udGVudHNcblx0XHQvLyBMaWtlIHRoaXMgd2UgYXZvaWQgcHJvYmxlbXMgd2hlbiBicm93c2VycyBjaGFuZ2UgdGhlIG9yZGVyXG5cdFx0Ly8gb2YgdGhlIGF0dHJpYnV0ZXNcblx0XHRjaGFpLmFzc2VydC5pc1RydWUobWVkaWFUYWdDb250YWluZXIuZmlyc3RDaGlsZC5pc0VxdWFsTm9kZShleHBlY3RlZFJlc3VsdCksICdtZWRpYSB0YWcgcmVzdWx0IGVsZW1lbnQgaXMgbGlrZSB0aGUgZXhwZWN0ZWQgZWxlbWVudCcpO1xuXHR9KTtcblxuXHRpdCgnY2FuIGNyZWF0ZSBhIG1lZGlhLXRhZyBjb250YWluaW5nIGEgdmlkZW8nLCAoKSA9PiB7XG5cdFx0Ly8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgbWVkaWEgdGFnXG5cdFx0Y29uc3QgbWVkaWFUYWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZWRpYS10YWcnKTtcblx0XHRtZWRpYVRhZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3NyYycsICdjdWJlLm1wNCcpO1xuXHRcdG1lZGlhVGFnQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10eXBlJywgJ3ZpZGVvJyk7XG5cdFx0bWVkaWFUYWdDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWF0dHItd2lkdGgnLCAnMzAwcHgnKTtcblx0XHRtZWRpYVRhZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0ci1oZWlnaHQnLCAnMjAwcHgnKTtcblxuXHRcdC8vIENyZWF0ZSBjb250ZW50cyBiYXNlZCBvbiB0aGUgYXR0cmlidXRlc1xuXHRcdG1lZGlhVGFnKG1lZGlhVGFnQ29udGFpbmVyKTtcblxuXHRcdC8vIENyZWF0ZSB0aGUgZXhwZWN0ZWQgZWxlbWVudFxuXHRcdGNvbnN0IGV4cGVjdGVkUmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcblx0XHRleHBlY3RlZFJlc3VsdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdjdWJlLm1wNCcpO1xuXHRcdGV4cGVjdGVkUmVzdWx0LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMzAwcHgnKTtcblx0XHRleHBlY3RlZFJlc3VsdC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcyMDBweCcpO1xuXG5cdFx0Ly8gQ29tcGFyZSBleHBlY3RlZCBjb250ZW50c1xuXHRcdC8vIExpa2UgdGhpcyB3ZSBhdm9pZCBwcm9ibGVtcyB3aGVuIGJyb3dzZXJzIGNoYW5nZSB0aGUgb3JkZXJcblx0XHQvLyBvZiB0aGUgYXR0cmlidXRlc1xuXHRcdGNoYWkuYXNzZXJ0LmlzVHJ1ZShtZWRpYVRhZ0NvbnRhaW5lci5maXJzdENoaWxkLmlzRXF1YWxOb2RlKGV4cGVjdGVkUmVzdWx0KSwgJ21lZGlhIHRhZyByZXN1bHQgZWxlbWVudCBpcyBsaWtlIHRoZSBleHBlY3RlZCBlbGVtZW50Jyk7XG5cdH0pO1xufSk7XG4iXX0=

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(348);

__webpack_require__(353);

__webpack_require__(168);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var used = []
  , exports = module.exports = {};

/*!
 * Chai version
 */

exports.version = '3.5.0';

/*!
 * Assertion Error
 */

exports.AssertionError = __webpack_require__(110);

/*!
 * Utils for plugins (not exported)
 */

var util = __webpack_require__(163);

/**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai
 *
 * @param {Function}
 * @returns {this} for chaining
 * @api public
 */

exports.use = function (fn) {
  if (!~used.indexOf(fn)) {
    fn(this, util);
    used.push(fn);
  }

  return this;
};

/*!
 * Utility Functions
 */

exports.util = util;

/*!
 * Configuration
 */

var config = __webpack_require__(46);
exports.config = config;

/*!
 * Primary `Assertion` prototype
 */

var assertion = __webpack_require__(150);
exports.use(assertion);

/*!
 * Core Assertions
 */

var core = __webpack_require__(151);
exports.use(core);

/*!
 * Expect interface
 */

var expect = __webpack_require__(153);
exports.use(expect);

/*!
 * Should interface
 */

var should = __webpack_require__(154);
exports.use(should);

/*!
 * Assert interface
 */

var assert = __webpack_require__(152);
exports.use(assert);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var config = __webpack_require__(46);

module.exports = function (_chai, util) {
  /*!
   * Module dependencies.
   */

  var AssertionError = _chai.AssertionError
    , flag = util.flag;

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

  function Assertion (obj, msg, stack) {
    flag(this, 'ssfi', stack || arguments.callee);
    flag(this, 'object', obj);
    flag(this, 'message', msg);
  }

  Object.defineProperty(Assertion, 'includeStack', {
    get: function() {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      return config.includeStack;
    },
    set: function(value) {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      config.includeStack = value;
    }
  });

  Object.defineProperty(Assertion, 'showDiff', {
    get: function() {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      return config.showDiff;
    },
    set: function(value) {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      config.showDiff = value;
    }
  });

  Assertion.addProperty = function (name, fn) {
    util.addProperty(this.prototype, name, fn);
  };

  Assertion.addMethod = function (name, fn) {
    util.addMethod(this.prototype, name, fn);
  };

  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  Assertion.overwriteProperty = function (name, fn) {
    util.overwriteProperty(this.prototype, name, fn);
  };

  Assertion.overwriteMethod = function (name, fn) {
    util.overwriteMethod(this.prototype, name, fn);
  };

  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
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

  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
    var ok = util.test(this, arguments);
    if (true !== showDiff) showDiff = false;
    if (true !== config.showDiff) showDiff = false;

    if (!ok) {
      var msg = util.getMessage(this, arguments)
        , actual = util.getActual(this, arguments);
      throw new AssertionError(msg, {
          actual: actual
        , expected: expected
        , showDiff: showDiff
      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
    }
  };

  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */

  Object.defineProperty(Assertion.prototype, '_obj',
    { get: function () {
        return flag(this, 'object');
      }
    , set: function (val) {
        flag(this, 'object', val);
      }
  });
};


/***/ }),
/* 151 */
/***/ (function(module, exports) {

/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, _) {
  var Assertion = chai.Assertion
    , toString = Object.prototype.toString
    , flag = _.flag;

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

  [ 'to', 'be', 'been'
  , 'is', 'and', 'has', 'have'
  , 'with', 'that', 'which', 'at'
  , 'of', 'same' ].forEach(function (chain) {
    Assertion.addProperty(chain, function () {
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

  Assertion.addProperty('not', function () {
    flag(this, 'negate', true);
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

  Assertion.addProperty('deep', function () {
    flag(this, 'deep', true);
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

  Assertion.addProperty('any', function () {
    flag(this, 'any', true);
    flag(this, 'all', false)
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

  Assertion.addProperty('all', function () {
    flag(this, 'all', true);
    flag(this, 'any', false);
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

  function an (type, msg) {
    if (msg) flag(this, 'message', msg);
    type = type.toLowerCase();
    var obj = flag(this, 'object')
      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';

    this.assert(
        type === _.type(obj)
      , 'expected #{this} to be ' + article + type
      , 'expected #{this} not to be ' + article + type
    );
  }

  Assertion.addChainableMethod('an', an);
  Assertion.addChainableMethod('a', an);

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

  function includeChainingBehavior () {
    flag(this, 'contains', true);
  }

  function include (val, msg) {
    _.expectTypes(this, ['array', 'object', 'string']);

    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var expected = false;

    if (_.type(obj) === 'array' && _.type(val) === 'object') {
      for (var i in obj) {
        if (_.eql(obj[i], val)) {
          expected = true;
          break;
        }
      }
    } else if (_.type(val) === 'object') {
      if (!flag(this, 'negate')) {
        for (var k in val) new Assertion(obj).property(k, val[k]);
        return;
      }
      var subset = {};
      for (var k in val) subset[k] = obj[k];
      expected = _.eql(subset, val);
    } else {
      expected = (obj != undefined) && ~obj.indexOf(val);
    }
    this.assert(
        expected
      , 'expected #{this} to include ' + _.inspect(val)
      , 'expected #{this} to not include ' + _.inspect(val));
  }

  Assertion.addChainableMethod('include', include, includeChainingBehavior);
  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
  Assertion.addChainableMethod('includes', include, includeChainingBehavior);

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

  Assertion.addProperty('ok', function () {
    this.assert(
        flag(this, 'object')
      , 'expected #{this} to be truthy'
      , 'expected #{this} to be falsy');
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

  Assertion.addProperty('true', function () {
    this.assert(
        true === flag(this, 'object')
      , 'expected #{this} to be true'
      , 'expected #{this} to be false'
      , this.negate ? false : true
    );
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

  Assertion.addProperty('false', function () {
    this.assert(
        false === flag(this, 'object')
      , 'expected #{this} to be false'
      , 'expected #{this} to be true'
      , this.negate ? true : false
    );
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

  Assertion.addProperty('null', function () {
    this.assert(
        null === flag(this, 'object')
      , 'expected #{this} to be null'
      , 'expected #{this} not to be null'
    );
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

  Assertion.addProperty('undefined', function () {
    this.assert(
        undefined === flag(this, 'object')
      , 'expected #{this} to be undefined'
      , 'expected #{this} not to be undefined'
    );
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

  Assertion.addProperty('NaN', function () {
    this.assert(
        isNaN(flag(this, 'object'))
        , 'expected #{this} to be NaN'
        , 'expected #{this} not to be NaN'
    );
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

  Assertion.addProperty('exist', function () {
    this.assert(
        null != flag(this, 'object')
      , 'expected #{this} to exist'
      , 'expected #{this} to not exist'
    );
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

  Assertion.addProperty('empty', function () {
    var obj = flag(this, 'object')
      , expected = obj;

    if (Array.isArray(obj) || 'string' === typeof object) {
      expected = obj.length;
    } else if (typeof obj === 'object') {
      expected = Object.keys(obj).length;
    }

    this.assert(
        !expected
      , 'expected #{this} to be empty'
      , 'expected #{this} not to be empty'
    );
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

  function checkArguments () {
    var obj = flag(this, 'object')
      , type = Object.prototype.toString.call(obj);
    this.assert(
        '[object Arguments]' === type
      , 'expected #{this} to be arguments but got ' + type
      , 'expected #{this} to not be arguments'
    );
  }

  Assertion.addProperty('arguments', checkArguments);
  Assertion.addProperty('Arguments', checkArguments);

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

  function assertEqual (val, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'deep')) {
      return this.eql(val);
    } else {
      this.assert(
          val === obj
        , 'expected #{this} to equal #{exp}'
        , 'expected #{this} to not equal #{exp}'
        , val
        , this._obj
        , true
      );
    }
  }

  Assertion.addMethod('equal', assertEqual);
  Assertion.addMethod('equals', assertEqual);
  Assertion.addMethod('eq', assertEqual);

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
    if (msg) flag(this, 'message', msg);
    this.assert(
        _.eql(obj, flag(this, 'object'))
      , 'expected #{this} to deeply equal #{exp}'
      , 'expected #{this} to not deeply equal #{exp}'
      , obj
      , this._obj
      , true
    );
  }

  Assertion.addMethod('eql', assertEql);
  Assertion.addMethod('eqls', assertEql);

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

  function assertAbove (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len > n
        , 'expected #{this} to have a length above #{exp} but got #{act}'
        , 'expected #{this} to not have a length above #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj > n
        , 'expected #{this} to be above ' + n
        , 'expected #{this} to be at most ' + n
      );
    }
  }

  Assertion.addMethod('above', assertAbove);
  Assertion.addMethod('gt', assertAbove);
  Assertion.addMethod('greaterThan', assertAbove);

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

  function assertLeast (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len >= n
        , 'expected #{this} to have a length at least #{exp} but got #{act}'
        , 'expected #{this} to have a length below #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj >= n
        , 'expected #{this} to be at least ' + n
        , 'expected #{this} to be below ' + n
      );
    }
  }

  Assertion.addMethod('least', assertLeast);
  Assertion.addMethod('gte', assertLeast);

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

  function assertBelow (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len < n
        , 'expected #{this} to have a length below #{exp} but got #{act}'
        , 'expected #{this} to not have a length below #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj < n
        , 'expected #{this} to be below ' + n
        , 'expected #{this} to be at least ' + n
      );
    }
  }

  Assertion.addMethod('below', assertBelow);
  Assertion.addMethod('lt', assertBelow);
  Assertion.addMethod('lessThan', assertBelow);

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

  function assertMost (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len <= n
        , 'expected #{this} to have a length at most #{exp} but got #{act}'
        , 'expected #{this} to have a length above #{exp}'
        , n
        , len
      );
    } else {
      this.assert(
          obj <= n
        , 'expected #{this} to be at most ' + n
        , 'expected #{this} to be above ' + n
      );
    }
  }

  Assertion.addMethod('most', assertMost);
  Assertion.addMethod('lte', assertMost);

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

  Assertion.addMethod('within', function (start, finish, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , range = start + '..' + finish;
    if (flag(this, 'doLength')) {
      new Assertion(obj, msg).to.have.property('length');
      var len = obj.length;
      this.assert(
          len >= start && len <= finish
        , 'expected #{this} to have a length within ' + range
        , 'expected #{this} to not have a length within ' + range
      );
    } else {
      this.assert(
          obj >= start && obj <= finish
        , 'expected #{this} to be within ' + range
        , 'expected #{this} to not be within ' + range
      );
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

  function assertInstanceOf (constructor, msg) {
    if (msg) flag(this, 'message', msg);
    var name = _.getName(constructor);
    this.assert(
        flag(this, 'object') instanceof constructor
      , 'expected #{this} to be an instance of ' + name
      , 'expected #{this} to not be an instance of ' + name
    );
  };

  Assertion.addMethod('instanceof', assertInstanceOf);
  Assertion.addMethod('instanceOf', assertInstanceOf);

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

  Assertion.addMethod('property', function (name, val, msg) {
    if (msg) flag(this, 'message', msg);

    var isDeep = !!flag(this, 'deep')
      , descriptor = isDeep ? 'deep property ' : 'property '
      , negate = flag(this, 'negate')
      , obj = flag(this, 'object')
      , pathInfo = isDeep ? _.getPathInfo(name, obj) : null
      , hasProperty = isDeep
        ? pathInfo.exists
        : _.hasProperty(name, obj)
      , value = isDeep
        ? pathInfo.value
        : obj[name];

    if (negate && arguments.length > 1) {
      if (undefined === value) {
        msg = (msg != null) ? msg + ': ' : '';
        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
      }
    } else {
      this.assert(
          hasProperty
        , 'expected #{this} to have a ' + descriptor + _.inspect(name)
        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
    }

    if (arguments.length > 1) {
      this.assert(
          val === value
        , 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
        , 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}'
        , val
        , value
      );
    }

    flag(this, 'object', value);
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

  function assertOwnProperty (name, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    this.assert(
        obj.hasOwnProperty(name)
      , 'expected #{this} to have own property ' + _.inspect(name)
      , 'expected #{this} to not have own property ' + _.inspect(name)
    );
  }

  Assertion.addMethod('ownProperty', assertOwnProperty);
  Assertion.addMethod('haveOwnProperty', assertOwnProperty);

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

  function assertOwnPropertyDescriptor (name, descriptor, msg) {
    if (typeof descriptor === 'string') {
      msg = descriptor;
      descriptor = null;
    }
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
    if (actualDescriptor && descriptor) {
      this.assert(
          _.eql(descriptor, actualDescriptor)
        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor)
        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor)
        , descriptor
        , actualDescriptor
        , true
      );
    } else {
      this.assert(
          actualDescriptor
        , 'expected #{this} to have an own property descriptor for ' + _.inspect(name)
        , 'expected #{this} to not have an own property descriptor for ' + _.inspect(name)
      );
    }
    flag(this, 'object', actualDescriptor);
  }

  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);

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

  function assertLengthChain () {
    flag(this, 'doLength', true);
  }

  function assertLength (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    new Assertion(obj, msg).to.have.property('length');
    var len = obj.length;

    this.assert(
        len == n
      , 'expected #{this} to have a length of #{exp} but got #{act}'
      , 'expected #{this} to not have a length of #{act}'
      , n
      , len
    );
  }

  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
  Assertion.addMethod('lengthOf', assertLength);

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
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    this.assert(
        re.exec(obj)
      , 'expected #{this} to match ' + re
      , 'expected #{this} not to match ' + re
    );
  }

  Assertion.addMethod('match', assertMatch);
  Assertion.addMethod('matches', assertMatch);

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

  Assertion.addMethod('string', function (str, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    new Assertion(obj, msg).is.a('string');

    this.assert(
        ~obj.indexOf(str)
      , 'expected #{this} to contain ' + _.inspect(str)
      , 'expected #{this} to not contain ' + _.inspect(str)
    );
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

  function assertKeys (keys) {
    var obj = flag(this, 'object')
      , str
      , ok = true
      , mixedArgsMsg = 'keys must be given single argument of Array|Object|String, or multiple String arguments';

    switch (_.type(keys)) {
      case "array":
        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
        break;
      case "object":
        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
        keys = Object.keys(keys);
        break;
      default:
        keys = Array.prototype.slice.call(arguments);
    }

    if (!keys.length) throw new Error('keys required');

    var actual = Object.keys(obj)
      , expected = keys
      , len = keys.length
      , any = flag(this, 'any')
      , all = flag(this, 'all');

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
      ok = keys.every(function(key){
        return ~actual.indexOf(key);
      });
      if (!flag(this, 'negate') && !flag(this, 'contains')) {
        ok = ok && keys.length == actual.length;
      }
    }

    // Key string
    if (len > 1) {
      keys = keys.map(function(key){
        return _.inspect(key);
      });
      var last = keys.pop();
      if (all) {
        str = keys.join(', ') + ', and ' + last;
      }
      if (any) {
        str = keys.join(', ') + ', or ' + last;
      }
    } else {
      str = _.inspect(keys[0]);
    }

    // Form
    str = (len > 1 ? 'keys ' : 'key ') + str;

    // Have / include
    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

    // Assertion
    this.assert(
        ok
      , 'expected #{this} to ' + str
      , 'expected #{this} to not ' + str
      , expected.slice(0).sort()
      , actual.sort()
      , true
    );
  }

  Assertion.addMethod('keys', assertKeys);
  Assertion.addMethod('key', assertKeys);

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

  function assertThrows (constructor, errMsg, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    new Assertion(obj, msg).is.a('function');

    var thrown = false
      , desiredError = null
      , name = null
      , thrownError = null;

    if (arguments.length === 0) {
      errMsg = null;
      constructor = null;
    } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
      errMsg = constructor;
      constructor = null;
    } else if (constructor && constructor instanceof Error) {
      desiredError = constructor;
      constructor = null;
      errMsg = null;
    } else if (typeof constructor === 'function') {
      name = constructor.prototype.name;
      if (!name || (name === 'Error' && constructor !== Error)) {
        name = constructor.name || (new constructor()).name;
      }
    } else {
      constructor = null;
    }

    try {
      obj();
    } catch (err) {
      // first, check desired error
      if (desiredError) {
        this.assert(
            err === desiredError
          , 'expected #{this} to throw #{exp} but #{act} was thrown'
          , 'expected #{this} to not throw #{exp}'
          , (desiredError instanceof Error ? desiredError.toString() : desiredError)
          , (err instanceof Error ? err.toString() : err)
        );

        flag(this, 'object', err);
        return this;
      }

      // next, check constructor
      if (constructor) {
        this.assert(
            err instanceof constructor
          , 'expected #{this} to throw #{exp} but #{act} was thrown'
          , 'expected #{this} to not throw #{exp} but #{act} was thrown'
          , name
          , (err instanceof Error ? err.toString() : err)
        );

        if (!errMsg) {
          flag(this, 'object', err);
          return this;
        }
      }

      // next, check message
      var message = 'error' === _.type(err) && "message" in err
        ? err.message
        : '' + err;

      if ((message != null) && errMsg && errMsg instanceof RegExp) {
        this.assert(
            errMsg.exec(message)
          , 'expected #{this} to throw error matching #{exp} but got #{act}'
          , 'expected #{this} to throw error not matching #{exp}'
          , errMsg
          , message
        );

        flag(this, 'object', err);
        return this;
      } else if ((message != null) && errMsg && 'string' === typeof errMsg) {
        this.assert(
            ~message.indexOf(errMsg)
          , 'expected #{this} to throw error including #{exp} but got #{act}'
          , 'expected #{this} to throw error not including #{act}'
          , errMsg
          , message
        );

        flag(this, 'object', err);
        return this;
      } else {
        thrown = true;
        thrownError = err;
      }
    }

    var actuallyGot = ''
      , expectedThrown = name !== null
        ? name
        : desiredError
          ? '#{exp}' //_.inspect(desiredError)
          : 'an error';

    if (thrown) {
      actuallyGot = ' but #{act} was thrown'
    }

    this.assert(
        thrown === true
      , 'expected #{this} to throw ' + expectedThrown + actuallyGot
      , 'expected #{this} to not throw ' + expectedThrown + actuallyGot
      , (desiredError instanceof Error ? desiredError.toString() : desiredError)
      , (thrownError instanceof Error ? thrownError.toString() : thrownError)
    );

    flag(this, 'object', thrownError);
  };

  Assertion.addMethod('throw', assertThrows);
  Assertion.addMethod('throws', assertThrows);
  Assertion.addMethod('Throw', assertThrows);

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

  function respondTo (method, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , itself = flag(this, 'itself')
      , context = ('function' === _.type(obj) && !itself)
        ? obj.prototype[method]
        : obj[method];

    this.assert(
        'function' === typeof context
      , 'expected #{this} to respond to ' + _.inspect(method)
      , 'expected #{this} to not respond to ' + _.inspect(method)
    );
  }

  Assertion.addMethod('respondTo', respondTo);
  Assertion.addMethod('respondsTo', respondTo);

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

  Assertion.addProperty('itself', function () {
    flag(this, 'itself', true);
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

  function satisfy (matcher, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var result = matcher(obj);
    this.assert(
        result
      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
      , this.negate ? false : true
      , result
    );
  }

  Assertion.addMethod('satisfy', satisfy);
  Assertion.addMethod('satisfies', satisfy);

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
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');

    new Assertion(obj, msg).is.a('number');
    if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
      throw new Error('the arguments to closeTo or approximately must be numbers');
    }

    this.assert(
        Math.abs(obj - expected) <= delta
      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
    );
  }

  Assertion.addMethod('closeTo', closeTo);
  Assertion.addMethod('approximately', closeTo);

  function isSubsetOf(subset, superset, cmp) {
    return subset.every(function(elem) {
      if (!cmp) return superset.indexOf(elem) !== -1;

      return superset.some(function(elem2) {
        return cmp(elem, elem2);
      });
    })
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

  Assertion.addMethod('members', function (subset, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');

    new Assertion(obj).to.be.an('array');
    new Assertion(subset).to.be.an('array');

    var cmp = flag(this, 'deep') ? _.eql : undefined;

    if (flag(this, 'contains')) {
      return this.assert(
          isSubsetOf(subset, obj, cmp)
        , 'expected #{this} to be a superset of #{act}'
        , 'expected #{this} to not be a superset of #{act}'
        , obj
        , subset
      );
    }

    this.assert(
        isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp)
        , 'expected #{this} to have the same members as #{act}'
        , 'expected #{this} to not have the same members as #{act}'
        , obj
        , subset
    );
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

  function oneOf (list, msg) {
    if (msg) flag(this, 'message', msg);
    var expected = flag(this, 'object');
    new Assertion(list).to.be.an('array');

    this.assert(
        list.indexOf(expected) > -1
      , 'expected #{this} to be one of #{exp}'
      , 'expected #{this} to not be one of #{exp}'
      , list
      , expected
    );
  }

  Assertion.addMethod('oneOf', oneOf);


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

  function assertChanges (object, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object');
    new Assertion(object, msg).to.have.property(prop);
    new Assertion(fn).is.a('function');

    var initial = object[prop];
    fn();

    this.assert(
      initial !== object[prop]
      , 'expected .' + prop + ' to change'
      , 'expected .' + prop + ' to not change'
    );
  }

  Assertion.addChainableMethod('change', assertChanges);
  Assertion.addChainableMethod('changes', assertChanges);

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

  function assertIncreases (object, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object');
    new Assertion(object, msg).to.have.property(prop);
    new Assertion(fn).is.a('function');

    var initial = object[prop];
    fn();

    this.assert(
      object[prop] - initial > 0
      , 'expected .' + prop + ' to increase'
      , 'expected .' + prop + ' to not increase'
    );
  }

  Assertion.addChainableMethod('increase', assertIncreases);
  Assertion.addChainableMethod('increases', assertIncreases);

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

  function assertDecreases (object, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object');
    new Assertion(object, msg).to.have.property(prop);
    new Assertion(fn).is.a('function');

    var initial = object[prop];
    fn();

    this.assert(
      object[prop] - initial < 0
      , 'expected .' + prop + ' to decrease'
      , 'expected .' + prop + ' to not decrease'
    );
  }

  Assertion.addChainableMethod('decrease', assertDecreases);
  Assertion.addChainableMethod('decreases', assertDecreases);

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

  Assertion.addProperty('extensible', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
    // The following provides ES6 behavior when a TypeError is thrown under ES5.

    var isExtensible;

    try {
      isExtensible = Object.isExtensible(obj);
    } catch (err) {
      if (err instanceof TypeError) isExtensible = false;
      else throw err;
    }

    this.assert(
      isExtensible
      , 'expected #{this} to be extensible'
      , 'expected #{this} to not be extensible'
    );
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

  Assertion.addProperty('sealed', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
    // The following provides ES6 behavior when a TypeError is thrown under ES5.

    var isSealed;

    try {
      isSealed = Object.isSealed(obj);
    } catch (err) {
      if (err instanceof TypeError) isSealed = true;
      else throw err;
    }

    this.assert(
      isSealed
      , 'expected #{this} to be sealed'
      , 'expected #{this} to not be sealed'
    );
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

  Assertion.addProperty('frozen', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
    // The following provides ES6 behavior when a TypeError is thrown under ES5.

    var isFrozen;

    try {
      isFrozen = Object.isFrozen(obj);
    } catch (err) {
      if (err instanceof TypeError) isFrozen = true;
      else throw err;
    }

    this.assert(
      isFrozen
      , 'expected #{this} to be frozen'
      , 'expected #{this} to not be frozen'
    );
  });
};


/***/ }),
/* 152 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */


module.exports = function (chai, util) {

  /*!
   * Chai dependencies.
   */

  var Assertion = chai.Assertion
    , flag = util.flag;

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

  var assert = chai.assert = function (express, errmsg) {
    var test = new Assertion(null, null, chai.assert);
    test.assert(
        express
      , errmsg
      , '[ negation message unavailable ]'
    );
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

  assert.fail = function (actual, expected, message, operator) {
    message = message || 'assert.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
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

  assert.isOk = function (val, msg) {
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

  assert.isNotOk = function (val, msg) {
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

  assert.equal = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.equal);

    test.assert(
        exp == flag(test, 'object')
      , 'expected #{this} to equal #{exp}'
      , 'expected #{this} to not equal #{act}'
      , exp
      , act
    );
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

  assert.notEqual = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.notEqual);

    test.assert(
        exp != flag(test, 'object')
      , 'expected #{this} to not equal #{exp}'
      , 'expected #{this} to equal #{act}'
      , exp
      , act
    );
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

  assert.strictEqual = function (act, exp, msg) {
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

  assert.notStrictEqual = function (act, exp, msg) {
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

  assert.deepEqual = function (act, exp, msg) {
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

  assert.notDeepEqual = function (act, exp, msg) {
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

  assert.isAbove = function (val, abv, msg) {
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

  assert.isAtLeast = function (val, atlst, msg) {
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

  assert.isBelow = function (val, blw, msg) {
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

  assert.isAtMost = function (val, atmst, msg) {
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

  assert.isTrue = function (val, msg) {
    new Assertion(val, msg).is['true'];
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

  assert.isNotTrue = function (val, msg) {
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

  assert.isFalse = function (val, msg) {
    new Assertion(val, msg).is['false'];
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

  assert.isNotFalse = function (val, msg) {
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

  assert.isNull = function (val, msg) {
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

  assert.isNotNull = function (val, msg) {
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

  assert.isNaN = function (val, msg) {
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
  assert.isNotNaN = function (val, msg) {
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

  assert.isUndefined = function (val, msg) {
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

  assert.isDefined = function (val, msg) {
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

  assert.isFunction = function (val, msg) {
    new Assertion(val, msg).to.be.a('function');
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

  assert.isNotFunction = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('function');
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

  assert.isObject = function (val, msg) {
    new Assertion(val, msg).to.be.a('object');
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

  assert.isNotObject = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('object');
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

  assert.isArray = function (val, msg) {
    new Assertion(val, msg).to.be.an('array');
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

  assert.isNotArray = function (val, msg) {
    new Assertion(val, msg).to.not.be.an('array');
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

  assert.isString = function (val, msg) {
    new Assertion(val, msg).to.be.a('string');
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

  assert.isNotString = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('string');
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

  assert.isNumber = function (val, msg) {
    new Assertion(val, msg).to.be.a('number');
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

  assert.isNotNumber = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('number');
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

  assert.isBoolean = function (val, msg) {
    new Assertion(val, msg).to.be.a('boolean');
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

  assert.isNotBoolean = function (val, msg) {
    new Assertion(val, msg).to.not.be.a('boolean');
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

  assert.typeOf = function (val, type, msg) {
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

  assert.notTypeOf = function (val, type, msg) {
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

  assert.instanceOf = function (val, type, msg) {
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

  assert.notInstanceOf = function (val, type, msg) {
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

  assert.include = function (exp, inc, msg) {
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

  assert.notInclude = function (exp, inc, msg) {
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

  assert.match = function (exp, re, msg) {
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

  assert.notMatch = function (exp, re, msg) {
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

  assert.property = function (obj, prop, msg) {
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

  assert.notProperty = function (obj, prop, msg) {
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

  assert.deepProperty = function (obj, prop, msg) {
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

  assert.notDeepProperty = function (obj, prop, msg) {
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

  assert.propertyVal = function (obj, prop, val, msg) {
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

  assert.propertyNotVal = function (obj, prop, val, msg) {
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

  assert.deepPropertyVal = function (obj, prop, val, msg) {
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

  assert.deepPropertyNotVal = function (obj, prop, val, msg) {
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

  assert.lengthOf = function (exp, len, msg) {
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

  assert.throws = function (fn, errt, errs, msg) {
    if ('string' === typeof errt || errt instanceof RegExp) {
      errs = errt;
      errt = null;
    }

    var assertErr = new Assertion(fn, msg).to.throw(errt, errs);
    return flag(assertErr, 'object');
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

  assert.doesNotThrow = function (fn, type, msg) {
    if ('string' === typeof type) {
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

  assert.operator = function (val, operator, val2, msg) {
    var ok;
    switch(operator) {
      case '==':
        ok = val == val2;
        break;
      case '===':
        ok = val === val2;
        break;
      case '>':
        ok = val > val2;
        break;
      case '>=':
        ok = val >= val2;
        break;
      case '<':
        ok = val < val2;
        break;
      case '<=':
        ok = val <= val2;
        break;
      case '!=':
        ok = val != val2;
        break;
      case '!==':
        ok = val !== val2;
        break;
      default:
        throw new Error('Invalid operator "' + operator + '"');
    }
    var test = new Assertion(ok, msg);
    test.assert(
        true === flag(test, 'object')
      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
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

  assert.closeTo = function (act, exp, delta, msg) {
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

  assert.approximately = function (act, exp, delta, msg) {
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

  assert.sameMembers = function (set1, set2, msg) {
    new Assertion(set1, msg).to.have.same.members(set2);
  }

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

  assert.sameDeepMembers = function (set1, set2, msg) {
    new Assertion(set1, msg).to.have.same.deep.members(set2);
  }

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

  assert.includeMembers = function (superset, subset, msg) {
    new Assertion(superset, msg).to.include.members(subset);
  }

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

  assert.includeDeepMembers = function (superset, subset, msg) {
    new Assertion(superset, msg).to.include.deep.members(subset);
  }

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

  assert.oneOf = function (inList, list, msg) {
    new Assertion(inList, msg).to.be.oneOf(list);
  }

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

  assert.changes = function (fn, obj, prop) {
    new Assertion(fn).to.change(obj, prop);
  }

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

  assert.doesNotChange = function (fn, obj, prop) {
    new Assertion(fn).to.not.change(obj, prop);
  }

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

  assert.increases = function (fn, obj, prop) {
    new Assertion(fn).to.increase(obj, prop);
  }

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

  assert.doesNotIncrease = function (fn, obj, prop) {
    new Assertion(fn).to.not.increase(obj, prop);
  }

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

  assert.decreases = function (fn, obj, prop) {
    new Assertion(fn).to.decrease(obj, prop);
  }

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

  assert.doesNotDecrease = function (fn, obj, prop) {
    new Assertion(fn).to.not.decrease(obj, prop);
  }

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

  assert.ifError = function (val) {
    if (val) {
      throw(val);
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

  assert.isExtensible = function (obj, msg) {
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

  assert.isNotExtensible = function (obj, msg) {
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

  assert.isSealed = function (obj, msg) {
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

  assert.isNotSealed = function (obj, msg) {
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

  assert.isFrozen = function (obj, msg) {
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

  assert.isNotFrozen = function (obj, msg) {
    new Assertion(obj, msg).to.not.be.frozen;
  };

  /*!
   * Aliases.
   */

  (function alias(name, as){
    assert[as] = assert[name];
    return alias;
  })
  ('isOk', 'ok')
  ('isNotOk', 'notOk')
  ('throws', 'throw')
  ('throws', 'Throw')
  ('isExtensible', 'extensible')
  ('isNotExtensible', 'notExtensible')
  ('isSealed', 'sealed')
  ('isNotSealed', 'notSealed')
  ('isFrozen', 'frozen')
  ('isNotFrozen', 'notFrozen');
};


/***/ }),
/* 153 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  chai.expect = function (val, message) {
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

  chai.expect.fail = function (actual, expected, message, operator) {
    message = message || 'expect.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
    }, chai.expect.fail);
  };
};


/***/ }),
/* 154 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  var Assertion = chai.Assertion;

  function loadShould () {
    // explicitly define this method as function as to have it's name to include as `ssfi`
    function shouldGetter() {
      if (this instanceof String || this instanceof Number || this instanceof Boolean ) {
        return new Assertion(this.valueOf(), null, shouldGetter);
      }
      return new Assertion(this, null, shouldGetter);
    }
    function shouldSetter(value) {
      // See https://github.com/chaijs/chai/issues/86: this makes
      // `whatever.should = someValue` actually set `someValue`, which is
      // especially useful for `global.should = require('chai').should()`.
      //
      // Note that we have to use [[DefineProperty]] instead of [[Put]]
      // since otherwise we would trigger this very setter!
      Object.defineProperty(this, 'should', {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    }
    // modify Object.prototype to have `should`
    Object.defineProperty(Object.prototype, 'should', {
      set: shouldSetter
      , get: shouldGetter
      , configurable: true
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

    should.fail = function (actual, expected, message, operator) {
      message = message || 'should.fail()';
      throw new chai.AssertionError(message, {
          actual: actual
        , expected: expected
        , operator: operator
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

    should.equal = function (val1, val2, msg) {
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

    should.Throw = function (fn, errt, errs, msg) {
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

    should.exist = function (val, msg) {
      new Assertion(val, msg).to.exist;
    }

    // negation
    should.not = {}

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

    should.not.equal = function (val1, val2, msg) {
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

    should.not.Throw = function (fn, errt, errs, msg) {
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

    should.not.exist = function (val, msg) {
      new Assertion(val, msg).to.not.exist;
    }

    should['throw'] = should['Throw'];
    should.not['throw'] = should.not['Throw'];

    return should;
  };

  chai.should = loadShould;
  chai.Should = loadShould;
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var transferFlags = __webpack_require__(116);
var flag = __webpack_require__(34);
var config = __webpack_require__(46);

/*!
 * Module variables
 */

// Check whether `__proto__` is supported
var hasProtoSupport = '__proto__' in Object;

// Without `__proto__` support, this module will need to add properties to a function.
// However, some Function.prototype methods cannot be overwritten,
// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
var excludeNames = /^(?:length|name|arguments|caller)$/;

// Cache `Function` properties
var call  = Function.prototype.call,
    apply = Function.prototype.apply;

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

module.exports = function (ctx, name, method, chainingBehavior) {
  if (typeof chainingBehavior !== 'function') {
    chainingBehavior = function () { };
  }

  var chainableBehavior = {
      method: method
    , chainingBehavior: chainingBehavior
  };

  // save the methods so we can overwrite them later, if we need to.
  if (!ctx.__methods) {
    ctx.__methods = {};
  }
  ctx.__methods[name] = chainableBehavior;

  Object.defineProperty(ctx, name,
    { get: function () {
        chainableBehavior.chainingBehavior.call(this);

        var assert = function assert() {
          var old_ssfi = flag(this, 'ssfi');
          if (old_ssfi && config.includeStack === false)
            flag(this, 'ssfi', assert);
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
        }
        // Otherwise, redefine all properties (slow!)
        else {
          var asserterNames = Object.getOwnPropertyNames(ctx);
          asserterNames.forEach(function (asserterName) {
            if (!excludeNames.test(asserterName)) {
              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
              Object.defineProperty(assert, asserterName, pd);
            }
          });
        }

        transferFlags(this, assert);
        return assert;
      }
    , configurable: true
  });
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var config = __webpack_require__(46);

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
var flag = __webpack_require__(34);

module.exports = function (ctx, name, method) {
  ctx[name] = function () {
    var old_ssfi = flag(this, 'ssfi');
    if (old_ssfi && config.includeStack === false)
      flag(this, 'ssfi', ctx[name]);
    var result = method.apply(this, arguments);
    return result === undefined ? this : result;
  };
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var config = __webpack_require__(46);
var flag = __webpack_require__(34);

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

module.exports = function (ctx, name, getter) {
  Object.defineProperty(ctx, name,
    { get: function addProperty() {
        var old_ssfi = flag(this, 'ssfi');
        if (old_ssfi && config.includeStack === false)
          flag(this, 'ssfi', addProperty);

        var result = getter.call(this);
        return result === undefined ? this : result;
      }
    , configurable: true
  });
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

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

var AssertionError = __webpack_require__(110);
var flag = __webpack_require__(34);
var type = __webpack_require__(109);

module.exports = function (obj, types) {
  var obj = flag(obj, 'object');
  types = types.map(function (t) { return t.toLowerCase(); });
  types.sort();

  // Transforms ['lorem', 'ipsum'] into 'a lirum, or an ipsum'
  var str = types.map(function (t, index) {
    var art = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(t.charAt(0)) ? 'an' : 'a';
    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
    return or + art + ' ' + t;
  }).join(', ');

  if (!types.some(function (expected) { return type(obj) === expected; })) {
    throw new AssertionError(
      'object tested must be ' + str + ', but ' + type(obj) + ' given'
    );
  }
};


/***/ }),
/* 159 */
/***/ (function(module, exports) {

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


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var flag = __webpack_require__(34)
  , getActual = __webpack_require__(111)
  , inspect = __webpack_require__(82)
  , objDisplay = __webpack_require__(115);

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

module.exports = function (obj, args) {
  var negate = flag(obj, 'negate')
    , val = flag(obj, 'object')
    , expected = args[3]
    , actual = getActual(obj, args)
    , msg = negate ? args[2] : args[1]
    , flagMsg = flag(obj, 'message');

  if(typeof msg === "function") msg = msg();
  msg = msg || '';
  msg = msg
    .replace(/#\{this\}/g, function () { return objDisplay(val); })
    .replace(/#\{act\}/g, function () { return objDisplay(actual); })
    .replace(/#\{exp\}/g, function () { return objDisplay(expected); });

  return flagMsg ? flagMsg + ': ' + msg : msg;
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - getPathValue utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */

var getPathInfo = __webpack_require__(113);

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


/***/ }),
/* 162 */
/***/ (function(module, exports) {

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


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Main exports
 */

var exports = module.exports = {};

/*!
 * test utility
 */

exports.test = __webpack_require__(167);

/*!
 * type utility
 */

exports.type = __webpack_require__(109);

/*!
 * expectTypes utility
 */
exports.expectTypes = __webpack_require__(158);

/*!
 * message utility
 */

exports.getMessage = __webpack_require__(160);

/*!
 * actual utility
 */

exports.getActual = __webpack_require__(111);

/*!
 * Inspect util
 */

exports.inspect = __webpack_require__(82);

/*!
 * Object Display util
 */

exports.objDisplay = __webpack_require__(115);

/*!
 * Flag utility
 */

exports.flag = __webpack_require__(34);

/*!
 * Flag transferring utility
 */

exports.transferFlags = __webpack_require__(116);

/*!
 * Deep equal utility
 */

exports.eql = __webpack_require__(349);

/*!
 * Deep path value
 */

exports.getPathValue = __webpack_require__(161);

/*!
 * Deep path info
 */

exports.getPathInfo = __webpack_require__(113);

/*!
 * Check if a property exists
 */

exports.hasProperty = __webpack_require__(114);

/*!
 * Function name
 */

exports.getName = __webpack_require__(112);

/*!
 * add Property
 */

exports.addProperty = __webpack_require__(157);

/*!
 * add Method
 */

exports.addMethod = __webpack_require__(156);

/*!
 * overwrite Property
 */

exports.overwriteProperty = __webpack_require__(166);

/*!
 * overwrite Method
 */

exports.overwriteMethod = __webpack_require__(165);

/*!
 * Add a chainable method
 */

exports.addChainableMethod = __webpack_require__(155);

/*!
 * Overwrite chainable method
 */

exports.overwriteChainableMethod = __webpack_require__(164);


/***/ }),
/* 164 */
/***/ (function(module, exports) {

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

module.exports = function (ctx, name, method, chainingBehavior) {
  var chainableBehavior = ctx.__methods[name];

  var _chainingBehavior = chainableBehavior.chainingBehavior;
  chainableBehavior.chainingBehavior = function () {
    var result = chainingBehavior(_chainingBehavior).call(this);
    return result === undefined ? this : result;
  };

  var _method = chainableBehavior.method;
  chainableBehavior.method = function () {
    var result = method(_method).apply(this, arguments);
    return result === undefined ? this : result;
  };
};


/***/ }),
/* 165 */
/***/ (function(module, exports) {

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

module.exports = function (ctx, name, method) {
  var _method = ctx[name]
    , _super = function () { return this; };

  if (_method && 'function' === typeof _method)
    _super = _method;

  ctx[name] = function () {
    var result = method(_super).apply(this, arguments);
    return result === undefined ? this : result;
  }
};


/***/ }),
/* 166 */
/***/ (function(module, exports) {

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

module.exports = function (ctx, name, getter) {
  var _get = Object.getOwnPropertyDescriptor(ctx, name)
    , _super = function () {};

  if (_get && 'function' === typeof _get.get)
    _super = _get.get

  Object.defineProperty(ctx, name,
    { get: function () {
        var result = getter(_super).call(this);
        return result === undefined ? this : result;
      }
    , configurable: true
  });
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var flag = __webpack_require__(34);

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

module.exports = function (obj, args) {
  var negate = flag(obj, 'negate')
    , expr = args[0];
  return negate ? !expr : expr;
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(177);
module.exports = __webpack_require__(26).RegExp.escape;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4)
  , isArray  = __webpack_require__(91)
  , SPECIES  = __webpack_require__(5)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(169);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject    = __webpack_require__(1)
  , toPrimitive = __webpack_require__(25)
  , NUMBER      = 'number';

module.exports = function(hint){
  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(39)
  , gOPS    = __webpack_require__(74)
  , pIE     = __webpack_require__(61);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(39)
  , toIObject = __webpack_require__(16);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var path      = __webpack_require__(175)
  , invoke    = __webpack_require__(70)
  , aFunction = __webpack_require__(12);
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = function(regExp, replace){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(it).replace(regExp, replacer);
  };
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(0)
  , $re     = __webpack_require__(176)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', {copyWithin: __webpack_require__(118)});

__webpack_require__(47)('copyWithin');

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $every  = __webpack_require__(23)(4);

$export($export.P + $export.F * !__webpack_require__(21)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */){
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', {fill: __webpack_require__(83)});

__webpack_require__(47)('fill');

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $filter = __webpack_require__(23)(2);

$export($export.P + $export.F * !__webpack_require__(21)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */){
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0)
  , $find   = __webpack_require__(23)(6)
  , KEY     = 'findIndex'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(47)(KEY);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0)
  , $find   = __webpack_require__(23)(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(47)(KEY);

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export  = __webpack_require__(0)
  , $forEach = __webpack_require__(23)(0)
  , STRICT   = __webpack_require__(21)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */){
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(27)
  , $export        = __webpack_require__(0)
  , toObject       = __webpack_require__(9)
  , call           = __webpack_require__(127)
  , isArrayIter    = __webpack_require__(90)
  , toLength       = __webpack_require__(8)
  , createProperty = __webpack_require__(84)
  , getIterFn      = __webpack_require__(107);

$export($export.S + $export.F * !__webpack_require__(72)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export       = __webpack_require__(0)
  , $indexOf      = __webpack_require__(66)(false)
  , $native       = [].indexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(21)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(0);

$export($export.S, 'Array', {isArray: __webpack_require__(91)});

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export   = __webpack_require__(0)
  , toIObject = __webpack_require__(16)
  , arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(60) != Object || !__webpack_require__(21)(arrayJoin)), 'Array', {
  join: function join(separator){
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export       = __webpack_require__(0)
  , toIObject     = __webpack_require__(16)
  , toInteger     = __webpack_require__(33)
  , toLength      = __webpack_require__(8)
  , $native       = [].lastIndexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(21)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
    // convert -0 to +0
    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
    var O      = toIObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
    if(index < 0)index = length + index;
    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
    return -1;
  }
});

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $map    = __webpack_require__(23)(1);

$export($export.P + $export.F * !__webpack_require__(21)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */){
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export        = __webpack_require__(0)
  , createProperty = __webpack_require__(84);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(3)(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index)createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $reduce = __webpack_require__(120);

$export($export.P + $export.F * !__webpack_require__(21)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $reduce = __webpack_require__(120);

$export($export.P + $export.F * !__webpack_require__(21)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export    = __webpack_require__(0)
  , html       = __webpack_require__(88)
  , cof        = __webpack_require__(19)
  , toIndex    = __webpack_require__(42)
  , toLength   = __webpack_require__(8)
  , arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(3)(function(){
  if(html)arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end){
    var len   = toLength(this.length)
      , klass = cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return arraySlice.call(this, begin, end);
    var start  = toIndex(begin, len)
      , upTo   = toIndex(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $some   = __webpack_require__(23)(3);

$export($export.P + $export.F * !__webpack_require__(21)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */){
    return $some(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export   = __webpack_require__(0)
  , aFunction = __webpack_require__(12)
  , toObject  = __webpack_require__(9)
  , fails     = __webpack_require__(3)
  , $sort     = [].sort
  , test      = [1, 2, 3];

$export($export.P + $export.F * (fails(function(){
  // IE8-
  test.sort(undefined);
}) || !fails(function(){
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(21)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn){
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('Array');

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(0);

$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(0)
  , fails   = __webpack_require__(3)
  , getTime = Date.prototype.getTime;

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (fails(function(){
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !fails(function(){
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export     = __webpack_require__(0)
  , toObject    = __webpack_require__(9)
  , toPrimitive = __webpack_require__(25);

$export($export.P + $export.F * __webpack_require__(3)(function(){
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
}), 'Date', {
  toJSON: function toJSON(key){
    var O  = toObject(this)
      , pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(5)('toPrimitive')
  , proto        = Date.prototype;

if(!(TO_PRIMITIVE in proto))__webpack_require__(13)(proto, TO_PRIMITIVE, __webpack_require__(171));

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto    = Date.prototype
  , INVALID_DATE = 'Invalid Date'
  , TO_STRING    = 'toString'
  , $toString    = DateProto[TO_STRING]
  , getTime      = DateProto.getTime;
if(new Date(NaN) + '' != INVALID_DATE){
  __webpack_require__(14)(DateProto, TO_STRING, function toString(){
    var value = getTime.call(this);
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(0);

$export($export.P, 'Function', {bind: __webpack_require__(121)});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject       = __webpack_require__(4)
  , getPrototypeOf = __webpack_require__(18)
  , HAS_INSTANCE   = __webpack_require__(5)('hasInstance')
  , FunctionProto  = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(7).f(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(typeof this != 'function' || !isObject(O))return false;
  if(!isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
  return false;
}});

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7).f
  , createDesc = __webpack_require__(32)
  , has        = __webpack_require__(11)
  , FProto     = Function.prototype
  , nameRE     = /^\s*function ([^ (]*)/
  , NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0)
  , log1p   = __webpack_require__(129)
  , sqrt    = Math.sqrt
  , $acosh  = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0)
  , $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0)
  , $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0)
  , sign    = __webpack_require__(95);

$export($export.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0)
  , $expm1  = __webpack_require__(94);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export   = __webpack_require__(0)
  , sign      = __webpack_require__(95)
  , pow       = Math.pow
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export($export.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0)
  , abs     = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0)
  , $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(3)(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {log1p: __webpack_require__(129)});

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {sign: __webpack_require__(95)});

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0)
  , expm1   = __webpack_require__(94)
  , exp     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(3)(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0)
  , expm1   = __webpack_require__(94)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global            = __webpack_require__(2)
  , has               = __webpack_require__(11)
  , cof               = __webpack_require__(19)
  , inheritIfRequired = __webpack_require__(89)
  , toPrimitive       = __webpack_require__(25)
  , fails             = __webpack_require__(3)
  , gOPN              = __webpack_require__(38).f
  , gOPD              = __webpack_require__(17).f
  , dP                = __webpack_require__(7).f
  , $trim             = __webpack_require__(51).trim
  , NUMBER            = 'Number'
  , $Number           = global[NUMBER]
  , Base              = $Number
  , proto             = $Number.prototype
  // Opera ~12 has broken Object#toString
  , BROKEN_COF        = cof(__webpack_require__(37)(proto)) == NUMBER
  , TRIM              = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function(argument){
  var it = toPrimitive(argument, false);
  if(typeof it == 'string' && it.length > 2){
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0)
      , third, radix, maxCode;
    if(first === 43 || first === 45){
      third = it.charCodeAt(2);
      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if(first === 48){
      switch(it.charCodeAt(1)){
        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default : return +it;
      }
      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if(code < 48 || code > maxCode)return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
  $Number = function Number(value){
    var it = arguments.length < 1 ? 0 : value
      , that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++){
    if(has(Base, key = keys[j]) && !has($Number, key)){
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(14)(global, NUMBER, $Number);
}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export   = __webpack_require__(0)
  , _isFinite = __webpack_require__(2).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {isInteger: __webpack_require__(126)});

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export   = __webpack_require__(0)
  , isInteger = __webpack_require__(126)
  , abs       = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var $export     = __webpack_require__(0)
  , $parseFloat = __webpack_require__(136);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var $export   = __webpack_require__(0)
  , $parseInt = __webpack_require__(137);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export      = __webpack_require__(0)
  , toInteger    = __webpack_require__(33)
  , aNumberValue = __webpack_require__(117)
  , repeat       = __webpack_require__(102)
  , $toFixed     = 1..toFixed
  , floor        = Math.floor
  , data         = [0, 0, 0, 0, 0, 0]
  , ERROR        = 'Number.toFixed: incorrect invocation!'
  , ZERO         = '0';

var multiply = function(n, c){
  var i  = -1
    , c2 = c;
  while(++i < 6){
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function(n){
  var i = 6
    , c = 0;
  while(--i >= 0){
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function(){
  var i = 6
    , s = '';
  while(--i >= 0){
    if(s !== '' || i === 0 || data[i] !== 0){
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function(x, n, acc){
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x){
  var n  = 0
    , x2 = x;
  while(x2 >= 4096){
    n += 12;
    x2 /= 4096;
  }
  while(x2 >= 2){
    n  += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128..toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(3)(function(){
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits){
    var x = aNumberValue(this, ERROR)
      , f = toInteger(fractionDigits)
      , s = ''
      , m = ZERO
      , e, z, j, k;
    if(f < 0 || f > 20)throw RangeError(ERROR);
    if(x != x)return 'NaN';
    if(x <= -1e21 || x >= 1e21)return String(x);
    if(x < 0){
      s = '-';
      x = -x;
    }
    if(x > 1e-21){
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if(e > 0){
        multiply(0, z);
        j = f;
        while(j >= 7){
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while(j >= 23){
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if(f > 0){
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export      = __webpack_require__(0)
  , $fails       = __webpack_require__(3)
  , aNumberValue = __webpack_require__(117)
  , $toPrecision = 1..toPrecision;

$export($export.P + $export.F * ($fails(function(){
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function(){
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision){
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
  }
});

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(130)});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(37)});

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(131)});

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(4)
  , meta     = __webpack_require__(31).onFreeze;

__webpack_require__(24)('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(16)
  , $getOwnPropertyDescriptor = __webpack_require__(17).f;

__webpack_require__(24)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(24)('getOwnPropertyNames', function(){
  return __webpack_require__(132).f;
});

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(9)
  , $getPrototypeOf = __webpack_require__(18);

__webpack_require__(24)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(24)('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(4);

__webpack_require__(24)('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(4);

__webpack_require__(24)('isSealed', function($isSealed){
  return function isSealed(it){
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', {is: __webpack_require__(138)});

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(9)
  , $keys    = __webpack_require__(39);

__webpack_require__(24)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(4)
  , meta     = __webpack_require__(31).onFreeze;

__webpack_require__(24)('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(4)
  , meta     = __webpack_require__(31).onFreeze;

__webpack_require__(24)('seal', function($seal){
  return function seal(it){
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(97).set});

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(59)
  , test    = {};
test[__webpack_require__(5)('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  __webpack_require__(14)(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var $export     = __webpack_require__(0)
  , $parseFloat = __webpack_require__(136);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var $export   = __webpack_require__(0)
  , $parseInt = __webpack_require__(137);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(36)
  , global             = __webpack_require__(2)
  , ctx                = __webpack_require__(27)
  , classof            = __webpack_require__(59)
  , $export            = __webpack_require__(0)
  , isObject           = __webpack_require__(4)
  , aFunction          = __webpack_require__(12)
  , anInstance         = __webpack_require__(35)
  , forOf              = __webpack_require__(48)
  , speciesConstructor = __webpack_require__(99)
  , task               = __webpack_require__(104).set
  , microtask          = __webpack_require__(96)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(40)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(50)($Promise, PROMISE);
__webpack_require__(41)(PROMISE);
Wrapper = __webpack_require__(26)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(72)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export   = __webpack_require__(0)
  , aFunction = __webpack_require__(12)
  , anObject  = __webpack_require__(1)
  , rApply    = (__webpack_require__(2).Reflect || {}).apply
  , fApply    = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(3)(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = aFunction(target)
      , L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export    = __webpack_require__(0)
  , create     = __webpack_require__(37)
  , aFunction  = __webpack_require__(12)
  , anObject   = __webpack_require__(1)
  , isObject   = __webpack_require__(4)
  , fails      = __webpack_require__(3)
  , bind       = __webpack_require__(121)
  , rConstruct = (__webpack_require__(2).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function(){
  rConstruct(function(){});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP          = __webpack_require__(7)
  , $export     = __webpack_require__(0)
  , anObject    = __webpack_require__(1)
  , toPrimitive = __webpack_require__(25);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(3)(function(){
  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export  = __webpack_require__(0)
  , gOPD     = __webpack_require__(17).f
  , anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export  = __webpack_require__(0)
  , anObject = __webpack_require__(1);
var Enumerate = function(iterated){
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated)keys.push(key);
};
__webpack_require__(92)(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length)return {value: undefined, done: true};
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD     = __webpack_require__(17)
  , $export  = __webpack_require__(0)
  , anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export  = __webpack_require__(0)
  , getProto = __webpack_require__(18)
  , anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject(target));
  }
});

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD           = __webpack_require__(17)
  , getPrototypeOf = __webpack_require__(18)
  , has            = __webpack_require__(11)
  , $export        = __webpack_require__(0)
  , isObject       = __webpack_require__(4)
  , anObject       = __webpack_require__(1);

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {get: get});

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export       = __webpack_require__(0)
  , anObject      = __webpack_require__(1)
  , $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {ownKeys: __webpack_require__(135)});

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export            = __webpack_require__(0)
  , anObject           = __webpack_require__(1)
  , $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export  = __webpack_require__(0)
  , setProto = __webpack_require__(97);

if(setProto)$export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP             = __webpack_require__(7)
  , gOPD           = __webpack_require__(17)
  , getPrototypeOf = __webpack_require__(18)
  , has            = __webpack_require__(11)
  , $export        = __webpack_require__(0)
  , createDesc     = __webpack_require__(32)
  , anObject       = __webpack_require__(1)
  , isObject       = __webpack_require__(4);

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = gOPD.f(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = getPrototypeOf(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {set: set});

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var global            = __webpack_require__(2)
  , inheritIfRequired = __webpack_require__(89)
  , dP                = __webpack_require__(7).f
  , gOPN              = __webpack_require__(38).f
  , isRegExp          = __webpack_require__(71)
  , $flags            = __webpack_require__(69)
  , $RegExp           = global.RegExp
  , Base              = $RegExp
  , proto             = $RegExp.prototype
  , re1               = /a/g
  , re2               = /a/g
  // "new" creates a new object, old webkit buggy here
  , CORRECT_NEW       = new $RegExp(re1) !== re1;

if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(3)(function(){
  re2[__webpack_require__(5)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))){
  $RegExp = function RegExp(p, f){
    var tiRE = this instanceof $RegExp
      , piRE = isRegExp(p)
      , fiU  = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function(key){
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function(){ return Base[key]; },
      set: function(it){ Base[key] = it; }
    });
  };
  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(14)(global, 'RegExp', $RegExp);
}

__webpack_require__(41)('RegExp');

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(68)('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(68)('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(68)('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(68)('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp   = __webpack_require__(71)
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0)return [];
      // If `separator` is not a regex, use native split
      if(!isRegExp(separator))return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
          });
          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit)break;
        }
        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test(''))output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(142);
var anObject    = __webpack_require__(1)
  , $flags      = __webpack_require__(69)
  , DESCRIPTORS = __webpack_require__(6)
  , TO_STRING   = 'toString'
  , $toString   = /./[TO_STRING];

var define = function(fn){
  __webpack_require__(14)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if(__webpack_require__(3)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
  define(function toString(){
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if($toString.name != TO_STRING){
  define(function toString(){
    return $toString.call(this);
  });
}

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(15)('anchor', function(createHTML){
  return function anchor(name){
    return createHTML(this, 'a', 'name', name);
  }
});

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(15)('big', function(createHTML){
  return function big(){
    return createHTML(this, 'big', '', '');
  }
});

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(15)('blink', function(createHTML){
  return function blink(){
    return createHTML(this, 'blink', '', '');
  }
});

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(15)('bold', function(createHTML){
  return function bold(){
    return createHTML(this, 'b', '', '');
  }
});

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $at     = __webpack_require__(100)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export   = __webpack_require__(0)
  , toLength  = __webpack_require__(8)
  , context   = __webpack_require__(101)
  , ENDS_WITH = 'endsWith'
  , $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(87)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(15)('fixed', function(createHTML){
  return function fixed(){
    return createHTML(this, 'tt', '', '');
  }
});

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(15)('fontcolor', function(createHTML){
  return function fontcolor(color){
    return createHTML(this, 'font', 'color', color);
  }
});

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(15)('fontsize', function(createHTML){
  return function fontsize(size){
    return createHTML(this, 'font', 'size', size);
  }
});

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var $export        = __webpack_require__(0)
  , toIndex        = __webpack_require__(42)
  , fromCharCode   = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export  = __webpack_require__(0)
  , context  = __webpack_require__(101)
  , INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(87)(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(15)('italics', function(createHTML){
  return function italics(){
    return createHTML(this, 'i', '', '');
  }
});

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(100)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(93)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(15)('link', function(createHTML){
  return function link(url){
    return createHTML(this, 'a', 'href', url);
  }
});

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var $export   = __webpack_require__(0)
  , toIObject = __webpack_require__(16)
  , toLength  = __webpack_require__(8);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl  = toIObject(callSite.raw)
      , len  = toLength(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen)res.push(String(arguments[i]));
    } return res.join('');
  }
});

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(102)
});

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(15)('small', function(createHTML){
  return function small(){
    return createHTML(this, 'small', '', '');
  }
});

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export     = __webpack_require__(0)
  , toLength    = __webpack_require__(8)
  , context     = __webpack_require__(101)
  , STARTS_WITH = 'startsWith'
  , $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(87)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, STARTS_WITH)
      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(15)('strike', function(createHTML){
  return function strike(){
    return createHTML(this, 'strike', '', '');
  }
});

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(15)('sub', function(createHTML){
  return function sub(){
    return createHTML(this, 'sub', '', '');
  }
});

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(15)('sup', function(createHTML){
  return function sup(){
    return createHTML(this, 'sup', '', '');
  }
});

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(51)('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(2)
  , has            = __webpack_require__(11)
  , DESCRIPTORS    = __webpack_require__(6)
  , $export        = __webpack_require__(0)
  , redefine       = __webpack_require__(14)
  , META           = __webpack_require__(31).KEY
  , $fails         = __webpack_require__(3)
  , shared         = __webpack_require__(75)
  , setToStringTag = __webpack_require__(50)
  , uid            = __webpack_require__(43)
  , wks            = __webpack_require__(5)
  , wksExt         = __webpack_require__(140)
  , wksDefine      = __webpack_require__(106)
  , keyOf          = __webpack_require__(173)
  , enumKeys       = __webpack_require__(172)
  , isArray        = __webpack_require__(91)
  , anObject       = __webpack_require__(1)
  , toIObject      = __webpack_require__(16)
  , toPrimitive    = __webpack_require__(25)
  , createDesc     = __webpack_require__(32)
  , _create        = __webpack_require__(37)
  , gOPNExt        = __webpack_require__(132)
  , $GOPD          = __webpack_require__(17)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(39)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(38).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(61).f  = $propertyIsEnumerable;
  __webpack_require__(74).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(36)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export      = __webpack_require__(0)
  , $typed       = __webpack_require__(76)
  , buffer       = __webpack_require__(105)
  , anObject     = __webpack_require__(1)
  , toIndex      = __webpack_require__(42)
  , toLength     = __webpack_require__(8)
  , isObject     = __webpack_require__(4)
  , ArrayBuffer  = __webpack_require__(2).ArrayBuffer
  , speciesConstructor = __webpack_require__(99)
  , $ArrayBuffer = buffer.ArrayBuffer
  , $DataView    = buffer.DataView
  , $isView      = $typed.ABV && ArrayBuffer.isView
  , $slice       = $ArrayBuffer.prototype.slice
  , VIEW         = $typed.VIEW
  , ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(3)(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
    var len    = anObject(this).byteLength
      , first  = toIndex(start, len)
      , final  = toIndex(end === undefined ? len : end, len)
      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(41)(ARRAY_BUFFER);

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(76).ABV, {
  DataView: __webpack_require__(105).DataView
});

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(124);

// 23.4 WeakSet Objects
__webpack_require__(67)('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export   = __webpack_require__(0)
  , $includes = __webpack_require__(66)(true);

$export($export.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(47)('includes');

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export   = __webpack_require__(0)
  , microtask = __webpack_require__(96)()
  , process   = __webpack_require__(2).process
  , isNode    = __webpack_require__(19)(process) == 'process';

$export($export.G, {
  asap: function asap(fn){
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(0)
  , cof     = __webpack_require__(19);

$export($export.S, 'Error', {
  isError: function isError(it){
    return cof(it) === 'Error';
  }
});

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(0);

$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(123)('Map')});

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  imulh: function imulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >> 16
      , v1 = $v >> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  umulh: function umulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >>> 16
      , v1 = $v >>> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export         = __webpack_require__(0)
  , toObject        = __webpack_require__(9)
  , aFunction       = __webpack_require__(12)
  , $defineProperty = __webpack_require__(7);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(6) && $export($export.P + __webpack_require__(73), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter){
    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
  }
});

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export         = __webpack_require__(0)
  , toObject        = __webpack_require__(9)
  , aFunction       = __webpack_require__(12)
  , $defineProperty = __webpack_require__(7);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(6) && $export($export.P + __webpack_require__(73), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter){
    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
  }
});

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export  = __webpack_require__(0)
  , $entries = __webpack_require__(134)(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export        = __webpack_require__(0)
  , ownKeys        = __webpack_require__(135)
  , toIObject      = __webpack_require__(16)
  , gOPD           = __webpack_require__(17)
  , createProperty = __webpack_require__(84);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , getDesc = gOPD.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export                  = __webpack_require__(0)
  , toObject                 = __webpack_require__(9)
  , toPrimitive              = __webpack_require__(25)
  , getPrototypeOf           = __webpack_require__(18)
  , getOwnPropertyDescriptor = __webpack_require__(17).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(6) && $export($export.P + __webpack_require__(73), 'Object', {
  __lookupGetter__: function __lookupGetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.get;
    } while(O = getPrototypeOf(O));
  }
});

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export                  = __webpack_require__(0)
  , toObject                 = __webpack_require__(9)
  , toPrimitive              = __webpack_require__(25)
  , getPrototypeOf           = __webpack_require__(18)
  , getOwnPropertyDescriptor = __webpack_require__(17).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(6) && $export($export.P + __webpack_require__(73), 'Object', {
  __lookupSetter__: function __lookupSetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.set;
    } while(O = getPrototypeOf(O));
  }
});

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0)
  , $values = __webpack_require__(134)(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export     = __webpack_require__(0)
  , global      = __webpack_require__(2)
  , core        = __webpack_require__(26)
  , microtask   = __webpack_require__(96)()
  , OBSERVABLE  = __webpack_require__(5)('observable')
  , aFunction   = __webpack_require__(12)
  , anObject    = __webpack_require__(1)
  , anInstance  = __webpack_require__(35)
  , redefineAll = __webpack_require__(40)
  , hide        = __webpack_require__(13)
  , forOf       = __webpack_require__(48)
  , RETURN      = forOf.RETURN;

var getMethod = function(fn){
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function(subscription){
  var cleanup = subscription._c;
  if(cleanup){
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function(subscription){
  return subscription._o === undefined;
};

var closeSubscription = function(subscription){
  if(!subscriptionClosed(subscription)){
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function(observer, subscriber){
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup      = subscriber(observer)
      , subscription = cleanup;
    if(cleanup != null){
      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch(e){
    observer.error(e);
    return;
  } if(subscriptionClosed(this))cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe(){ closeSubscription(this); }
});

var SubscriptionObserver = function(subscription){
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if(m)return m.call(observer, value);
      } catch(e){
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value){
    var subscription = this._s;
    if(subscriptionClosed(subscription))throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if(!m)throw value;
      value = m.call(observer, value);
    } catch(e){
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber){
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer){
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn){
    var that = this;
    return new (core.Promise || global.Promise)(function(resolve, reject){
      aFunction(fn);
      var subscription = that.subscribe({
        next : function(value){
          try {
            return fn(value);
          } catch(e){
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x){
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if(method){
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function(observer){
        return observable.subscribe(observer);
      });
    }
    return new C(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          try {
            if(forOf(x, false, function(it){
              observer.next(it);
              if(done)return RETURN;
            }) === RETURN)return;
          } catch(e){
            if(done)throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  },
  of: function of(){
    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          for(var i = 0; i < items.length; ++i){
            observer.next(items[i]);
            if(done)return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function(){ return this; });

$export($export.G, {Observable: $Observable});

__webpack_require__(41)('Observable');

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var metadata                  = __webpack_require__(28)
  , anObject                  = __webpack_require__(1)
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
}});

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__(28)
  , anObject               = __webpack_require__(1)
  , toMetaKey              = metadata.key
  , getOrCreateMetadataMap = metadata.map
  , store                  = metadata.store;

metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
  if(metadataMap.size)return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
}});

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var Set                     = __webpack_require__(143)
  , from                    = __webpack_require__(119)
  , metadata                = __webpack_require__(28)
  , anObject                = __webpack_require__(1)
  , getPrototypeOf          = __webpack_require__(18)
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

var ordinaryMetadataKeys = function(O, P){
  var oKeys  = ordinaryOwnMetadataKeys(O, P)
    , parent = getPrototypeOf(O);
  if(parent === null)return oKeys;
  var pKeys  = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__(28)
  , anObject               = __webpack_require__(1)
  , getPrototypeOf         = __webpack_require__(18)
  , ordinaryHasOwnMetadata = metadata.has
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

var ordinaryGetMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var metadata                = __webpack_require__(28)
  , anObject                = __webpack_require__(1)
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__(28)
  , anObject               = __webpack_require__(1)
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__(28)
  , anObject               = __webpack_require__(1)
  , getPrototypeOf         = __webpack_require__(18)
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

var ordinaryHasMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

var metadata               = __webpack_require__(28)
  , anObject               = __webpack_require__(1)
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var metadata                  = __webpack_require__(28)
  , anObject                  = __webpack_require__(1)
  , aFunction                 = __webpack_require__(12)
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({metadata: function metadata(metadataKey, metadataValue){
  return function decorator(target, targetKey){
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
}});

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(0);

$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(123)('Set')});

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(0)
  , $at     = __webpack_require__(100)(true);

$export($export.P, 'String', {
  at: function at(pos){
    return $at(this, pos);
  }
});

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export     = __webpack_require__(0)
  , defined     = __webpack_require__(20)
  , toLength    = __webpack_require__(8)
  , isRegExp    = __webpack_require__(71)
  , getFlags    = __webpack_require__(69)
  , RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function(regexp, string){
  this._r = regexp;
  this._s = string;
};

__webpack_require__(92)($RegExpStringIterator, 'RegExp String', function next(){
  var match = this._r.exec(this._s);
  return {value: match, done: match === null};
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp){
    defined(this);
    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
    var S     = String(this)
      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0)
  , $pad    = __webpack_require__(139);

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0)
  , $pad    = __webpack_require__(139);

$export($export.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(51)('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
}, 'trimStart');

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(51)('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
}, 'trimEnd');

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106)('asyncIterator');

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106)('observable');

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-global
var $export = __webpack_require__(0);

$export($export.S, 'System', {global: __webpack_require__(2)});

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators    = __webpack_require__(108)
  , redefine      = __webpack_require__(14)
  , global        = __webpack_require__(2)
  , hide          = __webpack_require__(13)
  , Iterators     = __webpack_require__(49)
  , wks           = __webpack_require__(5)
  , ITERATOR      = wks('iterator')
  , TO_STRING_TAG = wks('toStringTag')
  , ArrayValues   = Iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
  }
}

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0)
  , $task   = __webpack_require__(104);
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global     = __webpack_require__(2)
  , $export    = __webpack_require__(0)
  , invoke     = __webpack_require__(70)
  , partial    = __webpack_require__(174)
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(297);
__webpack_require__(236);
__webpack_require__(238);
__webpack_require__(237);
__webpack_require__(240);
__webpack_require__(242);
__webpack_require__(247);
__webpack_require__(241);
__webpack_require__(239);
__webpack_require__(249);
__webpack_require__(248);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(243);
__webpack_require__(235);
__webpack_require__(246);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(203);
__webpack_require__(205);
__webpack_require__(204);
__webpack_require__(253);
__webpack_require__(252);
__webpack_require__(223);
__webpack_require__(233);
__webpack_require__(234);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(231);
__webpack_require__(232);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(211);
__webpack_require__(212);
__webpack_require__(213);
__webpack_require__(214);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(217);
__webpack_require__(218);
__webpack_require__(219);
__webpack_require__(220);
__webpack_require__(221);
__webpack_require__(222);
__webpack_require__(284);
__webpack_require__(289);
__webpack_require__(296);
__webpack_require__(287);
__webpack_require__(279);
__webpack_require__(280);
__webpack_require__(285);
__webpack_require__(290);
__webpack_require__(292);
__webpack_require__(275);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(281);
__webpack_require__(282);
__webpack_require__(283);
__webpack_require__(286);
__webpack_require__(288);
__webpack_require__(291);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(198);
__webpack_require__(200);
__webpack_require__(199);
__webpack_require__(202);
__webpack_require__(201);
__webpack_require__(187);
__webpack_require__(185);
__webpack_require__(191);
__webpack_require__(188);
__webpack_require__(194);
__webpack_require__(196);
__webpack_require__(184);
__webpack_require__(190);
__webpack_require__(181);
__webpack_require__(195);
__webpack_require__(179);
__webpack_require__(193);
__webpack_require__(192);
__webpack_require__(186);
__webpack_require__(189);
__webpack_require__(178);
__webpack_require__(180);
__webpack_require__(183);
__webpack_require__(182);
__webpack_require__(197);
__webpack_require__(108);
__webpack_require__(269);
__webpack_require__(274);
__webpack_require__(142);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(273);
__webpack_require__(254);
__webpack_require__(141);
__webpack_require__(143);
__webpack_require__(144);
__webpack_require__(309);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(304);
__webpack_require__(307);
__webpack_require__(308);
__webpack_require__(302);
__webpack_require__(305);
__webpack_require__(303);
__webpack_require__(306);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(255);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(259);
__webpack_require__(262);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(263);
__webpack_require__(264);
__webpack_require__(265);
__webpack_require__(266);
__webpack_require__(268);
__webpack_require__(267);
__webpack_require__(310);
__webpack_require__(336);
__webpack_require__(339);
__webpack_require__(338);
__webpack_require__(340);
__webpack_require__(341);
__webpack_require__(337);
__webpack_require__(342);
__webpack_require__(343);
__webpack_require__(321);
__webpack_require__(324);
__webpack_require__(320);
__webpack_require__(318);
__webpack_require__(319);
__webpack_require__(322);
__webpack_require__(323);
__webpack_require__(313);
__webpack_require__(335);
__webpack_require__(344);
__webpack_require__(312);
__webpack_require__(314);
__webpack_require__(316);
__webpack_require__(315);
__webpack_require__(317);
__webpack_require__(326);
__webpack_require__(327);
__webpack_require__(329);
__webpack_require__(328);
__webpack_require__(331);
__webpack_require__(330);
__webpack_require__(332);
__webpack_require__(333);
__webpack_require__(334);
__webpack_require__(311);
__webpack_require__(325);
__webpack_require__(347);
__webpack_require__(346);
__webpack_require__(345);
module.exports = __webpack_require__(26);

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(350);


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var type = __webpack_require__(351);

/*!
 * Buffer.isBuffer browser shim
 */

var Buffer;
try { Buffer = __webpack_require__(45).Buffer; }
catch(ex) {
  Buffer = {};
  Buffer.isBuffer = function() { return false; }
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
  } else if ('date' === type(a)) {
    return dateEqual(a, b);
  } else if ('regexp' === type(a)) {
    return regexpEqual(a, b);
  } else if (Buffer.isBuffer(a)) {
    return bufferEqual(a, b);
  } else if ('arguments' === type(a)) {
    return argumentsEqual(a, b, m);
  } else if (!typeEqual(a, b)) {
    return false;
  } else if (('object' !== type(a) && 'object' !== type(b))
  && ('array' !== type(a) && 'array' !== type(b))) {
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
  if ('date' !== type(b)) return false;
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
  if ('regexp' !== type(b)) return false;
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
  if ('arguments' !== type(b)) return false;
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
  for (var key in a) res.push(key);
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
  if (a.length !==  b.length) return false;

  var i = 0;
  var match = true;

  for (; i < a.length; i++) {
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
      if ((m[i][0] === a && m[i][1] === b)
      ||  (m[i][0] === b && m[i][1] === a)) {
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


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(352);


/***/ }),
/* 352 */
/***/ (function(module, exports) {

/*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Primary Exports
 */

var exports = module.exports = getType;

/*!
 * Detectable javascript natives
 */

var natives = {
    '[object Array]': 'array'
  , '[object RegExp]': 'regexp'
  , '[object Function]': 'function'
  , '[object Arguments]': 'arguments'
  , '[object Date]': 'date'
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

function getType (obj) {
  var str = Object.prototype.toString.call(obj);
  if (natives[str]) return natives[str];
  if (obj === null) return 'null';
  if (obj === undefined) return 'undefined';
  if (obj === Object(obj)) return 'object';
  return typeof obj;
}

exports.Library = Library;

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

function Library () {
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

Library.prototype.define = function (type, test) {
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

Library.prototype.test = function (obj, type) {
  if (type === getType(obj)) return true;
  var test = this.tests[type];

  if (test && 'regexp' === getType(test)) {
    return test.test(obj);
  } else if (test && 'function' === getType(test)) {
    return test(obj);
  } else {
    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
  }
};


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44), __webpack_require__(52)))

/***/ }),
/* 354 */
/***/ (function(module, exports) {

/*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Primary Exports
 */

var exports = module.exports = getType;

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
  if (typeof Promise === 'function' && obj instanceof Promise) return 'promise';
  // PhantomJS has type "DOMWindow" for null
  if (obj === null) return 'null';
  // PhantomJS has type "DOMWindow" for undefined
  if (obj === undefined) return 'undefined';
  return type;
}

exports.Library = Library;

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

  if (test && 'regexp' === getType(test)) {
    return test.test(obj);
  } else if (test && 'function' === getType(test)) {
    return test(obj);
  } else {
    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
  }
};


/***/ }),
/* 355 */,
/* 356 */,
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
module.exports = __webpack_require__(146);


/***/ })
/******/ ]);
});
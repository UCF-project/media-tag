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
/******/ 	return __webpack_require__(__webpack_require__.s = 356);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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

/***/ 22:
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

/***/ 30:
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

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),

/***/ 44:
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

/***/ 45:
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

/***/ 52:
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

/***/ 53:
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

/***/ 54:
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

/***/ 55:
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

/***/ 56:
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

/***/ 57:
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

/***/ 58:
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

/***/ 62:
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

/***/ 63:
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

/***/ 64:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 65:
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

/***/ 77:
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

/***/ 78:
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

/***/ 79:
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

/***/ 80:
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

/***/ 81:
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

/***/ })

/******/ });
});
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource.addMessageListener)(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  fetch(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage),
    timeout: 5000
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

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
  exports.wrap = wrap;

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
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

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
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
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
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
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
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
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
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
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

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

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

  exports.keys = function(object) {
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
  exports.values = values;

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

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9hbXAtZGV2LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2V2ZW50LXNvdXJjZS1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2ZvdWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9ldmVudFNvdXJjZVBvbHlmaWxsIiwiX2V2ZW50c291cmNlIiwiX29uRGVtYW5kRW50cmllc1V0aWxzIiwiX2ZvdWMiLCJ3aW5kb3ciLCJFdmVudFNvdXJjZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJqc29uRGF0YSIsImN1clBhZ2UiLCJwYWdlVXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsImMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsIm1vZCIsImluZGV4T2YiLCJzdWJzdHIiLCJyZXBsYWNlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRNZXNzYWdlTGlzdGVuZXIiLCJldmVudCIsIm1lc3NhZ2UiLCJhY3Rpb24iLCJoYXNoIiwiZXgiLCJ3YXJuIiwic2V0dXBQaW5nIiwiZGlzcGxheUNvbnRlbnQiLCJleHBvcnRzIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwiZXZlbnRDYWxsYmFja3MiLCJFdmVudFNvdXJjZVdyYXBwZXIiLCJvcHRpb25zIiwic291cmNlIiwibGFzdEFjdGl2aXR5IiwiRGF0ZSIsImxpc3RlbmVycyIsInRpbWVvdXQiLCJpbml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImhhbmRsZURpc2Nvbm5lY3QiLCJwYXRoIiwib25vcGVuIiwiaGFuZGxlT25saW5lIiwib25lcnJvciIsIm9ubWVzc2FnZSIsImhhbmRsZU1lc3NhZ2UiLCJsb2ciLCJpIiwibGVuZ3RoIiwiZm9yRWFjaCIsImNiIiwidW5maWx0ZXJlZCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsInNldFRpbWVvdXQiLCJmbiIsInB1c2giLCJSZXNwb25zZSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJzaWduYWwiLCJhYm9ydCIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJiaXRzTmVlZGVkIiwiY29kZVBvaW50IiwicHJvdG90eXBlIiwiZGVjb2RlIiwib2N0ZXRzIiwidmFsaWQiLCJzaGlmdCIsIm9jdGV0c0NvdW50IiwiRXJyb3IiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwic2lsZW50IiwiY2xlYXJUaW1lb3V0Iiwib25sb2FkIiwib25hYm9ydCIsIm9uU3RhcnQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25Qcm9ncmVzcyIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJuYW1lIiwic2V0UmVxdWVzdEhlYWRlciIsInZhbHVlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsImRvbmUiLCJFdmVudFRhcmdldCIsIl9saXN0ZW5lcnMiLCJ0aHJvd0Vycm9yIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwidHlwZSIsImxpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm91bmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsImxhc3RFdmVudElkIiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwiZGVmIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJlIiwiZiIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJfY2xvc2UiLCJzdGFydCIsImlzRmV0Y2hTdXBwb3J0ZWQiLCJlcyIsIkJvb2xlYW4iLCJpbml0aWFsUmV0cnkiLCJoZWFydGJlYXRUaW1lb3V0IiwicmV0cnkiLCJ3YXNBY3Rpdml0eSIsInN0cmluZ2lmeSIsIkN1cnJlbnRUcmFuc3BvcnQiLCJUcmFuc3BvcnQiLCJ0cmFuc3BvcnQiLCJjYW5jZWxGdW5jdGlvbiIsImN1cnJlbnRTdGF0ZSIsImRhdGFCdWZmZXIiLCJsYXN0RXZlbnRJZEJ1ZmZlciIsImV2ZW50VHlwZUJ1ZmZlciIsInRleHRCdWZmZXIiLCJmaWVsZFN0YXJ0IiwidmFsdWVTdGFydCIsInRlc3QiLCJ0ZXh0Q2h1bmsiLCJwb3NpdGlvbiIsImZpZWxkIiwicmVxdWVzdFVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RIZWFkZXJzIiwiX2RlZmF1bHQiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIngiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY2xvc2VQaW5nIiwiZXZ0U291cmNlIiwiY3VycmVudFBhZ2UiLCJwYXRobmFtZUZuIiwicGF0aG5hbWUiLCJwYXlsb2FkIiwiaW52YWxpZCIsImhyZWYiLCJwYWdlUmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxnSEFBK0M7Ozs7Ozs7Ozs7Ozs7QUNBbEM7Ozs7OztBQUFBLElBQUlBLHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLG9IQUFELENBQWxDOztBQUFtRixJQUFJQyxvQkFBb0IsR0FBQ0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsNkZBQUQsQ0FBUixDQUEvQzs7QUFBb0YsSUFBSUUsWUFBWSxHQUFDRixtQkFBTyxDQUFDLHFHQUFELENBQXhCOztBQUF3RCxJQUFJRyxxQkFBcUIsR0FBQ0gsbUJBQU8sQ0FBQyxpR0FBRCxDQUFqQzs7QUFBK0QsSUFBSUksS0FBSyxHQUFDSixtQkFBTyxDQUFDLDJEQUFELENBQWpCO0FBQTRCOzs7QUFBOEIsSUFBRyxD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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsQ0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy9hbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9ldmVudFNvdXJjZVBvbHlmaWxsPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZXZlbnQtc291cmNlLXBvbHlmaWxsXCIpKTt2YXIgX2V2ZW50c291cmNlPXJlcXVpcmUoXCIuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2VcIik7dmFyIF9vbkRlbWFuZEVudHJpZXNVdGlscz1yZXF1aXJlKFwiLi9vbi1kZW1hbmQtZW50cmllcy11dGlsc1wiKTt2YXIgX2ZvdWM9cmVxdWlyZShcIi4vZm91Y1wiKTsvKiBnbG9iYWxzIF9fd2VicGFja19oYXNoX18gKi9pZighd2luZG93LkV2ZW50U291cmNlKXt3aW5kb3cuRXZlbnRTb3VyY2U9X2V2ZW50U291cmNlUG9seWZpbGwuZGVmYXVsdDt9Y29uc3QgZGF0YT1KU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpO2xldHthc3NldFByZWZpeCxwYWdlfT1kYXRhO2Fzc2V0UHJlZml4PWFzc2V0UHJlZml4fHwnJztsZXQgbW9zdFJlY2VudEhhc2g9bnVsbDsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9sZXQgY3VySGFzaD1fX3dlYnBhY2tfaGFzaF9fO2NvbnN0IGhvdFVwZGF0ZVBhdGg9YXNzZXRQcmVmaXgrKGFzc2V0UHJlZml4LmVuZHNXaXRoKCcvJyk/Jyc6Jy8nKSsnX25leHQvc3RhdGljL3dlYnBhY2svJzsvLyBJcyB0aGVyZSBhIG5ld2VyIHZlcnNpb24gb2YgdGhpcyBjb2RlIGF2YWlsYWJsZT9cbmZ1bmN0aW9uIGlzVXBkYXRlQXZhaWxhYmxlKCl7Ly8gX193ZWJwYWNrX2hhc2hfXyBpcyB0aGUgaGFzaCBvZiB0aGUgY3VycmVudCBjb21waWxhdGlvbi5cbi8vIEl0J3MgYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgYnkgV2VicGFjay5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL3JldHVybiBtb3N0UmVjZW50SGFzaCE9PV9fd2VicGFja19oYXNoX187fS8vIFdlYnBhY2sgZGlzYWxsb3dzIHVwZGF0ZXMgaW4gb3RoZXIgc3RhdGVzLlxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCl7cmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCk9PT0naWRsZSc7fS8vIFRoaXMgZnVuY3Rpb24gcmVhZHMgY29kZSB1cGRhdGVzIG9uIHRoZSBmbHkgYW5kIGhhcmRcbi8vIHJlbG9hZHMgdGhlIHBhZ2Ugd2hlbiBpdCBoYXMgY2hhbmdlZC5cbmFzeW5jIGZ1bmN0aW9uIHRyeUFwcGx5VXBkYXRlcygpe2lmKCFpc1VwZGF0ZUF2YWlsYWJsZSgpfHwhY2FuQXBwbHlVcGRhdGVzKCkpe3JldHVybjt9dHJ5e2NvbnN0IHJlcz1hd2FpdCBmZXRjaChgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uaG90LXVwZGF0ZS5qc29uYCk7Y29uc3QganNvbkRhdGE9YXdhaXQgcmVzLmpzb24oKTtjb25zdCBjdXJQYWdlPXBhZ2U9PT0nLyc/J2luZGV4JzpwYWdlOy8vIHdlYnBhY2sgNSB1c2VzIGFuIGFycmF5IGluc3RlYWRcbmNvbnN0IHBhZ2VVcGRhdGVkPShBcnJheS5pc0FycmF5KGpzb25EYXRhLmMpP2pzb25EYXRhLmM6T2JqZWN0LmtleXMoanNvbkRhdGEuYykpLnNvbWUobW9kPT57cmV0dXJuIG1vZC5pbmRleE9mKGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwxKT09PScvJz9jdXJQYWdlOmAvJHtjdXJQYWdlfWB9YCkhPT0tMXx8bW9kLmluZGV4T2YoYHBhZ2VzJHtjdXJQYWdlLnN1YnN0cigwLDEpPT09Jy8nP2N1clBhZ2U6YC8ke2N1clBhZ2V9YH1gLnJlcGxhY2UoL1xcLy9nLCdcXFxcJykpIT09LTE7fSk7aWYocGFnZVVwZGF0ZWQpe2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTt9ZWxzZXtjdXJIYXNoPW1vc3RSZWNlbnRIYXNoO319Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCBjaGVja2luZyBmb3IgdXBkYXRlJyxlcnIpO2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTt9fSgwLF9ldmVudHNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIpKGV2ZW50PT57aWYoZXZlbnQuZGF0YT09PSdcXHVEODNEXFx1REM5Mycpe3JldHVybjt9dHJ5e2NvbnN0IG1lc3NhZ2U9SlNPTi5wYXJzZShldmVudC5kYXRhKTtpZihtZXNzYWdlLmFjdGlvbj09PSdzeW5jJ3x8bWVzc2FnZS5hY3Rpb249PT0nYnVpbHQnKXtpZighbWVzc2FnZS5oYXNoKXtyZXR1cm47fW1vc3RSZWNlbnRIYXNoPW1lc3NhZ2UuaGFzaDt0cnlBcHBseVVwZGF0ZXMoKTt9ZWxzZSBpZihtZXNzYWdlLmFjdGlvbj09PSdyZWxvYWRQYWdlJyl7ZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO319Y2F0Y2goZXgpe2NvbnNvbGUud2FybignSW52YWxpZCBITVIgbWVzc2FnZTogJytldmVudC5kYXRhKydcXG4nK2V4KTt9fSk7KDAsX29uRGVtYW5kRW50cmllc1V0aWxzLnNldHVwUGluZykoYXNzZXRQcmVmaXgsKCk9PnBhZ2UpOygwLF9mb3VjLmRpc3BsYXlDb250ZW50KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLWRldi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmFkZE1lc3NhZ2VMaXN0ZW5lcj1hZGRNZXNzYWdlTGlzdGVuZXI7ZXhwb3J0cy5nZXRFdmVudFNvdXJjZVdyYXBwZXI9Z2V0RXZlbnRTb3VyY2VXcmFwcGVyO2NvbnN0IGV2ZW50Q2FsbGJhY2tzPVtdO2Z1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKXt2YXIgc291cmNlO3ZhciBsYXN0QWN0aXZpdHk9bmV3IERhdGUoKTt2YXIgbGlzdGVuZXJzPVtdO2lmKCFvcHRpb25zLnRpbWVvdXQpe29wdGlvbnMudGltZW91dD0yMCoxMDAwO31pbml0KCk7dmFyIHRpbWVyPXNldEludGVydmFsKGZ1bmN0aW9uKCl7aWYobmV3IERhdGUoKS1sYXN0QWN0aXZpdHk+b3B0aW9ucy50aW1lb3V0KXtoYW5kbGVEaXNjb25uZWN0KCk7fX0sb3B0aW9ucy50aW1lb3V0LzIpO2Z1bmN0aW9uIGluaXQoKXtzb3VyY2U9bmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpO3NvdXJjZS5vbm9wZW49aGFuZGxlT25saW5lO3NvdXJjZS5vbmVycm9yPWhhbmRsZURpc2Nvbm5lY3Q7c291cmNlLm9ubWVzc2FnZT1oYW5kbGVNZXNzYWdlO31mdW5jdGlvbiBoYW5kbGVPbmxpbmUoKXtpZihvcHRpb25zLmxvZyljb25zb2xlLmxvZygnW0hNUl0gY29ubmVjdGVkJyk7bGFzdEFjdGl2aXR5PW5ldyBEYXRlKCk7fWZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpe2xhc3RBY3Rpdml0eT1uZXcgRGF0ZSgpO2Zvcih2YXIgaT0wO2k8bGlzdGVuZXJzLmxlbmd0aDtpKyspe2xpc3RlbmVyc1tpXShldmVudCk7fWV2ZW50Q2FsbGJhY2tzLmZvckVhY2goY2I9PntpZighY2IudW5maWx0ZXJlZCYmZXZlbnQuZGF0YS5pbmRleE9mKCdhY3Rpb24nKT09PS0xKXJldHVybjtjYihldmVudCk7fSk7fWZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKXtjbGVhckludGVydmFsKHRpbWVyKTtzb3VyY2UuY2xvc2UoKTtzZXRUaW1lb3V0KGluaXQsb3B0aW9ucy50aW1lb3V0KTt9cmV0dXJue2Nsb3NlOigpPT57Y2xlYXJJbnRlcnZhbCh0aW1lcik7c291cmNlLmNsb3NlKCk7fSxhZGRNZXNzYWdlTGlzdGVuZXI6ZnVuY3Rpb24oZm4pe2xpc3RlbmVycy5wdXNoKGZuKTt9fTt9ZnVuY3Rpb24gYWRkTWVzc2FnZUxpc3RlbmVyKGNiKXtldmVudENhbGxiYWNrcy5wdXNoKGNiKTt9ZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpe3JldHVybiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucyk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnRzb3VyY2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDsvKiBlc2xpbnQtZGlzYWJsZSAqLyAvLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXG4vLyBBdmFpbGFibGUgdW5kZXIgTUlUIExpY2Vuc2UgKE1JVClcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XG52YXIgZG9jdW1lbnQ9d2luZG93LmRvY3VtZW50O3ZhciBSZXNwb25zZT13aW5kb3cuUmVzcG9uc2U7dmFyIFRleHREZWNvZGVyPXdpbmRvdy5UZXh0RGVjb2Rlcjt2YXIgVGV4dEVuY29kZXI9d2luZG93LlRleHRFbmNvZGVyO3ZhciBBYm9ydENvbnRyb2xsZXI9d2luZG93LkFib3J0Q29udHJvbGxlcjtpZihBYm9ydENvbnRyb2xsZXI9PXVuZGVmaW5lZCl7QWJvcnRDb250cm9sbGVyPWZ1bmN0aW9uKCl7dGhpcy5zaWduYWw9bnVsbDt0aGlzLmFib3J0PWZ1bmN0aW9uKCl7fTt9O31mdW5jdGlvbiBUZXh0RGVjb2RlclBvbHlmaWxsKCl7dGhpcy5iaXRzTmVlZGVkPTA7dGhpcy5jb2RlUG9pbnQ9MDt9VGV4dERlY29kZXJQb2x5ZmlsbC5wcm90b3R5cGUuZGVjb2RlPWZ1bmN0aW9uKG9jdGV0cyl7ZnVuY3Rpb24gdmFsaWQoY29kZVBvaW50LHNoaWZ0LG9jdGV0c0NvdW50KXtpZihvY3RldHNDb3VudD09PTEpe3JldHVybiBjb2RlUG9pbnQ+PTB4MDA4MD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4MDdmZjt9aWYob2N0ZXRzQ291bnQ9PT0yKXtyZXR1cm4gY29kZVBvaW50Pj0weDA4MDA+PnNoaWZ0JiZjb2RlUG9pbnQ8PHNoaWZ0PD0weGQ3ZmZ8fGNvZGVQb2ludD49MHhlMDAwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHhmZmZmO31pZihvY3RldHNDb3VudD09PTMpe3JldHVybiBjb2RlUG9pbnQ+PTB4MDEwMDAwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHgxMGZmZmY7fXRocm93IG5ldyBFcnJvcigpO31mdW5jdGlvbiBvY3RldHNDb3VudChiaXRzTmVlZGVkLGNvZGVQb2ludCl7aWYoYml0c05lZWRlZD09PTYqMSl7cmV0dXJuIGNvZGVQb2ludD4+Nj4xNT8zOmNvZGVQb2ludD4zMT8yOjE7fWlmKGJpdHNOZWVkZWQ9PT02KjIpe3JldHVybiBjb2RlUG9pbnQ+MTU/MzoyO31pZihiaXRzTmVlZGVkPT09NiozKXtyZXR1cm4gMzt9dGhyb3cgbmV3IEVycm9yKCk7fXZhciBSRVBMQUNFUj0weGZmZmQ7dmFyIHN0cmluZz0nJzt2YXIgYml0c05lZWRlZD10aGlzLmJpdHNOZWVkZWQ7dmFyIGNvZGVQb2ludD10aGlzLmNvZGVQb2ludDtmb3IodmFyIGk9MDtpPG9jdGV0cy5sZW5ndGg7aSs9MSl7dmFyIG9jdGV0PW9jdGV0c1tpXTtpZihiaXRzTmVlZGVkIT09MCl7aWYob2N0ZXQ8MTI4fHxvY3RldD4xOTF8fCF2YWxpZChjb2RlUG9pbnQ8PDZ8b2N0ZXQmNjMsYml0c05lZWRlZC02LG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsY29kZVBvaW50KSkpe2JpdHNOZWVkZWQ9MDtjb2RlUG9pbnQ9UkVQTEFDRVI7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7fX1pZihiaXRzTmVlZGVkPT09MCl7aWYob2N0ZXQ+PTAmJm9jdGV0PD0xMjcpe2JpdHNOZWVkZWQ9MDtjb2RlUG9pbnQ9b2N0ZXQ7fWVsc2UgaWYob2N0ZXQ+PTE5MiYmb2N0ZXQ8PTIyMyl7Yml0c05lZWRlZD02KjE7Y29kZVBvaW50PW9jdGV0JjMxO31lbHNlIGlmKG9jdGV0Pj0yMjQmJm9jdGV0PD0yMzkpe2JpdHNOZWVkZWQ9NioyO2NvZGVQb2ludD1vY3RldCYxNTt9ZWxzZSBpZihvY3RldD49MjQwJiZvY3RldDw9MjQ3KXtiaXRzTmVlZGVkPTYqMztjb2RlUG9pbnQ9b2N0ZXQmNzt9ZWxzZXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PVJFUExBQ0VSO31pZihiaXRzTmVlZGVkIT09MCYmIXZhbGlkKGNvZGVQb2ludCxiaXRzTmVlZGVkLG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsY29kZVBvaW50KSkpe2JpdHNOZWVkZWQ9MDtjb2RlUG9pbnQ9UkVQTEFDRVI7fX1lbHNle2JpdHNOZWVkZWQtPTY7Y29kZVBvaW50PWNvZGVQb2ludDw8NnxvY3RldCY2Mzt9aWYoYml0c05lZWRlZD09PTApe2lmKGNvZGVQb2ludDw9MHhmZmZmKXtzdHJpbmcrPVN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTt9ZWxzZXtzdHJpbmcrPVN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwKyhjb2RlUG9pbnQtMHhmZmZmLTE+PjEwKSk7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZGMwMCsoY29kZVBvaW50LTB4ZmZmZi0xJjB4M2ZmKSk7fX19dGhpcy5iaXRzTmVlZGVkPWJpdHNOZWVkZWQ7dGhpcy5jb2RlUG9pbnQ9Y29kZVBvaW50O3JldHVybiBzdHJpbmc7fTsvLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxudmFyIHN1cHBvcnRzU3RyZWFtT3B0aW9uPWZ1bmN0aW9uIHN1cHBvcnRzU3RyZWFtT3B0aW9uKCl7dHJ5e3JldHVybiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCd0ZXN0Jykse3N0cmVhbTp0cnVlfSk9PT0ndGVzdCc7fWNhdGNoKGVycm9yKXtjb25zb2xlLmxvZyhlcnJvcik7fXJldHVybiBmYWxzZTt9Oy8vIElFLCBFZGdlXG5pZihUZXh0RGVjb2Rlcj09dW5kZWZpbmVkfHxUZXh0RW5jb2Rlcj09dW5kZWZpbmVkfHwhc3VwcG9ydHNTdHJlYW1PcHRpb24oKSl7VGV4dERlY29kZXI9VGV4dERlY29kZXJQb2x5ZmlsbDt9dmFyIGs9ZnVuY3Rpb24gaygpe307ZnVuY3Rpb24gWEhSV3JhcHBlcih4aHIpe3RoaXMud2l0aENyZWRlbnRpYWxzPWZhbHNlO3RoaXMucmVzcG9uc2VUeXBlPScnO3RoaXMucmVhZHlTdGF0ZT0wO3RoaXMuc3RhdHVzPTA7dGhpcy5zdGF0dXNUZXh0PScnO3RoaXMucmVzcG9uc2VUZXh0PScnO3RoaXMub25wcm9ncmVzcz1rO3RoaXMub25yZWFkeXN0YXRlY2hhbmdlPWs7dGhpcy5fY29udGVudFR5cGU9Jyc7dGhpcy5feGhyPXhocjt0aGlzLl9zZW5kVGltZW91dD0wO3RoaXMuX2Fib3J0PWs7fVhIUldyYXBwZXIucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24obWV0aG9kLHVybCl7dGhpcy5fYWJvcnQodHJ1ZSk7dmFyIHRoYXQ9dGhpczt2YXIgeGhyPXRoaXMuX3hocjt2YXIgc3RhdGU9MTt2YXIgdGltZW91dD0wO3RoaXMuX2Fib3J0PWZ1bmN0aW9uKHNpbGVudCl7aWYodGhhdC5fc2VuZFRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGhhdC5fc2VuZFRpbWVvdXQpO3RoYXQuX3NlbmRUaW1lb3V0PTA7fWlmKHN0YXRlPT09MXx8c3RhdGU9PT0yfHxzdGF0ZT09PTMpe3N0YXRlPTQ7eGhyLm9ubG9hZD1rO3hoci5vbmVycm9yPWs7eGhyLm9uYWJvcnQ9azt4aHIub25wcm9ncmVzcz1rO3hoci5vbnJlYWR5c3RhdGVjaGFuZ2U9azsvLyBJRSA4IC0gOTogWERvbWFpblJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxuLy8gT3BlcmEgPCAxMDogWE1MSHR0cFJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxueGhyLmFib3J0KCk7aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PTA7fWlmKCFzaWxlbnQpe3RoYXQucmVhZHlTdGF0ZT00O3RoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7fX1zdGF0ZT0wO307dmFyIG9uU3RhcnQ9ZnVuY3Rpb24gb25TdGFydCgpe2lmKHN0YXRlPT09MSl7Ly8gc3RhdGUgPSAyO1xudmFyIHN0YXR1cz0wO3ZhciBzdGF0dXNUZXh0PScnO3ZhciBjb250ZW50VHlwZT11bmRlZmluZWQ7aWYoISgnY29udGVudFR5cGUnaW4geGhyKSl7dHJ5e3N0YXR1cz14aHIuc3RhdHVzO3N0YXR1c1RleHQ9eGhyLnN0YXR1c1RleHQ7Y29udGVudFR5cGU9eGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTt9Y2F0Y2goZXJyb3Ipey8vIElFIDwgMTAgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDIgfHwgeGhyLnJlYWR5U3RhdGUgPT09IDNcbi8vIE9wZXJhIDwgMTEgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDJcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTEyMVxuc3RhdHVzPTA7c3RhdHVzVGV4dD0nJztjb250ZW50VHlwZT11bmRlZmluZWQ7Ly8gRmlyZWZveCA8IDE0LCBDaHJvbWUgPywgU2FmYXJpID9cbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTY1OFxuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTc3ODU0XG59fWVsc2V7c3RhdHVzPTIwMDtzdGF0dXNUZXh0PSdPSyc7Y29udGVudFR5cGU9eGhyLmNvbnRlbnRUeXBlO31pZihzdGF0dXMhPT0wKXtzdGF0ZT0yO3RoYXQucmVhZHlTdGF0ZT0yO3RoYXQuc3RhdHVzPXN0YXR1czt0aGF0LnN0YXR1c1RleHQ9c3RhdHVzVGV4dDt0aGF0Ll9jb250ZW50VHlwZT1jb250ZW50VHlwZTt0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO319fTt2YXIgb25Qcm9ncmVzcz1mdW5jdGlvbiBvblByb2dyZXNzKCl7b25TdGFydCgpO2lmKHN0YXRlPT09Mnx8c3RhdGU9PT0zKXtzdGF0ZT0zO3ZhciByZXNwb25zZVRleHQ9Jyc7dHJ5e3Jlc3BvbnNlVGV4dD14aHIucmVzcG9uc2VUZXh0O31jYXRjaChlcnJvcil7Ly8gSUUgOCAtIDkgd2l0aCBYTUxIdHRwUmVxdWVzdFxufXRoYXQucmVhZHlTdGF0ZT0zO3RoYXQucmVzcG9uc2VUZXh0PXJlc3BvbnNlVGV4dDt0aGF0Lm9ucHJvZ3Jlc3MoKTt9fTt2YXIgb25GaW5pc2g9ZnVuY3Rpb24gb25GaW5pc2goKXsvLyBGaXJlZm94IDUyIGZpcmVzIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkgd2l0aG91dCBmaW5hbCBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpXG4vLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcIlxub25Qcm9ncmVzcygpO2lmKHN0YXRlPT09MXx8c3RhdGU9PT0yfHxzdGF0ZT09PTMpe3N0YXRlPTQ7aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PTA7fXRoYXQucmVhZHlTdGF0ZT00O3RoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7fX07dmFyIG9uUmVhZHlTdGF0ZUNoYW5nZT1mdW5jdGlvbiBvblJlYWR5U3RhdGVDaGFuZ2UoKXtpZih4aHIhPXVuZGVmaW5lZCl7Ly8gT3BlcmEgMTJcbmlmKHhoci5yZWFkeVN0YXRlPT09NCl7b25GaW5pc2goKTt9ZWxzZSBpZih4aHIucmVhZHlTdGF0ZT09PTMpe29uUHJvZ3Jlc3MoKTt9ZWxzZSBpZih4aHIucmVhZHlTdGF0ZT09PTIpe29uU3RhcnQoKTt9fX07dmFyIG9uVGltZW91dD1mdW5jdGlvbiBvblRpbWVvdXQoKXt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LDUwMCk7aWYoeGhyLnJlYWR5U3RhdGU9PT0zKXtvblByb2dyZXNzKCk7fX07Ly8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcbnhoci5vbmxvYWQ9b25GaW5pc2g7eGhyLm9uZXJyb3I9b25GaW5pc2g7Ly8gaW1wcm9wZXIgZml4IHRvIG1hdGNoIEZpcmVmb3ggYmVoYXZpb3IsIGJ1dCBpdCBpcyBiZXR0ZXIgdGhhbiBqdXN0IGlnbm9yZSBhYm9ydFxuLy8gc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc2ODU5NlxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODgwMjAwXG4vLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTUzNTcwXG4vLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3Ncbnhoci5vbmFib3J0PW9uRmluaXNoOy8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczNjcyM1xuaWYoISgnc2VuZEFzQmluYXJ5J2luIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkmJiEoJ21vekFub24naW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSl7eGhyLm9ucHJvZ3Jlc3M9b25Qcm9ncmVzczt9Ly8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxuLy8gT3BlcmEgPCAxMlxuLy8gRmlyZWZveCA8IDMuNVxuLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXG4vLyBvbnByb2dyZXNzIGlzIG5vdCBmaXJlZCBzb21ldGltZXMgb3IgZGVsYXllZFxuLy8gc2VlIGFsc28gIzY0XG54aHIub25yZWFkeXN0YXRlY2hhbmdlPW9uUmVhZHlTdGF0ZUNoYW5nZTtpZignY29udGVudFR5cGUnaW4geGhyKXt1cmwrPSh1cmwuaW5kZXhPZignPycpPT09LTE/Jz8nOicmJykrJ3BhZGRpbmc9dHJ1ZSc7fXhoci5vcGVuKG1ldGhvZCx1cmwsdHJ1ZSk7aWYoJ3JlYWR5U3RhdGUnaW4geGhyKXsvLyB3b3JrYXJvdW5kIGZvciBPcGVyYSAxMiBpc3N1ZSB3aXRoIFwicHJvZ3Jlc3NcIiBldmVudHNcbi8vICM5MVxudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSwwKTt9fTtYSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydD1mdW5jdGlvbigpe3RoaXMuX2Fib3J0KGZhbHNlKTt9O1hIUldyYXBwZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyPWZ1bmN0aW9uKG5hbWUpe3JldHVybiB0aGlzLl9jb250ZW50VHlwZTt9O1hIUldyYXBwZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXI9ZnVuY3Rpb24obmFtZSx2YWx1ZSl7dmFyIHhocj10aGlzLl94aHI7aWYoJ3NldFJlcXVlc3RIZWFkZXInaW4geGhyKXt4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLHZhbHVlKTt9fTtYSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRBbGxSZXNwb25zZUhlYWRlcnM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyE9dW5kZWZpbmVkP3RoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTonJzt9O1hIUldyYXBwZXIucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oKXsvLyBsb2FkaW5nIGluZGljYXRvciBpbiBTYWZhcmkgPCA/ICg2KSwgQ2hyb21lIDwgMTQsIEZpcmVmb3hcbmlmKCEoJ29udGltZW91dCdpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpJiZkb2N1bWVudCE9dW5kZWZpbmVkJiZkb2N1bWVudC5yZWFkeVN0YXRlIT11bmRlZmluZWQmJmRvY3VtZW50LnJlYWR5U3RhdGUhPT0nY29tcGxldGUnKXt2YXIgdGhhdD10aGlzO3RoYXQuX3NlbmRUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0Ll9zZW5kVGltZW91dD0wO3RoYXQuc2VuZCgpO30sNCk7cmV0dXJuO312YXIgeGhyPXRoaXMuX3hocjsvLyB3aXRoQ3JlZGVudGlhbHMgc2hvdWxkIGJlIHNldCBhZnRlciBcIm9wZW5cIiBmb3IgU2FmYXJpIGFuZCBDaHJvbWUgKDwgMTkgPylcbnhoci53aXRoQ3JlZGVudGlhbHM9dGhpcy53aXRoQ3JlZGVudGlhbHM7eGhyLnJlc3BvbnNlVHlwZT10aGlzLnJlc3BvbnNlVHlwZTt0cnl7Ly8geGhyLnNlbmQoKTsgdGhyb3dzIFwiTm90IGVub3VnaCBhcmd1bWVudHNcIiBpbiBGaXJlZm94IDMuMFxueGhyLnNlbmQodW5kZWZpbmVkKTt9Y2F0Y2goZXJyb3IxKXsvLyBTYWZhcmkgNS4xLjcsIE9wZXJhIDEyXG50aHJvdyBlcnJvcjE7fX07ZnVuY3Rpb24gdG9Mb3dlckNhc2UobmFtZSl7cmV0dXJuIG5hbWUucmVwbGFjZSgvW0EtWl0vZyxmdW5jdGlvbihjKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkrMHgyMCk7fSk7fWZ1bmN0aW9uIEhlYWRlcnNQb2x5ZmlsbChhbGwpey8vIEdldCBoZWFkZXJzOiBpbXBsZW1lbnRlZCBhY2NvcmRpbmcgdG8gbW96aWxsYSdzIGV4YW1wbGUgY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2dldEFsbFJlc3BvbnNlSGVhZGVycyNFeGFtcGxlXG52YXIgbWFwPU9iamVjdC5jcmVhdGUobnVsbCk7dmFyIGFycmF5PWFsbC5zcGxpdCgnXFxyXFxuJyk7Zm9yKHZhciBpPTA7aTxhcnJheS5sZW5ndGg7aSs9MSl7dmFyIGxpbmU9YXJyYXlbaV07dmFyIHBhcnRzPWxpbmUuc3BsaXQoJzogJyk7dmFyIG5hbWU9cGFydHMuc2hpZnQoKTt2YXIgdmFsdWU9cGFydHMuam9pbignOiAnKTttYXBbdG9Mb3dlckNhc2UobmFtZSldPXZhbHVlO310aGlzLl9tYXA9bWFwO31IZWFkZXJzUG9seWZpbGwucHJvdG90eXBlLmdldD1mdW5jdGlvbihuYW1lKXtyZXR1cm4gdGhpcy5fbWFwW3RvTG93ZXJDYXNlKG5hbWUpXTt9O2Z1bmN0aW9uIFhIUlRyYW5zcG9ydCgpe31YSFJUcmFuc3BvcnQucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oeGhyLG9uU3RhcnRDYWxsYmFjayxvblByb2dyZXNzQ2FsbGJhY2ssb25GaW5pc2hDYWxsYmFjayx1cmwsd2l0aENyZWRlbnRpYWxzLGhlYWRlcnMpe3hoci5vcGVuKCdHRVQnLHVybCk7dmFyIG9mZnNldD0wO3hoci5vbnByb2dyZXNzPWZ1bmN0aW9uKCl7dmFyIHJlc3BvbnNlVGV4dD14aHIucmVzcG9uc2VUZXh0O3ZhciBjaHVuaz1yZXNwb25zZVRleHQuc2xpY2Uob2Zmc2V0KTtvZmZzZXQrPWNodW5rLmxlbmd0aDtvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO307eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKHhoci5yZWFkeVN0YXRlPT09Mil7dmFyIHN0YXR1cz14aHIuc3RhdHVzO3ZhciBzdGF0dXNUZXh0PXhoci5zdGF0dXNUZXh0O3ZhciBjb250ZW50VHlwZT14aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO3ZhciBoZWFkZXJzPXhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtvblN0YXJ0Q2FsbGJhY2soc3RhdHVzLHN0YXR1c1RleHQsY29udGVudFR5cGUsbmV3IEhlYWRlcnNQb2x5ZmlsbChoZWFkZXJzKSxmdW5jdGlvbigpe3hoci5hYm9ydCgpO30pO31lbHNlIGlmKHhoci5yZWFkeVN0YXRlPT09NCl7b25GaW5pc2hDYWxsYmFjaygpO319O3hoci53aXRoQ3JlZGVudGlhbHM9d2l0aENyZWRlbnRpYWxzO3hoci5yZXNwb25zZVR5cGU9J3RleHQnO2Zvcih2YXIgbmFtZSBpbiBoZWFkZXJzKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycyxuYW1lKSl7eGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSxoZWFkZXJzW25hbWVdKTt9fXhoci5zZW5kKCk7fTtmdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzKXt0aGlzLl9oZWFkZXJzPWhlYWRlcnM7fUhlYWRlcnNXcmFwcGVyLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24obmFtZSl7cmV0dXJuIHRoaXMuX2hlYWRlcnMuZ2V0KG5hbWUpO307ZnVuY3Rpb24gRmV0Y2hUcmFuc3BvcnQoKXt9RmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oeGhyLG9uU3RhcnRDYWxsYmFjayxvblByb2dyZXNzQ2FsbGJhY2ssb25GaW5pc2hDYWxsYmFjayx1cmwsd2l0aENyZWRlbnRpYWxzLGhlYWRlcnMpe3ZhciBjb250cm9sbGVyPW5ldyBBYm9ydENvbnRyb2xsZXIoKTt2YXIgc2lnbmFsPWNvbnRyb2xsZXIuc2lnbmFsOy8vIHNlZSAjMTIwXG52YXIgdGV4dERlY29kZXI9bmV3IFRleHREZWNvZGVyKCk7ZmV0Y2godXJsLHtoZWFkZXJzOmhlYWRlcnMsY3JlZGVudGlhbHM6d2l0aENyZWRlbnRpYWxzPydpbmNsdWRlJzonc2FtZS1vcmlnaW4nLHNpZ25hbDpzaWduYWwsY2FjaGU6J25vLXN0b3JlJ30pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe3ZhciByZWFkZXI9cmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtvblN0YXJ0Q2FsbGJhY2socmVzcG9uc2Uuc3RhdHVzLHJlc3BvbnNlLnN0YXR1c1RleHQscmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLG5ldyBIZWFkZXJzV3JhcHBlcihyZXNwb25zZS5oZWFkZXJzKSxmdW5jdGlvbigpe2NvbnRyb2xsZXIuYWJvcnQoKTtyZWFkZXIuY2FuY2VsKCk7fSk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXt2YXIgcmVhZE5leHRDaHVuaz1mdW5jdGlvbiByZWFkTmV4dENodW5rKCl7cmVhZGVyLnJlYWQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7aWYocmVzdWx0LmRvbmUpey8vIE5vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXG5yZXNvbHZlKHVuZGVmaW5lZCk7fWVsc2V7dmFyIGNodW5rPXRleHREZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUse3N0cmVhbTp0cnVlfSk7b25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKTtyZWFkTmV4dENodW5rKCk7fX0pWydjYXRjaCddKGZ1bmN0aW9uKGVycm9yKXtyZWplY3QoZXJyb3IpO30pO307cmVhZE5leHRDaHVuaygpO30pO30pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtvbkZpbmlzaENhbGxiYWNrKCk7cmV0dXJuIHJlc3VsdDt9LGZ1bmN0aW9uKGVycm9yKXtvbkZpbmlzaENhbGxiYWNrKCk7cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTt9KTt9O2Z1bmN0aW9uIEV2ZW50VGFyZ2V0KCl7dGhpcy5fbGlzdGVuZXJzPU9iamVjdC5jcmVhdGUobnVsbCk7fWZ1bmN0aW9uIHRocm93RXJyb3IoZSl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGU7fSwwKTt9RXZlbnRUYXJnZXQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24oZXZlbnQpe2V2ZW50LnRhcmdldD10aGlzO3ZhciB0eXBlTGlzdGVuZXJzPXRoaXMuX2xpc3RlbmVyc1tldmVudC50eXBlXTtpZih0eXBlTGlzdGVuZXJzIT11bmRlZmluZWQpe3ZhciBsZW5ndGg9dHlwZUxpc3RlbmVycy5sZW5ndGg7Zm9yKHZhciBpPTA7aTxsZW5ndGg7aSs9MSl7dmFyIGxpc3RlbmVyPXR5cGVMaXN0ZW5lcnNbaV07dHJ5e2lmKHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudD09PSdmdW5jdGlvbicpe2xpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KTt9ZWxzZXtsaXN0ZW5lci5jYWxsKHRoaXMsZXZlbnQpO319Y2F0Y2goZSl7dGhyb3dFcnJvcihlKTt9fX19O0V2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe3R5cGU9U3RyaW5nKHR5cGUpO3ZhciBsaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzO3ZhciB0eXBlTGlzdGVuZXJzPWxpc3RlbmVyc1t0eXBlXTtpZih0eXBlTGlzdGVuZXJzPT11bmRlZmluZWQpe3R5cGVMaXN0ZW5lcnM9W107bGlzdGVuZXJzW3R5cGVdPXR5cGVMaXN0ZW5lcnM7fXZhciBmb3VuZD1mYWxzZTtmb3IodmFyIGk9MDtpPHR5cGVMaXN0ZW5lcnMubGVuZ3RoO2krPTEpe2lmKHR5cGVMaXN0ZW5lcnNbaV09PT1saXN0ZW5lcil7Zm91bmQ9dHJ1ZTt9fWlmKCFmb3VuZCl7dHlwZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTt9fTtFdmVudFRhcmdldC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbih0eXBlLGxpc3RlbmVyKXt0eXBlPVN0cmluZyh0eXBlKTt2YXIgbGlzdGVuZXJzPXRoaXMuX2xpc3RlbmVyczt2YXIgdHlwZUxpc3RlbmVycz1saXN0ZW5lcnNbdHlwZV07aWYodHlwZUxpc3RlbmVycyE9dW5kZWZpbmVkKXt2YXIgZmlsdGVyZWQ9W107Zm9yKHZhciBpPTA7aTx0eXBlTGlzdGVuZXJzLmxlbmd0aDtpKz0xKXtpZih0eXBlTGlzdGVuZXJzW2ldIT09bGlzdGVuZXIpe2ZpbHRlcmVkLnB1c2godHlwZUxpc3RlbmVyc1tpXSk7fX1pZihmaWx0ZXJlZC5sZW5ndGg9PT0wKXtkZWxldGUgbGlzdGVuZXJzW3R5cGVdO31lbHNle2xpc3RlbmVyc1t0eXBlXT1maWx0ZXJlZDt9fX07ZnVuY3Rpb24gRXZlbnQodHlwZSl7dGhpcy50eXBlPXR5cGU7dGhpcy50YXJnZXQ9dW5kZWZpbmVkO31mdW5jdGlvbiBNZXNzYWdlRXZlbnQodHlwZSxvcHRpb25zKXtFdmVudC5jYWxsKHRoaXMsdHlwZSk7dGhpcy5kYXRhPW9wdGlvbnMuZGF0YTt0aGlzLmxhc3RFdmVudElkPW9wdGlvbnMubGFzdEV2ZW50SWQ7fU1lc3NhZ2VFdmVudC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpO2Z1bmN0aW9uIENvbm5lY3Rpb25FdmVudCh0eXBlLG9wdGlvbnMpe0V2ZW50LmNhbGwodGhpcyx0eXBlKTt0aGlzLnN0YXR1cz1vcHRpb25zLnN0YXR1czt0aGlzLnN0YXR1c1RleHQ9b3B0aW9ucy5zdGF0dXNUZXh0O3RoaXMuaGVhZGVycz1vcHRpb25zLmhlYWRlcnM7fUNvbm5lY3Rpb25FdmVudC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpO3ZhciBXQUlUSU5HPS0xO3ZhciBDT05ORUNUSU5HPTA7dmFyIE9QRU49MTt2YXIgQ0xPU0VEPTI7dmFyIEFGVEVSX0NSPS0xO3ZhciBGSUVMRF9TVEFSVD0wO3ZhciBGSUVMRD0xO3ZhciBWQUxVRV9TVEFSVD0yO3ZhciBWQUxVRT0zO3ZhciBjb250ZW50VHlwZVJlZ0V4cD0vXnRleHRcXC9ldmVudFxcLXN0cmVhbTs/KFxccypjaGFyc2V0XFw9dXRmXFwtOCk/JC9pO3ZhciBNSU5JTVVNX0RVUkFUSU9OPTEwMDA7dmFyIE1BWElNVU1fRFVSQVRJT049MTgwMDAwMDA7dmFyIHBhcnNlRHVyYXRpb249ZnVuY3Rpb24gcGFyc2VEdXJhdGlvbih2YWx1ZSxkZWYpe3ZhciBuPXBhcnNlSW50KHZhbHVlLDEwKTtpZihuIT09bil7bj1kZWY7fXJldHVybiBjbGFtcER1cmF0aW9uKG4pO307dmFyIGNsYW1wRHVyYXRpb249ZnVuY3Rpb24gY2xhbXBEdXJhdGlvbihuKXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobixNSU5JTVVNX0RVUkFUSU9OKSxNQVhJTVVNX0RVUkFUSU9OKTt9O3ZhciBmaXJlPWZ1bmN0aW9uIGZpcmUodGhhdCxmLGV2ZW50KXt0cnl7aWYodHlwZW9mIGY9PT0nZnVuY3Rpb24nKXtmLmNhbGwodGhhdCxldmVudCk7fX1jYXRjaChlKXt0aHJvd0Vycm9yKGUpO319O2Z1bmN0aW9uIEV2ZW50U291cmNlUG9seWZpbGwodXJsLG9wdGlvbnMpe0V2ZW50VGFyZ2V0LmNhbGwodGhpcyk7dGhpcy5vbm9wZW49dW5kZWZpbmVkO3RoaXMub25tZXNzYWdlPXVuZGVmaW5lZDt0aGlzLm9uZXJyb3I9dW5kZWZpbmVkO3RoaXMudXJsPXVuZGVmaW5lZDt0aGlzLnJlYWR5U3RhdGU9dW5kZWZpbmVkO3RoaXMud2l0aENyZWRlbnRpYWxzPXVuZGVmaW5lZDt0aGlzLl9jbG9zZT11bmRlZmluZWQ7c3RhcnQodGhpcyx1cmwsb3B0aW9ucyk7fXZhciBpc0ZldGNoU3VwcG9ydGVkPWZldGNoIT11bmRlZmluZWQmJlJlc3BvbnNlIT11bmRlZmluZWQmJidib2R5J2luIFJlc3BvbnNlLnByb3RvdHlwZTtmdW5jdGlvbiBzdGFydChlcyx1cmwsb3B0aW9ucyl7dXJsPVN0cmluZyh1cmwpO3ZhciB3aXRoQ3JlZGVudGlhbHM9b3B0aW9ucyE9dW5kZWZpbmVkJiZCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKTt2YXIgaW5pdGlhbFJldHJ5PWNsYW1wRHVyYXRpb24oMTAwMCk7dmFyIGhlYXJ0YmVhdFRpbWVvdXQ9b3B0aW9ucyE9dW5kZWZpbmVkJiZvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQhPXVuZGVmaW5lZD9wYXJzZUR1cmF0aW9uKG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCw0NTAwMCk6Y2xhbXBEdXJhdGlvbig0NTAwMCk7dmFyIGxhc3RFdmVudElkPScnO3ZhciByZXRyeT1pbml0aWFsUmV0cnk7dmFyIHdhc0FjdGl2aXR5PWZhbHNlO3ZhciBoZWFkZXJzPW9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5oZWFkZXJzIT11bmRlZmluZWQ/SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb25zLmhlYWRlcnMpKTp1bmRlZmluZWQ7dmFyIEN1cnJlbnRUcmFuc3BvcnQ9b3B0aW9ucyE9dW5kZWZpbmVkJiZvcHRpb25zLlRyYW5zcG9ydCE9dW5kZWZpbmVkP29wdGlvbnMuVHJhbnNwb3J0OlhNTEh0dHBSZXF1ZXN0O3ZhciB4aHI9aXNGZXRjaFN1cHBvcnRlZCYmIShvcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuVHJhbnNwb3J0IT11bmRlZmluZWQpP3VuZGVmaW5lZDpuZXcgWEhSV3JhcHBlcihuZXcgQ3VycmVudFRyYW5zcG9ydCgpKTt2YXIgdHJhbnNwb3J0PXhocj09dW5kZWZpbmVkP25ldyBGZXRjaFRyYW5zcG9ydCgpOm5ldyBYSFJUcmFuc3BvcnQoKTt2YXIgY2FuY2VsRnVuY3Rpb249dW5kZWZpbmVkO3ZhciB0aW1lb3V0PTA7dmFyIGN1cnJlbnRTdGF0ZT1XQUlUSU5HO3ZhciBkYXRhQnVmZmVyPScnO3ZhciBsYXN0RXZlbnRJZEJ1ZmZlcj0nJzt2YXIgZXZlbnRUeXBlQnVmZmVyPScnO3ZhciB0ZXh0QnVmZmVyPScnO3ZhciBzdGF0ZT1GSUVMRF9TVEFSVDt2YXIgZmllbGRTdGFydD0wO3ZhciB2YWx1ZVN0YXJ0PTA7dmFyIG9uU3RhcnQ9ZnVuY3Rpb24gb25TdGFydChzdGF0dXMsc3RhdHVzVGV4dCxjb250ZW50VHlwZSxoZWFkZXJzLGNhbmNlbCl7aWYoY3VycmVudFN0YXRlPT09Q09OTkVDVElORyl7Y2FuY2VsRnVuY3Rpb249Y2FuY2VsO2lmKHN0YXR1cz09PTIwMCYmY29udGVudFR5cGUhPXVuZGVmaW5lZCYmY29udGVudFR5cGVSZWdFeHAudGVzdChjb250ZW50VHlwZSkpe2N1cnJlbnRTdGF0ZT1PUEVOO3dhc0FjdGl2aXR5PXRydWU7cmV0cnk9aW5pdGlhbFJldHJ5O2VzLnJlYWR5U3RhdGU9T1BFTjt2YXIgZXZlbnQ9bmV3IENvbm5lY3Rpb25FdmVudCgnb3Blbicse3N0YXR1czpzdGF0dXMsc3RhdHVzVGV4dDpzdGF0dXNUZXh0LGhlYWRlcnM6aGVhZGVyc30pO2VzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO2ZpcmUoZXMsZXMub25vcGVuLGV2ZW50KTt9ZWxzZXt2YXIgbWVzc2FnZT0nJztpZihzdGF0dXMhPT0yMDApe2lmKHN0YXR1c1RleHQpe3N0YXR1c1RleHQ9c3RhdHVzVGV4dC5yZXBsYWNlKC9cXHMrL2csJyAnKTt9bWVzc2FnZT1cIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIFwiK3N0YXR1cysnICcrc3RhdHVzVGV4dCsnIHRoYXQgaXMgbm90IDIwMC4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJzt9ZWxzZXttZXNzYWdlPVwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBDb250ZW50LVR5cGUgc3BlY2lmeWluZyBhbiB1bnN1cHBvcnRlZCB0eXBlOiBcIisoY29udGVudFR5cGU9PXVuZGVmaW5lZD8nLSc6Y29udGVudFR5cGUucmVwbGFjZSgvXFxzKy9nLCcgJykpKycuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7fXRocm93RXJyb3IobmV3IEVycm9yKG1lc3NhZ2UpKTtjbG9zZSgpO3ZhciBldmVudD1uZXcgQ29ubmVjdGlvbkV2ZW50KCdlcnJvcicse3N0YXR1czpzdGF0dXMsc3RhdHVzVGV4dDpzdGF0dXNUZXh0LGhlYWRlcnM6aGVhZGVyc30pO2VzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO2ZpcmUoZXMsZXMub25lcnJvcixldmVudCk7fX19O3ZhciBvblByb2dyZXNzPWZ1bmN0aW9uIG9uUHJvZ3Jlc3ModGV4dENodW5rKXtpZihjdXJyZW50U3RhdGU9PT1PUEVOKXt2YXIgbj0tMTtmb3IodmFyIGk9MDtpPHRleHRDaHVuay5sZW5ndGg7aSs9MSl7dmFyIGM9dGV4dENodW5rLmNoYXJDb2RlQXQoaSk7aWYoYz09PSdcXG4nLmNoYXJDb2RlQXQoMCl8fGM9PT0nXFxyJy5jaGFyQ29kZUF0KDApKXtuPWk7fX12YXIgY2h1bms9KG4hPT0tMT90ZXh0QnVmZmVyOicnKSt0ZXh0Q2h1bmsuc2xpY2UoMCxuKzEpO3RleHRCdWZmZXI9KG49PT0tMT90ZXh0QnVmZmVyOicnKSt0ZXh0Q2h1bmsuc2xpY2UobisxKTtpZihjaHVuayE9PScnKXt3YXNBY3Rpdml0eT10cnVlO31mb3IodmFyIHBvc2l0aW9uPTA7cG9zaXRpb248Y2h1bmsubGVuZ3RoO3Bvc2l0aW9uKz0xKXt2YXIgYz1jaHVuay5jaGFyQ29kZUF0KHBvc2l0aW9uKTtpZihzdGF0ZT09PUFGVEVSX0NSJiZjPT09J1xcbicuY2hhckNvZGVBdCgwKSl7c3RhdGU9RklFTERfU1RBUlQ7fWVsc2V7aWYoc3RhdGU9PT1BRlRFUl9DUil7c3RhdGU9RklFTERfU1RBUlQ7fWlmKGM9PT0nXFxyJy5jaGFyQ29kZUF0KDApfHxjPT09J1xcbicuY2hhckNvZGVBdCgwKSl7aWYoc3RhdGUhPT1GSUVMRF9TVEFSVCl7aWYoc3RhdGU9PT1GSUVMRCl7dmFsdWVTdGFydD1wb3NpdGlvbisxO312YXIgZmllbGQ9Y2h1bmsuc2xpY2UoZmllbGRTdGFydCx2YWx1ZVN0YXJ0LTEpO3ZhciB2YWx1ZT1jaHVuay5zbGljZSh2YWx1ZVN0YXJ0Kyh2YWx1ZVN0YXJ0PHBvc2l0aW9uJiZjaHVuay5jaGFyQ29kZUF0KHZhbHVlU3RhcnQpPT09JyAnLmNoYXJDb2RlQXQoMCk/MTowKSxwb3NpdGlvbik7aWYoZmllbGQ9PT0nZGF0YScpe2RhdGFCdWZmZXIrPSdcXG4nO2RhdGFCdWZmZXIrPXZhbHVlO31lbHNlIGlmKGZpZWxkPT09J2lkJyl7bGFzdEV2ZW50SWRCdWZmZXI9dmFsdWU7fWVsc2UgaWYoZmllbGQ9PT0nZXZlbnQnKXtldmVudFR5cGVCdWZmZXI9dmFsdWU7fWVsc2UgaWYoZmllbGQ9PT0ncmV0cnknKXtpbml0aWFsUmV0cnk9cGFyc2VEdXJhdGlvbih2YWx1ZSxpbml0aWFsUmV0cnkpO3JldHJ5PWluaXRpYWxSZXRyeTt9ZWxzZSBpZihmaWVsZD09PSdoZWFydGJlYXRUaW1lb3V0Jyl7aGVhcnRiZWF0VGltZW91dD1wYXJzZUR1cmF0aW9uKHZhbHVlLGhlYXJ0YmVhdFRpbWVvdXQpO2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSxoZWFydGJlYXRUaW1lb3V0KTt9fX1pZihzdGF0ZT09PUZJRUxEX1NUQVJUKXtpZihkYXRhQnVmZmVyIT09Jycpe2xhc3RFdmVudElkPWxhc3RFdmVudElkQnVmZmVyO2lmKGV2ZW50VHlwZUJ1ZmZlcj09PScnKXtldmVudFR5cGVCdWZmZXI9J21lc3NhZ2UnO312YXIgZXZlbnQ9bmV3IE1lc3NhZ2VFdmVudChldmVudFR5cGVCdWZmZXIse2RhdGE6ZGF0YUJ1ZmZlci5zbGljZSgxKSxsYXN0RXZlbnRJZDpsYXN0RXZlbnRJZEJ1ZmZlcn0pO2VzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO2lmKGV2ZW50VHlwZUJ1ZmZlcj09PSdtZXNzYWdlJyl7ZmlyZShlcyxlcy5vbm1lc3NhZ2UsZXZlbnQpO31pZihjdXJyZW50U3RhdGU9PT1DTE9TRUQpe3JldHVybjt9fWRhdGFCdWZmZXI9Jyc7ZXZlbnRUeXBlQnVmZmVyPScnO31zdGF0ZT1jPT09J1xccicuY2hhckNvZGVBdCgwKT9BRlRFUl9DUjpGSUVMRF9TVEFSVDt9ZWxzZXtpZihzdGF0ZT09PUZJRUxEX1NUQVJUKXtmaWVsZFN0YXJ0PXBvc2l0aW9uO3N0YXRlPUZJRUxEO31pZihzdGF0ZT09PUZJRUxEKXtpZihjPT09JzonLmNoYXJDb2RlQXQoMCkpe3ZhbHVlU3RhcnQ9cG9zaXRpb24rMTtzdGF0ZT1WQUxVRV9TVEFSVDt9fWVsc2UgaWYoc3RhdGU9PT1WQUxVRV9TVEFSVCl7c3RhdGU9VkFMVUU7fX19fX19O3ZhciBvbkZpbmlzaD1mdW5jdGlvbiBvbkZpbmlzaCgpe2lmKGN1cnJlbnRTdGF0ZT09PU9QRU58fGN1cnJlbnRTdGF0ZT09PUNPTk5FQ1RJTkcpe2N1cnJlbnRTdGF0ZT1XQUlUSU5HO2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO310aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LHJldHJ5KTtyZXRyeT1jbGFtcER1cmF0aW9uKE1hdGgubWluKGluaXRpYWxSZXRyeSoxNixyZXRyeSoyKSk7ZXMucmVhZHlTdGF0ZT1DT05ORUNUSU5HO3ZhciBldmVudD1uZXcgRXZlbnQoJ2Vycm9yJyk7ZXMuZGlzcGF0Y2hFdmVudChldmVudCk7ZmlyZShlcyxlcy5vbmVycm9yLGV2ZW50KTt9fTt2YXIgY2xvc2U9ZnVuY3Rpb24gY2xvc2UoKXtjdXJyZW50U3RhdGU9Q0xPU0VEO2lmKGNhbmNlbEZ1bmN0aW9uIT11bmRlZmluZWQpe2NhbmNlbEZ1bmN0aW9uKCk7Y2FuY2VsRnVuY3Rpb249dW5kZWZpbmVkO31pZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9ZXMucmVhZHlTdGF0ZT1DTE9TRUQ7fTt2YXIgb25UaW1lb3V0PWZ1bmN0aW9uIG9uVGltZW91dCgpe3RpbWVvdXQ9MDtpZihjdXJyZW50U3RhdGUhPT1XQUlUSU5HKXtpZighd2FzQWN0aXZpdHkmJmNhbmNlbEZ1bmN0aW9uIT11bmRlZmluZWQpe3Rocm93RXJyb3IobmV3IEVycm9yKCdObyBhY3Rpdml0eSB3aXRoaW4gJytoZWFydGJlYXRUaW1lb3V0KycgbWlsbGlzZWNvbmRzLiBSZWNvbm5lY3RpbmcuJykpO2NhbmNlbEZ1bmN0aW9uKCk7Y2FuY2VsRnVuY3Rpb249dW5kZWZpbmVkO31lbHNle3dhc0FjdGl2aXR5PWZhbHNlO3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30saGVhcnRiZWF0VGltZW91dCk7fXJldHVybjt9d2FzQWN0aXZpdHk9ZmFsc2U7dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSxoZWFydGJlYXRUaW1lb3V0KTtjdXJyZW50U3RhdGU9Q09OTkVDVElORztkYXRhQnVmZmVyPScnO2V2ZW50VHlwZUJ1ZmZlcj0nJztsYXN0RXZlbnRJZEJ1ZmZlcj1sYXN0RXZlbnRJZDt0ZXh0QnVmZmVyPScnO2ZpZWxkU3RhcnQ9MDt2YWx1ZVN0YXJ0PTA7c3RhdGU9RklFTERfU1RBUlQ7Ly8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XG4vLyBSZXF1ZXN0IGhlYWRlciBmaWVsZCBMYXN0LUV2ZW50LUlEIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMuXG52YXIgcmVxdWVzdFVSTD11cmw7aWYodXJsLnNsaWNlKDAsNSkhPT0nZGF0YTonJiZ1cmwuc2xpY2UoMCw1KSE9PSdibG9iOicpe2lmKGxhc3RFdmVudElkIT09Jycpe3JlcXVlc3RVUkwrPSh1cmwuaW5kZXhPZignPycpPT09LTE/Jz8nOicmJykrJ2xhc3RFdmVudElkPScrZW5jb2RlVVJJQ29tcG9uZW50KGxhc3RFdmVudElkKTt9fXZhciByZXF1ZXN0SGVhZGVycz17fTtyZXF1ZXN0SGVhZGVyc1snQWNjZXB0J109J3RleHQvZXZlbnQtc3RyZWFtJztpZihoZWFkZXJzIT11bmRlZmluZWQpe2Zvcih2YXIgbmFtZSBpbiBoZWFkZXJzKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycyxuYW1lKSl7cmVxdWVzdEhlYWRlcnNbbmFtZV09aGVhZGVyc1tuYW1lXTt9fX10cnl7dHJhbnNwb3J0Lm9wZW4oeGhyLG9uU3RhcnQsb25Qcm9ncmVzcyxvbkZpbmlzaCxyZXF1ZXN0VVJMLHdpdGhDcmVkZW50aWFscyxyZXF1ZXN0SGVhZGVycyk7fWNhdGNoKGVycm9yKXtjbG9zZSgpO3Rocm93IGVycm9yO319O2VzLnVybD11cmw7ZXMucmVhZHlTdGF0ZT1DT05ORUNUSU5HO2VzLndpdGhDcmVkZW50aWFscz13aXRoQ3JlZGVudGlhbHM7ZXMuX2Nsb3NlPWNsb3NlO29uVGltZW91dCgpO31FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ09OTkVDVElORz1DT05ORUNUSU5HO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLk9QRU49T1BFTjtFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQ9Q0xPU0VEO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5fY2xvc2UoKTt9O0V2ZW50U291cmNlUG9seWZpbGwuQ09OTkVDVElORz1DT05ORUNUSU5HO0V2ZW50U291cmNlUG9seWZpbGwuT1BFTj1PUEVOO0V2ZW50U291cmNlUG9seWZpbGwuQ0xPU0VEPUNMT1NFRDtFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHM9dW5kZWZpbmVkO3ZhciBfZGVmYXVsdD1FdmVudFNvdXJjZVBvbHlmaWxsO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50LXNvdXJjZS1wb2x5ZmlsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRpc3BsYXlDb250ZW50PWRpc3BsYXlDb250ZW50Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW1vdmUgTmV4dC5qcycgbm8tRk9VQyBzdHlsZXMgd29ya2Fyb3VuZCBmb3IgdXNpbmdcbi8vIGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50LiBJdCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgaHlkcmF0aW9uLCBvciBlbHNlXG4vLyByZW5kZXJpbmcgd29uJ3QgaGF2ZSB0aGUgY29ycmVjdCBjb21wdXRlZCB2YWx1ZXMgaW4gZWZmZWN0cy5cbmZ1bmN0aW9uIGRpc3BsYXlDb250ZW50KGNhbGxiYWNrKXs7KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO31pZihjYWxsYmFjayl7Y2FsbGJhY2soKTt9fSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91Yy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNsb3NlUGluZz1jbG9zZVBpbmc7ZXhwb3J0cy5zZXR1cFBpbmc9c2V0dXBQaW5nO2V4cG9ydHMuY3VycmVudFBhZ2U9dm9pZCAwO3ZhciBfZXZlbnRzb3VyY2U9cmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTsvKiBnbG9iYWwgbG9jYXRpb24gKi9sZXQgZXZ0U291cmNlO2xldCBjdXJyZW50UGFnZTtleHBvcnRzLmN1cnJlbnRQYWdlPWN1cnJlbnRQYWdlO2Z1bmN0aW9uIGNsb3NlUGluZygpe2lmKGV2dFNvdXJjZSlldnRTb3VyY2UuY2xvc2UoKTtldnRTb3VyY2U9bnVsbDt9ZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LHBhdGhuYW1lRm4scmV0cnkpe2NvbnN0IHBhdGhuYW1lPXBhdGhuYW1lRm4oKTsvLyBNYWtlIHN1cmUgdG8gb25seSBjcmVhdGUgbmV3IEV2ZW50U291cmNlIHJlcXVlc3QgaWYgcGFnZSBoYXMgY2hhbmdlZFxuaWYocGF0aG5hbWU9PT1jdXJyZW50UGFnZSYmIXJldHJ5KXJldHVybjtleHBvcnRzLmN1cnJlbnRQYWdlPWN1cnJlbnRQYWdlPXBhdGhuYW1lOy8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxuY2xvc2VQaW5nKCk7ZXZ0U291cmNlPSgwLF9ldmVudHNvdXJjZS5nZXRFdmVudFNvdXJjZVdyYXBwZXIpKHtwYXRoOmAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcj9wYWdlPSR7Y3VycmVudFBhZ2V9YCx0aW1lb3V0OjUwMDB9KTtldnRTb3VyY2UuYWRkTWVzc2FnZUxpc3RlbmVyKGV2ZW50PT57aWYoZXZlbnQuZGF0YS5pbmRleE9mKCd7Jyk9PT0tMSlyZXR1cm47dHJ5e2NvbnN0IHBheWxvYWQ9SlNPTi5wYXJzZShldmVudC5kYXRhKTtpZihwYXlsb2FkLmludmFsaWQpey8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIG5vdCBleGlzdC5cbi8vIFNvLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSBpdCBleGlzdHMgYmVmb3JlIHJlbG9hZGluZy5cbmZldGNoKGxvY2F0aW9uLmhyZWYse2NyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHBhZ2VSZXM9PntpZihwYWdlUmVzLnN0YXR1cz09PTIwMCl7bG9jYXRpb24ucmVsb2FkKCk7fX0pO319Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKCdvbi1kZW1hbmQtZW50cmllcyBmYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnLGVycik7fX0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzLm1hcCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
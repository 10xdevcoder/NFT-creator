(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "E:\\web3 jam\\MetaX-web3 jam\\pages\\Home.js";



function Home() {
  async function purchaseMembership() {
    const ethers = __webpack_require__(/*! ethers */ "ethers");

    const abis = __webpack_require__(/*! @unlock-protocol/contracts */ "@unlock-protocol/contracts"); // Wrapping all calls in an async block
    // Here we use a Rinkeby provider. We will be able to read the state, but not send transactions.


    await ethereum.request({
      method: 'eth_requestAccounts'
    });
    const url = "https://eth-rinkeby.alchemyapi.io/v2/avpSFE4CFF97rciebprxcggQd2cF18mJ";
    const provider = new ethers.providers.JsonRpcProvider(url); // This time, we also need a signer.
    // Note: we sent some fake Eth to this address, but please replace with your own!

    const signer = provider.getSigner(); //const wallet = ethers.Wallet.fromMnemonic('speed already skull purchase artwork join execute twist they animal entire champion')   //fromMnemonic('seed cube fiction obvious cover riot edge beauty pelican radio useful strong')
    //const signer = wallet.connect(provider)

    /*      await signer.signMessage('Purchase our membership and become part of our DAO')
                  //We will interact with a lock deployed on rinkeby at this address 0xafa8fE6D93174D17D98E7A539A90a2EFBC0c0Fc1
          const address = '0x4D21008e45E6d41a33c21516A0fDF40a5CbfabEb'
                  // Let's go purchase the membership for this lock
          const lock = new ethers.Contract(address, abis.PublicLockV8.abi, signer)
                  // If the lock was using an ERC20 as currency, we would need to send an approval transaction on the ERC20 contract first...
                  // Let's get the key price so we know how much we need to send (we could send more!)
          const amount = await lock.keyPrice()
                  //Purchase params:
          const purchaseParams = [
              amount,
              signer, // This is the recipient of the membership (us!)
              signer, // The is the referrer who will earn UDT tokens (we'd like this to be us!)
              [], // empty data object (not used here)
          ] */
    // const gasPrice = await provider.getGasPrice() // Let's get the current gas price
    //   const options = {
    //     gasPrice,
    //        value: amount // This is a lock that uses Ether, so it means we need send value. If it was an ERC20 we could set this to 0 and just use the amount on purchase's first argument
    //   }
    // Important: we need to compute the gasLimit ourselves because it is a funcion of gasPrice
    // For safety we could also bump it (the user is refunded the difference anyway)

    /*  const gasEstimate = await lock.estimateGas.purchase(...purchaseParams, options)
      options.gasLimit = gasEstimate
      const tx = await signer.sendTransaction({
          to: address,
          value: amount
      });
          // We can now send transactions to modify the state of the lock, like purchase a key!
      const transaction = await lock.purchase(...purchaseParams, options)
          const receipt = await transaction.wait() */
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-center text-5x1 ",
        children: "Welcome to MetaX, now face the unlickable gelato ice Cream."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-row ",
      style: {
        margin: '20px'
      },
      className: "flex flex-row text-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        style: {
          position: 'relative',
          left: '40px'
        },
        width: 150,
        height: 220,
        src: "/gelato.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        style: {
          position: 'relative',
          left: '70%'
        },
        width: 150,
        height: 220,
        src: "/gelato.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Welcome to MetaX "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "A place where you can stream a video from livepeer and mint it as nft "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "you can also create digital assets as nfts and put it up for sale "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "you earn rewards why doing all this, you get our custom XFT token "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "get enough XFT then you can trade it and become part of our DAO "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "To be part of our DAO, content creators must own the two gelato ice cream pillar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: purchaseMembership,
          className: "mt-4 bg-blue-500 text-white rounded p-4 shadow-lg",
          children: " Lick IceCream"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//Home */ "./pages/Home.js");

var _jsxFileName = "E:\\web3 jam\\MetaX-web3 jam\\pages\\index.js";



const HomeZ = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HomeZ);

/***/ }),

/***/ "@unlock-protocol/contracts":
/*!*********************************************!*\
  !*** external "@unlock-protocol/contracts" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@unlock-protocol/contracts");;

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("ethers");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRheC8uL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vbWV0YXgvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZXRheC9leHRlcm5hbCBcIkB1bmxvY2stcHJvdG9jb2wvY29udHJhY3RzXCIiLCJ3ZWJwYWNrOi8vbWV0YXgvZXh0ZXJuYWwgXCJldGhlcnNcIiIsIndlYnBhY2s6Ly9tZXRheC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL21ldGF4L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tZXRheC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhvbWUiLCJwdXJjaGFzZU1lbWJlcnNoaXAiLCJldGhlcnMiLCJyZXF1aXJlIiwiYWJpcyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwibWFyZ2luIiwicG9zaXRpb24iLCJsZWZ0IiwiSG9tZVoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBSVosaUJBQWVDLGtCQUFmLEdBQW9DO0FBQ2hDLFVBQU1DLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUF0Qjs7QUFDQSxVQUFNQyxJQUFJLEdBQUdELG1CQUFPLENBQUMsOERBQUQsQ0FBcEIsQ0FGZ0MsQ0FJaEM7QUFFQTs7O0FBQ0EsVUFBTUUsUUFBUSxDQUFDQyxPQUFULENBQWlCO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQWpCLENBQU47QUFDQSxVQUFNQyxHQUFHLEdBQUcsdUVBQVo7QUFDQSxVQUFNQyxRQUFRLEdBQUcsSUFBSVAsTUFBTSxDQUFDUSxTQUFQLENBQWlCQyxlQUFyQixDQUFxQ0gsR0FBckMsQ0FBakIsQ0FUZ0MsQ0FXaEM7QUFDQTs7QUFDQSxVQUFNSSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksU0FBVCxFQUFmLENBYmdDLENBY2hDO0FBRUE7O0FBQ0E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT1E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0s7O0FBS0Qsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDZCQUNJO0FBQ0ksaUJBQVMsRUFBQyx1QkFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQU1JO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQWdDLFdBQUssRUFBRTtBQUNuQ0MsY0FBTSxFQUFFO0FBRDJCLE9BQXZDO0FBRUcsZUFBUyxFQUFDLDJCQUZiO0FBQUEsOEJBR0k7QUFBSyxhQUFLLEVBQUU7QUFDUkMsa0JBQVEsRUFBRSxVQURGO0FBRVJDLGNBQUksRUFBRTtBQUZFLFNBQVo7QUFHRyxhQUFLLEVBQUUsR0FIVjtBQUdlLGNBQU0sRUFBRSxHQUh2QjtBQUc0QixXQUFHLEVBQUM7QUFIaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBT0k7QUFBSyxhQUFLLEVBQUU7QUFDUkQsa0JBQVEsRUFBRSxVQURGO0FBRVJDLGNBQUksRUFBRTtBQUZFLFNBQVo7QUFHRyxhQUFLLEVBQUUsR0FIVjtBQUdlLGNBQU0sRUFBRSxHQUh2QjtBQUc0QixXQUFHLEVBQUM7QUFIaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLGVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKLGVBWUk7QUFBQSxnQ0FFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixlQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSixlQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEosZUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaSixlQWNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEosZUFlSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmSixlQWlCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCSixlQWtCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkosZUFtQkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkosZUFxQkk7QUFFSSxpQkFBTyxFQUFFZixrQkFGYjtBQUdJLG1CQUFTLEVBQUMsbURBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUEsa0JBREo7QUFzREg7O0FBRUQsK0RBQWVELElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUNBOztBQUVBLE1BQU1pQixLQUFLLEdBQUcsTUFBTTtBQUNoQixzQkFDSSw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFHSCxDQUpEOztBQU1BLCtEQUFlQSxLQUFmLEU7Ozs7Ozs7Ozs7O0FDVEEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBwdXJjaGFzZU1lbWJlcnNoaXAoKSB7XHJcbiAgICAgICAgY29uc3QgZXRoZXJzID0gcmVxdWlyZSgnZXRoZXJzJylcclxuICAgICAgICBjb25zdCBhYmlzID0gcmVxdWlyZSgnQHVubG9jay1wcm90b2NvbC9jb250cmFjdHMnKVxyXG5cclxuICAgICAgICAvLyBXcmFwcGluZyBhbGwgY2FsbHMgaW4gYW4gYXN5bmMgYmxvY2tcclxuXHJcbiAgICAgICAgLy8gSGVyZSB3ZSB1c2UgYSBSaW5rZWJ5IHByb3ZpZGVyLiBXZSB3aWxsIGJlIGFibGUgdG8gcmVhZCB0aGUgc3RhdGUsIGJ1dCBub3Qgc2VuZCB0cmFuc2FjdGlvbnMuXHJcbiAgICAgICAgYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9ldGgtcmlua2VieS5hbGNoZW15YXBpLmlvL3YyL2F2cFNGRTRDRkY5N3JjaWVicHJ4Y2dnUWQyY0YxOG1KXCI7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIodXJsKVxyXG5cclxuICAgICAgICAvLyBUaGlzIHRpbWUsIHdlIGFsc28gbmVlZCBhIHNpZ25lci5cclxuICAgICAgICAvLyBOb3RlOiB3ZSBzZW50IHNvbWUgZmFrZSBFdGggdG8gdGhpcyBhZGRyZXNzLCBidXQgcGxlYXNlIHJlcGxhY2Ugd2l0aCB5b3VyIG93biFcclxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgICAvL2NvbnN0IHdhbGxldCA9IGV0aGVycy5XYWxsZXQuZnJvbU1uZW1vbmljKCdzcGVlZCBhbHJlYWR5IHNrdWxsIHB1cmNoYXNlIGFydHdvcmsgam9pbiBleGVjdXRlIHR3aXN0IHRoZXkgYW5pbWFsIGVudGlyZSBjaGFtcGlvbicpICAgLy9mcm9tTW5lbW9uaWMoJ3NlZWQgY3ViZSBmaWN0aW9uIG9idmlvdXMgY292ZXIgcmlvdCBlZGdlIGJlYXV0eSBwZWxpY2FuIHJhZGlvIHVzZWZ1bCBzdHJvbmcnKVxyXG5cclxuICAgICAgICAvL2NvbnN0IHNpZ25lciA9IHdhbGxldC5jb25uZWN0KHByb3ZpZGVyKVxyXG4gICAgICAgIC8qICAgICAgYXdhaXQgc2lnbmVyLnNpZ25NZXNzYWdlKCdQdXJjaGFzZSBvdXIgbWVtYmVyc2hpcCBhbmQgYmVjb21lIHBhcnQgb2Ygb3VyIERBTycpXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIC8vV2Ugd2lsbCBpbnRlcmFjdCB3aXRoIGEgbG9jayBkZXBsb3llZCBvbiByaW5rZWJ5IGF0IHRoaXMgYWRkcmVzcyAweGFmYThmRTZEOTMxNzREMTdEOThFN0E1MzlBOTBhMkVGQkMwYzBGYzFcclxuICAgICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gJzB4NEQyMTAwOGU0NUU2ZDQxYTMzYzIxNTE2QTBmREY0MGE1Q2JmYWJFYidcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gTGV0J3MgZ28gcHVyY2hhc2UgdGhlIG1lbWJlcnNoaXAgZm9yIHRoaXMgbG9ja1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxvY2sgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGFkZHJlc3MsIGFiaXMuUHVibGljTG9ja1Y4LmFiaSwgc2lnbmVyKVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAvLyBJZiB0aGUgbG9jayB3YXMgdXNpbmcgYW4gRVJDMjAgYXMgY3VycmVuY3ksIHdlIHdvdWxkIG5lZWQgdG8gc2VuZCBhbiBhcHByb3ZhbCB0cmFuc2FjdGlvbiBvbiB0aGUgRVJDMjAgY29udHJhY3QgZmlyc3QuLi5cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gTGV0J3MgZ2V0IHRoZSBrZXkgcHJpY2Ugc28gd2Uga25vdyBob3cgbXVjaCB3ZSBuZWVkIHRvIHNlbmQgKHdlIGNvdWxkIHNlbmQgbW9yZSEpXHJcbiAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gYXdhaXQgbG9jay5rZXlQcmljZSgpXHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIC8vUHVyY2hhc2UgcGFyYW1zOlxyXG4gICAgICAgICAgICAgIGNvbnN0IHB1cmNoYXNlUGFyYW1zID0gW1xyXG4gICAgICAgICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgIHNpZ25lciwgLy8gVGhpcyBpcyB0aGUgcmVjaXBpZW50IG9mIHRoZSBtZW1iZXJzaGlwICh1cyEpXHJcbiAgICAgICAgICAgICAgICAgIHNpZ25lciwgLy8gVGhlIGlzIHRoZSByZWZlcnJlciB3aG8gd2lsbCBlYXJuIFVEVCB0b2tlbnMgKHdlJ2QgbGlrZSB0aGlzIHRvIGJlIHVzISlcclxuICAgICAgICAgICAgICAgICAgW10sIC8vIGVtcHR5IGRhdGEgb2JqZWN0IChub3QgdXNlZCBoZXJlKVxyXG4gICAgICAgICAgICAgIF0gKi9cclxuXHJcbiAgICAgICAgLy8gY29uc3QgZ2FzUHJpY2UgPSBhd2FpdCBwcm92aWRlci5nZXRHYXNQcmljZSgpIC8vIExldCdzIGdldCB0aGUgY3VycmVudCBnYXMgcHJpY2VcclxuICAgICAgICAvLyAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgLy8gICAgIGdhc1ByaWNlLFxyXG4gICAgICAgIC8vICAgICAgICB2YWx1ZTogYW1vdW50IC8vIFRoaXMgaXMgYSBsb2NrIHRoYXQgdXNlcyBFdGhlciwgc28gaXQgbWVhbnMgd2UgbmVlZCBzZW5kIHZhbHVlLiBJZiBpdCB3YXMgYW4gRVJDMjAgd2UgY291bGQgc2V0IHRoaXMgdG8gMCBhbmQganVzdCB1c2UgdGhlIGFtb3VudCBvbiBwdXJjaGFzZSdzIGZpcnN0IGFyZ3VtZW50XHJcbiAgICAgICAgLy8gICB9XHJcblxyXG4gICAgICAgIC8vIEltcG9ydGFudDogd2UgbmVlZCB0byBjb21wdXRlIHRoZSBnYXNMaW1pdCBvdXJzZWx2ZXMgYmVjYXVzZSBpdCBpcyBhIGZ1bmNpb24gb2YgZ2FzUHJpY2VcclxuICAgICAgICAvLyBGb3Igc2FmZXR5IHdlIGNvdWxkIGFsc28gYnVtcCBpdCAodGhlIHVzZXIgaXMgcmVmdW5kZWQgdGhlIGRpZmZlcmVuY2UgYW55d2F5KVxyXG4gICAgICAgIC8qICBjb25zdCBnYXNFc3RpbWF0ZSA9IGF3YWl0IGxvY2suZXN0aW1hdGVHYXMucHVyY2hhc2UoLi4ucHVyY2hhc2VQYXJhbXMsIG9wdGlvbnMpXHJcbiAgICAgICAgICBvcHRpb25zLmdhc0xpbWl0ID0gZ2FzRXN0aW1hdGVcclxuICAgICAgICAgIGNvbnN0IHR4ID0gYXdhaXQgc2lnbmVyLnNlbmRUcmFuc2FjdGlvbih7XHJcbiAgICAgICAgICAgICAgdG86IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGFtb3VudFxyXG4gICAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgICAvLyBXZSBjYW4gbm93IHNlbmQgdHJhbnNhY3Rpb25zIHRvIG1vZGlmeSB0aGUgc3RhdGUgb2YgdGhlIGxvY2ssIGxpa2UgcHVyY2hhc2UgYSBrZXkhXHJcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGxvY2sucHVyY2hhc2UoLi4ucHVyY2hhc2VQYXJhbXMsIG9wdGlvbnMpXHJcbiAgXHJcbiAgICAgICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpICovXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC01eDEgXCI+V2VsY29tZSB0byBNZXRhWCwgbm93IGZhY2UgdGhlIHVubGlja2FibGUgZ2VsYXRvIGljZSBDcmVhbS48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93ICcgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzIwcHgnXHJcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzQwcHgnXHJcbiAgICAgICAgICAgICAgICB9fSB3aWR0aD17MTUwfSBoZWlnaHQ9ezIyMH0gc3JjPVwiL2dlbGF0by5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc3MCUnXHJcbiAgICAgICAgICAgICAgICB9fSB3aWR0aD17MTUwfSBoZWlnaHQ9ezIyMH0gc3JjPVwiL2dlbGF0by5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gTWV0YVggPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8cCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEEgcGxhY2Ugd2hlcmUgeW91IGNhbiBzdHJlYW0gYSB2aWRlbyBmcm9tIGxpdmVwZWVyIGFuZCBtaW50IGl0IGFzIG5mdCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3UgY2FuIGFsc28gY3JlYXRlIGRpZ2l0YWwgYXNzZXRzIGFzIG5mdHMgYW5kIHB1dCBpdCB1cCBmb3Igc2FsZSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3UgZWFybiByZXdhcmRzIHdoeSBkb2luZyBhbGwgdGhpcywgeW91IGdldCBvdXIgY3VzdG9tIFhGVCB0b2tlbiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQgZW5vdWdoIFhGVCB0aGVuIHlvdSBjYW4gdHJhZGUgaXQgYW5kIGJlY29tZSBwYXJ0IG9mIG91ciBEQU8gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwID5UbyBiZSBwYXJ0IG9mIG91ciBEQU8sIGNvbnRlbnQgY3JlYXRvcnMgbXVzdCBvd24gdGhlIHR3byBnZWxhdG8gaWNlIGNyZWFtIHBpbGxhcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHVyY2hhc2VNZW1iZXJzaGlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBwLTQgc2hhZG93LWxnXCI+IExpY2sgSWNlQ3JlYW08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLy9Ib21lJ1xyXG5cclxuY29uc3QgSG9tZVogPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIb21lIC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lWlxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdW5sb2NrLXByb3RvY29sL2NvbnRyYWN0c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXRoZXJzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
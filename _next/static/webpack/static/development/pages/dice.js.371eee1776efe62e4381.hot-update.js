webpackHotUpdate("static/development/pages/dice.js",{

/***/ "./libs/eos-client.js":
/*!****************************!*\
  !*** ./libs/eos-client.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scatterjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scatterjs-core */ "../node_modules/scatterjs-core/dist/index.js");
/* harmony import */ var scatterjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scatterjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scatterjs-plugin-eosjs */ "../node_modules/scatterjs-plugin-eosjs/dist/index.js");
/* harmony import */ var scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! eosjs */ "../node_modules/eosjs/lib/index.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




 // Don't forget to tell ScatterJS which plugins you are using.

scatterjs_core__WEBPACK_IMPORTED_MODULE_1___default.a.plugins(new scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_2___default.a()); // Networks are used to reference certain blockchains.
// They let you get accounts and help you build signature providers.

var network = {
  mainNet: {
    blockchain: 'eos',
    protocol: 'https',
    host: 'nodes.get-scatter.com',
    port: 443,
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
  },
  tokamaklabs: {
    blockchain: 'eos',
    protocol: 'http',
    host: '104.199.192.77',
    port: 8888,
    chainId: 'a578eed19b3745a4e0e3a56a27f6323d3a40f6544af3368f5ff7c69dbf8fdbe7'
  }
};
var instance = null;

var EosClient =
/*#__PURE__*/
function () {
  function EosClient() {
    _classCallCheck(this, EosClient);
  }

  _createClass(EosClient, [{
    key: "shouldInit",
    value: function shouldInit() {
      return !!this.account;
    }
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var connected, scatter, requiredFields, eosOptions;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return scatterjs_core__WEBPACK_IMPORTED_MODULE_1___default.a.scatter.connect('BadDice');

              case 2:
                connected = _context.sent;

                if (connected) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", false);

              case 5:
                scatter = scatterjs_core__WEBPACK_IMPORTED_MODULE_1___default.a.scatter; // Now we need to get an identity from the user.
                // We're also going to require an account that is connected to the network we're using.

                requiredFields = {
                  accounts: [network.tokamaklabs]
                };
                _context.next = 9;
                return scatter.getIdentity(requiredFields);

              case 9:
                // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
                // the user for their account name beforehand. They could still give you a different account.
                this.account = scatter.identity.accounts.find(function (x) {
                  return x.blockchain === 'eos';
                }); // You can pass in any additional options you want into the eosjs reference.

                eosOptions = {
                  expireInSeconds: 60
                }; // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.

                this.eos = scatter.eos(network.tokamaklabs, eosjs__WEBPACK_IMPORTED_MODULE_3___default.a, eosOptions); // ----------------------------
                // Now that we have an identity,
                // an EOSIO account, and a reference
                // to an eosjs object we can send a transaction.
                // ----------------------------
                // Never assume the account's permission/authority. Always take it from the returned account.

                this.transactionOptions = {
                  authorization: ["".concat(this.account.name, "@").concat(this.account.authority)]
                };

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "getMyBalance",
    value: function () {
      var _getMyBalance = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.eos.getCurrencyBalance('eosio.token', this.account.name, 'EOS'));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMyBalance() {
        return _getMyBalance.apply(this, arguments);
      }

      return getMyBalance;
    }() // this.eos.transfer(this.account.name, 'fairnessdice', `${parseFloat(this.state.betValue).toFixed(4)} EOS`, `${this.state.diceValue}#peter1#userseed#usermemo`, transactionOptions)

  }, {
    key: "transfer",
    value: function () {
      var _transfer = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(quantity, memo) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.eos.transfer(this.account.name, 'fairnessdice', quantity, memo, this.transactionOptions));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function transfer(_x, _x2) {
        return _transfer.apply(this, arguments);
      }

      return transfer;
    }()
  }, {
    key: "getLatestBetReceipts",
    value: function () {
      var _getLatestBetReceipts = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var length,
            _ref,
            actions,
            betReceipts,
            _args4 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                length = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 1;
                _context4.next = 3;
                return this.eos.getActions('fairnessdice', -1, -length);

              case 3:
                _ref = _context4.sent;
                actions = _ref.actions;
                betReceipts = actions.filter(function (item) {
                  return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(item, 'action_trace.act.name') === 'betreceipt';
                });
                return _context4.abrupt("return", betReceipts.map(function (item) {
                  return {
                    data: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(item, 'action_trace.act.data'),
                    block_time: item.block_time,
                    trx_id: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(item, 'action_trace.trx_id')
                  };
                }));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getLatestBetReceipts() {
        return _getLatestBetReceipts.apply(this, arguments);
      }

      return getLatestBetReceipts;
    }()
  }], [{
    key: "getInstance",

    /**
     * @returns EosClient
     */
    value: function getInstance() {
      if (instance == null) {
        instance = new EosClient();
      }

      return instance;
    }
  }]);

  return EosClient;
}();

/* harmony default export */ __webpack_exports__["default"] = (EosClient);

/***/ })

})
//# sourceMappingURL=dice.js.371eee1776efe62e4381.hot-update.js.map
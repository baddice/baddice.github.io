webpackHotUpdate("static/development/pages/dice.js",{

/***/ "./pages/dice.js":
/*!***********************!*\
  !*** ./pages/dice.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Slider */ "../node_modules/@material-ui/lab/Slider/index.js");
/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid/v4 */ "../node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_bet_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/bet-history */ "./components/bet-history.js");
/* harmony import */ var _components_base_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/base-container */ "./components/base-container.js");
/* harmony import */ var _libs_contract_observer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../libs/contract-observer */ "./libs/contract-observer.js");
/* harmony import */ var _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../libs/styleguide/colors */ "./libs/styleguide/colors.js");
/* harmony import */ var _libs_styleguide_texts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../libs/styleguide/texts */ "./libs/styleguide/texts.js");
/* harmony import */ var _libs_eos_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../libs/eos-client */ "./libs/eos-client.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux */ "./redux/index.js");


var _jsxFileName = "/Users/ggm/Developer/tokamak-labs/baddice-webapp/src/pages/dice.js",
    _dec,
    _class;



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var getPayout = function getPayout(currentBetNumber) {
  var expectedValue = 98.46;
  return (expectedValue / (currentBetNumber - 1)).toFixed(2);
};

function EosAmount(props) {
  var _props$amount = props.amount,
      amount = _props$amount === void 0 ? 0.0000 : _props$amount,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  var styles = {
    root: Object.assign({
      display: 'flex',
      flexDirection: 'row-reverse',
      background: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2,
      margin: 0
    }, style)
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "EOS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, amount.toFixed(4)));
}

EosAmount.propTypes = {
  amount: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};

var Balance =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Balance, _React$Component);

  function Balance() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Balance);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Balance)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      balance: 0.0000
    });

    return _this;
  }

  _createClass(Balance, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _libs_eos_client__WEBPACK_IMPORTED_MODULE_13__["default"].getInstance().then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(eosClient) {
          var result, balance;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return eosClient.getMyBalance();

                case 2:
                  result = _context.sent;
                  balance = parseFloat(result[0].replace('EOS', '').trim());

                  if (!isNaN(balance)) {
                    _this2.setState({
                      balance: balance
                    });
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        container: {
          display: 'flex',
          alignItems: 'center'
        },
        eosAmount: {
          flexBasis: 'auto',
          flexGrow: 1
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-wallet.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EosAmount, {
        style: styles.eosAmount,
        amount: this.state.balance,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }));
    }
  }]);

  return Balance;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var CpuAndRam =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(CpuAndRam, _React$Component2);

  function CpuAndRam() {
    _classCallCheck(this, CpuAndRam);

    return _possibleConstructorReturn(this, _getPrototypeOf(CpuAndRam).apply(this, arguments));
  }

  _createClass(CpuAndRam, [{
    key: "render",
    value: function render() {
      var styles = {
        gridItem: {
          height: 34,
          display: 'flex',
          alignItems: 'center'
        },
        barWrap: {
          flexBasis: 'auto',
          flexGrow: 1,
          lineHeight: 9,
          height: 9,
          borderRadius: 5,
          border: '1px solid gray',
          margin: '0px 5px 0px 5px'
        },
        barFill: {
          width: '50%',
          lineHeight: 9,
          height: 9,
          borderRadius: 5,
          backgroundImage: 'linear-gradient(to right, #0096ff, #42e8df)',
          color: 'transparent'
        },
        leftText: {
          marginLeft: 5,
          width: 30,
          fontSize: 14
        },
        rightText: {
          marginRight: 5,
          width: 34
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        height: 34,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        style: styles.gridItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.leftText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "CPU"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barFill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "fill")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.rightText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "67%")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        style: styles.gridItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.leftText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "RAM"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barFill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "fill")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.rightText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "67%"))));
    }
  }]);

  return CpuAndRam;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var OddsInfo =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(OddsInfo, _React$Component3);

  function OddsInfo() {
    _classCallCheck(this, OddsInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(OddsInfo).apply(this, arguments));
  }

  _createClass(OddsInfo, [{
    key: "render",
    value: function render() {
      var Content = function Content(_ref2) {
        var height = _ref2.height,
            text1 = _ref2.text1,
            text2 = _ref2.text2;
        var styles = {
          root: {
            height: height,
            display: 'table',
            width: '100%',
            background: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2,
            borderRadius: 4
          },
          wrapper: {
            display: 'table-cell',
            textAlign: 'center',
            verticalAlign: 'middle'
          },
          text1: {
            fontSize: 28,
            fontWeight: 500,
            height: 28,
            color: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].clearBlue
          },
          text2: {
            fontSize: 14,
            fontWeight: 500,
            height: 20,
            marginTop: 4,
            color: '#d2d2d2'
          }
        };
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.root,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.wrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.text1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, text1), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.text2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, text2)));
      };

      var currentBetNumber = this.props.currentBetNumber;
      var winChance = "".concat(currentBetNumber - 1, "%");
      var payOut = getPayout(currentBetNumber);
      var styles = {
        middleSpacing: {
          marginTop: 5
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 120,
        text1: currentBetNumber,
        text2: "小於該數獲勝",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 8,
        style: styles.middleSpacing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 69,
        text1: payOut,
        text2: "賠率",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 69,
        text1: winChance,
        text2: "中獎概率",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }))));
    }
  }]);

  return OddsInfo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

OddsInfo.propTypes = {
  currentBetNumber: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number
};
var Dice = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref3) {
  var betAmount = _ref3.betAmount,
      rollUnder = _ref3.rollUnder,
      betStatus = _ref3.betStatus;
  return {
    betAmount: betAmount,
    rollUnder: rollUnder,
    betStatus: betStatus
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Dice, _React$Component4);

  function Dice() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, Dice);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Dice)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      rollingNumber: 50
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleRollUnderChange", function (event, value) {
      _this3.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].updateRollUnder(value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleBetAmountChange", function (event) {
      var value = event.target.value;

      if (isNaN(value) === false && value >= 0) {
        _this3.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].updateBetAmount(event.target.value));
      } else if (value === '') {
        _this3.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].updateBetAmount(''));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleBetAmountOnBlur", function (event) {
      var value = event.target.value;
      console.log(event, value);

      if (value === '') {
        _this3.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].updateBetAmount(0.10));
      } else {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "handleBetButton",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var rollUnder, betAmount, betClientId, quantity, memo, trx;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                rollUnder = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getRollUnder(_this3.props);
                betAmount = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getBetAmount(_this3.props);
                betClientId = uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()();
                quantity = "".concat(parseFloat(betAmount).toFixed(4), " EOS");
                memo = "".concat(rollUnder, "#peter1#userseed#").concat(betClientId);
                _context2.next = 7;
                return _this3.eosClient.transfer(quantity, memo);

              case 7:
                trx = _context2.sent;
                // eslint-disable-next-line
                console.log("Transaction ID: ".concat(trx.transaction_id));

                _this3.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].rollDice(betClientId));

                _this3.contractObserver.addEvent({
                  type: 'onBetResult',
                  betClientId: betClientId,
                  fn: function fn(bet) {
                    _this3.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].rollFinished(bet)); // eslint-disable-next-line


                    console.log('[onBetResult]', bet);
                  }
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());

    return _this3;
  }

  _createClass(Dice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      _libs_eos_client__WEBPACK_IMPORTED_MODULE_13__["default"].getInstance().then(
      /*#__PURE__*/
      function () {
        var _ref5 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(eosClient) {
          var betReceipts;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _this4.eosClient = eosClient;
                  _context3.next = 3;
                  return eosClient.getLatestBetReceipts(100);

                case 3:
                  betReceipts = _context3.sent;

                  _this4.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].updateBetHistory(betReceipts));

                  _this4.contractObserver = new _libs_contract_observer__WEBPACK_IMPORTED_MODULE_10__["default"](eosClient, _this4.props.dispatch);

                  _this4.contractObserver.start();

                case 7:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function (_x3) {
          return _ref5.apply(this, arguments);
        };
      }());
      setInterval(function () {
        var betStatus = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getBetStatus(_this4.props);

        if (betStatus.isRolling) {
          _this4.setState({
            rollingNumber: Math.ceil(Math.random() * 99)
          });
        }
      }, 100);
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        boardTextTitle: {
          fontSize: 20,
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: '56px'
        },
        selectedCoinButton: {
          width: 75,
          height: 42,
          borderRadius: 4,
          backgroundImage: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].yellow
        },
        coinButton: {
          width: 75,
          height: 42,
          borderRadius: 4,
          backgroundImage: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].yellow
        },
        betButton: {
          height: 48,
          width: '100%',
          borderRadius: 4,
          backgroundImage: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].yellow
        },
        icon: {
          verticalAlign: 'middle'
        },
        eosFrame: {
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          height: 36,
          borderRadius: 4,
          backgroundColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2,
          marginLeft: 36 + 5
        },
        adjustButtons: {
          textAlign: 'center',
          height: 25,
          width: '100%',
          borderRadius: 4,
          border: 0,
          color: '#ffffff',
          backgroundColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2
        }
      };
      var rollUnder = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getRollUnder(this.props);
      var betAmount = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getBetAmount(this.props);
      var betStatus = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getBetStatus(this.props);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Balance, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CpuAndRam, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OddsInfo, {
        currentBetNumber: rollUnder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-coin.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "\u6295\u6CE8\u91D1\u984D")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          "float": 'left',
          width: 36
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/token-eos.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.eosFrame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, "EOS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        disableUnderline: true,
        type: "number",
        inputProps: {
          style: {
            color: '#ffffff',
            fontSize: 16,
            backgroundColor: 'transparent',
            border: 0,
            textAlign: 'right'
          }
        },
        value: betAmount,
        onChange: this.handleBetAmountChange,
        onBlur: this.handleBetAmountOnBlur,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, "1/2")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "2x ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, "MIN")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, "MAX"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_5___default.a, {
        min: 2,
        max: 96,
        step: 1,
        value: rollUnder,
        onChange: this.handleRollUnderChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-coin.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, "\u8D0F\u5F97\u734E\u91D1")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          "float": 'left',
          width: 36
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/token-eos.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.eosFrame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EosAmount, {
        amount: betAmount * getPayout(rollUnder),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          margin: '0px 10px 0px 10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.betButton,
        onClick: this.handleBetButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: _libs_styleguide_texts__WEBPACK_IMPORTED_MODULE_12__["default"].ButtonLarge,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, betStatus.isRolling ? this.state.rollingNumber : '開始投注'))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_bet_history__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "986249378",
        css: "body{width:100%;height:1000px;background-color:".concat(_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2, ";font-family:Roboto,Helvetica,Arial,sans-serif;margin:0px;overflow-x:hidden;color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ20vRGV2ZWxvcGVyL3Rva2FtYWstbGFicy9iYWRkaWNlLXdlYmFwcC9zcmMvcGFnZXMvZGljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnYTJCLEFBR3dCLFdBQ0csY0FDZ0MsOENBQ0csOENBQ3RDLFdBQ08sa0JBQ0osY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2dnbS9EZXZlbG9wZXIvdG9rYW1hay1sYWJzL2JhZGRpY2Utd2ViYXBwL3NyYy9wYWdlcy9kaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCdXR0b25CYXNlLCBHcmlkLCBJbnB1dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9TbGlkZXInO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQmV0SGlzdG9yeSBmcm9tICcuLi9jb21wb25lbnRzL2JldC1oaXN0b3J5JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlLWNvbnRhaW5lcic7XG5pbXBvcnQgQ29udHJhY3RPYnNlcnZlciBmcm9tICcuLi9saWJzL2NvbnRyYWN0LW9ic2VydmVyJztcblxuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2xpYnMvc3R5bGVndWlkZS9jb2xvcnMnO1xuaW1wb3J0IHRleHRzIGZyb20gJy4uL2xpYnMvc3R5bGVndWlkZS90ZXh0cyc7XG5pbXBvcnQgRW9zQ2xpZW50IGZyb20gJy4uL2xpYnMvZW9zLWNsaWVudCc7XG5cbmltcG9ydCB7IGFjdGlvbnMsIHNlbGVjdG9ycyB9IGZyb20gJy4uL3JlZHV4JztcblxuY29uc3QgZ2V0UGF5b3V0ID0gKGN1cnJlbnRCZXROdW1iZXIpID0+IHtcbiAgY29uc3QgZXhwZWN0ZWRWYWx1ZSA9IDk4LjQ2O1xuICByZXR1cm4gKGV4cGVjdGVkVmFsdWUgLyAoY3VycmVudEJldE51bWJlciAtIDEpKS50b0ZpeGVkKDIpO1xufTtcblxuZnVuY3Rpb24gRW9zQW1vdW50KHByb3BzKSB7XG4gIGNvbnN0IHsgYW1vdW50ID0gMC4wMDAwLCBzdHlsZSA9IHt9IH0gPSBwcm9wcztcblxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgcm9vdDogT2JqZWN0LmFzc2lnbih7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnLFxuICAgICAgYmFja2dyb3VuZDogY29sb3JzLmRhcmtHcmV5MixcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9LCBzdHlsZSlcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIHN0eWxlPXtzdHlsZXMucm9vdH0+XG4gICAgICA8c3Bhbj5FT1M8L3NwYW4+XG4gICAgICA8c3Bhbj57YW1vdW50LnRvRml4ZWQoNCl9PC9zcGFuPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5Fb3NBbW91bnQucHJvcFR5cGVzID0ge1xuICBhbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuY2xhc3MgQmFsYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGJhbGFuY2U6IDAuMDAwMFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgRW9zQ2xpZW50LmdldEluc3RhbmNlKCkudGhlbihhc3luYyAoZW9zQ2xpZW50KSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZW9zQ2xpZW50LmdldE15QmFsYW5jZSgpO1xuICAgICAgbGV0IGJhbGFuY2UgPSBwYXJzZUZsb2F0KHJlc3VsdFswXS5yZXBsYWNlKCdFT1MnLCAnJykudHJpbSgpKTtcbiAgICAgIGlmICghaXNOYU4oYmFsYW5jZSkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhbGFuY2UgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICB9LFxuICAgICAgZW9zQW1vdW50OiB7XG4gICAgICAgIGZsZXhCYXNpczogJ2F1dG8nLFxuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1nL2ljb24tZ2FtZS13YWxsZXQuc3ZnXCIgLz5cbiAgICAgICAgPEVvc0Ftb3VudCBzdHlsZT17c3R5bGVzLmVvc0Ftb3VudH0gYW1vdW50PXt0aGlzLnN0YXRlLmJhbGFuY2V9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbn1cblxuY2xhc3MgQ3B1QW5kUmFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIGdyaWRJdGVtOiB7XG4gICAgICAgIGhlaWdodDogMzQsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICB9LFxuICAgICAgYmFyV3JhcDoge1xuICAgICAgICBmbGV4QmFzaXM6ICdhdXRvJyxcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDksXG4gICAgICAgIGhlaWdodDogOSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXG4gICAgICAgIG1hcmdpbjogJzBweCA1cHggMHB4IDVweCdcbiAgICAgIH0sXG4gICAgICBiYXJGaWxsOiB7XG4gICAgICAgIHdpZHRoOiAnNTAlJyxcbiAgICAgICAgbGluZUhlaWdodDogOSxcbiAgICAgICAgaGVpZ2h0OiA5LFxuICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwOTZmZiwgIzQyZThkZiknLFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgIGxlZnRUZXh0OiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IDUsXG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgfSxcbiAgICAgIHJpZ2h0VGV4dDoge1xuICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgd2lkdGg6IDM0LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXIgaGVpZ2h0PXszNH0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzdHlsZT17c3R5bGVzLmdyaWRJdGVtfSA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubGVmdFRleHR9PkNQVTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJhcldyYXB9PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYmFyRmlsbH0+ZmlsbDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucmlnaHRUZXh0fT42NyU8L2Rpdj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc3R5bGU9e3N0eWxlcy5ncmlkSXRlbX0gPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmxlZnRUZXh0fT5SQU08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5iYXJXcmFwfT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJhckZpbGx9PmZpbGw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJpZ2h0VGV4dH0+NjclPC9kaXY+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbn1cblxuY2xhc3MgT2Rkc0luZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgQ29udGVudCA9ICh7IGhlaWdodCwgdGV4dDEsIHRleHQyIH0pID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICBkaXNwbGF5OiAndGFibGUnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmRhcmtHcmV5MixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgIH0sXG4gICAgICAgIHdyYXBwZXI6IHtcbiAgICAgICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDE6IHtcbiAgICAgICAgICBmb250U2l6ZTogMjgsXG4gICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgIGhlaWdodDogMjgsXG4gICAgICAgICAgY29sb3I6IGNvbG9ycy5jbGVhckJsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQyOiB7XG4gICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgIG1hcmdpblRvcDogNCxcbiAgICAgICAgICBjb2xvcjogJyNkMmQyZDInLFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucm9vdH0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRleHQxfT57dGV4dDF9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGV4dDJ9Pnt0ZXh0Mn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCB7IGN1cnJlbnRCZXROdW1iZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgd2luQ2hhbmNlID0gYCR7Y3VycmVudEJldE51bWJlciAtIDF9JWA7XG4gICAgY29uc3QgcGF5T3V0ID0gZ2V0UGF5b3V0KGN1cnJlbnRCZXROdW1iZXIpO1xuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgbWlkZGxlU3BhY2luZzogeyBtYXJnaW5Ub3A6IDUgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPENvbnRlbnQgaGVpZ2h0PXsxMjB9IHRleHQxPXtjdXJyZW50QmV0TnVtYmVyfSB0ZXh0Mj17XCLlsI/mlrzoqbLmlbjnjbLli51cIn0gLz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9IHN0eWxlPXtzdHlsZXMubWlkZGxlU3BhY2luZ30+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Q29udGVudCBoZWlnaHQ9ezY5fSB0ZXh0MT17cGF5T3V0fSB0ZXh0Mj17XCLos6DnjodcIn0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Q29udGVudCBoZWlnaHQ9ezY5fSB0ZXh0MT17d2luQ2hhbmNlfSB0ZXh0Mj17XCLkuK3njY7mpoLnjodcIn0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyID5cbiAgICApO1xuICB9XG59XG5PZGRzSW5mby5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRCZXROdW1iZXI6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cbkBjb25uZWN0KCh7IGJldEFtb3VudCwgcm9sbFVuZGVyLCBiZXRTdGF0dXMgfSkgPT4gKHsgYmV0QW1vdW50LCByb2xsVW5kZXIsIGJldFN0YXR1cyB9KSlcbmNsYXNzIERpY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICByb2xsaW5nTnVtYmVyOiA1MCxcbiAgfVxuXG4gIGhhbmRsZVJvbGxVbmRlckNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlUm9sbFVuZGVyKHZhbHVlKSk7XG4gIH1cblxuICBoYW5kbGVCZXRBbW91bnRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGlzTmFOKHZhbHVlKSA9PT0gZmFsc2UgJiYgdmFsdWUgPj0gMCkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZUJldEFtb3VudChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZUJldEFtb3VudCgnJykpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJldEFtb3VudE9uQmx1ciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zb2xlLmxvZyhldmVudCwgdmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVCZXRBbW91bnQoMC4xMCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBcbiAgICB9XG4gIH1cblxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBoYW5kbGVCZXRCdXR0b24gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByb2xsVW5kZXIgPSBzZWxlY3RvcnMuZ2V0Um9sbFVuZGVyKHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGJldEFtb3VudCA9IHNlbGVjdG9ycy5nZXRCZXRBbW91bnQodGhpcy5wcm9wcyk7XG5cbiAgICBjb25zdCBiZXRDbGllbnRJZCA9IHV1aWQoKTtcbiAgICBjb25zdCBxdWFudGl0eSA9IGAke3BhcnNlRmxvYXQoYmV0QW1vdW50KS50b0ZpeGVkKDQpfSBFT1NgO1xuICAgIGNvbnN0IG1lbW8gPSBgJHtyb2xsVW5kZXJ9I3BldGVyMSN1c2Vyc2VlZCMke2JldENsaWVudElkfWA7XG5cbiAgICBjb25zdCB0cnggPSBhd2FpdCB0aGlzLmVvc0NsaWVudC50cmFuc2ZlcihxdWFudGl0eSwgbWVtbyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc29sZS5sb2coYFRyYW5zYWN0aW9uIElEOiAke3RyeC50cmFuc2FjdGlvbl9pZH1gKTtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5yb2xsRGljZShiZXRDbGllbnRJZCkpO1xuICAgIHRoaXMuY29udHJhY3RPYnNlcnZlci5hZGRFdmVudCh7XG4gICAgICB0eXBlOiAnb25CZXRSZXN1bHQnLFxuICAgICAgYmV0Q2xpZW50SWQsXG4gICAgICBmbjogKGJldCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMucm9sbEZpbmlzaGVkKGJldCkpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgY29uc29sZS5sb2coJ1tvbkJldFJlc3VsdF0nLCBiZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgRW9zQ2xpZW50LmdldEluc3RhbmNlKCkudGhlbihhc3luYyAoZW9zQ2xpZW50KSA9PiB7XG4gICAgICB0aGlzLmVvc0NsaWVudCA9IGVvc0NsaWVudDtcbiAgICAgIGxldCBiZXRSZWNlaXB0cyA9IGF3YWl0IGVvc0NsaWVudC5nZXRMYXRlc3RCZXRSZWNlaXB0cygxMDApO1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZUJldEhpc3RvcnkoYmV0UmVjZWlwdHMpKTtcbiAgICAgIHRoaXMuY29udHJhY3RPYnNlcnZlciA9IG5ldyBDb250cmFjdE9ic2VydmVyKGVvc0NsaWVudCwgdGhpcy5wcm9wcy5kaXNwYXRjaCk7XG4gICAgICB0aGlzLmNvbnRyYWN0T2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9KTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGJldFN0YXR1cyA9IHNlbGVjdG9ycy5nZXRCZXRTdGF0dXModGhpcy5wcm9wcyk7XG4gICAgICBpZiAoYmV0U3RhdHVzLmlzUm9sbGluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sbGluZ051bWJlcjogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA5OSkgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIGJvYXJkVGV4dFRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgbGluZUhlaWdodDogJzU2cHgnLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkQ29pbkJ1dHRvbjoge1xuICAgICAgICB3aWR0aDogNzUsXG4gICAgICAgIGhlaWdodDogNDIsXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBjb2xvcnMueWVsbG93LFxuICAgICAgfSxcbiAgICAgIGNvaW5CdXR0b246IHtcbiAgICAgICAgd2lkdGg6IDc1LFxuICAgICAgICBoZWlnaHQ6IDQyLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogY29sb3JzLnllbGxvdyxcbiAgICAgIH0sXG4gICAgICBiZXRCdXR0b246IHtcbiAgICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGNvbG9ycy55ZWxsb3csXG4gICAgICB9LFxuICAgICAgaWNvbjoge1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIH0sXG4gICAgICBlb3NGcmFtZToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBoZWlnaHQ6IDM2LFxuICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtHcmV5MixcbiAgICAgICAgbWFyZ2luTGVmdDogMzYgKyA1LFxuICAgICAgfSxcbiAgICAgIGFkanVzdEJ1dHRvbnM6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtHcmV5MixcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgcm9sbFVuZGVyID0gc2VsZWN0b3JzLmdldFJvbGxVbmRlcih0aGlzLnByb3BzKTtcbiAgICBjb25zdCBiZXRBbW91bnQgPSBzZWxlY3RvcnMuZ2V0QmV0QW1vdW50KHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGJldFN0YXR1cyA9IHNlbGVjdG9ycy5nZXRCZXRTdGF0dXModGhpcy5wcm9wcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJhbGFuY2UgLz5cbiAgICAgICAgPENwdUFuZFJhbSAvPlxuXG4gICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxPZGRzSW5mbyBjdXJyZW50QmV0TnVtYmVyPXtyb2xsVW5kZXJ9IC8+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltZy9pY29uLWdhbWUtY29pbi5zdmdcIiBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICA8c3Bhbj7mipXms6jph5HpoY08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImZsb2F0XCI6ICdsZWZ0Jywgd2lkdGg6IDM2IH19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvdG9rZW4tZW9zLnN2Z1wiIHN0eWxlPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVvc0ZyYW1lfT5cbiAgICAgICAgICAgICAgPHNwYW4+RU9TPC9zcGFuPlxuICAgICAgICAgICAgICA8SW5wdXQgZGlzYWJsZVVuZGVybGluZT17dHJ1ZX0gdHlwZT1cIm51bWJlclwiIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19IHZhbHVlPXtiZXRBbW91bnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJldEFtb3VudENoYW5nZX1cbiAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJldEFtb3VudE9uQmx1cn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PEJ1dHRvbkJhc2Ugc3R5bGU9e3N0eWxlcy5hZGp1c3RCdXR0b25zfT4xLzI8L0J1dHRvbkJhc2U+PC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PEJ1dHRvbkJhc2Ugc3R5bGU9e3N0eWxlcy5hZGp1c3RCdXR0b25zfT4yeCA8L0J1dHRvbkJhc2U+PC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PEJ1dHRvbkJhc2Ugc3R5bGU9e3N0eWxlcy5hZGp1c3RCdXR0b25zfT5NSU48L0J1dHRvbkJhc2U+PC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PEJ1dHRvbkJhc2Ugc3R5bGU9e3N0eWxlcy5hZGp1c3RCdXR0b25zfT5NQVg8L0J1dHRvbkJhc2U+PC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxTbGlkZXIgbWluPXsyfSBtYXg9ezk2fSBzdGVwPXsxfVxuICAgICAgICAgICAgdmFsdWU9e3JvbGxVbmRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJvbGxVbmRlckNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltZy9pY29uLWdhbWUtY29pbi5zdmdcIiBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICA8c3Bhbj7otI/lvpfnjY7ph5E8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImZsb2F0XCI6ICdsZWZ0Jywgd2lkdGg6IDM2IH19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvdG9rZW4tZW9zLnN2Z1wiIHN0eWxlPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVvc0ZyYW1lfT5cbiAgICAgICAgICAgICAgPEVvc0Ftb3VudCBhbW91bnQ9e2JldEFtb3VudCAqIGdldFBheW91dChyb2xsVW5kZXIpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzBweCAxMHB4IDBweCAxMHB4JyB9fT5cbiAgICAgICAgICA8QnV0dG9uQmFzZSBzdHlsZT17c3R5bGVzLmJldEJ1dHRvbn0gb25DbGljaz17dGhpcy5oYW5kbGVCZXRCdXR0b259PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dHMuQnV0dG9uTGFyZ2V9PntiZXRTdGF0dXMuaXNSb2xsaW5nID8gdGhpcy5zdGF0ZS5yb2xsaW5nTnVtYmVyIDogJ+mWi+Wni+aKleazqCd9PC9kaXY+XG4gICAgICAgICAgPC9CdXR0b25CYXNlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8QmV0SGlzdG9yeSAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZGFya0dyZXkyfTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5EaWNlLnByb3BUeXBlcyA9IHtcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGljZTsiXX0= */\n/*@ sourceURL=/Users/ggm/Developer/tokamak-labs/baddice-webapp/src/pages/dice.js */"),
        dynamic: [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2],
        __self: this
      }));
    }
  }]);

  return Dice;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component)) || _class);
Dice.propTypes = {
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Dice);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dice")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=dice.js.4f07f7e508d021feaa04.hot-update.js.map
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



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      amount: 0.0000
    });

    return _this;
  }

  _createClass(Balance, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var eosClient = _libs_eos_client__WEBPACK_IMPORTED_MODULE_13__["default"].getInstance();
      eosClient.getMyBalance().then(function (result) {
        console.log(result);
      });
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
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-wallet.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EosAmount, {
        style: styles.eosAmount,
        amount: this.state.amount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
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
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        style: styles.gridItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.leftText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "CPU"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barFill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "fill")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.rightText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "67%")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        style: styles.gridItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.leftText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "RAM"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barFill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "fill")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.rightText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
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
      var Content = function Content(_ref) {
        var height = _ref.height,
            text1 = _ref.text1,
            text2 = _ref.text2;
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
            lineNumber: 172
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.wrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.text1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, text1), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.text2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
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
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 120,
        text1: currentBetNumber,
        text2: "小於該數獲勝",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 8,
        style: styles.middleSpacing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 69,
        text1: payOut,
        text2: "賠率",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 69,
        text1: winChance,
        text2: "中獎概率",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
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
var Dice = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref2) {
  var betAmount = _ref2.betAmount,
      rollUnder = _ref2.rollUnder,
      betStatus = _ref2.betStatus;
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

    var _this2;

    _classCallCheck(this, Dice);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Dice)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      rollingNumber: 50
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleRollUnderChange", function (event, value) {
      _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].updateRollUnder(value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleBetAmountChange", function (event) {
      var value = event.target.value;

      if (isNaN(value) === false && value >= 0) {
        _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].updateBetAmount(event.target.value));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "handleBetButton",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var rollUnder, betAmount, betClientId, quantity, memo, trx;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                rollUnder = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getRollUnder(_this2.props);
                betAmount = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getBetAmount(_this2.props);
                betClientId = uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()();
                quantity = "".concat(parseFloat(betAmount).toFixed(4), " EOS");
                memo = "".concat(rollUnder, "#peter1#userseed#").concat(betClientId);
                _context.next = 7;
                return _this2.eosClient.transfer(quantity, memo);

              case 7:
                trx = _context.sent;
                // eslint-disable-next-line
                console.log("Transaction ID: ".concat(trx.transaction_id));

                _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].rollDice(betClientId));

                _this2.contractObserver.addEvent({
                  type: 'onBetResult',
                  betClientId: betClientId,
                  fn: function fn(bet) {
                    _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].rollFinished(bet)); // eslint-disable-next-line


                    console.log('[onBetResult]', bet);
                  }
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    return _this2;
  }

  _createClass(Dice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.eosClient = _libs_eos_client__WEBPACK_IMPORTED_MODULE_13__["default"].getInstance();
      this.eosClient.init().then(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var betReceipts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.eosClient.getLatestBetReceipts(100);

              case 2:
                betReceipts = _context2.sent;

                _this3.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].updateBetHistory(betReceipts));

                _this3.contractObserver = new _libs_contract_observer__WEBPACK_IMPORTED_MODULE_10__["default"](_this3.eosClient, _this3.props.dispatch);

                _this3.contractObserver.start();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })));
      setInterval(function () {
        var betStatus = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getBetStatus(_this3.props);

        if (betStatus.isRolling) {
          _this3.setState({
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
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Balance, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CpuAndRam, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OddsInfo, {
        currentBetNumber: rollUnder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-coin.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, "\u6295\u6CE8\u91D1\u984D")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
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
          lineNumber: 336
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/token-eos.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.eosFrame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        disableUnderline: true,
        type: "number",
        inputProps: {
          style: {
            color: '#ffffff',
            fontSize: 16,
            backgroundColor: 'transparent',
            border: 0
          }
        },
        value: parseFloat(betAmount).toFixed(2),
        onChange: this.handleBetAmountChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, "1/2")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "2x ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "MIN")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, "MAX"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
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
          lineNumber: 360
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-coin.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "\u8D0F\u5F97\u734E\u91D1")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
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
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/token-eos.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.eosFrame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EosAmount, {
        amount: betAmount * getPayout(rollUnder),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          margin: '0px 10px 0px 10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.betButton,
        onClick: this.handleBetButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: _libs_styleguide_texts__WEBPACK_IMPORTED_MODULE_12__["default"].ButtonLarge,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, betStatus.isRolling ? this.state.rollingNumber : '開始投注'))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_bet_history__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "986249378",
        css: "body{width:100%;height:1000px;background-color:".concat(_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2, ";font-family:Roboto,Helvetica,Arial,sans-serif;margin:0px;overflow-x:hidden;color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ20vRGV2ZWxvcGVyL3Rva2FtYWstbGFicy9iYWRkaWNlLXdlYmFwcC9zcmMvcGFnZXMvZGljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3WTJCLEFBR3dCLFdBQ0csY0FDZ0MsOENBQ0csOENBQ3RDLFdBQ08sa0JBQ0osY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2dnbS9EZXZlbG9wZXIvdG9rYW1hay1sYWJzL2JhZGRpY2Utd2ViYXBwL3NyYy9wYWdlcy9kaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCdXR0b25CYXNlLCBHcmlkLCBJbnB1dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9TbGlkZXInO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQmV0SGlzdG9yeSBmcm9tICcuLi9jb21wb25lbnRzL2JldC1oaXN0b3J5JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlLWNvbnRhaW5lcic7XG5pbXBvcnQgQ29udHJhY3RPYnNlcnZlciBmcm9tICcuLi9saWJzL2NvbnRyYWN0LW9ic2VydmVyJztcblxuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2xpYnMvc3R5bGVndWlkZS9jb2xvcnMnO1xuaW1wb3J0IHRleHRzIGZyb20gJy4uL2xpYnMvc3R5bGVndWlkZS90ZXh0cyc7XG5pbXBvcnQgRW9zQ2xpZW50IGZyb20gJy4uL2xpYnMvZW9zLWNsaWVudCc7XG5cbmltcG9ydCB7IGFjdGlvbnMsIHNlbGVjdG9ycyB9IGZyb20gJy4uL3JlZHV4JztcblxuY29uc3QgZ2V0UGF5b3V0ID0gKGN1cnJlbnRCZXROdW1iZXIpID0+IHtcbiAgY29uc3QgZXhwZWN0ZWRWYWx1ZSA9IDk4LjQ2O1xuICByZXR1cm4gKGV4cGVjdGVkVmFsdWUgLyAoY3VycmVudEJldE51bWJlciAtIDEpKS50b0ZpeGVkKDIpO1xufTtcblxuZnVuY3Rpb24gRW9zQW1vdW50KHByb3BzKSB7XG4gIGNvbnN0IHsgYW1vdW50ID0gMC4wMDAwLCBzdHlsZSA9IHt9IH0gPSBwcm9wcztcblxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgcm9vdDogT2JqZWN0LmFzc2lnbih7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnLFxuICAgICAgYmFja2dyb3VuZDogY29sb3JzLmRhcmtHcmV5MixcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9LCBzdHlsZSlcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIHN0eWxlPXtzdHlsZXMucm9vdH0+XG4gICAgICA8c3Bhbj5FT1M8L3NwYW4+XG4gICAgICA8c3Bhbj57YW1vdW50LnRvRml4ZWQoNCl9PC9zcGFuPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5Fb3NBbW91bnQucHJvcFR5cGVzID0ge1xuICBhbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuY2xhc3MgQmFsYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFtb3VudDogMC4wMDAwXG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IGVvc0NsaWVudCA9IEVvc0NsaWVudC5nZXRJbnN0YW5jZSgpO1xuICAgIGVvc0NsaWVudC5nZXRNeUJhbGFuY2UoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICB9LFxuICAgICAgZW9zQW1vdW50OiB7XG4gICAgICAgIGZsZXhCYXNpczogJ2F1dG8nLFxuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1nL2ljb24tZ2FtZS13YWxsZXQuc3ZnXCIgLz5cbiAgICAgICAgPEVvc0Ftb3VudCBzdHlsZT17c3R5bGVzLmVvc0Ftb3VudH0gYW1vdW50PXt0aGlzLnN0YXRlLmFtb3VudH0vPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmNsYXNzIENwdUFuZFJhbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBncmlkSXRlbToge1xuICAgICAgICBoZWlnaHQ6IDM0LFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgfSxcbiAgICAgIGJhcldyYXA6IHtcbiAgICAgICAgZmxleEJhc2lzOiAnYXV0bycsXG4gICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICBsaW5lSGVpZ2h0OiA5LFxuICAgICAgICBoZWlnaHQ6IDksXG4gICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxuICAgICAgICBtYXJnaW46ICcwcHggNXB4IDBweCA1cHgnXG4gICAgICB9LFxuICAgICAgYmFyRmlsbDoge1xuICAgICAgICB3aWR0aDogJzUwJScsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDksXG4gICAgICAgIGhlaWdodDogOSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDk2ZmYsICM0MmU4ZGYpJyxcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgIH0sXG4gICAgICBsZWZ0VGV4dDoge1xuICAgICAgICBtYXJnaW5MZWZ0OiA1LFxuICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIH0sXG4gICAgICByaWdodFRleHQ6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgICAgIHdpZHRoOiAzNCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIGhlaWdodD17MzR9PlxuICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc3R5bGU9e3N0eWxlcy5ncmlkSXRlbX0gPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmxlZnRUZXh0fT5DUFU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5iYXJXcmFwfT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJhckZpbGx9PmZpbGw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJpZ2h0VGV4dH0+NjclPC9kaXY+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHN0eWxlPXtzdHlsZXMuZ3JpZEl0ZW19ID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5sZWZ0VGV4dH0+UkFNPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYmFyV3JhcH0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5iYXJGaWxsfT5maWxsPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5yaWdodFRleHR9PjY3JTwvZGl2PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmNsYXNzIE9kZHNJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IENvbnRlbnQgPSAoeyBoZWlnaHQsIHRleHQxLCB0ZXh0MiB9KSA9PiB7XG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9ycy5kYXJrR3JleTIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICB9LFxuICAgICAgICB3cmFwcGVyOiB7XG4gICAgICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQxOiB7XG4gICAgICAgICAgZm9udFNpemU6IDI4LFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICBoZWlnaHQ6IDI4LFxuICAgICAgICAgIGNvbG9yOiBjb2xvcnMuY2xlYXJCbHVlLFxuICAgICAgICB9LFxuICAgICAgICB0ZXh0Mjoge1xuICAgICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICBtYXJnaW5Ub3A6IDQsXG4gICAgICAgICAgY29sb3I6ICcjZDJkMmQyJyxcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJvb3R9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50ZXh0MX0+e3RleHQxfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRleHQyfT57dGV4dDJ9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBjdXJyZW50QmV0TnVtYmVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHdpbkNoYW5jZSA9IGAke2N1cnJlbnRCZXROdW1iZXIgLSAxfSVgO1xuICAgIGNvbnN0IHBheU91dCA9IGdldFBheW91dChjdXJyZW50QmV0TnVtYmVyKTtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIG1pZGRsZVNwYWNpbmc6IHsgbWFyZ2luVG9wOiA1IH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxDb250ZW50IGhlaWdodD17MTIwfSB0ZXh0MT17Y3VycmVudEJldE51bWJlcn0gdGV4dDI9e1wi5bCP5pa86Kmy5pW4542y5YudXCJ9IC8+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fSBzdHlsZT17c3R5bGVzLm1pZGRsZVNwYWNpbmd9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgPENvbnRlbnQgaGVpZ2h0PXs2OX0gdGV4dDE9e3BheU91dH0gdGV4dDI9e1wi6LOg546HXCJ9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICAgICAgPENvbnRlbnQgaGVpZ2h0PXs2OX0gdGV4dDE9e3dpbkNoYW5jZX0gdGV4dDI9e1wi5Lit542O5qaC546HXCJ9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lciA+XG4gICAgKTtcbiAgfVxufVxuT2Rkc0luZm8ucHJvcFR5cGVzID0ge1xuICBjdXJyZW50QmV0TnVtYmVyOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5AY29ubmVjdCgoeyBiZXRBbW91bnQsIHJvbGxVbmRlciwgYmV0U3RhdHVzIH0pID0+ICh7IGJldEFtb3VudCwgcm9sbFVuZGVyLCBiZXRTdGF0dXMgfSkpXG5jbGFzcyBEaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcm9sbGluZ051bWJlcjogNTAsXG4gIH1cblxuICBoYW5kbGVSb2xsVW5kZXJDaGFuZ2UgPSAoZXZlbnQsIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZVJvbGxVbmRlcih2YWx1ZSkpO1xuICB9XG5cbiAgaGFuZGxlQmV0QW1vdW50Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChpc05hTih2YWx1ZSkgPT09IGZhbHNlICYmIHZhbHVlID49IDApIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVCZXRBbW91bnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGhhbmRsZUJldEJ1dHRvbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJvbGxVbmRlciA9IHNlbGVjdG9ycy5nZXRSb2xsVW5kZXIodGhpcy5wcm9wcyk7XG4gICAgY29uc3QgYmV0QW1vdW50ID0gc2VsZWN0b3JzLmdldEJldEFtb3VudCh0aGlzLnByb3BzKTtcblxuICAgIGNvbnN0IGJldENsaWVudElkID0gdXVpZCgpO1xuICAgIGNvbnN0IHF1YW50aXR5ID0gYCR7cGFyc2VGbG9hdChiZXRBbW91bnQpLnRvRml4ZWQoNCl9IEVPU2A7XG4gICAgY29uc3QgbWVtbyA9IGAke3JvbGxVbmRlcn0jcGV0ZXIxI3VzZXJzZWVkIyR7YmV0Q2xpZW50SWR9YDtcblxuICAgIGNvbnN0IHRyeCA9IGF3YWl0IHRoaXMuZW9zQ2xpZW50LnRyYW5zZmVyKHF1YW50aXR5LCBtZW1vKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zb2xlLmxvZyhgVHJhbnNhY3Rpb24gSUQ6ICR7dHJ4LnRyYW5zYWN0aW9uX2lkfWApO1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLnJvbGxEaWNlKGJldENsaWVudElkKSk7XG4gICAgdGhpcy5jb250cmFjdE9ic2VydmVyLmFkZEV2ZW50KHtcbiAgICAgIHR5cGU6ICdvbkJldFJlc3VsdCcsXG4gICAgICBiZXRDbGllbnRJZCxcbiAgICAgIGZuOiAoYmV0KSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5yb2xsRmluaXNoZWQoYmV0KSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBjb25zb2xlLmxvZygnW29uQmV0UmVzdWx0XScsIGJldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmVvc0NsaWVudCA9IEVvc0NsaWVudC5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMuZW9zQ2xpZW50LmluaXQoKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBiZXRSZWNlaXB0cyA9IGF3YWl0IHRoaXMuZW9zQ2xpZW50LmdldExhdGVzdEJldFJlY2VpcHRzKDEwMCk7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlQmV0SGlzdG9yeShiZXRSZWNlaXB0cykpO1xuICAgICAgdGhpcy5jb250cmFjdE9ic2VydmVyID0gbmV3IENvbnRyYWN0T2JzZXJ2ZXIodGhpcy5lb3NDbGllbnQsIHRoaXMucHJvcHMuZGlzcGF0Y2gpO1xuICAgICAgdGhpcy5jb250cmFjdE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgfSk7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBiZXRTdGF0dXMgPSBzZWxlY3RvcnMuZ2V0QmV0U3RhdHVzKHRoaXMucHJvcHMpO1xuICAgICAgaWYgKGJldFN0YXR1cy5pc1JvbGxpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGxpbmdOdW1iZXI6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogOTkpIH0pO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBib2FyZFRleHRUaXRsZToge1xuICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc1NnB4JyxcbiAgICAgIH0sXG4gICAgICBzZWxlY3RlZENvaW5CdXR0b246IHtcbiAgICAgICAgd2lkdGg6IDc1LFxuICAgICAgICBoZWlnaHQ6IDQyLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogY29sb3JzLnllbGxvdyxcbiAgICAgIH0sXG4gICAgICBjb2luQnV0dG9uOiB7XG4gICAgICAgIHdpZHRoOiA3NSxcbiAgICAgICAgaGVpZ2h0OiA0MixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGNvbG9ycy55ZWxsb3csXG4gICAgICB9LFxuICAgICAgYmV0QnV0dG9uOiB7XG4gICAgICAgIGhlaWdodDogNDgsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBjb2xvcnMueWVsbG93LFxuICAgICAgfSxcbiAgICAgIGljb246IHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICB9LFxuICAgICAgZW9zRnJhbWU6IHtcbiAgICAgICAgaGVpZ2h0OiAzNixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5kYXJrR3JleTIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IDM2ICsgNSxcbiAgICAgIH0sXG4gICAgICBhZGp1c3RCdXR0b25zOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5kYXJrR3JleTIsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJvbGxVbmRlciA9IHNlbGVjdG9ycy5nZXRSb2xsVW5kZXIodGhpcy5wcm9wcyk7XG4gICAgY29uc3QgYmV0QW1vdW50ID0gc2VsZWN0b3JzLmdldEJldEFtb3VudCh0aGlzLnByb3BzKTtcbiAgICBjb25zdCBiZXRTdGF0dXMgPSBzZWxlY3RvcnMuZ2V0QmV0U3RhdHVzKHRoaXMucHJvcHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCYWxhbmNlIC8+XG4gICAgICAgIDxDcHVBbmRSYW0gLz5cblxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8T2Rkc0luZm8gY3VycmVudEJldE51bWJlcj17cm9sbFVuZGVyfSAvPlxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvaWNvbi1nYW1lLWNvaW4uc3ZnXCIgc3R5bGU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICAgICAgPHNwYW4+5oqV5rOo6YeR6aGNPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJmbG9hdFwiOiAnbGVmdCcsIHdpZHRoOiAzNiB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1nL3Rva2VuLWVvcy5zdmdcIiBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5lb3NGcmFtZX0+XG4gICAgICAgICAgICAgIDxJbnB1dCBkaXNhYmxlVW5kZXJsaW5lPXt0cnVlfSB0eXBlPVwibnVtYmVyXCIgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX0gdmFsdWU9e3BhcnNlRmxvYXQoYmV0QW1vdW50KS50b0ZpeGVkKDIpfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVCZXRBbW91bnRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fT5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjxCdXR0b25CYXNlIHN0eWxlPXtzdHlsZXMuYWRqdXN0QnV0dG9uc30+MS8yPC9CdXR0b25CYXNlPjwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjxCdXR0b25CYXNlIHN0eWxlPXtzdHlsZXMuYWRqdXN0QnV0dG9uc30+MnggPC9CdXR0b25CYXNlPjwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjxCdXR0b25CYXNlIHN0eWxlPXtzdHlsZXMuYWRqdXN0QnV0dG9uc30+TUlOPC9CdXR0b25CYXNlPjwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjxCdXR0b25CYXNlIHN0eWxlPXtzdHlsZXMuYWRqdXN0QnV0dG9uc30+TUFYPC9CdXR0b25CYXNlPjwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8U2xpZGVyIG1pbj17Mn0gbWF4PXs5Nn0gc3RlcD17MX1cbiAgICAgICAgICAgIHZhbHVlPXtyb2xsVW5kZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVSb2xsVW5kZXJDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvaWNvbi1nYW1lLWNvaW4uc3ZnXCIgc3R5bGU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICAgICAgPHNwYW4+6LSP5b6X542O6YeRPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJmbG9hdFwiOiAnbGVmdCcsIHdpZHRoOiAzNiB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1nL3Rva2VuLWVvcy5zdmdcIiBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5lb3NGcmFtZX0+XG4gICAgICAgICAgICAgIDxFb3NBbW91bnQgYW1vdW50PXtiZXRBbW91bnQgKiBnZXRQYXlvdXQocm9sbFVuZGVyKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzBweCAxMHB4IDBweCAxMHB4JyB9fT5cbiAgICAgICAgICA8QnV0dG9uQmFzZSBzdHlsZT17c3R5bGVzLmJldEJ1dHRvbn0gb25DbGljaz17dGhpcy5oYW5kbGVCZXRCdXR0b259PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dHMuQnV0dG9uTGFyZ2V9PntiZXRTdGF0dXMuaXNSb2xsaW5nID8gdGhpcy5zdGF0ZS5yb2xsaW5nTnVtYmVyIDogJ+mWi+Wni+aKleazqCd9PC9kaXY+XG4gICAgICAgICAgPC9CdXR0b25CYXNlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8QmV0SGlzdG9yeSAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZGFya0dyZXkyfTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5EaWNlLnByb3BUeXBlcyA9IHtcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGljZTsiXX0= */\n/*@ sourceURL=/Users/ggm/Developer/tokamak-labs/baddice-webapp/src/pages/dice.js */"),
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
//# sourceMappingURL=dice.js.1355b8666d2de00e3f26.hot-update.js.map
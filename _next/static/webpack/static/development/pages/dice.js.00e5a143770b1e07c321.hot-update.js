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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















var getPayout = function getPayout(currentBetNumber) {
  var expectedValue = 98.46;
  return (expectedValue / (currentBetNumber - 1)).toFixed(2);
};

function EosAmount(props) {
  var amount = props.amount;
  var styles = {
    root: {
      display: 'flex',
      flexDirection: 'row-reverse',
      background: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2,
      flexBasis: 'auto',
      flexGrow: 1,
      margin: 0
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "EOS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "0.00"));
}

var Balance =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Balance, _React$Component);

  function Balance() {
    _classCallCheck(this, Balance);

    return _possibleConstructorReturn(this, _getPrototypeOf(Balance).apply(this, arguments));
  }

  _createClass(Balance, [{
    key: "render",
    value: function render() {
      var styles = {
        container: {
          display: 'flex',
          alignItems: 'center'
        },
        innerContainer: {
          display: 'flex',
          flexDirection: 'row-reverse',
          background: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2,
          flexBasis: 'auto',
          flexGrow: 1,
          margin: 0
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-wallet.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: styles.innerContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "EOS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "0.00")));
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
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        style: styles.gridItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.leftText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "CPU"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barFill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "fill")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.rightText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "67%")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        style: styles.gridItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.leftText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "RAM"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barFill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "fill")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.rightText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
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
            lineNumber: 168
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.wrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.text1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, text1), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.text2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
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
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 120,
        text1: currentBetNumber,
        text2: "小於該數獲勝",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 8,
        style: styles.middleSpacing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 69,
        text1: payOut,
        text2: "賠率",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 69,
        text1: winChance,
        text2: "中獎概率",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
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
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dice);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dice)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      rollingNumber: 50
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRollUnderChange", function (event, value) {
      _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].updateRollUnder(value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBetAmountChange", function (event) {
      var value = event.target.value;

      if (isNaN(value) === false && value >= 0) {
        _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].updateBetAmount(event.target.value));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBetButton",
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
                rollUnder = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getRollUnder(_this.props);
                betAmount = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getBetAmount(_this.props);
                betClientId = uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()();
                quantity = "".concat(parseFloat(betAmount).toFixed(4), " EOS");
                memo = "".concat(rollUnder, "#peter1#userseed#").concat(betClientId);
                _context.next = 7;
                return _this.eosClient.transfer(quantity, memo);

              case 7:
                trx = _context.sent;
                // eslint-disable-next-line
                console.log("Transaction ID: ".concat(trx.transaction_id));

                _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].rollDice(betClientId));

                _this.contractObserver.addEvent({
                  type: 'onBetResult',
                  betClientId: betClientId,
                  fn: function fn(bet) {
                    _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].rollFinished(bet)); // eslint-disable-next-line


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

    return _this;
  }

  _createClass(Dice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.eosClient = new _libs_eos_client__WEBPACK_IMPORTED_MODULE_13__["default"]();
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
                return _this2.eosClient.getLatestBetReceipts(100);

              case 2:
                betReceipts = _context2.sent;

                _this2.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_14__["actions"].updateBetHistory(betReceipts));

                _this2.contractObserver = new _libs_contract_observer__WEBPACK_IMPORTED_MODULE_10__["default"](_this2.eosClient, _this2.props.dispatch);

                _this2.contractObserver.start();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })));
      setInterval(function () {
        var betStatus = _redux__WEBPACK_IMPORTED_MODULE_14__["selectors"].getBetStatus(_this2.props);

        if (betStatus.isRolling) {
          _this2.setState({
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
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Balance, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CpuAndRam, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OddsInfo, {
        currentBetNumber: rollUnder,
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
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-coin.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, "\u6295\u6CE8\u91D1\u984D")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
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
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/token-eos.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.eosFrame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
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
          lineNumber: 336
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "1/2")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, "2x ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "MIN")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "MAX"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
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
          lineNumber: 356
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-coin.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "\u8D0F\u5F97\u734E\u91D1")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
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
          lineNumber: 369
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/token-eos.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.eosFrame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        disableUnderline: true,
        inputProps: {
          style: {
            color: '#ffffff',
            fontSize: 16,
            backgroundColor: 'transparent',
            border: 0
          }
        },
        value: betAmount * getPayout(rollUnder),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          margin: '0px 10px 0px 10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.betButton,
        onClick: this.handleBetButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: _libs_styleguide_texts__WEBPACK_IMPORTED_MODULE_12__["default"].ButtonLarge,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, betStatus.isRolling ? this.state.rollingNumber : '開始投注'))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_bet_history__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "986249378",
        css: "body{width:100%;height:1000px;background-color:".concat(_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2, ";font-family:Roboto,Helvetica,Arial,sans-serif;margin:0px;overflow-x:hidden;color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ20vRGV2ZWxvcGVyL3Rva2FtYWstbGFicy9iYWRkaWNlLXdlYmFwcC9zcmMvcGFnZXMvZGljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyWTJCLEFBR3dCLFdBQ0csY0FDZ0MsOENBQ0csOENBQ3RDLFdBQ08sa0JBQ0osY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2dnbS9EZXZlbG9wZXIvdG9rYW1hay1sYWJzL2JhZGRpY2Utd2ViYXBwL3NyYy9wYWdlcy9kaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCdXR0b25CYXNlLCBHcmlkLCBJbnB1dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9TbGlkZXInO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQmV0SGlzdG9yeSBmcm9tICcuLi9jb21wb25lbnRzL2JldC1oaXN0b3J5JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlLWNvbnRhaW5lcic7XG5pbXBvcnQgQ29udHJhY3RPYnNlcnZlciBmcm9tICcuLi9saWJzL2NvbnRyYWN0LW9ic2VydmVyJztcblxuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2xpYnMvc3R5bGVndWlkZS9jb2xvcnMnO1xuaW1wb3J0IHRleHRzIGZyb20gJy4uL2xpYnMvc3R5bGVndWlkZS90ZXh0cyc7XG5pbXBvcnQgRW9zQ2xpZW50IGZyb20gJy4uL2xpYnMvZW9zLWNsaWVudCc7XG5cbmltcG9ydCB7IGFjdGlvbnMsIHNlbGVjdG9ycyB9IGZyb20gJy4uL3JlZHV4JztcblxuY29uc3QgZ2V0UGF5b3V0ID0gKGN1cnJlbnRCZXROdW1iZXIpID0+IHtcbiAgY29uc3QgZXhwZWN0ZWRWYWx1ZSA9IDk4LjQ2O1xuICByZXR1cm4gKGV4cGVjdGVkVmFsdWUgLyAoY3VycmVudEJldE51bWJlciAtIDEpKS50b0ZpeGVkKDIpO1xufTtcblxuZnVuY3Rpb24gRW9zQW1vdW50KHByb3BzKSB7XG4gIGNvbnN0IHsgYW1vdW50IH0gPSBwcm9wcztcblxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJyxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9ycy5kYXJrR3JleTIsXG4gICAgICBmbGV4QmFzaXM6ICdhdXRvJyxcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIHN0eWxlPXtzdHlsZXMucm9vdH0+XG4gICAgICA8c3Bhbj5FT1M8L3NwYW4+XG4gICAgICA8c3Bhbj4wLjAwPC9zcGFuPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xuXG59XG5cbmNsYXNzIEJhbGFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICB9LFxuICAgICAgaW5uZXJDb250YWluZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuZGFya0dyZXkyLFxuICAgICAgICBmbGV4QmFzaXM6ICdhdXRvJyxcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1nL2ljb24tZ2FtZS13YWxsZXQuc3ZnXCIgLz5cbiAgICAgICAgPENvbnRhaW5lciBzdHlsZT17c3R5bGVzLmlubmVyQ29udGFpbmVyfT5cbiAgICAgICAgICA8c3Bhbj5FT1M8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+MC4wMDwvc3Bhbj5cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cblxufVxuXG5jbGFzcyBDcHVBbmRSYW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgZ3JpZEl0ZW06IHtcbiAgICAgICAgaGVpZ2h0OiAzNCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIH0sXG4gICAgICBiYXJXcmFwOiB7XG4gICAgICAgIGZsZXhCYXNpczogJ2F1dG8nLFxuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgbGluZUhlaWdodDogOSxcbiAgICAgICAgaGVpZ2h0OiA5LFxuICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcbiAgICAgICAgbWFyZ2luOiAnMHB4IDVweCAwcHggNXB4J1xuICAgICAgfSxcbiAgICAgIGJhckZpbGw6IHtcbiAgICAgICAgd2lkdGg6ICc1MCUnLFxuICAgICAgICBsaW5lSGVpZ2h0OiA5LFxuICAgICAgICBoZWlnaHQ6IDksXG4gICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA5NmZmLCAjNDJlOGRmKScsXG4gICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICB9LFxuICAgICAgbGVmdFRleHQ6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogNSxcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICB9LFxuICAgICAgcmlnaHRUZXh0OiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICB3aWR0aDogMzQsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBoZWlnaHQ9ezM0fT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHN0eWxlPXtzdHlsZXMuZ3JpZEl0ZW19ID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5sZWZ0VGV4dH0+Q1BVPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYmFyV3JhcH0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5iYXJGaWxsfT5maWxsPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5yaWdodFRleHR9PjY3JTwvZGl2PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzdHlsZT17c3R5bGVzLmdyaWRJdGVtfSA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubGVmdFRleHR9PlJBTTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJhcldyYXB9PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYmFyRmlsbH0+ZmlsbDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucmlnaHRUZXh0fT42NyU8L2Rpdj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cblxufVxuXG5jbGFzcyBPZGRzSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBDb250ZW50ID0gKHsgaGVpZ2h0LCB0ZXh0MSwgdGV4dDIgfSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgIGRpc3BsYXk6ICd0YWJsZScsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuZGFya0dyZXkyLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgfSxcbiAgICAgICAgd3JhcHBlcjoge1xuICAgICAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICB9LFxuICAgICAgICB0ZXh0MToge1xuICAgICAgICAgIGZvbnRTaXplOiAyOCxcbiAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgaGVpZ2h0OiAyOCxcbiAgICAgICAgICBjb2xvcjogY29sb3JzLmNsZWFyQmx1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDI6IHtcbiAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgbWFyZ2luVG9wOiA0LFxuICAgICAgICAgIGNvbG9yOiAnI2QyZDJkMicsXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5yb290fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGV4dDF9Pnt0ZXh0MX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50ZXh0Mn0+e3RleHQyfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHsgY3VycmVudEJldE51bWJlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB3aW5DaGFuY2UgPSBgJHtjdXJyZW50QmV0TnVtYmVyIC0gMX0lYDtcbiAgICBjb25zdCBwYXlPdXQgPSBnZXRQYXlvdXQoY3VycmVudEJldE51bWJlcik7XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBtaWRkbGVTcGFjaW5nOiB7IG1hcmdpblRvcDogNSB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Q29udGVudCBoZWlnaHQ9ezEyMH0gdGV4dDE9e2N1cnJlbnRCZXROdW1iZXJ9IHRleHQyPXtcIuWwj+aWvOipsuaVuOeNsuWLnVwifSAvPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17OH0gc3R5bGU9e3N0eWxlcy5taWRkbGVTcGFjaW5nfT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgIDxDb250ZW50IGhlaWdodD17Njl9IHRleHQxPXtwYXlPdXR9IHRleHQyPXtcIuizoOeOh1wifSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgIDxDb250ZW50IGhlaWdodD17Njl9IHRleHQxPXt3aW5DaGFuY2V9IHRleHQyPXtcIuS4reeNjuamgueOh1wifSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXIgPlxuICAgICk7XG4gIH1cbn1cbk9kZHNJbmZvLnByb3BUeXBlcyA9IHtcbiAgY3VycmVudEJldE51bWJlcjogUHJvcFR5cGVzLm51bWJlclxufTtcblxuQGNvbm5lY3QoKHsgYmV0QW1vdW50LCByb2xsVW5kZXIsIGJldFN0YXR1cyB9KSA9PiAoeyBiZXRBbW91bnQsIHJvbGxVbmRlciwgYmV0U3RhdHVzIH0pKVxuY2xhc3MgRGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHJvbGxpbmdOdW1iZXI6IDUwLFxuICB9XG5cbiAgaGFuZGxlUm9sbFVuZGVyQ2hhbmdlID0gKGV2ZW50LCB2YWx1ZSkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVSb2xsVW5kZXIodmFsdWUpKTtcbiAgfVxuXG4gIGhhbmRsZUJldEFtb3VudENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaXNOYU4odmFsdWUpID09PSBmYWxzZSAmJiB2YWx1ZSA+PSAwKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlQmV0QW1vdW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBoYW5kbGVCZXRCdXR0b24gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByb2xsVW5kZXIgPSBzZWxlY3RvcnMuZ2V0Um9sbFVuZGVyKHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGJldEFtb3VudCA9IHNlbGVjdG9ycy5nZXRCZXRBbW91bnQodGhpcy5wcm9wcyk7XG5cbiAgICBjb25zdCBiZXRDbGllbnRJZCA9IHV1aWQoKTtcbiAgICBjb25zdCBxdWFudGl0eSA9IGAke3BhcnNlRmxvYXQoYmV0QW1vdW50KS50b0ZpeGVkKDQpfSBFT1NgO1xuICAgIGNvbnN0IG1lbW8gPSBgJHtyb2xsVW5kZXJ9I3BldGVyMSN1c2Vyc2VlZCMke2JldENsaWVudElkfWA7XG5cbiAgICBjb25zdCB0cnggPSBhd2FpdCB0aGlzLmVvc0NsaWVudC50cmFuc2ZlcihxdWFudGl0eSwgbWVtbyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc29sZS5sb2coYFRyYW5zYWN0aW9uIElEOiAke3RyeC50cmFuc2FjdGlvbl9pZH1gKTtcblxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5yb2xsRGljZShiZXRDbGllbnRJZCkpO1xuICAgIHRoaXMuY29udHJhY3RPYnNlcnZlci5hZGRFdmVudCh7XG4gICAgICB0eXBlOiAnb25CZXRSZXN1bHQnLFxuICAgICAgYmV0Q2xpZW50SWQsXG4gICAgICBmbjogKGJldCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMucm9sbEZpbmlzaGVkKGJldCkpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgY29uc29sZS5sb2coJ1tvbkJldFJlc3VsdF0nLCBiZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5lb3NDbGllbnQgPSBuZXcgRW9zQ2xpZW50KCk7XG4gICAgdGhpcy5lb3NDbGllbnQuaW5pdCgpLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IGJldFJlY2VpcHRzID0gYXdhaXQgdGhpcy5lb3NDbGllbnQuZ2V0TGF0ZXN0QmV0UmVjZWlwdHMoMTAwKTtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVCZXRIaXN0b3J5KGJldFJlY2VpcHRzKSk7XG4gICAgICB0aGlzLmNvbnRyYWN0T2JzZXJ2ZXIgPSBuZXcgQ29udHJhY3RPYnNlcnZlcih0aGlzLmVvc0NsaWVudCwgdGhpcy5wcm9wcy5kaXNwYXRjaCk7XG4gICAgICB0aGlzLmNvbnRyYWN0T2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9KTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGJldFN0YXR1cyA9IHNlbGVjdG9ycy5nZXRCZXRTdGF0dXModGhpcy5wcm9wcyk7XG4gICAgICBpZiAoYmV0U3RhdHVzLmlzUm9sbGluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sbGluZ051bWJlcjogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA5OSkgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIGJvYXJkVGV4dFRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgbGluZUhlaWdodDogJzU2cHgnLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkQ29pbkJ1dHRvbjoge1xuICAgICAgICB3aWR0aDogNzUsXG4gICAgICAgIGhlaWdodDogNDIsXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBjb2xvcnMueWVsbG93LFxuICAgICAgfSxcbiAgICAgIGNvaW5CdXR0b246IHtcbiAgICAgICAgd2lkdGg6IDc1LFxuICAgICAgICBoZWlnaHQ6IDQyLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogY29sb3JzLnllbGxvdyxcbiAgICAgIH0sXG4gICAgICBiZXRCdXR0b246IHtcbiAgICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGNvbG9ycy55ZWxsb3csXG4gICAgICB9LFxuICAgICAgaWNvbjoge1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIH0sXG4gICAgICBlb3NGcmFtZToge1xuICAgICAgICBoZWlnaHQ6IDM2LFxuICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtHcmV5MixcbiAgICAgICAgbWFyZ2luTGVmdDogMzYgKyA1LFxuICAgICAgfSxcbiAgICAgIGFkanVzdEJ1dHRvbnM6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhcmtHcmV5MixcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgcm9sbFVuZGVyID0gc2VsZWN0b3JzLmdldFJvbGxVbmRlcih0aGlzLnByb3BzKTtcbiAgICBjb25zdCBiZXRBbW91bnQgPSBzZWxlY3RvcnMuZ2V0QmV0QW1vdW50KHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGJldFN0YXR1cyA9IHNlbGVjdG9ycy5nZXRCZXRTdGF0dXModGhpcy5wcm9wcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJhbGFuY2UgLz5cbiAgICAgICAgPENwdUFuZFJhbSAvPlxuXG4gICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxPZGRzSW5mbyBjdXJyZW50QmV0TnVtYmVyPXtyb2xsVW5kZXJ9IC8+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltZy9pY29uLWdhbWUtY29pbi5zdmdcIiBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICA8c3Bhbj7mipXms6jph5HpoY08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImZsb2F0XCI6ICdsZWZ0Jywgd2lkdGg6IDM2IH19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvdG9rZW4tZW9zLnN2Z1wiIHN0eWxlPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVvc0ZyYW1lfT5cbiAgICAgICAgICAgICAgPElucHV0IGRpc2FibGVVbmRlcmxpbmU9e3RydWV9IHR5cGU9XCJudW1iZXJcIiBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fSB2YWx1ZT17cGFyc2VGbG9hdChiZXRBbW91bnQpLnRvRml4ZWQoMil9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJldEFtb3VudENoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PEJ1dHRvbkJhc2Ugc3R5bGU9e3N0eWxlcy5hZGp1c3RCdXR0b25zfT4xLzI8L0J1dHRvbkJhc2U+PC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PEJ1dHRvbkJhc2Ugc3R5bGU9e3N0eWxlcy5hZGp1c3RCdXR0b25zfT4yeCA8L0J1dHRvbkJhc2U+PC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PEJ1dHRvbkJhc2Ugc3R5bGU9e3N0eWxlcy5hZGp1c3RCdXR0b25zfT5NSU48L0J1dHRvbkJhc2U+PC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PEJ1dHRvbkJhc2Ugc3R5bGU9e3N0eWxlcy5hZGp1c3RCdXR0b25zfT5NQVg8L0J1dHRvbkJhc2U+PC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxTbGlkZXIgbWluPXsyfSBtYXg9ezk2fSBzdGVwPXsxfVxuICAgICAgICAgICAgdmFsdWU9e3JvbGxVbmRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJvbGxVbmRlckNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltZy9pY29uLWdhbWUtY29pbi5zdmdcIiBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICA8c3Bhbj7otI/lvpfnjY7ph5E8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImZsb2F0XCI6ICdsZWZ0Jywgd2lkdGg6IDM2IH19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvdG9rZW4tZW9zLnN2Z1wiIHN0eWxlPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVvc0ZyYW1lfT5cbiAgICAgICAgICAgICAgPElucHV0IGRpc2FibGVVbmRlcmxpbmU9e3RydWV9IGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19IHZhbHVlPXtiZXRBbW91bnQgKiBnZXRQYXlvdXQocm9sbFVuZGVyKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcwcHggMTBweCAwcHggMTBweCcgfX0+XG4gICAgICAgICAgPEJ1dHRvbkJhc2Ugc3R5bGU9e3N0eWxlcy5iZXRCdXR0b259IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmV0QnV0dG9ufT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRzLkJ1dHRvbkxhcmdlfT57YmV0U3RhdHVzLmlzUm9sbGluZyA/IHRoaXMuc3RhdGUucm9sbGluZ051bWJlciA6ICfplovlp4vmipXms6gnfTwvZGl2PlxuICAgICAgICAgIDwvQnV0dG9uQmFzZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPEJldEhpc3RvcnkgLz5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmRhcmtHcmV5Mn07XG4gICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuRGljZS5wcm9wVHlwZXMgPSB7XG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpY2U7Il19 */\n/*@ sourceURL=/Users/ggm/Developer/tokamak-labs/baddice-webapp/src/pages/dice.js */"),
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
//# sourceMappingURL=dice.js.00e5a143770b1e07c321.hot-update.js.map
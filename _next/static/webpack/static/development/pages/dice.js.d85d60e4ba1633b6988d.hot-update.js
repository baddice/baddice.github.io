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
          background: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: styles.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-wallet.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      }, "0.00"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "EOS")));
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
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        style: styles.gridItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.leftText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "CPU"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barFill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "fill")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.rightText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "67%")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        style: styles.gridItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.leftText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "RAM"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.barFill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "fill")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.rightText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
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
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.wrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.text1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, text1), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: styles.text2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
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
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 120,
        text1: currentBetNumber,
        text2: "小於該數獲勝",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 8,
        style: styles.middleSpacing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 69,
        text1: payOut,
        text2: "賠率",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, {
        height: 69,
        text1: winChance,
        text2: "中獎概率",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
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
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Balance, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CpuAndRam, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(OddsInfo, {
        currentBetNumber: rollUnder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_base_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-coin.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, "\u6295\u6CE8\u91D1\u984D")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
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
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/token-eos.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.eosFrame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
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
          lineNumber: 309
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "1/2")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "2x ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "MIN")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.adjustButtons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "MAX"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
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
          lineNumber: 329
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
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
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/icon-game-coin.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, "\u8D0F\u5F97\u734E\u91D1")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
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
          lineNumber: 342
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "static/img/token-eos.svg",
        style: styles.icon,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: styles.eosFrame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
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
          lineNumber: 346
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          margin: '0px 10px 0px 10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
        style: styles.betButton,
        onClick: this.handleBetButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: _libs_styleguide_texts__WEBPACK_IMPORTED_MODULE_12__["default"].ButtonLarge,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, betStatus.isRolling ? this.state.rollingNumber : '開始投注'))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["986249378", [_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_bet_history__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "986249378",
        css: "body{width:100%;height:1000px;background-color:".concat(_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_11__["default"].darkGrey2, ";font-family:Roboto,Helvetica,Arial,sans-serif;margin:0px;overflow-x:hidden;color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZ20vRGV2ZWxvcGVyL3Rva2FtYWstbGFicy9iYWRkaWNlLXdlYmFwcC9zcmMvcGFnZXMvZGljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnWDJCLEFBR3dCLFdBQ0csY0FDZ0MsOENBQ0csOENBQ3RDLFdBQ08sa0JBQ0osY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2dnbS9EZXZlbG9wZXIvdG9rYW1hay1sYWJzL2JhZGRpY2Utd2ViYXBwL3NyYy9wYWdlcy9kaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCdXR0b25CYXNlLCBHcmlkLCBJbnB1dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9TbGlkZXInO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZC92NCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQmV0SGlzdG9yeSBmcm9tICcuLi9jb21wb25lbnRzL2JldC1oaXN0b3J5JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNlLWNvbnRhaW5lcic7XG5pbXBvcnQgQ29udHJhY3RPYnNlcnZlciBmcm9tICcuLi9saWJzL2NvbnRyYWN0LW9ic2VydmVyJztcblxuXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2xpYnMvc3R5bGVndWlkZS9jb2xvcnMnO1xuaW1wb3J0IHRleHRzIGZyb20gJy4uL2xpYnMvc3R5bGVndWlkZS90ZXh0cyc7XG5pbXBvcnQgRW9zQ2xpZW50IGZyb20gJy4uL2xpYnMvZW9zLWNsaWVudCc7XG5cbmltcG9ydCB7IGFjdGlvbnMsIHNlbGVjdG9ycyB9IGZyb20gJy4uL3JlZHV4JztcblxuY29uc3QgZ2V0UGF5b3V0ID0gKGN1cnJlbnRCZXROdW1iZXIpID0+IHtcbiAgY29uc3QgZXhwZWN0ZWRWYWx1ZSA9IDk4LjQ2O1xuICByZXR1cm4gKGV4cGVjdGVkVmFsdWUgLyAoY3VycmVudEJldE51bWJlciAtIDEpKS50b0ZpeGVkKDIpO1xufTtcblxuY2xhc3MgQmFsYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBjb250YWluZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIH0sXG4gICAgICBpbm5lckNvbnRhaW5lcjoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuZGFya0dyZXkyLFxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXIgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvaWNvbi1nYW1lLXdhbGxldC5zdmdcIi8+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPHNwYW4+MC4wMDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5FT1M8L3NwYW4+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbn1cblxuY2xhc3MgQ3B1QW5kUmFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIGdyaWRJdGVtOiB7XG4gICAgICAgIGhlaWdodDogMzQsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICB9LFxuICAgICAgYmFyV3JhcDoge1xuICAgICAgICBmbGV4QmFzaXM6ICdhdXRvJyxcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDksXG4gICAgICAgIGhlaWdodDogOSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXG4gICAgICAgIG1hcmdpbjogJzBweCA1cHggMHB4IDVweCdcbiAgICAgIH0sXG4gICAgICBiYXJGaWxsOiB7XG4gICAgICAgIHdpZHRoOiAnNTAlJyxcbiAgICAgICAgbGluZUhlaWdodDogOSxcbiAgICAgICAgaGVpZ2h0OiA5LFxuICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwOTZmZiwgIzQyZThkZiknLFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgIGxlZnRUZXh0OiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IDUsXG4gICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgfSxcbiAgICAgIHJpZ2h0VGV4dDoge1xuICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgd2lkdGg6IDM0LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXIgaGVpZ2h0PXszNH0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzdHlsZT17c3R5bGVzLmdyaWRJdGVtfSA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubGVmdFRleHR9PkNQVTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJhcldyYXB9PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYmFyRmlsbH0+ZmlsbDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucmlnaHRUZXh0fT42NyU8L2Rpdj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc3R5bGU9e3N0eWxlcy5ncmlkSXRlbX0gPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmxlZnRUZXh0fT5SQU08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5iYXJXcmFwfT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJhckZpbGx9PmZpbGw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnJpZ2h0VGV4dH0+NjclPC9kaXY+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbn1cblxuY2xhc3MgT2Rkc0luZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgQ29udGVudCA9ICh7IGhlaWdodCwgdGV4dDEsIHRleHQyIH0pID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICBkaXNwbGF5OiAndGFibGUnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmRhcmtHcmV5MixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgIH0sXG4gICAgICAgIHdyYXBwZXI6IHtcbiAgICAgICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDE6IHtcbiAgICAgICAgICBmb250U2l6ZTogMjgsXG4gICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgIGhlaWdodDogMjgsXG4gICAgICAgICAgY29sb3I6IGNvbG9ycy5jbGVhckJsdWUsXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQyOiB7XG4gICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICAgIG1hcmdpblRvcDogNCxcbiAgICAgICAgICBjb2xvcjogJyNkMmQyZDInLFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucm9vdH0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRleHQxfT57dGV4dDF9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGV4dDJ9Pnt0ZXh0Mn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCB7IGN1cnJlbnRCZXROdW1iZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgd2luQ2hhbmNlID0gYCR7Y3VycmVudEJldE51bWJlciAtIDF9JWA7XG4gICAgY29uc3QgcGF5T3V0ID0gZ2V0UGF5b3V0KGN1cnJlbnRCZXROdW1iZXIpO1xuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgbWlkZGxlU3BhY2luZzogeyBtYXJnaW5Ub3A6IDUgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPENvbnRlbnQgaGVpZ2h0PXsxMjB9IHRleHQxPXtjdXJyZW50QmV0TnVtYmVyfSB0ZXh0Mj17XCLlsI/mlrzoqbLmlbjnjbLli51cIn0gLz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9IHN0eWxlPXtzdHlsZXMubWlkZGxlU3BhY2luZ30+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Q29udGVudCBoZWlnaHQ9ezY5fSB0ZXh0MT17cGF5T3V0fSB0ZXh0Mj17XCLos6DnjodcIn0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8Q29udGVudCBoZWlnaHQ9ezY5fSB0ZXh0MT17d2luQ2hhbmNlfSB0ZXh0Mj17XCLkuK3njY7mpoLnjodcIn0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyID5cbiAgICApO1xuICB9XG59XG5PZGRzSW5mby5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRCZXROdW1iZXI6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cbkBjb25uZWN0KCh7IGJldEFtb3VudCwgcm9sbFVuZGVyLCBiZXRTdGF0dXMgfSkgPT4gKHsgYmV0QW1vdW50LCByb2xsVW5kZXIsIGJldFN0YXR1cyB9KSlcbmNsYXNzIERpY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICByb2xsaW5nTnVtYmVyOiA1MCxcbiAgfVxuXG4gIGhhbmRsZVJvbGxVbmRlckNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlUm9sbFVuZGVyKHZhbHVlKSk7XG4gIH1cblxuICBoYW5kbGVCZXRBbW91bnRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGlzTmFOKHZhbHVlKSA9PT0gZmFsc2UgJiYgdmFsdWUgPj0gMCkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLnVwZGF0ZUJldEFtb3VudChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgaGFuZGxlQmV0QnV0dG9uID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgcm9sbFVuZGVyID0gc2VsZWN0b3JzLmdldFJvbGxVbmRlcih0aGlzLnByb3BzKTtcbiAgICBjb25zdCBiZXRBbW91bnQgPSBzZWxlY3RvcnMuZ2V0QmV0QW1vdW50KHRoaXMucHJvcHMpO1xuXG4gICAgY29uc3QgYmV0Q2xpZW50SWQgPSB1dWlkKCk7XG4gICAgY29uc3QgcXVhbnRpdHkgPSBgJHtwYXJzZUZsb2F0KGJldEFtb3VudCkudG9GaXhlZCg0KX0gRU9TYDtcbiAgICBjb25zdCBtZW1vID0gYCR7cm9sbFVuZGVyfSNwZXRlcjEjdXNlcnNlZWQjJHtiZXRDbGllbnRJZH1gO1xuXG4gICAgY29uc3QgdHJ4ID0gYXdhaXQgdGhpcy5lb3NDbGllbnQudHJhbnNmZXIocXVhbnRpdHksIG1lbW8pO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnNvbGUubG9nKGBUcmFuc2FjdGlvbiBJRDogJHt0cngudHJhbnNhY3Rpb25faWR9YCk7XG5cbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMucm9sbERpY2UoYmV0Q2xpZW50SWQpKTtcbiAgICB0aGlzLmNvbnRyYWN0T2JzZXJ2ZXIuYWRkRXZlbnQoe1xuICAgICAgdHlwZTogJ29uQmV0UmVzdWx0JyxcbiAgICAgIGJldENsaWVudElkLFxuICAgICAgZm46IChiZXQpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLnJvbGxGaW5pc2hlZChiZXQpKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGNvbnNvbGUubG9nKCdbb25CZXRSZXN1bHRdJywgYmV0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZW9zQ2xpZW50ID0gbmV3IEVvc0NsaWVudCgpO1xuICAgIHRoaXMuZW9zQ2xpZW50LmluaXQoKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBiZXRSZWNlaXB0cyA9IGF3YWl0IHRoaXMuZW9zQ2xpZW50LmdldExhdGVzdEJldFJlY2VpcHRzKDEwMCk7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMudXBkYXRlQmV0SGlzdG9yeShiZXRSZWNlaXB0cykpO1xuICAgICAgdGhpcy5jb250cmFjdE9ic2VydmVyID0gbmV3IENvbnRyYWN0T2JzZXJ2ZXIodGhpcy5lb3NDbGllbnQsIHRoaXMucHJvcHMuZGlzcGF0Y2gpO1xuICAgICAgdGhpcy5jb250cmFjdE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgfSk7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBiZXRTdGF0dXMgPSBzZWxlY3RvcnMuZ2V0QmV0U3RhdHVzKHRoaXMucHJvcHMpO1xuICAgICAgaWYgKGJldFN0YXR1cy5pc1JvbGxpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGxpbmdOdW1iZXI6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogOTkpIH0pO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBib2FyZFRleHRUaXRsZToge1xuICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc1NnB4JyxcbiAgICAgIH0sXG4gICAgICBzZWxlY3RlZENvaW5CdXR0b246IHtcbiAgICAgICAgd2lkdGg6IDc1LFxuICAgICAgICBoZWlnaHQ6IDQyLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogY29sb3JzLnllbGxvdyxcbiAgICAgIH0sXG4gICAgICBjb2luQnV0dG9uOiB7XG4gICAgICAgIHdpZHRoOiA3NSxcbiAgICAgICAgaGVpZ2h0OiA0MixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGNvbG9ycy55ZWxsb3csXG4gICAgICB9LFxuICAgICAgYmV0QnV0dG9uOiB7XG4gICAgICAgIGhlaWdodDogNDgsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBjb2xvcnMueWVsbG93LFxuICAgICAgfSxcbiAgICAgIGljb246IHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICB9LFxuICAgICAgZW9zRnJhbWU6IHtcbiAgICAgICAgaGVpZ2h0OiAzNixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5kYXJrR3JleTIsXG4gICAgICAgIG1hcmdpbkxlZnQ6IDM2ICsgNSxcbiAgICAgIH0sXG4gICAgICBhZGp1c3RCdXR0b25zOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5kYXJrR3JleTIsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJvbGxVbmRlciA9IHNlbGVjdG9ycy5nZXRSb2xsVW5kZXIodGhpcy5wcm9wcyk7XG4gICAgY29uc3QgYmV0QW1vdW50ID0gc2VsZWN0b3JzLmdldEJldEFtb3VudCh0aGlzLnByb3BzKTtcbiAgICBjb25zdCBiZXRTdGF0dXMgPSBzZWxlY3RvcnMuZ2V0QmV0U3RhdHVzKHRoaXMucHJvcHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCYWxhbmNlIC8+XG4gICAgICAgIDxDcHVBbmRSYW0gLz5cblxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8T2Rkc0luZm8gY3VycmVudEJldE51bWJlcj17cm9sbFVuZGVyfSAvPlxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvaWNvbi1nYW1lLWNvaW4uc3ZnXCIgc3R5bGU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICAgICAgPHNwYW4+5oqV5rOo6YeR6aGNPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJmbG9hdFwiOiAnbGVmdCcsIHdpZHRoOiAzNiB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1nL3Rva2VuLWVvcy5zdmdcIiBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5lb3NGcmFtZX0+XG4gICAgICAgICAgICAgIDxJbnB1dCBkaXNhYmxlVW5kZXJsaW5lPXt0cnVlfSB0eXBlPVwibnVtYmVyXCIgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX0gdmFsdWU9e3BhcnNlRmxvYXQoYmV0QW1vdW50KS50b0ZpeGVkKDIpfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVCZXRBbW91bnRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fT5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjxCdXR0b25CYXNlIHN0eWxlPXtzdHlsZXMuYWRqdXN0QnV0dG9uc30+MS8yPC9CdXR0b25CYXNlPjwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjxCdXR0b25CYXNlIHN0eWxlPXtzdHlsZXMuYWRqdXN0QnV0dG9uc30+MnggPC9CdXR0b25CYXNlPjwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjxCdXR0b25CYXNlIHN0eWxlPXtzdHlsZXMuYWRqdXN0QnV0dG9uc30+TUlOPC9CdXR0b25CYXNlPjwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PjxCdXR0b25CYXNlIHN0eWxlPXtzdHlsZXMuYWRqdXN0QnV0dG9uc30+TUFYPC9CdXR0b25CYXNlPjwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8U2xpZGVyIG1pbj17Mn0gbWF4PXs5Nn0gc3RlcD17MX1cbiAgICAgICAgICAgIHZhbHVlPXtyb2xsVW5kZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVSb2xsVW5kZXJDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWcvaWNvbi1nYW1lLWNvaW4uc3ZnXCIgc3R5bGU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICAgICAgPHNwYW4+6LSP5b6X542O6YeRPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJmbG9hdFwiOiAnbGVmdCcsIHdpZHRoOiAzNiB9fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1nL3Rva2VuLWVvcy5zdmdcIiBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5lb3NGcmFtZX0+XG4gICAgICAgICAgICAgIDxJbnB1dCBkaXNhYmxlVW5kZXJsaW5lPXt0cnVlfSBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fSB2YWx1ZT17YmV0QW1vdW50ICogZ2V0UGF5b3V0KHJvbGxVbmRlcil9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMHB4IDEwcHggMHB4IDEwcHgnIH19PlxuICAgICAgICAgIDxCdXR0b25CYXNlIHN0eWxlPXtzdHlsZXMuYmV0QnV0dG9ufSBvbkNsaWNrPXt0aGlzLmhhbmRsZUJldEJ1dHRvbn0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0cy5CdXR0b25MYXJnZX0+e2JldFN0YXR1cy5pc1JvbGxpbmcgPyB0aGlzLnN0YXRlLnJvbGxpbmdOdW1iZXIgOiAn6ZaL5aeL5oqV5rOoJ308L2Rpdj5cbiAgICAgICAgICA8L0J1dHRvbkJhc2U+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxCZXRIaXN0b3J5IC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5kYXJrR3JleTJ9O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbkRpY2UucHJvcFR5cGVzID0ge1xuICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWNlOyJdfQ== */\n/*@ sourceURL=/Users/ggm/Developer/tokamak-labs/baddice-webapp/src/pages/dice.js */"),
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
//# sourceMappingURL=dice.js.d85d60e4ba1633b6988d.hot-update.js.map
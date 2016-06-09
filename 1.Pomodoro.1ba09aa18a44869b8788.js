webpackJsonp([1],{

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(640);
	
	var _PomodoroReducer = __webpack_require__(657);
	
	var _Pomodoro = __webpack_require__(659);
	
	var _Pomodoro2 = _interopRequireDefault(_Pomodoro);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapActionCreators = {
	  setTime: function setTime(time) {
	    return _PomodoroReducer.actions.setTime(time);
	  }
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    currentTime: state.PomodoroReducer
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapActionCreators)(_Pomodoro2.default);

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.SET_TIME = undefined;
	
	var _defineProperty2 = __webpack_require__(658);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	exports.setTime = setTime;
	exports.default = pomodoroReducer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var SET_TIME = exports.SET_TIME = 'SET_TIME';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	function setTime(time) {
	  return {
	    type: SET_TIME,
	    payload: time
	  };
	}
	
	var actions = exports.actions = {
	  setTime: setTime
	};
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (0, _defineProperty3.default)({}, SET_TIME, function (state, action) {
	  return state = action.payload;
	});
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = 0;
	
	function pomodoroReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(594);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Pomodoro = __webpack_require__(660);
	
	var _Pomodoro2 = _interopRequireDefault(_Pomodoro);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Pomodoro2.default;

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Pomodoro = undefined;
	
	var _getPrototypeOf = __webpack_require__(587);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(592);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(593);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(597);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(632);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Pomodoro = __webpack_require__(661);
	
	var _Pomodoro2 = _interopRequireDefault(_Pomodoro);
	
	var _ActionButton = __webpack_require__(663);
	
	var _ActionButton2 = _interopRequireDefault(_ActionButton);
	
	var _AlertBox = __webpack_require__(666);
	
	var _AlertBox2 = _interopRequireDefault(_AlertBox);
	
	var _Timer = __webpack_require__(669);
	
	var _Timer2 = _interopRequireDefault(_Timer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var START_LABEL = 'Start';
	var STOP_LABEL = 'Stop';
	var RESET_LABEL = 'Reset';
	// const POMODORO_TIME = 25 * (60 * 1000)
	var POMODORO_TIME = 2000;
	
	// http://stackoverflow.com/questions/21294302/converting-soundclouds-
	//milliseconds-to-minutes-and-seconds-with-javascript
	function millisToMinutesAndSeconds(millis) {
	  var minutes = Math.floor(millis / 60000);
	  var seconds = (millis % 60000 / 1000).toFixed(0);
	  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
	}
	
	function playAudio(audio) {
	  audio.currentTime = 0;
	  audio.play();
	}
	
	var Pomodoro = exports.Pomodoro = function (_React$Component) {
	  (0, _inherits3.default)(Pomodoro, _React$Component);
	
	  function Pomodoro(props) {
	    (0, _classCallCheck3.default)(this, Pomodoro);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Pomodoro).call(this, props));
	
	    _this.state = {
	      isRunning: false,
	      actionLabel: START_LABEL,
	      time: POMODORO_TIME
	    };
	
	    _this.audioList = {};
	    _this._loadAudioFiles();
	    _this.props.setTime(_this.state.time);
	
	    _this.handleTimeActions = _this.handleTimeActions.bind(_this);
	    _this.handleResetAction = _this.handleResetAction.bind(_this);
	    _this.handleCloseAlertBox = _this.handleCloseAlertBox.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(Pomodoro, [{
	    key: '_loadAudioFiles',
	    value: function _loadAudioFiles() {
	      var _this2 = this;
	
	      var audioList = {};
	      ['stop', 'start', 'alarm'].map(function (file) {
	        _this2.audioList[file] = new Audio(file + '.wav');
	      });
	    }
	  }, {
	    key: '_startTime',
	    value: function _startTime() {
	      var _this3 = this;
	
	      playAudio(this.audioList.start);
	      this._closeAlertBox();
	      var interval = setInterval(function () {
	        if (_this3.state.time > 0) {
	          _this3.setState({ time: _this3.state.time - 1000 });
	          _this3.props.setTime(_this3.state.time);
	        } else {
	          _this3._resetTime();
	          _this3._openAlertBox();
	        }
	      }, 1000);
	
	      this.setState({ interval: interval, isRunning: true });
	    }
	  }, {
	    key: '_openAlertBox',
	    value: function _openAlertBox() {
	      playAudio(this.audioList.alarm);
	      this.setState({ isAlertBoxActivated: true });
	    }
	  }, {
	    key: '_closeAlertBox',
	    value: function _closeAlertBox() {
	      this.setState({ isAlertBoxActivated: false });
	    }
	  }, {
	    key: '_stopTime',
	    value: function _stopTime() {
	      playAudio(this.audioList.stop);
	      clearInterval(this.state.interval);
	      this.setState({ isRunning: false });
	    }
	  }, {
	    key: '_resetTime',
	    value: function _resetTime() {
	      clearInterval(this.state.interval);
	      this.props.setTime(POMODORO_TIME);
	      this.setState({ isRunning: false, time: POMODORO_TIME });
	    }
	  }, {
	    key: 'handleTimeActions',
	    value: function handleTimeActions() {
	      this[this.state.isRunning ? '_stopTime' : '_startTime']();
	    }
	  }, {
	    key: 'handleResetAction',
	    value: function handleResetAction() {
	      playAudio(this.audioList.stop);
	      this._resetTime();
	    }
	  }, {
	    key: 'handleCloseAlertBox',
	    value: function handleCloseAlertBox() {
	      this._closeAlertBox();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var currentTime = millisToMinutesAndSeconds(this.props.currentTime);
	      var actionLabel = this.state.isRunning ? STOP_LABEL : START_LABEL;
	      var handleTimeActions = this.handleTimeActions;
	      var handleResetAction = this.handleResetAction;
	      var handleCloseAlertBox = this.handleCloseAlertBox;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _Pomodoro2.default.wrapper },
	        _react2.default.createElement(_Timer2.default, { currentTime: currentTime }),
	        _react2.default.createElement(_ActionButton2.default, { text: actionLabel, onClick: handleTimeActions }),
	        _react2.default.createElement(_ActionButton2.default, { text: RESET_LABEL, onClick: handleResetAction }),
	        this.state.isAlertBoxActivated && _react2.default.createElement(_AlertBox2.default, { onClick: handleCloseAlertBox })
	      );
	    }
	  }]);
	  return Pomodoro;
	}(_react2.default.Component);
	
	Pomodoro.propTypes = {
	  currentTime: _react2.default.PropTypes.number.isRequired,
	  setTime: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = Pomodoro;

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(662);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(652)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(662, function() {
				var newContent = __webpack_require__(662);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(651)();
	// imports
	
	
	// module
	exports.push([module.id, ".Pomodoro__wrapper___1rVF3{margin:auto;text-align:center}", "", {"version":3,"sources":["/./src/components/src/components/Pomodoro/Pomodoro.scss"],"names":[],"mappings":"AAAA,2BACE,YAAa,iBACM,CACpB","file":"Pomodoro.scss","sourcesContent":[".wrapper {\n  margin: auto;\n  text-align: center;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"wrapper": "Pomodoro__wrapper___1rVF3"
	};

/***/ },

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ActionButton = undefined;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ActionButton = __webpack_require__(664);
	
	var _ActionButton2 = _interopRequireDefault(_ActionButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ActionButton = exports.ActionButton = function ActionButton(props) {
	  return _react2.default.createElement(
	    'button',
	    { className: _ActionButton2.default.button, onClick: props.onClick },
	    props.text
	  );
	};
	
	ActionButton.propTypes = {
	  text: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func
	};
	
	exports.default = ActionButton;

/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(665);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(652)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(665, function() {
				var newContent = __webpack_require__(665);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(651)();
	// imports
	
	
	// module
	exports.push([module.id, ".ActionButton__button___2gd3L{background:hsla(0,0%,100%,.2);color:#fff;font-size:3rem;border-radius:50%;border:1px solid #fff;margin:6rem .6rem;height:10rem;width:10rem;outline:none;cursor:pointer}.ActionButton__button___2gd3L:hover{background:hsla(0,0%,100%,.5)}", "", {"version":3,"sources":["/./src/components/src/components/Pomodoro/ActionButton.scss"],"names":[],"mappings":"AAAA,8BACE,8BAAqB,WACT,eAEI,kBAEG,sBACI,kBACJ,aAEL,YACD,aAEC,cACE,CAdlB,oCAiBI,6BAAqB,CACtB","file":"ActionButton.scss","sourcesContent":[".button {\n  background: rgba(#FFF, .2);\n  color: #FFF;\n\n  font-size: 3rem;\n\n  border-radius: 50%;\n  border: 1px solid #FFF;\n  margin: 6rem .6rem;\n\n  height: 10rem;\n  width: 10rem;\n\n  outline: none;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(#FFF, .5);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"button": "ActionButton__button___2gd3L"
	};

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AlertBox = undefined;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AlertBox = __webpack_require__(667);
	
	var _AlertBox2 = _interopRequireDefault(_AlertBox);
	
	var _ActionButton = __webpack_require__(663);
	
	var _ActionButton2 = _interopRequireDefault(_ActionButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AlertBox = exports.AlertBox = function AlertBox(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: _AlertBox2.default.box },
	    _react2.default.createElement(
	      'p',
	      null,
	      'It\'s time to relax ;-)'
	    ),
	    _react2.default.createElement(_ActionButton2.default, { onClick: props.onClick, text: 'Close' })
	  );
	};
	
	AlertBox.propTypes = {
	  onClick: _react2.default.PropTypes.func
	};
	
	exports.default = AlertBox;

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(668);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(652)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(668, function() {
				var newContent = __webpack_require__(668);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(651)();
	// imports
	
	
	// module
	exports.push([module.id, ".AlertBox__box___1oWIo{background:hsla(0,41%,61%,.9);width:100%;position:fixed;bottom:0;left:0;right:0;top:0;padding:3rem;font-size:5rem}", "", {"version":3,"sources":["/./src/components/src/components/Pomodoro/AlertBox.scss"],"names":[],"mappings":"AAAA,uBACE,8BAAwB,WACZ,eACI,SACN,OACF,QACC,MACF,aAEO,cACE,CACjB","file":"AlertBox.scss","sourcesContent":[".box {\n  background: rgba(#C47272, .9);\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n\n  padding: 3rem;\n  font-size: 5rem;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"box": "AlertBox__box___1oWIo"
	};

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Timer = undefined;
	
	var _react = __webpack_require__(300);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Timer = __webpack_require__(670);
	
	var _Timer2 = _interopRequireDefault(_Timer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Timer = exports.Timer = function Timer(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: _Timer2.default.display },
	    props.currentTime
	  );
	};
	
	Timer.propTypes = {
	  currentTime: _react2.default.PropTypes.string
	};
	
	exports.default = Timer;

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(671);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(652)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(671, function() {
				var newContent = __webpack_require__(671);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(651)();
	// imports
	
	
	// module
	exports.push([module.id, ".Timer__display___2DotY{font-size:10rem;font-weight:100;margin-top:4rem}", "", {"version":3,"sources":["/./src/components/src/components/Pomodoro/Timer.scss"],"names":[],"mappings":"AAAA,wBACE,gBAAiB,gBACA,eAEA,CAClB","file":"Timer.scss","sourcesContent":[".display {\n  font-size: 10rem;\n  font-weight: 100;\n\n  margin-top: 4rem;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"display": "Timer__display___2DotY"
	};

/***/ }

});
//# sourceMappingURL=1.Pomodoro.1ba09aa18a44869b8788.js.map
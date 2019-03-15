"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2, _initialiseProps;

var _index = require("../../../../../@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../../../prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../../../../classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _isFunction2 = require("../../../../../lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtCard = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtCard, _AtComponent);

  function AtCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtCard.__proto__ || Object.getPrototypeOf(AtCard)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtCard, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtCard.prototype.__proto__ || Object.getPrototypeOf(AtCard.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _classNames;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props = this.__props,
          title = _props.title,
          note = _props.note,
          extra = _props.extra,
          thumb = _props.thumb,
          isFull = _props.isFull,
          icon = _props.icon;


      var rootClass = (0, _index6.default)('at-card', {
        'at-card--full': isFull
      }, this.__props.className);
      var iconClass = (0, _index6.default)((_classNames = {
        'at-icon': true
      }, _defineProperty(_classNames, "at-icon-" + (icon && icon.value), icon && icon.value), _defineProperty(_classNames, 'at-card__header-icon', true), _classNames));

      var iconStyle = {
        color: icon && icon.color || '',
        fontSize: icon && icon.size + "px" || ''
      };

      var anonymousState__temp = !thumb && icon && icon.value ? (0, _index.internal_inline_style)(iconStyle) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        rootClass: rootClass,
        thumb: thumb,
        icon: icon,
        iconClass: iconClass,
        extra: extra,
        note: note,
        title: title
      });
      return this.__state;
    }
  }]);

  return AtCard;
}(_component2.default), _class.properties = {
  "onClick": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "title": {
    "type": null,
    "value": null
  },
  "note": {
    "type": null,
    "value": null
  },
  "extra": {
    "type": null,
    "value": null
  },
  "thumb": {
    "type": null,
    "value": null
  },
  "isFull": {
    "type": null,
    "value": null
  },
  "icon": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["handleClick"], _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.$usedState = ["anonymousState__temp", "rootClass", "thumb", "icon", "iconClass", "extra", "note", "title", "isFull", "className", "children"];

  this.handleClick = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if ((0, _isFunction3.default)(_this2.props.onClick)) {
      _this2.__triggerPropsFn("onClick", [null].concat([].concat(args)));
    }
  };

  this.$$refs = [];
}, _temp2);


AtCard.defaultProps = {
  note: '',
  isFull: false,
  thumb: '',
  title: '',
  extra: '',
  icon: {},
  onClick: function onClick() {}
};

AtCard.propTypes = {
  note: _index4.default.string,
  isFull: _index4.default.bool,
  thumb: _index4.default.string,
  title: _index4.default.string,
  extra: _index4.default.string,
  icon: _index4.default.object,
  onClick: _index4.default.func
};

AtCard.defaultProps = {
  note: '',
  isFull: false,
  thumb: '',
  title: '',
  extra: '',
  onClick: function onClick() {}
};
exports.default = AtCard;

Component(require('../../../../../@tarojs/taro-weapp/index.js').default.createComponent(AtCard));
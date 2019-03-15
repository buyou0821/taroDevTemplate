"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../service/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  namespace: 'order',
  state: {
    orderLists: [],
    global: false
  },
  effects: {
    getList: /*#__PURE__*/regeneratorRuntime.mark(function getList(_ref, _ref2) {
      var payload = _ref.payload;
      var all = _ref2.all,
          call = _ref2.call,
          put = _ref2.put;

      var _ref3, statusCode, data, list;

      return regeneratorRuntime.wrap(function getList$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:

              _index2.default.showLoading({
                title: '加载中。。。'
              });
              _context.next = 3;
              return call(_api.getOrderList);

            case 3:
              _ref3 = _context.sent;
              statusCode = _ref3.statusCode;
              data = _ref3.data;
              list = data.list;

              // console.log("model", list);

              _context.next = 9;
              return put({
                type: "save",
                payload: {
                  'orderLists': list
                }
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, getList, this);
    })
  },
  reducers: {
    save: function save(state, _ref4) {
      var payload = _ref4.payload;

      _index2.default.hideLoading();
      return _extends({}, state, payload);
    }
  }

};
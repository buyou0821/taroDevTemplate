"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dva = require("../utils/dva.js");

var _dva2 = _interopRequireDefault(_dva);

var _index = require("../pages/index/model/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dvaApp = _dva2.default.createApp({
  initialState: {},
  models: [_index2.default]
});

var store = dvaApp.getStore();

exports.default = store;
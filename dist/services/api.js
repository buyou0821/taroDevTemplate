"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.requestPost = requestPost;

var _request = require("../utils/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defultParam = {
  data: {},
  method: "GET",
  header: {}
};

function get(url, param) {
  return (0, _request2.default)(url, param);
}

function requestPost(url, param) {
  param.method = "POST";

  var newParam = Object.assign(defultParam, param);
  return (0, _request2.default)(url, newParam);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrderList = getOrderList;

var _api = require("../../../services/api.js");

function getOrderList() {
  return (0, _api.get)('/test/orderList');
}
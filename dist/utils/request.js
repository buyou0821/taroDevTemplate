"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = request;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

require("../npm/@tarojs/async-await/index.js");

var _serviceConfig = require("./serviceConfig.js");

var _serviceConfig2 = _interopRequireDefault(_serviceConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const domainName='http://yapi.rebornauto.cn/mock/58';
var domainName = _serviceConfig2.default["mock"];
// console.log("环境比那里",domainName);

// console.log(process.env.NODE_ENV);
// const codeMessage = {
//   200: '服务器成功返回请求的数据',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据,的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器',
//   502: '网关错误',
//   503: '服务不可用，服务器暂时过载或维护',
//   504: '网关超时',
// };

/**
 * 
 * @param {*} url 接口地址
 * @param {} options 配置参数data,method,heder
 */
function request(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    data: {},
    method: "GET",
    header: {}
  };
  var data = options.data,
      method = options.method,
      header = options.header;


  return new Promise(function (resolve, reject) {
    // Taro.addInterceptor(interceptor)

    _index2.default.request({
      url: domainName + url,
      data: data,
      method: method,
      header: _extends({
        'content-type': 'application/json'
      }, header),
      success: function success(res) {
        var statusCode = res.statusCode,
            data = res.data;
        // console.log('statusCode', codeMessage[statusCode], statusCode);

        if (statusCode > 300) {
          _index2.default.showToast({
            icon: 'none',
            title: "\u8BF7\u6C42\u9519\u8BEF" + statusCode
          });
        } else {
          return resolve(data);
        }
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
}
import Taro from '@tarojs/taro'
import '@tarojs/async-await'
import serviceConfig from './serviceConfig'

// const domainName='http://yapi.rebornauto.cn/mock/58';
const domainName=serviceConfig[process.env.SERVICECONFIG]
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
export default function request(url, options={
  data: {},
  method: "GET",
  header: {},
}) {
  const {data, method, header} = options;

  return new Promise((resolve,reject) => {
    // Taro.addInterceptor(interceptor)

    Taro.request({
      url: domainName+url,
      data,
      method,
      header: {
        'content-type': 'application/json',
        ...header
      },
      success: res => {
        const {statusCode,data}= res;
        // console.log('statusCode', codeMessage[statusCode], statusCode);
        if(statusCode > 300){
          Taro.showToast({
            icon: 'none',
            title: `请求错误${statusCode}`
          })
        }else{
          return resolve(data);
        }
      },
      fail:(e) => {
        reject(e);
      }
    })
  })
  
}
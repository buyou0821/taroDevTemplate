const path = require('path');//eslint-disable-line

// import path from 'path';

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    // 例子：domainUrl: '"http:www.xxx.com/"'
    domainUrl: '"http://yapi.rebornauto.cn/mock/58"'
    
  },
  alias: {
    '@/src': path.resolve(__dirname, '..', 'src/'),
  },
  weapp: {},
  h5: {}
}
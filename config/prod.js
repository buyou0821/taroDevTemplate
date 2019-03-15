const path = require('path');//eslint-disable-line

module.exports = {
  env: {
    NODE_ENV: '"production"',
    
  },
  defineConstants: {
    domainUrl: '"http://www.xxx.com/xxx"'
  },
  alias: {
    '@/src': path.resolve(__dirname, '..', 'src/'),
  },
  weapp: {},
  h5: {}
}

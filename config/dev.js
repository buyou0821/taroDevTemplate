const path = require('path');//eslint-disable-line

// import path from 'path';

module.exports = {
  env: {
    NODE_ENV: '"development"',
    SERVICECONFIG: '"mock"'
  },
  defineConstants: {
    
  },
  alias: {
    '@/src': path.resolve(__dirname, '..', 'src/'),
  },
  weapp: {},
  h5: {}
}
const path = require('path');//eslint-disable-line

module.exports = {
  env: {
    NODE_ENV: '"production"',
    SERVICECONFIG: process.env.SERVICECONFIG
  },
  defineConstants: {
  },
  alias: {
    '@/src': path.resolve(__dirname, '..', 'src/'),
  },
  weapp: {},
  h5: {}
}

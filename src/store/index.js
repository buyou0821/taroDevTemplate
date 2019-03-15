import dva from './dva'
import global from './global'
import order from '../pages/index/model/index'


const dvaApp = dva.createApp({
  initialState: {},
  models: [global,order]
});

const store = dvaApp.getStore()

export default store


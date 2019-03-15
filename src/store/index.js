import dva from '../utils/dva'
import order from '../pages/index/model/index'


const dvaApp = dva.createApp({
  initialState: {},
  models: [order]
});

const store = dvaApp.getStore()

export default store


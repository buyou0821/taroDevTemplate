import Taro from '@tarojs/taro'
import {getOrderList} from '../service/api'

export default {
  namespace: 'order',
  state:{
    orderLists: [],
    global: false,
  },
  effects:{
    * getList({payload}, {all, call, put}){

      Taro.showLoading({
        title: '加载中。。。'
      })
      const { statusCode, data } = yield call(getOrderList);
      const {list}=data;

      // console.log("model", list);
     
      yield put({
        type:"save",
        payload:{
          'orderLists':list
        }
      })
    }
  },
  reducers:{
    save(state, {payload}){
      Taro.hideLoading();
      return {...state, ...payload}
    }
  },


}
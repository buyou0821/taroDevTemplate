import Taro from '@tarojs/taro'
import action from '../../../utils/action'
import {get, queryPost} from '../../../services/api'


export default {
  namespace: 'order',
  state:{orderLists: []},
  effects:{
    * getList({payload}, {all, call, put}){
      let {data}=yield call(get, '/test/orderList');
      const {list}=data;

      // console.log("model", list);
      yield put(action("save",{
        'orderLists':list
      }))
    }
  },
  reducers:{
    save(state, {payload}){
      return {...state, ...payload}
    }
  },

}
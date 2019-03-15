import {get, queryPost} from '@/src/services/api'

export function getOrderList(){
  return get('/test/orderList');
}
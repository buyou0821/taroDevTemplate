import Taro from '@tarojs/taro'
import request from './request'

const defultParam={
  data: {},
  method: "GET",
  header: {},
  isLoading: false,
}

export function get(url, param){
  return request(url,param)
}

export function requestPost(url, param) { 
  param.method="POST";
  
  let newParam=Object.assign(defultParam,param);
  return request(url,param)
}
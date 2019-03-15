import request from '../utils/request'

const defultParam={
  data: {},
  method: "GET",
  header: {}
}

export function get(url, param){
  return request(url,param)
}

export function requestPost(url, param) { 
  param.method="POST";
  
  let newParam = Object.assign(defultParam,param);
  return request(url,newParam)
}
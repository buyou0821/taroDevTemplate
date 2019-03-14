import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtInput, AtForm, AtButton, AtCard } from 'taro-ui'
import { get, requestPost } from '../../services/api'
import {connect} from '@tarojs/redux'
import action from '../../utils/action'

import './index.scss'

@connect((order) => {
  // console.log('state',state);
  return {
    ...order,
  }
})

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  

  componentWillMount(){
    this.props.dispatch(action("order/getList"));
  }
 

  render () {
    const {orderLists} = this.props.order;
    
    // console.log('##',this.props.order);
    
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        {orderLists.length>0?orderLists.map((item,key) => {
          return (
              <AtCard title={item.title} key={key}>
                <View>最高价:{item.highestPrice}</View>
                <View>最低价:{item.minimumPrice}</View>
              </AtCard>
            )
        }) : <View>没有数据</View>
      }
      </View>
    )
  }
}


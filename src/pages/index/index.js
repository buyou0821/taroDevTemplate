import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import {connect} from '@tarojs/redux'

import './index.scss'

@connect(({order, loading}) => {
  // console.log("isloading",loading);
  const isLoading = loading.effects['order/getList'];
  return {
    order,
    isLoading
  }
})

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount(){
    this.props.dispatch({
      type:"order/getList"
    });
  }

 

  render () {
    const {order:{orderLists=[]},isLoading} = this.props;
    
    return (
      <View className='index'>
        <Text>{isLoading}</Text>
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


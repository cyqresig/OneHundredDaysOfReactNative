/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/5/26.
 */


import React, {
  Component,
} from 'react'
import {
  StyleSheet,
  View,
  Navigator,
  Text,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import TabNavigator from 'react-native-tab-navigator'

import Main from './main-test'
import Main1 from './main1'

export default class TabNavigatorDemo extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      selectedTab: 'home',

    };
  }

  render() {
    return (
      <TabNavigator tabBarStyle={{backgroundColor: 'rgba(160, 159, 159, .1)'}}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          titleStyle={{color: '#7C7C7C'}}
          selectedTitleStyle={{color: 'red'}}
          renderIcon={ () => <Ionicons size={28} name={'ios-home-outline'} color={'#7C7C7C'}/> }
          renderSelectedIcon={() => <Ionicons size={28} name={'ios-home-outline'} color={'red'}/>}
          //badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'red'}}>
            <Text>111</Text>
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="关于"
          titleStyle={{color: '#7C7C7C'}}
          selectedTitleStyle={{color: 'red'}}
          renderIcon={ () => <Ionicons size={28} name={'ios-home-outline'} color={'#7C7C7C'}/> }
          renderSelectedIcon={() => <Ionicons size={28} name={'ios-home-outline'} color={'red'}/>}
          //renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>222</Text>
          </View>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }

}


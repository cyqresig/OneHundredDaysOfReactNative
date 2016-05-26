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
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import TabNavigator from 'react-native-tab-navigator'
import LinearGradient from 'react-native-linear-gradient'

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
      <TabNavigator tabBarStyle={{backgroundColor: 'rgba(255, 255, 255, .8)'}}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          titleStyle={{color: '#7C7C7C'}}
          selectedTitleStyle={{color: 'red'}}
          renderIcon={ () => <Ionicons size={28} name={'ios-home-outline'} color={'#7C7C7C'}/> }
          renderSelectedIcon={() => <Ionicons size={28} name={'ios-home-outline'} color={'red'}/>}
          //badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>

          <Navigator style={styles.container}
                     initialRoute={{
                      component: Main,
                      title: '100 Days of RN',
                      //navigationBarHidden: true,
                      passProps: {
                        navigator: this.props.navigator,
                        rootRoute: this.props.navigator.navigationContext.currentRoute
                      }
                    }}
                     sceneStyle={styles.navigatorBg}
                     renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                          <Component
                            navigator={navigator}
                            {...route.passProps}
                          />
                        )
                     }}
                     navigationBar={
                      <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                        style={styles.navBar}
                      />
                    }
          />

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
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
              <TouchableOpacity onPress={ () => alert('1') }>
                <Text style={styles.buttonText}>
                  登 录
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableHighlight activeOpacity={1} underlayColor={'#008EC1'} style={{borderRadius: 5, backgroundColor: '#00A4E0'}} onPress={ () => alert('2') }>
              <Text style={styles.buttonText}>
                登 录
              </Text>
            </TouchableHighlight>
          </View>

        </TabNavigator.Item>
      </TabNavigator>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorBg: {
    backgroundColor: '#F4F4F4',
  },

  navBar: {
    backgroundColor: 'white',
    //backgroundColor: 'rgba(255, 255, 255, .99)',  //透明度有效,但透明的范围只有高度的一半,还未找到导致该问题的原因@todo
    //backgroundColor: 'transparent',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },


  linearGradient: {
    //flex: 1,
    //paddingLeft: 15,
    //paddingRight: 15,
    borderRadius: 5,

    //justifyContent: 'center',
    //alignItems: 'center',
    //height: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginVertical: 10,
    marginHorizontal: 25,
  },

})

let NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    //if (index === 0) {
    //  return null;
    //}
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title} [{index}]
      </Text>
    );
    //return (
    //  <TextInput
    //    style={{alignSelf:'center', width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
    //    defaultValue={route.title + '[' + index + ']'}
    //  />
    //)
  },

};



import Swiper from 'react-native-swiper'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  //NavigatorIOS,
  Navigator,
  StatusBar,
} from 'react-native'

import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

//import Feature from './view/features'
//import TabBarIndex from './view/tabbar-index'
import TabBarIndexTest from './view/tabbar-index-test'

class OneHundredDayOfRN extends Component {

  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        navigationBar: null,
      }
    }

  componentDidMount () {
    RCTDeviceEventEmitter.addListener('setNavigationBar.index', (navigationBar) => {
      this.setState({
        navigationBar: navigationBar,
      })
    })
  }

  render () {

    //return (
    //  <View style={styles.container}>
    //    <StatusBar animated={true} hidden={true} />
    //    <NavigatorIOS style={styles.container}
    //                  initialRoute={{
    //      component: Feature,
    //      //title: '100 Days of RN',
    //      navigationBarHidden: true,
    //    }}
    //    />
    //  </View>
    //)

  //  return (
  //    <NavigatorIOS style={styles.container}
  //                  initialRoute={{
  //                    component: TabBarIndex,
  //                    //title: '100 Days of RN',
  //                    navigationBarHidden: true,
  //                  }}
  //                  itemWrapperStyle={styles.navigatorBg}
  //                  tintColor="#777"
  //
  ///>
  //  )

    return (
      <Navigator style={styles.container}
                   initialRoute={{
                        component: TabBarIndexTest,
                        title: '100 Days of RN',
                        //navigationBarHidden: true,
                      }}
                   sceneStyle={styles.navigatorBg}
                   configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
                   renderScene={(route, navigator) => {

                          let Component = route.component;
                          return (
                            <Component
                              navigator={navigator}
                              {...route.passProps}
                            />
                          )
                          //let Component = route.component;
                          //let navBar = route.navigationBar;
                          //console.log('navBar');
                          //console.log(navBar);
                          //
                          ////const { hideNavBar } = this.state;
                          //const hideNavBar = true;
                          //let navBarStyle = hideNavBar? { height: 0 } : {};
                          //
                          //if (navBar) {
                          //  navBar = React.addons.cloneWithProps(navBar, { navigator, route, style: {...navBarStyle} });
                          //}
                          //
                          //return (
                          //  <View style={{flex: 1}}>
                          //    {navBar}
                          //    <Component
                          //      navigator={navigator}
                          //      {...route.passProps}
                          //    />
                          //  </View>
                          //);
                       }}
                   navigationBar={
                        this.state.navigationBar
                      }
        />
    )

    //return (
    //  <TabBarIndex/>
    //)

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
        {route.title}
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

AppRegistry.registerComponent('OneHundredDaysOfReactNative', () => OneHundredDayOfRN)
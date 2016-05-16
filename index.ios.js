
import Swiper from 'react-native-swiper'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  NavigatorIOS,
  StatusBar,
} from 'react-native'

//import Feature from './view/features'
import TabBarIndex from './view/tabbar-index'

class OneHundredDayOfRN extends Component {

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

    return (
        <TabBarIndex/>
    )

  }
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//  }
//})

AppRegistry.registerComponent('OneHundredDaysOfReactNative', () => OneHundredDayOfRN)
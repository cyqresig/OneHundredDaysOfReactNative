
import Swiper from 'react-native-swiper'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
} from 'react-native'

import Feature from './view/features'

class OneHundredDayOfRN extends Component {

  render () {

    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          component: Feature,
          navigationBarHidden: true,
        }}
      />
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

AppRegistry.registerComponent('OneHundredDaysOfReactNative', () => OneHundredDayOfRN)
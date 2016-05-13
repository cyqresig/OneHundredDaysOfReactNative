
import Swiper from 'react-native-swiper'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  PixelRatio,
} from 'react-native'

import logo2 from './view/images/logo2.jpg'
import logo3 from './view/images/logo3.jpg'
import logo4 from './view/images/logo4.jpg'

class OneHundredDayOfRN extends Component {

  render() {

    return (
      <Swiper style={styles.wrapper} loop={false}>
        <View style={styles.slide}>
          <Image resizeMode={'cover'} style={styles.slideImage} source={logo2}></Image>
        </View>
        <View style={styles.slide}>
          <Image resizeMode={'cover'} style={styles.slideImage} source={logo3}></Image>
        </View>
        <View style={styles.slide}>
          <Image resizeMode={'cover'} style={styles.slideImage} source={logo4}>
            <View style={styles.toIndexWrapper}>
              <Text style={styles.text} onPress={this._handleToIndex}>进入首页</Text>
            </View>
          </Image>
        </View>
      </Swiper>
    )

  }

  _handleToIndex = () => {
    alert('进入首页')
  }

}

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window')
const minBorderWidth = 1 / PixelRatio.get()

const styles = StyleSheet.create({
  wrapper: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slideImage: {
    //flex: 1,
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 80,
  },

  text: {
    color: '#fff',
    fontSize: 18,
    //fontWeight: 'bold',
    borderWidth: minBorderWidth,
    borderColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },

})

AppRegistry.registerComponent('OneHundredDaysOfReactNative', () => OneHundredDayOfRN)
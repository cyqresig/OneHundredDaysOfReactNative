
import Swiper from 'react-native-swiper'

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  PixelRatio,
} from 'react-native'

import feature1 from './images/feature1.jpg'
import feature2 from './images/feature2.jpg'
import feature3 from './images/feature3.jpg'

export default class Features extends Component {

  render() {
      return (
          <Swiper activeDot={activeDot} loop={false}>
              <View style={styles.featureWrapper}>
                  <Image style={styles.featureImg} resizeMode={'stretch'} source={feature1}></Image>
              </View>
              <View style={styles.featureWrapper}>
                  <Image style={styles.featureImg} resizeMode={'stretch'} source={feature2}></Image>
              </View>
              <View style={styles.featureWrapper}>
                <Image style={styles.featureImg} resizeMode={'stretch'} source={feature3}>
                  <Text style={styles.featureText} onPress={this._handleToIndex}>立即体验</Text>
                </Image>
              </View>
          </Swiper>
      )
  }

  _handleToIndex = () => {
    alert('立即体验!')
  }

}

const activeDot = (
  <View style={{backgroundColor: '#E20603', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
)

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window')
const minBorderWidth = 0.5 * PixelRatio.get()

const styles = StyleSheet.create({

  featureWrapper: {
    flex: 1
  },

  featureImg: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 80,
  },

  featureText: {
    justifyContent: 'center',
    color: '#fff',
    fontSize: 16,
    borderWidth: minBorderWidth,
    borderColor: '#fff',
    paddingLeft: 6,
    paddingRight: 4,
    paddingTop: 6,
    paddingBottom: 4,
    borderRadius: 3,
  }

})
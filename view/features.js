/**
 * @fileOverview 第一次进入app, 全屏app特性广告轮播
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/5/13.
 */
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  PixelRatio,
} from 'react-native'
import Swiper from 'react-native-swiper'
import Dimension from '../common/dimension'
import Advertisement from './advertisement'
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
    this.props.navigator.replace({
      component: Advertisement,
      navigationBarHidden: true,
      passProps: {
        countDownSeconds: 3,
      }
    })
  }

}

const activeDot = (
  <View style={{backgroundColor: '#E20603', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
)

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window')

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
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
  }

})
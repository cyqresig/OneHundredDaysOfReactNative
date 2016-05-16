/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/5/14.
 */

import Swiper from 'react-native-swiper'
import React, {
  Component,
} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native'

import carousel_1 from './images/carousel-1.jpg'
import carousel_2 from './images/carousel-2.jpg'
import carousel_3 from './images/carousel-3.jpg'
import carousel_4 from './images/carousel-4.jpg'
import carousel_5 from './images/carousel-5.jpg'
import carousel_6 from './images/carousel-6.jpg'
import carousel_7 from './images/carousel-7.jpg'

import SplashScreen from '@remobile/react-native-splashscreen'

export default class Main extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {

    return (
      <View style={[styles.stautBarCap, styles.container]}>
        <Swiper height={carouselHeight} autoplay={true} autoplayTimeout={3.5} activeDot={activeDot}>
          <View>
            <Image style={styles.carouselItem} resizeMode={'stretch'} source={carousel_1}></Image>
          </View>
          <View>
            <Image style={styles.carouselItem} resizeMode={'stretch'} source={carousel_2}></Image>
          </View>
          <View>
            <Image style={styles.carouselItem} resizeMode={'stretch'} source={carousel_3}></Image>
          </View>
        </Swiper>
      </View>

    )

  }

}

const activeDot = (
  <View style={{backgroundColor: '#E20603', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
)

const {width: deviceWidth} = Dimensions.get('window')
const carouselHeight = deviceWidth * 9 / 16

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  
  carouselItem: {
    width: deviceWidth,
    height: carouselHeight,
  },

  stautBarCap: {
    marginTop: 20 + 44,
  },


})


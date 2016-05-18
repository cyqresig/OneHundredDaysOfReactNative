/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/5/14.
 */

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'
import React, {
  Component,
} from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Image,
  Dimensions,
  Alert,
  StatusBar,
} from 'react-native'

import carousel_1 from './images/carousel-1.jpg'
import carousel_2 from './images/carousel-2.jpg'
import carousel_3 from './images/carousel-3.jpg'
import carousel_4 from './images/carousel-4.jpg'
import carousel_5 from './images/carousel-5.jpg'
import carousel_6 from './images/carousel-6.jpg'
import carousel_7 from './images/carousel-7.jpg'


//import SplashScreen from '@remobile/react-native-splashscreen'


export default class Main extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      carouselList: [],
    };
  }

  componentWillMount() {

    this.setState({
      carouselList: [
        {
          source: carousel_1
        },
        {
          source: carousel_2
        },
        {
          source: carousel_3
        },
        {
          source: carousel_4
        },
        {
          source: carousel_5
        },
        {
          source: carousel_6
        },
        {
          source: carousel_7
        },
      ],

      days: [
        {
          navTitle: 'day1',
          title: 'Day 1',
          //component: Day1,
          isHideBar: true,
          isFontAwesome: true,
          icon: 'apple',
          size: 48,
          color: '#E5E5E5'
        },
        {
          navTitle: 'day2',
          title: 'Day 2',
          //component: Day2,
          isHideBar: true,
          isFontAwesome: true,
          icon: 'apple',
          size: 48,
          color: '#E5E5E5'
        },
        {
          navTitle: 'day3',
          title: 'Day 3',
          //component: Day3,
          isHideBar: false,
          isFontAwesome: true,
          icon: 'apple',
          size: 48,
          color: '#E5E5E5'
        },
        {
          navTitle: 'day4',
          title: 'Day 4',
          //component: Day1,
          isFontAwesome: true,
          icon: 'apple',
          size: 48,
          color: '#E5E5E5'
        },
        {
          navTitle: 'day5',
          title: 'Day 5',
          //component: Day1,
          isFontAwesome: true,
          icon: 'apple',
          size: 48,
          color: '#E5E5E5'
        },
        {
          navTitle: 'day6',
          title: 'Day 6',
          //component: Day1,
          isFontAwesome: true,
          icon: 'apple',
          size: 48,
          color: '#E5E5E5'
        },
        {
          navTitle: 'day7',
          title: 'Day 6',
          //component: Day1,
          isFontAwesome: true,
          icon: 'apple',
          size: 48,
          color: '#E5E5E5'
        },
        {
          navTitle: 'day8',
          title: 'Day 6',
          //component: Day1,
          isFontAwesome: true,
          icon: 'apple',
          size: 48,
          color: '#E5E5E5'
        },
        {
          navTitle: 'day9',
          title: 'Day 6',
          //component: Day1,
          isFontAwesome: true,
          icon: 'apple',
          size: 48,
          color: '#E5E5E5'
        },
        {
          navTitle: 'day10',
          title: 'Day 6',
          //component: Day1,
          isFontAwesome: true,
          icon: 'apple',
          size: 48,
          color: '#E5E5E5'
        },
        {},
        {},
      ]
    })

  }

  render() {
    let carouselList = this.state.carouselList.map((item, index) => {
      return (
        <TouchableHighlight>
          <View>
            <Image style={styles.carouselItem} resizeMode={'stretch'} source={item.source}></Image>
          </View>
        </TouchableHighlight>

      )
    })

    let dayList = this.state.days.map((item, index, arr) => {
      return (
        <TouchableHighlight underlayColor="#eee" onPress={ this._jumpTo.bind(this, index)}>
          <View style={[styles.speedDialBox, this._getBoxBorderStyle(index, item), ]}>
            {
              item.icon ?
                ( item.isFontAwesome ?
                  <FontAwesome size={item.size} name={item.icon} color={item.color}/> :
                  <Ionicons size={item.size} name={item.icon} color={item.color}/> ) : null
            }
            <Text style={styles.speedDialText}>{item.navTitle}</Text>
          </View>
        </TouchableHighlight>
      )
      //<Image style={styles.boxIcon} source={item.icon}/>
    })

    return (
      <ScrollView style={[styles.stautBarCap, styles.container]}>
        <Swiper height={carouselHeight} autoplay={true} autoplayTimeout={3.5} activeDot={activeDot}>
          {carouselList}
        </Swiper>
        <View style={styles.speedDialWrapper}>
          {dayList}
        </View>
      </ScrollView>
    )

  }


  _getBoxBorderStyle(index, item) {
    return (index % 3 == 2 || !item.navTitle) ? null : styles.boxBorderRight
  }

  _jumpTo(index) {
    if(this.state.days[index].component) {
      this.props.navigator.push({
        title: this.state.days[index].title,
        component: this.state.days[index].component,
        navigationBarHidden: this.state.days[index].isHideBar
      })
    }
    else {
      Alert.alert(
        '提示信息',
        this.state.days[index].title,
        []
      )
    }
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
    backgroundColor: '#F4F4F4',
  },

  carouselItem: {
    width: deviceWidth,
    height: carouselHeight,
  },

  stautBarCap: {
    //marginTop: 20 + 44,  //View
    marginTop: 0,  //scrollView不需要留出额外高度?
    //marginTop: -64,   //有效, 做下拉刷新时会有用?
  },


  speedDialWrapper: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor:"#ccc",
  },

  speedDialBox: {
    width: deviceWidth / 3,
    height: deviceWidth / 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },

  speedDialText: {
    fontSize: 16,
    padding: 3,
  },

  //boxBorderLeft: {
  //  //borderBottomWidth: StyleSheet.hairlineWidth,
  //  //borderBottomColor: '#F4F4F4',
  //  borderLeftWidth: StyleSheet.hairlineWidth,
  //  borderLeftColor: '#F4F4F4',
  //},


  boxBorderRight: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#ccc',
  },



})


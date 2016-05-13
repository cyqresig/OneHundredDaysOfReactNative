/**
 * @fileOverview 进入首页前的植入广告
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/5/13.
 */

import React, {
  Component,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import Dimension from '../common/dimension'
import advertisement from './images/advertisement.jpg'

export default class Advertisement extends Component {

  // 构造
  constructor(props) {
    super(props)
    // 初始状态
    this.state = {
      countdown: 3,
    }
    this.countdownTimer = null
  }

  componentDidMount () {
      this.countdownTimer = setInterval( () => {
        let countdown = this.state.countdown - 1
        if(countdown == 0) {
          clearInterval(this.countdownTimer)
          alert('进入首页')
          return
        }
        this.setState({
          countdown: countdown,
        })
      }, 1000)
  }

  componentWillUnMount () {
    if(this.countdownTimer != null) {
      clearInterval(this.countdownTimer)
    }
  }

  render() {

    return (
      <View class={styles.container}>
        <Image style={styles.advertisement} resizeMode={'stretch'} source={advertisement}>
            <Text style={styles.countdownText}>
              跳过
              <Text style={styles.countdownNum}>
                {this.state.countdown}
              </Text>
            </Text>
        </Image>
      </View>
    )

  }

}

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window')

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  advertisement: {
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 20,
    paddingRight: 20,
  },

  countdownText: {
    borderRadius: 6,
    fontSize: 12,
    color: '#fff',
    padding: 6,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    //borderWidth: Dimension.pixel,
    //borderColor: '#fff',
  },

  countdownNum: {
    color: 'red',
    backgroundColor: 'transparent',
  }

})
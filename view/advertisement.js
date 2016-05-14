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
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  Navigator,
} from 'react-native'
import Dimension from '../common/dimension'
import advertisement from './images/advertisement.jpg'

let hideAdvertisementAnimation = null

export default class Advertisement extends Component {

  static defaultProps = {
    onCountDownEnd() {
        this.setState({
          show: false,
        })
    },
  }  // 注意这里有分号

  static propTypes = {
    onCountDownEnd: React.PropTypes.func.isRequired,
    countDownSeconds: React.PropTypes.number.isRequired,
  }

  // 构造
  constructor(props) {
    super(props)
    // 初始状态
    this.state = {
      show: true,
      countdown: props.countDownSeconds || 3,
      transformAnim: new Animated.Value(1),
      opacityAnim: new Animated.Value(1),
    }
    this.countdownTimer = null
  }

  componentDidMount () {

      this.countdownTimer = setInterval( () => {
        let countdown = this.state.countdown - 1
        if(countdown == 0) {
          clearInterval(this.countdownTimer)
          this._hideAdvertisement()
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
      this.state.show ?
        <View class={[styles.container]}>
          <Animated.Image style={[styles.advertisement, {opacity:this.state.opacityAnim}]} resizeMode={'stretch'} source={advertisement}>
            <TouchableHighlight style={styles.coundownWrapper} onPress={this._hideAdvertisement}>
                <View style={styles.coundownWrapper}>
                  <Text style={[styles.coundownText, styles.coundownTitle]}>
                    跳过
                  </Text>
                  <Text style={[styles.coundownText,styles.countdownNum]}>
                    {this.state.countdown}
                  </Text>
                </View>
            </TouchableHighlight>
          </Animated.Image>
        </View> : null
    )

  }

  _hideAdvertisement = () => {
    if(hideAdvertisementAnimation) {
      hideAdvertisementAnimation.stop()
    }
    hideAdvertisementAnimation = Animated.timing(
      this.state.opacityAnim,
      {toValue: 0,
        duration: 510,
        easing: Easing.elastic(1),
        //delay: delay,
      }
    )
    hideAdvertisementAnimation.start( this.props.onCountDownEnd.bind(this) )

  }

}

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window')

const styles = StyleSheet.create({

  container: {
    flex: 1,
    position: "absolute", //没有z-index, 这个组件View得放在最后才能保证遮住其他View
    top:0,
    left:0,
  },

  advertisement: {
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 20,
    paddingRight: 20,
  },

  coundownWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 6,
    width: 50,
    height: 24,
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },

  coundownText: {
    lineHeight: 18,
    fontSize: 12,
    color: '#fff',
  },

  coundownTitle: {
    paddingLeft: 6,
    color: '#fff',
  },

  countdownNum: {
    lineHeight: 19,
    paddingLeft: 6,
    color: 'red',
  }

})
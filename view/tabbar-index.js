/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/5/16.
 */
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, {
  Component,
} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native'

import Main from './main'
import Advertisement from './advertisement'
import Features from './features'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'

export default class TabBarIndex extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isJumpToIndex: false,
      isFirstEntrance: false,
      isShowAd: false,
      opacity: 0,
      selectedTab: 'index',
    };
  }

  componentWillMount () {
    //@todo 获取本地缓存
    let firstEntrance = true

    this.setState({
      isFirstEntrance: firstEntrance,
    })

  }

  componentDidMount () {

    //@todo 获取远程数据, 选一种可用的组件间通信方式进行传值, 并操作

    RCTDeviceEventEmitter.addListener('jumpToIndex.tabbar-index', () => {
      this.setState({
        isJumpToIndex: true,
      })
    })

    setTimeout( () => {
      this.setState({
        opacity: 1
      })
    }, 100)
  }

  render() {
    let index = this.state.isJumpToIndex ?
      <TabBarIOS style={{opacity: this.state.opacity,}} tintColor={'red'} barTintColor={'rgba(255, 255, 255, .8)'}>
        <Ionicons.TabBarItemIOS
          iconName={"ios-home-outline"}
          iconSize={28}
          title={'首页'}
          selected={this.state.selectedTab === 'index'}
          onPress={() => {
              this.setState({
                selectedTab: 'index'
              })
            }}>
          <NavigatorIOS style={styles.container}
                        initialRoute={{
                      component: Main,
                      title: '100 Days of RN',
                      //navigationBarHidden: true,
                    }}
          />
        </Ionicons.TabBarItemIOS>
        <Ionicons.TabBarItemIOS
          iconName={"ios-home-outline"}
          iconSize={28}
          title={'首页2'}
          selected={this.state.selectedTab === 'index2'}
          onPress={() => {
              this.setState({
                selectedTab: 'index2'
              })
            }}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <Text>index2</Text>
          </View>

        </Ionicons.TabBarItemIOS>
      </TabBarIOS> : null

    let appInfo = this.state.isFirstEntrance ?
                  <Features/> : <Advertisement countDownSeconds={2}></Advertisement>
    return (
      <View style={styles.container}>
        {index}
        {appInfo}
      </View>
    )
    //@todo 最佳的方式, 将features与advertisement平级放在tabbarindex中, 而不再将advertisement放在features中, 不利于解耦
  }



}

const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
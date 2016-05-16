/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/5/14.
 */

import React, {
  Component,
} from 'react'
import {
  StyleSheet,
  NavigatorIOS,
} from 'react-native'

import Main from './main'


export default class Index extends Component {

  render() {
    return (
      <NavigatorIOS style={styles.container}
                      initialRoute={{
          component: Main,
          title: '100 Days of RN',
          //navigationBarHidden: true,
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
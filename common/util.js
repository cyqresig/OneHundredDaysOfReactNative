/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/5/13.
 */

import React, {
  PixelRatio,
  Dimensions,
} from 'react-native'


let ratio = PixelRatio.get(),
    pixel = 1 / ratio,
  {width: deviceWidth, height: deviceHeight} = Dimensions.get('window')

const Util = {
  formUrlEnCode(data) {
    let params = []
    data.keys.forEach( (key, index) => {
      params[index] = key + '=' + data[key]
    })
    return params.join('&')
  }
}

export default Util

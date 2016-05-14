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
  pixel = 1 / ratio

const Dimension = {
  ratio: ratio,
  pixel: pixel, //废弃, 用StyleSheet.hairLineWidth代替
}

export default Dimension

/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/5/13.
 */


import Util from './util'

const Http = {

  post(url, data, callback) {
    const fetchOptions = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        //'Content-Type': 'application/json'
        "Content-Type": "application/x-www-form-urlencoded"
      },
      //body: JSON.stringify(data),
      body: Util.formUrlEnCode(data),
      timeout: 60,
    }

    fetch(url, fetchOptions)
      .then( (response) => {
        return response.json()
      }, (e) => {
        console.log("Fetch failed!", e);  //@todo根据情况显示网络错误信息?
      })
      .then( (responseData) => {
        callback(responseData)
      })
  },
  get(url, callback) {
    const fetchOptions = {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        //'Content-Type': 'application/json'
        "Content-Type": "application/x-www-form-urlencoded"
      },
      timeout: 60,
    };

    fetch(url, fetchOptions)
    .then( (response) => {
        return response.json()
    }, (e) => {
      console.log("Fetch failed!", e);  //@todo根据情况显示网络错误信息?
    })
    .then( (responseData) => {
        callback(responseData)
    })
  },

}
/**
 * @Author: lclangcheng
 * @Date:   2018-07-11 17:18:38
 * @Email:  lclangcheng@gmail.com
 * @Filename: request.js
 * @Last modified by:   lclangcheng
 * @Last modified time: 2018-09-26 16:16:49
 * @License: jin10
 * @Copyright: jin10
 */
'use strict'

const rp = require('request-promise')

class Rp {
  // var options = {
  //   uri: 'https://api.github.com/user/repos',
  //   qs: {
  //     access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
  //   },
  //   headers: {
  //     'User-Agent': 'Request-Promise'
  //   },
  //   json: true // Automatically parses the JSON string in the response
  // }
  get (options = {}) {
    const data = new Promise(function (resolve, reject) {
      rp(options)
        .then(function (data) {
          resolve(data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
    return data
  }

  // var options = {
  //   method: 'POST',
  //   uri: 'http://api.posttestserver.com/post',
  //   body: {
  //       some: 'payload'
  //   },
  //   json: true // Automatically stringifies the body to JSON
  // };
  post (options = {}) {
    const data = new Promise(function (resolve, reject) {
      rp(options)
        .then(function (data) {
          resolve(data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
    return data
  }
}

module.exports = new Rp()

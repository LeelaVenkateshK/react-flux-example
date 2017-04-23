/**
 * Created by WS33 on 4/19/2017.
 */
'use strict';

let http = require('http');

let services = {
  get(url, callback){
    http.get(url, this.logData);
    callback();
  },
  post(options, callback) {
    http.request(options, callback);
  },
  logData(response){
    // Continuously update stream with data
    let body = '';
    response.on('data', function (d) {
      body += d;
    });
    response.on('end', function () {

      // Data reception is done, do whatever with it!
      console.log(body)
      var parsed = JSON.stringify(body);
      console.log(parsed);
    });
  }
};
module.exports = services;
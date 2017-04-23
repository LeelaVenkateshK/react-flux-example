'use strict';
import http from 'http';

import axios from 'axios';

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
      console.log(body);
      var parsed = JSON.stringify(body);
      console.log(parsed);
    });
  }, getUsingAxios(url, callback){
    axios.get(url)
      .then(this.logData)
      // .then(callback)
      .catch(error =>
        console.error('Encountered errors:: ' + error
        ));
  }
};
export default  services;
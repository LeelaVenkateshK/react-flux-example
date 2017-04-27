'use strict';
import axios from 'axios';

let services = {
  logData(response){
    // Data reception is done, do whatever with it!
    // As we are using axios it call this function after the data is received so
    // All we need to do is extract and use :)
    var parsed = JSON.stringify(response.data);
    console.log(parsed);
  },
  getUsingAxios(url, callback){
    return axios.get(url)
      .then(callback)
      .catch(error =>
        console.error('Encountered errors:: ' + error)
      );
  }
};
export default  services;
'use strict';
import axios from 'axios';
import config from './../constants/config';

axios.default.baseUrl = config.server.url + ':' + config.server.port;
axios.default.timeout = 10000;
axios.default.maxContentLength = 10000;
axios.default.validateStatus = function (status) {
  return status >= 200 && status < 300; // default
};
let services = {
  request(config) {
    return axios.request(config);
  },
  getUsingAxios(url, callback) {
    let resp = this.request({url: url ? url : '/'});
    resp.then(callback);
    console.log(typeof(resp));
    return resp;
  },
  deleteDocument(documentId){
    axios.delete(documentId);
  },
  createDocument(path, documentObj){
    axios.post(path, documentObj);
    let createDocConfigObj = {};
    axios.request(createDocConfigObj);
  }
};
export default services;

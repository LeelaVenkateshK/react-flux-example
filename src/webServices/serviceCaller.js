/**
 * Created by WS33 on 4/19/2017.
 */
'use strict';

import { http } from 'http';

let services = {
  get(url, callback){
    http.get(url, callback);
  }
};
export default services;
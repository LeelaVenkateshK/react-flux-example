/**
 * Created by WS33 on 4/19/2017.
 */
'use strict';
import constants from './config';
let url = constants.server.url+':'+constants.server.port;
module.exports = {
  USER_LOGIN: url+'/user/login-page',
  USER_REGISTER: url+'/user/registration-page'
};
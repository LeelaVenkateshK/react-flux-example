/**
 * Created by WS33 on 4/19/2017.
 */
'use strict';
let Dispatcher = require('../dispatcher/dispatcher');
let ActionTypes = require('../constants/actionTypes');

let LoginActions = {
  loginUser(user){
    Dispatcher.dispatch({
      actionType: ActionTypes.USER_LOGIN,
      user: user
    });
  }
};
module.exports = LoginActions;
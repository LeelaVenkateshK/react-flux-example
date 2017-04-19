/**
 * Created by WS33 on 4/19/2017.
 */
'use strict';
import { EventEmitter } from 'events';

import serviceEndPoints from './../constants/serviceEndPoints';
import services from './../webServices/serviceCaller';
import ActionTypes from './../constants/actionTypes';
import Dispatcher from './../dispatcher/dispatcher';

let CHANGE_EVENT = 'change';
let LoginStore = Object.assign({}, EventEmitter, {
  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  },
  emitChange(){
    this.emit(CHANGE_EVENT);
  }
});

Dispatcher.register(function (action) {
  switch (action) {
    case ActionTypes.USER_LOGIN:
      services.get(serviceEndPoints.USER_LOGIN);
      LoginStore.emitChange();
      break;
  }
});
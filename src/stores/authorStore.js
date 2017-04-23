/**
 * Created by WS33 on 4/10/2017.
 */
'use strict';
import { EventEmitter } from 'events';

import _ from 'lodash';

import AppDispatcher from '../dispatcher/dispatcher';
import ActionTypes from '../constants/actionTypes';
import AuthorApi from './../api/AuthorApi';
import services from './../webServices/web-services';
import serviceEndPoints from './../constants/serviceEndPoints';

let CHANGE_EVENT = 'change';

var _authors = [];
let AuthorStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  },
  emitChange(){
    this.emit(CHANGE_EVENT);
  },
  getAllAuthors(){
    if (_authors.length === 0) {
      _authors = AuthorApi.getAllAuthors();
    }
    return _authors;
  },
  getAuthorById(id){
    return _.find(_authors, {id: id});
  },
  connTest(){
    console.log('connection test');
  }
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case ActionTypes.CREATE_AUTHOR :
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.TEST:
      services.getUsingAxios(serviceEndPoints.TEST, AuthorStore.connTest.bind(this));
      break;
  }
});

export default  AuthorStore;
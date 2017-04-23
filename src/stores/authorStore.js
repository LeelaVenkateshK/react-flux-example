/**
 * Created by WS33 on 4/10/2017.
 */
'use strict';
let _ = require('lodash');

let AppDispatcher = require('../dispatcher/dispatcher');
let ActionTypes = require('../constants/actionTypes');
let EventEmitter = require('events').EventEmitter;
let AuthorApi = require('./../api/AuthorApi');
let services = require('./../webServices/web-services');
let serviceEndPoints = require('./../constants/serviceEndPoints');

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
      services.get(serviceEndPoints.TEST,AuthorStore.connTest.bind(this));
      break;
  }
});

module.exports = AuthorStore;
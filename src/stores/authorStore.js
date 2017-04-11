/**
 * Created by WS33 on 4/10/2017.
 */
'use strict';
let _ = require('lodash');

let AppDispatcher = require('../dispatcher/appDispatcher');
let ActionTypes = require('../constants/actionTypes');
let EventEmitter = require('events').EventEmitter;

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
    return _authors;
  },
  getAuthorById(id){
    return _.find(_authors, {id: id});
  }
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case ActionTypes.CREATE_AUTHOR :
      _authors.push(action.author);
      AuthorStore.emitChange();
  }
});

module.exports = AuthorStore;
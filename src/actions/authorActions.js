/**
 * Created by WS33 on 4/10/2017.
 */
'use strict';
let Dispatcher = require('../dispatcher/dispatcher');
let ActionTypes = require('../constants/actionTypes');
let AuthorActions = {
  createAuthor(author) {
    //Dispatches an event to all stores that a new createAuthor is triggered
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: author
    });
  },
  getAllAuthors(){
    Dispatcher.dispatch({
      actionType:ActionTypes.GET_AUTHORS
    });
  },
  testConnection(){
    Dispatcher.dispatch({
      actionType:ActionTypes.TEST
    });

  }
};

module.exports = AuthorActions;
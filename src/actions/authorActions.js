'use strict';
import Dispatcher from '../dispatcher/dispatcher';
import ActionTypes from '../constants/actionTypes';
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
      actionType: ActionTypes.GET_AUTHORS
    });
  },
  testConnection(){
    Dispatcher.dispatch({
      actionType: ActionTypes.TEST
    });

  }
};

export default AuthorActions;
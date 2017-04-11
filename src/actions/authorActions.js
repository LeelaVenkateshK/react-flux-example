/**
 * Created by WS33 on 4/10/2017.
 */
let AppDispatcher = require('../dispatcher/appDispatcher');
let ActionTypes = require('../constants/actionTypes');
let AuthorActions = {
  createAuthor(author) {
    // var newAuthor = author;

    //Dispatches an event to all stores that a new createAuthor is triggered
    AppDispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: author
    });
  }
};

module.exports = AuthorActions;
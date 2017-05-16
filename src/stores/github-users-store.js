'use strict';
import { EventEmitter } from "events";

import AppDispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action-types";

let CHANGE_EVENT = 'change';
var _users = [];
let GitHubUserStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    }, _getUsers() {
        return _users;
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.GET_GITHUB_USERS:
            if (!action.error)
                _users = action.data;
            else {
                _users = [];
            }
            GitHubUserStore.emitChange();
            break;
    }
});

export default GitHubUserStore;


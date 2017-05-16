'use strict';
import Dispatcher from "../dispatcher/dispatcher";

import serviceEndPoints from "./../constants/service-end-points";
import ActionTypes from "../constants/action-types";
import services from "./../web-services/web-services";

let GithubGetUsersAction = {
    getAllUsers(){
        let promise = services.getUsingAxios(serviceEndPoints.GITHUB_USERS);
        promise.then(success => {
            Dispatcher.dispatch({
                actionType: ActionTypes.GET_GITHUB_USERS,
                data: success.data
            });
        })
            .catch(error => {
                Dispatcher.dispatch({
                    actionType: ActionTypes.GET_GITHUB_USERS,
                    error: error,
                    data: {}
                });
            });
    }
};

export default GithubGetUsersAction;

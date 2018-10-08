import * as types from '../constants/ActionTypes';

const users = (state = [], action) => {
    switch (action.type) {
        case types.USER_LOGGED_ON:
            return state.concat([{username: action.username, socketId: action.socketId}]);
        case types.LIST_USERS:
            return action.users;
        default:
            return state;
    }
};

export default users;
import * as types from '../constants/ActionTypes';

export const userLoggedOn = (username, socketId) => ({
    type: types.USER_LOGGED_ON,
    username: username,
    socketId: socketId,
    logOnTime: '',
    logOutTime: ''
});

export const populateUserList = users => ({
    type: types.LIST_USERS,
    users
});
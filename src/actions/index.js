import * as types from '../constants/ActionTypes';

export const userLoggedOn = id => ({
    type: types.USER_LOGGED_ON,
    id: id,
    logOnTime: Date.now().toString(),
    logOutTime: ''
});

export const populateUserList = users => ({
    type: types.LIST_USERS,
    users
});

export const keyPressReceived = key => ({
    type: types.KEYPRESS_RECEIVED,
    key
});
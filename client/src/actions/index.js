import * as types from '../constants/ActionTypes';

export const userLoggedOn = id => ({
    type: types.USER_LOGGED_ON,
    id: id,
    logOnTime: Date.now().toString()
});

export const populateUserList = users => ({
    type: types.LIST_USERS,
    users
});

export const keyPressReceived = key => ({
    type: types.KEYPRESS_RECEIVED,
    key
});

export const sendKeyPress = key => ({
    type: types.SEND_KEY_PRESS,
    key
});

export const fetchSpeakerPhotos = photos => ({
    type: types.FETCH_SPEAKER_PHOTOS,
    photos
});
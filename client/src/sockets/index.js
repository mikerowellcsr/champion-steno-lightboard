import * as types from '../constants/ActionTypes';
import {userLoggedOn, populateUserList, keyPressReceived } from '../actions';
const HOST = window.location.origin.replace(/^http/, 'ws');

const setupSocket = (dispatch, id) => {
    const socket = new WebSocket(HOST);

    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: types.USER_LOGGED_ON,
            id: id,
            logOnTime: Date.now().toString()
        }));
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        switch (data.type) {
            case types.USER_LOGGED_ON:
                dispatch(userLoggedOn(data.id));
                break;
            case types.LIST_USERS:
                dispatch(populateUserList(data.users));
                break;
            case types.SEND_KEY_PRESS:
                dispatch(keyPressReceived(data.key));
                console.log(data);
                break;
            default:
                break;
        }
    };

    return socket;
};

export default setupSocket;
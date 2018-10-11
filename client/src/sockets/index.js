import * as types from '../constants/ActionTypes';
import {userLoggedOn, populateUserList, keyPressReceived } from '../actions';
import Uuid from 'uuid/v4';
const HOST = process.env.REACT_APP_ENV === 'dev' ? 'ws://localhost:8000' : window.location.origin.replace(/^http/, 'ws');

const setupSocket = (dispatch, id) => {
    let userId;
    const socket = new WebSocket(HOST);

    socket.onopen = () => {
        userId = Uuid();

        socket.send(JSON.stringify({
            type: types.USER_LOGGED_ON,
            id: userId,
            username: id,
            logOnTime: new Date()
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

    socket.onclose = () => {
        socket.send(JSON.stringify({
            type: types.USER_LOGGED_OFF,
            id: userId,
            logOnTime: Date.now().toString()
        }));
    };

    return socket;
};

export default setupSocket;
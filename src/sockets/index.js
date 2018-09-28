import * as types from '../constants/ActionTypes';
import { userLoggedOn, populateUserList } from '../actions';

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://localhost:8989');

    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: types.USER_LOGGED_ON,
            username: username
        }));
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        switch (data.type) {
            case types.USER_LOGGED_ON:
                dispatch(userLoggedOn(data.username, data));
                break;
            case types.LIST_USERS:
                dispatch(populateUserList(data.users));
                break;
            default:
                break;
        }
    };
    return socket;
};

export default setupSocket;
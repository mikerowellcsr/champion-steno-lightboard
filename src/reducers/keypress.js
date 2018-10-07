import * as types from '../constants/ActionTypes';

const keyPressReceived = (state = [], action) => {
    switch (action.type) {
        case types.SEND_KEY_PRESS:

        case types.KEYPRESS_RECEIVED:
            return {
                type: action.type,
                 key: action.key
            };
        default:
            return state;
    }

};

export default keyPressReceived;
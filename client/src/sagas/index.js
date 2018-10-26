import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

const handleKeyPress = function* handleKeyPress(params){
    yield takeEvery(types.SEND_KEY_PRESS, action => {
        params.socket.send(JSON.stringify(action));
    });
};

export default handleKeyPress;
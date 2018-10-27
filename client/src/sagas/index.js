import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes;

const rootSaga = function* rootSaga(params) {
    yield takeEvery(types.SEND_KEY_PRESS, action => {
        params.socket.send(JSON.stringify(action));
    });
};

export default rootSaga;

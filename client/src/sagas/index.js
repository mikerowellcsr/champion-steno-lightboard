import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

const rootSaga = function* rootSaga(params) {
    yield takeEvery(types.SEND_KEY_PRESS, action => {
        params.socket.send(JSON.stringify(action));
    });
};

<<<<<<< HEAD:client/src/sagas/index.js
export default rootSaga;
=======
export default rootSaga;
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c:client/src/sagas/index.js

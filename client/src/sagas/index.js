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
>>>>>>> 4d868ab3361478130b221ae053c1fb25cba6568d:client/src/sagas/index.js

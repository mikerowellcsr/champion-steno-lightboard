import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
    users: {},
};

const applySetUsers = (state, action) => ({
    ...state,
    users: action.users
});

const applySetPref = (state, action) => ({
    ...state,
    payload: action.payload
});

function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.USERS_SET: {
            return applySetUsers(state, action);
        }
        case types.USER_SET_PREF: {
            return applySetPref(state, action);
        }
        default:
            return state;
    }
}

export default userReducer;
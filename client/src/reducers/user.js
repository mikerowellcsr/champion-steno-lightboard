import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
    users: {},
};

const applySetUsers = (state, action) => ({
    ...state,
    users: action.users
});

function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.USERS_SET: {
            return applySetUsers(state, action);
        }
        case types.FETCH_USER_SETTINGS: {
            return action.payload;
        }
        default:
            return state;
    }
}

export default userReducer;
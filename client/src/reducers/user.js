const INITIAL_STATE = {
    users: {},
};

const applySetUsers = (state, action) => ({
    ...state,
    users: action.users
});

function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'USERS_SET' : {
            return applySetUsers(state, action);
        }
        case 'FETCH_SPEAKER_PHOTOS':
            return action.payload;
        default : return state;
    }
}

export default userReducer;
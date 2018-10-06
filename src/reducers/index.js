import { combineReducers } from 'redux';
import users from './users';
import sessionReducer from './session';
import userReducer from './user';
import keyPress from './keypress';

const lightboard = combineReducers({
    users,
    keyPress,
    sessionState: sessionReducer,
    userState: userReducer
});

export default lightboard;
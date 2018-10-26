import { combineReducers } from 'redux';
import users from './users';
import sessionReducer from './session';
import userReducer from './user';
import keyPress from './keypress';
import speakerPhotos from './speakerphotos';

const lightboard = combineReducers({
    users,
    keyPress,
    sessionState: sessionReducer,
    photos: speakerPhotos,
    userState: userReducer
});

export default lightboard;
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const prodConfig = {
    apiKey: "AIzaSyCSPKBqKWrXZNLUOaSGpKngQN-oLRvVa5Y",
    authDomain: "champion-steno-lightboar-69950.firebaseapp.com",
    databaseURL: "https://champion-steno-lightboar-69950.firebaseio.com",
    projectId: "champion-steno-lightboar-69950",
    storageBucket: "champion-steno-lightboar-69950.appspot.com",
    messagingSenderId: "161030836465"
};

const devConfig = {
    apiKey: "AIzaSyAGCk6JIU2QaFkgZpdcZ5QN3L7vDHHST0A",
    authDomain: "champion-steno-lightboard-dev.firebaseapp.com",
    databaseURL: "https://champion-steno-lightboard-dev.firebaseio.com",
    projectId: "champion-steno-lightboard-dev",
    storageBucket: "champion-steno-lightboard-dev.appspot.com",
    messagingSenderId: "977605475668"
};

const config = process.env.REACT_APP_ENV === 'dev'
    ? devConfig
    : prodConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

export {
    auth,
    db,
    storage
};
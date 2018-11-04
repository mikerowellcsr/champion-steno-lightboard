// Firebase settings example.
// Be sure to fill in with your Firebase values
// And rename file to "firebase.js" before building.

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const prodConfig = {
    apiKey: "xxxxxxxxxxxx",
    authDomain: "YOUR_PROJECT_NAME.firebaseapp.com",
    databaseURL: " YOUR_PROJECT_NAME.firebaseio.com",
    projectId: " YOUR_PROJECT_NAME",
    storageBucket: " YOUR_PROJECT_NAME.appspot.com",
    messagingSenderId: "000000000000"
};

const devConfig = {
    apiKey: "xxxxxxxxxxxx",
    authDomain: "YOUR_PROJECT_NAME.firebaseapp.com",
    databaseURL: " YOUR_PROJECT_NAME.firebaseio.com",
    projectId: " YOUR_PROJECT_NAME",
    storageBucket: " YOUR_PROJECT_NAME.appspot.com",
    messagingSenderId: "000000000000"
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
// Firebase settings example.
// Be sure to fill in with your Firebase values
// And rename file to "devconfig.js" before building.

let devConfig;

if (process.env.REACT_APP_ENV) {
    devConfig = {
        apiKey: "AIzaSyAGCk6JIU2QaFkgZpdcZ5QN3L7vDHHST0A",
        authDomain: "champion-steno-lightboard-dev.firebaseapp.com",
        databaseURL: "https://champion-steno-lightboard-dev.firebaseio.com",
        projectId: "champion-steno-lightboard-dev",
        storageBucket: "champion-steno-lightboard-dev.appspot.com",
        messagingSenderId: "977605475668"
    };
} else {
    devConfig = {};
}

export default devConfig;
// Firebase settings example.
// Be sure to fill in with your Firebase values
// And rename file to "devconfig.js" before building.

let devConfig;

if (process.env.REACT_APP_ENV) {
    devConfig = {
        apiKey: "xxxxxxxxxxxx",
        authDomain: "YOUR_PROJECT_NAME.firebaseapp.com",
        databaseURL: " YOUR_PROJECT_NAME.firebaseio.com",
        projectId: " YOUR_PROJECT_NAME",
        storageBucket: " YOUR_PROJECT_NAME.appspot.com",
        messagingSenderId: "000000000000"
    };
} else {
    devConfig = {};
}

export default devConfig;
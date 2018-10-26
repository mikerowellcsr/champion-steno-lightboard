// User API

import { db } from './firebase';

export const doCreateUser = (id, email, firstname, lastname) =>
    db.ref(`users/${id}`).set({
        email,
        firstname,
        lastname
    });

export const onceGetUsers = () =>
    db.ref(`users`).once(`value`);

export const fetchUserSettings = id => async dispatch =>
    db.ref(`users/${id}`).child(`settings`).on(`value`, snapshot => {
        dispatch({
            type: 'FETCH_USER_SETTINGS',
            payload: snapshot.val()
        })
    });

export const setUserSettings = (id, data) =>
    db.ref(`users/${id}`).child(`settings`).update(data);


// export const removeUserSettings = (id, setting) => async dispatch =>
//     db.ref(`users/${id}`).child('settings').child(setting).remove();

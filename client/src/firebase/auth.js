// Authentication API

import { auth } from './firebase';

// Sign-up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

export const assignNameToUser = (name) =>
    auth.currentUser.updateProfile({
        displayName: `${name.first} ${name.last}`,
        photoURL: ''
    })
        .then(() => {
            console.log('Success!');
        })
        .catch((err) => console.error(`There was an error saving the name: ${err}`));

// Sign-in
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign-out
export const doSignOut = () =>
    auth.signOut();

// Password reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Password update
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);
import { auth } from './firebase';

// Sign-up
export const doCreateUserWithEmailAndPassword = (email, password, name) =>
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            auth.currentUser.updateProfile({
                displayName: `${name.first} ${name.last}`,
                photoURL: ''
            })
                .then(() => console.log('Success!'))
                .catch((err) => console.error(`There was an error saving the name: ${err}`));
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
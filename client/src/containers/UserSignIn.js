import { connect } from 'react-redux';
import UserSignInComponent from '../components/elements/UserSignInComponent';
import { userLoggedOn } from '../actions';

const mapDispatchToProps = dispatch => ({
    dispatch: (username, socketId) => {
        dispatch(userLoggedOn(username, socketId));
    }
});

const mapStateToProps = state => ({
    keyPress: state.keyPress.key,
    photos: state.photos,
    users: state.users
});

export const UserSignIn = connect(mapStateToProps, mapDispatchToProps)(UserSignInComponent);
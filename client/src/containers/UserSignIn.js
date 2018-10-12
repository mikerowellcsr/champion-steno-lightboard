import { connect } from 'react-redux';
import UserSignInComponent from '../components/elements/UserSignInComponent';
import { userLoggedOn } from '../actions';

const mapDispatchToProps = dispatch => ({
    dispatch: (username, socketId) => {
        dispatch(userLoggedOn(username, socketId));
    }
});

export const UserSignIn = connect((state) => ({users: state.users}), mapDispatchToProps)(UserSignInComponent);
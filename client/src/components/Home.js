import React, { Component } from 'react';
import withAuthorization from './withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { db } from '../firebase';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    componentDidMount() {
        const { onSetUsers } = this.props;

        db.onceGetUsers().then(snapshot =>
            onSetUsers(snapshot.val())
        );
    }

    handleSetPref(uid, pref) {
        db.setPref(uid, pref).then(snapshot => {
            this.userSetPref(snapshot.val());
        });
    }

    render() {
        const { authUser, users } = this.props;

        const setPref = (e) => {
            e.preventDefault();
            console.log(authUser.uid);
            this.handleSetPref(authUser.uid, 'hi');
        };

        return (
            <div>
                <h1>Home</h1>
                <p>The Home Page is accessible by every signed in user.</p>
                {
                    !!users && <UserList users={users} authUser={authUser} />
                }
                <form onSubmit={setPref}>
                    <button>hello</button>
                </form>
                {!!authUser && <div>{authUser.displayName}</div>}
            </div>
        );
    }
}

const UserList = ({ authUser, users }) =>
    <div>
        <h2>List of Usernames</h2>
        <p>(Saved on sign-up in Firebase.)</p>
        {
            Object.keys(users).map(key =>
                <div key={key}>{users[key].email}</div>
            )
        }
        {/*{!!authUser && <div>{users[authUser.uid]}</div>}*/}
    </div>;

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
    users: state.userState.users
});

const mapDispatchToProps = dispatch => ({
    onSetUsers: (users) => dispatch({
        type: 'USERS_SET',
        users
    }),
    userSetPref: (pref) => dispatch({
        type: 'USER_SET_PREF',
        pref
    })
});

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
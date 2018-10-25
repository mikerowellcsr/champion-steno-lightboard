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

        db.fetchUserSettings(this.props.authUser.uid);
    }

    render() {
        const { authUser, users, setting } = this.props;

        const handleSetUserSettings = (e) => {
            e.preventDefault();
            db.setUserSettings(authUser.uid, {whatup: `yo`});
        };

        console.log(this.props.userObject);

        return (
            <div>
                <h1>Home</h1>
                <p>The Home Page is accessible by every signed in user.</p>
                {
                    !!users && <UserList users={users} authUser={authUser} />
                }
                <form onSubmit={handleSetUserSettings}>
                    <button>hello</button>
                </form>
                {!!authUser && <div>{authUser.displayName}</div>}
            </div>
        );
    }
}

const UserList = ({ authUser, users, userState }) =>
    <div>
        <h2>List of Usernames</h2>
        <p>(Saved on sign-up in Firebase.)</p>
        {
            Object.keys(users).map(key =>
                <div key={key}>{users[key].email}</div>
            )
        }
        {!!userState && userState.map(thing => {
            <div key={thing.key}>{thing.key}{thing.value}</div>
        })}
    </div>;

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
    users: state.userState.users,
    userObject: !!state.userState.users[state.sessionState.authUser.uid] && state.userState.users[state.sessionState.authUser.uid].settings
});

const mapDispatchToProps = dispatch => {
    return {
        onSetUsers: users => dispatch({
            type: 'USERS_SET',
            users
        })
    }
};

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
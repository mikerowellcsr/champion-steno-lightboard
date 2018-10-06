import React, { Component } from 'react';
import { UserSignIn } from '../containers/UserSignIn';
import { UserList } from '../containers/UserList';

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            registered: false,
            users: []
        };
    }

    componentDidMount() {
        const { store } = this.props;
    }

    render() {
        const props = this.props;
        const { store } = props.store;

        return (
            <div>
                <UserSignIn />
                <UserList />
            </div>
        );
    }
}

export default LandingPage;
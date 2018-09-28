import { connect } from 'react-redux';
import UserListComponent from '../components/elements/UserListComponent';

export const UserList = connect(state => ({
    users: state.users
}), {})(UserListComponent);
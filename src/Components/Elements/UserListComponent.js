import React from 'react';
import PropTypes from 'prop-types';

const UserListComponent =({ users }) => (
    <aside id="sidebar" className="sidebar">
        <ul>
            {users.map(user => (
                <li key={user.username}>{user.username}</li>
            ))}
        </ul>
    </aside>
);

UserListComponent.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            socketId: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default UserListComponent;
import React from 'react';
import {
    Badge,
    Table
} from 'reactstrap';

function convertTimestamp(timestamp) {
    const date = new Date(timestamp);
    const convertedDateTime = {
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString()
    };

    return `${convertedDateTime.date}, ${convertedDateTime.time}`;
}

const UserListComponent =({ users }) => (
    <div>
        <h1>
            Attendance <Badge color="success" pill>{ users && users.length > 1 ? users.length - 1 : '' }</Badge>
        </h1>
        <Table
            responsive
            borderless
            className="user-list__active-users">
            <thead>
            <tr>
                <th>Name</th>
                <th>Log-On Time</th>
            </tr>
            </thead>
            <tbody>
            {
                users && users.length < 1
                ? null
                : users.map(user => (
                        <tr key={user.username}>
                            <td >{user.username}</td>
                            <td>{convertTimestamp(user.logOnTime)}</td>
                        </tr>
                    ))
            }
            </tbody>
        </Table>
    </div>
);

export default UserListComponent;
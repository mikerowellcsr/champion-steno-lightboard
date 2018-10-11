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
                        <tr>
                            <td key={user.username}>{user.username}</td>
                            <td key={user.username}>{convertTimestamp(user.logOnTime)}</td>
                        </tr>
                    ))
            }
            </tbody>
        </Table>
        {/*<Button*/}
            {/*color="primary"*/}
            {/*size="lg"*/}
            {/*id="userList">*/}
            {/*Users <Badge color="primary">{Object.keys(users).length}</Badge>*/}
        {/*</Button>*/}
        {/*{ users && users.length < 1 ? null : <UncontrolledCollapse toggler="#userList">*/}
            {/*<Card className="listgroup-users">*/}
                {/*<CardBody>*/}
                    {/*<ul>*/}
                        {/*{users.map(user => (*/}
                            {/*<li key={user.username}>{user.username}</li>*/}
                        {/*))}*/}
                    {/*</ul>*/}
                {/*</CardBody>*/}
            {/*</Card>*/}
        {/*</UncontrolledCollapse>}*/}
    </div>
);

export default UserListComponent;
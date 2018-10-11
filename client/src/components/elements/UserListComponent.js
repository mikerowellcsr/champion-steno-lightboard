import React from 'react';
import {
    Badge,
    Button,
    Card,
    CardBody,
    UncontrolledCollapse
} from 'reactstrap';

const UserListComponent =({ users }) => (
    <div>
        <Button
            color="primary"
            size="lg"
            id="userList">
            Users <Badge color="primary">{Object.keys(users).length}</Badge>
        </Button>
        { users && users.length < 1 ? null : <UncontrolledCollapse toggler="#userList">
            <Card className="listgroup-users">
                <CardBody>
                    <ul>
                        {users.map(user => (
                            <li key={user.username}>{user.username}</li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </UncontrolledCollapse>}
    </div>
);

export default UserListComponent;
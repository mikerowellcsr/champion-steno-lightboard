import React from 'react';
import PropTypes from 'prop-types';
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
                        {Object.keys(users).map(id => (
                            <li key={id}>{users[id].username}</li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </UncontrolledCollapse>}
    </div>
);

UserListComponent.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            logOnTime: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default UserListComponent;
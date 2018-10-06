import React from 'react';
import PropTypes from 'prop-types';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardText,
    UncontrolledCollapse
} from 'reactstrap';

const UserListComponent =({ users }) => (
    <div>
        <Button
            color="primary"
            size="lg"
            id="userList">
            Users <Badge color="primary">{users.length - 1}</Badge>
        </Button>
        <UncontrolledCollapse toggler="#userList">
            <Card className="listgroup-users">
                <CardBody>
                    <CardText>
                        {users.map(user => (
                            <div key={user.id}>{user.id}</div>
                        ))}
                    </CardText>
                </CardBody>
            </Card>
        </UncontrolledCollapse>
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
import React from 'react';
import { UserSignIn } from '../../containers/UserSignIn';
import SpeakerDeckNoAuth from './SpeakerDeckNoAuth';
import {
    Container,
    Row
} from 'reactstrap';

const LightboxComponent = ({ users, keyPress }) => {
    return (
        <div>
            {users && users.length === 0
                ? <UserSignIn />
                :  <div className="main-container">
                    <Row>
                        <h1>
                            Champion Steno Lightboard
                        </h1>
                    </Row>
                    <SpeakerDeckNoAuth activeSpeaker={keyPress} />
                </div>}
        </div>
    );
};

export default LightboxComponent;
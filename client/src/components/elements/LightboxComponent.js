import React from 'react';
import { UserSignIn } from '../../containers/UserSignIn';
import SpeakerDeckNoAuth from './SpeakerDeckNoAuth';
import {
    Container,
    Row
} from 'reactstrap';
import DocumentTitle from "react-document-title";

const LightboxComponent = ({ users, keyPress }) => {
    return (
        <div>
            {users && users.length === 0
                ? <UserSignIn />
                :  <div className="main-container">
                    <DocumentTitle title="Champion Steno Lightboard"/>
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
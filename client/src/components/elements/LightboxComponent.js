import React from 'react';
import { UserSignIn } from '../../containers/UserSignIn';
import SpeakerDeckNoAuth from './SpeakerDeckNoAuth';
import {
    Row
} from 'reactstrap';
import DocumentTitle from "react-document-title";
import Navigation from "../Navigation";

const LightboxComponent = ({ users, keyPress }) => {
    return (
        <div>
            {users && users.length === 0
                ? <UserSignIn />
                :  <div className="main-container__lightboard">
                    <DocumentTitle title="Champion Steno Lightboard"/>
                    <Navigation />
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
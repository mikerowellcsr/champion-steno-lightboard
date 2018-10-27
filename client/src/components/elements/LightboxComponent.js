import React from 'react';
import { UserSignIn } from '../../containers/UserSignIn';
import SpeakerDeckNoAuth from './SpeakerDeckNoAuth';
import {
    Row
} from 'reactstrap';
import DocumentTitle from 'react-document-title';
import Navigation from '../Navigation';
import * as speakerdeck from '../../firebase/speakerdeck';
import lifecycle from 'react-pure-lifecycle';

const componentDidMount = props =>
    fetchPhotos(props);

const fetchPhotos = (props) =>
    speakerdeck.fetchSpeakerPhotos().then(snapshot => {
        props.dispatch(snapshot.val());
    });

const methods = {
    componentDidMount
};

const LightboxComponent = ({ keyPress, photos, users }) =>
    <div>
        { users && users.length === 0
            ? <UserSignIn />
            : <div className="main-container__lightboard">
                <DocumentTitle title="Champion Steno Lightboard" />
                <Navigation />
                <Row>
                    <h1>
                        Champion Steno Lightboard
                    </h1>
                </Row>
                <SpeakerDeckNoAuth
                    activeSpeaker={ keyPress }
                    photos={ photos } />
            </div> }
    </div>;


export default lifecycle(methods)(LightboxComponent);
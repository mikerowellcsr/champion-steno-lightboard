import React from 'react';
import DocumentTitle from 'react-document-title';
import withAuthorization from './withAuthorization';
import {
    Col,
    Input,
    Row
} from 'reactstrap';
import Navigation from './Navigation';
import { UserList } from '../containers/UserList';
import setupSocket from '../sockets';
import PropTypes from 'prop-types';
import SpeakerDeckNoAuth from './elements/SpeakerDeckNoAuth';
import * as speakerdeck from '../firebase/speakerdeck';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        /* activeSpeaker keeps track of which speaker is active.
        * Keys contains the designated keys to activate speaker.
        * InputValid toggles the input field to invalid if non-valid keys
        * are entered. */

        this.state = {
            activeSpeaker: 0,

            // TO-DO: make these keys configurable.
            keys: ['q', 'w', 'e', 'r', 't'],
            inputValid: true
        };

        this.sendKeyPress = this.sendKeyPress.bind(this);
    }

    // Dispatch the action to Redux.
    sendKeyPress(key) {
        this.props.dispatch({
            type: 'SEND_KEY_PRESS',
            key
        });
    }

    componentDidMount() {
        const { store } = this.context;

        setupSocket(store.dispatch, `${this.props.authUser.displayName} (Admin)`);

        speakerdeck.fetchSpeakerPhotos().then(snapshot => {
            this.props.dispatch({
                type: 'FETCH_SPEAKER_PHOTOS',
                photos: snapshot.val()
            });
        });
    }

    render() {
        const handleKeyPress = (e) => {

            // If the keypress contains the keys designated the "keys" state object...
            if (this.state.keys.indexOf(e.target.value[e.target.value.length - 1]) > -1) {

                // Send the keypress event to the socket.
                setTimeout(this.sendKeyPress(this.state.keys.indexOf(e.target.value)), 200);

                // Update the activeSpeaker state, and make sure that the input shows as valid.
                this.setState({
                    activeSpeaker: this.state.keys.indexOf(e.target.value),
                    inputValid: true
                });

                // Blank out the form.
                e.target.value = '';

                // If the keypress is not valid (one of the keys in the "keys" state object...
            } else {

                // Turn the input field red.
                this.setState({ inputValid: false });

                // Blank out the input field.
                e.target.value = '';
            }
        };

        return (
            <div>
                <DocumentTitle title="Lightboard Dashboard" />
                <Navigation />
                <div className="main-container">
                    <h1 className="speaker-deck__header">
                        Speaker Deck
                    </h1>
                    <SpeakerDeckNoAuth
                        activeSpeaker={ this.props.keyPress }
                        photos={ this.props.photos } />
                    <Row className="margin-top">
                        <Col
                            xs="3"
                            sm="3"
                            md="4"
                            lg="4"
                            xl="5" />
                        <Col
                            xs="6"
                            sm="6"
                            md="4"
                            lg="4"
                            xl="2">
                            <div className="margin-top" />
                            <Input
                                className="text-input"
                                type="text"
                                name="control"
                                bsSize="lg"
                                placeholder="Enter keystrokes."
                                ref="control"
                                autoFocus
                                onChange={ handleKeyPress }
                                invalid={ !this.state.inputValid } />
                        </Col>
                        <Col
                            xs="3"
                            sm="3"
                            md="4"
                            lg="4"
                            xl="5" />
                    </Row>
                    <div>
                        <Col
                            xs="auto"
                            sm="auto"
                            md="auto"
                            lg="10"
                            xl="6">
                            <div className="margin-bottom">
                                <UserList />
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

Dashboard.contextTypes = {
    store: PropTypes.object
};

Dashboard.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default withAuthorization(authCondition)(Dashboard);

import React from 'react';
import DocumentTitle from 'react-document-title';
import withAuthorization from './withAuthorization';
import {
    Container,
    Col,
    Input,
    Row
} from 'reactstrap';
import Navigation from './Navigation';
import { UserList } from '../containers/UserList';
import setupSocket from '../sockets';
import PropTypes from 'prop-types';
import SpeakerDeck from './elements/SpeakerDeck';
import keyPress from '../sagas';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        /* activeSpeaker keeps track of which speaker is active.
        * Keys contains the designated keys to activate speaker.
        * InputValid toggles the input field to invalid if non-valid keys
        * are entered. */

        this.state = {
            activeSpeaker: 0,
            keys: ['q', 'w', 'e', 'r', 't'],
            inputValid: true
        };

        this.sendKeyPress = this.sendKeyPress.bind(this);
    }

    // Dispatch the action to Redux.
    sendKeyPress(key) {
         this.props.keyPress({
             type: 'SEND_KEY_PRESS',
             key
         });
    }

    componentDidMount() {
        const { store } = this.context;
        const socket = setupSocket(store.dispatch, 'Me');
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
                this.setState({inputValid: false});

                // Blank out the input field.
                e.target.value = '';
            }
        };

        return(
            <div>
                <DocumentTitle title="Lightbox Dashboard"/>
                <Navigation />
                <Container className="main-container">
                    <Row>
                        <h1>
                            Speaker Deck
                        </h1>
                    </Row>
                    <SpeakerDeck activeSpeaker={this.state.activeSpeaker} />
                    <Row className="margin-top">
                        <Col sm={1}>
                            <Input
                                type="text"
                                name="control"
                                size="lg"
                                ref="control"
                                autoFocus
                                onChange={handleKeyPress}
                                invalid={!this.state.inputValid}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="2" className="margin-top">
                            <div className="margin-bottom">
                                <UserList />
                            </div>
                        </Col>
                        <Col sm="10" />
                    </Row>
                </Container>
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

Dashboard.contextTypes = {
    store: PropTypes.object
};

keyPress.propTypes = {
    dispatch: PropTypes.func.isRequired,
    keyPress: PropTypes.func.isRequired
};

export default withAuthorization(authCondition)(Dashboard);

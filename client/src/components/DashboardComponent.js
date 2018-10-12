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
import SpeakerDeck from './elements/SpeakerDeck';

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
         this.props.dispatch({
             type: 'SEND_KEY_PRESS',
             key
         });
    }

    componentDidMount() {
        const { store } = this.context;
        setupSocket(store.dispatch, this.props.authUser.providerData[0].uid, '000');
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
                <DocumentTitle title="Lightboard Dashboard"/>
                <Navigation />
                <div className="main-container">
                        <h1 className="speaker-deck__header">
                            Speaker Deck
                        </h1>
                    <SpeakerDeck activeSpeaker={this.props.keyPress} />
                    <Row className="margin-top">
                        <Col sm={5} />
                        <Col sm={2}>
                            <Input
                                className="text-input"
                                type="text"
                                name="control"
                                bsSize="lg"
                                placeholder="Enter keystrokes."
                                ref="control"
                                autoFocus
                                onChange={handleKeyPress}
                                invalid={!this.state.inputValid}/>
                        </Col>
                        <Col sm={5} />
                    </Row>
                    <div>
                        <Col sm={6}>
                            <div className="margin-bottom">
                                <UserList />
                            </div>
                        </Col>
                        <Col sm={10} />
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

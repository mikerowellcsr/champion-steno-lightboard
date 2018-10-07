import React from 'react';
import { UserSignIn } from '../../containers/UserSignIn';
import PropTypes from 'prop-types';
import SpeakerDeck from './SpeakerDeck';
import {
    Container,
    Row
} from 'reactstrap';

const LightboxComponent = ({ users, keyPress }) => {
    return (
        <div>
            {users && users.length === 0
                ? <UserSignIn />
                :  <Container className="main-container">
                    <Row>
                        <h1>
                            Speaker Deck
                        </h1>
                    </Row>
                    <SpeakerDeck activeSpeaker={keyPress} />
                </Container>}
        </div>
    );
};

LightboxComponent.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            logOnTime: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    key: PropTypes.number
};

export default LightboxComponent;
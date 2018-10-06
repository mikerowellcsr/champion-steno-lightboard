import React from 'react';
import { UserSignIn } from '../../containers/UserSignIn';
import PropTypes from 'prop-types';
import SpeakerDeck from "./SpeakerDeck";

const LightboxComponent = ({ users, keyPress }) => {
    return (
        <div>
            {users && users.length === 0 ? <UserSignIn /> : <p>{keyPress}</p>}
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
    keyPress: PropTypes.number
};

export default LightboxComponent;
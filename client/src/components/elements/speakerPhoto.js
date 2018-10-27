import React from 'react';

const SpeakerPhoto = ({ imageUrl }) => {
    return (
        <div className="speaker-photo">
            <img className="img-fluid speaker-photo" src={ imageUrl } />
        </div>
    );
};

export default SpeakerPhoto;
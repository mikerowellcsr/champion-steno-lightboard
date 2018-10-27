import React from 'react';
import {
    CardImg
} from 'reactstrap';

const SpeakerPhoto = ({ cardImg, speakerNumber, photos }) => {

    const findImageUrl = (index, arr) => {
        return arr && arr[findImageUrlIndex(index, photos)]
            && arr[findImageUrlIndex(index, photos)].imageUrl;
    };

    const findImageUrlIndex = (speakerNumber, arr) => {
        return arr && arr.map((item) => item.index).indexOf(speakerNumber);
    };

    const imageUrl = findImageUrl(speakerNumber, photos)
        ? findImageUrl(speakerNumber, photos)
        : '/images/speaker-placeholder-small.png';

    return (
        cardImg
            ? speakerCard(speakerNumber, imageUrl)
            : speakerPhoto(speakerNumber, imageUrl)
    );
};

const speakerCard = (speakerNumber, imageUrl) =>
    <CardImg
        alt={ `Speaker ${speakerNumber}` }
        top width="100%"
        src={ imageUrl }
    />;

const speakerPhoto = (speakerNumber, imageUrl) =>
    <div className="speaker-photo">
        <img
            alt={ `Speaker ${speakerNumber}` }
            className="img-fluid speaker-photo"
            src={ imageUrl }
        />
    </div>;

export default SpeakerPhoto;
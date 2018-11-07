import React from 'react';
import {
    Card,
    CardTitle,
    CardDeck,
    CardBody
} from 'reactstrap';
import SpeakerPhoto from './SpeakerPhoto';

const SpeakerDeck = ({ activeSpeaker, photos }) => {
    const active = {
        color: 'primary',
        class: 'inverse'
    };

    return (
        <CardDeck>
            <Card color={ activeSpeaker === 0 ? active.color : '' }
                  className={ activeSpeaker === 0 ? `speaker0 ${active.class}` : 'speaker0' }>
                <SpeakerPhoto
                    cardImg={ true }
                    speakerNumber={ 0 }
                    photos={ photos } />
                <CardBody>
                    <CardTitle>Defense</CardTitle>
                </CardBody>
            </Card>
            <Card color={ activeSpeaker === 1 ? active.color : '' }
                  className={ activeSpeaker === 1 ? `speaker1 ${active.class}` : 'speaker1' }>
                <SpeakerPhoto
                    cardImg={ true }
                    speakerNumber={ 1 }
                    photos={ photos } />
                <CardBody>
                    <CardTitle>Witness</CardTitle>
                </CardBody>
            </Card>
            <Card color={ activeSpeaker === 2 ? active.color : '' }
                  className={ activeSpeaker === 2 ? `speaker2 ${active.class}` : 'speaker2' }>
                <SpeakerPhoto
                    cardImg={ true }
                    speakerNumber={ 2 }
                    photos={ photos } />
                <CardBody>
                    <CardTitle>The Court</CardTitle>
                </CardBody>
            </Card>
            <div className="line-break" />
            <Card color={ activeSpeaker === 3 ? active.color : '' }
                  className={ activeSpeaker === 3 ? `speaker3 ${active.class}` : 'speaker3' }>
                <SpeakerPhoto
                    cardImg={ true }
                    speakerNumber={ 3 }
                    photos={ photos } />
                <CardBody>
                    <CardTitle>Plaintiff</CardTitle>
                </CardBody>
            </Card>
            <Card color={ activeSpeaker === 4 ? active.color : '' }
                  className={ activeSpeaker === 4 ? `speaker4 ${active.class}` : 'speaker4' }>
                <SpeakerPhoto
                    cardImg={ true }
                    speakerNumber={ 4 }
                    photos={ photos } />
                <CardBody>
                    <CardTitle>Defense 2</CardTitle>
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default SpeakerDeck;
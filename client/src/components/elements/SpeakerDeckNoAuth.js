import React from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    CardDeck,
    CardBody
} from 'reactstrap';

const SpeakerDeck = ({ activeSpeaker }) => {
    const active = {
        color: 'primary',
        class: 'inverse'
    };

    return (
        <CardDeck>
            <Card color={activeSpeaker === 0 ? active.color : ''} className={activeSpeaker === 0 ? active.class : ''}>
                <CardImg top width="100%"
                         src="/images/speaker-placeholder.png"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Defense</CardTitle>
                </CardBody>
            </Card>
            <Card color={activeSpeaker === 1 ? active.color : ''} className={activeSpeaker === 1 ? active.class : ''}>
                <CardImg top width="100%"
                         src="/images/speaker-placeholder.png"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Witness</CardTitle>
                </CardBody>
            </Card>
            <Card color={activeSpeaker === 2 ? active.color : ''} className={activeSpeaker === 2 ? active.class : ''}>
                <CardImg top width="100%"
                         src="/images/speaker-placeholder.png"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>The Court</CardTitle>
                </CardBody>
            </Card>
            <Card color={activeSpeaker === 3 ? active.color : ''} className={activeSpeaker === 3 ? active.class : ''}>
                <CardImg top width="100%"
                         src="/images/speaker-placeholder.png"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Plaintiff</CardTitle>
                </CardBody>
            </Card>
            <Card color={activeSpeaker === 4 ? active.color : ''} className={activeSpeaker === 4 ? active.class : ''}>
                <CardImg top width="100%"
                         src="/images/speaker-placeholder.png"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Defense 2</CardTitle>
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default SpeakerDeck;
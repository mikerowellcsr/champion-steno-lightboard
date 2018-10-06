import React from 'react';
import {
    Card,
    Button,
    CardHeader,
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
                         src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Defense</CardTitle>
                </CardBody>
            </Card>
            <Card color={activeSpeaker === 1 ? active.color : ''} className={activeSpeaker === 1 ? active.class : ''}>
                <CardImg top width="100%"
                         src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Witness</CardTitle>
                </CardBody>
            </Card>
            <Card color={activeSpeaker === 2 ? active.color : ''} className={activeSpeaker === 2 ? active.class : ''}>
                <CardImg top width="100%"
                         src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>The Court</CardTitle>
                </CardBody>
            </Card>
            <Card color={activeSpeaker === 3 ? active.color : ''} className={activeSpeaker === 3 ? active.class : ''}>
                <CardImg top width="100%"
                         src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Plaintiff</CardTitle>
                </CardBody>
            </Card>
            <Card color={activeSpeaker === 4 ? active.color : ''} className={activeSpeaker === 4 ? active.class : ''}>
                <CardImg top width="100%"
                         src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Juror</CardTitle>
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default SpeakerDeck;
import React from 'react';
import {
    Container,
    Col,
    Row

} from 'reactstrap';
import SpeakerPhoto from './SpeakerPhoto';
import SpeakerUploader from './SpeakerUploader';
import { speakerdeck } from '../../firebase';
import lifecycle from 'react-pure-lifecycle';

const componentDidMount = props =>
    fetchPhotos(props);

const fetchPhotos = (props) =>
    speakerdeck.fetchSpeakerPhotos().then(snapshot => {
        props.dispatch(snapshot.val());
    });

const methods = {
    componentDidMount
};

const SpeakerDeckConfigComponent = ({ dispatch, photos }) => {
    return (< Container fluid>
            <div className="margin-top__wide" />
            <Row>
                <Col
                    xs="12"
                    sm="12"
                    md="6"
                    className="speaker-photo-picker">
                    <SpeakerPhoto
                        cardImg={ false }
                        speakerNumber={ 0 }
                        photos={ photos } />
                </Col>
                <Col
                    xs="12"
                    sm="12"
                    md="6"
                    className="speaker-photo-picker">
                    <div className="speaker-photo-picker__contents">
                        <h4>Defense</h4>
                        <SpeakerUploader
                            dispatch={ dispatch }
                            speakerNumber={ 0 } />
                    </div>
                </Col>
                <Col
                    xs="12"
                    sm="12"
                    md="6"
                    className="speaker-photo-picker">
                    <SpeakerPhoto
                        cardImg={ false }
                        speakerNumber={ 1 }
                        photos={ photos } />
                </Col>
                <Col
                    xs="12"
                    sm="12"
                    md="6"
                    className="speaker-photo-picker">
                    <div className="speaker-photo-picker__contents">
                        <h4>Witness</h4>
                        <SpeakerUploader
                            dispatch={ dispatch }
                            speakerNumber={ 1 } />
                    </div>
                </Col>
                <Col
                    xs="12"
                    sm="12"
                    md="6"
                    className="speaker-photo-picker">
                    <SpeakerPhoto
                        cardImg={ false }
                        speakerNumber={ 2 }
                        photos={ photos } />
                </Col>
                <Col
                    xs="12"
                    sm="12"
                    md="6"
                    className="speaker-photo-picker">
                    <div className="speaker-photo-picker__contents">
                        <h4>The Court</h4>
                        <SpeakerUploader
                            dispatch={ dispatch }
                            speakerNumber={ 2 } />
                    </div>
                </Col>
                <Col
                    xs="12"
                    sm="12"
                    md="6"
                    className="speaker-photo-picker">
                    <SpeakerPhoto
                        cardImg={ false }
                        speakerNumber={ 3 }
                        photos={ photos } />
                </Col>
                <Col
                    xs="12"
                    sm="12"
                    md="6"
                    className="speaker-photo-picker">
                    <div className="speaker-photo-picker__contents">
                        <h4>Plaintiff</h4>
                        <SpeakerUploader
                            dispatch={ dispatch }
                            speakerNumber={ 3 } />
                    </div>
                </Col>
                <Col
                    xs="12"
                    sm="12"
                    md="6"
                    className="speaker-photo-picker">
                    <SpeakerPhoto
                        cardImg={ false }
                        speakerNumber={ 4 }
                        photos={ photos } />
                </Col>
                <Col
                    xs="12"
                    sm="12"
                    md="6"
                    className="speaker-photo-picker">
                    <div className="speaker-photo-picker__contents">
                        <h4>Defense 2</h4>
                        <SpeakerUploader
                            dispatch={ dispatch }
                            speakerNumber={ 4 } />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default lifecycle(methods)(SpeakerDeckConfigComponent);
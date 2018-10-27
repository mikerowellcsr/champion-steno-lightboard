import React from 'react';
import {
    Card,
    CardImgOverlay,
    CardTitle,
    CardDeck,
    CardBody,
    UncontrolledCollapse
} from 'reactstrap';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileMeta from 'filepond-plugin-file-metadata';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';

class SpeakerDeck extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fadeIn: true
        };

    }

    componentDidMount() {
        registerPlugin(FilePondPluginFileMeta, FilePondPluginFileValidateType);
    }

    render() {

        const active = {
            color: 'primary',
            class: 'inverse'
        };

        return (
            <div>
                <CardDeck>
                    <Card
                        color={ this.props.activeSpeaker === 0 ? active.color : '' }
                        className={ this.props.activeSpeaker === 0 ? active.class : '' }>
                        <CardImgOverlay top
                                 id="speaker0"
                                 width="100%"
                                 src="/images/speaker-placeholder.png"
                                 alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Defense</CardTitle>
                            <UncontrolledCollapse toggler="#speaker0">
                                <FilePond
                                    server="http://localhost:8000/upload?speaker=0"
                                    name="photo"
                                    enctype="multipart/form-data"
                                />
                            </UncontrolledCollapse>
                        </CardBody>
                    </Card>
                    <Card color={ this.props.activeSpeaker === 1 ? active.color : '' }
                          className={ this.props.activeSpeaker === 1 ? active.class : '' }>
                        <CardImg top
                                 id="speaker1"
                                 width="100%"
                                 src="/images/speaker-placeholder.png"
                                 alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Witness</CardTitle>
                            <UncontrolledCollapse toggler="#speaker1">
                                <FilePond
                                    server="http://localhost:8000/upload?speaker=1"
                                    name="photo"
                                    enctype="multipart/form-data"
                                />
                            </UncontrolledCollapse>
                        </CardBody>
                    </Card>
                    <Card color={ this.props.activeSpeaker === 2 ? active.color : '' }
                          className={ this.props.activeSpeaker === 2 ? active.class : '' }>
                        <CardImg top
                                 id="speaker2"
                                 width="100%"
                                 src="/images/speaker-placeholder.png"
                                 alt="Card image cap" />
                        <CardBody>
                            <CardTitle>The Court</CardTitle>
                            <UncontrolledCollapse toggler="#speaker2">
                                <FilePond
                                    server="http://localhost:8000/upload?speaker=2"
                                    name="speakerPhoto2"
                                    accepted-file-types="image/jpeg, image/png"
                                />
                            </UncontrolledCollapse>
                        </CardBody>
                    </Card>
                    <Card color={ this.props.activeSpeaker === 3 ? active.color : '' }
                          className={ this.props.activeSpeaker === 3 ? active.class : '' }>
                        <CardImg top
                                 id="speaker3"
                                 width="100%"
                                 src="/images/speaker-placeholder.png"
                                 alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Plaintiff</CardTitle>
                            <UncontrolledCollapse toggler="#speaker3">
                                <FilePond
                                    server="http://localhost:8000/upload?speaker=3"
                                    name="speakerPhoto3"
                                    accepted-file-types="image/jpeg, image/png"
                                />
                            </UncontrolledCollapse>
                        </CardBody>
                    </Card>
                    <Card color={ this.props.activeSpeaker === 4 ? active.color : '' }
                          className={ this.props.activeSpeaker === 4 ? active.class : '' }>
                        <CardImg top
                                 id="speaker4"
                                 width="100%"
                                 src="/images/speaker-placeholder.png"
                                 alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Defense 2</CardTitle>
                            <UncontrolledCollapse toggler="#speaker4">
                                <FilePond
                                    server="http://localhost:8000/upload?speaker=4"
                                    name="speakerPhoto4"
                                    accepted-file-types="image/jpeg, image/png"
                                />
                            </UncontrolledCollapse>
                        </CardBody>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}

export default SpeakerDeck;
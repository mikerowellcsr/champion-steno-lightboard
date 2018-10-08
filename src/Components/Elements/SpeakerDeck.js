import React from 'react';
import {
    Card,
    CardImg,
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
                         color={this.props.activeSpeaker === 0 ? active.color : ''}
                         className={this.props.activeSpeaker === 0 ? active.class : ''}>
                         <CardImg top
                                  id="speaker0"
                                  width="100%"
                                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                  alt="Card image cap" />
                         <CardBody>
                             <CardTitle>Defense</CardTitle>
                             <UncontrolledCollapse toggler="#speaker0">
                                <FilePond
                                    server="http://localhost:8000/upload"
                                    name="speakerPhoto0"
                                />
                             </UncontrolledCollapse>
                         </CardBody>
                     </Card>
                     <Card color={this.props.activeSpeaker === 1 ? active.color : ''} className={this.props.activeSpeaker === 1 ? active.class : ''}>
                         <CardImg top
                                  id="speaker1"
                                  width="100%"
                                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                  alt="Card image cap"/>
                         <CardBody>
                             <CardTitle>Witness</CardTitle>
                             <UncontrolledCollapse toggler="#speaker1">
                                 <FilePond
                                     server="http://localhost:8000/upload"
                                     name="speakerPhoto1"
                                     accepted-file-types="image/jpeg, image/png"
                                 />
                             </UncontrolledCollapse>
                         </CardBody>
                     </Card>
                     <Card color={this.props.activeSpeaker === 2 ? active.color : ''} className={this.props.activeSpeaker === 2 ? active.class : ''}>
                         <CardImg top
                                  id="speaker2"
                                  width="100%"
                                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                  alt="Card image cap"/>
                         <CardBody>
                             <CardTitle>The Court</CardTitle>
                             <UncontrolledCollapse toggler="#speaker2">
                                 <FilePond
                                     server="http://localhost:8000/upload"
                                     name="speakerPhoto2"
                                     accepted-file-types="image/jpeg, image/png"
                                 />
                             </UncontrolledCollapse>
                         </CardBody>
                     </Card>
                     <Card color={this.props.activeSpeaker === 3 ? active.color : ''} className={this.props.activeSpeaker === 3 ? active.class : ''}>
                         <CardImg top
                                  id="speaker3"
                                  width="100%"
                                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                  alt="Card image cap"/>
                         <CardBody>
                             <CardTitle>Plaintiff</CardTitle>
                             <UncontrolledCollapse toggler="#speaker3">
                                 <FilePond
                                     server="http://localhost:8000/upload"
                                     name="speakerPhoto3"
                                     accepted-file-types="image/jpeg, image/png"
                                 />
                             </UncontrolledCollapse>
                         </CardBody>
                     </Card>
                     <Card color={this.props.activeSpeaker === 4 ? active.color : ''} className={this.props.activeSpeaker === 4 ? active.class : ''}>
                         <CardImg top
                                  id="speaker4"
                                  width="100%"
                                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                  alt="Card image cap"/>
                         <CardBody>
                             <CardTitle>Juror</CardTitle>
                             <UncontrolledCollapse toggler="#speaker4">
                                 <FilePond
                                     server="http://localhost:8000/upload"
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
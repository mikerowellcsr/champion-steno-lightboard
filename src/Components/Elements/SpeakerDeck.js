import React from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    CardDeck,
    CardBody,
    Form,
    Input,
    Progress
} from 'reactstrap';

class SpeakerDeck extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isUploading: false,
            progress: 0,
            images: null,
            speaker0: '',
            speaker1: '',
            speaker2: '',
            speaker3: '',
            speaker4: ''
        };
    }

    handleUploadImage = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);

        fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                this.setState({ imageURL: `http://localhost:8000/${body.file}` });
            });
        });
    };

    render() {

         const active = {
             color: 'primary',
             class: 'inverse'
         };

         return (
             <div>
                 <CardDeck>
                     <Card color={this.props.activeSpeaker === 0 ? active.color : ''} className={this.props.activeSpeaker === 0 ? active.class : ''}>
                         <CardImg top width="100%"
                                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                  alt="Card image cap"/>
                         <CardBody>
                             <CardTitle>Defense</CardTitle>
                             <Form onSubmit={this.handleUploadImage}>
                                 <Input
                                     type="file"
                                     name="speaker0"
                                     id="speaker0"
                                     ref={(ref) => {
                                         this.uploadInput = ref;
                                         this.fileName = 'speaker0';
                                     }}
                                 />
                             </Form>
                         </CardBody>
                     </Card>
                     <Card color={this.props.activeSpeaker === 1 ? active.color : ''} className={this.props.activeSpeaker === 1 ? active.class : ''}>
                         <CardImg top width="100%"
                                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                  alt="Card image cap"/>
                         <CardBody>
                             <CardTitle>Witness</CardTitle>

                         </CardBody>
                     </Card>
                     <Card color={this.props.activeSpeaker === 2 ? active.color : ''} className={this.props.activeSpeaker === 2 ? active.class : ''}>
                         <CardImg top width="100%"
                                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                  alt="Card image cap"/>
                         <CardBody>
                             <CardTitle>The Court</CardTitle>
                         </CardBody>
                     </Card>
                     <Card color={this.props.activeSpeaker === 3 ? active.color : ''} className={this.props.activeSpeaker === 3 ? active.class : ''}>
                         <CardImg top width="100%"
                                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                  alt="Card image cap"/>
                         <CardBody>
                             <CardTitle>Plaintiff</CardTitle>

                         </CardBody>
                     </Card>
                     <Card color={this.props.activeSpeaker === 4 ? active.color : ''} className={this.props.activeSpeaker === 4 ? active.class : ''}>
                         <CardImg top width="100%"
                                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                  alt="Card image cap"/>
                         <CardBody>
                             <CardTitle>Juror</CardTitle>

                         </CardBody>
                     </Card>
                 </CardDeck>
                 <Progress
                     color="success"
                     value="45"
                     className="margin-top"
                 />
             </div>
         );
     }
}

export default SpeakerDeck;
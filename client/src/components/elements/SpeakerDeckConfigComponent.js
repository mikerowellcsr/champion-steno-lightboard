import React, { Component } from 'react';
import {
    Table
} from 'reactstrap';
import SpeakerUploader from './SpeakerUploader';
import { speakerdeck } from '../../firebase';

class SpeakerDeckConfigComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activespeaker: null
        };
    }

    componentDidMount() {
        const { dispatch } = this.props;

        speakerdeck.fetchSpeakerPhotos().then(snapshot => {
            dispatch(snapshot.val());
        });
    }

    render() {
        const { dispatch, photos } = this.props;
        console.log(photos);
        const active = {
            color: 'primary',
            class: 'inverse'
        };

        const { activeSpeaker } = this.state;

        return (
            <div className="configure-pane">
                <h2>Preview</h2>
                <Table
                    borderless
                    responsive>
                    <thead>
                    <tr>
                        <th>
                            Defense
                        </th>
                        <th>
                            Witness
                        </th>
                        <th>
                            The Court
                        </th>
                        <th>
                            Plaintiff
                        </th>
                        <th>
                            Defense 2
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <img width="100%"
                                 id="speaker0"
                                 src={photos.hasOwnProperty(0) ? photos[0].imageUrl : "/images/speaker-placeholder.png"}
                                 alt="Card image cap" />
                        </td>
                        <td>
                            <img width="100%"
                                 id="speaker0"
                                 src="/images/speaker-placeholder.png"
                                 alt="Card image cap" />
                        </td>
                        <td>
                            <img width="100%"
                                 id="speaker0"
                                 src="/images/speaker-placeholder.png"
                                 alt="Card image cap" />
                        </td>
                        <td>
                            <img width="100%"
                                 id="speaker0"
                                 src="/images/speaker-placeholder.png"
                                 alt="Card image cap" />
                        </td>
                        <td>
                            <img width="100%"
                                 id="speaker0"
                                 src="/images/speaker-placeholder.png"
                                 alt="Card image cap" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <SpeakerUploader
                                dispatch={dispatch}
                                speakerNumber={ 0 } />
                        </td>
                        <td>
                            <SpeakerUploader
                                dispatch={dispatch}
                                speakerNumber={ 1 } />
                        </td>
                        <td>
                            <SpeakerUploader
                                dispatch={dispatch}
                                speakerNumber={ 2 } />
                        </td>
                        <td>
                            <SpeakerUploader
                                dispatch={dispatch}
                                speakerNumber={ 3 } />
                        </td>
                        <td>
                            <SpeakerUploader
                                dispatch={dispatch}
                                speakerNumber={ 4 } />
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default SpeakerDeckConfigComponent;
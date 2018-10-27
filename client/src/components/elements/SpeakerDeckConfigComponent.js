import React from 'react';
import {
    Table
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
    return (<div className="configure-pane">
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
                        <SpeakerPhoto
                            cardImg={false}
                            speakerNumber={ 0 }
                            photos={ photos } />
                    </td>
                    <td>
                        <SpeakerPhoto
                            cardImg={false}
                            speakerNumber={ 1 }
                            photos={ photos } />
                    </td>
                    <td>
                        <SpeakerPhoto
                            cardImg={false}
                            speakerNumber={ 2 }
                            photos={ photos } />
                    </td>
                    <td>
                        <SpeakerPhoto
                            cardImg={false}
                            speakerNumber={ 3 }
                            photos={ photos } />
                    </td>
                    <td>
                        <SpeakerPhoto
                            cardImg={false}
                            speakerNumber={ 4 }
                            photos={ photos } />
                    </td>
                </tr>
                <tr>
                    <td>
                        <SpeakerUploader
                            dispatch={ dispatch }
                            speakerNumber={ 0 } />
                    </td>
                    <td>
                        <SpeakerUploader
                            dispatch={ dispatch }
                            speakerNumber={ 1 } />
                    </td>
                    <td>
                        <SpeakerUploader
                            dispatch={ dispatch }
                            speakerNumber={ 2 } />
                    </td>
                    <td>
                        <SpeakerUploader
                            dispatch={ dispatch }
                            speakerNumber={ 3 } />
                    </td>
                    <td>
                        <SpeakerUploader
                            dispatch={ dispatch }
                            speakerNumber={ 4 } />
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default lifecycle(methods)(SpeakerDeckConfigComponent);
import React, { Component } from 'react';
import {
    Table
} from 'reactstrap';
import Speaker0Dropzone from './dropzones/Speaker0';
import './filepondcustom.css';

class SpeakerPhotoUploadComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
             activeSpeaker: null
        };

    }

    render() {
        const active = {
            color: 'primary',
            class: 'inverse'
        };
        const { activeSpeaker } = this.state;

        return (
            <div className="configure-pane">
                <h3>Click a frame or drag an image file over it to upload photo.</h3>
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
                                         src="/images/speaker-placeholder.png"
                                         alt="Card image cap"/>
                            </td>
                            <td>
                                <img width="100%"
                                         id="speaker0"
                                         src="/images/speaker-placeholder.png"
                                         alt="Card image cap"/>
                            </td>
                            <td>
                                <img width="100%"
                                         id="speaker0"
                                         src="/images/speaker-placeholder.png"
                                         alt="Card image cap"/>
                            </td>
                            <td>
                                <img width="100%"
                                         id="speaker0"
                                         src="/images/speaker-placeholder.png"
                                         alt="Card image cap"/>
                            </td>
                            <td>
                                <img width="100%"
                                         id="speaker0"
                                         src="/images/speaker-placeholder.png"
                                         alt="Card image cap"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Speaker0Dropzone />
                            </td>
                            <td>
                                <Speaker0Dropzone />
                            </td>
                            <td>
                                <Speaker0Dropzone />
                            </td>
                            <td>
                                <Speaker0Dropzone />
                            </td>
                            <td>
                                <Speaker0Dropzone />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default SpeakerPhotoUploadComponent;
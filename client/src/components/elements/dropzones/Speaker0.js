import React, { Component } from 'react';
import {
    FilePond,
    registerPlugin
} from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

class Speaker0 extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        registerPlugin(FilePondPluginImagePreview);

        return (
            <div>
                <FilePond
                    labelIdle='Drag photo or <span class="filepond--label-action">browse</span>'
                />
            </div>
        );
    }
}

Speaker0.propTypes = {};

export default Speaker0;
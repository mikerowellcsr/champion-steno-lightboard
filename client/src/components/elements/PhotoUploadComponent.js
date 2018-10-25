import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';

class PhotoUploadComponent extends Component {
    constructor(props) {
        super(props);

        this.dzConfig = {
            acceptedFiles: 'image/jpeg, image/png, image/gif',
            addRemoveLinks: true,
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.jpeg', '.png', '.gif'],
            showFiletypeIcon: false,
            postUrl: '/uploadHandler'
        };

        // Callback for file upload.
        this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];
    }

    render() {
        const config = this.componentConfig;
        const dzConfig = this.dzConfig;

        const eventHandlers = {
            drop: this.callbackArray,
            addedfile: this.callback,
        }

        return <DropzoneComponent
            config={config}
            eventHandlers={eventHandlers}
            dzConfig={dzConfig} />;
    }
}

export default DropzoneComponent;
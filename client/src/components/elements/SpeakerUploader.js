import React, { Component } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { db, storage } from '../../firebase/firebase';
import Uuid from 'uuid/v4';

registerPlugin(
    FilePondPluginImageResize,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType
);

class SpeakerUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [],
            image: null,
            imageUrl: ''
        };

        this.handleProcessing = this.handleProcessing.bind(this);
    }

    handleInit = () => {
        console.log(`FilePond has initialized.`);
    };

    handleProcessing = (fieldName, file, metadata, load, error, progress, abort) => {

        const fileUpload = file;
        const fileName = `${file.name}-${Uuid()}`;
        const { dispatch, speakerNumber } = this.props;
        const dbRef = db.ref(`/`);
        const storageRef = storage.ref(`images/${fileName}`);
        const uploadTask = storageRef.put(fileUpload);

        progress(true, 0, 1024);

        uploadTask.on('state_changed',

            // Progress function.
            snapshot => {
                progress(true, snapshot.bytesTransferred, snapshot.totalBytes);
            },

            // Error function.
            e => {
                error(`Upload error: ${e}`);
            },

            // Complete function.
            () => {
                load(uploadTask.snapshot.ref.fullPath);

                storage.ref(`images`).child(`${fileName}`).getDownloadURL()
                    .then(url => {
                        console.log(url);

                        // Checks to see if an image is already assigned to a speaker.
                        // If it is, then replace the image. If not, push up a new image ref.
                        dbRef.child(`speakerPhotos`).once(`value`, snapshot => {
                            if (!snapshot.val() || !snapshot.val().hasOwnProperty(speakerNumber)) {
                                console.log('nothing found');
                                dbRef.child(`speakerPhotos`).child(speakerNumber).set({
                                    index: speakerNumber,
                                    imageUrl: url
                                });
                            } else {
                                dbRef.child(`speakerPhotos`).update({
                                    [speakerNumber]: {
                                        index: speakerNumber,
                                        imageUrl: url
                                    }
                                });
                            }
                            dispatch(snapshot.val());
                        });
                    });
            });

        return {
            abort: () => {
                // This function is entered if the user has tapped the cancel button.
                uploadTask.cancel();

                // Let FilePond know the request has been cancelled.
                abort();
            }
        };
    };

    render() {
        return (
            <div>
                <FilePond
                    acceptedFileTypes={ ['image/gif', 'image/jpeg', 'image/jpg', 'image/png'] }
                    fileValidateTypeLabelExpectedTypes='Allowed: .jpg, .png, .gif'
                    imageResizeTargetWidth={ 300 }
                    imageResizeTargetHeight={ 300 }
                    imageResizeMode='cover'
                    imageResizeUpscale={ false }
                    labelFileTypeNotAllowed='File type invalid'
                    labelIdle='Drag photo or <span class="filepond--label-action">browse</span>'
                    maxFileSize='2MB'
                    oninit={ this.handleInit }
                    allowMultiple={ false }
                    server={ { process: this.handleProcessing } }
                    ref={ ref => this.pond = ref }
                >
                </FilePond>
            </div>
        );
    }
}

export default SpeakerUploader;
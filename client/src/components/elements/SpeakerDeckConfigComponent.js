import React, { Component } from 'react';
import {
    Table
} from 'reactstrap';
import SpeakerPhoto from './SpeakerPhoto';
import SpeakerUploader from './SpeakerUploader';
import { speakerdeck } from '../../firebase';

// class SpeakerDeckConfigComponent extends Component {
//     constructor(props) {
//         super(props);
//
//     }
//
//      componentDidMount() {
//         const { dispatch } = this.props;
//
//          speakerdeck.fetchSpeakerPhotos().then(snapshot => {
//              dispatch(snapshot.val());
//          });
//      }
//
//     render() {
//         const { dispatch, photos } = this.props;
//
//         return (
//             <div>
//                 <SpeakerDeckRenderer
//                     dispatch={dispatch}
//                     photos={photos} />
//             </div>
//         );
//     }
// }

const SpeakerDeckConfigComponent = ({ dispatch, photos }) => {

    const findImageUrl = (index, arr) => {
        return arr && arr[findImageUrlIndex(index, photos)]
            && arr[findImageUrlIndex(index, photos)].imageUrl;
    };

    const findImageUrlIndex = (speakerNumber, arr) => {
        return arr && arr.map((item) => item.index).indexOf(speakerNumber);
    };

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
                            imageUrl={ findImageUrl(0, photos)
                                ? findImageUrl(0, photos)
                                : '/images/speaker-placeholder.png' } />
                    </td>
                    <td>
                        <SpeakerPhoto
                            imageUrl={ findImageUrl(1, photos)
                                ? findImageUrl(1, photos)
                                : '/images/speaker-placeholder.png' } />
                    </td>
                    <td>
                        <SpeakerPhoto
                            imageUrl={ findImageUrl(2, photos)
                                ? findImageUrl(2, photos)
                                : '/images/speaker-placeholder.png' } />
                    </td>
                    <td>
                        <SpeakerPhoto
                            imageUrl={ findImageUrl(3, photos)
                                ? findImageUrl(3, photos)
                                : '/images/speaker-placeholder.png' } />
                    </td>
                    <td>
                        <SpeakerPhoto
                            imageUrl={ findImageUrl(4, photos)
                                ? findImageUrl(4, photos)
                                : '/images/speaker-placeholder.png' } />
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

export default SpeakerDeckConfigComponent;

// class SpeakerDeckConfigComponent extends Component {
//     constructor(props) {
//         super(props);
//
//     }
//
//     componentDidMount() {
//         const { dispatch } = this.props;
//
//         speakerdeck.fetchSpeakerPhotos().then(snapshot => {
//             dispatch(snapshot.val());
//         });
//     }
//
//     render() {
//         const { dispatch, photos } = this.props;
//         console.log(photos);
//
//         const findImageUrl = (index, arr) => {
//             return arr && arr[findImageUrlIndex(index, photos)]
//                 && arr[findImageUrlIndex(index, photos)].imageUrl;
//         };
//
//         const findImageUrlIndex = (speakerNumber, arr) => {
//             return arr && arr.map((item) => item.index).indexOf(speakerNumber);
//         };
//
//         console.log(findImageUrl(0, photos));
//
//         return (
//             <div className="configure-pane">
//                 <h2>Preview</h2>
//                 <Table
//                     borderless
//                     responsive>
//                     <thead>
//                     <tr>
//                         <th>
//                             Defense
//                         </th>
//                         <th>
//                             Witness
//                         </th>
//                         <th>
//                             The Court
//                         </th>
//                         <th>
//                             Plaintiff
//                         </th>
//                         <th>
//                             Defense 2
//                         </th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     <tr>
//                         <td>
//                             <SpeakerPhoto
//                                 imageUrl={findImageUrl(0, photos)
//                                     ? findImageUrl(0, photos)
//                                     : "/images/speaker-placeholder.png"} />
//                         </td>
//                         <td>
//                             <SpeakerPhoto
//                                 imageUrl={findImageUrl(1, photos)
//                                     ? findImageUrl(1, photos)
//                                     : "/images/speaker-placeholder.png"} />
//                         </td>
//                         <td>
//                             <SpeakerPhoto
//                                 imageUrl={findImageUrl(2, photos)
//                                     ? findImageUrl(2, photos)
//                                     : "/images/speaker-placeholder.png"} />
//                         </td>
//                         <td>
//                             <SpeakerPhoto
//                                 imageUrl={findImageUrl(3, photos)
//                                     ? findImageUrl(3, photos)
//                                     : "/images/speaker-placeholder.png"} />
//                         </td>
//                         <td>
//                             <SpeakerPhoto
//                                 imageUrl={findImageUrl(4, photos)
//                                     ? findImageUrl(4, photos)
//                                     : "/images/speaker-placeholder.png"} />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <SpeakerUploader
//                                 dispatch={dispatch}
//                                 speakerNumber={ 0 } />
//                         </td>
//                         <td>
//                             <SpeakerUploader
//                                 dispatch={dispatch}
//                                 speakerNumber={ 1 } />
//                         </td>
//                         <td>
//                             <SpeakerUploader
//                                 dispatch={dispatch}
//                                 speakerNumber={ 2 } />
//                         </td>
//                         <td>
//                             <SpeakerUploader
//                                 dispatch={dispatch}
//                                 speakerNumber={ 3 } />
//                         </td>
//                         <td>
//                             <SpeakerUploader
//                                 dispatch={dispatch}
//                                 speakerNumber={ 4 } />
//                         </td>
//                     </tr>
//                     </tbody>
//                 </Table>
//             </div>
//         );
//     }
// }
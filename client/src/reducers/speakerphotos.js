import * as types from '../constants/ActionTypes';

const speakerPhotos = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_SPEAKER_PHOTOS:
            console.log('reducer! ' + JSON.stringify(action.photos));
            return action.photos;
        default:
            return state;
    }
};

export default speakerPhotos;
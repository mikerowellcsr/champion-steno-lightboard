import { connect } from 'react-redux';
import SpeakerDeckConfigComponent from '../components/elements/SpeakerDeckConfigComponent';
import { fetchSpeakerPhotos } from '../actions';

const mapDispatchToProps = dispatch => ({
    dispatch: photos => {
        dispatch(fetchSpeakerPhotos(photos));
    }
});

const SpeakerDeckConfig = connect(state => ({
    photos: state.photos
}), mapDispatchToProps)(SpeakerDeckConfigComponent);

export default SpeakerDeckConfig;
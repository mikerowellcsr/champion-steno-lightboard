import { connect } from 'react-redux';
import SpeakerDeckConfigComponent from '../components/elements/SpeakerDeckConfigComponent';
import { fetchSpeakerPhotos } from '../actions';

const mapStateToProps = state => ({
    photos: state.photos
});

const mapDispatchToProps = dispatch => ({
    dispatch: photos => {
        dispatch(fetchSpeakerPhotos(photos));
    }
});

const SpeakerDeckConfig = connect(mapStateToProps, mapDispatchToProps)(SpeakerDeckConfigComponent);

export default SpeakerDeckConfig;
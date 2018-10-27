import { connect } from 'react-redux';
import SpeakerDeckConfigComponent from '../components/elements/SpeakerDeckConfigComponent';
import { fetchSpeakerPhotos } from '../actions';

const mapDispatchToProps = dispatch => ({
    dispatch: photos => {
        dispatch(fetchSpeakerPhotos(photos), { allowMore: true });
    }
});

const mapStateToProps = state => ({
    photos: state.photos
});

const SpeakerDeckConfig = connect(mapStateToProps, mapDispatchToProps)(SpeakerDeckConfigComponent);

export default SpeakerDeckConfig;
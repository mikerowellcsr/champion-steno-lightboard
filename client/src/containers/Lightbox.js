import { connect } from 'react-redux';
import LightboxComponent from '../components/elements/LightboxComponent';
import { fetchSpeakerPhotos } from '../actions';

const mapStateToProps = state => ({
    keyPress: state.keyPress.key,
    photos: state.photos,
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    dispatch: photos => {
        dispatch(fetchSpeakerPhotos(photos), { allowMore: true });
    }
});

const Lightbox = connect(mapStateToProps, mapDispatchToProps)(LightboxComponent);

export default Lightbox;
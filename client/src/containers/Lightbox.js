import { connect } from 'react-redux';
import LightboxComponent from '../components/elements/LightboxComponent';

const Lightbox = connect(state => ({
    users: state.users,
    keyPress: state.keyPress.key
}), {})(LightboxComponent);

export default Lightbox;
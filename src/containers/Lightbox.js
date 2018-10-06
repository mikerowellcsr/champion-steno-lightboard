import { connect } from 'react-redux';
import LightboxComponent from '../components/elements/LightboxComponent';

const Lightbox = connect(state => ({
    users: state.users,
    key: state.key
}), {})(LightboxComponent);

export default Lightbox;
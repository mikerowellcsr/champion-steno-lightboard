import { connect } from 'react-redux';
import DashboardComponent from '../components/DashboardComponent';
import { userLoggedOn } from "../actions";

const mapDispatchToProps = dispatch => ({
    dispatch: (username, socketId) => {
        dispatch(userLoggedOn(username, socketId));
    }
});

const mapStateToProps = state => ({
    keyPress: state.keyPress.key,
    photos: state.photos,
    users: state.users
});

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);

export default Dashboard;
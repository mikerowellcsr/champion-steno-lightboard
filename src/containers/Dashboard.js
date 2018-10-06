import { connect } from 'react-redux';
import DashboardComponent from '../components/DashboardComponent';
import { userLoggedOn, keyPressReceived } from "../actions";

const mapDispatchToProps = dispatch => ({
    dispatch: (username, socketId) => {
        dispatch(userLoggedOn(username, socketId));
    },

    keyPress: (key) => {
        dispatch(keyPressReceived(key));
    }
});

const Dashboard = connect(state => ({
    users: state.users
}), mapDispatchToProps)(DashboardComponent);

export default Dashboard;
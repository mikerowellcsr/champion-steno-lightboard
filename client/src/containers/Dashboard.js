import { connect } from 'react-redux';
import DashboardComponent from '../components/DashboardComponent';
import { userLoggedOn } from "../actions";

const mapDispatchToProps = dispatch => ({
    dispatch: (username, socketId) => {
        dispatch(userLoggedOn(username, socketId));
    }
});

const Dashboard = connect(state => ({
    users: state.users,
    keyPress: state.keyPress.key
}), mapDispatchToProps)(DashboardComponent);

export default Dashboard;
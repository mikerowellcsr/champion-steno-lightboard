import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import * as routes from '../Constants/Routes';
import AccountPage from './Account';
import Dashboard from './Dashboard';
import HomePage from './Home';
import Navigation from './Navigation';
import LandingPage from './Landing';
import PasswordForgetPage from './PasswordForget';
import SignUpPage from './SignUp';
import SignInPage from './SignIn'
import withAuthentication from './withAuthentication';
import './App.css';

const App = () =>
    <Router>
        <div>
            <Navigation />
            <Route
                exact path={routes.LANDING}
                component={LandingPage}
            />
            <Route
                exact path={routes.SIGN_UP}
                component={SignUpPage}
            />
            <Route
                exact path={routes.SIGN_IN}
                component={SignInPage}
            />
            <Route
                exact path={routes.SIGN_OUT}
                component={LandingPage}
            />
            <Route
                exact path={routes.PASSWORD_FORGET}
                component={PasswordForgetPage}
            />
            <Route
                exact path={routes.HOME}
                component={HomePage}
            />
            <Route
                exact path={routes.ACCOUNT}
                component={AccountPage}
            />
            <Route
                exact path={routes.DASHBOARD}
                component={Dashboard}
            />
        </div>
    </Router>;
// class App extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             authUser: null
//         };
//     }
//
//     componentDidMount() {
//          firebase.auth.onAuthStateChanged(authUser => {
//              authUser ? this.setState({authUser}) : this.setState({authUser: null});
//          });
//     }
//
//     render() {
//         return(
//             <Router>
//                 <div>
//                     <Navigation authUser={this.state.authUser} />
//                     <Route
//                         exact path={routes.LANDING}
//                         component={LandingPage}
//                     />
//                     <Route
//                         exact path={routes.SIGN_UP}
//                         component={SignUpPage}
//                     />
//                     <Route
//                         exact path={routes.SIGN_IN}
//                         component={SignInPage}
//                     />
//                     <Route
//                          exact path={routes.SIGN_OUT}
//                          component={LandingPage}
//                     />
//                     <Route
//                         exact path={routes.PASSWORD_FORGET}
//                         component={PasswordForgetPage}
//                     />
//                     <Route
//                         exact path={routes.HOME}
//                         component={HomePage}
//                     />
//                     <Route
//                         exact path={routes.ACCOUNT}
//                         component={AccountPage}
//                     />
//                     <Route
//                          exact path={routes.DASHBOARD}
//                          component={Dashboard}
//                     />
//                 </div>
//             </Router>
//         )
//     }
// }

export default withAuthentication(App);
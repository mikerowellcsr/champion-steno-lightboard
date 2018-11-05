import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import * as routes from './constants/Routes';
import AccountPage from './components/Account';
import HomePage from './components/Home';
import LightboxPage from './containers/Lightbox';
import PasswordForgetPage from './components/PasswordForget';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn'
import withAuthentication from './components/withAuthentication';
import './App.css';
import DashboardComponent from './containers/Dashboard';
import Favicon from 'react-favicon';

// console.log(process.env);

const App = () =>
    <BrowserRouter>
        <div>
            <Favicon url={['/images/championcup.png']}/>
            <Route
                exact path={routes.LIGHTBOX}
                component={LightboxPage}
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
                component={SignInPage}
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
                component={DashboardComponent}
            />
        </div>
    </BrowserRouter>;

export default withAuthentication(App);
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import * as routes from './constants/Routes';
import AccountPage from './components/Account';
import Dashboard from './components/Dashboard';
import HomePage from './components/Home';
import Navigation from './components/Navigation';
import LandingPage from './components/Landing';
import PasswordForgetPage from './components/PasswordForget';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn'
import withAuthentication from './components/withAuthentication';
import './App.css';

const App = () =>
    <Router>
        <div>
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

export default withAuthentication(App);
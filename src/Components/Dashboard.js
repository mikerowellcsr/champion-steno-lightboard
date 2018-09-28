import React from 'react';
import DocumentTitle from 'react-document-title';
import AuthUserContext from './AuthUserContext';
import withAuthorization from './withAuthorization';
import { Container } from 'reactstrap';
import Navigation from "./Navigation";

const Dashboard = () =>
    <div>
        <DocumentTitle title="Lightbox Dashboard"/>
        <Navigation />
        <Container>
            <h1>
                This is the Dashboard.
            </h1>
        </Container>
    </div>;

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Dashboard);

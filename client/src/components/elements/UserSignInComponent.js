import React from 'react';
import PropTypes from 'prop-types';
import setupSocket from '../../sockets';
import DocumentTitle from 'react-document-title';
import {
    Button,
    Container,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight, faCog
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/img/champion-steno-logo-300x206.png';
import Navigation from '../Navigation';
import withAuthorization from "../withAuthorization";
import connect from "react-redux/es/connect/connect";

class UserSignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
         this.setState({
             username: event.target.value
         });
    }

    handleSubmit(event) {
        const { store } = this.context;
        setupSocket(store.dispatch, this.state.username);
        event.preventDefault();
    }

    render() {
        library.add(faArrowRight);

        return(
            <div className="sign-in-box">
                <DocumentTitle title="Champion Steno Sign-In"/>
                <Navigation />
                <div className="padding-top" />
                <Container>
                    <Row>
                        <Col xs="6" sm="4" />
                        <Col xs="6" sm="4">
                            <img src={Logo} className='sign-in__logo' alt="Champion Steno Logo" />
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="name" size="lg" sm={2}>Name</Label>
                                    <Col sm={10} className='text-input'>
                                        <Input
                                            autoFocus
                                            className="margin-bottom__thin"
                                            bsSize="lg"
                                            type="name"
                                            name="name"
                                            id="name"
                                            placeholder="Type in your name."
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col sm={10}>
                                        <Button
                                            size="lg"
                                            type="submit"
                                            color="info"
                                            disabled={!this.state.username}>Join Session</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                            <div className="margin-top">
                                <DashboardLink authUser={this.props.authUser} />
                            </div>
                        </Col>
                        <Col xs="6" sm="4" />
                    </Row>
                </Container>
            </div>
        );
    };
}

const DashboardLink = ({ authUser }) =>
    <div>
        {authUser ? <a href="/dashboard"
                        title="To Dashboard"
                        className="user-sign-in--dashboard-link">
            Go to Dashboard <FontAwesomeIcon icon="arrow-right" />
        </a> : ''}
    </div>;

UserSignIn.propTypes = {
    dispatch: PropTypes.func.isRequired
};

UserSignIn.contextTypes = {
    store: PropTypes.object
};

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(UserSignIn);

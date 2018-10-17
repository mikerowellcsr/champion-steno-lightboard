import React, { Component } from 'react';
import {
    withRouter
} from 'react-router-dom';
import { auth, db } from '../firebase';
import * as routes from '../constants/Routes';
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Row
} from 'reactstrap';
import DocumentTitle from "react-document-title";
import Logo from '../assets/img/champion-steno-logo-300x206.png';

const SignUpPage = ({ history }) =>
    <div className="sign-in-box">
        <DocumentTitle title="Admin Sign-Up"/>
        <Container>
            <Row>
                <Col xs="3" />
                <Col xs="auto">
                    <img src={Logo} className='sign-in__logo' alt="Champion Steno Logo" />
                    <h4>
                        Lightboard Admin Sign-Up
                    </h4>
                    <SignUpForm history={history} />
                </Col>
                <Col sm="3" />
            </Row>
        </Container>
    </div>;

const INITIAL_STATE = {
    email: '',
    name: {
        first: '',
        last: ''
    },
    passwordOne: '',
    passwordTwo: '',
    errors: null
};

const byPropKey = function(property, value) {
    switch (property) {
        case 'email':

            // Make sure that email is valid.
            const valid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            let cleanedEmail = value.trim();

            return function () {
                return valid ? {[property]: cleanedEmail} : null;
            };
        case 'name':
            let nameObj = {
                first: '',
                last: ''
            };

            if (value && value.length !== 0) {
                const ex = /^[a-z _]+$/i;
                let cleanedName = value.trim().split(' ');

                // Make sure that the trimmed name contains two parts when split.
                // Make sure that input is alphanumeric.
                if (cleanedName.length === 2 && ex.test(value)) {
                    nameObj.first = cleanedName[0];
                    nameObj.last = cleanedName[1];
                }
            }
            return function () {
                return {[property]: nameObj};
            };
        default:
            return function () {
                return {[property]: value};
            };
    }
};

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event)  => {
         const {
             email,
             name,
             passwordOne
         } = this.state;

         const {
             history
         } = this.props;

         auth.doCreateUserWithEmailAndPassword(email, passwordOne, name)
             .then(authUser => {
                 db.doCreateUser(authUser.user.uid, email)
                     .then(() => {
                         console.log(authUser);
                         this.setState({ ...INITIAL_STATE });
                         history.push(routes.DASHBOARD);
                     })
                     .catch(error => {
                         this.setState(byPropKey('errors', error));
                     })
             })
             .catch(error => {
                 this.setState(byPropKey('errors', error));
             });
         event.preventDefault();
    };

    render() {
        const {
            email,
            name,
            passwordOne,
            passwordTwo,
            errors
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            !email ||
            !name ||
            name.first === '' ||
            name.last === '';

        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup row>
                    <Label for="name" sm={4}>Name</Label>
                    <Col sm={8}>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Charlie Lu"
                            value={this.name}
                            onChange={
                                e => this.setState(byPropKey('name', e.target.value))
                            } />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={4}>Email</Label>
                    <Col sm={8}>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="charlie.lu@gmail.com"
                            value={this.email}
                            onChange={
                                e => this.setState(byPropKey('email', e.target.value))
                            } />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="passwordOne" sm={4}>Password</Label>
                    <Col sm={8}>
                        <Input
                            type="password"
                            name="passwordOne"
                            id="passwordOne"
                            value={this.passwordOne}
                            onChange={
                                e => this.setState(byPropKey('passwordOne', e.target.value))
                            } />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="passwordOne" sm={4}>Verify Password</Label>
                    <Col sm={8}>
                        <Input
                            type="password"
                            name="passwordTwo"
                            id="passwordTwo"
                            value={this.passwordTwo}
                            onChange={
                                e => this.setState(byPropKey('passwordTwo', e.target.value))
                            } />
                    </Col>
                </FormGroup>
                {
                    !errors
                        ? ''
                        :  <FormGroup row className="sign-in__errors_form-group">
                            <div className="sign-in__errors">{ <p>{errors.message}</p> }</div>
                        </FormGroup>
                }
                <Button
                    type="submit"
                    disabled={isInvalid}
                    color="success"
                    block>
                    Submit
                </Button>
            </Form>
        );
    }
}

export default withRouter(SignUpPage);
export {
    SignUpForm
}
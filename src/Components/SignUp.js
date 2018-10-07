import React, { Component } from 'react';
import {
    Link,
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

const SignUpPage = ({ history }) =>
    <div>
        <Container>
            <Row>
                <Col xs="3" />
                <Col xs="auto">
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
                    console.log(nameObj);
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
             passwordOne
         } = this.state;

         const {
             history
         } = this.props;

         auth.doCreateUserWithEmailAndPassword(email, passwordOne)
             .then(authUser => {
                 db.doCreateUser(authUser.user.uid, email)
                     .then(() => {
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

const SignUpLink = () =>
    <p>
        Sign up for an account
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up </Link>
    </p>;

export default withRouter(SignUpPage);
export {
    SignUpForm,
    SignUpLink
}
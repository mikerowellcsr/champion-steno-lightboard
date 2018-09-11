import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../Constants/Routes';
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Row
} from 'reactstrap';

const SignUpPage = () =>
    <div>
        <Container>
            <Row>
                <Col xs="3" />
                <Col xs="auto">
                    <SignUpForm />
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

const byPropKey = (property, value) => () => ({
    [property]: value
});

const checkName = (property, value) => () => ({
    [property]: value
}, console.log(validateName(value)));

// const outputName = fullName => {
//      if (validateName(fullName)) {
//           return validateName(fullName);
//      } else {
//          return new Error('That name is invalid. Please check to make sure name is composed of a first and last name. A name can only contain alphanumeric characters.');
//      }
// };
//
// const validateName = fullName => {
//     if (fullName && fullName.length !== 0) {
//         const ex = /^[a-z _]+$/i;
//         let cleanedName = fullName.split(' ');
//
//         fullName.trim();
//
//         // Make sure that the trimmed name contains two parts when split.
//         // Make sure that input is alphanumeric.
//         if (cleanedName.length === 2 && ex.test(fullName)) {
//             return {
//                 first: cleanedName[0],
//                 last: cleanedName[1]
//             };
//         }
//     }
//     return false;
// };

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event)  => {

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
            email === '' ||
            (name === ''  && !validateName(this.state.name));

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
                    disabled={isInvalid}>
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

export default SignUpPage;
export {
    SignUpForm,
    SignUpLink
}
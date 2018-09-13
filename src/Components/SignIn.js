import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignUpLink, {SignUpForm} from './SignUp';
import { auth } from '../firebase';
import * as routes from '../Constants/Routes';
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

const SignInPage = ({ history }) =>
    <div>
        <Container>
            <Row>
                <Col xs="3" />
                <Col xs="auto">
                    <SignInForm history={history} />
                </Col>
                <Col sm="3" />
            </Row>
        </Container>
        <h1>Sign In Page</h1>
    </div>;

const byPropKey = (propertyName, value)  => () => ({
    [propertyName]: value
});

const INITIAL_STATE = {
    email: '',
    password: '',
    errors: null
};

class SignInForm extends Component {
    constructor(props) {
         super(props);

         this.state = { ...INITIAL_STATE };
    }

    onSubmit = (e) => {
        const {
            email,
            password
        } = this.state;

        const {
            history
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ... INITIAL_STATE });
                history.push(routes.DASHBOARD);
            })
            .catch(error => {
                this.setState(byPropKey('errors', error));
            });
        e.preventDefault();
    };

    render() {
        const {
            email,
            password
        } = this.state;

        const isInvalid =
            email === '' ||
            password === '';

        return(
            <Form onSubmit={this.onSubmit}>
                <FormGroup row>
                    <Label for="email" sm={4}>Email</Label>
                    <Col sm={8}>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            value={this.email}
                            onChange={e => this.setState(byPropKey('email', e.target.value))}
                            required
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={4}>Password</Label>
                    <Col sm={8}>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            value={this.password}
                            onChange={e => this.setState(byPropKey('password', e.target.value))}
                            required
                        />
                    </Col>
                </FormGroup>
                <Button
                    type="submit"
                    disabled={isInvalid}
                    color="success"
                    block>
                    Log in
                </Button>
            </Form>
        )
    }
}

export default SignInPage;
import React, { Component } from 'react';
import { auth } from '../firebase';
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
import Logo from '../assets/img/champion-steno-logo-300x206.png';

const SignInPage = ({ history }) =>
    <div className="sign-in-box">
        <Container>
            <Row>
                <Col xs="6" sm="4" />
                <Col xs="6" sm="4">
                    <img src={Logo} className='sign-in__logo' alt="Champion Steno Logo" />
                    <h3>
                        Lightbox Admin Sign-In
                    </h3>
                    <SignInForm history={history} />
                </Col>
                <Col xs="6" sm="4" />
            </Row>
        </Container>
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
                this.setState({ ...INITIAL_STATE });
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
            password,
            errors
        } = this.state;

        const isInvalid =
            email === '' ||
            password === '';

        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup row>
                        <Label
                            size="lg"
                            for="email"
                            sm={4}>
                                Email
                        </Label>
                        <Col sm={8}>
                            <Input
                                bsSize="lg"
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
                        <Label
                            size="lg"
                            for="password"
                            sm={4}>
                                Password
                        </Label>
                        <Col sm={8}>
                            <Input
                                bsSize="lg"
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
                        size="lg"
                        type="submit"
                        disabled={isInvalid}
                        color="info"
                        block>
                        Log in
                    </Button>
                </Form>
                <p className="sign-in__errors">{ errors && <p>{errors.message}</p> }</p>
            </div>
        )
    }
}

export default SignInPage;
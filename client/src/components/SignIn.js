import React, { Component } from 'react';
import { auth } from '../firebase';
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
import DocumentTitle from 'react-document-title';

const SignInPage = ({ history }) =>
    <div className="sign-in-box">
        <DocumentTitle title="Admin Sign-In"/>
        <Container>
            <Row>
<<<<<<< HEAD
                <Col sm="4" xs="6" />
                <Col sm="auto" xs="auto">
=======
                <Col xs="6" sm="4" />
                <Col xs="6" sm="4">
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
                    <img src={Logo} className='sign-in__logo' alt="Champion Steno Logo" />
                    <h4>
                        Lightboard Admin Sign-In
                    </h4>
                    <SignInForm history={history} />
                </Col>
<<<<<<< HEAD
                <Col sm="4" xs="6" />
=======
                <Col xs="6" sm="4" />
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
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
                history.push({
                    pathname: '/dashboard',
                    state: {
                        authUser: email
                    }
                });
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
                    <div className="text-input">
                        <FormGroup row>
                            <Label
                                size="lg"
                                for="email"
                                sm={4}>
                                Email
                            </Label>
                            <Col sm={8}>
                                <Input
                                    autoFocus
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
                        {
                            !errors
                                ? ''
                                :  <FormGroup row className="sign-in__errors_form-group">
                                    <div className="sign-in__errors">{ <p>{errors.message}</p> }</div>
                                </FormGroup>
                        }
                        <Button
                            size="lg"
                            type="submit"
                            disabled={isInvalid}
                            color="info"
                            block>
                            Log in
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default SignInPage;
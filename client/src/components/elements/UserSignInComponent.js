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
import Logo from '../../assets/img/champion-steno-logo-300x206.png';

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
        return(
            <div className="sign-in-box">
                <DocumentTitle title="Champion Steno Sign-In"/>
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
                        </Col>
                        <Col xs="6" sm="4" />
                    </Row>
                </Container>
            </div>
        );
    };
}

UserSignIn.propTypes = {
    dispatch: PropTypes.func.isRequired
};

UserSignIn.contextTypes = {
    store: PropTypes.object
};

export default UserSignIn;
import React from 'react';
import PropTypes from 'prop-types';
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
        this.props.dispatch(this.state.username, '000');
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col xs="6" sm="4" />
                        <Col xs="6" sm="4">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label for="name" sm={2}>Name</Label>
                                    <Col sm={10}>
                                        <Input
                                            type="name"
                                            name="name"
                                            id="name"
                                            placeholder="Type in your full name."
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                        <Button type="submit">Submit</Button>
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

export default UserSignIn;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import SlidingPane from 'react-sliding-pane';
import DocumentTitle from 'react-document-title';
import ConfigSpeakerDeck from './Config/SpeakerDeck';
import SignOutButton from './SignOut';

import * as routes from '../Constants/Routes';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false,
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    render() {
        library.add(faCog);
        return(
            <div>
                {
                    this.props.authUser
                    ? <NavigationAuth state={this.state} />
                    : <NavigationNonAuth />
                }
            </div>
        );
    }
}


const NavigationAuth = ({ state }) =>
    <div>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Champion Steno Lightboard</NavbarBrand>
            <NavbarToggler onClick={this.props.toggle} />
            <Collapse isOpen={this.props.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/account/">Account</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                            <FontAwesomeIcon icon="cog" /> Configure
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <Container>
            <DocumentTitle title="Champion Steno Lightboard" />
            <div ref={ref => this.el = ref}>
                <SlidingPane
                    isOpen={ this.state.isPaneOpenLeft }
                    title="Preferences"
                    from="left"
                    width="80%"
                    onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                    <h2>Speaker Deck</h2>
                    <ConfigSpeakerDeck />
                </SlidingPane>
            </div>
        </Container>
    </div>;

const NavigationNonAuth = () =>
    <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
    </ul>

export default Navigation;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faUser,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
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
import { auth } from '../firebase';

import * as routes from '../Constants/Routes';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {
                    this.props.authUser
                    ? <NavigationAuth />
                    : <NavigationNonAuth />
                }
            </div>
        );
    }
}

class NavigationAuth extends Component {
    constructor() {
        super();

        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false,
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
        this.toggleLeftPane = this.toggleLeftPane.bind(this);
    }

    toggle() {
        this.setState({
            isPaneOpenLeft: !this.state.isPaneOpenLeft
        });
    }

    toggleLeftPane() {
        this.setState({
            isPaneOpenLeft: true
        });
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    render() {
        library.add(faCog);
        library.add(faUser);
        library.add(faSignOutAlt);

        return <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Champion Steno Lightboard</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/account">
                                <FontAwesomeIcon icon="user" />
                                &nbsp;&nbsp;Account
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                                <FontAwesomeIcon icon="cog" />
                                &nbsp;&nbsp;Configure
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={auth.doSignOut}>
                                <FontAwesomeIcon icon="sign-out-alt" />
                                &nbsp;&nbsp;Sign Out
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
    }
}
const NavigationNonAuth = () =>
    <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
    </ul>

export default Navigation;
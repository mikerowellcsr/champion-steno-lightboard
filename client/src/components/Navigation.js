import React, { Component } from 'react';
import Modal from 'react-modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faHome,
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
import { auth } from '../firebase';
import { connect } from 'react-redux';
import SlidingPane from 'react-sliding-pane';
import DocumentTitle from 'react-document-title';
import SpeakerDeckConfig from '../containers/SpeakerDeckConfig';

const Navigation = ({ authUser }) =>
    <div>
        {
            authUser
                ? <NavigationAuth
                    user={ authUser.displayName }
                    authUser={ authUser } />
                : <NavigationNonAuth />
        }
    </div>;

class NavigationAuth extends Component {
    constructor() {
        super();

        this.state = {
            isPaneOpen: false,
            isPaneOpenBottom: false,
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
<<<<<<< HEAD
=======
        this.toggleLeftPane = this.toggleLeftPane.bind(this);
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
    }

    toggle() {
        this.setState({
<<<<<<< HEAD
            isOpen: !this.state.isOpen
=======
            isPaneOpenBottom: !this.state.isPaneOpenBottom
        });
    }

    toggleLeftPane() {
        this.setState({
            isPaneOpenBottom: true
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
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
            <Navbar light
                    fixed="top"
                    expand="md">
<<<<<<< HEAD
                <NavbarBrand href="/dashboard" className="navbar-badge__text--expanded">Champion Steno Lightboard</NavbarBrand>
                <NavbarBrand href="/dashboard" className="navbar-badge__text--collapsed">Lightboard</NavbarBrand>
=======
                <NavbarBrand href="/dashboard">Champion Steno Lightboard</NavbarBrand>
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
                <NavbarToggler onClick={ this.toggle } />
                <Collapse isOpen={ this.state.isOpen } navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/account">
                                <FontAwesomeIcon icon="user" />
<<<<<<< HEAD
                                <span className="nav-link__text">&nbsp;&nbsp;{ this.props.user }</span>
=======
                                &nbsp;&nbsp;{ this.props.user }
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"
                                     onClick={ () =>
                                         this.setState(
                                             prevState => ({
                                                 isPaneOpenBottom: !prevState.isPaneOpenBottom
                                             })
                                         )
                                     }>
                                <FontAwesomeIcon icon="cog" />
<<<<<<< HEAD
                                <span className="nav-link__text">&nbsp;&nbsp;Configure Deck</span>
=======
                                &nbsp;&nbsp;Configure Deck
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="#"
                                onClick={ auth.doSignOut }>
                                <FontAwesomeIcon icon="sign-out-alt" />
<<<<<<< HEAD
                                <span className="nav-link__text">&nbsp;&nbsp;Sign Out</span>
=======
                                &nbsp;&nbsp;Sign Out
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Container>
                <DocumentTitle title="Champion Steno Lightboard" />
                <div ref={ ref => this.el = ref }>
                    <SlidingPane
                        className="sliding-pane"
                        isOpen={ this.state.isPaneOpenBottom }
                        title="Configure Speaker Deck"
                        from="bottom"
                        width="100%"
                        onRequestClose={ () => this.setState({ isPaneOpenBottom: false }) }>
                        <SpeakerDeckConfig />
                    </SlidingPane>
                </div>
            </Container>
        </div>;
    }
}

class NavigationNonAuth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        library.add(faHome);
        library.add(faUser);

        return (
            <div>
                <Navbar light fixed="top" expand="md">
<<<<<<< HEAD
                    <NavbarBrand href="/" className="navbar-badge__text--expanded">Champion Steno Lightboard</NavbarBrand>
                    <NavbarBrand href="/" className="navbar-badge__text--collapsed">Lightboard</NavbarBrand>
=======
                    <NavbarBrand href="/">Champion Steno Lightboard</NavbarBrand>
>>>>>>> 45e0acdaccf72a0b1cd35bfa55105c4a49343f3c
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://www.championsteno.com/">
                                    <FontAwesomeIcon icon="home" />
                                    &nbsp;&nbsp;Home Page
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/signin">
                                    <FontAwesomeIcon icon="user" />
                                    &nbsp;&nbsp;Admin Sign-In
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Navigation);
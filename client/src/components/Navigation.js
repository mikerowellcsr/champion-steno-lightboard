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
import ConfigSpeakerDeck from './elements/SpeakerDeck';

const Navigation = ({ authUser }) =>
    <div>
        {
            authUser
            ? <NavigationAuth
                    user={authUser.email} />
            : <NavigationNonAuth/>
        }
    </div>;

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
            <Navbar light fixed="top" expand="md">
                <NavbarBrand href="/dashboard">Champion Steno Lightboard</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/account">
                                <FontAwesomeIcon icon="user" />
                                &nbsp;&nbsp;{this.props.user}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                                <FontAwesomeIcon icon="cog" />
                                &nbsp;&nbsp;Configure
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="#"
                                onClick={auth.doSignOut}>
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

         return(
             <div>
                 <Navbar light fixed="top" expand="md">
                     <NavbarBrand href="/">Champion Steno Lightboard</NavbarBrand>
                     <NavbarToggler onClick={this.toggle} />
                     <Collapse isOpen={this.state.isOpen} navbar>
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

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
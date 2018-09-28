import React, { Component } from 'react';
import { UserSignIn } from '../containers/UserSignIn';
import { UserList } from '../containers/UserList';
import reducers from '../reducers';
import setupSocket from '../sockets';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { userLoggedOn } from '../actions';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);
const socket = setupSocket(store.dispatch, username)
store.dispatch(userLoggedOn('Me', '00000'));

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            registered: false,
            users: []
        };
    }

    render() {
        return (
            <div>
                <UserSignIn />
                <UserList />
            </div>
        );
    }
}

// class LandingPage extends Component {
//     constructor(props) {
//         super(props);
//
//         this.store = this.props.store;
//
//         this.state = {
//             name: '',
//             registered: false,
//             users: []
//         };
//
//         this.socket = io('localhost:4001');
//
//         this.socket.on('bound_user', (data) => {
//
//         });
//     }
//
//     handleUserLoggedOn = e => {
//         this.setState({'registered': true});
//         this.socket.emit('register_user', {
//             fullName: this.state.name,
//             socketId: this.socket.id
//         });
//         e.preventDefault();
//     };
//
//     render() {
//         const { props } = this.props;
//          return(
//              this.state.registered
//                 ? <div>
//                      <h1>All registered!</h1>
//                      {
//                          this.state.users.map(user => {
//                              return <div>{user.fullName} : {user.id}</div>
//                          })
//                      }
//                  </div>
//                 : <div>
//                     <Container>
//                         <h1>Landing Page!</h1>
//                         <Row>
//                             <Col xs="6" sm="4" />
//                             <Col xs="6" sm="4">
//                                 <Form onSubmit={props.dispatch(userLoggedOn)}>
//                                     <FormGroup row>
//                                         <Label for="name" sm={2}>Name</Label>
//                                         <Col sm={10}>
//                                             <Input
//                                                 type="name"
//                                                 name="name"
//                                                 id="name"
//                                                 placeholder="Type in your full name."
//                                                 onChange={e => this.setState({'name': e.target.value})}/>
//                                         </Col>
//                                     </FormGroup>
//                                     <FormGroup row>
//                                         <Col sm={{ size: 10, offset: 2 }}>
//                                             <Button type="submit">Submit</Button>
//                                         </Col>
//                                     </FormGroup>
//                                 </Form>
//                             </Col>
//                             <Col xs="6" sm="4" />
//                         </Row>
//                     </Container>
//                 </div>
//         )
//     }
//
// }

export default LandingPage;
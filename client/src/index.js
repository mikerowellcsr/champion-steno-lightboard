import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-sliding-pane/dist/react-sliding-pane.css';

import App from './App';

import { Provider } from 'react-redux';
import reducers from './reducers';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import handleKeyPress from './sagas';
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleWare)
);

const HOST = process.env.REACT_APP_ENV === 'dev' ? 'ws://localhost:8000' : window.location.origin.replace(/^http/, 'ws');
console.log(HOST);

const socket = new WebSocket(HOST);

sagaMiddleWare.run(handleKeyPress, { socket });

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);

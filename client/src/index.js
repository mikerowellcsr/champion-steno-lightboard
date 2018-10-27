import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './index.css';

import App from './App';

import { Provider } from 'react-redux';
import reducers from './reducers';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './sagas';
import ReconnectingWebsocket from 'reconnecting-websocket';
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleWare)
);

const rcwsOptions = {
    automaticOpen: true,
    connectionTimeout: 2500,
    maxRetries: Infinity,
    maxReconnectionDelay: 10000,
    minConnectionDelay: 2000
};

const HOST = process.env.REACT_APP_ENV === 'dev'
    ? 'ws://localhost:8000'
    : window.location.origin.replace(/^http/, 'ws');

const socket = new ReconnectingWebsocket(HOST, [], rcwsOptions);

sagaMiddleWare.run(rootSaga, { socket });

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);

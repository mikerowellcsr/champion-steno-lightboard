import React from 'react';
import ReactDOM from 'react-dom';
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

const socket = new WebSocket('ws://localhost:8989');

sagaMiddleWare.run(handleKeyPress, { socket });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

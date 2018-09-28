import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-sliding-pane/dist/react-sliding-pane.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// function render() {
//     ReactDOM.render(<App store={store} />, document.getElementById('root'));
// }
//
// store.subscribe(render);
// render();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

registerServiceWorker();

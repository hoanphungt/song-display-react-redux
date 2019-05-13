import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
    <Provider store={createStore(reducers, enhancer)}>
        <App />
    </Provider>,
    document.querySelector('#root')
)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/rootReducer';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider} from 'react-redux'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
 )
)

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from'redux-promise';  // for AJAX calls
import App from './components/app';
import reducers from './reducers';
import 'react-mdl/extra/material.js';

//ReduxPromise is applied as middleware.
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
		applyMiddleware(ReduxPromise)
	));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes';

// store.subscribe(() =>
//     console.log(store.getState())
// );

const Store = store();

const Root = () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);

export default Root;

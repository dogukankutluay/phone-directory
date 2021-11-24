import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import { Provider as ReduxStoreProvider } from 'react-redux';
import configureStore from './providers/reduxConfigureStore';

const history = createBrowserHistory();

const store = configureStore();

ReactDOM.render(
  <ReduxStoreProvider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </ReduxStoreProvider>,
  document.getElementById('root')
);

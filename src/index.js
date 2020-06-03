import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import configureStore from './configureStore';
import App from './App';
import * as serviceWorker from './serviceWorker';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}
const store = configureStore();
store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <HttpsRedirect>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </HttpsRedirect>,
  document.getElementById('root'),
);
serviceWorker.register();

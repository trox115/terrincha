import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HttpsRedirect>
    <Router>
      <App />
    </Router>
  </HttpsRedirect>,
  document.getElementById('root'),
);
serviceWorker.register();

import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import { Provider } from 'react-redux';

import './normalize.css';

import Routes from './router.config';
import Store from './redux-root/store.config';

import registerServiceWorker from './registerServiceWorker';


render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

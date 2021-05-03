import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithHistory } from "@/components";
import { Provider } from 'react-redux';
import store from "@/redux/store";


import './index.css';

import App from './App';
require('dotenv').config();

// Auth0ProviderWithHistory provides access to Auth0 tokens throughout the application
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH0_DOMAIN
;
const clientid = process.env.REACT_APP_AUTH0_CLIENT_ID
;

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Auth0Provider
    domain={domain}
    clientid={clientid}
    redirectUri={window.location.origin}
  >
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      
    </Auth0Provider>
  </BrowserRouter>

  
  
  </React.StrictMode>
);



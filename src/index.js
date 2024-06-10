import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import './app.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();

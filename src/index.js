import React from 'react';
import './styles/index.css'; // Asegúrate de importar los estilos de Tailwind aquí
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-2s057x7xpatff0ob.us.auth0.com"
      clientId="8kaN1MC2Tdw9EJyU7Zoa46JUO9NNg56I"
      redirectUri="http://localhost:4040/callback"
    >
      <App></App>
    </Auth0Provider>
  </React.StrictMode>,
);
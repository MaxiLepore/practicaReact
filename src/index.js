import React from 'react';
import './styles/index.css'; // Asegúrate de importar los estilos de Tailwind aquí
import Header from './components/header'
import Footer from './components/footer'
import Carrousel from './components/carrousel'
import Panel from './components/panel'
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-2s057x7xpatff0ob.us.auth0.com"
      clientId="8kaN1MC2Tdw9EJyU7Zoa46JUO9NNg56I"
      redirectUri="http://localhost:4040/callback"
    >
      <div className="flex flex-col justify-start items-start w-full bg-purple-900 min-h-screen overflow-hidden">
                <div className="flex justify-center w-full h-20 m-0.5 bg-blue-200 flex-shrink-0" >
                  <Header></Header>
                </div>
                <div className="w-full flex-grow m-0.5 bg-blue-200">
                    <Carrousel /> 
                </div>
                <div className="w-full flex-grow m-0.5 bg-blue-200">
                    <Panel />
                </div>
                <div className="w-full h-41 m-0.5 bg-blue-200 flex-shrink-0">
                    <Footer />
                </div>
          </div>  
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
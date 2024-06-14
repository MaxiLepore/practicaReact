import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import Carrousel from './components/carrousel'
import Panel from './components/panel';
import Footer from './components/footer';
import Header from './components/header';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <Router>
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
        </Router>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);

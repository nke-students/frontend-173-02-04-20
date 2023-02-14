import React from 'react';
import ReactDOM from 'react-dom/client';
import {Features} from './components/Features'
import {Application} from './components/Application'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Features/>
    <Application/>
  </React.StrictMode>
);


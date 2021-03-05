import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import activities from './activities.json';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  (<React.StrictMode>
    <BrowserRouter>
      <App activities={activities} />
    </BrowserRouter>
  </React.StrictMode>)
  ,
  document.getElementById('root')
);
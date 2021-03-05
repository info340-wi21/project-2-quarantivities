import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import './index.css';
import App from './App';
import activities from './activities.json';
import * as d3 from 'd3';

ReactDOM.render(
  <React.StrictMode>
    <App activities={activities}/>
  </React.StrictMode>,
  document.getElementById('root')
);
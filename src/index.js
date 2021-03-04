import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import './index.css';
import App from './App';
import activities from './activities.csv';
import * as d3 from 'd3';
//import reportWebVitals from './reportWebVitals';


let activitiesArr = [];

d3.csv(activities).then(function(activities) {
  activitiesArr.push(activities);
  });

ReactDOM.render(
  <React.StrictMode>
    <App activities={activitiesArr}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

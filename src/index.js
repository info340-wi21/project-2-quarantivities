import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import activities from './activities.json';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApJ0kYV22GpwhLl4m1ltQpJxs_4jNDrjM",
  authDomain: "quarantivities-2.firebaseapp.com",
  projectId: "quarantivities-2",
  storageBucket: "quarantivities-2.appspot.com",
  messagingSenderId: "332862832622",
  appId: "1:332862832622:web:965f4b5521422d7dfcd8ff",
  measurementId: "G-YP23439M29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics(); // this line gave an error

ReactDOM.render(
  (<React.StrictMode>
    <BrowserRouter>
      <App activities={activities} />
    </BrowserRouter>
  </React.StrictMode>)
  ,
  document.getElementById('root')
);
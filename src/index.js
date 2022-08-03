import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBdSr728QXMEhtv7ntabBwvcBVekJbkI98",
    authDomain: "anakramos-4b7c1.firebaseapp.com",
    projectId: "anakramos-4b7c1",
    storageBucket: "anakramos-4b7c1.appspot.com",
    messagingSenderId: "268849570376",
    appId: "1:268849570376:web:147a020eab575f01122e7d"
  };

  // Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhxISVzzh0Q4OPx8nzjWYe14iutacA2s4",
  authDomain: "la-casa-del-musico-seleme.firebaseapp.com",
  projectId: "la-casa-del-musico-seleme",
  storageBucket: "la-casa-del-musico-seleme.appspot.com",
  messagingSenderId: "1076481340979",
  appId: "1:1076481340979:web:21ec23231df908b398d546"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

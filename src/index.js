import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCqq_u4-z0JQi3_tBowkMzXHfRmnkE1fwc",
  authDomain: "rip-news.firebaseapp.com",
  databaseURL: "https://rip-news.firebaseio.com",
  projectId: "rip-news",
  storageBucket: "rip-news.appspot.com",
  messagingSenderId: "886252853930",
  appId: "1:886252853930:web:6df2a37cc37fbf859cced3"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

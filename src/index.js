import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import UserProvider from './context/UserContext';
<<<<<<< HEAD
import TranslationProvider from './context/TranslationContext';
=======
import AppContext from './context/AppContext';
>>>>>>> refs/remotes/origin/main

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <UserProvider>
        <TranslationProvider>
          <App />   
        </TranslationProvider>
      </UserProvider>
=======
      <AppContext>
        <App />   
      </AppContext>
>>>>>>> refs/remotes/origin/main
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

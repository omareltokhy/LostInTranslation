//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Login from './components/Login';
import Translate from './components/Translate';
import Profile from './components/Profile';

function App() {
	console.log('App.render')

  return (
    <BrowserRouter>
      <nav>
        <li>
          <NavLink to="/" />
        </li>  
        <li>
          <NavLink to="/translate" />
        </li>  
        <li>
          <NavLink to="/profile" />
        </li>  
      </nav>    
      <main>
        <Switch>
          <Route path="/" exact component={ Login } />   
        </Switch>
        <Switch>
          <Route path="/translate" component={ Translate } />   
        </Switch>
        <Switch>
          <Route path="/profile" component={ Profile } />   
        </Switch>
       
      </main>  
    </BrowserRouter>
  );
}

export default App;

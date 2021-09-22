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
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <h1>APPLICATION</h1>
      <BrowserRouter>
        <nav>
          <li>
            <NavLink to="/" />
            <NavLink to="/translate" />
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
    </div>
  );
}

export default App;

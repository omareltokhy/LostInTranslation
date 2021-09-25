//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Login from './components/Login';
import Translate from './components/Translate';
import Profile from './components/Profile';
import styles  from './components/Navbar.module.css'

function App() {
	console.log('App.render')

  return (
    <BrowserRouter>
      <nav className={styles.Navbar}>
        <h1 className={styles.header}>Lost In Translation</h1>
        <ul className={styles.NavbarMenu}>
          <li className={styles.NavbarMenuItem}>
            <NavLink exact to="/" className={styles.navlink}>Login</NavLink>
          </li>  
          <li className={styles.NavbarMenuItem}>
            <NavLink to="/translate" className={styles.navlink}>Translate</NavLink>
          </li>  
          <li className={styles.NavbarMenuItem}>
            <NavLink to="/profile" className={styles.navlink}>Profile</NavLink>
          </li> 
        </ul>
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

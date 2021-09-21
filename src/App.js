import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Login from './components/Login'
import Translate from './components/Translate'
import Profile from './components/Profile'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <li>
          <NavLink to="/login" />
          <NavLink to="/translate" />
          <NavLink to="/profile" />
        </li>
      </nav>
      <main>
        <Switch>
          <Route path="/" component={ Login } />   
        </Switch>
        <Switch>
          <Route path="/translate" component={ Translate } />   
        </Switch>
        <Switch>
          <Route path="/translate" component={ Profile } />   
        </Switch>
      </main>
    </BrowserRouter>

  );
}

export default App;

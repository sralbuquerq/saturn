import React from 'react';
import logo from './assets/logo.png';
import './App.scss';
import { Dashboard } from './pages/dashboard';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Add } from './pages/add';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Stars />
        <Router>
          <Header />
          <Switch>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export const Header = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="link">
          <Link to="/">Notícias</Link>
        </li>
        <li>
          <img src={logo} alt="Logo" />
        </li>
        <li  className="link">
          <Link to="/add">Adicionar Conteúdo</Link>
        </li>
      </ul>
    </nav>
  )
}

export const Stars = () => {
  let stars = [];
  for(let i=0; i<200; i++){
    stars.push(<div key={i} className="star"></div>)
  }
  return (
    <div className="stars">
      {stars}
    </div>
  )
}

export default App;

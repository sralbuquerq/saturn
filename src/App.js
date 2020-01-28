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

function Header() {
  return (
    <nav className="navbar">
      <ul>
        <li className="link">
          <Link to="/">Notícias</Link>
        </li>
        <li>
          <img src={logo} />
        </li>
        <li  className="link">
          <Link to="/add">Adicionar Conteúdo</Link>
        </li>
      </ul>
    </nav>
  )
}

export default App;

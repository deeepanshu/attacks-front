import React, { Component } from 'react';
import './App.css';
import  Login  from './components/Login/Login';
import  List  from './components/List/List';
import { Route, Switch, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
          <li><Link to="/list">List</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path={"/login"}  component={Login} />
          <Route  path={"/list"}  component={List} />
          <Route  path={"/abc"}  component={List} />
        </Switch>
      </div>
    
    );
  }
}

export default App;

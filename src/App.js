import React, { Component } from 'react';
import './App.css';
import  Login  from './components/Login/Login';
import  List  from './components/List/List';
import  Home  from './components/Home/Home';
import { Route, Switch, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        
        <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Docs</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
          <div className="row">
            <div className="col-md-6">
            <h3>Documentation</h3>
            <div>
                <h4>Backend APIs</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Base URL</td>
                            <td>http://localhost:5000</td>
                        </tr>
                        <tr>
                            <td>Login</td>
                            <td>/login</td>
                        </tr>
                        <tr>
                            <td>SafeLogin</td>
                            <td>/safelogin</td>
                        </tr>
                        <tr>
                            <td>List</td>
                            <td>/list</td>
                        </tr>
                        <tr>
                            <td>Seed</td>
                            <td>/seed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h4>SQL Injection Attacks</h4>
                <li>
                   To test SQL Injection Attack go to login page and in username paste "' OR 1=1 -- " or "'; DROP TABLE login; -- "
               </li>
               <li>
                   Then give any password, and press login.
               </li>
            </div>
        </div>
<div className="col-md-6">
<Switch>
        {/* <Route exact path={"/"}  component={Home} /> */}
          <Route exact path={"/login"}  component={Login} />
          <Route  path={"/list"}  component={List} />
        </Switch>
        </div>
</div>

        <div>
          </div>
        </div>
        
        

        
        
      </div>
    
    );
  }
}

export default App;

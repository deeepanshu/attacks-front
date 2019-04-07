import React, { Component } from 'react';
import './App.css';
import  Login  from './components/Login/Login';
import  List  from './components/List/List';
import  Navbar  from './components/Navbar/Navbar';
import  FortuneTeller  from './components/FortuneTeller/FortuneTeller';
import { Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import urlStore from './config/urlStore';
class App extends Component {

  constructor(props) {
    super(props);
    this.seedDb = this.seedDb.bind(this);
  }

  seedDb(e) {
    e.preventDefault();
    axios.get(urlStore.SEED)
      .then((response) => {
        alert("Database Seeded!");
      })
  }

  render() {
    return (
      <div>
        
        <div className="container">
        <Navbar/>
        <br />
          <div className="row">
            <div className="col-md-6 overflow">
            <h5>Documentation</h5>
            <div>
                <h6>Backend APIs</h6>
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
            <hr />
            <button onClick={this.seedDb} className="btn btn-outline-secondary">Seed DB</button>
            <hr />
            <div  className="text-justify">
                <h6>SQL Injection Attacks</h6>
                <ul>
                <li>
                   To test SQL Injection Attack go to login page and in username paste <code>"' OR 1=1 -- "</code> or <code>"'; DROP TABLE login; -- "</code>
               </li>
               <li>
                   Then give any password, and press login.
               </li>
               <li>
                 To remove the effect of SQL Injection, try clicking SafeLogin Button
               </li>
               </ul>
            </div>
            <hr />
            <div className="text-justify"> 
              <h6>XSS Attacks</h6>
              <ul>
                <li>
                  To Test XSS Attack, go to list page, and try adding a js script in the input field, for example: <code>"alert("Attacking");"</code> wrapper in script tags.
                </li>
                <li>
                  Modern frameworks are capable enough to sanitize the input, but to be on the safer side, we have written sanitizer function that reads the input and removes every special character that makes a script into a white space <code>' '</code>.
                </li>
                <li>
                  As you can see in the previous list, scripts are sanitized and have no effect whatsoever on the DOM;
                </li>
              </ul>
            </div>
            <hr />
            <div className="text-justify">
              <h6>Session Hijacking</h6>
              <ul>
                <li>
                  In Session Hijacking Attack, generally the cookie and session information is stolen and then it is used to validate or give access to a unauthorized user.
                </li>
                <li>
                  To try this attack go to fortune-teller page, and click the fortune-teller button.
                </li>
                <li>
                  When this button is clicked, the cookie information is sent to attacker's server, without even you knowing about it.
                </li>
                <li>
                  To see the actual call to the evil server, one can check the Network Tab of the broweser.
                </li>
              </ul>
            </div>
        </div>
        <div className="col-md-6">
          <Switch>
          <Route exact path={"/login"}  component={Login} />
          <Route  path={"/list"}  component={List} />
          <Route path="/fortune" component={FortuneTeller}/>
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

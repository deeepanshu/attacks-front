import React, { Component } from 'react';
import axios from 'axios';
import urlStore from './../../config/urlStore';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    
  render() {
    return (
        <div>
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
    );
  }
}

export default Home;

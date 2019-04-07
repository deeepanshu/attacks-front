import React, { Component } from 'react';
import axios from 'axios';
import urlStore from './../../config/urlStore';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.submitform = this.submitform.bind(this);
        this.submitSafeform = this.submitSafeform.bind(this);
    }

    submitform(e) {
        e.preventDefault();
        console.log(e.target);
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(username, password);
        axios.post(`${urlStore.SAFELOGIN}`, {username, password})
            .then( response => {
                console.log(response.data);
            })
    }
    submitSafeform(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        axios.post(`${urlStore.LOGIN}`, {username, password})
            .then( response => {
                console.log(response.data);
            })
    }
  render() {
    return (
        <div>
            <form onSubmit={this.submitform}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" name="username" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    
                    <input type="password" name="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <button className="btn btn-outline-danger">Login</button>
                <button className="btn btn-outline-primary">Safe Login</button>
            </form>
        </div>
    );
  }
}

export default Login;

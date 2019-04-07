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
        axios.post(`${urlStore.LOGIN}`, {username, password})
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
                <label>
                    Username
                    <input type='text' name='username'/>
                </label>
                <br />
                <label>
                    Password
                    <input type='password' name='password'/>
                </label>
                <br />
                <button>Login</button>
                <br />
                <button>Safe Login</button>
            </form>
        </div>
    );
  }
}

export default Login;

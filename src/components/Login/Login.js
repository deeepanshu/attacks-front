import React, { Component } from 'react';
import axios from 'axios';
import urlStore from './../../config/urlStore';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.submitform = this.submitform.bind(this);
    }

    submitform(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log();
        console.log(username, password);
        axios.post(e.target.typeOfLogin.value === 'safe'? urlStore.SAFELOGIN: urlStore.LOGIN, {username, password})
            .then( response => {
                console.log(response);
            })
        localStorage.setItem('user', username);
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

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="typeOfLogin" id="typeOfLogin" value="unsafe" />
                    <label className="form-check-label" htmlFor="typeOfLogin">
                        Unsafe Login
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="typeOfLogin" id="typeOfLogin" value="safe" defaultChecked />
                    <label className="form-check-label" htmlFor="typeOfLogin">
                        Safe Login
                    </label>
                </div>


                <button className="btn btn-outline-danger">Login</button>
            </form>
        </div>
    );
  }
}

export default Login;

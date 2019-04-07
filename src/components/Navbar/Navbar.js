
import React, { Component } from 'react';
// import './App.css';
import {NavLink } from "react-router-dom";
class Navbar extends Component {
render() {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">Attack Me</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/docs">Docs <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/list">List</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/fortune">Fortune</NavLink>
        </li>
      </ul>
    </div>
  </nav>);
}
}

export default Navbar;

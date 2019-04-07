import React, { Component } from 'react';
import axios  from 'axios';
import urlStore from './../../config/urlStore';
import Cookies from 'js-cookie';
class FortuneTeller extends Component {

    constructor(props) {
        super(props);
        this.fortuneTeller = this.fortuneTeller.bind(this);
    }

    fortuneTeller(e) {
        e.preventDefault();
        console.log(Cookies.get('user'));
        let user = localStorage.getItem('user');
        alert(`Oh! You just got attacked!! ${user}`);
        axios.get(urlStore.DEVIL)
            .then(response => {
                console.log(response);
            });
    }


    render() {
        return (
            <div>
                <button onClick={this.fortuneTeller} className="btn btn-outline-success">Tell my Fortune</button>
            </div>
        );
    }

}

export default FortuneTeller;

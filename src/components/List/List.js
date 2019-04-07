import React, { Component } from 'react';
import axios from 'axios';
import urlStore from './../../config/urlStore';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.fetchList = this.fetchList.bind(this);
        this.addToList = this.addToList.bind(this);
    }

    componentDidMount() {
        this.fetchList();
    }

    fetchList() {
        axios.get(urlStore.LIST)
            .then(response => {
                console.log(response);
                this.setState({list: response.data.res.result}, () => {
                    console.log("Updated state", this.state);
                })
            })
            .catch(err => {
                console.log(err);
            }) 
    }

    addToList(e) {
        e.preventDefault();
        const item = e.target.item.value;
        const description = e.target.description.value;
        if (!item || !description) {
            alert("Empty Fields");
            return;
        }
        console.log(item, description);
        axios.post(urlStore.LIST, {item, description})
            .then(response => {
                console.log(response.data);
                // this.fetchList();
            })
    }
    
  render() {
    return (
        <div>
            <div>
            <h4>Add New Item</h4>
                <form onSubmit={this.addToList}>
                    <label>
                        Item
                        <input type='text' name='item' required/>
                    </label>
                    <br />
                    <label>
                        Description
                        <input type='text' name='description' required/>
                    </label>
                    <br />
                    <button>Submit</button>
                </form>    
            </div>
            <div>
                <h4>List of existing items</h4>
                {this.state.list ? this.state.list.map((ele, index) => {
                    return <li key={index}>{ele.item} - {ele.description}</li>
                }) : 'Empty Db'}

            </div>
        </div>
    );
  }
}

export default List;

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
                this.fetchList();
            })
    }
    
  render() {
    return (
        <div>
            <div>
            <h5>Add New Item</h5>
                <form onSubmit={this.addToList}>
                    <div className="input-group mb-3">
                        <input type="text" name="item" className="form-control" placeholder="Item" aria-label="Item" aria-describedby="basic-addon1"/>
                    </div>
                  
                    <div className="input-group mb-3">
                        <input type="text" name="description" className="form-control" placeholder="Description" aria-label="Description" aria-describedby="basic-addon1"/>
                    </div>
                    <button className="btn btn-outline-primary">Submit</button>
                </form>    
            </div>
            <hr />
            <div>
                <h5>List of existing items</h5>
                {this.state.list ? this.state.list.map((ele, index) => {
                    return <li key={index}>{ele.item} - {ele.description}</li>
                }) : 'Empty Db'}

            </div>
        </div>
    );
  }
}

export default List;

import React, { Component } from 'react';
import './custumers.css';

class Custumers extends Component {

  constructor(){
    super();
    this.state = {
      custumers:[]
    }
  }

  componentDidMount(){
    fetch('/api/custumers')
      .then(res => res.json())
      .then(custumers => this.setState({custumers}, () => console.log('Custumers fetched..',custumers)));
  }

  render() {
    return (
      <div>
        <h2>Custumers</h2>
        <ul>
          {this.state.custumers.map(custumers =>
            <li key={custumers.id}>{custumers.firstName} {custumers.lastName}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Custumers;

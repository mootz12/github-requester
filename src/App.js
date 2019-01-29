import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      value: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick() {
    axios.get(`https://api.github.com/users/${this.state.value}`)
      .then((response) => {
        this.setState({username: response.data.name})
      })
      .catch((e) => {
        console.error(e);
      })
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div className='button_container'>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.username}</p>
      </div>
    )
  }
}

export default App;

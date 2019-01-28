import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      inputValue: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(`https://api.github.com/users/${this.state.inputValue}`)
    axios.get(`https://api.github.com/users/${this.state.inputValue}`)
      .then((response) => {
        this.setState({username: response.data.name})
      })
      .catch((e) => {
        console.error(e);
      })
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    })
    console.log(evt.target.value);
  }

  render() {
    return (
      <div className='button_container'>
        <input className='username_input'
          defaultValue=""
          value={this.state.inputValue}
          onChange={evt => this.updateInputValue}
          placeholder='Enter Username'
          type="text"
        />
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <p>{this.state.username}</p>
      </div>
    )
  }
}

export default App;

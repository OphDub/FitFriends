import React, { Component } from 'react';
import './Control.scss';

class Control extends Component {
  constructor () {
    super ();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = () => {

  }

  render () {
    return (
      <form className="Control">
        I am Control
        <input  type="text"
          placeholder=""
          name="username"
          onChange={this.handleChange}/>
        <input  type="text"
          placeholder=""
          name="password"
          onChange={this.handleChange}/>
        <button className="login-btn">
            Login
        </button>
      </form>
    )
  }
};

export default Control;
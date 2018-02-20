import React, { Component } from 'react';
import './Welcome.css';
import Control from '../Control/Control';
import { NavLink } from 'react-router-dom';

class Welcome extends Component {
  constructor () {
    super();
  }

  handleReroute = () => {
    return this.props.history.push('/home');
  }

  render () {
    return (
      <div className="Welcome">
        <h2 className="fitfriends-text">
          <span className="fitfriends-text-emphasis">
            Fit
          </span>
            Friends
        </h2>
        <Control handleReroute={this.handleReroute}/>
        <NavLink className="sign-up-link"
          to="/signup">
            New? Sign up here!
        </NavLink>
      </div>
    )
  }
};

export default Welcome


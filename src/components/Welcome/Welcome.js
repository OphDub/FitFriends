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
        <div className="Welcome-container">
          <Control handleReroute={this.handleReroute}/>
          <div className="welcome-signup">
            <h5>New? Make an account:</h5>
            <NavLink className="sign-up-link"
              to="/signup">
              <button className="sign-up-btn">
                Sign Up
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
};

export default Welcome


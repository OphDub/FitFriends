import React from 'react';
import './Welcome.css';
import Control from '../../containers/Control/Control';
import { NavLink } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="Welcome">
      <h2 className="fitfriends-text">
        <span className="fitfriends-text-emphasis">
          Fit
        </span>
          Friends
      </h2>
      <div className="Welcome-container">
        <Control />
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
  );
};

export default Welcome;


import React from 'react';
import './Welcome.css';
import Control from '../Control/Control';
import { NavLink } from 'react-router-dom';

export const Welcome = () => {
  return (
    <div className="Welcome">
      <h2>FitFriends</h2>
      <Control />
      <NavLink to="/signup">New? Sign up here!</NavLink>
    </div>
  )
};
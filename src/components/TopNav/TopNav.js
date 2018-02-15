import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNav.scss';

export const TopNav = () => {
  return (
    <nav className="TopNav">
      <NavLink to="/workout">
        <button>Post Workout</button>
      </NavLink>
      <NavLink to="/team">
        <button>Team</button>
      </NavLink>
      <NavLink to="/workout-history">
        <button>Workout History</button>
      </NavLink>
    </nav>
  )
};
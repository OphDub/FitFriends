import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNav.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faHistory from '@fortawesome/fontawesome-free-solid/faHistory';

export const TopNav = () => {
  return (
    <nav className="TopNav">
      <NavLink to="/workout">
        <button className="topnav-btn">
          <FontAwesomeIcon icon={faEdit} size="3x"/>
          <h4>
            Post Workout
          </h4>
        </button>
      </NavLink>
      <NavLink to="/team">
        <button className="topnav-btn">
          <FontAwesomeIcon icon={faUsers} size="3x"/>
          <h4>
            Team
          </h4>
        </button>
      </NavLink>
      <NavLink to="/history">
        <button className="topnav-btn">
          <FontAwesomeIcon icon={faHistory} size="3x"/>
          <h4>
            Past Workouts
          </h4>
        </button>
      </NavLink>
    </nav>
  );
};
import React from 'react';
import './SideNav.css';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';

export const SideNav = () => {
  return (
    <section className="SideNav">
      <div className="side-nav-user-profile">User Profile Image</div>
      <NavLink to="/home">
        <button className="sidenav-btn">
          <FontAwesomeIcon icon={faHome} size="2x"/>
          Home
        </button>
      </NavLink>
      <NavLink to="/profile">
        <button className="sidenav-btn">
          <FontAwesomeIcon icon={faUser} size="2x"/>
          Profile
        </button>
      </NavLink>
      <NavLink to="/settings">
        <button className="sidenav-btn">
          <FontAwesomeIcon icon={faCog} size="2x"/>
          Settings
        </button>
      </NavLink>
    </section>
  )
};
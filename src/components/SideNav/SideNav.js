import React from 'react';
import './SideNav.css';
import { NavLink } from 'react-router-dom';

export const SideNav = () => {
  return (
    <section className="SideNav">
      <div className="side-nav-user-profile">User Profile Image</div>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/profile">
        <button>Profile</button>
      </NavLink>
      <NavLink to="/settings">
        <button>Settings</button>
      </NavLink>
    </section>
  )
};
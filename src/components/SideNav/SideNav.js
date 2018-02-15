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
        <button>
          <FontAwesomeIcon icon={faHome}/>
          Home
        </button>
      </NavLink>
      <NavLink to="/profile">
        <button>
          <FontAwesomeIcon icon={faUser}/>
          Profile
        </button>
      </NavLink>
      <NavLink to="/settings">
        <button>
          <FontAwesomeIcon icon={faCog}/>
          Settings
        </button>
      </NavLink>
    </section>
  )
};
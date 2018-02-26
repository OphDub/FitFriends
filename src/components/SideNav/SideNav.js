import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/actionsIndex';
import PropTypes from 'prop-types';
import './SideNav.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import faSignOut from '@fortawesome/fontawesome-free-solid/faSignOutAlt';

export const SideNav = ({ userImage, userName, logout }) => {
  return (
    <section className="SideNav">
      <div className="user-profile">
        <img src={userImage} alt="User profile" className="user-pic"/>
        <h4 className={`${userName}`}>Brooke</h4>
      </div>
      <div className="sidenav-btns">
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
        <NavLink to="/login">
          <button className="sidenav-btn"
            onClick={logout}>
            <FontAwesomeIcon icon={faSignOut} size="2x"/>
            Logout
          </button>
        </NavLink>
      </div>
    </section>
  );
};

SideNav.propTypes = {
  userImage: PropTypes.string,
  userName: PropTypes.string,
  logout: PropTypes.func
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
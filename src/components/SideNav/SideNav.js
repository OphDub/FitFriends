import React from 'react';
import './SideNav.css';
import { NavLink } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import { connect } from 'react-redux';
import { logout } from '../../actions/actionsIndex';
import { SignUp } from '../SignUp/SignUp';

export const SideNav = ({ user, userImage, userName, logout }) => {
  const logoutUser = (event) => {
    event.preventDefault();
    logout(user);
  }

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
        {/* <button onClick={connectToFitBit}>
          Connect to FitBit
        </button> */}
        <button onClick={logoutUser}>
          Logout
        </button>
      </div>
    </section>
  )
};

export const mapStateToProps = (state) => ({
  user: state.user,
});

export const mapDispatchToProps = (dispatch) => ({
  logout: (user) => dispatch(logout(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
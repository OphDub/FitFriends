import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../thunks/thunks';
import PropTypes from 'prop-types';
import './SideNav.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faSignOut from '@fortawesome/fontawesome-free-solid/faSignOutAlt';

export class SideNav extends Component {
  renderUserProfile = () => {
    if (this.props.user.image) {
      return (<img src={this.props.user.image} alt="User profile" className="user-pic"/>);
    }

    return (<div className="user-pic"><FontAwesomeIcon icon={faUser} size="4x"/></div>);
  }

  render () {
    return (
      <section className="SideNav">
        <div className="user-profile">
          {this.renderUserProfile()}
          <h4 className="user-name">{this.props.user.email}</h4>
        </div>
        <div className="sidenav-btns">
          <NavLink to="/login">
            <button className="sidenav-btn"
              onClick={this.props.logout}>
              <FontAwesomeIcon icon={faSignOut} size="2x"/>
              Logout
            </button>
          </NavLink>
        </div>
      </section>
    );
  }
}

const userProps = PropTypes.shape({
  name: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string
});

SideNav.propTypes = {
  user: PropTypes.shape(userProps),
  logout: PropTypes.func
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
import React, { Component } from 'react';
import './SignUp.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { signup } from '../../thunks/thunks';

export class SignUp extends Component {
  constructor () {
    super();
    this.state={
      userEmail: '',
      userPass1: '',
      userPass2: '',
      errorMsg: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  signUpValidation = () => {
    const { userEmail, userPass1, userPass2 } = this.state;

    if (userEmail === '' || userPass1 === '' || userPass2 === '') {
      const errorMsg = 'Please fill out all fields.';

      this.setState({ errorMsg });
      return false;
    }

    if (userPass1 !== userPass2) {
      const errorMsg = 'Please make sure passwords match.';

      this.setState({ errorMsg });
      return false;
    }

    return true;
  }

  handleSignUp = async (e) => {
    e.preventDefault();
    const {userEmail, userPass1} = this.state;

    if (!this.signUpValidation()) {
      return;
    }

    try {
      await this.props.signup(userEmail, userPass1);

      this.setState({
        userEmail: '',
        userPass1: '',
        userPass2: '',
        errorMsg: ''
      });

      this.props.history.push('/workout');
    } catch (error) {
      const errorMsg = error.message;

      this.setState({ errorMsg });
      throw error;
    }
  }

  renderForm = () => {
    return (
      <form className="SignUp-form">
        <label htmlFor="userEmail">
          <span>Email: </span>
          <input type="email"
            placeholder="Email"
            name="userEmail"
            value={this.state.userEmail}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="userPass1">
          <span>Password: </span>
          <input type="password"
            placeholder="Password"
            name="userPass1"
            value={this.state.userPass1}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="userPass2">
          <span>Confirm Password: </span>
          <input type="password"
            placeholder="Password"
            name="userPass2"
            value={this.state.userPass2}
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.handleSignUp}
          className="signup-btn">
          <h3>Sign Up</h3>
        </button>
      </form>
    );
  }

  renderError = () => {
    return (
      <div className="signup-error">
        <h5 className="signup-error-msg">{this.state.errorMsg}</h5>
      </div>
    );
  }

  render () {
    return (
      <div className="SignUp">
        <div className="form-background">
          {this.renderForm()}
          {this.renderError()}
          <div className="signup-goback">
            <h5>Already have an account?</h5>
            <NavLink to="/login">
              <button className="signup-btn">
                Go to Login
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  signup: PropTypes.func.isRequired
};

export const mapDispatchToProps = (dispatch) => ({
  signup: (email, password) => dispatch(signup(email, password))
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));

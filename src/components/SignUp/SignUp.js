import React, { Component } from 'react';
import './SignUp.css';
import { connect } from 'react-redux';
import { signUpUser, loginUser, getUser } from '../../actions/actionsIndex';
import { NavLink } from 'react-router-dom';
import { signup } from '../../actions/actionsIndex';
export class SignUp extends Component {
  constructor () {
    super()
    this.state={
      userEmail: '',
      userPass1: '',
      userPass2: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSignUp = (e) => {
    e.preventDefault();

    try {
      const {userEmail, userPass1} = this.state;
      this.props.signup(userEmail, userPass1);
    } catch (error) {
      throw error
    }

    this.setState({
      userEmail: '',
      userPass1: '',
      userPass2: '',
    });
  }

  render () {
    return (
      <div className="SignUp">
        <div className="form-background">
          <form className="SignUp-form">
            <label htmlFor="userEmail">
              <span>Email: </span>
              <input type="email"
                placeholder="Email"
                name="userEmail"
                value={this.state.userEmail}
                onChange={this.handleChange}/>
            </label>
            <label htmlFor="userPass1">
              <span>Password: </span>
              <input type="password"
                placeholder="Password"
                name="userPass1"
                value={this.state.userPass1}
                onChange={this.handleChange}/>
            </label>
            <label htmlFor="userPass2">
              <span>Confirm Password: </span>
              <input type="password"
                placeholder="Password"
                name="userPass2"
                value={this.state.userPass2}
                onChange={this.handleChange}/>
            </label>
            <button onClick={this.handleSignUp}
              className="signup-btn">
                <h3>Sign Up</h3>
            </button>
          </form>
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
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  signup: (email, password) => dispatch(signup(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
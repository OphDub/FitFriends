import React, { Component } from 'react';
import './SignUp.css';
import { connect } from 'react-redux';
import { signUpUser, loginUser } from '../../actions/actionsIndex';
export class SignUp extends Component {
  constructor () {
    super()
    this.state={
      userName: '',
      userEmail: '',
      userPass1: '',
      userPass2: '',
      userId: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSignUp = (e) => {
    e.preventDefault();

    const userId = Date.now();
    this.setState({ userId });
    this.props.signUpUser(this.state);
    this.props.loginUser({
      user: this.state.userName,
      password: this.state.userPass,
    });

    this.setState({
      firstName: '',
      lastName: '',
      userName: '',
      userEmail: '',
      userPass: '',
      userId: '',
    });
  }

  authWithFacebook = (e) => {
    e.preventDefault();

  }

  render () {
    return (
      <form className="SignUp">
        <div>
          <button onClick={this.authWithFacebook}>Login with Facebook</button>
        </div>
        <div className="signup-email">
          <input type="text"
            placeholder="Username"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}/>
          <input type="email"
            placeholder="Email"
            name="userEmail"
            value={this.state.userEmail}
            onChange={this.handleChange}/>
          <input type="password"
            placeholder="Password"
            name="userPass1"
            value={this.state.userPass}
            onChange={this.handleChange}/>
          <input type="password"
            placeholder="Password"
            name="userPass2"
            value={this.state.userPass}
            onChange={this.handleChange}/>
          <button
            onClick={this.handleSignUp}>
              Sign Up
          </button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (user) => dispatch(signUpUser(user)),
  loginUser: (user) => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(SignUp);
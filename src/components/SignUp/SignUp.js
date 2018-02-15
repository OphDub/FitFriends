import React, { Component } from 'react';
import './SignUp.css';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions/actionsIndex';

class SignUp extends Component {
  constructor () {
    super()
    this.state={
      firstName: '',
      lastName: '',
      userName: '',
      userEmail: '',
      userPass: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSignUp = (e) => {
    e.preventDefault();

    this.props.signUpUser(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      userName: '',
      userEmail: '',
      userPass: '',
    });
  }

  render () {
    return (
      <form className="SignUp">
        <input type="text"
          placeholder="First Name"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}/>
        <input type="text"
          placeholder="Last Name"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}/>
        <input type="text"
          placeholder="Username"
          name="userName"
          value={this.state.userName}
          onChange={this.handleChange}/>
        <input type="text"
          placeholder="Email"
          name="userEmail"
          value={this.state.userEmail}
          onChange={this.handleChange}/>
        <input type="password"
          placeholder="Password"
          name="userPass"
          value={this.state.userPass}
          onChange={this.handleChange}/>
        <button
          onClick={this.handleSignUp}>
            Sign Up
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (user) => dispatch(signUpUser(user))
});

export default connect(null, mapDispatchToProps)(SignUp);
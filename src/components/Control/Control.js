import React, { Component } from 'react';
import './Control.css';
import { loginUser } from '../../actions/actionsIndex';
import { connect } from 'react-redux';

export class Control extends Component {
  constructor () {
    super ();
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleLogin = (e) => {
    e.preventDefault();

    //authenticate user here
    this.props.loginUser(this.state);
    this.props.handleReroute();
    this.setState({ username: '', password: '' });
  }

  render () {
    return (
      <form type="submit" className="Control">
        <input  className="Control-input Control-username"
          type="email"
          placeholder="Email"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}/>
        <input  className="Control-input Control-password"
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}/>
        <button className="login-btn"
          onClick={this.handleLogin}
          type="submit">
            Login
        </button>
      </form>
    )
  }
};

export const mapStateToProps = (state) => ({
  history: state.history
})

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Control);
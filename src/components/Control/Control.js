import React, { Component } from 'react';
import './Control.css';
import { login, getUser } from '../../actions/actionsIndex';
import { connect } from 'react-redux';

export class Control extends Component {
  constructor () {
    super ();
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.login(email,password);
    this.props.getUser(email, password);
    // this.props.loginUser(this.state);
    this.setState({ email: '', password: '' });
  }

  render () {
    return (
      <form type="submit" className="Control">
        <input  className="Control-input Control-username"
          type="email"
          placeholder="Email"
          name="email"
          value={this.state.email}
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
            <h3>Login</h3>
        </button>
      </form>
    )
  }
};

export const mapStateToProps = (state) => ({
})

export const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
  getUser: (email, password) => dispatch(getUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Control);
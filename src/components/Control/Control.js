import React, { Component } from 'react';
import './Control.scss';
import { loginUser } from '../../actions/actionsIndex';
import { connect } from 'react-redux';

class Control extends Component {
  constructor () {
    super ();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.props.loginUser(this.state);
    this.setState({ [name]: value });
  }

  handleLogin = (e) => {
    e.preventDefault();

    this.setState({ username: '', password: '' });
  }

  render () {
    return (
      <form className="Control">
        <input  className="Control-input Control-username"
          type="text"
          placeholder="username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}/>
        <input  className="Control-input Control-password"
          type="password"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}/>
        <button className="login-btn"
          onClick={this.handleLogin}>
            Login
        </button>
      </form>
    )
  }
};

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(Control);
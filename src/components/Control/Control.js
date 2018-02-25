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
      errorMsg: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await this.props.login(email, password);
    } catch(error) {
      const errorMsg = 'Username/password incorrect. Try again.';

      this.setState({
        email: '',
        password: '',
        errorMsg
      });

      throw error
    }

    this.setState({ email: '', password: '', errorMsg: '' });
  }

  renderError = () => {
    return (<h3>{this.state.errorMsg}</h3>)
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
        <div className="error-msg">
          {this.renderError()}
        </div>
      </form>
    )
  }
};

export const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
  getUser: (email, password) => dispatch(getUser(email, password))
});

export default connect(null, mapDispatchToProps)(Control);
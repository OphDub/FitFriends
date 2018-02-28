import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Control.css';
import { login } from '../../thunks/thunks';
import { withRouter } from 'react-router-dom';

export class Control extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      errorMsg: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  validateLogin = () => {
    const { email, password } = this.state;

    const message = 'Please provide an email and password.';
    let errorMsg;

    const validated = email === '' || password === '' ?
      (errorMsg = message) && false : true;

    this.setState({ errorMsg });
    return validated;
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!this.validateLogin()) {
      return;
    }

    try {
      await this.props.login(email, password);

      this.setState({
        email: '',
        password: '',
        errorMsg: ''
      });

      this.props.history.push('/workout');
    } catch (error) {
      const errorMsg = 'Username/password incorrect. Try again.';

      this.setState({
        email: '',
        password: '',
        errorMsg
      });

      throw error;
    }
  }

  renderError = () => {
    return (<h3>{this.state.errorMsg}</h3>);
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
    );
  }
}

const historyProps = PropTypes.shape({
  push: PropTypes.func
});

Control.propTypes = {
  login: PropTypes.func.isRequired,
  history: historyProps
};

export const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password))
});

export default withRouter(connect(null, mapDispatchToProps)(Control));
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
      userName: '',
      userEmail: '',
      userPass1: '',
      userPass2: '',
      userId: '',
    });
  }

  render () {
    return (
      <div className="SignUp">
        <div className="form-background">
          <form className="SignUp-form">
            <label htmlFor="userName">
              <span>Username: </span>
              <input type="text"
                placeholder="Username"
                name="userName"
                value={this.state.userName}
                onChange={this.handleChange}/>
            </label>
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
                value={this.state.userPass}
                onChange={this.handleChange}/>
            </label>
            <label htmlFor="userPass2">
              <span>Confirm Password: </span>
              <input type="password"
                placeholder="Password"
                name="userPass2"
                value={this.state.userPass}
                onChange={this.handleChange}/>
            </label>
            <button onClick={this.handleSignUp}
              className="signup-btn">
                <h3>Sign Up</h3>
            </button>
          </form>
          <div className="signup-goback">
            <h5>Already have an account?</h5>
            <button className="signup-btn"
              onClick={this.props.handleRedirect}>
              Go to Login
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  history: state.history
})

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (user) => dispatch(signUpUser(user)),
  loginUser: (user) => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
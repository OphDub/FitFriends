import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserFromFirebase } from '../../actions/actionsIndex';

import { TopNav } from '../TopNav/TopNav';
import SideNav from '../SideNav/SideNav';
import Welcome from '../Welcome/Welcome';
import SignUp from '../SignUp/SignUp';
import Workout from '../Workout/Workout';
import WorkoutHistory from '../WorkoutHistory/WorkoutHistory';

export class App extends Component {

  componentWillMount() {
    if (this.props.user.email === null) {
      this.props.getUserFromFirebase();
    }

    if (this.props.user.loggedIn === false && this.props.user.email === null) {
      this.props.history.push('/login');
    }
  }

  loginRedirect = () => {
    this.props.history.push('/workout');
  }

  render() {
    return (
      <div className="App">
        {
          this.props.user.email !== null &&
          <SideNav />
        }
        <div className="App-center">
          {
            this.props.user.email !== null &&
            <TopNav />
          }
          <Switch>
            <Route
              path="/login"
              render={() => (<Welcome />)}/>
            <Route
              path="/signup"
              render={() => (<SignUp />)}/>
            <Route
              path="/workout"
              render={( )=> (<Workout/>)}/>
            <Route
              path="/history"
              render={() => (<WorkoutHistory/>)}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const userProps = {
  loggedIn: PropTypes.bool,
  email: PropTypes.string
};

App.propTypes = {
  user: PropTypes.shape(userProps),
  getUserFromFirebase: PropTypes.func,
  history: PropTypes.object
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  getUserFromFirebase: (user) => dispatch(getUserFromFirebase(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

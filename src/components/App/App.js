import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../../actions/actionsIndex';

import { TopNav } from '../TopNav/TopNav';
import SideNav from '../SideNav/SideNav';
import { Leaderboard } from '../Leaderboard/Leaderboard';
import Welcome from '../Welcome/Welcome';
import SignUp from '../SignUp/SignUp';
import { Home } from '../Home/Home';
import Workout from '../Workout/Workout';
import { Team } from '../Team/Team';
import WorkoutHistory from '../WorkoutHistory/WorkoutHistory';
import { Profile } from '../Profile/Profile';
import { Settings } from '../Settings/Settings';

import { mockTeam } from '../../initialData';

class App extends Component {

  componentWillMount() {
    if (this.props.user.email === null) {
      this.props.getUser();
    }

    if (this.props.user.loggedIn === false) {
      this.props.history.push('/login');
    }
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
              exact path="/"
              render={() => (<Home/>)}/>
            <Route
              path="/login"
              render={() => (<Welcome/>)}/>
            <Route
              path="/signup"
              render={() => (<SignUp />)}/>
            <Route
              path="/workout"
              render={( )=> (<Workout/>)}/>
            <Route
              path="/team"
              render={() => (<Team team={mockTeam} />)}/>
            <Route
              path="/history"
              render={() => (<WorkoutHistory/>)}/>
            <Route
              path="/profile"
              render={() => (<Profile />)}/>
            <Route
              path="/settings"
              render={() => (<Settings/>)}/>
          </Switch>
        </div>
        {
          this.props.user.email !== null &&
          <Leaderboard topThree={mockTeam}/>
        }
      </div>
    );
  }
}

const userProps = PropTypes.shape({
  loggedIn: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired
});

App.propTypes = {
  user: PropTypes.shape(userProps).isRequired,
  getUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  getUser: (user) => dispatch(getUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';

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
import { mockWorkoutHistory } from '../../initialData';

class App extends Component {

  componentWillMount() {
    if (this.props.user.email === null) {
      this.props.getUser();
    }

    if (this.props.user.loggedIn === false) {
      this.props.history.replace('/login');
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

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  activeUser: state.activeUser,
})

const mapDispatchToProps = (dispatch) => ({
  // loginUser: (user) => dispatch(loginUser(user)),
  getUser: (user) => dispatch(getUser(user)),
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))

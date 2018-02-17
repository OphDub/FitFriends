import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';

import { TopNav } from '../TopNav/TopNav';
import { SideNav } from '../SideNav/SideNav';
import { Leaderboard } from '../Leaderboard/Leaderboard';
import Welcome from '../Welcome/Welcome';
import SignUp from '../SignUp/SignUp';
import { Home } from '../Home/Home';
import Workout from '../Workout/Workout';
import { Team } from '../Team/Team';
import WorkoutHistory from '../WorkoutHistory/WorkoutHistory';
import { Profile } from '../Profile/Profile';
import { Settings } from '../Settings/Settings';

import { loginUser } from '../../actions/actionsIndex';

import { mockUserProfile } from '../../initialData';
import { mockTeam } from '../../initialData';
import { mockWorkoutHistory } from '../../initialData';

import { clientID, clientSecret } from '../../apiKey';

class App extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div className="App">
        {
          this.props.activeUser &&
          <SideNav user={mockUserProfile}/>
        }
        <div className="App-center">
        {
          this.props.activeUser &&
          <TopNav />
        }
          <Switch>
            <Route
              exact path ="/"
              component={Welcome}/>
            <Route
              path="/signup"
              component={SignUp}/>
            <Route
              path="/home"
              component={Home}/>
            <Route
              path="/workout"
              component={Workout}/>
            <Route
              path="/team"
              component={Team}/>
            <Route
              path="/history"
              component={WorkoutHistory}/>
            <Route
              path="/profile"
              component={Profile}/>
            <Route
              path="/settings"
              component={Settings}/>
          </Switch>
        </div>
        {
          this.props.activeUser &&
          <Leaderboard />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeUser: state.activeUser,
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))

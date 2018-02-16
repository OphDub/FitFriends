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
// var FitbitApiClient = require('fitbit-node');
// const fbApi = new FitbitApiClient(clientID, clientSecret);

class App extends Component {
  constructor () {
    super();
  }

  componentDidMount () {
    // const scope ='activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight';
    // const redirectUrl = 'http://localhost:3000';
    // const authUrl = fbApi.getAuthorizeUrl(scope, redirectUrl);

    // console.log(authUrl);

    // const root = `https://www.fitbit.com/oauth2/authorize?`;
    // fetchAndParse(`${root}response_type=code&client_id=213NFP&redirect_uri=http://localhost:3000&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800`);
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

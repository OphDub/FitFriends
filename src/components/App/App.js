import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';

import { TopNav } from '../TopNav/TopNav';
import { SideNav } from '../SideNav/SideNav';
import { Leaderboard } from '../Leaderboard/Leaderboard';
import { Welcome } from '../Welcome/Welcome';
import SignUp from '../SignUp/SignUp';
import { Home } from '../Home/Home';
import Workout from '../Workout/Workout';
import { Team } from '../Team/Team';
import { WorkoutHistory } from '../WorkoutHistory/WorkoutHistory';

import { fetchAndParse } from '../../helper';
import { clientID } from '../../apiKey';

import { mockUserProfile } from '../../initialData';

class App extends Component {
  constructor () {
    super();
  }

  componentDidMount () {
    // const root = `https://www.fitbit.com/oauth2/authorize?`;
    // fetchAndParse(`${root}response_type=code&client_id=213NFP&redirect_uri=http://localhost:3000&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800`);
  }

  render() {
    return (
      <div className="App">
        <SideNav user={mockUserProfile}/>
        <div className="App-center">
          <TopNav />
          <Switch>
            <Route  path ="/" render={() => <Welcome />}/>
            <Route  path="/signup" render={() => <SignUp />}/>
            <Route  path="/home"  render={() => <Home />}/>
            <Route  path="/workout"  render={() => <Workout />}/>
            <Route  path="/team"  render={() => <Team />}/>
            <Route  path="/workout-history" render={() => <WorkoutHistory />}/>
          </Switch>
        </div>
        <Leaderboard />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeUser: state.activeUser,
})

export default withRouter(connect(mapStateToProps)(App))

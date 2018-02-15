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
import { Profile } from '../Profile/Profile';
import { Settings } from '../Settings/Settings';

import { loginUser } from '../../actions/actionsIndex';
import { fetchAndParse } from '../../helper';
import { clientID } from '../../apiKey';

import { mockUserProfile } from '../../initialData';
import { mockTeam } from '../../initialData';

class App extends Component {
  constructor () {
    super();
  }

  componentDidMount () {
    // if (localStorage.getItem('username')) {
    //   const user = localStorage.getItem('username')
    //   this.props.loginUser({user})
    // }

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
            <Route  exact path ="/" render={() => <Welcome />}/>
            <Route  path="/signup" render={() => <SignUp />}/>
            <Route  path="/home"  render={() => <Home />}/>
            <Route  path="/workout"  render={() => <Workout />}/>
            <Route  path="/team"  render={() => <Team team={mockTeam}/>}/>
            <Route  path="/workout-history" render={() => <WorkoutHistory />}/>
            <Route  path="/user-profile" render={() => <Profile />}/>
            <Route  path="/user-settings" render={() => <Settings />}/>
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

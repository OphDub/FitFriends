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

import { loginUser } from '../../actions/actionsIndex';

import { mockUserProfile } from '../../initialData';
import { mockTeam } from '../../initialData';
import { mockWorkoutHistory } from '../../initialData';

class App extends Component {
  constructor () {
    super();
  }

  handleRedirect = () => {
    return this.props.history.push('/');
  }

  componentWillMount () {
    this.props.getUser();
    if (this.props.user.email === undefined) {
      this.props.history.push('/')
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        {
          this.props.user.email &&
          <SideNav user={mockUserProfile}/>
        }
        <div className="App-center">
        {
          this.props.user.email &&
          <TopNav />
        }
          <Switch>
            <Route
              exact path ="/"
              component={Welcome}/>
            <Route
              path="/signup"
              render={() => this.props.user.email ? (<SignUp handleRedirect={this.handleRedirect}/>) : null}/>
            <Route
              path="/home"
              render={() => this.props.activeUser === true ? (<Home/>) : (<Welcome />) }/>
            <Route
              path="/workout"
              render={() => this.props.activeUser === true ? (<Workout/>) : (<Welcome />)}/>
            <Route
              path="/team"
              render={() => this.props.activeUser === true ? (<Team team={mockTeam} />) : (<Welcome />)}/>
            <Route
              path="/history"
              render={() => this.props.activeUser === true ? (<WorkoutHistory/>) : (<Welcome />)}/>
            <Route
              path="/profile"
              render={() => this.props.activeUser === true ? (<Profile />) : (<Welcome />)}/>
            <Route
              path="/settings"
              render={() => this.props.activeUser === true ? (<Settings/>) : (<Welcome />)}/>
          </Switch>
        </div>
        {
          this.props.user.email &&
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
  loginUser: (user) => dispatch(loginUser(user)),
  getUser: (user) => dispatch(getUser(user)),
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))

import React from 'react';
import { Switch, Route } from 'react-router';
import { SignIn } from '../SignIn/SignIn';
import { Home } from '../Home/Home';

export const Main = () => {
  return (
    <Switch>
      <Route exact path ="/" render={SignIn}/>
      <Route path="/home" render={Home}/>
    </Switch>
  )
}
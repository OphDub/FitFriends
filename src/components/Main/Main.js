import React from 'react';
import { Switch, Route } from 'react-router';
import { SignIn } from '../SignIn/SignIn';

export const Main = () => {
  return (
    <Switch>
      <Route exact path ="/" render={SignIn}/>
    </Switch>
  )
}
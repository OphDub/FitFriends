/* eslint-disable */
import { userReducer } from './userReducer';
import * as actions from '../actions/actionsIndex';

describe('userReducer', () => {
  it('should return the default state', () => {
    const expected = { loggedIn: false, email: null };

    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should return a new state with loggedIn true and email with action type GET_USER', () => {

  });

  it('should return a new state with loggedIn false and email null with action type LOGOUT_USER', () => {

  });
});
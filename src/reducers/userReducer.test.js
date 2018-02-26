/* eslint-disable */
import { userReducer } from './userReducer';
import * as actions from '../actions/actionsIndex';

describe('userReducer', () => {
  it('should return the default state', () => {
    const expected = { loggedIn: false, email: null };

    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should return a new state with loggedIn true and email with action type GET_USER', () => {
    const expected = { loggedIn: true, email: 'user@user.com' };
    const mockUser = { email: 'user@user.com' };
    const mockAction = actions.saveUserInStore(mockUser);

    expect(userReducer(undefined, mockAction)).toEqual(expected);
  });

  it('should return a new state with loggedIn false and email null with action type LOGOUT_USER', () => {
    const initialState = { loggedIn: true, email: 'user@user.com' };
    const expected = { loggedIn: false, email: null };
    const mockAction = actions.logOutUserLocally();

    expect(userReducer(initialState, mockAction)).toEqual(expected);
  });
});
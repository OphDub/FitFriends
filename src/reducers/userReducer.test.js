/* eslint-disable */
import { userReducer } from './userReducer';
import * as actions from '../actions/actionsIndex';

describe('userReducer', () => {
  it('should return the default state', () => {
    const expected = {
      loggedIn: false,
      email: null,
      uid: null,
      displayName: null,
      phoneNumber: null,
    };

    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('should return a new state with loggedIn true and user info with action type GET_USER', () => {
    const expected = {
      loggedIn: true,
      email: 'user@user.com',
      uid: 1234566789,
      displayName: null,
      phoneNumber: null,
    };
    const mockUser = {
      loggedIn: true,
      email: 'user@user.com',
      uid: 1234566789,
      displayName: null,
      phoneNumber: null,
    };
    const mockAction = actions.saveUserInStore(mockUser);

    expect(userReducer(undefined, mockAction)).toEqual(expected);
  });

  it('should return a new state with loggedIn false and email null with action type LOGOUT_USER', () => {
    const initialState = {
      loggedIn: true,
      email: 'user@user.com',
      uid: 1234566789,
      displayName: null,
      phoneNumber: null,
    };
    const expected = {
      loggedIn: false,
      email: null,
      uid: null,
      displayName: null,
      phoneNumber: null,
    };
    const mockAction = actions.logOutUserLocally();

    expect(userReducer(initialState, mockAction)).toEqual(expected);
  });
});
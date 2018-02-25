/* eslint-disable */
import * as actions from './actionsIndex';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);

describe('ACTIONS', () => {
  describe('getUser action', () => {
    it('should return a type of GET_USER, with a user', async () => {
      const mockUser = { email: 'me@me.com', password: 'password' };
      const mockAuthStateChanged = jest.fn();
      const auth = {
        onAuthStateChanged: mockAuthStateChanged
      }
      const expected = { type: 'GET_USER', user: mockUser };

      actions.getUser(mockUser);

      await expect(actions.getUser(mockUser)).toEqual(expected);
      await expect(mockAuthStateChanged).toHaveBeenCalled();
    });
  });

  describe('login action', () => {
    it('should call signInWithEmailAndPassword', async () => {
      const mockUser = {
        email: 'me@me.com',
        password: 'password',
      };

      const mockSignIn = jest.fn();
      const auth = {
        signInWithEmailAndPassword: mockSignIn
      }

      actions.login(mockUser.email, mockUser.password);

      await expect(mockSignIn).toHaveBeenCalled();
    });
  });
  
  describe('logout action', () => {
    it('should call signOut and return a type of LOGOUT_USER', () => {
  
    });
  });
  
  describe('signup action', () => {
    it('should call createUserWithEmailAndPassword', () => {
  
    });
  });
  
  describe('postWorkout action', () => {
    it('should call push', () => {
  
    });
  });
  
  describe('getWorkouts action', () => {
    it('should return a type of GET_WORKOUTS and a snapshot value', () => {
  
    });
  });
});
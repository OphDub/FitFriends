/* eslint-disable */
import * as thunks from './thunks';
import * as actions from '../actions/actionsIndex';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { auth, workoutsDb } from '../base';
import { mockWorkout, mockWorkouts } from '../initialData';
import '../mock-localstorage';

describe('THUNKS', () => {
  let middleware;
  let mockStore;
  let initialState;
  let store;

  beforeEach(() => {
    middleware = [ thunk ];
    mockStore = configureMockStore(middleware);
    initialState = {};
    store = mockStore(initialState);
  });

  describe('getUserFromFirebase action', () => {
    it('calls the onAuthStateChanged method of auth', async () => {
      auth.onAuthStateChanged = jest.fn(() => {
        return Promise.resolve();
      });

      await store.dispatch(thunks.getUserFromFirebase());

      expect(auth.onAuthStateChanged).toHaveBeenCalled();
    });
  });

  describe('login action', () => {
    it('calls the signInWithEmailAndPassword method of auth', async () => {
      const mockUser = { email: 'me@me.com', password: 'password' };

      auth.signInWithEmailAndPassword = jest.fn();

      await store.dispatch(thunks.login(mockUser.email, mockUser.password));

      expect(auth.signInWithEmailAndPassword).toHaveBeenCalled();
    });
  });

  describe('logout action', () => {
    it('calls signOut method of auth return a type of LOGOUT_USER', async () => {
      auth.signOut = jest.fn();

      await store.dispatch(thunks.logout());

      expect(auth.signOut).toHaveBeenCalled();
    });

    it('dispatches the logOutUserLocally action', async () => {
      const expected = [{ type: 'LOGOUT_USER'}];

      auth.signOut = jest.fn();

      await store.dispatch(thunks.logout());

      expect(store.getActions()).toEqual(expected);
    });
  });

  describe('signup action', () => {
    it('should call createUserWithEmailAndPassword', async () => {
      const mockUser = { email: 'me@me.com', password: 'password' };

      auth.createUserWithEmailAndPassword = jest.fn();

      await store.dispatch(thunks.signup(mockUser.email, mockUser.password));

      expect(auth.createUserWithEmailAndPassword).toHaveBeenCalled();
    });
  });

  describe('postWorkout action', () => {
    it('should call push', async () => {
      workoutsDb.push = jest.fn();

      await store.dispatch(thunks.postWorkout(mockWorkout));

      expect(workoutsDb.push).toHaveBeenCalled();
    });
  });

  describe('getWorkouts action', () => {
    it('should call the on method of workoutsDb', async () => {
      workoutsDb.on = jest.fn();

      await store.dispatch(thunks.getWorkouts(mockWorkout));

      expect(workoutsDb.on).toHaveBeenCalled();
    });
  });

  describe('deleteWorkoutFromFirebase action', () => {
    it('should call the remove method of workoutsDb', async () => {
      workoutsDb.remove = jest.fn();

      await store.dispatch(thunks.deleteWorkoutFromFirebase())
    });
  })
});
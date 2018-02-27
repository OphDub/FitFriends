/* eslint-disable */
import * as actions from './actionsIndex';
import { mockWorkouts } from '../initialData';

describe('ACTIONS', () => {
  describe('saveUserInStore', () => {
    it('should create an action with type of SAVE_USER', () => {
      const mockUser = {
        loggedIn: true,
        email: 'me@me.com'
      };
      const expected = {
        type: 'SAVE_USER',
        user: mockUser
      };

      expect(actions.saveUserInStore(mockUser)).toEqual(expected);
    });
  });

  describe('logOutUserLocally', () => {
    it('should create an action with type of LOGOUT_USER', () => {
      const expected = {
        type:'LOGOUT_USER'
      };

      expect(actions.logOutUserLocally()).toEqual(expected);
    });
  });

  describe('saveWorkoutsInStore', () => {
    it('should create an action with a type of SAVE_WORKOUTS', () => {
      const expected = {
        type: 'SAVE_WORKOUTS',
        workouts: mockWorkouts
      }

      expect(actions.saveWorkoutsInStore(mockWorkouts)).toEqual(expected);
    });
  });
});
/* eslint-disable */
import { workoutsReducer } from './workoutsReducer';
import * as actions from '../actions/actionsIndex';
import { mockWorkout, mockWorkouts } from '../initialData';

describe('workoutReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    expect(workoutsReducer(undefined, {})).toEqual(expected);
  });

  it('should return workouts when given an action with a type SAVE_WORKOUTS', () => {
    const expected = mockWorkouts;
    const mockAction = actions.getWorkouts(mockWorkouts);
  });
});
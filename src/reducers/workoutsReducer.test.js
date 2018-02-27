/* eslint-disable */
import { workoutsReducer } from './workoutsReducer';
import * as thunks from '../thunks/thunks';
import { mockWorkout, mockWorkouts } from '../initialData';

describe('workoutReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    expect(workoutsReducer(undefined, {})).toEqual(expected);
  });

  it('should return workouts when given an action with a type SAVE_WORKOUTS', () => {
    const expected = mockWorkouts;
    const mockAction = thunks.getWorkouts(mockWorkouts);
  });
});
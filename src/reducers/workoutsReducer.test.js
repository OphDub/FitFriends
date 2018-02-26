/* eslint-disable */
import { workoutsReducer } from './workoutsReducer';
import * as actions from '../actions/actionsIndex';
import { mockWorkout, mockWorkouts } from '../initialData';

describe('workoutReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    expect(workoutsReducer(undefined, {})).toEqual(expected);
  });

  it('should return an updated state with a type POST_WORKOUT', () => {
    const initialState = mockWorkouts;
    const expected = [ ...mockWorkouts, mockWorkout ];
    const mockAction = actions.postWorkout(mockWorkout);

    expect(workoutsReducer(initialState, mockAction)).toEqual(expected);
  });
});
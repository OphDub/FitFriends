import { workoutsReducer } from './workoutsReducer';
import * as actions from '../actions/actionsIndex';

describe('workoutReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    expect(workoutsReducer(undefined, {})).toEqual(expected);
  });
});
import { postWorkoutReducer } from './postWorkoutReducer';
import * as actions from '../actions/actionsIndex';

describe('postWorkoutReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    expect(postWorkoutReducer(undefined, {})).toEqual(expected);
  });
});
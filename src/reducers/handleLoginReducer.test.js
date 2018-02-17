import { handleLoginReducer } from './handleLoginReducer';
import * as actions from '../actions/actionsIndex';

describe('handleLoginReducer', () => {
  it('should return the default state', () => {
    const expected = null;
    expect(handleLoginReducer(undefined, {})).toEqual(expected);
  });

  it('should return the state with a new user', () => {
    const username = 'suh';
    const password = 'dude';
    const user = {
      username: username,
      password: password,
    };
    const expected = {
      username: username,
      password: password,
    };

    expect(handleLoginReducer(undefined, actions.loginUser(user))).toEqual(expected)
  });
})
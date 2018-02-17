import { signUpUserReducer } from './signUpUserReducer';
import * as actions from '../actions/actionsIndex';

describe('signUpUserReducer', () => {
  it('should return the default state', () => {
    const expected = null;
    expect(signUpUserReducer(undefined, {})).toEqual(expected);
  });

  it('should return state with a new user', () => {
    const username = 'jhun';
    const password = 'suhdude';
    const user = {
      username: username,
      password: password,
    };
    const expected = {
      username: username,
      password: password,
    };

    expect(signUpUserReducer(undefined, actions.signUpUser(user))).toEqual(expected);
  });
});
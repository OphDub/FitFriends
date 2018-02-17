import * as actions from './actionsIndex';

describe('Login user action', () => {
  it('should return a type of LOGIN_USER, with a user', () => {
    const username = 'jhun';
    const password = 'suhdude';
    const user = {
      username: username,
      password: password
    }
    const expected = {
      type: 'LOGIN_USER',
      payload: user,
    }

    expect(actions.loginUser(user)).toEqual(expected);
  });
});

describe('Post Workout action', () => {
  it('should return a type of POST_WORKOUT, with a workout', () => {
    const workoutName = 'workout';
    const workoutDesc = 'desc';
    const exercises = [{rep: 1, exercise: 'exercise'}];
    const workout = {
      workoutName: workoutName,
      workoutDesc: workoutDesc,
      exercises: exercises,
    }
    const expected = {
      type: 'POST_WORKOUT',
      payload: workout,
    }

    expect(actions.postWorkout(workout)).toEqual(expected);
  });
});

describe('Sign Up User action', () => {
  it('should return a type of SIGNUP_USER, with a user', () => {
    const username = 'jhun';
    const password = 'suhdude';
    const user = {
      username: username,
      password: password
    }
    const expected = {
      type: 'SIGNUP_USER',
      payload: user,
    }

    expect(actions.signUpUser(user)).toEqual(expected);
  })
})
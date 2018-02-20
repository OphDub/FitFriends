import { workouts } from '../base';
import { auth } from '../base';

export const getUser = (user) => {
  return dispatch => {
    auth.onAuthStateChanged( user => {
      dispatch({
        type: 'GET_USER',
        payload: user
      })
    })
  }
}

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  payload: user,
});

export const postWorkout = (workout) => {
  return dispatch => workouts.push(workout)
};

export const signUpUser = (user) => ({
  type: 'SIGNUP_USER',
  payload: user,
});

export const getWorkouts = () => {
  return dispatch => {
    workouts.on('value', snapshot => {
      dispatch({
        type: 'GET_WORKOUTS',
        payload: snapshot.val()
      })
    })
  }
};
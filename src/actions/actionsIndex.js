import { workouts } from '../base';
import { auth } from '../base';

export const getUser = (user) => {
  return dispatch => {
    auth.onAuthStateChanged( user => {
      dispatch({
        type: 'GET_USER',
        user
      })
    })
  }
};

export const login = (email, password) => {
  return dispatch => {
    auth.signInWithEmailAndPassword(email, password)
  }
};

export const logout = (user) => {
  return dispatch => {
    auth.signOut()
  }
};

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user,
});

export const postWorkout = (workout) => {
  return dispatch => workouts.push(workout)
};

export const signUpUser = (user) => ({
  type: 'SIGNUP_USER',
  user,
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
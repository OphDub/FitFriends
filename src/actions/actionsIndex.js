import { workouts } from '../base';
import { auth } from '../base';

export const getUser = (user) => {
  return async dispatch => {
    await auth.onAuthStateChanged( user => {
      dispatch({
        type: 'GET_USER',
        user
      })
    })
  }
};

export const login = (email, password) => {
  return async dispatch => {
    await auth.signInWithEmailAndPassword(email, password)
  }
};

export const logout = () => {
  return async dispatch => {
    await auth.signOut();

    dispatch({
      type: 'LOGOUT_USER',
    })
  }
};

export const signup = (email, password) => {
  return async dispatch => {
    await auth.createUserWithEmailAndPassword(email, password)
  }
};

export const postWorkout = (workout) => {
  return dispatch => workouts.push(workout)
};

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
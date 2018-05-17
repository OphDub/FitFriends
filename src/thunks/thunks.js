import { workoutsDb } from '../base';
import { auth } from '../base';
import {
  saveUserInStore,
  logOutUserLocally,
  saveWorkoutsInStore
} from '../actions/actionsIndex';

export const getUserFromFirebase = (user) => {
  return async dispatch => {
    await auth.onAuthStateChanged(user => {
      dispatch(saveUserInStore(user));
    })
  }
};

export const login = (email, password) => {
  return async dispatch => {
    return await auth.signInWithEmailAndPassword(email, password);
  }
};

export const logout = () => {
  return async dispatch => {
    await auth.signOut();

    dispatch(logOutUserLocally());
  }
};

export const signup = (email, password) => {
  return async dispatch => {
    await auth.createUserWithEmailAndPassword(email, password)
  }
};

export const postWorkout = (workout) => {
  return dispatch => workoutsDb.push(workout)
};

export const getWorkouts = () => {
  return async dispatch => {
    await workoutsDb.on('value', snapshot => {

      dispatch(saveWorkoutsInStore(snapshot.val()));
    })
  }
};

export const deleteWorkoutFromFirebase = (id) => {
  return async dispatch => {
    await workoutsDb.child(id).remove();
  }
};
import { workoutsDb } from '../base';
import { auth } from '../base';

export const saveUserInStore = (user) => ({
  type: 'SAVE_USER',
  user
});

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

export const logOutUserLocally = () => ({
  type: 'LOGOUT_USER'
});

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

export const saveWorkoutsInStore = (workouts) => ({
  type: 'SAVE_WORKOUTS',
  workouts
});

export const getWorkouts = () => {
  return async dispatch => {
    await workoutsDb.on('value', snapshot => {

      dispatch(saveWorkoutsInStore(snapshot.val()));
    })
  }
};

// export const getWorkouts = () => {
//   return dispatch => {
//     workoutsDb.on('value', snapshot => {
//       dispatch({
//         type: 'GET_WORKOUTS',
//         workouts: snapshot.val()
//       })
//     })
//   }
// };
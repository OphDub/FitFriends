import { workoutsDb } from '../base';
import { auth } from '../base';

export const saveUserInStore = (user) => ({
  type: 'SAVE_USER',
  user
});

export const saveUserError = (error) => ({
  type: 'SAVE_USER_ERROR',
  error
});

export const getUserFromFirebase = (user) => {
  return async dispatch => {
    await auth
            .onAuthStateChanged(user)
            .then((user) => dispatch(saveUserInStore(user)))
            .catch((error) => dispatch(saveUserError(error)));
  }
};

export const login = (email, password) => {
  return async dispatch => {
    await auth.signInWithEmailAndPassword(email, password)
  }
};

export const logOutUserLocally = () => {
  type: 'LOGOUT_USER'
};

export const logout = () => {
  return async dispatch => {
    await auth.signOut();

    dispatch({ type: 'LOGOUT_USER' });
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
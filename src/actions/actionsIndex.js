import { workouts } from '../base';

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  payload: user,
});

export const postWorkout = (workout) => ({
  type: 'POST_WORKOUT',
  payload: workout,
});

export const signUpUser = (user) => ({
  type: 'SIGNUP_USER',
  payload: user,
});

// export const getWorkouts = ({
//   return dispatch => {
//     workouts.on('value', snapshot => {
//       dispatch({
//         type: 'GET_WORKOUTS',
//         payload: snapshot.val(),
//       })
//     })
//   }
// })
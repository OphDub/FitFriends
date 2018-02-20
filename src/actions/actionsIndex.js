import { workouts } from '../base';

// import Firebase from 'firebase';
// const workouts = new Firebase('***REMOVED***');

const INITIAL_WORKOUTS = [
  {
    workoutName: 'local sample workout name 1',
    workoutDesc: 'local sample workout desc',
    exercises: [
      { reps: 10, exercise: 'sample exercise1'},
      { reps: 10, exercise: 'sample exercise2'},
    ]
  },
  {
    workoutName: 'local sample workout name 2',
    workoutDesc: 'local sample workout desc',
    exercises: [
      { reps: 10, exercise: 'sample exercise1'},
      { reps: 10, exercise: 'sample exercise2'},
    ]
  },
]

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

export const getWorkouts = () => {
  return dispatch => {
    workouts.on('value', snapshot => {
      dispatch({
        type: 'GET_WORKOUTS',
        payload: snapshot.val()
      })
    })
  }
}
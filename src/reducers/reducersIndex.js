import { combineReducers } from 'redux';
import { handleLoginReducer } from './handleLoginReducer';
import { postWorkoutReducer } from './postWorkoutReducer';
import { signUpUserReducer } from './signUpUserReducer';

const rootReducer = combineReducers({
  activeUser: handleLoginReducer,
  workouts: postWorkoutReducer,
  newUser: signUpUserReducer,
});

export default rootReducer;
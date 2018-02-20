import { combineReducers } from 'redux';
import { handleLoginReducer } from './handleLoginReducer';
import { workoutsReducer } from './workoutsReducer';
import { signUpUserReducer } from './signUpUserReducer';

const rootReducer = combineReducers({
  activeUser: handleLoginReducer,
  workouts: workoutsReducer,
  newUser: signUpUserReducer,
});

export default rootReducer;
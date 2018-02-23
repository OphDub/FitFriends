import { combineReducers } from 'redux';
import { handleLoginReducer } from './handleLoginReducer';
import { workoutsReducer } from './workoutsReducer';
import { signUpUserReducer } from './signUpUserReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  activeUser: handleLoginReducer,
  workouts: workoutsReducer,
  newUser: signUpUserReducer,
});

export default rootReducer;
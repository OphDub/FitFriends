import { combineReducers } from 'redux';
import { handleLoginReducer } from './handleLoginReducer';
import { postWorkoutReducer } from './postWorkoutReducer';

const rootReducer = combineReducers({
  activeUser: handleLoginReducer,
  workouts: postWorkoutReducer,
});

export default rootReducer;
import { combineReducers } from 'redux';
import { workoutsReducer } from './workoutsReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  workouts: workoutsReducer,
});

export default rootReducer;
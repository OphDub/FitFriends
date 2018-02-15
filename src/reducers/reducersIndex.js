import { combineReducers } from 'redux';
import { handleLoginReducer } from './handleLoginReducer';

const rootReducer = combineReducers({
  activeUser: handleLoginReducer,
});

export default rootReducer;
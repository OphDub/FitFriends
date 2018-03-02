export const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_WORKOUTS':
      return action.workouts;
    case 'DELETE_WORKOUT':
      return 
    default:
      return state;
  }
};
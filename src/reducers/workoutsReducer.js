export const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_WORKOUTS':
      return action.workouts;
    default:
      return state;
  }
};
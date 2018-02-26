export const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case 'POST_WORKOUT':
      return [...state, action.workouts];
    case 'SAVE_WORKOUTS':
      return action.workouts;
    default:
      return state;
  }
};
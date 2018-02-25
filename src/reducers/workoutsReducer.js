export const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case 'POST_WORKOUT':
      return [...state, action.workouts];
    case 'GET_WORKOUTS':
      return action.workouts;
    default:
      return state;
  }
};
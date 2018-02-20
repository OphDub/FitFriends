export const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case 'POST_WORKOUT':
      return [...state, action.payload];
    case 'GET_WORKOUTS':
      return action.payload;
    default:
      return state;
  }
};
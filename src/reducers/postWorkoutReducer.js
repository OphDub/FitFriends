export const postWorkoutReducer = (state = [], action) => {
  switch (action.type) {
    case 'POST_WORKOUT':
      return [...state, action.payload];
    default:
      return state;
  }
};
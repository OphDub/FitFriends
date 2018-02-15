export const signUpUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNUP_USER':
      return action.payload;
    default:
      return state;
  }
}
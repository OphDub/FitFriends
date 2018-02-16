export const signUpUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'SIGNUP_USER':
      return action.payload;
    default:
      return state;
  }
}
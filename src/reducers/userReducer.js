export const userReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case 'GET_USER':
      return { loggedIn: true, ...action.payload };
    case 'LOGIN_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return action.payload;
    case 'CREATE_USER':
      return action.payload;
    default:
      return state;
  }
}
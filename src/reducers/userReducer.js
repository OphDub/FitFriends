export const userReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case 'GET_USER':
      return { loggedIn: true, email: action.user.email };
    case 'LOGIN_USER':
      return action;
    case 'LOGOUT_USER':
      return action;
    case 'CREATE_USER':
      return action;
    default:
      return state;
  }
}
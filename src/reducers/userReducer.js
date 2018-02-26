export const userReducer = (state = { loggedIn: false, email: null }, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return { loggedIn: true, email: action.user.email };
    case 'LOGOUT_USER':
      return { loggedIn: false, email: null };
    default:
      return state;
  }
};
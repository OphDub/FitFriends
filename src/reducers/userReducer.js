export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.payload;
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
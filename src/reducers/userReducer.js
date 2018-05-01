const initialUser = {
  loggedIn: false,
  email: null,
  uid: null,
  displayName: null,
  phoneNumber: null,
};

export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        loggedIn: true,
        email: action.user.email,
        uid: action.user.uid,
        displayName: action.user.displayName,
        phoneNumber: action.user.phoneNumber,
      };
    case 'LOGOUT_USER':
      return initialUser;
    default:
      return state;
  }
};
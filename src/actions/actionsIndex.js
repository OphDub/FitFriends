export const saveUserInStore = (user) => ({
  type: 'SAVE_USER',
  user
});

export const logOutUserLocally = () => ({
  type: 'LOGOUT_USER'
});

export const saveWorkoutsInStore = (workouts) => ({
  type: 'SAVE_WORKOUTS',
  workouts
});
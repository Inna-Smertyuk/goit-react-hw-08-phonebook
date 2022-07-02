const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsFetchingUser = state => state.auth.isFetchingUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingUser,
};
export default authSelectors;

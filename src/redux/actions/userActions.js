import * as actions from "./actionTypes";

export const persistUser = (user) => async (dispatch) => {
  if (sessionStorage.getItem("user")) {
    await dispatch({
      type: actions.LOGIN,
      payload: user,
    });
  }
};
export const handleLogin = (user) => async (dispatch) => {
  await dispatch({ type: actions.LOGIN, payload: user });
};
export const handleLogout = () => ({
  type: actions.LOGOUT,
});

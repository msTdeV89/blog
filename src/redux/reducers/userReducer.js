import * as actions from "../actions/actionTypes";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_STATUS_CHANGED:
      return { ...state, user: action.payload };
    case actions.LOGIN:
      return { ...state, user: action.payload };
    case actions.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;

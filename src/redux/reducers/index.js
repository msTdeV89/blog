import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  global: globalReducer,
  posts: postsReducer,
  user: userReducer,
});

export default rootReducer;

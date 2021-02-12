import * as actions from "../actions/actionTypes";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.POSTS_GET:
      return { ...state, posts: [...action.payload] };
    default:
      return state;
  }
};

export default postsReducer;

import * as types from "../actions/actionTypes";

const initialState = {
  posts:[]
};

const twitterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS_SUCCESS:
      return { ...state, posts: action.posts };
    case types.ADD_POST:
      return { ...state };
    case types.REMOVE_POST:
      return { ...state };
    default:
      return state;
  }
};

export default twitterReducer;

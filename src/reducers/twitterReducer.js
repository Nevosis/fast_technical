import * as types from "../actions/actionTypes";

const initialState = {
  posts: [],
  lastId: -1
};

const twitterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.posts,
        lastId: action.posts[action.posts.length - 1].id
      };
    }
    case types.ADD_POST: {
      let newPost = { id: state.lastId + 1, ...action.post };

      return {
        ...state,
        posts: [newPost, ...state.posts],
        lastId: state.lastId + 1
      };
    }
    case types.REMOVE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.id)
      };
    }
    case types.UPDATE_POST: {
      const updatedPosts = state.posts.map(post => {
        if (post.id === action.id) {
          return { ...post, body: action.body };
        }
        return post;
      });

      return {
        ...state,
        posts: updatedPosts
      };
    }
    default:
      return state;
  }
};

export default twitterReducer;

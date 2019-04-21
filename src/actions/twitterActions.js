import * as types from "./actionTypes";
import twitterApi from "../api/twitterApi";

function startGetPosts() {
  return { type: types.START_GET_POSTS };
}
function getPostsSuccess(posts) {
  return { type: types.GET_POSTS_SUCCESS, posts };
}
function getPostsError(err) {
  return { type: types.GET_POSTS_ERROR, err };
}

export function getPosts() {
  return function(dispatch, getState) {
    dispatch(startGetPosts());
    twitterApi.getPosts().then((posts) => {
      console.warn(posts)
      dispatch(getPostsSuccess(posts));
    }).catch((err) => {
      console.warn(err)
      dispatch(getPostsError(err));
    });
  };
}

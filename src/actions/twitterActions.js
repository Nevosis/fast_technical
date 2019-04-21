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
    twitterApi
      .getPosts()
      .then(posts => {
        let postsFormatted = formatPosts(posts);
        dispatch(getPostsSuccess(postsFormatted));
      })
      .catch(err => {
        dispatch(getPostsError(err));
      });
  };
}

export function addPost(title, body) {
  return { type: types.ADD_POST, post: { title, body } };
}
export function removePost(id) {
  return { type: types.REMOVE_POST, id };
}
export function updatePost(id, body) {
  return { type: types.UPDATE_POST, id, body };
}

function formatPosts(posts) {
  let postsFormatted = [];
  posts.forEach(post => {
    postsFormatted.push({
      id: post.id,
      title: post.title,
      body: post.body.replace(/[\n\r]/g, " ")
    });
  });
  return postsFormatted;
}

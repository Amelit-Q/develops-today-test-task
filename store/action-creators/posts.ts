import { PostsAction, PostsActionTypes } from "./../../types/fetchPosts";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POSTS });
      const response = await axios.get("https://simple-blog-api.crew.red/posts");
      setTimeout(() => {
        dispatch({ type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response.data });
      }, 1000);
    } catch (e) {
      dispatch({
        type: PostsActionTypes.FETCH_POSTS_ERROR,
        payload: "Failed to fetch from server",
      });
    }
  };
};

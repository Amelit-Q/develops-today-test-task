import { FullPostAction, FullPostActionTypes } from "./../../types/fetchFullPost";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchPost = (id) => {
  return async (dispatch: Dispatch<FullPostAction>) => {
    try {
      const response = await axios.get(
        `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`,
      );
      dispatch({ type: FullPostActionTypes.FETCH_FULL_POST, payload: response.data });
    } catch (e) {
      dispatch({
        type: FullPostActionTypes.FETCH_FULL_POST_ERROR,
        payload: "Failed to fetch a post from the server",
      });
    }
  };
};

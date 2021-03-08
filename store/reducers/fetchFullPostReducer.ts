import { FullPostAction, FullPostActionTypes, PostState } from "./../../types/fetchFullPost";

const initialState: PostState = {
  post: [],
  error: null,
};

export const fullPostReducer = (state = initialState, action: FullPostAction) => {
  switch (action.type) {
    case FullPostActionTypes.FETCH_FULL_POST:
      return { error: null, post: action.payload };
    case FullPostActionTypes.FETCH_FULL_POST_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

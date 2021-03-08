import { combineReducers } from "redux";
import { postsReducer } from "./fetchPostsReducer";
import { HYDRATE } from "next-redux-wrapper";
import { fullPostReducer } from "./fetchFullPostReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  post: fullPostReducer,
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;

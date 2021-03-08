import { PostsAction, PostsActionTypes, PostsState } from "../../types/fetchPosts";

const initialState: PostsState = {
  posts: [],
  error: null,
  loading: false,
  // id: 0,
  // text: "",
  // title: "",
};

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return { ...state, loading: true, error: null, posts: [] };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, error: null, posts: action.payload };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload, posts: [] };
    default:
      return state;
  }
};

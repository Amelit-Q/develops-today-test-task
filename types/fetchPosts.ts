export interface PostsState {
  posts: any[];
  error: null | string;
  loading: boolean;
}

export enum PostsActionTypes {
  // SET_ID = "SET_ID",
  // SET_TITLE = "SET_TITLE",
  // SET_TEXT = "SET_TEXT",
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
}

interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: any[];
}

interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

export type PostsAction = FetchPostsAction | FetchPostsErrorAction | FetchPostsSuccessAction;

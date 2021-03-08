export interface IComment {
  id: number;
  postId: number;
  body: string;
}

export interface IFullPost {
  id: number;
  title: string;
  body: string;
  comments: IComment[];
}

export interface PostState {
  post: IFullPost[];
  error: string;
}

export enum FullPostActionTypes {
  FETCH_FULL_POST = "FETCH_FULL_POST",
  FETCH_FULL_POST_ERROR = "FETCH_FULL_POST_ERROR",
}

interface FetchFullPostAction {
  type: FullPostActionTypes.FETCH_FULL_POST;
  payload: IFullPost[];
}

interface FetchFullPostErrorAction {
  type: FullPostActionTypes.FETCH_FULL_POST_ERROR;
  payload: string;
}

export type FullPostAction = FetchFullPostAction | FetchFullPostErrorAction;

export interface IInfoState {
  info: IInfo[];
  loading: boolean;
  errors: null | string;
}

interface FetchInfoAction {
  type: InfoActionTypes.FETCH_INFO;
}

interface FetchInfoActionSuccess {
  type: InfoActionTypes.FETCH_INFO_SUCCESS;
  payload: IInfo[];
}

interface FetchInfoActionError {
  type: InfoActionTypes.FETCH_INFO_ERROR;
  payload: string;
}

export type InfoAction =
  | FetchInfoAction
  | FetchInfoActionSuccess
  | FetchInfoActionError;

export enum InfoActionTypes {
  FETCH_INFO = 'FETCH_INFO',
  FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS',
  FETCH_INFO_ERROR = 'FETCH_INFO_ERROR',
}

export interface IInfo {
  id: number;
  type: string;
  actor: IActor;
  created_at: string;
  public: boolean;
  payload: IPayload;
  repo: IRepo;
}

interface IActor {
  avatar_url: string;
  display_login: string;
  gravatar_id: string;
  id: number;
  login: string;
  url: string;
}

interface IRepo {
  id: number;
  name: string;
  url: string;
}

interface IRepo {
  id: number;
  name: string;
  url: string;
}

interface IPayload {
  size: number;
  ref: string;
  push_id: number;
  head: string;
  before: string;
  distinct_size: number;
  commits: any;
}

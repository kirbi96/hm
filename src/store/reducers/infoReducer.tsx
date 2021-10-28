import {IInfoState, InfoAction, InfoActionTypes} from '../../types/info';

const initialState: IInfoState = {
  info: [],
  loading: false,
  errors: null,
};

export const infoReducer = (
  state = initialState,
  action: InfoAction,
): IInfoState => {
  switch (action.type) {
    case InfoActionTypes.FETCH_INFO:
      return {loading: true, errors: null, info: []};
    case InfoActionTypes.FETCH_INFO_SUCCESS:
      return {loading: false, errors: null, info: action.payload};
    case InfoActionTypes.FETCH_INFO_ERROR:
      return {loading: false, errors: action.payload, info: []};
    default:
      return state;
  }
};

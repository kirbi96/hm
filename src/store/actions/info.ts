import {Dispatch} from 'redux';
import {InfoAction, InfoActionTypes} from '../../types/info';
import API from '../api/api';

export const fetchInfo = () => {
  return async (dispatch: Dispatch<InfoAction>) => {
    try {
      dispatch({type: InfoActionTypes.FETCH_INFO});

      const {data} = await API.info.getInfo();

      dispatch({type: InfoActionTypes.FETCH_INFO_SUCCESS, payload: data});
    } catch (e) {
      dispatch({
        type: InfoActionTypes.FETCH_INFO_ERROR,
        payload: 'Произошла ошибка',
      });
    }
  };
};

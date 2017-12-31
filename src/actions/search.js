//import * as actionTypes from '../constants/actionTypes';
import API from '../util/API';
import request from '../util/request';
import * as actionTypes from '../constants/actionTypes';
import { loading_show, loading_hide } from './loading'

const searchMovie = (text) => {
  return async dispatch => {
    dispatch(loading_show());
    try {
      let result = await request.asyncGet(`${API.search_movie}?q=${text}`);
      let resultData = await result.json();
      dispatch(saveSearchResult(resultData));
      dispatch(loading_hide());
    } catch (err) {
      console.log("Error", err);
    }
  }
};

const saveSearchResult = (data) => {
  return {
    type: actionTypes.SAVE_SEARCH_RESULT,
    data
  }
}

export { searchMovie };

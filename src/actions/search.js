//import * as actionTypes from '../constants/actionTypes';
import API from '../util/API';
import request from '../util/request';
import * as actionTypes from '../constants/actionTypes';

const searchMovie = (text) => {
  return async dispatch => {
    // dispatch(spin_show());
    try {
      let result = await request.asyncGet(`${API.search_movie}?q=${text}`);
      let resultData = await result.json();
      dispatch(saveSearchResult(resultData));
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

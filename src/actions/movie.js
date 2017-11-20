//import * as actionTypes from '../constants/actionTypes';
import API from '../util/API';
import request from '../util/request';

// 获取正在上映
const fetchInTheaters = () => {
  return async dispatch => {
    // dispatch(spin_show());
    try {
      let result = await request.asyncGet(`/${API.in_theaters}`);
      let resultData = await result.json();
      //dispatch(saveSearchHot(resultData));
    } catch (err) {
      console.log("Error", err);
    }
  }
};


export { fetchInTheaters };

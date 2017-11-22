//import * as actionTypes from '../constants/actionTypes';
import API from '../util/API';
import request from '../util/request';
import * as actionTypes from '../constants/actionTypes';

// 获取正在上映
const fetchInTheaters = () => {
  return async dispatch => {
    // dispatch(spin_show());
    try {
      let result = await request.asyncGet(API.in_theaters);
      let resultData = await result.json();
      dispatch(saveInTheaters(resultData));
    } catch (err) {
      console.log("Error", err);
    }
  }
};

const saveInTheaters = (data) => {
  return {
    type: actionTypes.SAVE_IN_THEATERS,
    data
  }
}

// 获取即将上映
const fetchComingSoon = () => {
  return async dispatch => {
    // dispatch(spin_show());
    try {
      let result = await request.asyncGet(API.coming_soon);
      let resultData = await result.json();
      dispatch(saveComingSoon(resultData));
    } catch (err) {
      console.log("Error", err);
    }
  }
};

const saveComingSoon = (data) => {
  return {
    type: actionTypes.SAVE_COMING_SOON,
    data
  }
}

export { fetchInTheaters, fetchComingSoon };

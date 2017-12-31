import API from '../util/API';
import request from '../util/request';
import * as actionTypes from '../constants/actionTypes';

// 获取正在上映
const fetchInTheaters = () => {
  return async (dispatch) => {
    try {
      let result = await request.asyncGet(API.in_theaters);
      let resultData = await result.json();
      dispatch(saveInTheaters(resultData));
    } catch (err) {
      console.warn(err);
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
  return async (dispatch) => {
    // dispatch(spin_show());
    try {
      let result = await request.asyncGet(API.coming_soon);
      let resultData = await result.json();
      dispatch(saveComingSoon(resultData));
    } catch (err) {
      console.warn(err);
    }
  }
};

const saveComingSoon = (data) => {
  return {
    type: actionTypes.SAVE_COMING_SOON,
    data
  }
}


//获取Top250
const getTopInAll = () => {
  return async (dispatch) => {
    try {
      let result = await request.asyncGet(API.top_in_all);
      let resultData = await result.json();
      dispatch(saveTopInAll(resultData));
    } catch (err) {
      console.warn(err)
    }
  }
}

const saveTopInAll = (data) => {
  return {
    type: actionTypes.SAVE_TOP_IN_ALL,
    data
  }
}

//获取北美排行榜
const getTopInNa = () => {
  return async (dispatch) => {
    try {
      let result = await request.asyncGet(API.top_in_na);
      let resultData = await result.json();
      dispatch(saveTopInNa(resultData));
    } catch (err) {
      console.warn(err)
    }
  }
}

const saveTopInNa = (data) => {
  return {
    type: actionTypes.SAVE_TOP_IN_NA,
    data
  }
}

export { fetchInTheaters, fetchComingSoon, getTopInAll, getTopInNa };

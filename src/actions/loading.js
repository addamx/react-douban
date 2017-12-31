import * as actionTypes from '../constants/actionTypes';
const loading_show = () => {
  return {
    type: actionTypes.LOADING_SHOW
  }
};
const loading_hide = () => {
  return {
    type: actionTypes.LOADING_HIDE
  }
};

export { loading_show, loading_hide };

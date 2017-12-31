import * as actionTypes from '../constants/actionTypes';

const Loading = (state = false, action) => {
  switch (action.type) {
    case actionTypes.LOADING_HIDE:
      return false;
    case actionTypes.LOADING_SHOW:
      return true;
    default:
      return state;
  }
};
export { Loading };

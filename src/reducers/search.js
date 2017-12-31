import * as actionTypes from '../constants/actionTypes'

const initState = []

const SearchResult = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_SEARCH_RESULT:
        return action.data;
        break;
    default:
        return state
  }
}
export {SearchResult};

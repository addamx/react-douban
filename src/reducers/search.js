import * as actionTypes from '../constants/actionTypes'

const initState = {
  title: '默认搜索标题',
  subjects: []
}

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

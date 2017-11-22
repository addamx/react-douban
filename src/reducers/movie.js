import * as actionTypes from '../constants/actionTypes'

const initState = {
  count: '99',
  subjects: []
}

const InTheaters = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_IN_THEATERS:
        return action.data;
        break;
    default:
        return state
  }
}
export {InTheaters};
import * as actionTypes from '../constants/actionTypes'

const initInTheaters = {
  subjects: []
}

const InTheaters = (state = initInTheaters, action) => {
  switch (action.type) {
    case actionTypes.SAVE_IN_THEATERS:
        return action.data;
        break;
    default:
        return state
  }
}

const initComingSoon = {
  subjects: []
}
const ComingSoon = (state = initComingSoon, action) => {
  switch (action.type) {
    case actionTypes.SAVE_COMING_SOON:
      return action.data;
      break;
    default:
      return state
  }
}


export { InTheaters, ComingSoon};

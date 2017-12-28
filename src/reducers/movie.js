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

const initTopInAll = {
  subjects: []
}
const TopInAll = (state = initTopInAll, action) => {
  switch (action.type) {
    case actionTypes.SAVE_TOP_IN_ALL:
      return action.data;
      break;
    default:
      return state
  }
}

const initTopInNa = {
  subjects: []
}
const TopInNa = (state = initTopInNa, action) => {
  switch (action.type) {
    case actionTypes.SAVE_TOP_IN_NA:
      return action.data;
      break;
    default:
      return state
  }
}

export { InTheaters, ComingSoon, TopInAll, TopInNa};

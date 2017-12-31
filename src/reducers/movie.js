import * as actionTypes from '../constants/actionTypes'
import * as Storage from '../util/localStorage'

const initInTheaters = null

const InTheaters = (state = JSON.parse(Storage.getItem('InTheaters')) || initInTheaters, action) => {
  switch (action.type) {
    case actionTypes.SAVE_IN_THEATERS:
      Storage.setItem('InTheaters', JSON.stringify(action.data))
      return action.data;
      break;
    default:
        return state
  }
}

const initComingSoon = null

const ComingSoon = (state = JSON.parse(Storage.getItem('ComingSoon')) || initComingSoon, action) => {
  switch (action.type) {
    case actionTypes.SAVE_COMING_SOON:
      Storage.setItem('ComingSoon', JSON.stringify(action.data))
      return action.data;
      break;
    default:
      return state
  }
}

const initTopInAll = null

const TopInAll = (state = JSON.parse(Storage.getItem('TopInAll')) || initTopInAll, action) => {
  switch (action.type) {
    case actionTypes.SAVE_TOP_IN_ALL:
      Storage.setItem('TopInAll', JSON.stringify(action.data))
      return action.data;
      break;
    default:
      return state
  }
}

const initTopInNa = null

const TopInNa = (state = JSON.parse(Storage.getItem('TopInNa')) || initTopInNa, action) => {
  switch (action.type) {
    case actionTypes.SAVE_TOP_IN_NA:
      Storage.setItem('TopInNa', JSON.stringify(action.data))
      return action.data;
      break;
    default:
      return state
  }
}

export { InTheaters, ComingSoon, TopInAll, TopInNa};

import { combineReducers } from 'redux';
import { InTheaters, ComingSoon, TopInAll, TopInNa} from './movie';
import {SearchResult} from './search'
import {Loading} from './loading'

export default combineReducers({
  InTheaters,
  ComingSoon,
  TopInAll,
  TopInNa,
  SearchResult,
  Loading
});

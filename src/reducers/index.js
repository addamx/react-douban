import { combineReducers } from 'redux';
import { InTheaters, ComingSoon} from './movie';
import {SearchResult} from './search'

export default combineReducers({
  InTheaters,
  ComingSoon,
  SearchResult
});

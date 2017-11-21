import { combineReducers } from 'redux';
import {InTheaters} from './movie';
import {SearchResult} from './search'

export default combineReducers({
  InTheaters,
  SearchResult
});

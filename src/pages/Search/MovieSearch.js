import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions/search';
import MovieSearch from '../../components/Search/MovieSearch';

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchActions: bindActionCreators(searchActions, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);

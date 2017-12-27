import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions/movie';
import Movie from '../../components/Movie';

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchActions: bindActionCreators(searchActions, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);

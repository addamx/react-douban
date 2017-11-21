import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../../actions/movie';
import Home from '../../components/Home';

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    movieActions: bindActionCreators(movieActions, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

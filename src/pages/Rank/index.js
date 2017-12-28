import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fetchRank from '../../actions/movie';
import Rank from '../../components/Rank';

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRank: bindActionCreators(fetchRank, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Rank);

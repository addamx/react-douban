import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Movie from '../../components/Movie';

const mapStateToProps = (state) => {
  return state;
};;
export default connect(mapStateToProps)(Movie);

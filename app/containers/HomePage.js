import Home from '../components/Home';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    dataset: state.datasetReducer.dataset
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

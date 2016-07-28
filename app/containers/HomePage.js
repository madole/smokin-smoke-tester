import Home from '../components/Home';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as deleteActions from '../actions/dataset-actions';

function mapStateToProps(state) {
  return {
    dataset: state.datasetReducer.dataset
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(deleteActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SpendOverTime from '../components/spend-over-time/spend-over-time-component';
import * as datasetActions from '../actions/dataset-actions';

function mapStateToProps(state) {
  return {
    dataset: state.datasetReducer.dataset
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(datasetActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpendOverTime);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewTable from '../components/view-table/view-table-component';
import * as datasetActions from '../actions/dataset-actions';

function mapStateToProps(state) {
  return {
    dataset: state.datasetReducer.dataset
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(datasetActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTable);

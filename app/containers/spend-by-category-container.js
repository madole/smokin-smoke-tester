import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SpendByCategory from '../components/spend-by-category/spend-by-category-component';
import * as datasetActions from '../actions/dataset-actions';

function mapStateToProps(state) {
  return {
    dataset: state.datasetReducer.dataset
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(datasetActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpendByCategory);

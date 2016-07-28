import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UploadFile from '../components/upload-file/upload-file-component';
import * as datasetActions from '../actions/dataset-actions';

function mapStateToProps(state) {
  return {
    dataset: state.datasetReducer.dataset
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(datasetActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadFile);

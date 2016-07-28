import Results from '../components/Results';
import * as crawlerActions from '../actions/crawler-actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    crawler: state.crawler
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(crawlerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);

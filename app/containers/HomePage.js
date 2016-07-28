import Home from '../components/Home';
import * as crawlerActions from '../actions/crawler-actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(crawlerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

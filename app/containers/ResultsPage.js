import Results from '../components/Results';
import * as crawlerActions from '../actions/crawler-actions';
import * as filterActions from '../actions/filter-actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const {
  ALL,
  WARNING,
  SUCCESS,
  FAILURE
} = filterActions;


function getFilteredItems(items = [], filter) {
  switch (filter) {
    case ALL:
      return items;
    case WARNING:
      return items.filter(item => item.status === WARNING);
    case SUCCESS:
      return items.filter(item => item.status === SUCCESS);
    case FAILURE:
      return items.filter(item => item.status === FAILURE);
    default:
      return items;
  }
}

function mapStateToProps(state) {
  let items = state.crawler && state.crawler.items || [];
  return {
    crawler: state.crawler,
    filteredItems: getFilteredItems(items, state.filter.filter)
  };
}

function mapActionCreatorsToProps(dispatch) {
  const crawlerActionCreators = bindActionCreators(crawlerActions, dispatch);
  const filterActionCreators = bindActionCreators(filterActions, dispatch);
  return {
    ...crawlerActionCreators,
    ...filterActionCreators
  };
  // return bindActionCreators(crawlerActions, dispatch);
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(Results);

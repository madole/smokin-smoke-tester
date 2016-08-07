import Results from '../components/Results';
import * as crawlerActions from '../actions/crawler-actions';
import * as filterActions from '../actions/filter-actions';
import * as sortActions from '../actions/sort-actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const {
  ALL,
  WARNING,
  SUCCESS,
  FAILURE
} = filterActions;

const {
  SORT_RESPONSE_TIME_ASC,
  SORT_RESPONSE_TIME_DESC
} = sortActions;

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

function sortItems(items = [], sortBy) {
  switch (sortBy) {
    case SORT_RESPONSE_TIME_ASC:
      return items.sort((a, b) => a.responseTime - b.responseTime);
    case SORT_RESPONSE_TIME_DESC:
      return items.sort((a, b) => b.responseTime - a.responseTime);
    default:
      return items;
  }
}

function filterAndSortItems(items = [], filter, sortBy) {
  let newItems = Array.concat([], items);
  if (filter) {
    newItems = getFilteredItems(newItems, filter);
  }

  if (sortBy) {
    newItems = sortItems(newItems, sortBy);
  }

  return newItems;
}

function mapStateToProps(state) {
  const items = state.crawler && state.crawler.items || [];
  return {
    crawler: state.crawler,
    filteredItems: filterAndSortItems(items, state.filter.filter, state.sort.sortBy)
  };
}

function mapActionCreatorsToProps(dispatch) {
  const crawlerActionCreators = bindActionCreators(crawlerActions, dispatch);
  const filterActionCreators = bindActionCreators(filterActions, dispatch);
  const sortActionCreators = bindActionCreators(sortActions, dispatch);
  return {
    ...crawlerActionCreators,
    ...filterActionCreators,
    ...sortActionCreators
  };
  // return bindActionCreators(crawlerActions, dispatch);
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(Results);

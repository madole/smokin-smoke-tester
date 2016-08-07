import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import crawler from './crawler-reducer';
import filter from './filter-reducer';
import sort from './sort-reducer';

const rootReducer = combineReducers({
  routing,
  crawler,
  filter,
  sort
});

export default rootReducer;

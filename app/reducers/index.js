import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import crawler from './crawler-reducer';
import filter from './filter-reducer';

const rootReducer = combineReducers({
  routing,
  crawler,
  filter
});

export default rootReducer;

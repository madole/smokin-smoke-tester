import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import crawler from './crawler-reducer';

const rootReducer = combineReducers({
  routing,
  crawler
});

export default rootReducer;

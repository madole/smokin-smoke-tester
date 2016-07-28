import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import datasetReducer from './dataset-reducer';

const rootReducer = combineReducers({
  routing,
  datasetReducer
});

export default rootReducer;

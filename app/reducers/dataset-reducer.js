import {
  INGEST_DATA,
  DELETE_DATASET
} from '../actions/dataset-actions';

export default (state = {}, action) => {
  switch (action.type) {
    case INGEST_DATA:
      return {
        ...state,
        dataset: action.dataset
      };
    case DELETE_DATASET:
      return {
        ...state,
        dataset: []
      };
    default:
      return state;
  }
};

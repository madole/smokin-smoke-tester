import {
  ALL,
  SUCCESS,
  FAILURE,
  WARNING
} from '../actions/filter-actions';

export default (state = {}, action) => {
  switch (action.type) {
    case ALL:
      return {
        ...state,
        filter: ALL
      };
    case SUCCESS:
      return {
        ...state,
        filter: SUCCESS
      };
    case FAILURE:
      return {
        ...state,
        filter: FAILURE
      };
    case WARNING:
      return {
        ...state,
        filter: WARNING
      };
    default:
      return state;
  }
};

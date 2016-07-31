import {
  SORT_RESPONSE_TIME_ASC,
  SORT_RESPONSE_TIME_DESC
} from '../actions/sort-actions';

export default (state = {}, action) => {
  switch (action.type) {
    case SORT_RESPONSE_TIME_ASC:
      return {
        ...state,
        sortBy: SORT_RESPONSE_TIME_ASC
      };
    case SORT_RESPONSE_TIME_DESC:
      return {
        ...state,
        sortBy: SORT_RESPONSE_TIME_DESC
      };
    default:
      return {
        ...state,
        sortBy: null
      };
  }
};

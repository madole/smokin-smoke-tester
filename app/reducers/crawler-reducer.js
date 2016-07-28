import {
  ITEM_FETCHED,
  UPDATE_STATUS
} from '../actions/crawler-actions';

export default (state = { items: [] }, action) => {
  switch (action.type) {
    case ITEM_FETCHED: {
      const items = state.items || [];
      items.push(action.item);
      return {
        ...state,
        items
      };
    }
    case UPDATE_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
};

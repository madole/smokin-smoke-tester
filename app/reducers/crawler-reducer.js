import {
  ITEM_FETCHED,
  UPDATE_STATUS,
  CLEAR_ITEMS,
  SET_META_DATA
} from '../actions/crawler-actions';

import modelItem from '../utils/itemModel';

export default (state = { items: [] }, action) => {
  switch (action.type) {
    case ITEM_FETCHED: {
      const items = state.items || [];
      items.push(modelItem(action.item));
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
    case CLEAR_ITEMS: {
      return {
        ...state,
        items: [],
        depthLimit: null,
        timeStamp: null,
        url: null,
        status: null
      };
    }
    case SET_META_DATA: {
      const { url, depthLimit, timeStamp } = action;
      return {
        ...state,
        depthLimit,
        timeStamp,
        url
      };
    }
    default:
      return state;
  }
};

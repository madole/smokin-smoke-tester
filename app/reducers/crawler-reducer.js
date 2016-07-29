import {
  CLEAR_ITEMS,
  CRAWL_START,
  CRAWL_RESULT,
  CRAWL_COMPLETE,
  SET_META_DATA
} from '../actions/crawler-actions';

import modelItem from '../utils/itemModel';

export default (state = { items: [] }, action) => {
  switch (action.type) {
    case CRAWL_RESULT: {
      const items = state.items || [];
      items.push(modelItem(action.item));
      return {
        ...state,
        items
      };
    }
    case CRAWL_START: {
      return {
        ...state,
        status: 'crawling'
      };
    }
    case CRAWL_COMPLETE: {
      return {
        ...state,
        status: 'complete'
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

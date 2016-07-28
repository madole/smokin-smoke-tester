import {
  CLEAR_ITEMS,
  CRAWL_STARTED,
  CRAWL_RESULT,
  CRAWL_COMPLETE
} from '../actions/crawler-actions';

export default (state = { items: [] }, action) => {
  switch (action.type) {
    case CRAWL_RESULT: {
      const items = state.items || [];
      items.push(action.item);
      return {
        ...state,
        items
      };
    }
    case CRAWL_STARTED: {
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
        items: []
      };
    }
    default:
      return state;
  }
};

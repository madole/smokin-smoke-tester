import { BEGIN_CRAWLING } from '../middleware/crawler';

export const ITEM_FETCHED = 'ITEM_FETCHED';
export const START_CRAWLING = 'START_CRAWLING';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const CRAWLING = 'CRAWLING';
export const COMPLETED = 'COMPLETED';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';

import crawler from '../api/crawler';

export function itemFetched(item) {
  return {
    type: ITEM_FETCHED,
    item
  };
}

export function updateStatus(status) {
  return {
    type: UPDATE_STATUS,
    status
  };
}

export function startCrawling({ url, depthLimit }) {
  return dispatch => {
    function dispatchItemFetched(item) {
      dispatch(itemFetched(item));
    }
    function dispatchUpdateStatusComplete() {
      dispatch(updateStatus(COMPLETED));
    }
    crawler({ dispatchItemFetched, dispatchUpdateStatusComplete })({ url, depthLimit });
    return dispatch(updateStatus(CRAWLING));
  };
}

export const CRAWL_STARTED = 'CRAWL_STARTED';
export const CRAWL_RESULT = 'CRAWL_RESULT';
export const CRAWL_COMPLETE = 'CRAWL_COMPLETE';

export function beginCrawling({ url, depthLimit }) {
  return {
    [BEGIN_CRAWLING]: {
      types: [CRAWL_STARTED, CRAWL_RESULT, CRAWL_COMPLETE],
      url,
      depthLimit
    }
  };
}

export function clearItems() {
  return {
    type: CLEAR_ITEMS
  };
}

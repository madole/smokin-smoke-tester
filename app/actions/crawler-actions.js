export const ITEM_FETCHED = 'ITEM_FETCHED';
export const START_CRAWLING = 'START_CRAWLING';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const CRAWLING = 'CRAWLING';
export const COMPLETED = 'COMPLETED';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const SET_META_DATA = 'SET_META_DATA';

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

export function clearItems() {
  return {
    type: CLEAR_ITEMS
  };
}

export function setMetaData({ url, depthLimit, timeStamp }) {
  return {
    type: SET_META_DATA,
    depthLimit,
    timeStamp,
    url
  };
}

import { BEGIN_CRAWLING } from '../middleware/crawler';

export const START_CRAWLING = 'START_CRAWLING';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const CRAWLING = 'CRAWLING';
export const COMPLETED = 'COMPLETED';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const SET_META_DATA = 'SET_META_DATA';

export function updateStatus(status) {
  return {
    type: UPDATE_STATUS,
    status
  };
}

export const CRAWL_START = 'CRAWL_START';
export const CRAWL_RESULT = 'CRAWL_RESULT';
export const CRAWL_COMPLETE = 'CRAWL_COMPLETE';

export function beginCrawling({ url, depthLimit, filter }) {
  return {
    [BEGIN_CRAWLING]: {
      types: [CRAWL_START, CRAWL_RESULT, CRAWL_COMPLETE],
      url,
      depthLimit,
      filter
    }
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

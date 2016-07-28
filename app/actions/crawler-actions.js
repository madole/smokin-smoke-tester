import { BEGIN_CRAWLING } from '../middleware/crawler';

export const START_CRAWLING = 'START_CRAWLING';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const CRAWLING = 'CRAWLING';
export const COMPLETED = 'COMPLETED';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';

export function updateStatus(status) {
  return {
    type: UPDATE_STATUS,
    status
  };
}

export const CRAWL_START = 'CRAWL_START';
export const CRAWL_RESULT = 'CRAWL_RESULT';
export const CRAWL_COMPLETE = 'CRAWL_COMPLETE';

export function beginCrawling({ url, depthLimit }) {
  return {
    [BEGIN_CRAWLING]: {
      types: [CRAWL_START, CRAWL_RESULT, CRAWL_COMPLETE],
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

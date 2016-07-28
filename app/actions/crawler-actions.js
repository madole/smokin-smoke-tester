export const ITEM_FETCHED = 'ITEM_FETCHED';
export const START_CRAWLING = 'START_CRAWLING';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const CRAWLING = 'CRAWLING';
export const COMPLETED = 'COMPLETED';
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

export function startCrawling() {
  return dispatch => {
    function dispatchItemFetched(item) {
      dispatch(itemFetched(item));
    }
    function dispatchUpdateStatusComplete() {
      dispatch(updateStatus(COMPLETED));
    }
    crawler({ dispatchItemFetched, dispatchUpdateStatusComplete })({ url: 'http://kitchen-website-uat.ap-southeast-2.elasticbeanstalk.com/' });
    return dispatch(updateStatus(CRAWLING));
  };
}

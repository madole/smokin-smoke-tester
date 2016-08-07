export const SORT_RESPONSE_TIME_ASC = 'SORT_RESPONSE_TIME_ASC';
export const SORT_RESPONSE_TIME_DESC = 'SORT_RESPONSE_TIME_DESC';

export function sortResponseTimeAsc() {
  return {
    type: SORT_RESPONSE_TIME_ASC
  };
}

export function sortResponseTimeDesc() {
  return {
    type: SORT_RESPONSE_TIME_DESC
  };
}
